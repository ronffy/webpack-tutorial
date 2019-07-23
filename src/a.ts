import doIt from './utils/doIt'

export function f1(sign: string) {
  return 'xxx' + sign
}

export function f2(sign: string) {
  return 'yyy' + doIt(sign)
}

enum Color { Red, Green };

let c: Color = Color.Green;

console.log('c:', c);
console.log('cName:', Color[0]);

{
  // readonly
  let a: number[] = [1, 2];
  let b: ReadonlyArray<number> = a;
  // b[1] = 3; // error 

  let c = b as number[]; // 可以用断言重写
  c[1] = 3;
}

{

  class Base {
    name: string;
    sex: string;
  }

  // 接口继承类
  interface ClassInterface extends Base {
    age: number;
    getAge(): number;
  }

  // 用接口约束类
  class Person implements ClassInterface {
    age: number;
    readonly name: string = 'ronffy';
    readonly sex: string = 'man';

    constructor(age: number) {
      this.age = age;
    }
    getAge() {
      return this.age;
    }
  }

  let p = new Person(3);
}

{
  // this
  interface Person {
    foods: string[];
    eat: (index: number) => () => string;
  }

  let person: Person = {
    foods: ['apple', 'orange'],
    eat(index: number) {
      return () => {
        return this.foods[index];
      }
    }
  }

  const getFoot = person.eat(2);
  const foot = getFoot();
  console.log(foot);
}


{
  // 重载

  const pokers = [
    { color: 'red', tally: 1 }, 
    { color: 'black', tally: 2 },
    { color: 'red', tally: 11 },
    { color: 'black', tally: 5 },
  ];
  interface Card {
    color: string;
    tally: number;
  }

  function getCard(x: number): Card
  function getCard(x: Card[]): Card
  function getCard(x): any {
    if (typeof x === 'number') {
      return pokers[x];
    }
    if (Array.isArray(x)) {
      return x[Math.floor(Math.random() * x.length)]
    }
  }
  const card1 = getCard(2);
  const card2 = getCard([{ color: 'red', tally: 1 }]);
  console.log(card1);
  console.log(card2);
}


{
  // 泛型

  // 泛型函数
  function getSomething<T>(arg: T): T {
    return arg;
  }

  let name = getSomething<string>('ronffy');
  name.length;

  interface Person {
    name: string;
    age: number;
  }
  let info = getSomething<Person>({ name: 'ronffy', age: 12 });
  info.age

  // 泛型接口
  interface MT<T> {
    [P: string]: T
  }
  type ObjString = MT<string>;
  type ArrString = Array<string>;

  let o1: ObjString = {
    name: 'string',
    age: '12'
  }
  let a1: ArrString = ['1', '2']

  // 泛型类
  class G<T> {
    name: T;
    getName(): T{
      return this.name;
    }
  }
  let c = new G<string>();
  let name2 = c.getName();
  console.log(name2);
  


  // 泛型约束
  // 例子：比如要求泛型类型必须要有 length 属性
  interface Length {
    length: number;
  }
  function getSome<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
  }
  let x = getSome(['3']);

  // 在泛型约束中使用类型约束
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  let v = getProperty({name: 'x', age: 12}, 'age');



}