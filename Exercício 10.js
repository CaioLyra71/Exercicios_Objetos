//CLIENTES
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

//PRODUTOS
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

// a. Adicione uma tv, dois cabos usb e uma webcam para o José
// {
//     item: {
//         nome: 'TV Samsung 4K',
//         valorEmCentavos: 129900
//     },
//     quantidade: 1
// }

let comprador = "roberto"

if (comprador === "jose") {
    let comprasJose = [{
        item: tv,
        quantidade: 1
    },
    {
        item: caboUsb,
        quantidade: 1
    },
    {
        item: webcam,
        quantidade: 1
    }
    ]


    jose.carrinho = comprasJose

    console.log(jose.carrinho)
}


// b. Adicione dois notebooks para o Carlos
else if (comprador === "carlos") {
    let comprasCarlos = [{
        item: notebook,
        quantidade: 2
    },

    ]

    carlos.carrinho = comprasCarlos

    console.log(carlos.carrinho)
}

// c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia

else if (comprador === "patricia") {
    let comprasPatricia = [{
        item: teclado,
        quantidade: 1
    },
    {
        item: caboUsb,
        quantidade: 2
    },
    {
        item: carregador,
        quantidade: 1
    },
    {
        item: mouse,
        quantidade: 1
    },
    {
        item: monitor,
        quantidade: 1
    }


    ]

    patricia.carrinho = comprasPatricia

    console.log(patricia.carrinho)
}

// d. Adicione cinco webcams para o Renato

else if (comprador === "renato") {
    let comprasRenato = [{
        item: webcam,
        quantidade: 5
    },

    ]

    renato.carrinho = comprasRenato

    console.log(renato.carrinho)
}

// e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto

else if (comprador === "roberto") {
    let comprasRoberto = [{
        item: webcam,
        quantidade: 1
    },
    {
        item: caboUsb,
        quantidade: 2
    },
    {
        item: monitor,
        quantidade: 1
    }


    ]

    roberto.carrinho = comprasRoberto

    console.log(roberto.carrinho)
}