import  React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';


export default () => {
   
  const [movieList, setMovieList] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);


  useEffect(()=>{
    const loadAll = async () => {
         
       // pegando a lista de filmes

       let list = await Tmdb.getHomeList(); 
       setMovieList(list); 

       //pegando o featured

         let originals = list.filter( i => i.slug === 'Originals');
         console.log(originals); 
         let randomChosen = Math.floor(Math.random() *(originals[0].items.results.length - 1));
         let chosen = originals[0].items.results[randomChosen];
         let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

        setFeaturedData(chosenInfo);     
       
    }

    loadAll(); 

  }, []); 


  //Evento de Scroll do mouse 

  const [blackHeader, setBlackHeader ] = useState(false); 
  
  useEffect (()=>{
  
    const scrollList = () => {
       
      if(window.scrollY > 10) {
        setBlackHeader(true); 
      }else  {
        setBlackHeader(false); 
      }

    }
   window.addEventListener('scroll', scrollList); 

   return () => {
    window.removeEventListener('scroll', scrollList); 
   }

   
  },[])


   return (
       <div className="page">
                

                <Header black={blackHeader} />
                
                { FeaturedData && 
                   <FeaturedMovie  item={FeaturedData.original_name}
                                   itemDois={FeaturedData.backdrop_path}  
                                   itemTres={FeaturedData.vote_average} 
                                   itemQuatro={FeaturedData} 
                                   itemCinco={FeaturedData.number_of_seasons} 
                                   itemSix={FeaturedData.overview}
                                   itemOito={FeaturedData.genres.join(' ,')} /> 
                }
              <section className="Lists">
               {movieList.map((item, key)=>(
                         
                   <MovieRow key={key} title={item.title} items={item.items} />
               ))}
              </section>
                <footer className="rodapé">
                  Feito com fins educacionais por Kevyn Marques. <br></br>
                  Direitos de imagem para a Netflix.<br></br>
                   Dados de API do site www.themoviedb.org 
                </footer>
       </div>
   );
} 

