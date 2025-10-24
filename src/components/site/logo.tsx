import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "flex items-center",
        className
      )}
    >
      <Image 
        src="https://res.cloudinary.com/dzsqaauqn/image/upload/v1761271214/WhatsApp_Image_2025-10-21_at_20.03.01-removebg-preview_admdnw.png"
        alt="Bengkel Bagema Logo"
        width={160}
        height={36}
        priority
      />
    </Link>
  );
}
