import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #161a2b; 
  width: 100%; 
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px; 
  transition: border-color 0.3s;
  padding: 0.5em;
  font-size: 18px;
  border-radius: 1em;
  margin: 1em;

  &:focus {
    border-color: #717BBC; 
    outline: none;
  }
`;

function InputText({onChangeFunction, inputValue, inputPlaceholder}) {
  return (
    <Input 
      type="text"
      onChange={(e) => onChangeFunction(e.target.value)}
      value={inputValue}
      placeholder={inputPlaceholder}
    />
  )
}

export default InputText