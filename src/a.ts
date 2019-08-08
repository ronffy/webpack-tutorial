

{
  // readonly
  let a: number[] = [1, 2];
  let b: ReadonlyArray<number> = a;
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
  // type Record<K extends string, T> = {
  //   [P in K]: T;
  // }

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

}

