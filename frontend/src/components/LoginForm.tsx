import {useState} from "react";
import AuthenticationService from "./AuthenticationService";
import axios from "axios";

const LoginForm = () => {

    const [Form, setForm] = useState({username:"", password:""});

    const submitBtn = document.getElementById("submitBtn");

    submitBtn?.addEventListener('click',function(e){
        e.preventDefault();
        const target = e.target as HTMLInputElement
        setForm({ ...Form, [target.name]: target.value })
        axios({method:'post',
        url:'//fooLogin',
        params:{
            username: Form.username,
            password: Form.password
        },

        })
        /*
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        })
            .then(
        //authentication success...
    })
        .catch(error=>{
            var errResp = error.response;
            if(errResp.status === 401){
                //Ex: show login page again...
            }

        })*/
        /*AuthenticationService
            .executeBasicAuthenticationService(Form.username, Form.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(Form.username, Form.password)
                /!*this.props.history.push(`/courses`)*!/
            }).catch((e) => {
            console.error(e);
        })*/

    })
    return(
        <form action="" id="login">
            <input type="text" placeholder="Name" id="username" name="username"/>
            <input type="text" placeholder="Email" id="password" name="password"/>
            <button type="submit" id="submitBtn">Submit</button>
        </form>
    )
}
export default LoginForm;