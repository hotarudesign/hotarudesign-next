import { Circle } from "src/component/Mv/Circle";
import { Hero } from "src/component/Mv/Hero";
import classes from "src/component/Mv/Mv.module.scss";

export const Mv = () => {
  return (
    <div className={`${classes.container} ${classes.isShow}`}>
      <Circle />
      <div className={classes.inner}>
        <Hero />
      </div>
    </div>
  );
};
