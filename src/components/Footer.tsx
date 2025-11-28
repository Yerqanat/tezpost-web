import Image from "next/image";
import { Link } from "../i18n/navigation";
import { useTranslations } from "next-intl";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const t = useTranslations("header"); // Using header translations for now

  return (
    <footer className="bg-slate-900 text-slate-200 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/jelpost-logo.svg"
                width={140}
                height={35}
                alt="Jelpost logo"
                className="brightness-0 invert" // Make logo white for dark bg
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your reliable partner for fast and secure logistics from China to
              Central Asia.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tracking"
                  className="hover:text-primary transition-colors"
                >
                  {t("track-code")}
                </Link>
              </li>
              <li>
                <Link
                  href="/tariffs"
                  className="hover:text-primary transition-colors"
                >
                  {t("tariffs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/partner"
                  className="hover:text-primary transition-colors"
                >
                  {t("partners")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tariffs"
                  className="hover:text-primary transition-colors"
                >
                  Land Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/tariffs"
                  className="hover:text-primary transition-colors"
                >
                  Air Delivery
                </Link>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">
                  Warehousing (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-slate-500 cursor-not-allowed">
                  Customs Clearance
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Logistics Way, Almaty, Kazakhstan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+7 (777) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">support@jelpost.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Jelpost. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
