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

const GererPromotion = () => (
    <MainCard title="Gestion promotion">
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nom-Promotion</Form.Label>
                    <Form.Control type="text" placeholder="Entrer nom" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="jhon doe" />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Creer
            </Button>
            <MainCard>
                <Form>
                    <Table table table-striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Promotion</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Genie logiciel</td>
                                <td>
                                    <Button variant="success">Modifier</Button>
                                    <Button variant="danger">Supprimer</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Reseaux</td>
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

export default GererPromotion;
