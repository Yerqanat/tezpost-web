import { useTranslations } from "next-intl";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Separator } from "@/src/components/ui/separator";

export default function Footer() {
  const t = useTranslations("footer");
  const tHeader = useTranslations("header");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Jelpost</h3>
            <p className="text-sm leading-relaxed mb-4">{t("description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {tHeader("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tariffs"
                  className="hover:text-white transition-colors"
                >
                  {tHeader("tariffs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="hover:text-white transition-colors"
                >
                  {tHeader("partners")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("services")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("warehousing")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  {t("customs")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t("contact")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Almaty, Kazakhstan</li>
              <li>support@jelpost.kz</li>
              <li>+7 (777) 123-45-67</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>{t("rights", { year: currentYear })}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              {t("privacy")}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
