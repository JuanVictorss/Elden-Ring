import React from "react";
import { Dropdown } from "flowbite-react";
import BarraLateral from "./Painel";
import { MenuEstilo } from "../styles/MenuEstilo";
import ListaLinks from "./Links";

export const Menu = () => {
  return (
    <MenuEstilo>
      <Dropdown dismissOnClick={false}>
        <Dropdown.Item>
          <ListaLinks />
        </Dropdown.Item>
      </Dropdown>
    </MenuEstilo>
  );
};
