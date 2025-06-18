import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, HelpCircle, MessageCircle, Search, Clock } from "lucide-react"
import Image from "next/image"

export default function HelpCenterPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using AIMint platform",
      icon: "🚀",
      articles: 15,
      topics: [
        "Account Setup and Verification",
        "First AI Generation Tutorial", 
        "Understanding Platform Features",
        "Basic API Integration"
      ]
    },
    {
      title: "AI Generation",
      description: "Master AI content creation tools",
      icon: "🎨", 
      articles: 22,
      topics: [
        "Prompt Engineering Best Practices",
        "Style and Model Selection",
        "Quality Optimization Tips",
        "Batch Generation Workflows"
      ]
    },
    {
      title: "NFT Minting",
      description: "Learn about NFT creation and management",
      icon: "⛓️",
      articles: 18,
      topics: [
        "Blockchain Selection Guide",
        "Metadata Standards",
        "Gas Fee Optimization",
        "Collection Management"
      ]
    },
    {
      title: "Computing Network",
      description: "Utilize distributed computing resources",
      icon: "⚡",
      articles: 12,
      topics: [
        "Task Submission Guidelines",
        "Resource Requirements",
        "Performance Optimization",
        "Cost Management"
      ]
    },
    {
      title: "API Documentation",
      description: "Technical integration guides",
      icon: "💻",
      articles: 28,
      topics: [
        "Authentication Setup",
        "Rate Limiting Guidelines",
        "Error Handling",
        "SDK Usage Examples"
      ]
    },
    {
      title: "Billing & Payments",
      description: "Understand pricing and billing",
      icon: "💳",
      articles: 10,
      topics: [
        "Pricing Plans Explained",
        "Payment Methods",
        "Usage Tracking",
        "Refund Policies"
      ]
    }
  ]

  const popularArticles = [
    {
      title: "How to Generate High-Quality AI Art",
      category: "AI Generation",
      readTime: "5 min",
      views: "12.5K",
      description: "Complete guide to creating stunning AI artwork with advanced prompting techniques"
    },
    {
      title: "Setting Up Your First API Integration",
      category: "API Documentation", 
      readTime: "8 min",
      views: "9.2K",
      description: "Step-by-step tutorial for integrating AIMint APIs into your application"
    },
    {
      title: "Understanding Gas Fees and Blockchain Costs",
      category: "NFT Minting",
      readTime: "6 min", 
      views: "8.7K",
      description: "Learn how to optimize costs when minting NFTs on different blockchains"
    },
    {
      title: "Troubleshooting Common API Errors",
      category: "API Documentation",
      readTime: "10 min",
      views: "7.3K", 
      description: "Solutions for the most frequently encountered API integration issues"
    },
    {
      title: "Maximizing Computing Network Performance",
      category: "Computing Network",
      readTime: "7 min",
      views: "6.8K",
      description: "Best practices for efficient task submission and resource utilization"
    },
    {
      title: "DAO Governance Participation Guide",
      category: "DAO Governance", 
      readTime: "9 min",
      views: "5.9K",
      description: "How to participate in platform governance and proposal voting"
    }
  ]



  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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
                <HelpCircle className="w-4 h-4" />
                <span>Help & Support</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block">Help</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Center
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Find answers, guides, and get the support you need
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Comprehensive help resources, tutorials, and 24/7 support to help you succeed with the AIMint platform. From getting started to advanced integrations.
              </p>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <Button className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {[
                  { label: "Help Articles", value: "150+" },
                  { label: "Video Tutorials", value: "45" },
                  { label: "Avg Response", value: "< 2hr" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-blue-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Help Center Interface */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                {/* Transparent Logo */}
                <div className="absolute top-4 right-4 z-10">
                  <Image
                    src="/logo1.png"
                    alt="AIMint Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 opacity-30 hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">Support Dashboard</span>
                      </div>
                      <div className="text-sm text-gray-500">24/7 Help & Support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Online</span>
                  </div>
                </div>

                {/* Popular Topics */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Popular Topics</h3>
                  
                  {[
                    { title: "API Integration Guide", category: "Development", icon: "💻" },
                    { title: "AI Art Generation Tips", category: "AI Tools", icon: "🎨" },
                    { title: "NFT Minting Tutorial", category: "Blockchain", icon: "⛓️" },
                  ].map((topic, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                      <span className="text-2xl">{topic.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{topic.title}</div>
                        <div className="text-sm text-gray-500">{topic.category}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}

                  {/* Live Chat Widget */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-900">Need Immediate Help?</span>
                    </div>
                    <p className="text-sm text-blue-700 mb-3">Our support team is online and ready to help!</p>
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Live Chat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Browse{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find help articles organized by topic and feature area
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{category.icon}</div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {category.articles} articles
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    {category.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="text-sm text-slate-700 hover:text-blue-600 transition-colors cursor-pointer">
                        • {topic}
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Popular{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most viewed and helpful articles from our knowledge base
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {popularArticles.map((article, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105 bg-white cursor-pointer"
              >
                <CardHeader className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </div>
                      <div>{article.views} views</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {article.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </main>
  )
} 