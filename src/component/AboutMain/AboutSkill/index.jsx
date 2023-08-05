import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import classes from "src/component/AboutMain/AboutSkill/AboutSkill.module.scss";

const CODING_ITEMS = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "WordPress",
  "NEXT.js",
];
const DESIGN_ITEMS = ["figma", "XD", "PhotoShop", "Illustrator"];

export const AboutSkill = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".skill__line", {
      height: 0,
    });
    gsap.to(".skill__line", {
      scrollTrigger: {
        trigger: "#AboutSkill",
        start: "top center",
        once: true,
      },
      height: "100%",
      duration: 1,
    });
  }, []);
  return (
    <section id="AboutSkill" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.ttl__wrap}>
          <h2 className={classes.ttl}>Skill</h2>
          <div id="line" className={`${classes.line} skill__line`}></div>
        </div>
        <div className={classes.item}>
          <h3 className={classes.item__ttl}>Coding</h3>
          <ul className={classes.list}>
            {CODING_ITEMS.map((item) => {
              return (
                <li key={item} className={classes.list__item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.item}>
          <h3 className={classes.item__ttl}>Design</h3>
          <ul className={classes.list}>
            {DESIGN_ITEMS.map((item) => {
              return (
                <li key={item} className={classes.list__item}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
