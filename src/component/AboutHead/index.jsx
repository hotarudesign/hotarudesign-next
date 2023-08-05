import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import classes from "src/component/AboutHead/AboutHead.module.scss";

export const AboutHead = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.text}>
          <Splide
            className="splide"
            options={{
              type: "loop",
              drag: false,
              arrows: false,
              pagination: false,
              focus: "center",
              perPage: 1,
              isNavigation: false,
              autoScroll: {
                speed: 1,

                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <h2 className={classes.ttl}>
                More Speedy, More Politely, More Creative
              </h2>
            </SplideSlide>
          </Splide>
          <p className={classes.desc}></p>
        </div>
        <figure className={classes.thumb}>
          <Image
            src="/images/webp/about_thumb.webp"
            width={1000}
            height={1000}
            alt=""
          ></Image>
        </figure>
      </div>
    </div>
  );
};
