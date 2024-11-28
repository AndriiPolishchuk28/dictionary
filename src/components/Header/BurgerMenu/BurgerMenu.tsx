import { FC, useState } from "react";
import { Drawer } from "@mui/material";
import scss from "./BurgerMenu.module.scss";
import { icons } from "../../../assets";
import { menu } from "../BurgerMenu/types";
import { NavLink } from "react-router-dom";

const BurgerMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer(true)} type="button">
        <svg width={32} height={32} className={scss.svg_navbar}>
          <use href={`${icons}#icon-nav`}></use>
        </svg>
      </button>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "185px",
            backgroundColor: "#85AA9F",
          },
        }}
      >
        <nav className={scss.nav_wrapper}>
          <div className={scss.user_wrapper}>
            <p className={scss.text_name}>Name</p>
            <div className={scss.icon_wrapper}>
              <svg width={14} height={14} className={scss.svg_icon}>
                <use href={`${icons}#icon-user`}></use>
              </svg>
            </div>
          </div>
          <button
            onClick={toggleDrawer(false)}
            className={scss.close_btn}
            type="button"
          >
            <svg width={32} height={32} className={scss.svg_close}>
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </button>
        </nav>
        <ul className={scss.list}>
          {menu.map((item) => (
            <li className={scss.item} key={item.label}>
              <NavLink className={scss.link} to={item.link}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <button className={scss.btn_logout} type="button">
            Log out
            <svg width={16} height={16} className={icons}>
              <use href={`${icons}#icon-arrow-right`}></use>
            </svg>
          </button>
        </ul>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
