import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karyawan',
};

const employees = [
  {
    name: "Budi Santoso",
    title: "Kepala Mekanik",
    bio: "Dengan pengalaman lebih dari 15 tahun, Budi adalah ahli dalam mendiagnosis masalah mesin yang kompleks.",
    imageId: "employee1",
  },
  {
    name: "Siti Aminah",
    title: "Spesialis Kelistrikan",
    bio: "Siti memastikan semua sistem kelistrikan kendaraan Anda berfungsi sempurna dengan ketelitian tinggi.",
    imageId: "employee2",
  },
  {
    name: "Agus Wijaya",
    title: "Mekanik Senior",
    bio: "Agus memiliki keahlian di bidang suspensi dan kaki-kaki, menjamin kenyamanan berkendara Anda.",
    imageId: "employee3",
  },
  {
    name: "Dewi Lestari",
    title: "Customer Service",
    bio: "Dewi siap membantu Anda dengan ramah, mulai dari penjadwalan hingga penjelasan layanan.",
    imageId: "employee4",
  },
];

export default function EmployeesPage() {
  return (
    <>
      <header className="py-20 sm:py-28 text-center bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-gray-900">Tim Profesional Kami</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Bertemu dengan para ahli di balik layanan terbaik Bengkel Bagema.
          </p>
        </div>
      </header>
      <main className="container py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {employees.map((employee) => {
            const image = PlaceHolderImages.find(
              (img) => img.id === employee.imageId
            );
            return (
              <Card key={employee.name} className="text-center shadow-sm border transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CardContent className="pt-8">
                  <Avatar className="h-32 w-32 mx-auto border-4 border-white shadow-lg">
                    {image && (
                      <AvatarImage
                        src={image.imageUrl}
                        alt={`Potret ${employee.name}`}
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{employee.name}</h3>
                  <p className="text-primary font-semibold">{employee.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{employee.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
