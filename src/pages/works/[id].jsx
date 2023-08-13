import { Footer } from "src/component/Footer";
import { Header } from "src/component/Header";
import { WorksPost } from "src/component/WorksPost";
import { client } from "src/libs/client";
import classes from "src/pages/works/WorksPost.module.scss";

const WorksId = (props) => {
  return (
    <div className="container">
      <Header />
      <article className={classes.container}>
        <div className={`${classes.inner} inner`}>
          <WorksPost props={props} />
        </div>
      </article>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: "works" });
  const ids = data.contents.map((content) => `/works/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};
export const getStaticProps = async (ctx) => {
  const data = await client.getListDetail({
    endpoint: "works",
    contentId: ctx.params.id,
  });
  return {
    props: { data },
  };
};

export default WorksId;
