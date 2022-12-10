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

const Tauxabsence = () => (
    <MainCard title="voir taux absence etudiant">
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nom cours</Form.Label>
                    <Form.Control type="text" placeholder="Entrer nom" />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                valider
            </Button>
            <MainCard>
                <Form>
                    <Table table table-striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom etudiant</th>
                                <th>Taux absence</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Randy mukenge</td>
                                <td>75%</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Albert kalubi</td>
                                <td>25%</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Daniel Mabilo</td>
                                <td>50%</td>
                            </tr>
                        </tbody>
                    </Table>
                </Form>
            </MainCard>
        </Form>
    </MainCard>
);

export default Tauxabsence;
