import { FC } from "react";
import {
  SiDocker,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPlaywright,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiVisualstudiocode,
  SiGo,
  SiBun,
  SiPython,
  SiCsharp,
  SiVercel,
  SiRider,
} from "@icons-pack/react-simple-icons";

type Skill = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const Skills: FC = () => {
  const categories: { title: string; items: Skill[] }[] = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", Icon: SiJavascript },
        { name: "TypeScript", Icon: SiTypescript },
        { name: "Python", Icon: SiPython },
        { name: "C#", Icon: SiCsharp },
        { name: "Go", Icon: SiGo },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", Icon: SiReact },
        { name: "Next.js", Icon: SiNextdotjs },
        { name: "Vue.js", Icon: SiVuedotjs },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
        { name: "Sass", Icon: SiSass },
      ],
    },
    {
      title: "Backend & Runtimes",
      items: [
        { name: "Node.js", Icon: SiNodedotjs },
        { name: "Bun", Icon: SiBun },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "Vercel", Icon: SiVercel },
        { name: "Docker", Icon: SiDocker },
        { name: "Git", Icon: SiGit },
      ],
    },
    {
      title: "Testing",
      items: [{ name: "Playwright", Icon: SiPlaywright }],
    },
    {
      title: "Tools",
      items: [
        { name: "VS Code", Icon: SiVisualstudiocode },
        { name: "Rider", Icon: SiRider },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="mx-auto lg:w-2/3 w-full py-10 px-5">
        <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni">
          Skills
        </h1>

        <div className="mt-6 flex flex-col gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h2 className="lexend text-lg font-semibold text-foreground/90 mb-3">
                {cat.title}
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                {cat.items.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="px-3 py-2 bg-card rounded-full text-foreground/90 lexend text-sm border border-border flex items-center gap-2"
                  >
                    <Icon aria-hidden className="w-4 h-4 text-foreground/80" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
