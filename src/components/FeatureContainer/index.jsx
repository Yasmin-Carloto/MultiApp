import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  background: #ffffff;
  border-radius: 1em;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  padding: 2em;
  max-width: 50%;
  max-height: 75%;
`;

function FeatureContainer({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default FeatureContainer