import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertiko FAQ - AI-Powered FAQ for Shopify Product Pages",
  description: "Automatically generate conversion-focused FAQ sections for your Shopify product pages. Reduce cart abandonment, answer customer questions instantly, and track ROI.",
  openGraph: {
    title: "Convertiko FAQ - AI-Powered FAQ for Shopify",
    description: "Reduce cart abandonment with AI-generated FAQ sections that answer customer questions before they ask.",
  },
};

export default function ConvertiFAQPage() {
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
            <Link href="/#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <Link href="https://docs.convertikolabs.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </div>
          <Button asChild>
            <Link href="https://apps.shopify.com/convertiko-faq">Install Free</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.08),transparent_50%)]" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Shopify App</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Stop Losing Sales to{" "}
                <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                  Unanswered Questions
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Convertiko FAQ uses AI to generate product-specific Q&A sections that answer customer
                questions before they leave — and tracks exactly how much revenue it generates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild className="text-base">
                  <Link href="https://apps.shopify.com/convertiko-faq">
                    Install Free on Shopify
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base">
                  <Link href="https://docs.convertikolabs.com/guide/getting-started">
                    View Documentation
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5 free generations
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  No credit card required
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center">
                    <span className="text-white font-bold">?</span>
                  </div>
                  <div>
                    <div className="font-semibold">Product FAQ</div>
                    <div className="text-sm text-muted-foreground">AI-Generated</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { q: "What&apos;s the return policy?", a: "30-day hassle-free returns with free shipping on all orders." },
                    { q: "How long does shipping take?", a: "Orders ship within 24 hours. Standard delivery is 3-5 business days." },
                    { q: "Is this true to size?", a: "Yes! 94% of customers say it fits as expected. Check our size guide for measurements." },
                  ].map((item, i) => (
                    <div key={i} className="bg-orange-50/50 rounded-lg p-4 border border-orange-100">
                      <div className="font-medium text-sm mb-1">{item.q}</div>
                      <div className="text-sm text-muted-foreground">{item.a}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Powered by Convertiko</span>
                  <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                    +23% conversion
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="outline" className="mb-4">The Problem</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              68% of Shoppers Abandon Carts Due to Unanswered Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Every day, customers leave your product pages because they can&apos;t find answers to simple questions.
              They don&apos;t contact support — they just leave.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🤔",
                title: "\"Will this fit me?\"",
                description: "Sizing questions cause hesitation. Without instant answers, customers leave.",
              },
              {
                icon: "📦",
                title: "\"When will it arrive?\"",
                description: "Shipping concerns kill urgency. Customers won't buy if they're unsure.",
              },
              {
                icon: "↩️",
                title: "\"What if I don't like it?\"",
                description: "Return policy confusion creates risk. Uncertainty means no purchase.",
              },
            ].map((item, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="outline" className="mb-4">The Solution</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI-Generated FAQs That Answer Questions Before They&apos;re Asked
            </h2>
            <p className="text-lg text-muted-foreground">
              Convertiko FAQ analyzes your products and creates conversion-focused Q&A sections
              that address the exact concerns causing hesitation.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Live in 60 Seconds
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Install the App",
                description: "One-click install from the Shopify App Store. No coding, no developers needed.",
              },
              {
                step: "2",
                title: "Generate FAQs",
                description: "Click 'Generate' on any product. Our AI creates relevant Q&A in seconds.",
              },
              {
                step: "3",
                title: "Watch Sales Grow",
                description: "FAQs appear on your product pages. Track engagement and attributed revenue.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Convert More Visitors
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "AI-Powered Generation",
                description: "Advanced AI analyzes your product title, description, and details to create relevant, conversion-focused questions.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Revenue Attribution",
                description: "Track the complete journey from FAQ view → engagement → purchase. Know exactly how much revenue FAQs generate.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "Multiple Display Formats",
                description: "Carousel, grid, or accordion layouts. Choose what works best for your theme and products.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: "Full Customization",
                description: "6 presets, custom colors, fonts, and spacing. Match your brand perfectly or use our beautiful defaults.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Mobile Optimized",
                description: "Responsive design that looks great on all devices. Automatically adapts to mobile with touch-friendly interactions.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "100% Theme Compatible",
                description: "Works with any Shopify theme using Theme Blocks. No code changes, no conflicts, guaranteed to work.",
              },
            ].map((feature, i) => (
              <Card key={i} className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-orange-500 to-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white hover:bg-white/30">
              The Convertiko Difference
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Only FAQ App That Proves Its Value
            </h2>
            <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
              Other apps just add FAQ sections. Convertiko tracks every impression, every click,
              and every purchase — so you know exactly what your FAQs are worth.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "155x", label: "Average ROI" },
                { value: "15%", label: "Conversion Lift" },
                { value: "40%", label: "Less Support Tickets" },
                { value: "60s", label: "Time to Install" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free. Upgrade when you&apos;re ready.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                description: "Perfect for trying Convertiko",
                features: [
                  "5 FAQ generations/month",
                  "5 active product slots",
                  "Basic analytics",
                  "All display formats",
                  "Email support",
                ],
                cta: "Start Free",
                popular: false,
              },
              {
                name: "Starter",
                price: "$9",
                description: "For small stores",
                features: [
                  "25 generations/month",
                  "50 active slots",
                  "Full analytics & attribution",
                  "Priority support",
                  "$0.50/extra generation",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Growth",
                price: "$29",
                description: "For growing stores",
                features: [
                  "100 generations/month",
                  "250 active slots",
                  "Full analytics & attribution",
                  "Priority support",
                  "$0.35/extra generation",
                ],
                cta: "Get Started",
                popular: true,
              },
              {
                name: "Scale",
                price: "$79",
                description: "For large catalogs",
                features: [
                  "500 generations/month",
                  "1,000 active slots",
                  "Full analytics & attribution",
                  "Priority support",
                  "$0.25/extra generation",
                ],
                cta: "Get Started",
                popular: false,
              },
            ].map((plan, i) => (
              <Card key={i} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <svg className="h-5 w-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                    <Link href="https://apps.shopify.com/convertiko-faq">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Common Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How does the AI generate FAQ content?",
                a: "Our AI analyzes your product title, description, variants, and pricing to understand what your product is and what questions customers typically ask about similar products. It then generates relevant, conversion-focused Q&A content.",
              },
              {
                q: "Will it work with my Shopify theme?",
                a: "Yes! Convertiko FAQ works with 100% of Shopify themes using Theme Blocks. It's the recommended installation method and requires no coding.",
              },
              {
                q: "How does revenue attribution work?",
                a: "When a customer engages with your FAQ (clicks or hovers on a question), we set a tracking cookie. If they purchase within 7-30 days (depending on your plan), that revenue is attributed to the FAQ engagement with time-decay weighting.",
              },
              {
                q: "Can I edit the generated content?",
                a: "Absolutely! All generated content is fully editable. Add, remove, or rewrite questions. Add your own manual questions for store-specific information the AI can't know.",
              },
              {
                q: "What happens if I cancel?",
                a: "Your FAQ content remains visible for 30 days after cancellation, giving you time to resubscribe or export your content. After 30 days, FAQs will stop displaying.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes! The Free plan gives you 5 FAQ generations per month with no credit card required. Try it risk-free and upgrade when you see results.",
              },
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden border-0 shadow-2xl">
            <div className="relative bg-gradient-to-br from-primary via-orange-500 to-amber-500 p-8 md:p-12 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Stop Losing Sales?
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                  Join merchants who&apos;ve increased conversions by 15% with AI-powered FAQs.
                  Start free — no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild className="text-primary font-semibold">
                    <Link href="https://apps.shopify.com/convertiko-faq">Install Free on Shopify</Link>
                  </Button>
                  <Button size="lg" variant="ghost" asChild className="text-white hover:text-white hover:bg-white/20">
                    <Link href="https://docs.convertikolabs.com">Read the Docs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="font-bold text-xl">Convertiko</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-sm mb-4">
                AI-powered tools that help Shopify merchants convert more visitors into customers — with proof.
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Convertiko Labs. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="https://docs.convertikolabs.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://docs.convertikolabs.com/guide/getting-started" className="text-muted-foreground hover:text-foreground transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="https://docs.convertikolabs.com/guide/troubleshooting" className="text-muted-foreground hover:text-foreground transition-colors">
                    Troubleshooting
                  </Link>
                </li>
                <li>
                  <Link href="mailto:support@convertikolabs.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex gap-6">
              <Link href="https://docs.convertikolabs.com/reference/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
