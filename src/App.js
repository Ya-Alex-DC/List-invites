import './App.css';
import { useState } from 'react';
import { User } from "./components/user"

function App() {
	const [users, setUsers] = useState([])
	const [value, setValue] = useState('')
	const [invits, setInvits] = useState([])

	const onChangeValue = (e) => {
		setValue(e.target.value)
	}

	const addUsers = (id) => {
		setInvits(prev =>
			prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
		);
		// console.log(invits)
	}

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
