import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Convertiko FAQ",
  description: "Get help with Convertiko FAQ. Access documentation, troubleshooting guides, and contact our support team.",
};

export default function SupportPage() {
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
            <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="https://docs.convertikolabs.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
          </div>
          <Button asChild>
            <Link href="https://apps.shopify.com/convertiko-faq">Install Free</Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50" />
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Support</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How Can We Help?
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers in our documentation or contact our team directly.
              We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Documentation */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Step-by-step guides for installation, configuration, and best practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="https://docs.convertikolabs.com">Browse Docs</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Getting Started */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  New to Convertiko? Start here to get up and running in minutes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://docs.convertikolabs.com/guide/getting-started">Quick Start Guide</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <CardTitle>Troubleshooting</CardTitle>
                <CardDescription>
                  FAQ panel not showing? Common issues and how to fix them.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://docs.convertikolabs.com/guide/troubleshooting">View Solutions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Contact Us</Badge>
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground">
                Our support team is here to help. We respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Email Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        For general inquiries, technical issues, or account questions.
                      </p>
                      <a
                        href="mailto:support@convertikolabs.com"
                        className="text-primary hover:underline font-medium"
                      >
                        support@convertikolabs.com
                      </a>
                    </div>
                  </div>

                  <Separator />

                  {/* Response Time */}
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-sm text-muted-foreground">
                        We respond within <strong>24 hours</strong> during business days (Monday-Friday).
                        Most inquiries are answered within a few hours.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* What to Include */}
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">When Contacting Us</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        To help us resolve your issue faster, please include:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li className="flex items-center gap-2">
                          <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Your Shopify store URL
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          A description of the issue
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Screenshots (if applicable)
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Steps to reproduce the problem
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Common Questions</Badge>
              <h2 className="text-3xl font-bold">Frequently Asked</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How do I install the FAQ panel on my product pages?",
                  a: "Go to Online Store > Themes > Customize in your Shopify admin. Navigate to your product page template, click 'Add block', and select 'Convertiko FAQ'. Position it where you want and save.",
                },
                {
                  q: "Why isn't my FAQ panel showing on my store?",
                  a: "The most common reasons are: the product doesn't have a generated FAQ yet, the theme block isn't added to your product template, or you're viewing a product that's excluded. Check our troubleshooting guide for step-by-step solutions.",
                },
                {
                  q: "How do I change the appearance of my FAQ panel?",
                  a: "Go to the Appearance page in your Convertiko dashboard. Choose from 6 presets or customize colors, fonts, and layouts to match your brand.",
                },
                {
                  q: "Can I edit the AI-generated content?",
                  a: "Yes! All generated content is fully editable. Click on any spotlight in your dashboard to edit questions, answers, or add your own custom Q&A pairs.",
                },
                {
                  q: "How does billing work?",
                  a: "Convertiko FAQ is billed through Shopify. Charges appear on your regular Shopify invoice. You can upgrade, downgrade, or cancel anytime from your Shopify admin.",
                },
                {
                  q: "What happens to my FAQs if I uninstall?",
                  a: "Your FAQ content remains visible on your store for 30 days after uninstalling, giving you time to resubscribe. After 30 days, all content is removed.",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
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
                AI-powered tools that help Shopify merchants convert more visitors into customers.
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Convertiko Labs. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
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
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://docs.convertikolabs.com/reference/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://docs.convertikolabs.com/reference/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex gap-6">
              <Link href="mailto:support@convertikolabs.com" className="hover:text-foreground transition-colors">
                support@convertikolabs.com
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
