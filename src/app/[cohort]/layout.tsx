import { notFound } from "next/navigation";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";

// Valid cohorts
const validCohorts = ["2024", "2025"];

interface CohortLayoutProps {
  children: React.ReactNode;
  params: Promise<{ cohort: string }>;
}

export default async function CohortLayout({ children, params }: CohortLayoutProps) {
  const { cohort } = await params;
  
  // Validate cohort
  if (!validCohorts.includes(cohort)) {
    notFound();
  }

  return (
    <>
      <Navbar cohort={cohort} />
      {children}
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return validCohorts.map((cohort) => ({
    cohort,
  }));
}

