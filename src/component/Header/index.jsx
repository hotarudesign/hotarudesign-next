import Link from "next/link";
import { Nav } from "src/component/Nav";
import classes from "src/component/Header/Header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__inner}>
        <h1 className={classes.header__logo}>
          <Link href="" legacyBehavior>
            <a>Hotaru Design</a>
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};
