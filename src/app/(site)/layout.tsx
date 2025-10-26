import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageTransition } from "@/components/site/page-transition";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <PageTransition>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </PageTransition>
    </div>
  );
}
