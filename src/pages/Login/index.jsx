import styled from 'styled-components'; 
import { useState } from 'react';
import DefaultButton from '../../components/DefaultButton';
import { fetchUsers } from '../../api/Login/fetchUsers';
import { createUser } from '../../api/Login/postUser';
import { generateJWT } from '../../api/Login/createJWT';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color:  rgb(250 250 249);
  border-radius: 1em;
  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.2);
  width: 40%;
`;

const Input = styled.input`
  border: 0.2em solid #b3b3b3;
  border-radius: 1em;
  background: none;
  padding: 0.8em;
  width: 100%;
  font-size: 14px;
`;

const ErrorParagraph = styled.p`
  color: #bc0000;
  font-size: 14px;
  margin: 2en;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  margin: 0.2em;
`;

const Login = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "" 
  })

  const [errors, setErrors] = useState({})

  function validate(password) {
    const allErrors = {}

    if(loginData.email == ""){
        allErrors.email = "Campo email é obrigatório!"
    }else if(!/\S+@\S+\.\S+/.test(loginData.email)){
        allErrors.email = "Campo email está inválido!"
    }

    if(loginData.password == ""){
        allErrors.password = "Campo senha é obrigatório!"
    }else if(loginData.password.length < 8){
        allErrors.password = "A senha deve ter pelo menos 8 caracteres!"
    }else if(loginData.password !== password){
      allErrors.password = "A senha está incorreta!"
    }

    return allErrors
  }

  function handleChange(event) {
    const { name, value } = event.target
    setLoginData(prevValue => ({
        ...prevValue,
        [name]: value
    }))
  }

  async function findUser(userToLogin) {
    const allUsers = await fetchUsers()    
    const foundUser = allUsers.find((user) => user.email == userToLogin.email)    
    return foundUser
  }

  async function createNewUser(userToCreate) {
    const response = await createUser(userToCreate);  
    return response;
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const validationErrors = validate(loginData.password)
    const user = await findUser(loginData)
    
    if(Object.keys(validationErrors).length == 0){      
      if(user == undefined){
        const newUser = await createNewUser(loginData)
        const token = generateJWT(newUser)
        localStorage.setItem('token', token)
        onLogin()
      }else{
        const passwordError = validate(user.password)

        if(Object.keys(passwordError).length == 0){
          const tokenPayload = {
            user: user.email,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          }
          const token = generateJWT(tokenPayload);
          localStorage.setItem('token', token);
          onLogin()
        }else{
          setErrors(passwordError)
        }
      }
    }else{
      setErrors(validationErrors)
    }
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>Faça login e tenha acesso a várias atividades no MultiApp!</p>

        <InputContainer>
          <Input
            type="text"
            name='email'
            value={loginData.email} 
            onChange={(event) => handleChange(event)} 
            placeholder="Username" 
          />
          {errors && <ErrorParagraph>{errors.email}</ErrorParagraph>}
        </InputContainer>

        <InputContainer>
          <Input
            type="password"
            name='password'
            value={loginData.password} 
            onChange={(event) => handleChange(event)} 
            placeholder="Password" 
          />
          {errors && <ErrorParagraph>{errors.password}</ErrorParagraph>}
        </InputContainer>
        
        
        <DefaultButton buttonType="submit" buttonText="Login" />
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; 
