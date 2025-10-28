"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle, ArrowRight, Wrench, Truck, Clock, Flag, Star } from "lucide-react";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

const highlights = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Layanan Profesional",
    description: "Mekanik kami yang berpengalaman siap menangani semua masalah kendaraan Anda.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Suku Cadang Asli",
    description: "Kami hanya menggunakan suku cadang asli dan berkualitas tinggi untuk perbaikan.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Harga Kompetitif",
    description: "Dapatkan layanan terbaik dengan harga yang transparan dan terjangkau.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Kejujuran Terjamin",
    description: "Kami bekerja dengan transparan dan jujur dalam setiap layanan yang kami berikan.",
  },
];

const divisions = [
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Workshop",
    description: "Layanan perbaikan umum dan perbaikan bodi untuk semua jenis kendaraan.",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Mobile Services",
    description: "Tune up, ganti oli, servis rem, dan komputerisasi langsung di lokasi Anda.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Quick Services",
    description: "Layanan cepat dengan target pengerjaan di bawah 120 menit.",
  },
  {
    icon: <Flag className="h-8 w-8 text-primary" />,
    title: "Racing Team",
    description: "Dukungan penuh untuk kebutuhan balap, dari persiapan hingga di lintasan.",
  },
];

const testimonials = [
  {
    quote: "Pelayanan sangat memuaskan! Mobil saya kembali prima setelah diservis di sini. Mekaniknya jujur dan profesional.",
    name: "Andi Susanto",
    location: "Tangerang",
  },
  {
    quote: "Harga sangat bersahabat dan pengerjaannya cepat. Saya pasti akan kembali lagi untuk servis rutin.",
    name: "Maria Wijaya",
    location: "Jakarta Barat",
  },
  {
    quote: "Satu-satunya bengkel yang saya percaya untuk mobil kesayangan saya. Hasilnya tidak pernah mengecewakan. Sangat direkomendasikan!",
    name: "Kevin Tan",
    location: "Gading Serpong",
  },
];

export default function HomePage() {

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold drop-shadow-lg">
            Solusi Otomotif Terpercaya
          </h1>
          <p className="mt-4 text-3xl md:text-4xl font-headline font-bold text-neutral-200 h-12">
            Bengkel Bagema
          </p>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">
            Rawat kendaraan Anda dengan layanan profesional, suku cadang asli, dan harga terbaik.
          </p>
          <Button asChild size="lg" className="mt-8 group">
            <Link href="https://wa.me/+6282261099776" target="_blank" rel="noopener noreferrer">
              Jadwalkan Servis <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900">
              Mengapa Memilih Kami?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Kami berkomitmen untuk memberikan pelayanan terbaik dengan standar kualitas tertinggi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center shadow-sm border-t-4 border-primary transition-shadow duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {highlight.icon}
                  </div>
                  <CardTitle className="mt-4 !text-xl font-bold text-gray-900">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900">
              Divisi Layanan Kami
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Menyediakan solusi lengkap untuk segala kebutuhan otomotif Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {divisions.map((division, index) => (
              <Card key={index} className="text-center shadow-sm border-t-4 border-primary transition-shadow duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                    {division.icon}
                  </div>
                  <CardTitle className="mt-4 !text-xl font-bold text-gray-900">{division.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{division.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami. Lihat apa yang mereka katakan tentang Bengkel Bagema.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between shadow-sm border transition-shadow duration-300 hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic">"{testimonial.quote}"</blockquote>
                </CardContent>
                <div className="p-6 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900">
              Tentang Bengkel Bagema
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
              Bengkel Bagema didirikan dengan tujuan memberikan solusi otomotif yang handal dan terpercaya. Sejak awal, kami fokus pada kepuasan pelanggan melalui layanan yang jujur, profesional, dan efisien. Kami bangga menjadi mitra terpercaya Anda dalam merawat kendaraan.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link href="/tentang-kami">Pelajari Lebih Lanjut</Link>
            </Button>
        </div>
      </section>
    </>
  );
}
