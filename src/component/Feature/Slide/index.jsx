import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";
import classes from "src/component/Feature/Slide/Slide.module.scss";
const Text = [
  {
    id: 1,
    ttl: "楽しく制作を、より良い制作を",
    desc: `どんな制作でも、どんなジャンルでも、まずは楽しんで制作することを心掛けています。サービスや制作物も、「利用する方の身になり、精度の高い制作物を作る。」という思いを持って臨むようにしています。`,
    img: "/images/webp/feature_01.webp",
  },
  {
    id: 2,
    ttl: "思いやりを持って",
    desc: "制作に関わる方への配慮の気持ちを大切にしています。クライアント様からもコミュニケーションが取りやすいように明るく対応することで、お悩みごとや、お困りごとをご相談いただきやすい環境を作れていると感じています。",
    img: "/images/webp/feature_02.webp",
  },
  {
    id: 3,
    ttl: "自己研磨の姿勢を大切に",
    desc: "Webデザインのお仕事を続けられているのは「好きだから」という理由につきますが、その他にも理由があります。制作スキルはもちろんですが、コミュニケーションスキルやビジネススキルといった側面でもご依頼いただくお仕事を通じて常に成長させていただいていると感じております。「Webのスキルを活かして世の中の人の役にたち、新たな制作や経験をすることで自身を成長させる。」",
    img: "/images/webp/feature_03.webp",
  },
];
export const Slide = () => {
  return (
    <Splide
      className={classes.slider}
      options={{
        autoplay: true,
        interval: 3000,
        type: "loop",
        pauseOnHover: false,
      }}
    >
      {Text.map((text) => {
        return (
          <SplideSlide key={text.id} className={classes.item}>
            <div className={classes.body}>
              <h2 className={classes.ttl}>{text.ttl}</h2>
              <p className={classes.desc}>{text.desc}</p>
            </div>
            <figure className={classes.thumb}>
              <Image src={text.img} width={400} height={400} alt=""></Image>
            </figure>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
