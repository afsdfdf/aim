"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    "AI-generated artworks instantly minted as NFTs",
    "Decentralized computing network reduces costs by 60%",
    "Global creators share model revenue distribution",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>AI + Web3 Innovation Fusion</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                <span className="block">AIMINT</span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Algorithm as Asset
                </span>
              </h1>

              {/* Dynamic Subtitle */}
              <div className="h-16 flex items-center">
                <p className="text-xl sm:text-2xl text-gray-600 font-medium transition-all duration-500">
                  {slides[currentSlide]}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Transform AI-generated content into on-chain assets, building a decentralized computing market and model
              economy ecosystem. Make every creative idea a valuable digital asset.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Creating Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { icon: Users, label: "Community Focus", value: "Growing" },
                { icon: Zap, label: "AI Innovation", value: "Advanced" },
                { icon: TrendingUp, label: "Future Vision", value: "Bright" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Visual Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              {/* Transparent Logo in top right */}
              <div className="absolute top-4 right-4 z-10">
                <Image
                  src="/logo1.png"
                  alt="AIMINT Transparent Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 opacity-30 hover:opacity-50 transition-opacity duration-300"
                />
              </div>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo1.png"
                    alt="AI Creation Studio Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">AI Creation Studio</span>
                    </div>
                    <div className="text-sm text-gray-500">Real-time Minting Demo</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full shadow-sm"></div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="space-y-4">
                {/* Input Area */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-sm text-gray-600 mb-2">Enter Creative Prompt</div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 text-gray-800 shadow-sm">
                    "A cat floating in space, cyberpunk style, neon effects"
                  </div>
                </div>

                {/* Processing */}
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-blue-700 font-medium">AI is generating artwork...</span>
                </div>

                {/* Result Preview */}
                <div className="relative h-48 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden border border-purple-200">
                  <Image
                    src="/images/cat.png"
                    alt="AI Generated Cat in Space - Cyberpunk Style"
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3">
                    <div className="text-sm font-medium">AI Generated Artwork</div>
                    <div className="text-xs opacity-75">Ready to mint as NFT</div>
                  </div>
                </div>

                {/* Mint Button */}
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Mint as NFT
                </Button>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float">
              {/* Transparent Logo */}
              <div className="absolute top-2 right-2">
                <Image
                  src="/logo1.png"
                  alt="AIMINT Transparent Logo"
                  width={24}
                  height={24}
                  className="w-4 h-4 opacity-20"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Real-time Revenue</div>
                  <div className="text-xs text-green-600">+$1,234</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float"
              style={{ animationDelay: "1s" }}
            >
              {/* Transparent Logo */}
              <div className="absolute top-2 right-2">
                <Image
                  src="/logo1.png"
                  alt="AIMINT Transparent Logo"
                  width={24}
                  height={24}
                  className="w-4 h-4 opacity-20"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Active Creators</div>
                  <div className="text-xs text-blue-600">12,345</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
