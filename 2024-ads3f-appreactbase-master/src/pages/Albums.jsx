import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./Albums.css";
import meuAlbumImg1 from "../assets/images/images.jpg";
import meuAlbumImg2 from "../assets/images/Duncan_Laurence_-_Arcade.png";

const Albums = () => {
  // Dados fictícios ou estado para álbuns podem ser colocados aqui
  const albumsData = [
    {
      id: 1,
      title: "Álbum 1",
      artist: "Artista 1",
      description: "Descrição do Álbum 1",
      imageUrl: meuAlbumImg1,
    },
    {
      id: 2,
      title: "Álbum 2",
      artist: "Artista 2",
      description: "Descrição do Álbum 2",
      imageUrl: meuAlbumImg2,
    },
    
  ];

  return (
    <Container>
      <Row className="g-4">
        {albumsData.map((album) => (
          <Col key={album.id}>
            <Card className="album-card">
              <Card.Img variant="top" src={album.imageUrl} />
              <Card.Body>
                <Card.Title className="album-title">{album.title}</Card.Title>
                <Card.Text className="album-artist">Artista: {album.artist}</Card.Text>
                <Card.Text className="album-description">{album.description}</Card.Text>
                <Button variant="primary" className="album-button">Ver Álbum</Button>
                <Button variant="secondary" className="ms-2 album-button">Ouvir</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Albums;