import { EducationCard } from "@/components/molecules/EducationCard";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="educacion" className="py-16">
      <SectionTitle eyebrow="Trayectoria" title="Educación" description="Formación académica y experiencias que han construido mi perfil." />
      <div className="space-y-5">
        {education.map((item) => <EducationCard key={`${item.institution}-${item.period}`} item={item} />)}
      </div>
    </section>
  );
}
