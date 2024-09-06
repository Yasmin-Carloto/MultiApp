import styled from 'styled-components';
import { IoIosReturnLeft } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import QRCode from 'qrcode.react';
import FeatureContainer from '../../components/FeatureContainer';
import FeatureTitle from '../../components/FeatureTitle';
import InputText from '../../components/InputText';
import DefaultButton from '../../components/DefaultButton';

const QRCodeContainer = styled.div`
  background: #ffffff; 
  border-radius: 1em; 
  box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.1); 
  padding: 1em;
  margin: 1em;
`;

const QRCodeGenerator = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate()

  return (
    <FeatureContainer>
      <FeatureTitle text="QR CODE"/>
      <InputText
        type="text"
        inputValue={text} 
        onChangeFunction={setText} 
        inputPlaceholder="Enter text to encode" 
      />
      {text && (
        <QRCodeContainer>
          <QRCode value={text} size={150}/>
        </QRCodeContainer>
      )}
      <DefaultButton buttonText={<><IoIosReturnLeft /> Return</>} buttonAction={() => navigate("/carousel")}/>
    </FeatureContainer>
  );
};

export default QRCodeGenerator;
