import {Button, Checkbox, Label, TextInput} from "flowbite-react";
import React, {useState} from "react";
import axios from "axios";

export const NewUser = () => {

  const [Form, setForm] = useState({email: "", username: "", password: ""});
  const [isValidated, setIsValidated] =useState(false);

  const baseURL = "http://localhost:8080/"

  let password1 = "";


  //TODO add client side validation on form fields

  function validatePassword(password2: string) {
    if (password2 == password1) {
      setForm((s) => ({...s, password: password1}))
      setIsValidated(true)
      console.log("correct password")
    } else {
      //TODO handle error(passwords not same)
      setIsValidated(false)
      console.log("passwords are not similar....")

    }
  }
  const handleOnSubmitEvent= (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isValidated){
      axios.post(baseURL+'/user/save', { Form},
          { headers: {
        'Content-Type': 'application/x-www-form-urlencoded', "Access-Control-Allow-Origin": "*"
      }})
          .then(res => {
            // Handle successful login
            console.log(res)
            console.log("YAY!")
          })
          .catch(err => {
            // Handle errors
            console.log("neeeeeeeeeeeeeeei!")
            console.log(err)
          });
    }
  }

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleOnSubmitEvent}>
        <div>
        <div className="mb-2 block">
          <Label
              htmlFor="username"
              value="Username"
          />
        </div>
        <TextInput
            id="username"
            type="text"
            placeholder="Username"
            required={true}
            shadow={true}
            onChange={(evt) => setForm((s) => ({...s, username: evt.target.value}))}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email2"
            value="Your email"
          />
          <TextInput
            id="email2"
            type="email"
            placeholder="name@blex.com"
            required={true}
            shadow={true}
            onChange={(evt) => setForm((s) => ({...s, email: evt.target.value}))}
        />
        </div>
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
      onChange={(evt) => {password1 = evt.target.value}}
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
      onChange={(evt)=>validatePassword(evt.target.value)}
    />
  </div>
  {/*<div className="flex items-center gap-2">
    <Checkbox id="agree" />
    <Label htmlFor="agree">
      I agree with the{' '}
      <a
        href="/forms"
        className="text-blue-600 hover:underline dark:text-blue-500"
      >
        terms and conditions
      </a>
    </Label>
  </div>*/}
  <Button type="submit">
    Register new account
  </Button>
</form>
    </>

  );
}