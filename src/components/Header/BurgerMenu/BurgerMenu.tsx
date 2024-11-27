import { FC, useState } from "react";
import { Drawer } from "@mui/material";

const BurgerMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer(true)} type="button">
        Open
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ul>
          <li>fvefverv</li>
          <li>erververv</li>
        </ul>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
