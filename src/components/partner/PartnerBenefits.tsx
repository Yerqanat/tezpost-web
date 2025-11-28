import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Banknote, Users, MapPin, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Banknote,
    title: "Additional Income",
    description:
      "Earn commission on every package processed through your point.",
  },
  {
    icon: Users,
    title: "New Customers",
    description:
      "Increase foot traffic to your existing business with Jelpost clients.",
  },
  {
    icon: MapPin,
    title: "Exclusive Territory",
    description:
      "Be the only authorized partner in your specific district or area.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Grow with us as e-commerce continues to expand rapidly.",
  },
];

export default function PartnerBenefits() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Partner with Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a mutually beneficial partnership model designed to help
            you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
