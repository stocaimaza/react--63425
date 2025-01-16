//// useContador: nuestro propio hook para contar productos. 

import { useState } from "react";
//Recuerden que nuestros propios hooks pueden utilizar los hooks nativos de React. 

export const useContador = (valorInicial, valorMaximo) => {
    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        if(contador < valorMaximo) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > valorInicial) {
            setContador(contador - 1); 
        }
    }

    return {contador, incrementar, decrementar}
}