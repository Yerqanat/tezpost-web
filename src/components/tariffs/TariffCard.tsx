import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Check, Clock, Globe, ShieldCheck } from "lucide-react";
import { ShippingCalculatorDialog } from "./ShippingCalculatorDialog";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";

interface TariffCardProps {
  type: "land" | "air";
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
  const t = useTranslations("tariffs");

  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant={type === "air" ? "default" : "secondary"}>
            {type === "air" ? t("air") : t("land")}
          </Badge>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="w-4 h-4 mr-1" />
            {deliveryTime} {t("days")}
          </div>
        </div>
        <CardTitle className="text-2xl font-bold flex items-baseline">
          {price}
          <span className="text-base font-normal text-muted-foreground ml-1">
            / {unit}
          </span>
        </CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <Globe className="w-4 h-4 mr-1" />
          {origin} → {destination}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <ShippingCalculatorDialog
          pricePerUnit={parseFloat(price.replace("$", ""))}
          unit={unit}
          type={type === "air" ? t("air") : t("land")}
        />
      </CardFooter>
    </Card>
  );
}
