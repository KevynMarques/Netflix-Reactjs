const API_KEY = 'ffbfe1eadcf9f3d1a4af7db7516870c7'; 
const API_BASE ='https://api.themoviedb.org/3';


/*
-- Originais Netflix
-- recomendados 
-- Em Alta 
-- Ação
-- comédia
-- terror 
-- documentarios
*/
const basicFethc = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  
 getHomeList: async () => {
   return [ 
           {  
             slug: 'Originals',
             title:'Originais da Netflix',
             items: await basicFethc(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}` )            
           },   
           
           {  
            slug: 'Trending',
            title:'Recomendados para voce',
            items: await basicFethc(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)         
          },   
          
          {  
            slug: 'Toprated',
            title:'Em Alta',
            items: await basicFethc (`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)         
          },  
          {  
            slug: 'Action',
            title:'Ação',
            items: await basicFethc (`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)          
          },    
          {  
            slug: 'Comedy',
            title:'Comedia',
            items: await basicFethc (`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) 
          },    
          {  
            slug: 'Horror',
            title:'Terror',
            items: await basicFethc (`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) 
          },  
          
          {  
            slug: 'romance',
            title:'Romance',
            items: await basicFethc (`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) 
          },    

          {  
            slug: 'Documentary',
            title:'Documentários',
            items: await basicFethc (`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) 
          },    
   ];
 }, 

 getMovieInfo: async (movieId, type) => {
  let info = {};

  if(movieId) {
      switch(type) {
          case 'movie':
              info = await basicFethc(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          case 'tv':
              info = await basicFethc(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
          default:
              info = null;
          break;
      }
  }

  return info;
}

}