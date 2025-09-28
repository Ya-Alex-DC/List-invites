import './App.css';
import { useState, useEffect } from 'react';
import { User } from "./components/user"

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

// http://reqres.in/api/users

// function getUser(name) {
//     let names = name
//     return function () {
//         return names
//     }
// }
// const user = getUser()
// console.log(user(Lexa))

function App() {
	const [users, setUsers] = useState([])
	const [value, setValue] = useState('')
	const [invits, setInvits] = useState([])

	const onChangeValue = (e) => {
		setValue(e.target.value)
	}

	const addUsers = (id) => {
	// 	setInvits(prev => (
	// 	prev.includes(id) ? prev : [...prev, id]
	// ))
	setInvits(prev =>
		prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
	);
	console.log(invits)
	}

	// useEffect(() => {
	// 	fetch('http://localhost:3500/data')
	// 		.then(res => res.json())
	// 		.then((json) => {
	// 			setUsers(json)
	// 			// console.log(json)
	// 		}).catch(err => {
	// 			console.warn(err)
	// 			alert('Ошибка')
	// 		})
	// }, [])

	// console.log(users)

	// const title = () => {
	// 	users.map(e => (e.json.title))
	// }

	// fetch('https://jsonplaceholder.typicode.com/todos/1')
	//       .then(response => response.json())
	//       .then(json => console.log(json))

	// fetch('https://reqres.in/api/users')
	// .then(res => res.json())
	// .json(json => {
	// 	console.log(json)
	// })


	// console.log(selectedForm)
	return (
		<div className="App">
			<User
				value={value}
				onChangeValue={onChangeValue}
				setUsers={setUsers}
				users={users}
				addUsers={addUsers}
				invits={invits}
				setInvits={setInvits}
				/>
		</div>
	);
}

export default App;
















































// const [steps, setSteps] = useState(0);
// 	const [gavno, setVariants] = useState([]);
// 	const [invalidVariants, setInvalidVariants] = useState([]);

// 	const selectedForm = listData[steps];
// 	// const sldForm = [...listData]
// 	// console.log(sldForm)

// 	const setVariantForm = (text1, idx) => {
// 		const nextVariants = [...gavno];
// 		nextVariants[steps] = text1;
// 		setVariants(nextVariants)

// 		if (selectedForm.correct === idx) {
// 			alert('Ты выбрал правильный ответ')
// 			setSteps(steps + 1)
// 		} else {
// 			const nextInvalidVariants = [...invalidVariants];
// 			nextInvalidVariants[steps] = text1;
// 			setInvalidVariants(nextInvalidVariants)
// 			alert('Ты охуел?')
// 			setSteps(steps + 1)
// 		}
// 		console.log(text1, idx)
// 	}
