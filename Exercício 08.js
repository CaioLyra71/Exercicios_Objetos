const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]



for (usuario of usuarios) {
    let { nome, pets } = usuario
    if (pets.length > 0) {
        console.log(`Sou ${nome} e tenho ${pets.length} pets`)
    } else {
        console.log(`Sou ${nome} e não tenho pets`)
    }
}