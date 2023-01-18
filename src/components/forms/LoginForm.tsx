import {Checkbox, Label, TextInput, Button} from "flowbite-react";
import {useState} from "react";
import axios  from "axios";


const LoginForm =()=>{
    const [Form, setForm] = useState({username:"", password:""});
    const submitBtn = document.getElementById("submitBtn");
    let params = new URLSearchParams();

    submitBtn?.addEventListener('click',function(e) {
        e.preventDefault();
        const target = e.target as HTMLInputElement
        setForm({...Form, [target.name]: target.value})

        params.append('username', Form.username);
        params.append('password', Form.password);

        postStuff();

    });
    function postStuff() {
        axios.post('//perform_login',
            params)
            .then(
            )
            .catch(error => {
                let errResp = error.response;
                if (errResp.status === 401) {
                    //Ex: show login page again...
                }
            })
    }

        return (

            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="username"
                        type="username"
                        name="username"
                        placeholder="Username"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name="password"
                        required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember"/>
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit" id="submitBtn">
                    Submit
                </Button>
            </form>
        )
}

export default LoginForm;