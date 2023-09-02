import Image from "next/image";
import Link from "next/link";
import classes from "src/component/Works/Works.module.scss";

export const Works = (props) => {
  const contents = props.props.contents;

  return (
    <section className={classes.container}>
      <div className={`${classes.inner} inner`}>
        <h2 className={classes.ttl}>Works</h2>
        <ul className={classes.list}>
          {contents.map((content) => {
            return (
              <li key={content.id} className={classes.item}>
                <Link
                  href={`/works/${content.id}`}
                  legacyBehavior
                  scroll={false}
                >
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
        <div className={classes["btn-wrap"]}>
          <Link href="/works" legacyBehavior scroll={false}>
            <a className={classes.btn}>
              制作実績をもっと見る<span className={classes["btn-arrow"]}></span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
