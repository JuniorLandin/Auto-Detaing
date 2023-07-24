import { useRouter } from 'next/router';
import React from 'react'

const Comprar = () => {
  const router = useRouter();
  const { marca } = router.query;

  // Use o valor de 'marca' para filtrar as informações

  return (
    <div>
      <h1>Página de Comprar</h1>
      <h1>Marca selecionada: {marca}</h1>
      {/* Restante do conteúdo da página de compras */}
    </div>
  );
}

export default Comprar
