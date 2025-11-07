import { OprosF } from '../type';

interface infUsersProps extends OprosF {
	invits: number[];
	addUsers: (id: number) => void;
	setUsers: React.Dispatch<React.SetStateAction<OprosF[]>>;
	setInvits: React.Dispatch<React.SetStateAction<number[]>>
}


export const Info: React.FC<infUsersProps> = ({ setUsers, email, id, first_name, last_name, avatar, addUsers, invits, setInvits }) => {

	const handleDelete = (id: number): void => {
		setUsers(prevUsers => prevUsers.filter(e => e.id !== id));
		setInvits((prev: number[]) => prev.filter(u => u !== id))
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