import Link from "next/link";
import { Nav } from "src/component/Header/Nav";
import Image from "next/image";
import classes from "src/component/Header/Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.inner}>
        <h1>
          <Link href="" legacyBehavior>
            <a>
              <Image
                src="/images/logo-white.svg"
                width={35}
                height={35}
                alt="Hotaru Design"
              ></Image>
            </a>
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};
