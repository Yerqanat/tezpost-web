"use client";
import { Button } from "@/src/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/src/components/ui/background-beams-with-collision";
import { Separator } from "@/src/components/ui/separator";
import {
  ArrowBigDownDash,
  CircleDollarSign,
  MessageCircleQuestionMark,
  Package,
  Smile,
  Store,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import InformationBox from "@/src/components/Information-box";
import Footer from "@/src/components/Footer";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="flex min-h-screen items-center justify-center font-lato bg-background">
      <main className="flex min-h-screen w-full flex-col gap-8 items-center bg-background">
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
                  alt="Tezpost app"
                  width={200}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>

        <div className="px-4 md:px-0 max-w-5xl flex md:flex-row flex-col items-center justify-between w-full py-8 gap-4">
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 ">
            <div className="p-3 rounded-full bg-linear-to-b from-[oklch(0.8_0.25_25)] to-[oklch(0.5835_0.2381_28.32)]">
              <Smile color="white" />
            </div>
            <p className="text-center font-lato">{t("title-2")}</p>
          </div>
          <div className="flex items-center justify-center gap-16">
            <div>
              <div className="font-montserrat text-4xl font-semibold">
                30001
              </div>
              <p className="font-lato text-black/60 dark:text-white/80 text-sm">
                {t("delivered-shipments")}
              </p>
            </div>
            <div>
              <div className="font-montserrat text-4xl font-semibold">
                1001 <span className="text-xs">/ kg</span>
              </div>
              <p className="font-lato text-black/60 dark:text-white/80 text-sm">
                {t("delivered-weight")}
              </p>
            </div>
          </div>
        </div>

        <Separator className="max-w-5xl" />

        {/* Information  */}
        <div className="flex flex-col max-w-5xl w-full py-8 px-4 md:px-0 gap-4">
          <h3 className="font-montserrat font-bold text-2xl">
            {t("information")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InformationBox
              icon={<Store />}
              title="Бөлімшеден тауар алу ережелері"
              subtitle="Tezpost қосымшасында жеке деректеріңіз тіркеліп тұруы қажет."
            />
            <InformationBox
              icon={<MessageCircleQuestionMark />}
              title="Топ сұрақ"
              subtitle="Tezpost– Қытайдан Қазақстан, Өзбекстан және Қырғызстанға сәлемдемелер жеткізетін қазақстандық IT-логистикалық компания."
            />
            <InformationBox
              icon={<CircleDollarSign />}
              title="Жеке шот, бонустар"
              subtitle="Жеке шотты қалай толықтырамын?"
            />
            <InformationBox
              icon={<Package />}
              title="Тапсырыс"
              subtitle="Тауарым Jana Post қосымшасынан көрсетілмей тұр, неге?"
            />
            <InformationBox
              icon={<Package />}
              title="Қайтарым"
              subtitle="Бұл мақалада сіз қайтаруды (возврат) қалай жасау керектігін білетін боласыз."
            />
          </div>
        </div>

        {/* Market places  */}
        <div className="flex flex-col justify-center items-center max-w-5xl w-full py-8 px-4 md:px-0 gap-6">
          <h3 className="font-montserrat font-bold text-2xl">
            {t("marketplace")}
          </h3>
          <div
            className="
    flex overflow-x-auto gap-2 p-4 md:p-8 shadow-md w-full rounded-lg border border-black/5
    md:grid md:grid-cols-6 md:gap-0 md:overflow-visible bg-background
    
  "
          >
            {[
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
              {
                name: "Jk.com",
                src: "https://imagedelivery.net/PW9Ji-aE7IgiV-FdfmLVwQ/f1a54f07-088d-4ab3-2bbf-712d42911e00/public",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="
        flex flex-col items-center justify-center cursor-pointer
        min-w-[100px] md:min-w-0
        hover:scale-105 transition-transform duration-200
      "
              >
                <Image
                  src={item.src}
                  alt={`${item.name} logo`}
                  width={60}
                  height={60}
                  className="rounded-xl object-contain"
                />
                <p className="font-semibold mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advs  */}
        <div className="w-full h-32 rounded-3xl border max-w-5xl flex justify-center items-center">
          <p className="text-gray-500">Ads section</p>
        </div>

        <Separator className="max-w-5xl" />

        <Footer />
      </main>
    </div>
  );
}
