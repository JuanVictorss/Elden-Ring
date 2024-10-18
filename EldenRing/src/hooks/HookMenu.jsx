import { useState, useEffect } from "react";

export const useOutsideClick = (el, estadoInicial) => {
  const [ativo, setAtivo] = useState(estadoInicial);

  useEffect(() => {
    const onClick = (e) => {
      if (el.current !== null && !el.current.contains(e.target)) {
        setAtivo(!ativo);
      }
    };
    if (ativo) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [ativo, el]);
  return [ativo, setAtivo];
};
