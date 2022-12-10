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
        fetch('http://localhost:1000/etudiant')
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
            fetch('http://localhost:1000/etudiant/' + id, {
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
                    <Table table table-striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Matricule</th>
                                <th>Nom</th>
                                <th>Post-Nom</th>
                                <th>Prenom</th>
                                <th>Genre</th>
                                <th>Domicile</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {etudata &&
                                etudata.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.matricule}</td>
                                        <td>{item.nom}</td>
                                        <td>{item.postnom}</td>
                                        <td>{item.prenom}</td>
                                        <td>{item.genre}</td>
                                        <td>{item.domicile}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <a className="btn btn-success mr-2">edit</a>
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
