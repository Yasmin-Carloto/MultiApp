import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  background-color: #26272B;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  border-radius: 1.2em 1.2em 0 0;

  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: 12px;
  }
`;

function Footer() {
    return(
      <StyledFooter>© 2024 Yasmin Carlôto | All rights reserved</StyledFooter>
    )
}

export default Footer