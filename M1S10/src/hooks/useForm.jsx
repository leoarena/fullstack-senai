import { useState } from "react";

export default function useForm() {
  const [passoAtual, setPassoAtual] = useState(0);

  function mudarPasso(passo, evento) {
    evento.preventDefault();
    if (passo < 0 || passo > 2) return;
    setPassoAtual(passo);
  }

  return {
    passoAtual,
    mudarPasso,
  };
}
