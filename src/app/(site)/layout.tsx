"use client";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageTransition } from "@/components/site/page-transition";
import { useEffect, useState } from "react";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col">
      {isClient ? (
        <PageTransition>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </PageTransition>
      ) : (
        <>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
}
