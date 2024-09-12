import Cita from '../Cita/Cita';
import Subtitulo from '../Subtitulo/Subtitulo';

function ListaCitas({ citas, eliminarCita }) {
  return (
    <div className="one-half column"> 
      <Subtitulo texto="Administra tus citas"  style={{ marginTop: '20px', fontSize: '40px' }}/>
      
      {citas.length === 0 ? (
        <p style={{ marginTop: '15px', fontSize: '18px',color:'white',fontWeight:'bolder',marginLeft:'60px' }}>No hay citas disponibles por el momento</p>
      ) : (
        citas.map((cita) => (
          <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        ))
      )}
    </div>
  );
}

export default ListaCitas;

