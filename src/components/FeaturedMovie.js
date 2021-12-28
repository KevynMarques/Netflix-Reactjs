import React from "react";
import './featured.css'

export default ({item, itemDois, itemTres, itemQuatro, itemCinco, itemSix, itemSete, itemOito}) => {

  let firstDate = new Date (itemQuatro.first_air_date); 

   
   return (
        <section className="featured" style={{
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   backgroundImage: `url(https://image.tmdb.org/t/p/original${itemDois})`
        }}>
          <div className="featured--vertical">
          <div className="featured--horizontal">

          <div className="featured--info">
                 <div className="featured--Name">{item}</div>
                 <div className="featured-points">{itemTres} Pontos</div> 
                 <div className="featured--yaer">{firstDate.getFullYear()} </div> 
                 <div className="featured--seasons">{itemCinco}{itemCinco !== 1 ? ' temporadas' : ' temporada'} </div> 
                 <div className="featured--description">{itemSix} {itemSix == '' ? 'A API não forneceu descrição previa no banco de dados para alguns filmes e series, então estou deixando essa mensagem, muito obrigado por visitar meu projeto !' : itemSix} </div> 
                 <div className="featured--buttons">{itemSete} 
                 <a  className="featured-buttom-branco" href=""> ► Assistir</a>
                 <a  className="featured-buttom-preto" href="">+ Minha lista</a>
                 
                 </div> 
                {/*<div className="featured--genres"> <strong> Generos: </strong>{itemOito}</div> */}
                 </div>  
           </div>
          </div>
        </section>
   );
}
