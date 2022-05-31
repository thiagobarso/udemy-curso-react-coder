/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './App.css';

import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default _ =>
    <div className="App">
        <h1>Fundamento React</h1>

        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira"></Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={10} max={60}></Aleatorio>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={8.7} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>

        </div>
    </div>
