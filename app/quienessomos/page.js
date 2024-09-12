import React from 'react';
import styles from './page.module.css';
{/* import ImagenConejo from './../Public/imagenconejo.png';
import Image from 'next/image';  */} 
import Img from "../public/imagenconejo.png";
import Image from 'next/image';


export default function QuienesSomos() {
  return (
    <div className="container">
      <h2 className={styles.titulo}>Quiénes Somos</h2>
      <p className={styles.textoquienessomos}>Somos una empresa líder en la gestión de citas para mascotas, dedicada a facilitar el cuidado y bienestar de tus compañeros peludos. Entendemos que las mascotas son parte esencial de tu familia, y por eso nos enfocamos en ofrecer una plataforma intuitiva y eficiente para gestionar todas sus necesidades de salud y cuidado. Nuestro equipo, compuesto por profesionales con experiencia en el ámbito veterinario y tecnológico, trabaja incansablemente para que puedas programar citas con facilidad, desde chequeos regulares hasta tratamientos especializados. Nos enorgullece ser una solución confiable que te permite conectar con los mejores veterinarios, asegurando que tu mascota reciba la atención adecuada en el momento justo. En cada paso, nos guiamos por la pasión y el compromiso de mejorar la calidad de vida de los animales y facilitar la vida de sus dueños. Ya sea que necesites una consulta de rutina, una intervención quirúrgica o simplemente un control preventivo, estamos aquí para hacerlo más simple, rápido y eficiente. ¡Tu mascota es nuestra prioridad!</p>
      <p className={styles.textoquienessomos}>Tomás Naccache destaca como nuestro mejor veterinario por su pasión y experiencia en el cuidado animal. Su enfoque personalizado y su capacidad para diagnosticar y tratar con precisión han generado confianza en cada cliente. Además, su dedicación a mantenerse actualizado en las últimas técnicas médicas lo convierte en un referente en la clínica.</p>
      <div>
        
        <p className={styles.textoquienessomos2}>Nuestro mejor veterinario:</p>
        <Image
          src={Img}
          width={500}
          height={500}
          alt="Imagen del mejor veterinario"
          style={{ width: '50%',marginLeft:'25%',marginRigth:'25%'}} 
        />
      </div>   
    </div>
  );
}

