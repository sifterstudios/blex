import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { BlexModal } from "../../components/BlexModal/BlexModal";

interface User {
	username: string;
	password: string;
	email: string;
}

interface Props {
	onRegister: (data: User) => void;
}
export const NewUser: React.FC<Props> = ({ onRegister }) => {

	const [modalActive, setModalActive] = useState(false);
	const toggleModal = () => setModalActive(!modalActive);
	const header = "Terms and Conditions";
	const block1 = "All my uploads will be my own. You are responsible yourself for any violation of right of the original owners of the music";
	const block2 = "Be an all around great person, also, don't you dare to try programming. It will consume you.";
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');


	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await
				axios.post('http://localhost:8080/register', {
					username,
					password,
					email,
				});
			onRegister(response.data);

			console.log("response.data: " + response.data);
			console.log("response: " + response);
		} catch (err) {
			console.error(err);
		}
	};

// TODO: Fix spacing of form!! And also responsive for mobile
	return (
		<>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="user"
							value="Your username"
						/>
					</div>
					<TextInput
						id="user"
						type="text"
						placeholder="Awesome username!"
						required={true}
						shadow={true}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="email"
							value="Your email"
						/>
					</div>
					<TextInput
						id="email"
						type="email"
						placeholder="name@domain.com"
						required={true}
						shadow={true}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="password2"
							value="Your password"
						/>
					</div>
					<TextInput
						id="password2"
						type="password"
						required={true}
						shadow={true}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="repeat-password"
							value="Repeat password"
						/>
					</div>
					<TextInput
						id="repeat-password"
						type="password"
						required={true}
						shadow={true}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="agree" required={true} />
					<Label htmlFor="agree">
						I agree with the{' '}
						<a
							onClick={toggleModal}
							className="text-blue-600 hover:underline dark:text-blue-500"
						>
							terms and conditions
						</a>
					</Label>
				</div>
				<Button type="submit">
					Register new account
				</Button>
			</form>
			<BlexModal
				header={header}
				block1={block1}
				block2={block2}
				modalActive={modalActive}
				toggle={toggleModal} />
		</>

	);
}
