// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

// ==============================|| SAMPLE PAGE ||============================== //

const Creercoordonateur = () => (
    <MainCard title="Gestion des coordonateurs">
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="name" placeholder="Entrer nom" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Post-Nom</Form.Label>
                    <Form.Control type="name" placeholder="jhon doe" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Prenom</Form.Label>
                    <Form.Control placeholder="jane doe" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control placeholder="masculin" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Adresse domicile</Form.Label>
                    <Form.Control placeholder="kalubwe 25" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control type="text" placeholder="chris.k@gmail.com" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date de naissance </Form.Label>
                    <Form.Control type="date" placeholder="" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Lieu de naissance</Form.Label>
                    <Form.Control type="date" placeholder="masculin" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridLogin">
                    <Form.Label>Login</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMotdepasse">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Enregistrer
            </Button>
        </Form>
    </MainCard>
);

export default Creercoordonateur;
