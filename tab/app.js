
// TP: JS Array/Object
// ```
const dw1 = [
  {
    firstName: "Jean",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 7,
      rate: 2
    }
  },
  {
    firstName: "Marc",
    gender: "male",
    js: {
      mark: 9,
      rate: 3
    },
    english: {
      mark: 19,
      rate: 2
    }
  },
  {
    firstName: "Amar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3
    },
    english: {
      mark: 2,
      rate: 2
    }
  },
  {
    firstName: "Oscar",
    gender: "male",
    js: {
      mark: 16,
      rate: 3
    },
    english: {
      mark: 12,
      rate: 2
    }
  },
  {
    firstName: "Juliette",
    gender: "female",
    js: {
      mark: 10,
      rate: 3
    },
    english: {
      mark: 11,
      rate: 2
    }
  }
];
const dw2 = [
  {
    firstName: "Jordan",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 4,
      rate: 2
    }
  },
  {
    firstName: "Baptiste",
    gender: "male",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 9,
      rate: 2
    }
  },
  {
    firstName: "Hélène",
    gender: "female",
    js: {
      mark: 13,
      rate: 3
    },
    english: {
      mark: 20,
      rate: 2
    }
  },
  {
    firstName: "Paola",
    gender: "female",
    js: {
      mark: 12,
      rate: 3
    },
    english: {
      mark: 7,
      rate: 2
    }
  }
];






// 1. Combien y a-t-il d'élèves dans la classe dw1, puis dans dw2, et dans toutes les classes ?
const students = dw1.concat(dw2);
// console.log(dw1.length, dw2.length, students.length);

// 2. Lister l'ensemble des élèves des deux classes dans l'ordre alphabétique
students.sort((a, b) => a.firstName.localeCompare(b.firstName));
// console.log(students);

// 3. Prendre les 3 premiers élèves de la classe dw1
const thirtDw1 = dw1.slice(0, 3);

// 4. Prendre le dernier élève de la classe dw1
const lastDw1 = dw1.slice(-1)[0];
// console.log(lastDw1);

// 5. Moyenne générale de chaque élève
const studentsWithAverage = students.map(student => {
  const average =
    (student.js.mark * student.js.rate + student.english.mark * student.english.rate) /
    (student.english.rate + student.js.rate);
//   return { ...student, average: average };
});
// console.log(studentsWithAverage);

// 6. Moyenne de la classe dw1 en js
const jsAverages = dw1.map(student => (student.js.mark * student.js.rate) / student.js.rate);
const averageJsDw1 = jsAverages.reduce((sum, average) => sum + average, 0) / dw1.length;
// console.log(averageJsDw1);

// 7. Moyenne des deux classes en js
const jsAveragesDw2 = dw2.map(student => (student.js.mark * student.js.rate) / student.js.rate);
const averageJsAll = jsAverages.concat(jsAveragesDw2).reduce((sum, average) => sum + average, 0) / students.length;
// console.log(averageJsAll);

// 8. Meilleure moyenne de la classe en js
// const bestJsStudent = studentsWithAverage.reduce((best, current) => (current.js.mark > best.js.mark ? current : best));
// console.log(bestJsStudent);

// 9. Meilleur élève des deux classes
const bestStudentOverall = studentsWithAverage.reduce((best, current) => (current.average > best.average ? current : best));
// console.log(bestStudentOverall);

// 10. Meilleure fille des deux classes en anglais
const bestEnglishFemale = studentsWithAverage
  .filter(student => student.gender === "female")
  .reduce((best, current) => (current.english.mark > best.english.mark ? current : best));
// console.log(bestEnglishFemale);

// 11. Meilleur garçon en moyenne générale
const bestMaleOverall = studentsWithAverage
  .filter(student => student.gender === "male")
  .reduce((best, current) => (current.average > best.average ? current : best));
// console.log(bestMaleOverall);

// 12. Qui a la note médiane en anglais parmi dw1 ?
dw1.sort((a, b) => a.english.mark - b.english.mark);
const medianEnglishDw1 = dw1[Math.floor(dw1.length / 2)];
// console.log(medianEnglishDw1);

// 13. Qui a la moyenne médiane générale dw1 + dw2 ?
studentsWithAverage.sort((a, b) => a.average - b.average);
const medianOverallAll = studentsWithAverage[Math.floor(studentsWithAverage.length / 2)];
// console.log(medianOverallAll);

// 14. Moyenne générale des filles et moyenne générale des garçons
const males = studentsWithAverage.filter(student => student.gender === "male");
const maleAverage = males.reduce((sum, male) => sum + male.average, 0) / males.length;

const females = studentsWithAverage.filter(student => student.gender === "female");
const femaleAverage = females.reduce((sum, female) => sum + female.average, 0) / females.length;

// console.log("Moyenne générale des garçons :", maleAverage.toFixed(1));
// console.log("Moyenne générale des filles :", femaleAverage.toFixed(1));

// 15. Qui sont les meilleurs en js, les filles ou les garçons ?
const bestJsMale = males.reduce((best, current) => (current.js.mark > best.js.mark ? current : best));
const bestJsFemale = females.reduce((best, current) => (current.js.mark > best.js.mark ? current : best));

// console.log("Meilleur en js chez les garçons :", bestJsMale);
// console.log("Meilleur en js chez les filles :", bestJsFemale);

// 16. Récupérer les filles des classes dw1 et dw2 et les classer dans l'ordre de leurs moyennes générales
const allFemales = studentsWithAverage.filter(student => student.gender === "female");
const sortedFemales = allFemales.sort((a, b) => b.average - a.average);
console.log(sortedFemales);