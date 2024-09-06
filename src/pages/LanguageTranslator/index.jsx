import styled from 'styled-components';
import { IoIosReturnLeft } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureContainer from '../../components/FeatureContainer';
import FeatureTitle from '../../components/FeatureTitle';
import InputText from '../../components/InputText';
import DefaultButton from '../../components/DefaultButton';
import Select from './components/Select';
import { languageTranslator } from '../../api/LanguageTranslator/languageTranslator';

const TranslatedText = styled.p`
  color: #333;
  font-size: 18px;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
`;

const LanguageTranslator = () => {
  const [text, setText] = useState(''); 
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en'); 
  const [targetLanguage, setTargetLanguage] = useState('es');
  const navigate = useNavigate()

  const languageOptions = [
    {language: "English", value: "en"},
    {language: "Spanish", value: "es"},
    {language: "Franch", value: "fr"},
    {language: "German", value: "de"},
    {language: "Italian", value: "it"},
    {language: "Portuguese", value: "pt"}
  ]

  const translateText = async () => {
    const response = await languageTranslator(sourceLanguage, targetLanguage, text)

    if(response.error){
      setTranslatedText("Could not translate.")
    }else{
      setTranslatedText(response.response)
    }
  }

  return (
    <FeatureContainer>
      <FeatureTitle text="Language Translator" />
      <Select label="Source Language" selectedValue={sourceLanguage} setSelectedValue={setSourceLanguage} options={languageOptions}/>
      <Select label="Target Language" selectedValue={targetLanguage} setSelectedValue={setTargetLanguage} options={languageOptions}/>
      <InputText
        type="text"
        onChangeFunction={setText}
        inputValue={text}
        inputPlaceholder="Enter text to translate"
      />
      <DefaultButton buttonAction={translateText} buttonText="Translate" /> 
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
      <DefaultButton buttonText={<><IoIosReturnLeft /> Return</>} buttonAction={() => navigate("/carousel")}/>
    </FeatureContainer>
  );
};

export default LanguageTranslator;