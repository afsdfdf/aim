import { NextRequest, NextResponse } from 'next/server';

interface GenerateImageRequest {
  prompt: string;
  model?: string;
  image_size?: string;
  batch_size?: number;
  num_inference_steps?: number;
  guidance_scale?: number;
}

interface SiliconFlowResponse {
  images: Array<{ url: string }>;
  timings: { inference: number };
  seed: number;
  shared_id: string;
  data: Array<{ url: string }>;
  created: number;
}

export async function POST(request: NextRequest) {
  try {
    const {
      prompt,
      model = 'Kwai-Kolors/Kolors',
      image_size = '1024x1024',
      batch_size = 1,
      num_inference_steps = 20,
      guidance_scale = 7.5,
    } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // 调用SiliconFlow API
    const options = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk-plzzktolkbrcgwmmebprgsrolavtgiplwmqjmawwenvehebe',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        prompt,
        image_size,
        batch_size,
        num_inference_steps,
        guidance_scale
      })
    };

    const response = await fetch('https://api.siliconflow.cn/v1/images/generations', options);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('SiliconFlow API Error:', errorText);
      return NextResponse.json(
        { error: 'Failed to generate image', details: errorText },
        { status: response.status }
      );
    }

    const data: SiliconFlowResponse = await response.json();
    
    return NextResponse.json({
      success: true,
      data: {
        images: data.images,
        timings: data.timings,
        seed: data.seed,
        shared_id: data.shared_id,
        created: data.created,
        prompt: prompt,
        model: model
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'AI Image Generation API',
    endpoints: {
      POST: '/api/generate-image',
      description: 'Generate images using AI with SiliconFlow API'
    },
    parameters: {
      prompt: 'string (required) - Description of the image to generate',
      model: 'string (optional) - AI model to use, default: Kwai-Kolors/Kolors',
      image_size: 'string (optional) - Image dimensions, default: 1024x1024',
      batch_size: 'number (optional) - Number of images to generate, default: 1',
      num_inference_steps: 'number (optional) - Generation steps, default: 20',
      guidance_scale: 'number (optional) - Guidance scale, default: 7.5'
    }
  });
}