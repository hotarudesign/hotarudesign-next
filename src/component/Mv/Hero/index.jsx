import { useEffect } from "react";
import classes from "src/component/Mv/Hero/Hero.module.scss";
import TextAnimation from "src/component/Mv/Hero/TextAnimation";
import { gsap } from "gsap";

export const Hero = () => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        "#slideAnime",
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, delay: 2.2, ease: "power2.inOut" }
      );
  }, []);
  return (
    <div>
      <section id="textAnime">
        <TextAnimation section="textAnime">Hotaru Design</TextAnimation>
      </section>
      <p id="slideAnime" className={classes.lead}>
        Make your production better
      </p>
    </div>
  );
};
