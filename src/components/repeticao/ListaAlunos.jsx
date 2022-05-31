import React from "react";
import alunos from '../../data/alunos';

const ListaAlunos = (props) => {

    const alunosLista = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} com nota {aluno.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {alunosLista}
            </ul>
        </div>
    )
}

export default ListaAlunos;