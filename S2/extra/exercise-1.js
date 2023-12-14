const movies = [
   { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
   { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
   {
      title: "Solo en Whatsapp",
      duration: 223,
      categories: ["comedia", "thriller"],
   },
   {
      title: "El gato con guantes",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
   },
];

const categMovies = []

for (const categ of movies) {
    categ.categories.join()
    categMovies.push(categ.categories.includes("comedia", "aventura", "acción", "thriller", "animación"))
    console.log(categMovies);
}