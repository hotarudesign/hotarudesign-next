import classes from "src/component/AboutPage/AboutHead/CircleText/CircleText.module.scss";

export const CircleText = () => {
  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <svg className={classes.circleText} viewBox="0 0 100 100">
          <path
            id="circle"
            className={classes.circleText__circle}
            d="M 0 50 A 50 50 0 1 1 0 51 z"
          />
          <text className={classes.circleText__text}>
            <textPath xlinkHref="#circle">
              Coding & Design Coding & Design Coding & Design
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
