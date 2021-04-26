import React, { useState } from "react";
import { BurgerMenuWrapper, BurgerLine } from "./style";
import Sidemenu from "../Sidemenu/Sidemenu";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <BurgerMenuWrapper open={open} onClick={() => setOpen(!open)}>
        <BurgerLine open={open}></BurgerLine>
        <BurgerLine open={open}></BurgerLine>
        <BurgerLine open={open}></BurgerLine>
      </BurgerMenuWrapper>
      <Sidemenu open={open} />
    </div>
  );
};

export default BurgerMenu;
