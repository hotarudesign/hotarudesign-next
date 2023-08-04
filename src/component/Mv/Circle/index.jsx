import classes from "src/component/Mv/Circle/Circle.module.scss";
import { gsap } from "gsap";
import { useEffect } from "react";

export const Circle = () => {
  useEffect(() => {
    gsap
      .timeline()
      //   circle01
      .fromTo(
        "#circle01",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle01",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 4,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle02
      .fromTo(
        "#circle02",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 0.5, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle02",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 10,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle03
      .fromTo(
        "#circle03",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 1, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle03",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle04
      .fromTo(
        "#circle04",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 1.5, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle04",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 5,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle05
      .fromTo(
        "#circle05",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 2, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle05",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 8,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle06
      .fromTo(
        "#circle06",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 2.5, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle06",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 4,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle07
      .fromTo(
        "#circle07",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 3, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle07",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 6,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle08
      .fromTo(
        "#circle08",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 3.5, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle08",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 10,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle09
      .fromTo(
        "#circle09",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 4, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle09",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 4,
          ease: "power1.inOut",
        }
      );
    gsap
      .timeline()
      //   circle¥10
      .fromTo(
        "#circle10",
        {
          opacity: 0,
          y: 50,
        },
        { opacity: 1, y: 0, duration: 2, delay: 4.5, ease: "power1.inOut" }
      )
      .fromTo(
        "#circle10",
        { y: 0 },
        {
          y: 50,
          repeat: -1,
          yoyo: true,
          duration: 6,
          ease: "power1.inOut",
        }
      );
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
