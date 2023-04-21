const productos = [
    {
        id:1,
        nombre: "g-shock",
        precio: 35700,
        imagen: "casio gshock (4).jpg"
    },
    {
        id:2,
        nombre: "g-shock",
        precio: 28400,
        imagen: "g shock blanco.jpg"
    },
    {
        id:3,
        nombre: "g-shock",
        precio: 20550,
        imagen: "g shock rojo.jpg"
    },
    {
        id:4,
        nombre: "g-shock",
        precio: 10500,
        imagen: "ga-700bp-1a.jpg"
    },
    {
        id:5,
        nombre: "g-shock",
        precio: 50500,
        imagen: "gshock azul.jpg"
    },
    {
        id:6,
        nombre: "g-shock",
        precio: 20000,
        imagen: "ga-900gc-7a.jpg"
    },
    {
        id:7,
        nombre: "g-shock",
        precio: 45000,
        imagen: "ga-900gc-7a.jpg"
    },
    {
        id:8,
        nombre: "g-shock",
        precio: 15000,
        imagen: "ga-900gc-7a.jpg"
    },
   
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
   return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);
