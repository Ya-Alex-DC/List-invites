import './App.css';
import { useState } from 'react';
import { User } from "./components/user"
import { OprosF } from './type';

function App() {
	const [users, setUsers] = useState<OprosF[]>([])
	const [value, setValue] = useState<string>('')
	const [invits, setInvits] = useState<number[]>([])

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const addUsers = (id: number): void => {
		setInvits(prev =>
			prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
		);
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

