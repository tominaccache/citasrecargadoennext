import { useState } from 'react';
import styles from './HacerCita.module.css'; 
function HacerCita({ agregarCita }) {
  const [nuevaCita, setNuevaCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const actualizarCampo = (evento) => {
    const nombreCampo = evento.target.name;
    const valorCampo = evento.target.value;

    setNuevaCita({
      ...nuevaCita,
      [nombreCampo]: valorCampo,
    });
  };

  const enviarFormulario = (evento) => {
    evento.preventDefault();

    if (
      !nuevaCita.mascota.trim() ||
      !nuevaCita.propietario.trim() ||
      !nuevaCita.fecha.trim() ||
      !nuevaCita.hora.trim() ||
      !nuevaCita.sintomas.trim()
    ) {
      alert('Por favor, complete todos los campos');
      return;
    }

    agregarCita(nuevaCita);
    setNuevaCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  return (
    <div className="one-half column" style={{ width: '30%', marginLeft: '10%' }}>
      <h2>Crear mi cita</h2>
      <form className={styles.form} onSubmit={enviarFormulario}>
        <label className={styles.label}>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className={`${styles.input} u-full-width`}
          value={nuevaCita.mascota}
          onChange={actualizarCampo}
        />
        <label className={styles.label}>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className={`${styles.input} u-full-width`}
          value={nuevaCita.propietario}
          onChange={actualizarCampo}
        />
        <label className={styles.label}>Fecha</label>
        <input
          type="date"
          name="fecha"
          className={`${styles.input} u-full-width`}
          value={nuevaCita.fecha}
          onChange={actualizarCampo}
        />
        <label className={styles.label}>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          value={nuevaCita.hora}
          onChange={actualizarCampo}
        />
        <label className={styles.label}>Síntomas</label>
        <textarea
          name="sintomas"
          className={`${styles.input} u-full-width`}
          value={nuevaCita.sintomas}
          onChange={actualizarCampo}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default HacerCita;
