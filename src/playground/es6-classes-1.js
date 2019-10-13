class Person {
    constructor(name = 'anonymous', age) {
        this.name = name,
            this.age = age
    }
    getGreeting() {
        return `Hi I am ${this.name.toUpperCase()}.`
    }

    getDescreption() {
        if (!!this.age) {
            return `${this.getGreeting()} I am ${this.age} years old.`;
        }
        return this.getGreeting();
    }
}

class Student extends Person{
    constructor(name,age = 15, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescreption(){
        let descreption = super.getDescreption();
        if(this.hasMajor()){
            return `${descreption} And my major is "${this.major}".`
        }
        return descreption;
    }
}

class Traveller extends Student{
    constructor(name,age=18,major,location="New York"){
        super(name,age,major);
        this.location = location;
    }
    
    getDescreption(){
        let descreption = super.getDescreption();
        // alert("hi");
        if(this.location !== "New York"){
            return descreption+=` I live in a beautiful City called ${this.location}`;
        }
        return `${descreption} I live in Global city called ${this.location}`;
    }
}

const me = new Traveller("avi",27,"ECE","Hyderabad");
console.log(me.getGreeting());
console.log(me.getDescreption());


const bro = new Traveller();
console.log(bro.getGreeting());
console.log(bro.getDescreption());

var template = (
    <div>
        <h1>Classes</h1>
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);