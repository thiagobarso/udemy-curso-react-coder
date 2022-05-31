import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDOM.render(<div>
    <Primeiro />
    <ComParametro
        titulo="Situação do Aluno"
        aluno="Pedro Silva"
        nota={9.3} />
    <ComParametro
        titulo="Situação do Aluno"
        aluno="Maria Bonita"
        nota={9.9} />
</div>,
    document.getElementById('root'))