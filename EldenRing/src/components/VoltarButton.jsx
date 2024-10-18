import React from "react";
import { Link } from "react-router-dom";
import { VoltarEstilo } from "../styles/VoltarEstilo";

const VoltarButton = () => {
  return (
    <VoltarEstilo>
      <Link to="/" className="voltar">
        Voltariojosiajfiojfjidsojfiodfjasjkldaskldjlkasdjklasjdlaskdjlksajdlksadlksdjlkasjdlsakdjalskdjlksadjklsadlkjasdjaknfjsdkgnjk
      </Link>
    </VoltarEstilo>
  );
};

export default VoltarButton;
