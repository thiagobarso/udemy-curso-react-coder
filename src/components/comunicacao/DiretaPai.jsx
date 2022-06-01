import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho nome="Júnior" idade={20} nerd={true}/>
            <DiretaFilho nome="Gabriel" idade={17} nerd={true}/>
        </div>
    );
}

export default DiretaPai;