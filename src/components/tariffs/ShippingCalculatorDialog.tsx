"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Calculator } from "lucide-react";
import { useTranslations } from "next-intl";

interface ShippingCalculatorDialogProps {
  pricePerUnit: number; // e.g., 3.8 or 9.0
  unit: string; // e.g., "kg"
  type: string; // "land" or "air"
}

export function ShippingCalculatorDialog({
  pricePerUnit,
  unit,
  type,
}: ShippingCalculatorDialogProps) {
  const t = useTranslations("tariffs");
  const [weight, setWeight] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    if (!isNaN(weightNum)) {
      setTotal(weightNum * pricePerUnit);
    } else {
      setTotal(null);
    }
  };

  // Reset when dialog opens/closes or type changes could be handled,
  // but simple state is fine for now.

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full font-semibold">
          <Calculator className="w-4 h-4 mr-2" />
          {t("calculate")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("calculator.title")}</DialogTitle>
          <DialogDescription>
            {t("calculator.description", { type, price: pricePerUnit, unit })}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="weight" className="text-right">
              {t("calculator.weight")}
            </Label>
            <Input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="kg"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-col gap-4 items-stretch">
          <Button onClick={handleCalculate} type="submit">
            {t("calculator.calculate")}
          </Button>
          {total !== null && (
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg text-center animate-in fade-in slide-in-from-top-2">
              <div className="text-sm text-muted-foreground mb-1">
                {t("calculator.total")}
              </div>
              <div className="text-3xl font-bold text-primary">
                ${total.toFixed(2)}
              </div>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
