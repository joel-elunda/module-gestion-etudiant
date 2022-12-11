// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// ==============================|| SAMPLE PAGE ||============================== //

const GererPromotion = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        fetch('http://127.0.0.1:2000/promotion')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            });
    };

    const Supp = (id) => {
        if (window.confirm('voulez-vous supprimer?')) {
            fetch(`http://127.0.0.1:2000/promotion/${id}`, {
                method: 'DELETE'
            })
                .then((res) => {
                    alert('supprimer avec success');
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    const [prom, promdatachange] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:2000/promotion')
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                promdatachange(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const onAdd = async (nom, description) => {
        await fetch('http://127.0.0.1:2000/promotion', {
            method: 'POST',
            body: JSON.stringify({
                nom: nom,
                description: description
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then((res) => {
                if (res.status !== 201) {
                    return;
                } else {
                    return res.json();
                }
            })
            .then((data) => {
                setUsers((users) => [...users, data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAdd(e.target.nom.value, e.target.description.value);
        e.target.nom.value = '';
        e.target.description.value = '';
    };

    return (
        <MainCard title="Gestion promotion">
            <Form onSubmit={handleOnSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nom filiere</Form.Label>
                        <Form.Control type="text" name="nom" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="description" />
                    </Form.Group>
                </Row>
                <Button onSubmit={handleOnSubmit} variant="primary" type="submit">
                    Enregistrer
                </Button>
                <MainCard>
                    <Form>
                        <Table table table-striped>
                            <thead>
                                <tr>
                                    <th scope="row">Id</th>
                                    <th scope="row">Nom promotion</th>
                                    <th scope="row">Description</th>
                                    <th scope="row">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {prom &&
                                    prom.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nom}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <button onClick={handleOnSubmit} className="btn btn-success mr-2">
                                                    Modifier
                                                </button>
                                                {/* <a onClick={() => Supp(item.id)} className="btn btn-success">
                                                    Supprimer
                                                </a> */}
                                                <Link onClick={() => Supp(item.id)} className="btn btn-danger">
                                                    Supprimer
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </Form>
                </MainCard>
            </Form>
        </MainCard>
    );
};

export default GererPromotion;
