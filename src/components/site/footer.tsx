import { Wrench } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bengkel Bagema. Semua Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
