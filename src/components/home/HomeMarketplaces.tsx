import Image from "next/image";
import { useTranslations } from "next-intl";

const marketplaces = [
  {
    name: "Taobao",
    src: "https://imagedelivery.net/PW9Ji-aE7IgiV-FdfmLVwQ/bb4878ae-80e1-4fe6-4553-36ec46044e00/public",
  },
  {
    name: "Pinduoduo",
    src: "https://imagedelivery.net/PW9Ji-aE7IgiV-FdfmLVwQ/8c811026-52d7-4813-72a2-5c0e652aac00/public",
  },
  {
    name: "1688.com",
    src: "https://imagedelivery.net/PW9Ji-aE7IgiV-FdfmLVwQ/bb4878ae-80e1-4fe6-4553-36ec46044e00/public",
  },
  {
    name: "TEMU",
    src: "https://imagedelivery.net/PW9Ji-aE7IgiV-FdfmLVwQ/a141537f-4e12-42c5-a0b0-71d93bf92a00/public",
  },
  {
    name: "JD.com",
    src: "https://imagedelivery.net/PW9Ji-aE7IgiV-FdfmLVwQ/f1a54f07-088d-4ab3-2bbf-712d42911e00/public",
  },
];

export default function HomeMarketplaces() {
  const t = useTranslations("home");

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("marketplaces.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("marketplaces.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {marketplaces.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center p-4 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={item.src}
                  alt={`${item.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="font-semibold mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
