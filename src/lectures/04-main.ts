
export function isPositive(n: number) {
    return n > 0;
}

//explicit types
let count: number = 123;
let studentName: string = 'Le quang toan';
let isActive: boolean = true;
const numberList: number[] = [1,2,3];

//infered types
let count1 = 123;
let studentName1 = 'Le quang toan';
let isActive1 = true;
const numberList1 = [1,2,3];

// so sanh object
const studentA = { id: 1, name: 'toan'};
const studentB = studentA;

studentA === studentB // true
// studentA === { id: 1, name: 'toan'}; false

// object destructuring
interface Student {
    id: number;
    name: string;
    age: number;
    gender: string;
}

const bob = {
    id: 1,
    name: 'le quang toan',
    age: 21,
    gender: 'male'
}

//new way
const {id, name} = bob;

//generics
interface List<T>{
    length: number;
    [index: number]: T;
}

const  numberList2: List<number> = [1,2,3];
const wordList: List<string> = ['easy', 'frontend'];

//mapped types
interface Student1{
    id: number;
    name: string;
}
type MappedTypes = {
    [Key in keyof Student1]: boolean;
};