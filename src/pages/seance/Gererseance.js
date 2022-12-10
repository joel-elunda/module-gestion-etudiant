// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';

// ==============================|| SAMPLE PAGE ||============================== //

const Gererseance = () => (
    <MainCard title="Gestion de seances">
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Intitule-cours</Form.Label>
                    <Form.Control type="text" placeholder="Entrer nom cours" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Date-seance</Form.Label>
                    <Form.Control type="date" placeholder="22/12/2012" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Heure debut seance</Form.Label>
                    <Form.Control type="time" placeholder="10h23" />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Ajouter seance
            </Button>
            <MainCard>
                <Form>
                    <Table table table-striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Intitule cours</th>
                                <th>Date bedut</th>
                                <th>Heure debut seance</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Oracle</td>
                                <td>07/11/2022</td>
                                <td>08:00</td>
                                <td>
                                    <Button variant="success">Modifier</Button>
                                    <Button variant="danger">Supprimer</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Form>
            </MainCard>
        </Form>
    </MainCard>
);

export default Gererseance;
