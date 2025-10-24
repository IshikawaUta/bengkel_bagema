import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
        "flex items-center gap-2",
        className
      )}
    >
      <Image 
        src="https://res.cloudinary.com/dzsqaauqn/image/upload/v1761270951/WhatsApp_Image_2025-10-21_at_20.03.01_b8sec9.jpg" 
        alt="Bengkel Bagema Logo" 
        width={140} 
        height={35}
        className="object-contain"
      />
    </Link>
  );
}
