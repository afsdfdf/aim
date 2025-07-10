"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Github, Award, Users, Briefcase, Star, Building, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Google DeepMind researcher, AI algorithm expert, blockchain technology evangelist",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      experience: "10 years AI R&D experience",
      achievements: ["20+ AI top-tier conference papers", "Google AI Award winner", "5 blockchain patents"],
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Sarah Kim",
      role: "Chief Technology Officer",
      bio: "Former Ethereum core developer, smart contract security expert, Web3 infrastructure architect",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      experience: "8 years blockchain development",
      achievements: ["Ethereum contributor", "DeFi protocol architect", "Security audit expert"],
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Michael Reynolds",
      role: "Chief Product Officer",
      bio: "Former Meta product director, senior NFT marketplace practitioner, user experience design expert",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      experience: "12 years product management",
      achievements: ["Meta Product Award", "NFT market pioneer", "UX design master"],
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Sarah Thompson",
      role: "Chief Operating Officer",
      bio: "Former Binance global operations director, cryptocurrency market expert, community building leader",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      experience: "9 years operations management",
      achievements: ["Binance gold employee", "Community building expert", "Marketing master"],
      social: { twitter: "#", linkedin: "#" },
    },
  ]

  const advisors = [
    {
      name: "Dr. Michael Johnson",
      role: "AI Technology Advisor",
      company: "Stanford AI Lab",
      position: "Director",
      expertise: "Machine Learning, Deep Learning",
      avatar: "https://randomuser.me/api/portraits/men/57.jpg",
    },
    {
      name: "Emily Wilson",
      role: "Blockchain Advisor",
      company: "Andreessen Horowitz",
      position: "Partner",
      expertise: "Web3 Investment, DeFi Protocols",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    {
      name: "Robert Smith",
      role: "Market Advisor",
      company: "Former OpenSea",
      position: "VP of Business",
      expertise: "NFT Markets, Digital Assets",
      avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    },
  ]

  const partners = [
    { 
      name: "OpenAI", 
      logo: "https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png", 
      type: "AI Technology Partnership", 
      description: "AI model technology support" 
    },
    { 
      name: "Chainlink", 
      logo: "https://seeklogo.com/images/C/chainlink-logo-B072B6B9FE-seeklogo.com.png", 
      type: "Oracle Services", 
      description: "On-chain data services" 
    },
    { 
      name: "Polygon", 
      logo: "https://seeklogo.com/images/P/polygon-matic-logo-86F4D6D773-seeklogo.com.png", 
      type: "Infrastructure", 
      description: "Layer2 scaling solutions" 
    },
    { 
      name: "Ethereum", 
      logo: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png", 
      type: "Blockchain Protocol", 
      description: "Smart contract platform" 
    },
    { 
      name: "Binance", 
      logo: "https://seeklogo.com/images/B/binance-logo-988C78C1D5-seeklogo.com.png", 
      type: "Exchange Partnership", 
      description: "Trading and liquidity support" 
    },
    { 
      name: "Coinbase", 
      logo: "https://seeklogo.com/images/C/coinbase-logo-2E8AB78527-seeklogo.com.png", 
      type: "Exchange Partnership", 
      description: "Institutional services" 
    },
    { 
      name: "Uniswap", 
      logo: "https://seeklogo.com/images/U/uniswap-logo-687E95D218-seeklogo.com.png", 
      type: "DeFi Protocol", 
      description: "Decentralized exchange" 
    },
    { 
      name: "IPFS", 
      logo: "https://seeklogo.com/images/I/ipfs-logo-5F02293AD6-seeklogo.com.png", 
      type: "Storage Protocol", 
      description: "Decentralized storage" 
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
              World-class Team
            </span>{" "}
            United
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI and blockchain experts from top global tech companies with rich industry experience and successful track
            records
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
                    {/* Avatar */}
                    <div className="relative mx-auto mb-6">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/20">
                        <Image 
                          src={member.avatar} 
                          alt={member.name} 
                          width={80} 
                          height={80} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{member.name}</CardTitle>
                    <CardDescription className="text-base font-semibold text-blue-600 mb-3">
                      {member.role}
                    </CardDescription>
                    <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{member.bio}</p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3">
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-300"
                        >
                          <Twitter className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-300"
                        >
                          <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-300"
                        >
                          <Github className="w-4 h-4 text-gray-600" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-purple-600" />
            Advisory Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-3xl"
              >
                <CardHeader className="text-center p-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-purple-200">
                    <Image 
                      src={advisor.avatar} 
                      alt={advisor.name} 
                      width={64} 
                      height={64} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{advisor.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-semibold">{advisor.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center px-8 pb-8">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">
                      {advisor.company} · {advisor.position}
                    </div>
                    <div className="text-sm text-gray-600">{advisor.expertise}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center gap-3">
            <Building className="w-8 h-8 text-green-600" />
            Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-gray-200 p-2">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      width={32} 
                      height={32} 
                      className="w-8 h-8 object-contain" 
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          target.style.display = 'none';
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg items-center justify-center text-white text-xs font-bold hidden">
                      {partner.name.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-blue-600">{partner.type}</div>
                    <div className="text-xs text-gray-600">{partner.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
