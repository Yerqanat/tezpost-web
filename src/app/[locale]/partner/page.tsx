import PartnerBenefits from "@/src/components/partner/PartnerBenefits";
import PartnerForm from "@/src/components/partner/PartnerForm";
import PartnerHero from "@/src/components/partner/PartnerHero";
import PartnerRequirements from "@/src/components/partner/PartnerRequirements";
import PartnerSteps from "@/src/components/partner/PartnerSteps";

export default function Partner() {
  return (
    <div className="min-h-screen">
      <PartnerHero />
      <PartnerBenefits />
      <PartnerSteps />
      <PartnerRequirements />
      <PartnerForm />
    </div>
  );
}
