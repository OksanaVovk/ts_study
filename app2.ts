let age: number;
age = 50;
let name1: string;
name1 = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a: number) => number;
callback = (a) => { return 100 + a };

let anything: any; 
anything= -20;
anything = 'Text';
anything = {};

let some:unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
  str = some;
}

let person: [string, number]; 
person = ['Max', 21];

enum Download { LOADING, READY };
const page = {
  load:Download.READY
}

if (page.load === Download.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Download.READY) {
  console.log('Страница загружена');
}

let union: string | number;
let somestr: "enable" | "disable";


function showMessage(message: string):void{
  console.log(message);
}


function calc(num1:number, num2: number):number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type PageType = {
   title: string,
  likes: number,
  accounts: string[],
  status: "open"|"close",
  details?: {
    createAt: Date,
    updateAt: Date,
  }
  
}

const page1:PageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2:PageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}