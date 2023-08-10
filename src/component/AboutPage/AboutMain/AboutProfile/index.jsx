import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect } from "react";
import classes from "src/component/AboutPage/AboutMain/AboutProfile/AboutProfile.module.scss";

export const AboutProfile = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".profile__line", {
      height: 0,
    });
    gsap.to(".profile__line", {
      scrollTrigger: {
        trigger: "#AboutProfile",
        start: "top center",
        once: true,
      },
      height: "100%",
      duration: 1,
    });
  }, []);
  return (
    <section id="AboutProfile" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.ttl__wrap}>
          <h2 className={classes.ttl}>Profile</h2>
          <div id="line" className={`${classes.line} profile__line`}></div>
        </div>
        <div className={classes.item}>
          <div className={classes.body}>
            <h3 className={classes.body__name}>Hotaru</h3>
            <p className={classes.body__desc}>
              何かを作り、形にしたものをお客様へ届けることが好きでこの業界で活動しています。
              <br />
              クライアント様のお困りごと、お悩みを解決するためのご提案を得意としており、
              <br />
              常にクライアント様の立場に立ってお仕事することを大切にしております。
              <br />
            </p>
          </div>
          <figure className={classes.thumb}>
            <Image
              src="/images/webp/profile__circle.webp"
              width={200}
              height={200}
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
