import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import axios, {isAxiosError} from 'axios';
import "./SignIn.css";
import FormAlert from "../../components/alerts/FormAlert";
import http from '../../http-common'

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
	const [formAlert, setFormAlert] = useState({type:"Whoops..",message:"Username or password is incorrect",classes:"flex p-4 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-800 border border-red-300 bg-red-50"});
	const formAlertContainer = document.getElementById("formAlertContainer");


	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await http.post('login', {
				username,
				password,
			})
				.then((response) => {
					console.log(response.data);

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
			if (isAxiosError(err)) {
				console.log(err.response?.data)
			formAlertContainer?.classList.remove("hide");
			setFormAlert({type:"Whoops..",message:"Username or password is incorrect",classes:"flex p-4 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-800 border border-red-300 bg-red-50"});
			return;
		}

			console.error(err);
			formAlertContainer?.classList.remove("hide");
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
				<div id="formAlertContainer"className="hide">
					<FormAlert type={formAlert.type} message={formAlert.message} classes={formAlert.classes}></FormAlert>
				</div>
				<Button type="submit">
					Login
				</Button>
			</form>
		</>
	)
}
