import Link from "next/link";
import classes from "src/component/Footer//Nav/Nav.module.scss";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => {
  return (
    <ul className={classes.list}>
      {NAV_ITEMS.map((item) => {
        return (
          <li key={item.href} className={classes.item}>
            <Link href={item.href} legacyBehavior scroll={false}>
              <a>{item.label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
