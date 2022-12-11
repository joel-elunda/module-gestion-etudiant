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
        fetch('https://warren.pythonanywhere.com/api/promotions/')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            });
    };
    const Supp = (id) => {
        if (window.confirm('voulez-vous supprimer?')) {
            fetch('https://warren.pythonanywhere.com/api/promotions/' + id, {
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
    // const [etudata, etudatachange] = useState(null);
    useEffect(() => {
        fetch('https://warren.pythonanywhere.com/api/promotions/')
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
    useEffect(() => {
        fetch('https://warren.pythonanywhere.com/api/promotions/')
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
        await fetch('https://warren.pythonanywhere.com/api/promotions/', {
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
    // const ondelete = async (id) => {
    //     await fetch('http://localhost:2021/promotion/${id}', {
    //         method: 'DELETE'
    //     })
    //         .then((res) => {
    //             if (res.status !== 201) {
    //                 return;
    //             } else {
    //                 setUsers(users.filter((user) => {
    //                         return user.id !== id;
    //                     })
    //                 );
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    const handleOndelete = () => {
        ondelete(id);
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
                                                <button onClick={handleOndelete} className="btn btn-success mr-2">
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
