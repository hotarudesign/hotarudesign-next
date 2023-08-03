import classes from "src/component/Feature/Feature.module.scss";
import { Slide } from "src/component/Feature/Slide";

export const Feature = () => {
  return (
    <section className={classes.container}>
      <div className={classes.inner}>
        <h2 className={classes.ttl}>Features</h2>
        <Slide />
      </div>
    </section>
  );
};
