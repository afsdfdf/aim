import { Twitter, Github, Send, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Community() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <Image
                  src="/logo1.png"
                  width={80}
                  height={80}
                  alt="AIMINT Logo"
                  className="mb-6"
                />
              </div>
              <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
                Algorithm as Asset, Forging Future Creation. Through the deep integration of AI and blockchain
                technology, building a better digital future for global creators.
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                {[
                  { icon: Twitter, href: "https://x.com/aimint_token" },
                  { icon: Github, href: "https://github.com/AIMINT" },
                  { icon: Send, href: "https://t.me/AIMINTCommunity" },
                  { icon: MessageCircle, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - Hidden on mobile, shown as simple list on tablet+ */}
            <div className="hidden md:block">
              <h4 className="font-bold text-gray-900 mb-4">Products</h4>
              <ul className="space-y-3">
                {["AI Minting", "Computing Market", "DAO Governance"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Hidden on mobile, shown as simple list on tablet+ */}
            <div className="hidden md:block">
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-3">
                {["Whitepaper", "Developer Docs"].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile-only simplified links */}
            <div className="md:hidden">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Products</h4>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs"
                    >
                      Computing Market
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs"
                    >
                      DAO Governance
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Resources</h4>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs"
                    >
                      Whitepaper
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xs"
                    >
                      Help Center
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 border-t border-gray-200 pt-10 pb-8">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <p className="text-gray-500 text-sm text-center">© 2025 AIMINT. All rights reserved.</p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
