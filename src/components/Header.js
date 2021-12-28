import React from "react"; 
import './Header.css'

export default ({black}) => {

  return (

        <header className={black ? 'black' : ''}>
           <div className="header--logo">
             <a href="/">
                 <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix"/>
             </a>

           </div>
           
           <div className="bombando">
              <ul>
                <li>Início</li>
                <li>Séries</li>
                <li>Filmes</li>
                <li>Bombando</li>
                <li>Minha lista</li>
              </ul>
          </div>

           <div className="header--user">
           <a href="/">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix"/>
             </a>
           </div>
          
        </header>

  );
}

