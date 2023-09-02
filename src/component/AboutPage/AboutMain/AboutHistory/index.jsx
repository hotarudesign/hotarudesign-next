import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import classes from "src/component/AboutPage/AboutMain//AboutHistory/AboutHistory.module.scss";

const HISTORY_ITEMS = [
  {
    id: 1,
    body: "コールセンター業界を経験。営業とカスタマーサービスを経験し部下50名を管理するマネージャー職を経験。",
  },
  {
    id: 2,
    body: "副業でWeb制作を開始。Webデザインやコーディングのお仕事をいただきつつ、デジタルハリウッドSTUDIO by LIGへ通学しWebデザインの勉強をする。",
  },
  {
    id: 3,
    body: "Web制作会社へフロントエンドエンジニアとして入社。WebサイトやLPのコーディング、改修、自社プロダクトのテンプレート作成、改修、外注コーダーとの業務連絡等を経験。",
  },
  {
    id: 4,
    body: "フリーランスとしてHotaru Designの運営を再開。 Web制作会社や個人のお客様からの制作依頼を対応。",
  },
];

export const AboutHistory = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".history__line", {
      height: 0,
    });
    gsap.to(".history__line", {
      scrollTrigger: {
        trigger: "#AboutHistory",
        start: "top center",
        once: true,
      },
      height: "100%",
      duration: 1,
    });
  }, []);
  return (
    <section id="AboutHistory" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.ttl__wrap}>
          <h2 className={classes.ttl}>History</h2>
          <div className={`${classes.line} history__line`}></div>
        </div>
        <ol className={classes.list}>
          {HISTORY_ITEMS.map((item) => {
            return (
              <li key={item.id} className={classes.item}>
                <p className={classes.body}>{item.body}</p>
                <p className={classes.num}>{item.id}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
