import {useState} from 'react'


type InputProps ={
    name: string,
    placeholder: string,
    type: string,
    className: string,
    value: string,
    handleError: ()=>void
}
const Input =({name,placeholder,type,className,value,handleError}:InputProps)=> {
    const [inputValue, setInputValue]=useState("");
    const [classNameIs, setClassName] =useState("")
    const [error, setError] = useState(false)



        return (
            <input value={inputValue}
                   onChange={(e)=>setInputValue(e.target.value)}
                   className={classNameIs}
                   placeholder={placeholder}
                   type={type}
                   name={name}
            />
        )
}

export default Input