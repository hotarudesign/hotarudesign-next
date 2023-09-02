import Link from "next/link";
import Image from "next/image";
import classes from "src/component/Footer/Footer.module.scss";
import { Nav } from "src/component/Footer/Nav";

export const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.inner}>
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src="/images/logo-black.svg"
              width={35}
              height={35}
              alt="Hotaru Design"
            ></Image>
          </a>
        </Link>
        <Nav />
        <p className={classes.copy}>
          <small>Hotaru Design All Rights Reserved.</small>
        </p>
      </div>
    </footer>
  );
};
