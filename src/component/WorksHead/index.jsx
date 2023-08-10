import classes from "src/component/WorksHead/WorksHead.module.scss";

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
        <h2 className={classes.ttl}>Works</h2>
      </div>
    </div>
  );
};
