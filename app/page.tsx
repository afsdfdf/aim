import { Hero } from "@/components/hero"
import { InteractiveStats } from "@/components/interactive-stats"
import { Features } from "@/components/features"
import { EnhancedDemo } from "@/components/enhanced-demo"
import Community from "@/components/community"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InteractiveStats />
      <Features />
      <EnhancedDemo />
      <Community />
    </main>
  )
}
