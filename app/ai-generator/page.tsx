'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Download, Share2, Settings, Image as ImageIcon, Wand2, Copy, RefreshCw, Palette, Zap } from 'lucide-react';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';

interface GenerationResult {
  images: Array<{ url: string }>;
  timings: { inference: number };
  seed: number;
  shared_id: string;
  created: number;
  prompt: string;
  model: string;
}

interface GenerationParams {
  prompt: string;
  model: string;
  image_size: string;
  batch_size: number;
  num_inference_steps: number;
  guidance_scale: number;
}

export default function AIGeneratorPage() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationResult, setGenerationResult] = useState<GenerationResult | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  
  const [params, setParams] = useState<GenerationParams>({
    prompt: '',
    model: 'Kwai-Kolors/Kolors',
    image_size: '1024x1024',
    batch_size: 1,
    num_inference_steps: 20,
    guidance_scale: 7.5
  });

  const presetPrompts = [
    "A majestic dragon soaring through clouds at sunset, fantasy art style",
    "Cyberpunk cityscape with neon lights reflecting on wet streets",
    "A serene Japanese garden with cherry blossoms and a traditional bridge",
    "Abstract geometric patterns in vibrant colors, modern art style",
    "A cute robot companion in a futuristic home setting",
    "Underwater coral reef with colorful fish and marine life",
    "Futuristic space station orbiting a distant planet",
    "Enchanted forest with glowing mushrooms and fairy lights"
  ];

  const models = [
    { value: 'Kwai-Kolors/Kolors', label: 'AIMINT (Recommended)' }
  ];

  const imageSizes = [
    { value: '512x512', label: '512×512' },
    { value: '768x768', label: '768×768' },
    { value: '1024x1024', label: '1024×1024 (Recommended)' },
    { value: '1024x768', label: '1024×768 (Landscape)' },
    { value: '768x1024', label: '768×1024 (Portrait)' }
  ];

  const generationSteps = [
    "Analyzing prompt...",
    "Initializing AI model...",
    "Generating base composition...",
    "Adding detail elements...",
    "Optimizing image quality...",
    "Final rendering...",
    "Generation complete!"
  ];

  const handleGenerate = async () => {
    if (!params.prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "Please describe the image content you want to generate",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setProgress(0);
    setGenerationResult(null);

    try {
      // 在提示词后添加AIMINT水印要求
      const enhancedPrompt = `${params.prompt.trim()}, add text "AIMINT" in the bottom right corner of the image`;
      const enhancedParams = { ...params, prompt: enhancedPrompt };
      
      // 模拟生成步骤
      for (let i = 0; i < generationSteps.length; i++) {
        setCurrentStep(generationSteps[i]);
        const stepProgress = ((i + 1) / generationSteps.length) * 90; // 90% for steps
        
        // 在倒数第二步调用API
        if (i === generationSteps.length - 2) {
          const response = await fetch('/api/generate-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(enhancedParams)
          });

          if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
          }

          const result = await response.json();
          if (result.success) {
            setGenerationResult(result.data);
          } else {
            throw new Error(result.error || 'API returned error');
          }
        }
        
        // 动画进度
        for (let p = Math.floor(progress); p <= stepProgress; p += 2) {
          setProgress(p);
          await new Promise(resolve => setTimeout(resolve, 30));
        }
        
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      setProgress(100);
      setCurrentStep('Generation complete!');
      
      toast({
        title: "Generation successful!",
        description: "Your AI artwork has been generated successfully"
      });
      
    } catch (error) {
      console.error('Generation failed:', error);
      toast({
        title: "Generation failed",
        description: error instanceof Error ? error.message : 'Unknown error, please try again',
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyPrompt = (prompt: string) => {
    setParams(prev => ({ ...prev, prompt }));
    toast({
      title: "Prompt copied",
      description: "Preset prompt has been filled into the input field"
    });
  };

  const downloadImage = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `aimint-generated-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:40px_40px]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl opacity-60 animate-float shadow-lg transform rotate-12" />
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl opacity-50 animate-float shadow-lg transform -rotate-12"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl opacity-40 animate-float shadow-lg transform rotate-45"
          style={{ animationDelay: "2s" }}
        />
      </div>
      
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6 shadow-lg backdrop-blur-sm">
              <Palette className="w-4 h-4" />
              <span>AI Art Creation Studio</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
              <span className="block">AIMINT</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Generator
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your creative ideas into stunning digital artworks using advanced AI technology. 
              Create, customize, and mint your unique NFT masterpieces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side: Parameter Settings */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Settings className="w-5 h-5 text-blue-600" />
                    Generation Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Prompt Input */}
                  <div className="space-y-2">
                    <Label htmlFor="prompt" className="text-gray-700 font-medium">Creative Prompt</Label>
                    <Textarea
                      id="prompt"
                      placeholder="Describe the image content you want to generate, e.g.: A cute cat floating in space, cyberpunk style, neon effects"
                      value={params.prompt}
                      onChange={(e) => setParams(prev => ({ ...prev, prompt: e.target.value }))}
                      className="min-h-[100px] resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Tabs defaultValue="basic" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                      <TabsTrigger value="basic" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Basic Settings</TabsTrigger>
                      <TabsTrigger value="advanced" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Advanced Settings</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="basic" className="space-y-4">
                      {/* Fixed Kolors Model */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">AI Model</Label>
                        <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg text-sm text-blue-700 font-medium">
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            AIMINT (Recommended)
                          </div>
                        </div>
                      </div>

                      {/* Image Size */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Image Size</Label>
                        <Select value={params.image_size} onValueChange={(value) => setParams(prev => ({ ...prev, image_size: value }))}>
                          <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {imageSizes.map((size) => (
                              <SelectItem key={size.value} value={size.value}>
                                {size.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>
                  
                    <TabsContent value="advanced" className="space-y-4">
                      {/* Inference Steps */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Inference Steps: {params.num_inference_steps}</Label>
                        <Slider
                          value={[params.num_inference_steps]}
                          onValueChange={([value]) => setParams(prev => ({ ...prev, num_inference_steps: value }))}
                          min={10}
                          max={50}
                          step={1}
                          className="w-full"
                        />
                        <div className="text-xs text-gray-500">More steps = Higher quality, but longer generation time</div>
                      </div>

                      {/* Guidance Scale */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Guidance Scale: {params.guidance_scale}</Label>
                        <Slider
                          value={[params.guidance_scale]}
                          onValueChange={([value]) => setParams(prev => ({ ...prev, guidance_scale: value }))}
                          min={1}
                          max={20}
                          step={0.5}
                          className="w-full"
                        />
                        <div className="text-xs text-gray-500">Higher value = Stricter adherence to prompt</div>
                      </div>

                      {/* Batch Generation */}
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Generation Count</Label>
                        <Select value={params.batch_size.toString()} onValueChange={(value) => setParams(prev => ({ ...prev, batch_size: parseInt(value) }))}>
                          <SelectTrigger className="border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Image</SelectItem>
                            <SelectItem value="2">2 Images</SelectItem>
                            <SelectItem value="4">4 Images</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>
                </Tabs>

                  {/* Generate Button */}
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || !params.prompt.trim()}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <Wand2 className="mr-2 w-5 h-5 animate-spin" />
                        Generating... {Math.round(progress)}%
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 w-5 h-5" />
                        Start AI Creation
                      </>
                    )}
                  </Button>

                  {/* Generation Progress */}
                  {isGenerating && (
                    <div className="space-y-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-700 font-medium">{currentStep}</span>
                        <span className="text-blue-600 font-bold">{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-300 relative overflow-hidden"
                          style={{ width: `${progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Preset Prompts */}
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <Wand2 className="w-5 h-5 text-blue-600" />
                    Creative Inspiration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {presetPrompts.map((prompt, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 rounded-xl cursor-pointer transition-all duration-300 group border border-gray-200 hover:border-blue-300 hover:shadow-md"
                        onClick={() => copyPrompt(prompt)}
                      >
                        <div className="flex items-start justify-between">
                          <p className="text-sm text-gray-700 flex-1 leading-relaxed">{prompt}</p>
                          <Copy className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-3 flex-shrink-0 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side: Result Display */}
            <div className="space-y-6">
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-900">
                    <ImageIcon className="w-5 h-5 text-blue-600" />
                    Generation Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {generationResult ? (
                    <div className="space-y-6">
                      {/* Generated Images */}
                      <div className="grid gap-4">
                        {generationResult.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg">
                              <Image
                                src={image.url}
                                alt={`Generated artwork ${index + 1}`}
                                fill
                                className="object-cover transition-all duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = '/placeholder.jpg';
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                              
                              {/* Floating Action Buttons */}
                              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    className="bg-white/90 hover:bg-white text-gray-700 shadow-lg backdrop-blur-sm"
                                    onClick={() => downloadImage(image.url)}
                                  >
                                    <Download className="w-4 h-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-white/90 hover:bg-white text-gray-700 shadow-lg backdrop-blur-sm"
                                  >
                                    <Share2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                              
                              {/* Image Quality Badge */}
                              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <Badge className="bg-white/90 text-gray-700 shadow-lg backdrop-blur-sm">
                                  AI Generated
                                </Badge>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Generation Information */}
                      <div className="grid grid-cols-2 gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <div className="text-center">
                          <div className="text-sm text-blue-600 font-medium mb-1">Generation Time</div>
                          <div className="text-lg font-bold text-gray-900">{generationResult.timings.inference.toFixed(2)}s</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-blue-600 font-medium mb-1">Seed Value</div>
                          <div className="text-lg font-bold text-gray-900">{generationResult.seed}</div>
                        </div>
                        <div className="col-span-2 text-center pt-2 border-t border-blue-200">
                          <div className="text-sm text-blue-600 font-medium mb-1">AI Model</div>
                          <div className="flex items-center justify-center gap-2">
                            <Zap className="w-4 h-4 text-blue-600" />
                            <span className="font-bold text-gray-900">AIMINT</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          onClick={handleGenerate}
                          disabled={isGenerating}
                          className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300"
                          variant="outline"
                        >
                          <RefreshCw className="mr-2 w-4 h-4" />
                          Regenerate
                        </Button>
                        <Button 
                          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => toast({
                            title: "Feature in Development",
                            description: "NFT minting functionality is coming soon!"
                          })}
                        >
                          <Sparkles className="mr-2 w-4 h-4" />
                          Mint NFT
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-square bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-200 relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
                      
                      <div className="text-center relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                          <Palette className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Create</h3>
                        <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
                          Enter your creative prompt and click the generate button to start AI artwork creation
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}