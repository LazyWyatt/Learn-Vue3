interface IPerson<T1 = string, T2 = number> {
  name: T1
  age: T2
}

const p: IPerson<number, number> = {
  name:12,
  age: 23
}

export{}