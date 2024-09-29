// Variables para almacenar el carrito y pedidos
let cart = [];

// Añadir producto al carrito
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  alert(`${productName} ha sido añadido al carrito.`);
}

// Simulación de seguimiento de pedido
function trackOrder() {
  const trackingNumber = document.getElementById('trackingNumber').value;
  
  // Simular respuesta
  const orderStatus = {
    "12345": "En proceso",
    "67890": "En camino",
    "11121": "Entregado"
  };

  const status = orderStatus[trackingNumber] || "Número de pedido no encontrado";
  document.getElementById('orderStatus').innerText = `Estado del pedido: ${status}`;
}
