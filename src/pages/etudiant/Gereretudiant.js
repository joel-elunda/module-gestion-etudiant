// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// ==============================|| SAMPLE PAGE ||============================== //

const Gereretudiant = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        await fetch('https://warren.pythonanywhere.com/api/etudiants/')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err);
            });
    };
    const onAdd = async (nom, post_nom, prenom, genre, addresse, email, date_naissance, lieu_naissance, login, role, password) => {
        await fetch(' https://warren.pythonanywhere.com/api/etudiants/', {
            method: 'POST',
            body: JSON.stringify({
                nom: nom,
                post_nom: post_nom,
                prenom: prenom,
                genre: genre,
                adress: addresse,
                email: email,
                ate_naissance: date_naissance,
                lieu_naissance: lieu_naissance,
                login: login,
                role: role,
                password: password
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
        onAdd(
            e.target.nom.value,
            e.target.post_nom.value,
            e.target.prenom.value,
            e.target.genre.value,
            e.target.addresse.value,
            e.target.email.value,
            e.target.date_naissance.value,
            e.target.lieu_naissance.value,
            e.target.login.value,
            e.target.role.value,
            e.target.password.value
        );
        e.target.nom.value = '';
        e.target.post_nom.value = '';
        e.target.prenom.value = '';
        e.target.genre.value = '';
        e.target.addresse.value = '';
        e.target.email.value = '';
        e.target.date_naissance.value = '';
        e.target.lieu_naissance.value = '';
        e.target.login.value = '';
        e.target.role.value = '';
        e.target.password.value = '';
    };

    return (
        <MainCard title="Gestion des etudiants">
            <Form onSubmit={handleOnSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridnom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" name="nom" placeholder="Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPostnom">
                        <Form.Label>Postnom</Form.Label>
                        <Form.Control type="text" name="post_nom" placeholder="Email" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridprenom">
                        <Form.Label>Prenom</Form.Label>
                        <Form.Control type="text" name="prenom" placeholder="jane doe" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridgenre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" name="genre" placeholder="masculin" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridadresse">
                        <Form.Label>Adresse domicile</Form.Label>
                        <Form.Control type="text" name="addresse" placeholder="kalubwe 25" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Adresse Email</Form.Label>
                        <Form.Control type="text" name="email" placeholder="chris.k@gmail.com" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGriddatenaissance">
                        <Form.Label>Date de naissance </Form.Label>
                        <Form.Control type="date" name="date_naissance" placeholder="" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGrilieunaiss">
                        <Form.Label>Lieu de naissance</Form.Label>
                        <Form.Control type="text" name="lieu_naissance" placeholder="masculin" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text" name="login" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" name="role" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridMotdepasse">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" name="password" />
                    </Form.Group>
                </Row>
                <Button onSubmit={handleOnSubmit} variant="primary" type="submit">
                    Enregistrer
                </Button>
            </Form>
        </MainCard>
    );
};

export default Gereretudiant;
