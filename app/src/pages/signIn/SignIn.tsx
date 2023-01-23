import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import axios from 'axios';

interface User {
	username: string;
	password: string;
}

interface Props {
	onLogin: (username: string) => void;
}



export const SignIn: React.FC<Props> = ({ onLogin }) => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/login', {
				username,
				password,
			})
				.then((response) => {
					if (response.data.accessToken) {
						localStorage.setItem("user", JSON.stringify(response.data));
						onLogin(username);
					}
					return response.data;
				})
			// TODO: Handle navigation here!
			console.log("Response data: " + response.data);
			console.log("response: " + response);
		} catch (err) {
			console.error(err);
		}
	};





	// TODO: Maybe implement remember me at some point
	return (

		<>
		<br/>
		<br/>
		<br/>
		<br/>
		<br/>
			<form className="flex flex-col gap-4 sm:ml-80 sm:mr-80" onSubmit={handleSumbit}>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="user"
							value="Your Username:"
						/>
					</div>
					<TextInput
						id="user"
						type="text"
						placeholder="What to call you?"
						required={true}
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="pass"
							value="Your password"
						/>
					</div>
					<TextInput
						id="pass"
						type="password"
						required={true}
						placeholder="Super secret password!"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="remember" />
					<Label htmlFor="remember">
						Remember me
					</Label>
				</div>
				<Button type="submit">
					Login
				</Button>
			</form>
		</>
	)
}
