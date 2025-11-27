import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Check, Plane, Truck } from "lucide-react";

interface TariffCardProps {
  type: string;
  origin: string;
  destination: string;
  price: string;
  unit: string;
  deliveryTime: string;
  features: string[];
}

export default function TariffCard({
  type,
  origin,
  destination,
  price,
  unit,
  deliveryTime,
  features,
}: TariffCardProps) {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4 w-fit">
          {type === "land" ? (
            <Truck className="w-6 h-6 text-primary" />
          ) : (
            <Plane className="w-6 h-6 text-primary" />
          )}
        </div>
        <CardTitle className="text-xl font-bold">
          {origin} <span className="text-muted-foreground mx-1">→</span> {destination}
        </CardTitle>
        <CardDescription>{features[0]}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex items-baseline justify-center gap-1 my-4">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="text-muted-foreground font-medium">/ {unit}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Estimated delivery: <span className="font-semibold text-foreground">{deliveryTime}</span>
        </p>
        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-semibold">Calculate Shipping</Button>
      </CardFooter>
    </Card>
  );
}
