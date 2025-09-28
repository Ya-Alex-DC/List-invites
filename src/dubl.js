import './App.css';
import { useState } from 'react';

// const fnc = (test, test3 = 1) => {
// 	if (Array.isArray(test)) {
// 		console.log('Да это масиив')
// 	} else {
// 		console.log(test, test3)
// 	}
// }
// const fn1 = fnc([])
// const fn2 = fnc('5', '3')
// const fn3 = fnc(true)

// console.log(fn2)

const listData = [
	{
		quest: 'Сколько дней в неделе?',
		variants: ['3', '5', '7', 10],
		correct: 2
	},
	{
		quest: 'сколько в году месяц?',
		variants: ['300', '365', '265', 1000],
		correct: 1
	},
	{
		quest: 'в какой день международный женский праздник?',
		variants: ['1 апреля', '8 марта', '23 фервраля', 9],
		correct: 1
	},
]

function App() {
	const [steps, setSteps] = useState(0);
	const [gavno, setVariants] = useState([]);
	const [invalidVariants, setInvalidVariants] = useState([]);

	const selectedForm = listData[steps];
	// const sldForm = [...listData]
	// console.log(sldForm)

	const setVariantForm = (text1, idx) => {
		const nextVariants = [...gavno];
		nextVariants[steps] = text1;
		setVariants(nextVariants)

		if (selectedForm.correct === idx) {
			alert('Ты выбрал правильный ответ')
			setSteps(steps + 1)
		} else {
			const nextInvalidVariants = [...invalidVariants];
			nextInvalidVariants[steps] = text1;
			setInvalidVariants(nextInvalidVariants)
			alert('Ты охуел?')
			setSteps(steps + 1)
		}
		console.log(text1, idx)
	}

	// console.log(selectedForm)
	return (
		<div className="App">
			<h1>Hi</h1>
			<h2>{selectedForm.quest}</h2>
			<ul>
				{selectedForm.variants.map((text2, idx) => {
					return (
						<li className='list-opros'
							onClick={() => setVariantForm(text2, idx)}
						// при мапе главное что получить и при клике передать?
						// а при объявление функции не важно как назавется туда всеровно придется и определится автоматически что за тип данных?
						>
							{`${text2}`}
						</li>
					)
				})

				}
			</ul>
		</div>
	);
}


// const users = [
// 	{ id: 1, name: "Anna", checked: true },
// 	{ id: 2, name: "Bob", checked: false },
// 	{ id: 3, name: "Ivan", checked: true }
// ];
// const selectedUsers = users.filter(user => user.checked);
// console.log(selectedUsers)
// const toggleUser = (id) => {
// 	setSelectedIds(prev => prev.filter(e => e.id !== id));
// };

// const [items, setItems] = useState(["apple", "banana", "cherry"]);
// const handleRemove = (fruit) => {
// 	setItems(prev => prev.includes(fruit) ? prev.filter(e => e !== fruit) : [...prev, fruit]
// ) НЕ ПРАВИЛЬНОЕ РЕШЕНИЕ
// };
// handleRemove('apple')
// console.log(items)

// ЗАДАЧА 3 пример 
// const arr = [1, 2, 2, 3, 4, 4, 5];
// const unique = arr.filter((item, index, self) => {
// 	return self.indexOf(item) === index;
// });
// 	const names = ["Anna", "Ivan", "Anna", "Bob", "Ivan"];
// const uniqueNames = names.filter((item, index, arr) => {
// 	return arr.indexOf(item) === index
// })
// console.log(uniqueNames);



// const todos = [
// 	{ id: 1, text: "помыть посуду", done: false },
// 	{ id: 2, text: "почитать", done: true },
// 	{ id: 3, text: "погулять", done: false }
// ];

// const undone = () => {
// 	return todos.filter(e => e.done !== true)

// }

// console.log(undone())

// const items = [1, 2, 3, 4, 5, 6];
// const [showEven, setShowEven] = useState(false);

// const filteredItems = () => {
// 	setShowEven(items.filter(e => e % 2 === 0))
// НЕ ПРАВИЛЬНОЕ РЕШЕНИЕ
// }

// В конце задачи номер 1
// const words = ["hi", "apple", "dog", "banana", "go"];
// const longWords = words.filter(e => e.length >= 4)
// console.log(longWords);

// Замыкание задача 1

// 	function createCounter ()  {
// 		let count = 0;
// 		return {
// 			increment: function () {
// 				count++;
// 				return count;
// 			},
// 			decrement: function () {
// 				count--;
// 				return count;
// 			}
// 		}
// 	};

// 	const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1

// // Замыкание задача 2

// function greet (name) {
// 	return function () {
// 		console.log(`Привет, ${name}`)
// 	}
// }

// 	const greetJohn = greet("John");
// greetJohn(); // "Привет, John"
// greetJohn(); // "Привет, John"

// const greetAnna = greet("Anna");
// greetAnna(); // "Привет, Anna"

// // Замыкание задача 4

// function multiplier(factor) {
// 	let num
// 	return function() {
// 		let res = num * factor;
// 		return res
// 	}
// }

// function limitCalls(fn, limit) {
// 	let count = 0
// 	let res
// 	return function (...args) {
// 		if(count < limit) {
// 			count++
// 			res = fn.apply(this, args)
// 			return res
// 		}
// 		return 'Лимит вызовов исчерпан'
// 	}
// }

// function logMsg() {
// 	return 'Сообщение!'
// }

// const limitedLog = limitCalls(logMsg, 2)
// console.log(limitedLog())
// console.log(limitedLog())
// console.log(limitedLog())

// function createAdder(num) {
// 	let res
// 	return function () {

// 	}
// }

// const add5 = createAdder(5)
// console.log(add5(1, 2))
// console.log(add5(10))

// function createCounter() {
// 	let count = 0;

// 	return function() {
// 		return ++count

// 	}
// }

// const counter = createCounter();
// // console.log(counter());
// // console.log(counter());
// // console.log(counter()); 
// function oncePerXSeconds(fn, seconds) {
//   let lastCall = 0; 

//   return function (...args) {
//     const now = Date.now();

//     if (now - lastCall >= seconds * 1000) { 
//       lastCall = now; 
//       return fn.apply(this, args);
//     }

//     return "Рано!"; 
//   };
// }


// const sayHi = () => "Привет!";
// const limited = oncePerXSeconds(sayHi, 3);

// console.log(limited()); 
// console.log(limited());
// // через 3 секунды
// console.log(limited()); 

// function memoize(fn) {
//  	let res
// return function(...args) {
// 	res = fn.apply(this, args)
// 	return  res
// }
// }

// function slowSquare(n) {
//   console.log("Вычисляю...");
//   return n * n;
// }

// const memoSquare = memoize(slowSquare);

// console.log(memoSquare(5)); 
// console.log(memoSquare(5)); 
// console.log(memoSquare(6)); 

// function taskQueue(limit) {
// 	let count = 0
// 	return function () {
// 		if(count < limit) {
// 			++count
// 			console.log(`Задача №${count}`)
// 		} else {
// 			console.log('Очередь пуста!')
// 		}
// 		}
// 	}

// const queue = taskQueue(3);

// console.log(queue());
// console.log(queue());
// console.log(queue());
// console.log(queue());

// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	sayHi() {
// 		console.log(`Привет, меня зовут ${this.name}, мне ${this.age}`)
// 	}
// 	haveBirthday() {
// 		++this.age;
// 		console.log(`С Днём Рождения, ${this.name}! исполнилось ${this.age}`)
// 	}
// }

// const alex = new User('Alex', 30)
// alex.sayHi()
// const bob = new User('Bob', 20)
// bob.sayHi()
// bob.haveBirthday()
// bob.haveBirthday()


// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	speak() {
// 		console.log('Животное издаёт звук')
// 	}
// }

// class Dog extends Animal{
// 	speak() {
// 		console.log(`Собака ${this.name} лает`)
// 	}
// }

// const dog = new Dog('Рэй')

// class Cat extends Animal{
// 	speak() {
// 		console.log(`Кошка ${this.name} мяукает`)
// 	}
// }

// const cat = new Cat('Мая')

// const animals = [dog, cat]
// animals.forEach((e) => e.speak())

// class Account {
// 	constructor(amount) {
// 		this._amount = amount;
// 	}
// 	deposit(value) {
// 		this._amount += value
// 	}
// 	withdraw(value){
// 		if(this._amount > value) {
// 			this._amount -= value
// 		} else {
// 			console.log('У вас недостаточно средств')
// 		}
// 	}

// 	get balance() {
// 		return this._amount
// 	}
// }

// const account = new Account(0)
// account.deposit(100)
// account.withdraw(30)
// console.log(`Текущий счёт: ${account.balance}`)

// class MathHelper {
// 	constructor(a, b) {
// 		this.a = a;
// 		this.b = b;
// 	}

// 	sum() {
// 		return this.a + this.b
// 	}

// 	diff() {
// 		return this.a - this.b
// 	}
// }

// const math = new MathHelper(2, 3)
// console.log(math.sum())

// class Car {
// 	constructor(brand, year) {
// 		this.brand = brand;
// 		this.year = year;
// 	}
// 	info() {
// 		console.log(`Марка: ${this.brand}, Год: ${this.year}`)
// 	}
// }

// const honda =  new Car('Honda', 2015);
// const bmw =  new Car('BMW', 2020);
// honda.info()
// bmw.info()

// class Counter {
// 	constructor(value = 0) {
// 		this.value = value
// 	}
// 	increment() {
// 		console.log(this.value)
// 		return this.value += 1
// 	}
// 		decrement() {
// 			console.log(this.value)
// 		return this.value -= 1
// 	}
// 			reset() {
// 				console.log(this.value)
// 		return this.value = 0
// 	}

// }

// const count = new Counter()
// count.increment()
// count.increment()
// count.increment()
// count.increment()
// count.decrement()
// count.reset()

// class Temperature {
// 	constructor(celsius) {
// 		this._celsius = celsius
// 	}

// 	get celsius() {
// 		return this._celsius
// 	}

// 	get fahrenheit () {
// 		let fuh = this._celsius * 9 / 5 + 32
// 		return fuh
// 	}

// 	set fahrenheit (fuh) {
// 		this._celsius = (fuh - 32) * 5 / 9
// 	}
// }

// const t = new Temperature(25)
// console.log(t.fahrenheit)
// t.fahrenheit = 212;
// console.log(t.celsius);

// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	toJSON() {
// 		return {
// 			name: this.name,
// 			age: this.age
// 		}
// 	}

// 	static fromJSON(json) {
// 		return new User(json.name , json.age)
// 	}
// }

// const user = new User("Alex", 30);
// const json = JSON.stringify(user);
// console.log(json);
// const restored = User.fromJSON(JSON.parse(json));
// console.log(restored instanceof User); // true
// console.log(restored);


// function User(name) {
// 	this.name =name
// }

// User.prototype.sayHi = function() {
// 	console.log(`Привет меня зовут ${this.name}`)
// }

// const petya = new User("Петя")
// petya.sayHi()


// const obj = { a: 1 };
// console.log(obj.hasOwnProperty("a"))

// const arr = [1, 2, 3]

// arr.map(e => console.log(e))
// console.log(arr.toString())
// Array.prototype.sayHello = function() {
// 	console.log('Привет я массив', this)
// }
// arr.sayHello()

// function Animal() {
// 	console.log('dog')
// }

// Animal.prototype.eat = function() {
// 	console.log('кушает')
// }

// function Dog() {
// 	console.log('123')
// }

// Dog.prototype = Object.create(Animal.prototype)

// 1. Простой промис

// Создай промис, который через 2 секунды возвращает строку "Hello, Promises!", и выведи её в консоль.
// 👉 Подсказка: используем setTimeout и resolve.

const promise = new Promise((res, rej) => {
	setTimeout(() => {
		res('Hello, Promises!')
	}, 2000);
})
promise
	.then(res => {
		console.log('Ок-1', res)
	})
	.catch(err => {
		console.log('Не хорошо-2', err)
	});

// 2. Промис с ошибкой

// Сделай промис, который случайным образом:

// либо возвращает "Успех ✅",

// либо отклоняется с ошибкой "Ошибка ❌".

// Обработай это через .then и .catch.

const promise1 = new Promise((res, rej) => {

	if (Math.random() > 0.5) {
		res('Успешно')
	} else {
		rej('Ошибка')
	}
})

promise1
	.then(res => {
		console.log('Ок-1', res)
	})
	.catch(err => {
		console.log('Не хорошо-2', err)
	});

// 3. Цепочка промисов

// Создай промис, который сначала возвращает число 5,
// потом в .then умножь его на 2,
// а в следующем .then прибавь 10.
// В конце выведи результат в консоль.

const promise2 = new Promise((res, rej) => {
	const data = 5

	setTimeout(() => {
		res(data)
	}, 2000);
})

promise2
	.then(res => {
		console.log('Зен-1', res)
		return res
	})
	.then(res => {
		console.log('Зен-2', res)
		return res * 2
	})
	.then(res => {
		console.log('Зен-3', res)
		return res + 10
	})
	.then(res => {
		console.log('Зен-4', res)
	})
	.catch(err => {
		console.log('Не хорошо-2', err)
	});

4. Несколько промисов одновременно

У тебя есть три промиса:

один выполняется за 1 сек.и возвращает "A",

	другой за 2 сек.и возвращает "B",

		третий за 3 сек.и возвращает "C".

Собери их с помощью Promise.all и выведи результат(массив["A", "B", "C"]).

function promis3() {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res('A')
		}, 1000);
	})
}

function promis4() {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res('B')
		}, 2000);
	})
}

function promis5() {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res('C')
		}, 3000);
	})
}

Promise.all([promis3(), promis4(), promis5()])
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log('Ошибка', err)
	})

// 5. Быстрейший промис

// То же самое, но используй Promise.race, чтобы вывести только самый быстрый результат.

Promise.race([promis3(), promis4(), promis5()])
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log('Ошибка', err)
	})

// 6. Мини-запрос (работа с fetch)

// Сделай fetch к https://jsonplaceholder.typicode.com/posts/1,
// выведи title из полученного объекта.

const res = () => {
	fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then(res => res.json())
		.then((json) => {
			console.log(json.title)
		})
		.catch(err => {
			console.warn(err)
			alert('Ошибка')
		})
}
res()

// 	7. Цепочка запросов

// Сначала получи данные todo по адресу:
// https://jsonplaceholder.typicode.com/todos/1
// Возьми из него userId, и сделай второй запрос на
// https://jsonplaceholder.typicode.com/users/{userId}.
// Выведи в консоль имя пользователя.

const date = () => {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(res => res.json())
		.then((json) => {
			const idUser = json.userId
		})
		.then(id => {
			fetch()
		})
		.catch(err => {
			console.warn(err)
			alert('Ошибка')
		})
}
date()

export default App;
