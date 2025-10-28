import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pusat Bantuan',
};

const faqs = [
  {
    question: "Apa saja layanan yang tersedia di Bengkel Bagema?",
    answer: "Kami menyediakan berbagai layanan, termasuk servis rutin, perbaikan mesin, perbaikan sistem kelistrikan, perbaikan suspensi, ganti oli, dan banyak lagi. Silakan hubungi kami untuk kebutuhan spesifik Anda."
  },
  {
    question: "Apakah saya perlu membuat janji terlebih dahulu?",
    answer: "Membuat janji temu sangat dianjurkan untuk memastikan Anda mendapatkan layanan tanpa antri. Namun, kami juga menerima pelanggan walk-in tergantung ketersediaan mekanik."
  },
  {
    question: "Jenis kendaraan apa yang dapat dilayani?",
    answer: "Kami dapat melayani sebagian besar merek dan model mobil penumpang, baik buatan Jepang, Eropa, maupun lainnya. Untuk kendaraan komersial atau model yang sangat spesifik, mohon konfirmasi terlebih dahulu."
  },
  {
    question: "Apakah ada garansi untuk perbaikan?",
    answer: "Ya, kami memberikan garansi untuk layanan dan suku cadang tertentu. Jangka waktu dan cakupan garansi akan dijelaskan secara detail sebelum pekerjaan dimulai."
  },
  {
    question: "Metode pembayaran apa yang diterima?",
    answer: "Kami menerima pembayaran tunai, transfer bank, serta kartu debit dan kredit dari bank-bank besar."
  },
];

export default function HelpPage() {
  return (
    <>
      <header className="py-20 sm:py-28 text-center bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-gray-900">Pusat Bantuan</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami.
          </p>
        </div>
      </header>
      <main className="container py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                <div className="border rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-left hover:no-underline rounded-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base px-6">
                    <p className="pb-4">{faq.answer}</p>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </>
  );
}
