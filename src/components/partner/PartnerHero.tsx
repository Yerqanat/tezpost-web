import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PartnerHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
      {/* Background pattern or image could go here */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Become a <span className="text-primary">Jelpost</span> Partner
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Join our growing network of logistics partners. Earn additional income
          by opening a pickup point in your city.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" asChild>
            <Link href="#partner-form">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10 hover:text-white"
          >
            <Link href="#requirements">View Requirements</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
