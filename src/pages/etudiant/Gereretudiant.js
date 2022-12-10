// material-ui
// import { Typography } from '@mui/material';

// // project import
// import MainCard from 'components/MainCard';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ==============================|| SAMPLE PAGE ||============================== //

const Gereretudiant = () => {
    const [id, idchange] = useState('');
    const [nom, nomchange] = useState('');
    const [postnom, postnomchange] = useState('');
    const [prenom, prenomchange] = useState('');
    const [genre, genrechange] = useState('');
    const [domicile, domicilechange] = useState('');
    const [email, emailchange] = useState('');
    const [datenaiss, datenaisschange] = useState('');
    const [lieunaiss, lieunaisschange] = useState('');
    const [role, rolechange] = useState('');
    const [mdp, mdpchange] = useState('');
    const [login, loginchange] = useState('');
    const navigate = useNavigate();
    // const [formdata, setData] = useState({
    //     nom: '',
    //     postnom: '',
    //     prenom: '',
    //     genre: '',
    //     nom: '',
    // });

    const handlesubmit = (e) => {
        e.prevenDefault();
        const etudata = { nom, postnom, prenom, genre, domicile, email, datenaiss, lieunaiss, role, mdp, login };
        console.log(nom, postnom, prenom, genre, email, role, login);
        // fetch('http://localhost:1000/etudiant', {
        //     method: 'POST',
        //     headers: { 'content-type': 'aplication/json' },
        //     body: JSON.stringify(etudata)
        // })
        //     .then((res) => {
        //         alert('enregistrement reussi');
        //         navigate('/');
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
    };

    return (
        <form className="container" onSubmit={(e) => handlesubmit(e)}>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <input
                        value={nom}
                        name="nom"
                        onChange={(e) => nomchange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Nom"
                    />
                </div>
                <div class="col-md-6 mb-4">
                    <input
                        value={postnom}
                        name="postnom"
                        onChange={(e) => postnomchange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Post-nom"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <input
                        value={prenom}
                        name="nom"
                        onChange={(e) => prenomchange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Prenom"
                    />
                </div>
                <div class="col-md-6 mb-4">
                    <input
                        value={genre}
                        name="genre"
                        onChange={(e) => genrechange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Genre"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <input
                        value={domicile}
                        name="domicile"
                        onChange={(e) => domicilechange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Adresse domicile"
                    />
                </div>
                <div class="col-md-6 mb-4">
                    <input
                        value={email}
                        name="email"
                        onChange={(e) => emailchange(e.target.value)}
                        type="email"
                        class="form-control"
                        placeholder="Adresse email"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <input
                        value={datenaiss}
                        name="datenaiss"
                        onChange={(e) => datenaisschange(e.target.value)}
                        type="date"
                        class="form-control"
                        placeholder="Date de naissance"
                    />
                </div>
                <div class="col-md-6 mb-4">
                    <input
                        value={lieunaiss}
                        name="lieunaiss"
                        onChange={(e) => lieunaisschange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Lieu de naissance"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-6">
                    <input
                        value={role}
                        name="role"
                        onChange={(e) => rolechange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Role"
                    />
                </div>
                <div class="col-md-4 mb-4">
                    <input
                        value={mdp}
                        name="mdp"
                        onChange={(e) => mdpchange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Mot de passe"
                    />
                </div>
                <div class="col-md-4 mb-4">
                    <input
                        value={login}
                        name="login"
                        onChange={(e) => loginchange(e.target.value)}
                        type="text"
                        class="form-control"
                        placeholder="Login"
                    />
                </div>
            </div>
            <button class="btn btn-primary" type="submit">
                Enregistrer
            </button>
        </form>
    );
};

export default Gereretudiant;
