const products = [
   "Camiseta de Pokemon",
   "Pantalón coquinero",
   "Gorra de gansta",
   "Camiseta de Basket",
   "Cinrurón de Orión",
   "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
   let product = products[i];
   if (product.toLocaleLowerCase().includes(`Camiseta`.toLocaleLowerCase())) {
      console.log(`Estos productos tienen la palabra camiseta: ${product}`);
   }
}
