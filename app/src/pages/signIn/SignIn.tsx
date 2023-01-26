import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import axios, {isAxiosError} from 'axios';
import "./SignIn.css";
import FormAlert from "../../components/alerts/FormAlert";

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
	const [formAlert, setFormAlert] = useState({type:"",message:"",classes:""});
	const alertMsgContainer = document.getElementById("alertMsg")

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await axios.post('http://localhost:8080/login', {
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
		} catch (err) {
			if (isAxiosError(err)) {
			alertMsgContainer?.classList.remove("hide")
			setFormAlert({type:"Whoops..",message:"Username or password is incorrect",classes:"flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"});
			return;
		}
		}
	};

	// TODO: Implement remember me - or remove it!(LocalStorage vs. SessionStorage?)
	return (
		<>
			<form className="sign-in-form flex flex-col gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<div className="mb-2 block self-start">
						<Label
							htmlFor="user"
							value="Username:"
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
				<div className="flex flex-col">
					<div className="mb-2 block self-start">
						<Label
							htmlFor="pass"
							value="Password"
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
					<FormAlert type={formAlert.type} message={formAlert.message} classes={formAlert.classes}></FormAlert>
				<Button type="submit">
					Login
				</Button>
			</form>
		</>
	)
}
