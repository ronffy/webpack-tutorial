
export default function isAdult(age: number): Promise<boolean> {
  return new Promise((res) => {
    setTimeout(() => {
      if (age >= 18) {
        res(true)
      } else {
        res(false);
      }
    }, 1000);
  })
}

export function isAdultSync(age, callback) {
  setTimeout(() => {
    if (age >= 18) {
      callback(true)
    } else {
      callback(false);
    }
  }, 1000);
}


