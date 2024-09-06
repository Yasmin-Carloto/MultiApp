import styled from 'styled-components'; 
import { IoIosReturnLeft } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureContainer from '../../components/FeatureContainer';
import FeatureTitle from '../../components/FeatureTitle';
import InputText from '../../components/InputText';
import DefaultButton from '../../components/DefaultButton';
import { fetchIpAdress } from '../../api/FetchIpAdress/fetchIpAdress';

const ResultsContainer = styled.div`
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.8em;
`;

const IPAddressFinder = () => {
  const [ipInput, setIp] = useState(''); 
  const [ipData, setIpData] = useState(null); 
  const [error, setError] = useState(false)
  const navigate = useNavigate("/")

  const findIP = async () => {
    const responseIP = await fetchIpAdress(ipInput)
    if(responseIP.error){
      setIpData(null)
      setError(true)
    }else{
      setIpData(responseIP.response)
      setError(false)
    }
  };

  return (
    <FeatureContainer>
      <FeatureTitle text="IP Address Finder" />
      <InputText
        inputValue={ipInput}
        onChangeFunction={setIp} 
        placinputPlaceholdereholder="Enter IP address" 
      />
      <DefaultButton buttonText="Find IP" buttonAction={findIP} />
      {ipData && ( 
        <ResultsContainer>
          <p><strong>IP:</strong> {ipData.ip}</p>
          <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
          <p><strong>ISP:</strong> {ipData.org}</p>
        </ResultsContainer>
      )}
      {error && <p>IP adress not found!</p>}

      <DefaultButton buttonText={<><IoIosReturnLeft /> Return</>} buttonAction={() => navigate("/carousel")}/>
    </FeatureContainer>
  );
};

export default IPAddressFinder;
