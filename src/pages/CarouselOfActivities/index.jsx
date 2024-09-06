import styled from "styled-components";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 2em;
`;

const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #9B23EA, #5F72BD);
  border-radius: 2em;
  padding: 4em;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;
  gap: 1.5em;

  &:hover {
    box-shadow: 0 0.8em 1.2em rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-size: 32px;
    color: white;
  }
`;

const CarouselOfActivities = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate()

  return (
    <CarouselContainer>
      <CustomCarousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={carouselIndex}
        showThumbs={false}
        onChange={(index) => setCarouselIndex(index)}
      >
        <CarouselItem>
          <h2>QR Code Generator</h2>
          <DefaultButton buttonText="Acessar" buttonAction={() => navigate("/qrcode-generator")} />
        </CarouselItem>
        <CarouselItem>
          <h2>IP Address Finder</h2>
          <DefaultButton buttonText="Acessar" buttonAction={() => navigate("/ip-address-finder")} />
        </CarouselItem>
        <CarouselItem>
          <h2>Movie Search Engine</h2>
          <DefaultButton buttonText="Acessar" buttonAction={() => navigate("/movie-search-engine")} />
        </CarouselItem>
        <CarouselItem>
          <h2>Todo App</h2>
          <DefaultButton buttonText="Acessar" buttonAction={() => navigate("/todo-app")} />
        </CarouselItem>
        <CarouselItem>
          <h2>Quiz App</h2>
          <DefaultButton buttonText="Acessar" buttonAction={() => navigate("/quiz-app")} />
        </CarouselItem>
        <CarouselItem>
          <h2>Language Translator</h2>
          <DefaultButton buttonText="Acessar" buttonAction={() => navigate("/language-translator")} />
        </CarouselItem>
      </CustomCarousel>
    </CarouselContainer>
  );
};

export default CarouselOfActivities;
