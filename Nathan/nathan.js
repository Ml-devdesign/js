const reparation = [
    {
      category: "Cadre & Autres",
      title: "Marquage Vélo",
      price: "20€",
    },
    {
      category: "Cadre & Autres",
      title: "Changement de selle avec réglage",
      price: "14€",
    },
    {
      category: "Cadre & Autres",
      title: "Remplacement guidoline",
      price: "20€",
    },
    {
      category: "Cadre & Autres",
      title: "Remplacement tige de selle avec réglage",
      price: "14€",
    },
    {
      category: "Cadre & Autres",
      title: "Montage d’une paire de pédale",
      price: "14€",
    },
    {
      category: "Cadre & Autres",
      title: "Remplacement d’une potence",
      price: "20€",
    },
    {
      category: "Cadre & Autres",
      title: "Remplacement jeux de direction avec graissage",
      price: "30€",
    },
    {
      category: "Cadre & Autres",
      title: "Remplacement d’une patte de dérailleur",
      price: "25€",
    },
    {
      category: "Cadre & Autres",
      title: "Changement d’amortisseur",
      price: "30€",
    },
    {
      category: "Cadre & Autres",
      title: "Changement triangle",
      price: "60€",
    },
    {
      category: "Cadre & Autres",
      title: "Changement de cadre",
      price: "150€",
    },
    {
      category: "Cadre & Autres",
      title: "Montage accessoire",
      price: "20€",
    },
    {
      category: "Cadre & Autres",
      title: "Montage vélo neuf",
      price: "40€",
    },
    {
      category: "Trotinnette",
      title: "Changement d’une chambre à air",
      price: "35€",
    },
    {
      category: "Trotinnette",
      title: "Changement d’un pneu",
      price: "40€",
    },
    {
      category: "Trotinnette",
      title: "Diagnostic problème électrique",
      price: "60€",
    },
  ];


//recuperer dans un tableau les categories
for (let i = 0; i < reparation.length; i++) {
  // console.log(reparation[i]);
  console.log(reparation[i].category);
 
  if (reparation[i].category== "Trotinnette") {
    console.log(reparation[i].title);
    console.log(reparation[i].price);

  if  (reparation[i].category== "Cadre & Autres"){
    console.log(reparation[i].title);
    console.log(reparation[i].price);
  }
}
}
;









// results.push

// for (results in reparation){
//   if (results as reparation('catagory'){
//     console.log(reparation[results]);
//   }
//   if (results as 'title'){
//     console.log(reparation[results]);
//   }
//   if (results as 'price'){
//     console.log(reparation[results]);
//   }
  // console.log(reparation);
  // console.log(reparation[results]);
  // console.log(reparation[results].category);
  // console.log(reparation[results].title);
  // console.log(reparation[results].price);

// }
// console.log(reparation);

  // Ah je dois faire un algo
// Au boulot
// Si tu veux tu me le fais
// J’ai un objet de cette forme
// { category: string, title: string }
// Ces objets se trouvent dans un tableau

// Genre j’ai : [
//     {category : transmission, title: réglage dérailleur}
// ]

// (Que des prestations de reparations)
// d'afficher chaque prestations par catégories
// juste en utilisant des boucles
// y'a plusieurs solutions, je te laisse choisir la meilleur