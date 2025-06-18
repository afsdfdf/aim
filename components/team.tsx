import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Github, Award, Users, Briefcase, Star, Building } from "lucide-react"

export function Team() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "创始人 & CEO",
      bio: "前Google DeepMind研究员，AI算法专家，区块链技术布道者",
      avatar: "AC",
      experience: "10年AI研发经验",
      achievements: ["AI顶会论文20+", "Google AI奖获得者", "区块链专利5项"],
      social: { twitter: "#", linkedin: "#", github: "#" },
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Sarah Kim",
      role: "首席技术官",
      bio: "前以太坊核心开发者，智能合约安全专家，Web3基础设施架构师",
      avatar: "SK",
      experience: "8年区块链开发",
      achievements: ["以太坊贡献者", "DeFi协议架构师", "安全审计专家"],
      social: { twitter: "#", linkedin: "#", github: "#" },
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "David Wang",
      role: "首席产品官",
      bio: "前Meta产品总监，NFT市场资深从业者，用户体验设计专家",
      avatar: "DW",
      experience: "12年产品管理",
      achievements: ["Meta产品奖", "NFT市场先驱", "UX设计大师"],
      social: { twitter: "#", linkedin: "#" },
      gradient: "from-emerald-500 to-green-500",
    },
    {
      name: "Lisa Zhang",
      role: "首席运营官",
      bio: "前币安全球运营总监，加密货币市场专家，社区建设领导者",
      avatar: "LZ",
      experience: "9年运营管理",
      achievements: ["币安金牌员工", "社区建设专家", "市场营销大师"],
      social: { twitter: "#", linkedin: "#" },
      gradient: "from-orange-500 to-amber-500",
    },
  ]

  const advisors = [
    {
      name: "Dr. Michael Johnson",
      role: "AI技术顾问",
      company: "斯坦福大学AI实验室",
      position: "主任",
      expertise: "机器学习、深度学习",
      avatar: "MJ",
    },
    {
      name: "Jennifer Liu",
      role: "区块链顾问",
      company: "Andreessen Horowitz",
      position: "合伙人",
      expertise: "Web3投资、DeFi协议",
      avatar: "JL",
    },
    {
      name: "Robert Smith",
      role: "市场顾问",
      company: "前OpenSea",
      position: "商务副总裁",
      expertise: "NFT市场、数字资产",
      avatar: "RS",
    },
  ]

  const partners = [
    { name: "OpenAI", logo: "OAI", type: "AI技术合作", description: "AI模型技术支持" },
    { name: "Chainlink", logo: "CL", type: "预言机服务", description: "链上数据服务" },
    { name: "Polygon", logo: "PG", type: "基础设施", description: "Layer2扩容方案" },
    { name: "IPFS", logo: "IPFS", type: "存储协议", description: "去中心化存储" },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-200 font-medium mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">团队介绍</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              世界级团队
            </span>{" "}
            汇聚一堂
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            来自全球顶级科技公司的AI与区块链专家，拥有丰富的行业经验和成功案例
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 flex items-center justify-center gap-3">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            核心团队
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
