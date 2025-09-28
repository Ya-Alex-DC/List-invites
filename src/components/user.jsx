import { Info } from "./infUsers"
export const User = ({ setUsers, users, value, onChangeValue, addUsers, invits, setInvits }) => {

	const refresh = () => {
		fetch('http://localhost:3500/data')
			.then(res => res.json())
			.then((json) => {
				// const frst20 = json.slice(0, 20)
				setInvits([])
				setUsers(json)
				// console.log(json)
			})
			.catch(err => {
				console.warn(err)
				alert('Ошибка')
			})
	}


	// https://www.cbr-xml-daily.ru/daily_json.js
	// 	const refresh2 = () => {
	// 	fetch('https://www.cbr-xml-daily.ru/daily.xml')
	// 		.then(res => res.json())
	// 		.then((json) => {
	// 			// const frst20 = json.slice(0, 20)
	// 			setUsers(json)
	// 			// console.log(json)
	// 		})
	// 		.catch(err => {
	// 			console.warn(err)
	// 			alert('Ошибка')
	// 		})
	// }
	// console.log(value)

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

				 	{/* <button className="btn_add"
				 onClick={refresh2}>Добавить2</button> */}
			</ul>
		</div>
	)
}