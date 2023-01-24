import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import axios from 'axios';
import "./SignIn.css";

//TODO interface User is not used
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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/login', {
				username,
				password,
			})
				.then((response) => {
					if (response.data.accessToken) {
						//save token to local storage
						localStorage.setItem("user", JSON.stringify(response.data));
						//set authenticated and username
						onLogin(username);
					}
					return response.data;
				})
			// TODO: Handle navigation here!
		} catch (err) {
			console.error(err);
		}
	};

	// TODO: Implement remember me - or remove it!(LocalStorage vs. SessionStorage?)
	return (

		<>
			<form className="sign-in-form flex flex-col gap-4" onSubmit={handleSubmit}>
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
						placeholder="Your username"
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
						placeholder="Password"
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
