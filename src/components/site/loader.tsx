import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="animate-pulse">
        <Logo width={120} />
      </div>
    </div>
  );
};
