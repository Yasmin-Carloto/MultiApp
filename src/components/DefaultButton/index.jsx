import styled from "styled-components";

const Button = styled.button`
    padding: 1em 1.2em;
    background-color: #363F72;
    color: white;
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.8em;
    margin: 0.8em;

    &:hover {
      background-color: #717BBC;
    }
`

function DefaultButton({buttonType = "button", buttonText, buttonAction = () => {}}) {
    return(
        <Button type={buttonType} onClick={() => buttonAction()}>{buttonText}</Button>
    )
}

export default DefaultButton