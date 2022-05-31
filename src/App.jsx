/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
    <div id="app">
        <h1>Fundamento React</h1>
        <Aleatorio min={10} max={60}></Aleatorio>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={8.7} />
        <Primeiro />
    </div>
