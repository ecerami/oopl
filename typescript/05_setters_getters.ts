class Person {
    public firstName: string;
    public lastName:  string;
    private _age: number = 0;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        if (age <= 0 || age >= 200) {
            throw new Error('The age is invalid:  ' + age);
        }
        this._age = age;
    }
}

let person = new Person("John", "Smith", 200)
person.age = 29 // This works
person.age = 250; // This fails

