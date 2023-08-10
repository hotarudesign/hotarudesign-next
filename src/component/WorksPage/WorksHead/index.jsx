import TextAnimation from "src/component/WorksPage/WorksHead/TextAnimation";
import classes from "src/component/WorksPage/WorksHead/WorksHead.module.scss";

export const WorksHead = () => {
  return (
    <div className={classes.container}>
      <video
        src="/movie/movie.mp4"
        autoPlay
        muted
        loop
        className={classes.video}
      ></video>
      <div className={`${classes.inner} inner`}>
        <section id="textAnime">
          <TextAnimation section="textAnime">Works</TextAnimation>
        </section>
      </div>
    </div>
  );
};
