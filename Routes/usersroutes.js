const express = require('express');
const router = express.Router();

const usuarios = [
    { nombre: "SAMUEL", apellido: "ACERO GARCIA", correo: "samuelacga@unisabana.edu.co" },
    { nombre: "DAREK", apellido: "ALJURI MARTINEZ", correo: "darekalma@unisabana.edu.co" },
    { nombre: "JUAN FELIPE", apellido: "CEPEDA URIBE", correo: "juanceur@unisabana.edu.co" },
    { nombre: "ANA MARIA", apellido: "CHAVES PEREZ", correo: "anachpe@unisabana.edu.co" },
    { nombre: "CARLOS DAVID", apellido: "CRUZ PAVAS", correo: "carloscrpa@unisabana.edu.co" },
    { nombre: "DIEGO NORBERTO", apellido: "DIAZ ALGARIN", correo: "diegodial@unisabana.edu.co" },
    { nombre: "JORGE ESTEBAN", apellido: "DIAZ BERNAL", correo: "jorgedibe@unisabana.edu.co" },
    { nombre: "DAVID ESTEBAN", apellido: "DIAZ VARGAS", correo: "daviddiava@unisabana.edu.co" },
    { nombre: "JUAN JOSE", apellido: "FORERO PEÑA", correo: "juanfope@unisabana.edu.co" },
    { nombre: "SANTIAGO", apellido: "GUTIERREZ DE PIÑERES BARBOSA", correo: "santiagoguba@unisabana.edu.co" },
    { nombre: "SAMUEL ESTEBAN", apellido: "LOPEZ HUERTAS", correo: "samuellohu@unisabana.edu.co" },
    { nombre: "MICHAEL STEVEN", apellido: "MEDINA FERNANDEZ", correo: "michaelmefe@unisabana.edu.co" },
    { nombre: "KATHERIN JULIANA", apellido: "MORENO CARVAJAL", correo: "katherinmorca@unisabana.edu.co" },
    { nombre: "JUAN PABLO", apellido: "MORENO PATARROYO", correo: "juanmorpat@unisabana.edu.co" },
    { nombre: "NICOLAS ESTEBAN", apellido: "MUÑOZ SENDOYA", correo: "nicolasmuse@unisabana.edu.co" },
    { nombre: "SANTIAGO", apellido: "NAVARRO CUY", correo: "santiagonacu@unisabana.edu.co" },
    { nombre: "JUAN PABLO", apellido: "PARRADO MORALES", correo: "juanparmor@unisabana.edu.co" },
    { nombre: "DANIEL SANTIAGO", apellido: "RAMIREZ CHINCHILLA", correo: "danielrach@unisabana.edu.co" },
    { nombre: "JUAN PABLO", apellido: "RESTREPO COCA", correo: "juanresco@unisabana.edu.co" },
    { nombre: "GABRIELA", apellido: "REYES GONZALEZ", correo: "gabrielarego@unisabana.edu.co" },
    { nombre: "JUAN JOSE", apellido: "RODRIGUEZ FALLA", correo: "juanrodfa@unisabana.edu.co" },
    { nombre: "VALENTINA", apellido: "RUIZ TORRES", correo: "valentinaruito@unisabana.edu.co" },
    { nombre: "MARIANA", apellido: "SALAS GUTIERREZ", correo: "marianasalgu@unisabana.edu.co" },
    { nombre: "SEBASTIAN", apellido: "SANCHEZ SANDOVAL", correo: "sebastiansasa@unisabana.edu.co" },
    { nombre: "JOSUE DAVID", apellido: "SARMIENTO GUARNIZO", correo: "josuesagu@unisabana.edu.co" },
    { nombre: "SANTIAGO", apellido: "SOLER PRADO", correo: "santiagosopr@unisabana.edu.co" },
    { nombre: "MARIA FERNANDA", apellido: "TAMAYO LOPEZ", correo: "mariatalo@unisabana.edu.co" },
    { nombre: "DEIVID NICOLAS", apellido: "URREA LARA", correo: "deividurla@unisabana.edu.co" },
    { nombre: "ANDRÉS", apellido: "AZCONA", correo: "andresazgo@unisabana.edu.co" }
];


router.post('/', (req, res) => {
    const { nombre, apellido, correo } = req.body;
    let { ciudad, pais } = req.body;

    
    if (!nombre || !apellido || !correo) {
        return res.status(400).json({ error: 'Los campos nombre, apellido y correo electrónico son obligatorios' });
    }

    
    ciudad = ciudad || 'Bogotá';
    pais = pais || 'Colombia';

    
    const nuevoUsuario = {
        nombre,
        apellido,
        correo,
        ciudad,
        pais
    };

    
    usuarios.push(nuevoUsuario);


    res.status(201).json(nuevoUsuario);
});


router.get('/:count?', (req, res) => {
    let count = parseInt(req.params.count) || usuarios.length; 
    const sort = req.query.sort || 'ASC'; 

    let sortedUsers = usuarios.slice(); 

    
    if (sort.toUpperCase() === 'ASC') {
        sortedUsers.sort((a, b) => a.apellido.localeCompare(b.apellido));
    } else if (sort.toUpperCase() === 'DESC') {
        sortedUsers.sort((a, b) => b.apellido.localeCompare(a.apellido));
    } else {
        return res.status(400).send('El parámetro sort debe ser "ASC" o "DESC"');
    }

    
    sortedUsers = sortedUsers.slice(0, count);

    
    res.json(sortedUsers.map(user => ({ nombre: user.nombre, apellido: user.apellido })));
});



module.exports = router;
