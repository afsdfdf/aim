"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Github, Award, Users, Briefcase, Star, Building, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "James Anderson",
      role: "Founder & CEO",
    },
    {
      name: "Sarah Kim",
      role: "Chief Technology Officer",
    },
    {
      name: "Michael Reynolds",
      role: "Chief Product Officer",
    },
    {
      name: "Sarah Thompson",
      role: "Chief Operating Officer",
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
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AIMINT Team</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 font-medium mb-6 shadow-lg">
            <Users className="w-4 h-4" />
            <span>Team Introduction</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals working to build the future of AI and blockchain integration
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-blue-600" />
            Core Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group relative bg-white border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <CardHeader className="text-center p-8">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-base font-semibold text-blue-600 mb-3">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
