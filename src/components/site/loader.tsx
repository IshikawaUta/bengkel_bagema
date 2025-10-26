import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { TypingEffect } from "./typing-effect";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <div className="animate-pulse">
        <Logo width={120} />
      </div>
      <p className="text-3xl md:text-4xl font-headline font-bold text-neutral-800 h-12">
        <TypingEffect text="Bengkel Bagema" />
      </p>
    </div>
  );
};
