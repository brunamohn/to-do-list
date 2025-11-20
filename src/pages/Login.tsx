import { useContext, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";

function Login(){

  const navigate = useNavigate();

  const { onLogin } = useContext(Context);

  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const handleChange = (event : ChangeEvent<HTMLInputElement>): void => {
    
    setInput({...input, [event.target.name]: [event.target.value]});
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/todo");
    
  }

  return (
    <>
    <h1>Welcome</h1>
    <img />
    <form onSubmit={ handleSubmit } >
      <input onChange={ handleChange } type="text" name="username" id="username" placeholder="Enter your username" />
      <input onChange={ handleChange } type="password" name="password" id="password" placeholder="Enter your password" />
      <p>Forgot Password?</p>
      <button>Sign In</button>
    </form>
    
    </>
  )
}

export default Login;