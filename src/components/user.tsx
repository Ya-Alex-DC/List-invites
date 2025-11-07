import { Info } from "./infUsers"
import { OprosF } from '../type';

interface UserProps {
	setUsers: React.Dispatch<React.SetStateAction<OprosF[]>>;
	users: OprosF[];
	value: string;
	onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	addUsers: (id: number) => void;
	invits: number[];
	setInvits: React.Dispatch<React.SetStateAction<number[]>>;
}

export const User: React.FC<UserProps> = ({ setUsers, users, value, onChangeValue, addUsers, invits, setInvits }) => {

	const refresh = () => {
		fetch('http://localhost:3500/data')
			.then(res => res.json())
			.then((json: OprosF[]) => {
				setInvits([])
				setUsers(json)
				// console.log(json)
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка')
			})
	}

	return (
		<div>
			<input value={value} onChange={onChangeValue} type="text" placeholder="Найти пользователя"></input>
			<ul>
				{users.filter((e) => {
					const fullName = e.first_name.toLowerCase() + e.last_name.toLowerCase()
					return fullName.includes(value) || e.email.toLowerCase().includes(value)
				})
					.map(e => (
						<Info key={e.id}
							addUsers={addUsers}
							setUsers={setUsers}
							{...e}
							invits={invits}
							setInvits={setInvits}
						/>
					))}
				<button className="btn_add"
					onClick={refresh}>Добавить</button>
			</ul>
		</div>
	)
}