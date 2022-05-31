import React from "react";

const faz = (props) => {    
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return <div>
        <h2>Valor Aleatório</h2>
        <p>
            <strong> Valor Mínimo: </strong> { min }
        </p>
        <p>
            <strong> Valor Máximo: </strong> { max }
        </p>
        <p>
            <strong> Valor escolhido: </strong> { aleatorio }
        </p>
    </div>
}

export default faz;