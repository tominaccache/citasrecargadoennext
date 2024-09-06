import React from 'react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className='container'  style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', borderRadius: '8px' }} >
      <h2 className={styles.titulo}>¡Bienvenido a Veteriland!</h2>
      <h3 className={styles.subtituloHome}>
        ¡Nos encanta darte la bienvenida a Veteriland! Aquí, no solo encontrarás una clínica veterinaria, sino un equipo comprometido y apasionado por el bienestar de tus fieles compañeros. Cada día trabajamos con dedicación para asegurarnos de que cada mascota reciba la atención que merece, porque entendemos que son parte fundamental de tu familia. Desde chequeos rutinarios hasta tratamientos especializados, estamos preparados para ofrecer el mejor cuidado posible. En Veteriland, no solo tratamos a las mascotas, sino que las acompañamos en cada etapa de su vida para que puedan vivir felices y saludables.
      </h3>
      <p className={styles.pregunta2Home}>¿Por Qué Elegirnos?</p>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <p className={styles.textosHome}>
          <span className={styles.spanHome}> - Expertos en Cuidado Animal:</span> <br></br> Nuestro equipo de veterinarios altamente calificados y amantes de los animales está listo para ofrecer atención de calidad a tus peludos, escamosos o emplumados
        </p>
        <p className={styles.textosHome}>
          <span className={styles.spanHome}> - Servicios Integrales:</span><br></br> Desde consultas de rutina hasta tratamientos especializados, ofrecemos una amplia gama de servicios para asegurarnos de que tu mascota esté sana y feliz.
        </p>
        <p className={styles.textosHome}>
          <span className={styles.spanHome}>- Ambiente Acogedor:</span> <br></br> En nuestra clínica, cada mascota es tratada como parte de nuestra familia. Nos esforzamos por crear un ambiente cómodo y seguro para que tanto tú como tu mascota se sientan a gusto. ¡Agenda Tu Cita Hoy!
        </p>
      </div>
      <p className={styles.textofinalHome}>¡Tu viaje hacia la salud y felicidad de tu mascota comienza aquí!</p>
    </div>
  );
}
