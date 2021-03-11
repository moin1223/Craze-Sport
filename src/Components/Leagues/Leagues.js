import React , { useState, useEffect } from 'react';
import SingleLeague from '../SingleLeague/SingleLeague';
import Topbanner from'../../Photo/Topbanner.jpg';
const Leagues = () => {
    const [ leagues, setLeagues] = useState([]);
    useEffect(() => {
       fetch( 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php') 
       .then(res => res.json())
       .then(data =>setLeagues (data.leagues))
       
    }, [])
  
    return (
      <>
      
        <div className="jumbotron jumbotron-fluid banner">    
  <div className="container">
    <h1 className="display-4 text-center text-white">Craze Sports</h1>
   
  </div>
</div>
      
       <div className="container">
           
            <div className="row">
                {
                  leagues.map((league)=><SingleLeague key={league.id} league={league}/>)
                }
            
            
            
        </div>

       </div>
       </>
    );
};

export default Leagues;
