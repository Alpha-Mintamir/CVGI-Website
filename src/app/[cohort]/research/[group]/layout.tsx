import { readFile } from "fs/promises";
import { join } from "path";

export async function generateStaticParams() {
  const validCohorts = ["2024", "2025"];
  const params: { cohort: string; group: string }[] = [];

  for (const cohort of validCohorts) {
    try {
      const filePath = join(process.cwd(), "public", "data", cohort, "research.json");
      const fileContents = await readFile(filePath, "utf8");
      const research: { slug: string }[] = JSON.parse(fileContents);
      
      for (const project of research) {
        params.push({
          cohort,
          group: project.slug,
        });
      }
    } catch {
      // Skip if file doesn't exist or can't be read
    }
  }

  return params;
}

export default function ResearchGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

