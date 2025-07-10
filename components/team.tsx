import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Github, Award, Users, Briefcase, Star, Building } from "lucide-react"

export function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      bio: "Former Google DeepMind researcher, AI algorithm expert, blockchain technology evangelist",
      avatar: "JS",
      experience: "10 years in AI research",
      achievements: ["20+ AI conference papers", "Google AI award winner", "5 blockchain patents"],
      social: { twitter: "#", linkedin: "#", github: "#" },
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Michael Reynolds",
      role: "Chief Technology Officer",
      bio: "Former Ethereum core developer, smart contract security expert, Web3 infrastructure architect",
      avatar: "MR",
      experience: "8 years in blockchain development",
      achievements: ["Ethereum contributor", "DeFi protocol architect", "Security audit specialist"],
      social: { twitter: "#", linkedin: "#", github: "#" },
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Sarah Thompson",
      role: "Chief Product Officer",
      bio: "Former Meta product director, experienced in NFT markets, user experience design expert",
      avatar: "ST",
      experience: "12 years in product management",
      achievements: ["Meta product award", "NFT market pioneer", "UX design master"],
      social: { twitter: "#", linkedin: "#" },
      gradient: "from-emerald-500 to-green-500",
    },
    {
      name: "Robert Chen",
      role: "Chief AI Scientist",
      bio: "Ph.D. in Computer Science from Stanford, specializing in generative models and deep learning",
      avatar: "RC",
      experience: "15 years in AI research",
      achievements: ["Stanford AI Lab", "Neural network innovations", "30+ research papers"],
      social: { twitter: "#", linkedin: "#", github: "#" },
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "Mark Johnson",
      role: "Chief Operating Officer",
      bio: "Former Binance global operations director, cryptocurrency market expert, community building leader",
      avatar: "MJ",
      experience: "9 years in operations management",
      achievements: ["Binance gold employee", "Community building expert", "Marketing specialist"],
      social: { twitter: "#", linkedin: "#" },
      gradient: "from-orange-500 to-amber-500",
    },
    {
      name: "Emily Wilson",
      role: "Marketing Director",
      bio: "Digital marketing expert with experience in crypto and Web3 projects",
      avatar: "EW",
      experience: "8 years in digital marketing",
      achievements: ["Web3 campaign specialist", "Growth hacker", "Community manager"],
      social: { twitter: "#", linkedin: "#", github: "#" },
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  const advisors = [
    {
      name: "Dr. Michael Johnson",
      role: "AI Technology Advisor",
      company: "Stanford University AI Lab",
      position: "Director",
      expertise: "Machine Learning, Deep Learning",
      avatar: "MJ",
    },
    {
      name: "Thomas Wilson",
      role: "Blockchain Advisor",
      company: "Andreessen Horowitz",
      position: "Partner",
      expertise: "Web3 Investment, DeFi Protocols",
      avatar: "TW",
    },
    {
      name: "Robert Smith",
      role: "Market Advisor",
      company: "Former OpenSea",
      position: "VP of Business",
      expertise: "NFT Market, Digital Assets",
      avatar: "RS",
    },
  ]

  const partners = [
    { name: "OpenAI", logo: "OAI", type: "AI Technology Collaboration", description: "AI Model Support" },
    { name: "Chainlink", logo: "CL", type: "Oracle Services", description: "On-chain Data Services" },
    { name: "Polygon", logo: "PG", type: "Infrastructure", description: "Layer 2 Scaling Solution" },
    { name: "IPFS", logo: "IPFS", type: "Storage Protocol", description: "Decentralized Storage" },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-200 font-medium mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              World-Class Team
            </span>{" "}
            Working Together
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            AI and blockchain experts from top global tech companies, with extensive industry experience and success stories
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 flex items-center justify-center gap-3">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            Core Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group relative bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <CardHeader className="text-center p-4 sm:p-6">
                    {/* Avatar */}
                    <div className="relative mx-auto mb-4 sm:mb-6">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white/20 bg-gradient-to-br ${member.gradient}`}
                      >
                        {member.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <CardTitle className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base font-semibold text-indigo-300 mb-2 sm:mb-3">
                      {member.role}
                    </CardDescription>
                    <div className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">{member.experience}</div>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-4">{member.bio}</p>

                    {/* Achievements */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {member.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-amber-400 flex-shrink-0" />
                          <span className="text-xs text-slate-400">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-2 sm:gap-3">
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-700/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors duration-300 border border-slate-600/50"
                        >
                          <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 hover:text-blue-400" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-700/50 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors duration-300 border border-slate-600/50"
                        >
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400 hover:text-blue-400" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-700/50 hover:bg-slate-400/20 rounded-lg flex items-center justify-center transition-colors duration-300 border border-slate-600/50"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
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
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 flex items-center justify-center gap-3">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            顾问团队
          </h3>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card
                key={index}
                className="group bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl backdrop-blur-sm"
              >
                <CardHeader className="text-center p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm sm:text-lg">{advisor.avatar}</span>
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-white">{advisor.name}</CardTitle>
                  <CardDescription className="text-purple-300 font-semibold text-sm sm:text-base">
                    {advisor.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="text-sm font-medium text-white">
                      {advisor.company} · {advisor.position}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400">{advisor.expertise}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 flex items-center justify-center gap-3">
            <Building className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            合作伙伴
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="group bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl backdrop-blur-sm"
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-slate-600/50">
                    <span className="text-white font-bold text-xs sm:text-sm">{partner.logo}</span>
                  </div>
                  <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">{partner.name}</h4>
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-medium text-cyan-400">{partner.type}</div>
                    <div className="text-xs text-slate-400">{partner.description}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
