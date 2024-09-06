'use client'; 

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <nav className={styles.nav}>
      <button 
        className={styles.botonnav} 
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#ff7e5f';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'white';
        }}
        onClick={() => handleNavigation('/')}
      >
        Home
      </button>

      <button 
        className={styles.botonnav} 
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#ff7e5f';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'white';
        }}
        onClick={() => handleNavigation('/quienessomos')}
      >
        Quiénes Somos
      </button>

      <button 
        className={styles.botonnav} 
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#ff7e5f';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'white';
        }}
        onClick={() => handleNavigation('/reservas')}
      >
        Reservas
      </button>

      <button 
        className={styles.botonnav} 
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = '#ff7e5f';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'white';
        }}
        onClick={() => handleNavigation('/contacto')}
      >
        Contacto
      </button>
    </nav>
  );
}
