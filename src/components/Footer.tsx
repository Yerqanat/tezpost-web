import Image from "next/image";
import Link from "next/link";
import { usePathname } from "../i18n/navigation";
import { useTranslations } from "next-intl";
import { Separator } from "./ui/separator";
export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations("header");
  const isActive = (href: string) => pathname.endsWith(href);
  return (
    <div className="max-w-5xl w-full py-8">
      <div className="flex gap-12">
        <Image
          src="/tezpost-logo.svg"
          width={100}
          height={30}
          alt="tezpost logo"
        />
        <ul className="flex gap-6 font-lato">
          <li>
            <Link href="/" className={isActive("/") ? "font-bold" : ""}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link
              href="/tracking"
              className={isActive("/tracking") ? "font-bold" : ""}
            >
              {t("track-code")}
            </Link>
          </li>
          <li>
            <Link
              href="/tariffs"
              className={isActive("/tariffs") ? "font-bold" : ""}
            >
              {t("tariffs")}
            </Link>
          </li>
          <li>
            <Link
              href="/partner"
              className={isActive("/partner") ? "font-bold" : ""}
            >
              {t("partners")}
            </Link>
          </li>
        </ul>
        <Separator />
      </div>
    </div>
  );
}
