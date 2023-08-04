"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const TravelForm = () => {
  const [numPasajeros, setNumPasajeros] = useState(1);
  const [pasajeros, setPasajeros] = useState([
    { nombre: "", fono: "", domicilio: "" },
  ]);
  const [fecha, setFecha] = useState("");
  const [horaLlegada, setHoraLlegada] = useState("");
  const [dirInicio, setDirInicio] = useState("");
  const [dirDestino, setDirDestino] = useState("");

  useEffect(() => {
    setPasajeros(
      [...Array(numPasajeros)].map(() => ({
        nombre: "",
        fono: "",
        domicilio: "",
      }))
    );
  }, [numPasajeros]);

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const data = {
      fecha,
      hora_llegada: horaLlegada,
      dir_inicio: dirInicio,
      dir_destino: dirDestino,
      pasajeros,
    };

    axios
      .post("http://localhost:3001/viajes", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="date">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="arrivalTime">
              <Form.Label>Hora de Llegada</Form.Label>
              <Form.Control
                type="time"
                value={horaLlegada}
                onChange={(e) => setHoraLlegada(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="startAddress">
              <Form.Label>Dirección de inicio</Form.Label>
              <Form.Control
                type="text"
                value={dirInicio}
                onChange={(e) => setDirInicio(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="endAddress">
              <Form.Label>Dirección de destino</Form.Label>
              <Form.Control
                type="text"
                value={dirDestino}
                onChange={(e) => setDirDestino(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="numPasajeros">
              <Form.Label>Número de Pasajeros</Form.Label>
              <Form.Control
                as="select"
                value={numPasajeros}
                onChange={(e) => setNumPasajeros(Number(e.target.value))}
                required
              >
                {[1, 2, 3, 4].map((val, idx) => (
                  <option key={idx} value={val}>
                    {val}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {pasajeros.map((pasajero, index) => (
              <div key={index}>
                <Form.Group controlId={`pasajeros[${index}].nombre`}>
                  <Form.Label>Nombre Pasajero {index + 1}</Form.Label>
                  <Form.Control
                    type="text"
                    value={pasajero.nombre}
                    onChange={(e) => {
                      const newPasajeros = [...pasajeros];
                      newPasajeros[index].nombre = e.target.value;
                      setPasajeros(newPasajeros);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group controlId={`pasajeros[${index}].fono`}>
                  <Form.Label>Telefono Pasajero {index + 1}</Form.Label>
                  <Form.Control
                    type="text"
                    value={pasajero.fono}
                    onChange={(e) => {
                      const newPasajeros = [...pasajeros];
                      newPasajeros[index].fono = e.target.value;
                      setPasajeros(newPasajeros);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group controlId={`pasajeros[${index}].domicilio`}>
                  <Form.Label>Domicilio Pasajero {index + 1}</Form.Label>
                  <Form.Control
                    type="text"
                    value={pasajero.domicilio}
                    onChange={(e) => {
                      const newPasajeros = [...pasajeros];
                      newPasajeros[index].domicilio = e.target.value;
                      setPasajeros(newPasajeros);
                    }}
                    required
                  />
                </Form.Group>
              </div>
            ))}

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TravelForm;
