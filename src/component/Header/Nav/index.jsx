import Link from "next/link";
import classes from "src/component/Header/Nav/Nav.module.scss";

const navItem = ["About", "Works", "Contact"];

export const Nav = () => {
  return (
    <nav className={classes.gnav}>
      <ul className={classes.gnav__list}>
        {navItem.map((item) => {
          return (
            <li key={item} className={classes.gnav__item}>
              <Link href="" legacyBehavior>
                <a>{item}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
