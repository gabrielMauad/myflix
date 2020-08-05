/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import SlickSlider from 'react-slick';
import styled, { css } from 'styled-components';
import prevArrow from '../../../../Assets/img/chevron-left.svg';
import nextArrow from '../../../../Assets/img/chevron-right.svg';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 4px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const setScrollNumber = (conteudo) => {
  if (conteudo[0].titulo === 'Melhores conteúdos do youtube!') {
    return ((conteudo.length - 1) % 2 === 0 ? 2 : 3);
  } if ((conteudo.length >= 9)) {
    return (conteudo.length % 2 === 0) ? 2 : 3;
  }
  return (conteudo.length % 2 === 0) ? 2 : 1;
};

// export const Arrow = styled.img`
//  visibility: hidden;
//  &:hover,
//  &:focus {
//     ;
//   }
//  `

const Slider = ({ conteudo, children }) => {
  const configArrow = (type) => (type === 1 ? (<img src={prevArrow} alt="prevArrow" />) : <img src={nextArrow} alt="nextArrow" />);

  // const handleMouseOver = () => {
  //   setArrow(true);
  // }

  // const handleMouseOut = () => {
  //   // setArrow(false)
  // }

  // const [arrow, setArrow] = useState(false);
  return (
    <Container>
      <SlickSlider {...{
        // arrows: arrow,
        dots: false,
        infinite: true,
        speed: 600,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll: setScrollNumber(conteudo),
        focusOnSelect: false,
        // prevArrow: configArrow(1),
        // nextArrow: configArrow(2),
      }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
};

export default Slider;
