
export const Info = ({ setUsers, email, id, first_name, last_name, avatar, addUsers, invits }) => {
	// const refresh = () => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos')
	// 		.then(res => res.json())
	// 		.then((json) => {
	// 			const frst20 = json.slice(0, 20)
	// 			setUsers(frst20)
	// 				   //  "start": " set PORT=3008 && react-scripts start",
	// 			console.log(json)
	// 		})
	// 		.catch(err => {
	// 			console.warn(err)
	// 			alert('Ошибка')
	// 		})
	// }

	// const refresh = () => {
	// 	fetch('http://localhost:3500/data')
	// 		.then(res => res.json())
	// 		.then((json) => {
	// 			// const frst20 = json.slice(0, 20)
	// 			setUsers(json)
	// 			console.log(json)
	// 		})
	// 		.catch(err => {
	// 			console.warn(err)
	// 			alert('Ошибка')
	// 		})
	// }

	const handleDelete = (id) => {
		setUsers(prevUsers => prevUsers.filter(e => e.id !== id));
	};

	const isInvited = invits.includes(id);
	return (
		<li className="user_block">
			<div className="block_users">
				<div className="users_elem" key={id}>
					{isInvited && (
						<img className="img_ready" alt="icon" src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"></img>
					)}


					<img className="img_users" alt="icon" src={avatar}></img>
					<div>
						<h1 onClick={() => addUsers(id)} className="users_title">{first_name} {last_name}</h1>
						<p>{email}</p>
					</div>
					<button className="btn_delet" onClick={() => handleDelete(id)} >Удалить</button>
				</div>
			</div>
		</li>
	)
}