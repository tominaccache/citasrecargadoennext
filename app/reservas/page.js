'use client'
import React, { useState } from 'react';
import Titulo from '../components/Titulo/Titulo';
import HacerCita from '../components/HacerCita/HacerCita';
import ListaCitas from '../components/ListaCitas/ListaCitas';

export default function Reservas() {
  const [citas, setCitas] = useState([
    { id: 1, mascota: 'Nina', propietario: 'Martin', fecha: '2021-08-05', hora: '08:20', sintomas: 'Le duele la pierna' },
    { id: 2, mascota: 'Sifon', propietario: 'Flecha', fecha: '2023-08-05', hora: '09:24', sintomas: 'Duerme mucho' },
    { id: 3, mascota: 'Floki', propietario: 'Ari', fecha: '2023-08-05', hora: '16:15', sintomas: 'No está comiendo' }
  ]);

  const agregarCita = (nuevaCita) => {
    const confirmacion = window.confirm('¿Está seguro de que desea agregar esta cita?');
    if (confirmacion) {
      setCitas([...citas, nuevaCita]);
    }
  };

  const eliminarCita = (id) => {
    const confirmacion = window.confirm('¿Está seguro de que desea eliminar esta cita?');
    if (confirmacion) {
      setCitas(citas.filter(cita => cita.id !== id));
    }
  };

  return (
    <div className="container">
      <Titulo />
      <HacerCita agregarCita={agregarCita} />
      <ListaCitas citas={citas} eliminarCita={eliminarCita} />
    </div>
  );
}
