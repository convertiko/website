import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Apps - Convertiko",
  description: "AI-powered Shopify apps that help merchants increase conversions, reduce support load, and grow revenue with clear ROI tracking.",
};

export default function AppsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-xl">Convertiko</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/apps" className="text-sm font-medium text-foreground">
              Apps
            </Link>
            <Link href="https://docs.convertikolabs.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
          </div>
          <Button asChild>
            <Link href="https://apps.shopify.com/convertiko-faq">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Our Apps</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Shopify Apps That{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Prove Their Value
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Every app we build focuses on one thing: measurable results for your store.
              Track ROI, see attribution, and know exactly what you&apos;re getting.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Convertiko FAQ */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">?</span>
                  </div>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Live</Badge>
                </div>
                <CardTitle className="text-2xl">Convertiko FAQ</CardTitle>
                <CardDescription className="text-base">
                  AI-powered FAQ sections that answer customer questions before they leave —
                  and track exactly how much revenue they generate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">15%</div>
                    <div className="text-xs text-muted-foreground">Avg. Conversion Lift</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">155x</div>
                    <div className="text-xs text-muted-foreground">Typical ROI</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {[
                    "AI generates conversion-focused Q&A",
                    "Full revenue attribution tracking",
                    "Works with any Shopify theme",
                    "5 free generations to start",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/apps/faq">Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://apps.shopify.com/convertiko-faq">Install</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon */}
            <Card className="relative overflow-hidden border-2 border-dashed opacity-70">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground font-bold text-lg">+</span>
                  </div>
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <CardTitle className="text-2xl">More Apps</CardTitle>
                <CardDescription className="text-base">
                  We&apos;re building more conversion-focused tools for Shopify merchants.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm text-muted-foreground mb-6">
                  Our roadmap includes AI-powered product descriptions, smart upsells,
                  and more — all with the ROI tracking you expect from Convertiko.
                </p>
                <Button variant="secondary" disabled className="w-full">
                  Stay Tuned
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Boost Your Conversions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start with Convertiko FAQ — free forever on the starter plan.
            See results in minutes, not months.
          </p>
          <Button size="lg" asChild>
            <Link href="https://apps.shopify.com/convertiko-faq">Install Convertiko FAQ Free</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <span className="font-semibold">Convertiko</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Convertiko Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
