import React from "react";

const PassoForm = (props) => {
    return (
        <div>
            <label htmlFor="passouInput">Passo:</label>
            <input
                id="passoInput"
                type="number"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)} />
        </div>
    );
}

export default PassoForm;