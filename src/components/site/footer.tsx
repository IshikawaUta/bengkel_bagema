import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            <span className="font-semibold">Bengkel Bagema</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bengkel Bagema. Semua Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
