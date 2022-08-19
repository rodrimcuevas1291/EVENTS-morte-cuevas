class pizza {
    constructor(id, sabor, precio, tamaño) {
        this.id = id
        this.sabor = sabor.toUpperCase()
        this.precio = precio
        this.tamaño = tamaño
    }
}
class empanada {
    constructor(num, gusto, valor, cocina) {
        this.num = num
        this.gusto = gusto.toUpperCase()
        this.valor = valor
        this.cocina = cocina
    }
}

const botones = document.querySelectorAll(".btn")
botones.forEach((boton) => boton.addEventListener("click", mensajeCarrito))

function mensajeCarrito () {
    alert("Excelente, has agregado el producto al carrito!")
}

const fields = document.querySelectorAll("input")
function colorInput () {
    fields.forEach(field => {
        field.addEventListener("focus", ()=> {
            field.className = "fondo"
        })
        field.addEventListener("blur", ()=> {
            field.className = ""
        })
    })
}

colorInput()

const texto = document.querySelector("textarea")
texto.addEventListener("mousemove", ()=> {
    texto.title = "Ingrese un comentario acá por favor"
})

const empanadas = [] 
const pizzas = []
const carrito = []

function agregarPizzas() {
    pizzas.push(new pizza(1, "Muzzarella", 900, "familiar"))
    pizzas.push(new pizza(2, "Napolitana", 1300, "familiar"))
    pizzas.push(new pizza(3, "Fugazzeta", 850, "individual"))
    pizzas.push(new pizza(4, "Cantimpalo", 1650, "familiar"))
    pizzas.push(new pizza(5, "Especial", 1800, "familiar"))
    pizzas.push(new pizza(6, "Jamón y Morrones", 1400, "familiar"))
    pizzas.push(new pizza(7, "Mediterranea", 1900, "familiar"))
}
function agregarEmpanadas() {
    empanadas.push(new empanada(1, "Carne", 220, "frita u horno"))
    empanadas.push(new empanada(2, "Jamón y queso", 180, "frita u horno"))
    empanadas.push(new empanada(3, "Cheeseburger", 200, "horno"))
    empanadas.push(new empanada(4, "Bondiola", 200, "horno"))
    empanadas.push(new empanada(5, "Humita", 180, "horno"))
    empanadas.push(new empanada(6, "Verduda", 180, "horno"))
    empanadas.push(new empanada(7, "Carne a cuchillo", 230, "horno"))
    empanadas.push(new empanada(8, "Cuatro quesos", 220, "horno"))
    empanadas.push(new empanada(9, "Jamon y roquefort", 230, "horno"))
}

agregarEmpanadas();
agregarPizzas();
seleccionoPizzas ();
seleccionoEmpanadas ();

const seleccionarPizzas = document.querySelector("#selectPizzas")
function seleccionoPizzas () {
    pizzas.forEach(pizza => {
        selectPizzas.innerHTML += `<option value="1">${pizza.sabor}</option>`
    })
}

const seleccionarEmpanadas = document.querySelector("#selectEmpanadas")
function seleccionoEmpanadas () {
    empanadas.forEach(empanada => {
        selectEmpanadas.innerHTML += `<option value="1">${empanada.gusto}</option>`
    })
}


function listarPizzas() {
    const listaPizzas = document.getElementById("listaPizzas")
    pizzas.forEach(pizza => {
        listaPizzas.innerHTML += `
            <li>SABOR: ${pizza.sabor} PRECIO: ${pizza.precio} TAMAÑO: ${pizza.tamaño}</li>`
    })
}

function listarEmpanadas() {
    const listaEmpanadas = document.getElementById("listaEmpanadas")
    empanadas.forEach(empanada => {
        listaEmpanadas.innerHTML += `
            <li>SABOR: ${empanada.gusto} PRECIO: ${empanada.valor}HORNO O FRITA: ${empanada.cocina}</li>
            
        
        `
    })
}

listarPizzas ();
listarEmpanadas ();

alert("Bienvenidos a Simplo Cocina")
pedido = prompt("Que pizza vas a querer ordernar hoy? Te recordamos los sabores con los que contamos: \nMuzzarella \nNapolitana \nFugazzetta \nPepperoni \nEspecial \Jamón y Morrones \nCancha").toUpperCase()

let buscar = pizzas.filter(el => el.sabor.includes(pedido))

alert("Excelente elección, a continuación le diremos cual es el precio a pagar por esa Pizza")

alert(`El precio a pagar es de: ${buscar[0].precio} `)

alert("Perfecto, ya tenemos la pizza, pero también contamos con empanadas. A continuación vas a poder buscar si contamos con el sabor que querés!")
let orden = prompt("Elegí que sabor de empanada te gustaría pedir, a ver si lo tenemos y te lo podemos llevar").toUpperCase()
let buscarOrden = empanadas.find(empanadas => empanadas.gusto == orden)
if (buscarOrden == undefined) {
    console.log("Lo sentimos, no contamos con ese sabor, proba ingresar otro!")
}
else {
    console.log(buscarOrden)
}
