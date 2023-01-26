import { isAxiosError} from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { BlexModal } from "../../components/BlexModal/BlexModal";
import "./NewUser.css";
import FormAlert from "../../components/alerts/FormAlert";
import http from '../../http-common'


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
	const [formAlert, setFormAlert] = useState({type:"Whoops",message:"Passwords do not match",classes:"flex p-4 mb-4 text-sm rounded-lg dark:bg-gray-800 text-red-800 border border-red-300 bg-red-50"});
	const toggleModal = () => setModalActive(!modalActive);
	const header = "Terms and Conditions";
	const block1 = "All my uploads will be my own. You are responsible yourself for any violation of right of the original owners of the music";
	const block2 = "Be an all around great person, also, don't you dare to try programming. It will consume you.";
	const alertMsg = document.getElementById("alertMsg" );
	const usernameErrorMsg = document.getElementById("usernameErr" );
	const emailErrorMsg = document.getElementById("emailErr" );
	const user = document.getElementById("user");
	const emailInput = document.getElementById("email" )

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [isValidated, setIsValidated] = useState(false);
	const [password1, setPassword1] = useState('');

	function validatePassword(password2: string) {
		if (password2 == password1) {
			setPassword(password2);
			setIsValidated(true)
			setFormAlert({type:"Success!",message:" Passwords match",classes: "flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"});
			alertMsg?.classList.remove("hide");

		} else {
			setIsValidated(false)
			console.log("passwords are not similar....")
			setFormAlert({type:"Whoops...!",message:" Passwords do not match",classes:" flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"});
			alertMsg?.classList.remove("hide");

		}
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isValidated) {
			try {
				const response = await
					http.post('register', {
						username,
						password,
						email,
					});
				onRegister(response.data);
				setFormAlert({...formAlert,type:"Success!",message:"User registered"})


				console.log("response.data: " + response.data);

				usernameErrorMsg?.classList.remove("showError");
				usernameErrorMsg?.classList.add("hide");
				emailErrorMsg?.classList.remove("showError");
				emailErrorMsg?.classList.add("hide");
			} catch (err:any) {
				if (isAxiosError(err)) {
					console.log(err.response?.data)
					let responseData=err.response?.data;
					if (responseData == "Username is taken") {
						console.log("IfStatement works!!!" )
						usernameErrorMsg?.classList.add("showError");
						usernameErrorMsg?.classList.remove("hide");
						//TODO:fix border color
						user?.classList.add("error-input");
					} else {
						usernameErrorMsg?.classList.remove("showError");
						usernameErrorMsg?.classList.add("hide");
						user?.classList.remove("border-red-500");
					}
					if (responseData == "Email is taken") {
						emailErrorMsg?.classList.add("showError");
						emailErrorMsg?.classList.remove("hide");
						emailInput?.classList.add("border-red-500");
					} else{
						emailErrorMsg?.classList.remove("showError");
						emailErrorMsg?.classList.add("hide");
						emailInput?.classList.remove("border-red-500");
					}

				}
			}
		} else {
		    console.log("passwords are not similar....")
		}
	};

	return (
		<>
			<form className="flex flex-col gap-4 md:w-2/4 md:m-auto" onSubmit={handleSubmit}>
				<div className="flex flex-col">
				<div className="mb-2 block self-start">
						<Label
							htmlFor="user"
							value="Username"
						/>
					</div>
					<TextInput
						id="user"
						className=""
						type="text"
						placeholder="Awesome username!"
						required={true}
						shadow={true}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<p id="usernameErr" className="mt-2 text-sm text-red-600 dark:text-red-500 dark:text-red-400 dark:border-red-800 hide"><span
						className="font-medium">Oops!</span> Username already taken!</p>
				</div>
				<div className="flex flex-col">
					<div className="mb-2 block self-start">
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
					<p id="emailErr" className="mt-2 text-sm text-red-600 dark:text-red-500 dark:text-red-400 dark:border-red-800 hide "><span
						className="font-medium">Oops!</span> Email already registered!</p>

				</div>
				<div className="flex flex-col">
					<div className="mb-2 block self-start">
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
						onChange={(e) => setPassword1(e.target.value)}
					/>
				</div>
				<div className="flex flex-col">
					<div className="mb-2 block self-start">
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
						onChange={(e) => validatePassword(e.target.value)}
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
				<div>
					<p ></p>
				</div>
				<FormAlert type={formAlert.type} message={formAlert.message} classes={formAlert.classes}></FormAlert>

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

