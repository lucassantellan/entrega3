function guardarProductosCarrito(productos){
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function cargarProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito(){
    localStorage.removeItem("carrito");
}

function estaEnElCarrito(id){
    alert("hola");
}

function agregarAlCarrito(id){
    const carrito = cargarProductosCarrito();
    const producto = buscarProducto(id);
    carrito.push(producto)
    guardarProductosCarrito(carrito);
    console.log("se agrego el producto con el #" + id);

}

function buscarProducto(id){
    const productos = cargarProductosLS();

    return productos.find(item => item.id === id);
}

function totalProductosCarrito(){
    const productos = cargarProductosCarrito();
    
    return productos.lenght;

}

function renderBotonCarrito (){
    const salida = ` <a href="carrito.html" id="carrito" class="btn btn-dark position-relative"></a>`
    document.getElementById("carrito").innerHTML = salida
}


