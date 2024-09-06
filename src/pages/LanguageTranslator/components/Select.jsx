import styled from "styled-components";

const ContainerSelect = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;

    @media (max-width: 768px) {
        align-items: center;
        margin: 1em;
    }
`

const Label = styled.label`
  color: #717BBC;
  font-size: 16px;
`;

const StyledSelect = styled.select`
  border: 1px solid #363F72;
  border-radius: 1em;
  padding: 0.5em;
  margin: 0.5em;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #717BBC;
    outline: none;
  }
`;

const Select = ({label, selectedValue, setSelectedValue, options}) => {
    return (
        <ContainerSelect>
            <Label>{label}:</Label>
            <StyledSelect value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.language}</option>
                ))}
            </StyledSelect>
        </ContainerSelect>
    )
}

export default Select