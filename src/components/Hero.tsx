// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-21T23:09:04.458Z
// Section: hero
// Category: hero
// Template ID: hero-s001
// Page: home
// Component: Hero

// components/hero/AirPodsMaxProHero.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function AirPodsMaxProHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-blue-200" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-sm font-medium text-blue-500">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              New: AirPods Max Pro
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Experience the Future of
              <span className="block bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                Premium Headphones
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Immerse yourself in the ultimate audio experience with the AirPods Max Pro. Featuring advanced noise cancellation, 40-hour battery life, and spatial audio, this premium headphone set redefines the way you listen to music.
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Noise Cancellation
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                40-Hour Battery Life
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Spatial Audio
              </li>
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group px-7 text-base bg-blue-500 hover:bg-blue-600 text-white">
                Pre-Order Now
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1 text-white" />
              </Button>
              <Button size="lg" variant="outline" className="text-base text-blue-500 hover:bg-blue-500 hover:text-white">
                <Play className="mr-2 size-5 text-blue-500 group-hover:text-white" /> Watch Demo
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Mockup container */}
            <div className="relative overflow-hidden rounded-2xl border bg-white shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/airpods-max-pro.png"
                  alt="AirPods Max Pro"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Tag overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium shadow">
                $599
              </div>
            </div>

            {/* Floating accents */}
            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-white/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-gray-500">Customer Reviews</p>
              <p className="text-sm">
                <span className="font-semibold">4.9</span> / 5
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-white/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-gray-500">Technical Specs</p>
              <p className="text-sm">
                <span className="font-semibold">Drivers:</span> 40mm Dynamic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}