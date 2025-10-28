import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Eye, Target, ShieldCheck } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
};

const aboutImage = PlaceHolderImages.find((img) => img.id === "about");

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      <header className="py-20 sm:py-28 text-center bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-gray-900">Tentang Kami</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Mengenal lebih dekat Bengkel Bagema, mitra terpercaya Anda dalam dunia otomotif.
          </p>
        </div>
      </header>

      <main className="container py-16 sm:py-24">
        {/* History Section */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="prose-lg max-w-none text-muted-foreground">
            <h2 className="text-3xl font-headline font-bold text-gray-900">Sejarah Kami</h2>
            <p>
              Didirikan pada tahun 2010, Bengkel Bagema berawal dari sebuah garasi kecil dengan mimpi besar: menjadi bengkel paling terpercaya di kota. Dengan semangat kerja keras, kejujuran, dan fokus pada kepuasan pelanggan, kami tumbuh secara bertahap.
            </p>
            <p>
              Selama lebih dari satu dekade, kami telah melayani ribuan pelanggan dan terus berinovasi dengan teknologi terbaru serta pelatihan berkelanjutan untuk tim kami. Kepercayaan Anda adalah aset terbesar kami, dan kami berkomitmen untuk menjaganya setiap hari.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mt-20 sm:mt-28">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-sm border">
              <CardHeader className="flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-md">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl !mt-0 text-gray-900">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Menjadi bengkel otomotif terdepan yang dikenal karena integritas, kualitas layanan, dan inovasi, serta menjadi pilihan utama masyarakat.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-sm border">
              <CardHeader className="flex-row items-center gap-4">
                 <div className="p-3 bg-primary/10 rounded-md">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl !mt-0 text-gray-900">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Memberikan layanan perbaikan dan perawatan kendaraan yang unggul.</li>
                  <li>Membangun hubungan jangka panjang dengan pelanggan berbasis kepercayaan.</li>
                  <li>Mengembangkan kompetensi tim secara berkelanjutan.</li>
                  <li>Menggunakan teknologi dan suku cadang terbaik.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-20 sm:mt-28 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900">
            Nilai-Nilai Kami
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Prinsip yang menjadi landasan kami dalam setiap layanan yang kami berikan.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Integritas</h3>
              <p className="mt-2 text-muted-foreground">Jujur dan transparan dalam setiap pekerjaan.</p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Kualitas</h3>
              <p className="mt-2 text-muted-foreground">Berkomitmen pada hasil kerja terbaik.</p>
            </div>
             <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
              <div className="p-3 bg-primary/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Pelanggan</h3>
              <p className="mt-2 text-muted-foreground">Kepuasan Anda adalah prioritas utama kami.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
