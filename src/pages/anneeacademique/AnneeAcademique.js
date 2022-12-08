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

const AnneeAcademique = () => (
    <MainCard title="Creation annee academique">
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date debut annee</Form.Label>
                    <Form.Control type="date" placeholder="Entrer nom" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Date fin annee</Form.Label>
                    <Form.Control type="date" placeholder="jhon doe" />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Creer
            </Button>
        </Form>
    </MainCard>
);

export default AnneeAcademique;
