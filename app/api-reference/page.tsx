import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code2, Database, Zap, Shield, Globe, ExternalLink, Copy, Search } from "lucide-react"
import Image from "next/image"

export default function APIReferencePage() {
  const apiEndpoints = [
    {
      category: "AI Generation",
      icon: "🎨",
      description: "Generate AI content including images, videos, and audio",
      endpoints: [
        {
          method: "POST",
          endpoint: "/ai/generate/image",
          description: "Generate images from text prompts",
          params: ["prompt", "style", "resolution", "model"]
        },
        {
          method: "POST", 
          endpoint: "/ai/generate/video",
          description: "Generate videos from text or image inputs",
          params: ["prompt", "duration", "fps", "format"]
        },
        {
          method: "POST",
          endpoint: "/ai/generate/audio",
          description: "Generate audio content from text prompts",
          params: ["prompt", "voice", "format", "duration"]
        },
        {
          method: "GET",
          endpoint: "/ai/models",
          description: "List available AI models",
          params: ["category", "provider", "capabilities"]
        }
      ]
    },
    {
      category: "NFT Minting",
      icon: "⛓️",
      description: "Mint AI-generated content as NFTs on blockchain",
      endpoints: [
        {
          method: "POST",
          endpoint: "/nft/mint",
          description: "Mint content as NFT",
          params: ["content_url", "metadata", "blockchain", "collection"]
        },
        {
          method: "GET",
          endpoint: "/nft/{id}",
          description: "Get NFT details by ID",
          params: ["include_metadata", "include_history"]
        },
        {
          method: "GET",
          endpoint: "/nft/collection/{id}",
          description: "Get NFT collection information",
          params: ["limit", "offset", "sort"]
        },
        {
          method: "POST",
          endpoint: "/nft/transfer",
          description: "Transfer NFT ownership",
          params: ["nft_id", "to_address", "signature"]
        }
      ]
    },
    {
      category: "Computing Network",
      icon: "⚡",
      description: "Access distributed computing resources",
      endpoints: [
        {
          method: "POST",
          endpoint: "/compute/tasks",
          description: "Submit computing task",
          params: ["task_type", "requirements", "priority", "callback_url"]
        },
        {
          method: "GET",
          endpoint: "/compute/tasks/{id}",
          description: "Get task status and results",
          params: ["include_logs", "include_metrics"]
        },
        {
          method: "GET",
          endpoint: "/compute/nodes",
          description: "List available computing nodes",
          params: ["region", "capabilities", "availability"]
        },
        {
          method: "DELETE",
          endpoint: "/compute/tasks/{id}",
          description: "Cancel computing task",
          params: ["force"]
        }
      ]
    },
    {
      category: "Model Protocol",
      icon: "🤖",
      description: "Upload and manage AI models",
      endpoints: [
        {
          method: "POST",
          endpoint: "/models/upload",
          description: "Upload new AI model",
          params: ["model_file", "metadata", "license", "description"]
        },
        {
          method: "GET",
          endpoint: "/models",
          description: "List published models",
          params: ["category", "author", "rating", "sort"]
        },
        {
          method: "GET",
          endpoint: "/models/{id}/revenue",
          description: "Get model revenue statistics",
          params: ["period", "breakdown"]
        },
        {
          method: "POST",
          endpoint: "/models/{id}/rate",
          description: "Rate and review model",
          params: ["rating", "review", "usage_context"]
        }
      ]
    },
    {
      category: "DAO Governance",
      icon: "🏛️",
      description: "Participate in platform governance",
      endpoints: [
        {
          method: "GET",
          endpoint: "/dao/proposals",
          description: "List governance proposals",
          params: ["status", "category", "author", "page"]
        },
        {
          method: "POST",
          endpoint: "/dao/proposals",
          description: "Create new proposal",
          params: ["title", "description", "category", "voting_period"]
        },
        {
          method: "POST",
          endpoint: "/dao/vote",
          description: "Vote on proposal",
          params: ["proposal_id", "vote", "voting_power", "signature"]
        },
        {
          method: "GET",
          endpoint: "/dao/voting-power",
          description: "Get user voting power",
          params: ["address", "proposal_id"]
        }
      ]
    },
    {
      category: "User Management",
      icon: "👤",
      description: "Manage user accounts and authentication",
      endpoints: [
        {
          method: "POST",
          endpoint: "/auth/login",
          description: "Authenticate user",
          params: ["email", "password", "wallet_address"]
        },
        {
          method: "GET",
          endpoint: "/user/profile",
          description: "Get user profile",
          params: ["include_stats", "include_history"]
        },
        {
          method: "PUT",
          endpoint: "/user/profile",
          description: "Update user profile",
          params: ["name", "bio", "avatar", "preferences"]
        },
        {
          method: "GET",
          endpoint: "/user/api-keys",
          description: "Manage API keys",
          params: ["active_only"]
        }
      ]
    }
  ]

  const httpMethods = {
    GET: "bg-green-100 text-green-800 border-green-200",
    POST: "bg-blue-100 text-blue-800 border-blue-200", 
    PUT: "bg-yellow-100 text-yellow-800 border-yellow-200",
    DELETE: "bg-red-100 text-red-800 border-red-200"
  }

  const authenticationMethods = [
    {
      title: "API Key Authentication",
      description: "Include your API key in the Authorization header",
      example: "Authorization: Bearer your-api-key-here",
      icon: Shield
    },
    {
      title: "Wallet Signature",
      description: "Sign requests with your Web3 wallet for enhanced security",
      example: "X-Wallet-Signature: 0x...",
      icon: Database
    },
    {
      title: "OAuth 2.0",
      description: "Use OAuth for user-based authentication flows",
      example: "Authorization: Bearer oauth-access-token",
      icon: Globe
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
                <Code2 className="w-4 h-4" />
                <span>API Reference</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block">API</span>
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Reference
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Complete REST API documentation with examples
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Detailed reference for all AIMint API endpoints, parameters, responses, and authentication methods. Everything you need to integrate our platform.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Search className="mr-2 w-5 h-5" />
                  Search API
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg rounded-xl transition-all duration-300"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  OpenAPI Spec
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {[
                  { label: "Endpoints", value: "50+" },
                  { label: "Rate Limit", value: "1000/min" },
                  { label: "Uptime", value: "99.9%" },
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
              {/* API Request Demo */}
              <div className="relative bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
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
                    <Code2 className="w-8 h-8 text-blue-400" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">API Explorer</span>
                      </div>
                      <div className="text-sm text-gray-400">Interactive API Testing</div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>

                {/* API Request */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded">POST</span>
                    <span className="text-blue-400 font-mono">/api/v1/ai/generate/image</span>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-gray-400">// Request Headers</div>
                    <div><span className="text-yellow-300">Authorization</span>: <span className="text-green-300">Bearer your-api-key</span></div>
                    <div><span className="text-yellow-300">Content-Type</span>: <span className="text-green-300">application/json</span></div>
                    
                    <div className="text-gray-400 mt-4">// Request Body</div>
                    <div>&#123;</div>
                    <div className="ml-4"><span className="text-red-400">"prompt"</span>: <span className="text-green-300">"A cyberpunk cat in space"</span>,</div>
                    <div className="ml-4"><span className="text-red-400">"style"</span>: <span className="text-green-300">"digital-art"</span>,</div>
                    <div className="ml-4"><span className="text-red-400">"resolution"</span>: <span className="text-green-300">"1024x1024"</span></div>
                    <div>&#125;</div>
                  </div>

                  {/* Response */}
                  <div className="bg-black bg-opacity-50 rounded-lg p-4 mt-4">
                    <div className="text-green-400 text-xs mb-2">Response (200 OK)</div>
                    <div className="font-mono text-xs space-y-1">
                      <div>&#123;</div>
                      <div className="ml-2"><span className="text-red-400">"id"</span>: <span className="text-green-300">"img_123456"</span>,</div>
                      <div className="ml-2"><span className="text-red-400">"url"</span>: <span className="text-green-300">"https://cdn.aimint.ai/..."</span>,</div>
                      <div className="ml-2"><span className="text-red-400">"status"</span>: <span className="text-green-300">"completed"</span></div>
                      <div>&#125;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Authentication{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Methods
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Secure your API requests with multiple authentication options
            </p>
          </div>

          {/* Authentication Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            {authenticationMethods.map((method, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/50 hover:border-blue-300 rounded-2xl transition-all duration-500 hover:shadow-xl hover:scale-105"
              >
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed mb-4">
                    {method.description}
                  </CardDescription>
                  <div className="bg-gray-100 rounded-lg p-3 font-mono text-sm text-slate-700">
                    {method.example}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              API{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Endpoints
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Complete reference for all available API endpoints organized by category
            </p>
          </div>

          {/* Endpoints Grid */}
          <div className="space-y-12">
            {apiEndpoints.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{category.category}</h3>
                    <p className="text-slate-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid gap-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <Card key={endpointIndex} className="bg-white border-slate-200 hover:border-blue-300 transition-colors duration-300">
                      <CardHeader className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${httpMethods[endpoint.method as keyof typeof httpMethods]}`}>
                                {endpoint.method}
                              </span>
                              <code className="text-lg font-mono text-slate-800">{endpoint.endpoint}</code>
                            </div>
                            <p className="text-slate-600 mb-4">{endpoint.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {endpoint.params.map((param, paramIndex) => (
                                <span key={paramIndex} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                                  {param}
                                </span>
                              ))}
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="ml-4">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Interactive API Explorer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 