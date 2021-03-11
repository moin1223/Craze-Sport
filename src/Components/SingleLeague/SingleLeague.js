import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
const SingleLeague = (props) => {
    const{idLeague,strLeague, strSport}=props.league;

    return (
    
        <div className="col-md-3 p-3 mx-3">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Name:{strLeague}</Card.Title>
                <Card.Text><p>Sport type: {strSport}</p></Card.Text>
                <div className="text-center">
                     <Button as={Link}  to={`/league/${idLeague}`} variant="success">Explore</Button>
        
                </div>
            </Card.Body>
        </Card>

       </div>
      

    );
};

export default SingleLeague;