import React from 'react';
import Menu from '../../Components/Menu/menu';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Confiram esses conteúdos dos melhores artistas, jogadores e influencidores do youtube! Sigam seus canais e procurem seus perfis no twitter, instagram, soundcloud..."
      />

 

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

 

      <Carousel category={dadosIniciais.categorias[1]} />

 

      <Carousel category={dadosIniciais.categorias[2]} />

 

      <Carousel category={dadosIniciais.categorias[3]} />

 

      <Carousel category={dadosIniciais.categorias[4]} />

 

      <Carousel category={dadosIniciais.categorias[5]} />
      <Footer />
    </div>
  );
}

export default Home;
