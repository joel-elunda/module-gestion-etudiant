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

const Reinscription = () => (
    <MainCard title="Reinscrire etudiant">
        <Form>
            <Table table table-striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom etudiant</th>
                        <th>Filiere</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Randy mukenge</td>
                        <td>Design</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Albert kalubi</td>
                        <td>Genie logiciel</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Daniel Mabilo</td>
                        <td>Reseaux</td>
                    </tr>
                    <td>
                        <center>
                            <Button variant="success">Valider</Button>
                        </center>
                    </td>
                </tbody>
            </Table>
        </Form>
    </MainCard>
);

export default Reinscription;
