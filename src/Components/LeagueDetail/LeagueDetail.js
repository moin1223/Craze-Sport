import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import male from '../../Photo/male.png';
import female from '../../Photo/female.png';
import Facebook from '../../Icon/Facebook.png';
import Twitter from '../../Icon/Twitter.png';
import YouTube from '../../Icon/YouTube.png';



const LeagueDetail = () => {
    const { idLeague } = useParams();

    const [league, setLeague] = useState({});


    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))

    }, [idLeague])

    const { strLeague, dateFirstEvent, strCountry, strSport, strGender, strBanner, strDescriptionEN,strTwitter,strYoutube} = league;
    const imageStyle = { height: '200px', width: "400px" }
   

    return (
        <>
            <div className="banner-img" style={{marginLeft:"50px"}}  ><img src={strBanner} alt="" /></div>
            <div className="container my-5" style={{ backgroundColor: "greenyellow", borderRadius: "10px" }}>
                <div className="row">

                    <div className="col-md-6">
                        <h3>{strLeague}</h3>
                        <p>Founded: {dateFirstEvent}</p>
                        <p>Country:{strCountry}</p>
                        <p>Sport Type:{strSport}</p>
                        <p>Gender:{strGender}</p>
                    </div>
                    <div className="col-md-6">
                        {strGender === 'Male' ? (
                                    <img
                                        className='w-100'
                                        src={male}
                                        alt='Male'
                                    />
                                ) : (
                                    <img
                                        className='conditional-image'
                                        src={female}
                                        alt='Female'
                                    />
                                )}

                    </div>
                </div>

            </div>
            <div><p>{strDescriptionEN}</p></div>

            <div className="row" style={{marginLeft:"300px",marginRight:"300px"}}>
            <div className="col-md-4">
           <a href={`https://${strTwitter}`}><img src={Twitter} alt=""/></a>

            </div>
            <div className="col-md-4">
            <img src={Facebook} alt="" />

            </div>
            <div className="col-md-4">
            <a href={`https://${strYoutube}`}><img src={ YouTube} alt=""/></a>

            </div>

            </div>
        </>

    );
};

export default LeagueDetail;