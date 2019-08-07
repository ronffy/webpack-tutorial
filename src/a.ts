import doIt from './utils/doIt'

import redux from '../node_modules/redux';


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
    getName(): T {
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
  let v = getProperty({ name: 'x', age: 12 }, 'age');



}


{
  // 枚举
  enum Color {
    RED = 'RED',
    GREEN = 'GREEN',
  }
  function getColor(c: Color, hi?: string) {
    if (c !== Color.RED && c !== Color.GREEN) {
      console.log('参数输入错误');
      return;
    }
    // console.log(hi.length);
    // console.log(hi!.length);

    if (c === Color.RED) {
      console.log('我是红色的');
    } else if (c === Color.GREEN) {
      console.log('我是绿色的');
    }
  }

  console.log('Color.RED', Color.RED);
  getColor(Color.RED)
}


{
  // 交叉类型
  function extend<T extends object, U extends object>(target: T, source: U): T & U {
    type Result = T & U;
    let result: Result = ({} as Result);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        (result as any)[key] = target[key];
      }
    }
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        (<any>result)[key] = source[key];
      }
    }
    return result;
  }

  let o = extend({
    name: 1
  }, {
      go: '2'
    })
}

{
  // 联合类型

  interface Bird {
    fly();
    jiao();
  }
  interface Fish {
    swim();
    jiao();
  }
  // 自定义类型保护 （pet is Fish 是类型谓词）
  function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined
  }

  function getPet(): Fish | Bird {
    return {
      fly() {

      },
      jiao() {

      }
    }
  }


  let pet = getPet();
  pet.jiao();
  // pet.swim();

  // 不使用自定义的类型保护
  if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
  } else {
    (<Bird>pet).fly();
  }

  // 使用自定义的类型保护
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }



  // 解决 Document.getElementById() 可能为null的情况：

  // 第一种，通过类型判断的方式[推荐]
  // 检查document是否为null
  let element = document.getElementById('root');
  if (element) {
    element.onclick = function () {
      Promise.all([import('./a'), import('./b')]).then(([a, b]) => {
        console.log('111', a.f1('4'));
        console.log('222', b.default('5'));
      })
    }
  }

  // 第二种方式，用类型断言的方式
  document.getElementById('root')!.onclick = function () {
    Promise.all([import('./a'), import('./b')]).then(([a, b]) => {
      console.log('111', a.f1('4'));
      console.log('222', b.default('5'));
    })
  }
}


{
  // 映射类型

  type Friends = 'zhangsan' | 'lisi';
  
  type FriendsAge = {
    [K in Friends]: number
  }

  const friendsAge: FriendsAge = {
    zhangsan: 15,
    lisi: 11,
    // wangwu: 12,
  }
  

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  }
  type Partial<T> = {
    [P in keyof T]?: T[P];
  }
  type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }
  type Record<K extends string, T> = {
    [P in K]: T;
  }

  interface Person {
    name: string,
    age: number
  }

  let p: Partial<Person> = {
    name: 'nihao'
  }

  const p2: Readonly<Person> = {
    name: 'ronffy',
    age: 12
  }

  let p3: Pick<Person, 'name'> = {
    name: 'ranici'
  }

  console.log(p3);
  



  
}

