"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Sparkles, TrendingUp, Users, Zap, Download, Share2, Palette, Wand2 } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export function EnhancedDemo() {
  const [activeTab, setActiveTab] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [generatedContent, setGeneratedContent] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const demos = [
    {
      title: "AI Art Creation",
      description: "From text description to exquisite artwork",
      prompt: "A cat floating in space, cyberpunk style, neon effects",
      steps: [
        { title: "Input Creativity", desc: "Describe the artwork you want", time: "1s" },
        { title: "AI Generation", desc: "Multi-model collaborative creation", time: "2s" },
        { title: "Quality Enhancement", desc: "Automatic post-processing enhancement", time: "1s" },
        { title: "NFT Minting", desc: "One-click on-chain copyright", time: "3s" },
      ],
      result: "Unique digital art NFT",
      icon: Sparkles,
      placeholderImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=300&fit=crop&auto=format",
      resultImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop&auto=format",
      generationStages: [
        { text: "Analyzing prompt...", icon: "🔍" },
        { text: "Initializing AI art models...", icon: "🧠" },
        { text: "Generating base composition...", icon: "🎨" },
        { text: "Adding cyberpunk elements...", icon: "⚡" },
        { text: "Rendering space environment...", icon: "🌌" },
        { text: "Applying neon effects...", icon: "✨" },
        { text: "Finalizing artwork...", icon: "🎯" },
        { text: "Art generation complete!", icon: "🎉" },
      ],
      buttonText: "Generate Cyberpunk Art"
    },
    {
      title: "Music Creation",
      description: "AI-generated original music and copyright NFT minting",
      prompt: "Upbeat electronic music with ambient undertones",
      steps: [
        { title: "Style Selection", desc: "Choose music style and emotion", time: "1s" },
        { title: "Melody Generation", desc: "AI creates original melodies", time: "5s" },
        { title: "Arrangement Production", desc: "Automatic orchestration and mixing", time: "3s" },
        { title: "Copyright Minting", desc: "Music copyright NFT creation", time: "2s" },
      ],
      result: "Original music work + Copyright NFT",
      icon: Users,
      placeholderImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format",
      resultImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop&auto=format",
      generationStages: [
        { text: "Analyzing music style...", icon: "🎵" },
        { text: "Loading music AI models...", icon: "🧠" },
        { text: "Generating melody patterns...", icon: "🎼" },
        { text: "Creating harmonic structure...", icon: "🎹" },
        { text: "Adding electronic elements...", icon: "🎛️" },
        { text: "Mixing and mastering...", icon: "🎧" },
        { text: "Finalizing composition...", icon: "🎯" },
        { text: "Music generation complete!", icon: "🎉" },
      ],
      buttonText: "Generate Electronic Music"
    },
    {
      title: "Code Generation",
      description: "AI programming assistant generates smart contracts",
      prompt: "ERC-721 NFT contract with royalty distribution",
      steps: [
        { title: "Requirement Description", desc: "Describe contract functionality requirements", time: "1s" },
        { title: "Code Generation", desc: "AI writes smart contracts", time: "3s" },
        { title: "Security Audit", desc: "Automatic security checks", time: "2s" },
        { title: "Deploy On-chain", desc: "One-click deployment to blockchain", time: "5s" },
      ],
      result: "Audited smart contract",
      icon: Zap,
      placeholderImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&auto=format",
      resultImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop&auto=format",
      generationStages: [
        { text: "Parsing requirements...", icon: "📋" },
        { text: "Loading code AI models...", icon: "🧠" },
        { text: "Generating contract structure...", icon: "⚡" },
        { text: "Implementing ERC-721 logic...", icon: "💎" },
        { text: "Adding royalty distribution...", icon: "💰" },
        { text: "Running security checks...", icon: "🔒" },
        { text: "Optimizing gas usage...", icon: "⛽" },
        { text: "Smart contract ready!", icon: "🎉" },
      ],
      buttonText: "Generate Smart Contract"
    },
  ]

  const currentDemo = demos[activeTab]

  const handleGenerate = async () => {
    setIsGenerating(true)
    setProgress(0)
    setGeneratedContent(null)
    setCurrentStep(0)
    setShowResult(false)

    // Simulate AI generation process with stages
    for (let stage = 0; stage < currentDemo.generationStages.length; stage++) {
      setCurrentStep(stage)

      // Update progress for each stage
      const stageProgress = ((stage + 1) / currentDemo.generationStages.length) * 100

      // Animate progress within each stage
      for (let i = Math.floor(progress); i <= stageProgress; i += 2) {
        setProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 50))
      }

      // Pause between stages
      await new Promise((resolve) => setTimeout(resolve, 300))
    }

    setGeneratedContent("Generated successfully!")
    setShowResult(true)
    setIsGenerating(false)
  }

  // Auto-reset demo after showing result
  useEffect(() => {
    if (showResult) {
      const timer = setTimeout(() => {
        setShowResult(false)
        setGeneratedContent(null)
        setProgress(0)
        setCurrentStep(0)
      }, 10000) // Reset after 10 seconds

      return () => clearTimeout(timer)
    }
  }, [showResult])

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 font-medium mb-6 shadow-lg backdrop-blur-sm">
            <Play className="w-4 h-4" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Experience{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">AIMint</span>{" "}
            Live
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try our AI-powered creation tools and see how your ideas transform into valuable digital assets in real-time
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 bg-white p-2 rounded-2xl shadow-lg border border-gray-100">
            {demos.map((demo, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 p-4 rounded-xl text-left transition-all duration-300 group ${
                  activeTab === index
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <demo.icon className={`w-5 h-5 ${activeTab === index ? "text-white" : "text-blue-500"}`} />
                  <div className="font-semibold">{demo.title}</div>
                </div>
                <div className={`text-sm ${activeTab === index ? "text-blue-100" : "text-gray-500"}`}>
                  {demo.description}
                </div>
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Process Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{currentDemo.title} Process</h3>

              {currentDemo.steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 group p-4 rounded-xl transition-all duration-300 ${
                    isGenerating && progress >= (index + 1) * 25
                      ? "bg-green-50 border border-green-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      isGenerating && progress >= (index + 1) * 25
                        ? "bg-green-500 text-white scale-110"
                        : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    {isGenerating && progress >= (index + 1) * 25 ? "✓" : index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <span className="text-sm text-blue-600 font-medium">{step.time}</span>
                    </div>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}

              {/* Result */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-gray-900">Final Result</span>
                </div>
                <p className="text-gray-700">{currentDemo.result}</p>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="relative">
              <Card className="p-8 bg-white border-2 border-gray-100 shadow-xl rounded-3xl">
                {/* Transparent Logo in top right */}
                <div className="absolute top-4 right-4 z-10">
                  <Image
                    src="/logo1.png"
                    alt="AIMint Transparent Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 opacity-30 hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                
                {/* Demo Interface */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/logo1.png"
                        alt="AI Creation Studio Logo"
                        width={28}
                        height={28}
                        className="w-7 h-7"
                      />
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">AI Creation Studio</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Creative Prompt</div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-800 shadow-sm">
                      {currentDemo.prompt}
                    </div>
                  </div>

                  {/* Generation Status */}
                  {isGenerating && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{currentDemo.generationStages[currentStep]?.icon}</span>
                          <span className="text-gray-600">{currentDemo.generationStages[currentStep]?.text}</span>
                        </div>
                        <span className="text-blue-600 font-medium">{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-300 relative overflow-hidden"
                          style={{ width: `${progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Output Preview */}
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {showResult ? (
                      <div className="relative w-full h-full animate-fadeInUp">
                        <Image
                          src={currentDemo.resultImage}
                          alt={`Generated ${currentDemo.title} result`}
                          fill
                          className="object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                            <div className="text-sm font-semibold text-gray-900">{currentDemo.title} Result</div>
                            <div className="text-xs text-gray-600">AI Generated • Ready to mint as NFT</div>
                          </div>
                        </div>
                      </div>
                    ) : generatedContent ? (
                      <div className="text-center animate-fadeInUp">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-gray-700 font-medium">Generation Complete!</div>
                        <div className="text-sm text-gray-500 mt-1">{currentDemo.result}</div>
                      </div>
                    ) : isGenerating ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={currentDemo.placeholderImage}
                          alt={`${currentDemo.title} preview`}
                          fill
                          className="object-cover rounded-xl opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl animate-spin">{currentDemo.generationStages[currentStep]?.icon}</span>
                            </div>
                            <div className="font-medium">{currentDemo.generationStages[currentStep]?.text}</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={currentDemo.placeholderImage}
                          alt={`${currentDemo.title} placeholder`}
                          fill
                          className="object-cover rounded-xl opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2">
                              {React.createElement(currentDemo.icon, { className: "w-6 h-6 text-white" })}
                            </div>
                            <div className="font-medium">Ready to Generate</div>
                            <div className="text-sm opacity-75">Click below to start AI creation</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isGenerating ? (
                        <>
                          <Wand2 className="mr-2 w-4 h-4 animate-spin" />
                          Generating {currentDemo.title}...
                        </>
                      ) : (
                        <>
                          <Palette className="mr-2 w-4 h-4" />
                          {currentDemo.buttonText}
                        </>
                      )}
                    </Button>

                    {showResult && (
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1 rounded-xl">
                          <Download className="mr-2 w-4 h-4" />
                          Download
                        </Button>
                        <Button variant="outline" className="flex-1 rounded-xl">
                          <Share2 className="mr-2 w-4 h-4" />
                          Mint NFT
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 animate-float">
                {/* Transparent Logo */}
                <div className="absolute top-2 right-2">
                  <Image
                    src="/logo1.png"
                    alt="AIMint Transparent Logo"
                    width={24}
                    height={24}
                    className="w-4 h-4 opacity-20"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Success Rate</div>
                    <div className="text-lg font-bold text-green-600">99.9%</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 animate-float"
                style={{ animationDelay: "1s" }}
              >
                {/* Transparent Logo */}
                <div className="absolute top-2 right-2">
                  <Image
                    src="/logo1.png"
                    alt="AIMint Transparent Logo"
                    width={24}
                    height={24}
                    className="w-4 h-4 opacity-20"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Active Users</div>
                    <div className="text-lg font-bold text-blue-600">12,345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Your First AI Asset?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of creators who are already transforming their ideas into valuable digital assets
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">
                  Start Creating Now
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  Watch Full Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
