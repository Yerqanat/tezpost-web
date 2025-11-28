import { ClipboardList, GraduationCap, Store } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "1. Prepare Premises",
    description:
      "Ensure your location meets our branding and operational standards.",
  },
  {
    icon: GraduationCap,
    title: "2. Training",
    description: "Complete our comprehensive training program for partners.",
  },
  {
    icon: ClipboardList,
    title: "3. Activation",
    description:
      "Sign the agreement and start accepting shipments immediately.",
  },
];

export default function PartnerSteps() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How to Become a Partner?</h2>
          <p className="text-muted-foreground">
            Three simple steps to start your journey with Jelpost.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
