import SearchShipment from "@/src/components/Search";
import TrackingResult from "@/src/components/tracking/TrackingResult";
import { useTranslations } from "next-intl";

export default function Tracking() {
  const t = useTranslations("tracking");

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-8 mb-12">
        <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
        <p className="text-muted-foreground text-center max-w-md">
          {t("subtitle")}
        </p>
        <div className="w-full max-w-md">
          {/* Reusing the search component, might need styling adjustments */}
          <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
            <SearchShipment />
          </div>
        </div>
      </div>

      <TrackingResult />
    </div>
  );
}
