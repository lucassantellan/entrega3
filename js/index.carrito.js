function renderProductosCarrito() {
    const productos = cargarProductosCarrito(); //4 productos
    let salida = "";

    for (producto of productos) {
        salida += `<div class="col-md-3 my-3">
            <div class="card" text-center>
              <img src="${"img/" + producto.imagen}" alt="${producto.nombre}"class="card-img-top" />
                <div class="card-body">
                <p class="card-text">${producto.nombre}</p>
                <p><button class="btn btn-outline-dark" onclick="agregarAlCarrito(${producto.id});">agregar</button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;


}
renderProductosCarrito()