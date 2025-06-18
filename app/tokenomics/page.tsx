"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { Coins, Users, Zap, Shield, Award, TrendingUp, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TokenomicsPage() {
  const tokenData = [
    {
      name: "Creator Incentive Pool",
      value: 60,
      amount: 6000000000,
      color: "#06b6d4",
      tge: "20%",
      cliff: "0 months",
      vesting: "24 months",
      note: "For incentivizing quality prompts and data contributions",
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
      note: "Gradual release after cliff period, ensuring long-term commitment",
    },
    {
      name: "Strategic Investors",
      value: 10,
      amount: 1000000000,
      color: "#f59e0b",
      tge: "20%",
      cliff: "12 months",
      vesting: "36 months",
      note: "Long-term lockup, strategic partnership guarantee",
    },
    {
      name: "Market & Liquidity",
      value: 5,
      amount: 500000000,
      color: "#10b981",
      tge: "10%",
      cliff: "0 months",
      vesting: "12 months",
      note: "Liquidity pools, airdrops and community incentives",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Coins className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AIMint Tokenomics</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6 shadow-lg">
            <Coins className="w-4 h-4" />
            <span>Token Economic Model</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AIM Token
            </span>{" "}
            Economic System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Total supply of 10 billion tokens, building a sustainable token economy ecosystem through scientific release
            mechanisms and multiple utilities
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Supply", value: "10B AIM", icon: Coins, color: "blue" },
            { label: "Current Price", value: "$0.078", icon: TrendingUp, color: "green" },
            { label: "Market Cap", value: "$780M", icon: Award, color: "purple" },
            { label: "Token Holders", value: "125K+", icon: Users, color: "orange" },
          ].map((metric, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center shadow-lg ${
                    metric.color === "blue"
                      ? "bg-gradient-to-br from-blue-500 to-blue-600"
                      : metric.color === "green"
                        ? "bg-gradient-to-br from-emerald-500 to-green-600"
                        : metric.color === "purple"
                          ? "bg-gradient-to-br from-purple-500 to-indigo-600"
                          : "bg-gradient-to-br from-orange-500 to-amber-600"
                  }`}
                >
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Token Distribution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Distribution Chart */}
          <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Coins className="w-6 h-6 text-blue-600" />
                Token Distribution
              </CardTitle>
              <CardDescription className="text-gray-600">
                Scientific and reasonable token distribution ensures long-term healthy ecosystem development
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="h-80 mb-6">
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
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={false}
                    >
                      {tokenData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name) => [`${value}%`, name]}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {tokenData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{item.value}%</div>
                      <div className="text-sm text-gray-600">{(item.amount / 1000000000).toFixed(1)}B</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Distribution Details */}
          <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                Release Mechanism
              </CardTitle>
              <CardDescription className="text-gray-600">
                Detailed token release schedule and locking mechanisms
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-6">
                {tokenData.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <span className="text-sm text-gray-500">({item.value}%)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">TGE Unlock:</span>
                        <span className="text-blue-600 font-medium ml-2">{item.tge}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Cliff Period:</span>
                        <span className="text-purple-600 font-medium ml-2">{item.cliff}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-600">Vesting Period:</span>
                        <span className="text-green-600 font-medium ml-2">{item.vesting}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 bg-white p-3 rounded-lg">{item.note}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Utility & Use Cases */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Token Utility</h3>
            <p className="text-lg text-gray-600">Multiple application scenarios of AIM tokens in the ecosystem</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Computing Payment",
                description: "Use AIM tokens to pay for AI computing resources with discount benefits",
                color: "blue",
              },
              {
                icon: TrendingUp,
                title: "Trading Fees",
                description: "NFT trading fee discounts, more tokens held means bigger discounts",
                color: "green",
              },
              {
                icon: Users,
                title: "Governance Voting",
                description: "Participate in DAO governance and vote on important proposals",
                color: "purple",
              },
              {
                icon: Award,
                title: "Creator Incentives",
                description: "Quality content creators receive AIM token rewards",
                color: "orange",
              },
              {
                icon: Shield,
                title: "Ecosystem Benefits",
                description: "Token holders enjoy platform privileges and priority access",
                color: "indigo",
              },
              {
                icon: Coins,
                title: "Royalty Distribution",
                description: "Token holders share platform trading royalty income",
                color: "yellow",
              },
            ].map((useCase, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg ${
                    useCase.color === "blue"
                      ? "bg-gradient-to-br from-blue-500 to-blue-600"
                      : useCase.color === "green"
                        ? "bg-gradient-to-br from-emerald-500 to-green-600"
                        : useCase.color === "purple"
                          ? "bg-gradient-to-br from-purple-500 to-indigo-600"
                          : useCase.color === "orange"
                            ? "bg-gradient-to-br from-orange-500 to-amber-600"
                            : useCase.color === "indigo"
                              ? "bg-gradient-to-br from-indigo-500 to-purple-600"
                              : "bg-gradient-to-br from-yellow-500 to-orange-600"
                  }`}
                >
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h4>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to join the AIM ecosystem?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get AIM tokens now, participate in ecosystem building, and enjoy development dividends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Buy AIM Tokens
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
