const user = {
    name : "Avinash",
    cities: ["New York", "Philadelphia", "Los Angeles"],
    printCitiesLived: function(){
        console.log(this);
       const newPhrase = this.cities.map((city,i)=>{
            console.log(`${i+1}) ${this.name.toLowerCase()} lived in ${city}`);
        });
        this.cities.forEach((city, i) =>{
            console.log(`${i+1}) ${this.name.toUpperCase()} lived in ${city}`);
        });
        return newPhrase;
    }
};

const phrases =  user.printCitiesLived();
// console.log(phrases);

const multiplier = {
    numbers : [0,1,2,3,4,5,6,7],
    multiplyBy : 5,
    multiply(){
       return this.numbers.map((num)=> num*this.multiplyBy);
    }
}

console.log(multiplier.multiply());