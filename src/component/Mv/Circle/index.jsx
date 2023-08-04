import classes from "src/component/Mv/Circle/Circle.module.scss";
import { gsap } from "gsap";
import { useEffect } from "react";

const fadeInSet = {
  opacity: 0,
  y: 50,
};
const fadeInTo = {
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "power1.inOut",
};

const from = {
  y: 0,
};
const animeTo = {
  y: 50,
  repeat: -1,
  yoyo: true,
  duration: 4,
  ease: "power1.inOut",
};

export const Circle = () => {
  useEffect(() => {
    gsap
      .timeline()
      //   circle01
      .fromTo("#circle01", fadeInSet, fadeInTo)
      .fromTo("#circle01", from, animeTo);
    gsap
      .timeline()
      //   circle02
      .fromTo("#circle02", fadeInSet, { ...fadeInTo, delay: 0.5 })
      .fromTo("#circle02", from, animeTo);
    gsap
      .timeline()
      //   circle03
      .fromTo("#circle03", fadeInSet, { ...fadeInTo, delay: 1 })
      .fromTo("#circle03", from, animeTo);
    gsap
      .timeline()
      //   circle04
      .fromTo("#circle04", fadeInSet, { ...fadeInTo, delay: 1.5 })
      .fromTo("#circle04", from, animeTo);
    gsap
      .timeline()
      //   circle05
      .fromTo("#circle05", fadeInSet, { ...fadeInTo, delay: 2 })
      .fromTo("#circle05", from, animeTo);
    gsap
      .timeline()
      //   circle06
      .fromTo("#circle06", fadeInSet, { ...fadeInTo, delay: 2.5 })
      .fromTo("#circle06", from, animeTo);
    gsap
      .timeline()
      //   circle07
      .fromTo("#circle07", fadeInSet, { ...fadeInTo, delay: 3 })
      .fromTo("#circle07", from, animeTo);
    gsap
      .timeline()
      //   circle08
      .fromTo("#circle08", fadeInSet, { ...fadeInTo, delay: 3.5 })
      .fromTo("#circle08", from, animeTo);
    gsap
      .timeline()
      //   circle09
      .fromTo("#circle09", fadeInSet, { ...fadeInTo, delay: 4 })
      .fromTo("#circle09", from, animeTo);
    gsap
      .timeline()
      //   circle¥10
      .fromTo("#circle10", fadeInSet, { ...fadeInTo, delay: 4.5 })
      .fromTo("#circle10", from, animeTo);
  }, []);
  return (
    <div className={classes.container}>
      <div
        id="circle01"
        className={`${classes.circle} ${classes.circle01}`}
      ></div>
      <div
        id="circle02"
        className={`${classes.circle} ${classes.circle02}`}
      ></div>
      <div
        id="circle03"
        className={`${classes.circle} ${classes.circle03}`}
      ></div>
      <div
        id="circle04"
        className={`${classes.circle} ${classes.circle04}`}
      ></div>
      <div
        id="circle05"
        className={`${classes.circle} ${classes.circle05}`}
      ></div>
      <div
        id="circle06"
        className={`${classes.circle} ${classes.circle06}`}
      ></div>
      <div
        id="circle07"
        className={`${classes.circle} ${classes.circle07}`}
      ></div>
      <div
        id="circle08"
        className={`${classes.circle} ${classes.circle08}`}
      ></div>
      <div
        id="circle09"
        className={`${classes.circle} ${classes.circle09}`}
      ></div>
      <div
        id="circle10"
        className={`${classes.circle} ${classes.circle10}`}
      ></div>
    </div>
  );
};
