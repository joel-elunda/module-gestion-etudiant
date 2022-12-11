// material-ui
// import { Typography } from '@mui/material';

// // project import
// eslint-disable-next-line no-unused-vars
import MainCard from 'components/MainCard';
// import Button from 'react-bootstrap/Button';
// eslint-disable-next-line no-unused-vars
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// eslint-disable-next-line no-unused-vars
import Table from 'react-bootstrap/Table';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
// ==============================|| SAMPLE PAGE ||============================== //

const Afficheretudiant = () => {
    const [etudata, etudatachange] = useState(null);
    useEffect(() => {
        fetch('https://warren.pythonanywhere.com/api/etudiants/')
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                etudatachange(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const Supp = (id) => {
        if (window.confirm('voulez-vous supprimer?')) {
            fetch('https://warren.pythonanywhere.com/api/etudiants/' + id, {
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
    return (
        <MainCard>
            <div>
                <Form>
                    <Table table-striped table-dark>
                        <thead>
                            <tr>
                                <th scope="row">Id</th>
                                <th scope="row">Nom</th>
                                <th scope="row">Post-Nom</th>
                                <th scope="row">Prenom</th>
                                <th scope="row">Genre</th>
                                <th scope="row">Adress</th>
                                <th scope="row">Email</th>
                                <th scope="row">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {etudata &&
                                etudata.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.matricule}</td>
                                        <td>{item.nom}</td>
                                        <td>{item.post_nom}</td>
                                        <td>{item.prenom}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.adresse}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <a className="btn btn-success mr-2">Modifier</a>
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
            </div>
        </MainCard>
    );
};
export default Afficheretudiant;
