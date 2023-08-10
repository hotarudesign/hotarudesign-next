import { useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import classes from "src/component/WorksPage/WorksHead/TextAnimation/TextAnimation.module.scss";

const TextAnimation = (props) => {
  const textRef = useCallback((node) => {
    if (node !== null) {
      const text = node.innerHTML; //テキストを読み込む
      const height = node.clientHeight; //高さを取得する
      node.innerHTML = ""; //テキストを削除する
      node.style.height = height + "px"; //高さを設定する
      setAnimation(text);
    }
  }, []);

  const setAnimation = (text) => {
    const numText = text.length;
    const selector = "#" + props.section;

    gsap.registerPlugin(TextPlugin);
    gsap.to(`${selector} .animation-text`, {
      duration: numText * 0.1,
      delay: 0.8,
      ease: "none",
      text: {
        value: text,
      },
    });
  };

  return (
    <p ref={textRef} className={`${classes.main} animation-text`}>
      {props.children}
    </p>
  );
};

export default TextAnimation;
