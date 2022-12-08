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

const Afficheretudiant = () => (
    <MainCard title="voir taux absence etudiant">
        <Form>
            <Table table table-striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Matricule</th>
                        <th>Nom</th>
                        <th>Post-Nom</th>
                        <th>Prenom</th>
                        <th>Promotion</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>16MK122</td>
                        <td>Mukenge</td>
                        <td>Mudibwa</td>
                        <td>Randy</td>
                        <td>Prepa</td>
                        <td>
                            <Button variant="success">Modifier</Button>
                            <Button variant="danger">Supprimer</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Form>
    </MainCard>
);

export default Afficheretudiant;
