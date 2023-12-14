const alumns = [
   { name: "Pepe Viruela", T1: false, T2: false, T3: true },
   { name: "Lucia Aranda", T1: true, T2: false, T3: true },
   { name: "Abel Cabeza", T1: false, T2: true, T3: true },
   { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
   { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i = 0; i < alumns.length; i++) {
   const alum = alumns[i];
   if (
      (alum.T1 == true && alum.T2 == true) ||
      (alum.T1 == true && alum.T3 == true) ||
      (alum.T2 && alum.T3 == true)
   ) {
      console.log(alum);
   }
}
