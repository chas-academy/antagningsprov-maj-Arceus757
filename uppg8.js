function uppg8() {

    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age
    const people = [
      { name: "Dmytro", age: 18 },
      { name: "David", age: 35 },
      { name: "Lina", age: 42 },
      { name: "Johan", age: 25 },
      { name: "Emma", age: 33 }
    ];
  
    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen
    function printOverThirty(array) {
      array.forEach((person) => {
        if (person.age > 30) {
          console.log(person.name);
        }
      });
    }
  
    // anropa funktionen och skicka med arrayen som argument
    printOverThirty(people);
  }
  
  module.exports = { uppg8 };