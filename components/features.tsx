import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Cpu, Share2, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Smart Minting",
      subtitle: "Prompt to NFT",
      description: "Transform creative prompts into unique digital assets",
      benefits: [
        "Complete AI generation to NFT minting in 3 seconds",
        "Support for text, image, audio multi-modal content",
        "Automatic copyright protection and rarity verification",
        "Smart pricing and market recommendations",
      ],
      image: "/images/ai-brain.png",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Cpu,
      title: "Decentralized Computing",
      subtitle: "Decentralized Computing",
      description: "Global computing network reducing AI computation costs",
      benefits: [
        "Reduce computing costs by over 60%",
        "Support from 10,000+ global nodes",
        "Smart load balancing and scheduling",
        "Pay-as-you-go, elastic scaling",
      ],
      image: "/images/blockchain-network.png",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
    },
    {
      icon: Share2,
      title: "Open Model Protocol",
      subtitle: "Open Model Protocol",
      description: "Developers upload models and share revenue distribution",
      benefits: [
        "Automatic distribution of model usage revenue",
        "Version management and quality assessment",
        "Developer incentive mechanisms",
        "Community governance and voting",
      ],
      image: "/images/crypto-ai-1.png",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: TrendingUp,
      title: "Liquidity Mining",
      subtitle: "Liquidity Mining",
      description: "NFT trading mining for continuous revenue",
      benefits: [
        "Trade to mine, earn AIMINT tokens",
        "Continuous royalty income distribution",
        "Liquidity provider rewards",
        "Governance rights and voting power",
      ],
      image: "/images/crypto-ai-2.png",
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-50 to-teal-50",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 rounded-full text-blue-700 font-medium mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Core Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            Redefining{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AI Creation
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Transform AI-generated content into valuable digital assets through blockchain technology, building a
            complete creator economy ecosystem
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative bg-gradient-to-br ${feature.bgGradient} border-2 border-slate-200/50 hover:border-slate-300 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] transform perspective-1000 hover:-rotate-y-1`}
            >
              {/* 3D Shadow */}
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
              />

              <div className="relative z-10">
                <CardHeader className="p-6 sm:p-8">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} border-2 border-white/50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                    >
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
                        {feature.title}
                      </CardTitle>
                      <div
                        className={`text-sm font-medium bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-2 sm:mb-3`}
                      >
                        {feature.subtitle}
                      </div>
                      <CardDescription className="text-slate-600 text-base sm:text-lg">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Feature Image */}
                  <div className="relative h-36 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-500 shadow-lg">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </CardHeader>

                <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                  {/* Benefits List */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm sm:text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${feature.gradient} hover:shadow-lg text-white py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-slate-200/50 max-w-2xl mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
              Ready to start your AI creation journey?
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-6">
              Join 500K+ global creators and transform your creativity into valuable digital assets
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Creating for Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
