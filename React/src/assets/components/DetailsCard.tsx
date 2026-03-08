import React from "react"
import { CardTitle } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import type App from "../../App";

export const Detailscard =({CardTitle , cardDiscription})=> {
    return(
        <>
        <div>
            <Card.Img variant="top"
             src="https://tse1.mm.bing.net/th/id/OIP.xKiE_jUn8tPueoLWXsyCPgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" />
            <Card.Body>
              <Card.Title>{CardTitle}</Card.Title>
              <Card.Text>
                {cardDiscription}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </div>
        </>
    );
}
