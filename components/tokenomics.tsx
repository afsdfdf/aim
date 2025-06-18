"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Coins, Users, Zap, Shield, Award, TrendingUp } from "lucide-react"

export function Tokenomics() {
  const tokenData = [
    {
      name: "Creator Incentive Pool",
      value: 60,
      amount: 6000000000,
      color: "#06b6d4",
      tge: "20%",
      cliff: "0 months",
      vesting: "24 months",
      note: "Rewards for quality prompts and data contributions",
    },
    {
      name: "Ecosystem Development Fund",
      value: 15,
      amount: 1500000000,
      color: "#3b82f6",
      tge: "20%",
      cliff: "6 months",
      vesting: "24 months",
      note: "Market development, partnerships, ecosystem support",
    },
    {
      name: "Core Team & Advisors",
      value: 10,
      amount: 1000000000,
      color: "#8b5cf6",
      tge: "25%",
      cliff: "3 months",
      vesting: "18 months",
      note: "Gradual release after lock-up period, ensuring long-term commitment",
    },
    {
      name: "Strategic Investors",
      value: 10,
      amount: 1000000000,
      color: "#f59e0b",
      tge: "20%",
      cliff: "12 months",
      vesting: "36 months",
      note: "Long-term lock-up, strategic partnership guarantee",
    },
    {
      name: "Market & Liquidity",
      value: 5,
      amount: 500000000,
      color: "#10b981",
      tge: "10%",
      cliff: "0 months",
      vesting: "12 months",
      note: "Liquidity mining pools, airdrops and community incentives",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-200 font-medium mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
            <Coins className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Tokenomics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AIM Token</span>{" "}
            Economic Model
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Total supply of 10 billion tokens, building a sustainable token economy ecosystem through scientific release mechanisms and multiple utilities
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {[
                    { label: "Total Supply", value: "10B AIM", icon: Coins, gradient: "from-cyan-500 to-blue-500" },
        { label: "Current Price", value: "$0.078", icon: TrendingUp, gradient: "from-emerald-500 to-green-500" },
        { label: "Market Cap", value: "$780M", icon: Award, gradient: "from-purple-500 to-indigo-500" },
        { label: "Holders", value: "125K+", icon: Users, gradient: "from-orange-500 to-amber-500" },
          ].map((metric, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${metric.gradient} shadow-lg`}
                >
                  <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Token Distribution */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Distribution Chart */}
          <Card className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <CardHeader className="p-6 sm:p-8">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                Token Distribution
              </CardTitle>
              <CardDescription className="text-slate-400">Scientific and reasonable token distribution ensures long-term healthy ecosystem development</CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <div className="h-64 sm:h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {tokenData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(30, 41, 59, 0.95)",
                        border: "1px solid rgba(148, 163, 184, 0.3)",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                        color: "white",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {tokenData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl border border-slate-600/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium text-white text-sm sm:text-base">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{item.value}%</div>
                      <div className="text-xs sm:text-sm text-slate-400">{(item.amount / 1000000000).toFixed(1)}B</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Distribution Details */}
          <Card className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <CardHeader className="p-6 sm:p-8">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                Release Mechanism
              </CardTitle>
              <CardDescription className="text-slate-400">Detailed token release schedule and lock-up mechanism</CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 pt-0">
              <div className="space-y-4 sm:space-y-6">
                {tokenData.map((item, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-xl p-4 sm:p-5 border border-slate-600/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <h4 className="font-semibold text-white text-sm sm:text-base">{item.name}</h4>
                      <span className="text-xs sm:text-sm text-slate-400">({item.value}%)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 text-xs sm:text-sm">
                      <div>
                        <span className="text-slate-400">TGE Unlock:</span>
                        <span className="text-cyan-400 font-medium ml-1">{item.tge}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Cliff Period:</span>
                        <span className="text-blue-400 font-medium ml-1">{item.cliff}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Vesting Period:</span>
                        <span className="text-purple-400 font-medium ml-1">{item.vesting}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300">{item.note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Utility & Use Cases */}
        <div className="bg-slate-800/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-700/50 backdrop-blur-sm">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Token Utility</h3>
            <p className="text-base sm:text-lg text-slate-400">Multiple application scenarios of AIM tokens in the ecosystem</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Zap,
                title: "Computing Payment",
                description: "Use AIM tokens to pay for AI computing resources with discount benefits",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: TrendingUp,
                title: "Transaction Fees",
                description: "NFT transaction fee discounts, more tokens held means bigger discounts",
                gradient: "from-emerald-500 to-green-500",
              },
              {
                icon: Users,
                title: "Governance Voting",
                description: "Participate in DAO governance and vote on important proposals",
                gradient: "from-purple-500 to-indigo-500",
              },
              {
                icon: Award,
                title: "Creator Incentives",
                description: "Quality content creators receive AIM token rewards",
                gradient: "from-orange-500 to-amber-500",
              },
              {
                icon: Shield,
                title: "Ecosystem Benefits",
                description: "Token holders enjoy platform privileges and priority access",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: Coins,
                title: "Royalty Dividends",
                description: "Token holders share platform transaction royalty income",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map((useCase, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-gradient-to-br ${useCase.gradient} shadow-lg`}
                >
                  <useCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{useCase.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Join the AIM Ecosystem?</h3>
            <p className="text-cyan-100 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Get AIM tokens now, participate in ecosystem building, and enjoy development dividends
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-cyan-600 hover:bg-slate-100 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Buy AIM Tokens
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
