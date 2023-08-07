import Image from "next/image";
import { client } from "src/libs/client";
import classes from "src/pages/works/WorksPost.module.scss";

const WorksId = (props) => {
  return (
    <div>
      <h1 className={classes.ttl}>{props.data.title}</h1>
      <figure>
        <Image src={props.data.img.url} width={350} height={250} alt="" />
      </figure>
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
