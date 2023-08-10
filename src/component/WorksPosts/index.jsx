import Image from "next/image";
import Link from "next/link";
import classes from "src/component/WorksPosts/WorksPosts.module.scss";

export const WorksPosts = (props) => {
  const contents = props.props.contents;
  return (
    <div className={classes.container}>
      <div className={`${classes.inner} inner`}>
        <ul className={classes.list}>
          {contents.map((content) => {
            return (
              <li key={content.id} className={classes.item}>
                <Link href={`/works/${content.id}`} legacyBehavior>
                  <a className={classes.item__wrap}>
                    <div className={classes.item__txt}>
                      <h3 className={classes["item__txt-ttl"]}>
                        {content.title}
                      </h3>
                      <p className={classes["item__txt-category"]}>
                        担当範囲：
                        {content.category}
                      </p>
                    </div>
                    <figure className={classes.thumb}>
                      <Image
                        src={content.img.url}
                        width="350"
                        height="0"
                        style={{ width: "100%", height: "auto" }}
                        className={classes["thumb-img"]}
                        alt=""
                      />
                    </figure>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
