import { Github, Linkedin } from "lucide-react";
import { IconButton } from "@/components/atoms/IconButton";
import { personal } from "@/data/portfolio";

export function SocialRail() {
  return (
    <aside className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      <IconButton href={personal.github} label="Perfil de GitHub" icon={Github} />
      <IconButton href={personal.linkedin} label="Perfil de LinkedIn" icon={Linkedin} />
    </aside>
  );
}
