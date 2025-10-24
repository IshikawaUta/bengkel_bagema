import Link from "next/link";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 text-xl font-bold font-headline text-primary",
        className
      )}
    >
      <Wrench className="h-6 w-6" />
      <span>Bengkel Bagema</span>
    </Link>
  );
}
