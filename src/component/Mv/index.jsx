import { Hero } from "src/component/Mv/Hero";
import classes from "src/component/Mv/Mv.module.scss";

export const Mv = () => {
  return (
    <div className={`${classes.container} ${classes.isShow}`}>
      <div className={classes.inner}>
        <Hero />
      </div>
    </div>
  );
};
