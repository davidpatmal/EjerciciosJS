const users = [
   { name: "Abel", years: 43 },
   { name: "Maria", years: 18 },
   { name: "Pedro", years: 14 },
   { name: "Samantha", years: 32 },
   { name: "Raquel", years: 16 },
];

// for (let i = 0; i < users.length; i++) {
//    const user = users[i];
//    if (user.years < 18) {
//       console.log("Usuario " + user.name + " menor de edad");
//    } else {
//       console.log("Usuario " + user.name + " mayor de edad");
//    }
// }

// for (let i = 0; i < users.length; i++) {
//    const user = users[i];
//    user.years < 18
//       ? console.log(`Usuario mayor de edad ${user.name}`)
//       : console.log(`Usuario menor de edad ${user.name}`);
// }

for (const user of users) {
   user.years >= 18
      ? console.log(`Usuario mayor de edad ${user.name}`)
      : console.log(`Usuario menor de edad ${user.name}`);
}
