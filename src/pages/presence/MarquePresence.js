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

const Presence = () => (
    <MainCard title="Gestion de presence">
        <Form>
            <Table table table-striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom cours</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Conception web</td>
                        <td>
                            <Button variant="success">Marquer presence</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Form>
    </MainCard>
);

export default Presence;
