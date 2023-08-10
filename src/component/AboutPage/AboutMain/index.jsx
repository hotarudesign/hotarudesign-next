import { AboutHistory } from "src/component/AboutMain/AboutHistory";
import classes from "src/component/AboutMain/AboutMain.module.scss";
import { AboutProfile } from "src/component/AboutMain/AboutProfile";
import { AboutSkill } from "src/component/AboutMain/AboutSkill";

export const AboutMain = () => {
  return (
    <main className={classes.container}>
      <AboutProfile />
      <AboutHistory />
      <AboutSkill />
    </main>
  );
};
