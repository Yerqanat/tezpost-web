import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
};

export default function InformationBox({ icon, title, subtitle }: Props) {
  return (
    <div className="flex shadow-md rounded-lg border border-black/5 p-4 gap-4 cursor-pointer hover:ring-1 ring-secondary/50">
      <div className="p-3 text-white rounded-lg bg-linear-to-b from-[oklch(0.8_0.25_25)] to-[oklch(0.5835_0.2381_28.32)]">
        {icon}
      </div>
      <div className="overflow-hidden">
        <h3 className="font-lato font-semibold">{title}</h3>
        <p className="font-lato text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
