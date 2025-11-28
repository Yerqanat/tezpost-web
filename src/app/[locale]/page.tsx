"use client";
import { Button } from "@/src/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/src/components/ui/background-beams-with-collision";
import { ArrowBigDownDash } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/src/components/Footer";
import HomeStats from "@/src/components/home/HomeStats";
import HomeFeatures from "@/src/components/home/HomeFeatures";
import HomeMarketplaces from "@/src/components/home/HomeMarketplaces";
import HomeProcess from "@/src/components/home/HomeProcess";
import HomeCTA from "@/src/components/home/HomeCTA";
import HomeInformation from "@/src/components/home/HomeInformation";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="flex min-h-screen items-center justify-center font-lato bg-background">
      <main className="flex min-h-screen w-full flex-col items-center bg-background">
        {/* hero section  */}
        <BackgroundBeamsWithCollision>
          <div className="flex relative z-20 items-center max-w-5xl justify-between py-8 w-full px-2 md:px-0">
            <div className="flex max-w-3xl flex-col items-center gap-10 text-center sm:items-start sm:text-left">
              <h1 className="text-4xl font-lobster font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                {t("title")}
              </h1>
              <p className="font-lato text-black/70 dark:text-zinc-300">
                {t("content")}
              </p>
              <Link href="/products">
                <Button
                  variant="default"
                  className="shadow-lg h-10 border cursor-pointer font-bold text-lg"
                >
                  <ArrowBigDownDash />
                  {t("CTA")}
                </Button>
              </Link>
            </div>
            <div className="w-full h-full hidden md:flex justify-center items-center">
              <div className="rounded-4xl shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)]">
                <Image
                  src="/hero-app.svg"
                  alt="Jelpost app"
                  width={200}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>

        <HomeStats />
        <HomeFeatures />
        <HomeMarketplaces />
        <HomeProcess />
        <HomeInformation />
        <HomeCTA />
      </main>
    </div>
  );
}
