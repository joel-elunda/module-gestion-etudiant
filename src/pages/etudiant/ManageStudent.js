// // material-ui
// import { Typography } from '@mui/material';

// // project import
// import MainCard from 'components/MainCard';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import React, { useEffect, useState } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

// // ==============================|| SAMPLE PAGE ||============================== //

// const Gereretudiant = () => {
//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         fetchData();
//     }, []);
//     const fetchData = async () => {
//         await fetch('http://127.0.0.1:1000/etudiant')
//             .then((res) => res.json())
//             .then((data) => setUsers(data))
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
//     const onAdd = async (name, email) => {
//         await fetch('http://127.0.0.1:1000/etudiant', {
//             method: 'POST',
//             body: JSON.stringify({
//                 name: name,
//                 email: email
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8'
//             }
//         })
//             .then((res) => {
//                 if (res.status !== 201) {
//                     return;
//                 } else {
//                     return res.json();
//                 }
//             })
//             .then((data) => {
//                 setUsers((users) => [...users, data]);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         onAdd(e.target.name.value, e.target.email.value);
//         e.target.name.value = '';
//         e.target.name.email = '';
//     };

//     return (
//         <MainCard title="Gestion des etudiants">
//             <Form onSubmit={handleOnSubmit}>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Label>Nom</Form.Label>
//                         <Form.Control type="text" name="name" placeholder="Name" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridPassword">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" name="email" placeholder="Email" />
//                     </Form.Group>
//                 </Row>
//                 {/* <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Label>Prenom</Form.Label>
//                         <Form.Control placeholder="jane doe" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Label>Genre</Form.Label>
//                         <Form.Control placeholder="masculin" />
//                     </Form.Group>
//                 </Row> */}
//                 {/* <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Label>Adresse domicile</Form.Label>
//                         <Form.Control placeholder="kalubwe 25" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Label>Adresse Email</Form.Label>
//                         <Form.Control type="text" placeholder="chris.k@gmail.com" />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Label>Date de naissance </Form.Label>
//                         <Form.Control type="date" placeholder="" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridEmail">
//                         <Form.Label>Lieu de naissance</Form.Label>
//                         <Form.Control type="date" placeholder="masculin" />
//                     </Form.Group>
//                 </Row>
//                 <Row className="mb-3">
//                     <Form.Group as={Col} controlId="formGridLogin">
//                         <Form.Label>Login</Form.Label>
//                         <Form.Control type="text" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridRole">
//                         <Form.Label>Role</Form.Label>
//                         <Form.Control type="text" />
//                     </Form.Group>
//                     <Form.Group as={Col} controlId="formGridMotdepasse">
//                         <Form.Label>Mot de passe</Form.Label>
//                         <Form.Control />
//                     </Form.Group>
//                     onClick={() => onAdd()}
                    
//                 </Row> */}
//                 <Button onSubmit={handleOnSubmit} variant="primary" type="submit">
//                     Enregistrer
//                 </Button>
//             </Form>
//         </MainCard>
//     );
// };

// export default Gereretudiant;
