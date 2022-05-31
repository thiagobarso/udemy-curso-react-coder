import React from "react";
import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
    return  (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Ana" {...props}/>
            <FamiliaMembro nome="Gustavo" sobrenome="Ferreira"/>
        </div>
    );
}

export default Familia;