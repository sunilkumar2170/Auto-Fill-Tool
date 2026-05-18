"use client";
import { useState } from "react";
import {
  useAppSelector,
  useSaveStateToLocalStorageOnChange,
  useSetInitialStore,
} from "lib/redux/hooks";
import { ShowForm, selectFormsOrder } from "lib/redux/settingsSlice";

// ✅ ADD THIS IMPORT
import {
  selectProfile,
  selectEducations,
  selectSkills,
  selectProjects,
} from "lib/redux/resumeSlice";

import { ProfileForm } from "components/ResumeForm/ProfileForm";
import { WorkExperiencesForm } from "components/ResumeForm/WorkExperiencesForm";
import { EducationsForm } from "components/ResumeForm/EducationsForm";
import { ProjectsForm } from "components/ResumeForm/ProjectsForm";
import { SkillsForm } from "components/ResumeForm/SkillsForm";
import { ThemeForm } from "components/ResumeForm/ThemeForm";
import { CustomForm } from "components/ResumeForm/CustomForm";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { cx } from "lib/cx";

const formTypeToComponent: { [type in ShowForm]: () => JSX.Element } = {
  workExperiences: WorkExperiencesForm,
  educations: EducationsForm,
  projects: ProjectsForm,
  skills: SkillsForm,
  custom: CustomForm,
};

export const ResumeForm = () => {
  useSetInitialStore();
  useSaveStateToLocalStorageOnChange();

  const formsOrder = useAppSelector(selectFormsOrder);

  // ✅ ADD THESE
  const profile = useAppSelector(selectProfile);
  const educations = useAppSelector(selectEducations);
  const skills = useAppSelector(selectSkills);
  const projects = useAppSelector(selectProjects);

  // ✅ PROGRESS LOGIC
  let total = 0;
  let filled = 0;

  if (profile.name) filled++; total++;
  if (profile.email) filled++; total++;

  if (educations.length > 0) filled++; total++;
  if (skills.length > 0) filled++; total++;
  if (projects.length > 0) filled++; total++;

  const progress = total === 0 ? 0 : Math.round((filled / total) * 100);

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={cx(
        "flex justify-center scrollbar-thin scrollbar-track-gray-100 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end md:overflow-y-scroll",
        isHover ? "scrollbar-thumb-gray-200" : "scrollbar-thumb-gray-100"
      )}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <section className="flex max-w-2xl flex-col gap-8 p-[var(--resume-padding)]">

        {/* ✅ PROGRESS BAR UI */}
        <div>
          <p>{progress}% Resume Completed</p>
          <div style={{ background: "#eee", height: "8px" }}>
            <div
              style={{
                width: `${progress}%`,
                background: "green",
                height: "8px",
              }}
            />
          </div>
        </div>

        <ProfileForm />
        {formsOrder.map((form) => {
          const Component = formTypeToComponent[form];
          return <Component key={form} />;
        })}
        <ThemeForm />
        <br />
      </section>
      <FlexboxSpacer maxWidth={50} className="hidden md:block" />
    </div>
  );
};