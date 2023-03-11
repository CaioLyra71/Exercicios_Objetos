const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}

const lista = [
    {
        identificador: 1,
        nome_da_aula: "Introdução a Programação"
    },
    {
        identificador: 2,
        nome_da_aula: "Variáveis"
    },
    {
        identificador: 3,
        nome_da_aula: "Condicionais"
    },
    {
        identificador: 4,
        nome_da_aula: "Arrays"
    }
]


const { aulas } = curso
for (let elementos of lista) {
    aulas.push(elementos)
}
console.log(curso)
