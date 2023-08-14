import { MENU_OPTIONS } from "@src/constants";
import { useEffect, useRef, useState } from "react";
import styles from "../styles.module.scss";

const { animate } = styles;
const TOP = 200;
const ANIMATION_TOP = 400;

const useHomeView = () => {
  const [activeId, setActiveId] = useState(MENU_OPTIONS.ABOUT_ME.id);
  const aboutMeRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const handleScroll = (_e: Event) => {
    const skills = skillsRef.current?.getBoundingClientRect();
    const projects = projectsRef.current?.getBoundingClientRect();
    if (!skills || !projects) return;
    if (skills.top <= ANIMATION_TOP)
      skillsRef.current?.setAttribute(
        "class",
        `${skillsRef.current?.classList[0]} ${animate}`
      );
    if (skills.top <= TOP) setActiveId(MENU_OPTIONS.SKILLS.id);
    if (projects.top <= ANIMATION_TOP)
      projectsRef.current?.setAttribute(
        "class",
        `${projectsRef.current?.classList[0]} ${animate}`
      );
    if (projects.top <= TOP) setActiveId(MENU_OPTIONS.PROJECTS.id);
    if (skills.top > ANIMATION_TOP && projects.top > ANIMATION_TOP)
      aboutMeRef.current?.setAttribute(
        "class",
        `${aboutMeRef.current?.classList[0]} ${animate}`
      );
    if (skills.top > TOP && projects.top > TOP)
      setActiveId(MENU_OPTIONS.ABOUT_ME.id);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { capture: true });
    handleScroll(new Event("scroll"));
  }, []);

  return { activeId, aboutMeRef, skillsRef, projectsRef };
};

export default useHomeView;
