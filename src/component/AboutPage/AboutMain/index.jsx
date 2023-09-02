import { AboutHistory } from "src/component/AboutPage/AboutMain/AboutHistory";
import classes from "src/component/AboutPage/AboutMain/AboutMain.module.scss";
import { AboutProfile } from "src/component/AboutPage/AboutMain/AboutProfile";
import { AboutSkill } from "src/component/AboutPage/AboutMain/AboutSkill";

export const AboutMain = () => {
  return (
    <main className={classes.container}>
      <AboutProfile />
      <AboutHistory />
      <AboutSkill />
    </main>
  );
};
