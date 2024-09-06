import styles from './page.module.css';

import React from 'react';

export default function Contacto() {
  return (
    <div className='container'  style={{ maxWidth: '800px', margin: '0px auto', padding: '20px', borderRadius: '8px' }}>
      <h2 className={styles.titulo}>Contacto</h2>
      <p className={styles.textoquienessomos}>
      En esta sección, puedes ponerte en contacto con nosotros completando el formulario a continuación. Solo es necesario proporcionar tu nombre, correo electrónico y mensaje, y nos aseguraremos de responder lo antes posible. ¡Estamos aquí para ayudarte!
      </p>
      <form className={styles.formContacto}>
        <label className={styles.label}>Nombre *</label>
        <input  type="text" name="nombre" className="u-full-width" required />

        <label className={styles.label}>Email *</label>
        <input type="email" name="email" className="u-full-width" required />

        <label className={styles.label}>Mensaje *</label>
        <textarea name="mensaje" className="u-full-width" required></textarea>

        <button type="submit" className="u-full-width button-primary">Enviar</button>
      </form>
    </div>
  );
}

