import { CheckCircle2 } from "lucide-react";

export default function PartnerRequirements() {
  const premisesRequirements = [
    "Ground floor location with easy access",
    "Minimum area of 15 sq. meters",
    "Internet connection and computer",
    "Space for branding materials",
    "Storage area for packages",
  ];

  const partnerRequirements = [
    "Registered business entity (IE or LLP)",
    "Customer service orientation",
    "Ability to work with cash/payments",
    "Adherence to operating hours",
  ];

  return (
    <section id="requirements" className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Requirements</h2>
          <p className="text-muted-foreground">
            What we look for in our potential partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Premises Requirements */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Premises Requirements
            </h3>
            <ul className="space-y-4">
              {premisesRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Requirements */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Partner Requirements
            </h3>
            <ul className="space-y-4">
              {partnerRequirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
