import Link from "next/link";
import classes from "src/component/Footer//Nav/Nav.module.scss";

const navItem = ["About", "Works", "Contact"];

export const Nav = () => {
  return (
    <ul className={classes.list}>
      {navItem.map((item) => {
        return (
          <li key={item} className={classes.item}>
            <Link href="" legacyBehavior>
              <a>{item}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
