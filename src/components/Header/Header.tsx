import { FC } from "react";
import { NavLink } from "react-router-dom";
import Logo from "assets/icons/logo.svg?react";
import scss from "./Header.module.scss";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header: FC = () => {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <header className={scss.header}>
      <div className={scss.nav_wrapper}>
        <NavLink className={scss.link} to="/">
          <Logo width={36} height={36} />
        </NavLink>
        <h1 className={scss.title}>VocabBuilder</h1>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
