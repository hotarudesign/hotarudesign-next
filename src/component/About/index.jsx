import classes from "src/component/About/About.module.scss";
import { Profile } from "src/component/About/Profile";

export const About = () => {
  return (
    <section className={classes.container}>
      <div className={`${classes.inner} inner`}>
        <h2 className={classes.ttl}>About</h2>
        <Profile />
      </div>
    </section>
  );
};
