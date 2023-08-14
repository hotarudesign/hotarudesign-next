import Image from "next/image";
import Link from "next/link";
import classes from "src/component/WorksPost/WorksPost.module.scss";

export const WorksPost = (props) => {
  const data = props.props.data;
  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <div className={classes.body}>
          <Link href={data.link} legacyBehavior>
            <a
              className={classes.ttl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.title}
            </a>
          </Link>
          <p className={classes.category}>{data.category}</p>
          <p className={classes.desc}>{data.desc}</p>
        </div>
        <figure className={classes.thumb}>
          <Image
            src={data.img.url}
            width="1000"
            height="0"
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </figure>
      </div>
    </div>
  );
};
