import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, HelpCircle, MessageCircle, Search, Clock, BookOpen, Video, FileText } from "lucide-react"
import Image from "next/image"

export default function HelpCenterPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Complete guide to understanding and using the AIMINT platform",
      icon: "🚀",
      articles: 25,
      topics: [
        "Platform Overview and Vision",
        "Account Setup and Security", 
        "Understanding AI-Blockchain Integration",
        "First Steps Tutorial",
        "Basic Navigation Guide"
      ]
    },
    {
      title: "AI Technology",
      description: "Deep dive into AI capabilities and best practices",
      icon: "🤖", 
      articles: 30,
      topics: [
        "AI Model Understanding",
        "Content Generation Principles",
        "Quality Optimization Techniques",
        "Model Selection Guidelines",
        "Advanced AI Features"
      ]
    },
    {
      title: "Blockchain Integration",
      description: "Learn about blockchain technology and digital assets",
      icon: "⛓️",
      articles: 22,
      topics: [
        "Blockchain Fundamentals",
        "Digital Asset Creation",
        "Smart Contract Interactions",
        "Security Best Practices",
        "Transaction Management"
      ]
    },
    {
      title: "Computing Network",
      description: "Understanding distributed computing concepts",
      icon: "⚡",
      articles: 18,
      topics: [
        "Distributed Computing Basics",
        "Network Architecture Overview",
        "Resource Optimization",
        "Performance Monitoring",
        "Troubleshooting Guide"
      ]
    },
    {
      title: "Developer Resources",
      description: "Technical documentation and integration guides",
      icon: "💻",
      articles: 35,
      topics: [
        "API Documentation",
        "SDK Integration Guide",
        "Development Best Practices",
        "Testing and Debugging",
        "Community Examples"
      ]
    },
    {
      title: "Community & Governance",
      description: "Participate in platform governance and community",
      icon: "🏛️",
      articles: 15,
      topics: [
        "DAO Governance Basics",
        "Community Participation",
        "Proposal Creation Guide",
        "Voting Mechanisms",
        "Community Guidelines"
      ]
    },
  ]

  const popularArticles = [
    {
      title: "What is AIMINT? Platform Overview",
      category: "Getting Started",
      readTime: "5 min",
      views: "2.1K"
    },
    {
      title: "Understanding AI and Blockchain Integration",
      category: "AI Technology", 
      readTime: "8 min",
      views: "1.8K"
    },
    {
      title: "Setting Up Your First Project",
      category: "Getting Started",
      readTime: "12 min", 
      views: "1.5K"
    },
    {
      title: "Security Best Practices Guide",
      category: "Blockchain Integration",
      readTime: "15 min",
      views: "1.3K"
    },
    {
      title: "Developer API Getting Started",
      category: "Developer Resources",
      readTime: "10 min",
      views: "1.1K"
    },
  ]

  const supportOptions = [
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: BookOpen,
      action: "Browse Docs",
      color: "blue"
    },
    {
      title: "Video Tutorials", 
      description: "Step-by-step video walkthroughs",
      icon: Video,
      action: "Watch Videos",
      color: "purple"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and experts",
      icon: MessageCircle,
      action: "Join Discussion", 
      color: "green"
    },
    {
      title: "Technical Support",
      description: "Direct assistance for technical issues",
      icon: HelpCircle,
      action: "Contact Support",
      color: "orange"
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:40px_40px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white font-medium mb-6 backdrop-blur-sm">
              <HelpCircle className="w-4 h-4" />
              <span>Help Center</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              How can we help you?
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Find comprehensive guides, tutorials, and support to make the most of AIMINT platform
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles, guides, and tutorials..."
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-white/20 rounded-xl focus:border-white focus:outline-none transition-colors bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
                />
                <Button className="absolute right-2 top-2 bg-white text-blue-600 hover:bg-gray-100">
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              {[
                { label: "Help Articles", value: "145+" },
                { label: "Video Tutorials", value: "60+" },
                { label: "Community Posts", value: "280+" },
                { label: "Avg Response", value: "< 2hr" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {popularArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{article.views} views</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {category.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{category.articles} articles</span>
                    <Button variant="outline" size="sm" className="group-hover:bg-blue-50 group-hover:border-blue-200">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer text-center">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${option.color}-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className={`w-8 h-8 text-${option.color}-600`} />
                  </div>
                  <CardTitle className="text-lg">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className={`w-full group-hover:bg-${option.color}-50 group-hover:border-${option.color}-200`}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Still need help?</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Our support team is here to assist you with any questions or technical issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Contact Support
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <FileText className="mr-2 w-5 h-5" />
                  Submit Ticket
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
} 