'use client'
import React, { useState, useEffect } from 'react';
import Titulo from '../components/Titulo/Titulo';
import HacerCita from '../components/HacerCita/HacerCita';
import ListaCitas from '../components/ListaCitas/ListaCitas';

export default function Reservas() {

  const [citas, setCitas] = useState(() => {
    try {
      const citasGuardadas = localStorage.getItem('citas');
      return citasGuardadas ? JSON.parse(citasGuardadas) : [];
    } catch (error) {
      console.error('Error al cargar citas de localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('citas', JSON.stringify(citas));
    } catch (error) {
      console.error('Error al guardar citas en localStorage:', error);
    }
  }, [citas]);

  const agregarCita = (nuevaCita) => {
    const confirmacion = window.confirm('¿Está seguro de que desea agregar esta cita?');
    if (confirmacion) {
      setCitas(prevCitas => [
        ...prevCitas,
        { ...nuevaCita, id: Date.now() } 
      ]);
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
