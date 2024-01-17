import React from 'react'
import {useState,useEffect} from 'react'
import Error from './Error';
function Formulario({pacientes,setPacientes,paciente,setPaciente}) {

  const [nombre,setNombre]=useState("");

  const [propietario,setPropietario]=useState("");
  const [email,setEmail]=useState("");
  const [fecha,setFecha]=useState("");
  const [sintomas,setSintomas]=useState("");

  const [error,setError]=useState(false);


 useEffect(() => {
  if((Object.keys(paciente).length>0))
  {
    setNombre(paciente.nombre)
    setPropietario(paciente.propietario)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
  }
  else{
    console.log("no hay algo");
  }
 },[paciente]);



  const generarId=()=>
  {
const random=Math.random().toString(36).substring(2);
const fecha=Date.now().toString(36);

return fecha+random;
  }


const handleSubmit=(e)=>
{
  e.preventDefault();

  //validacion del formulario

  if([nombre,propietario,email,fecha,sintomas].includes("")
  )
  {
    console.log("hay almenos un campo vacio");
    setError(true);
    return;
  }
  setError(false);

  //objeto de paciente

  const objetoPaciente=
  {
    nombre,
    propietario,
    email,
    fecha,
    sintomas,
    id:generarId(),
  }
  
  if(paciente.id)
  {
    //editando el registro
    objetoPaciente.id=paciente.id;
    const pacientesActualizados=pacientes.map(pacientesState =>
      {
        pacientesState.id=== paciente.id ? objetoPaciente.id : pacienteState
      })

      setPaciente(pacientesActualizados);
      setPaciente({});
  }
  else
  {
    //nuevo registro

    objetoPaciente.id=generarId();
    setPacientes([...pacientes,objetoPaciente]);
  }

  

  //reiniciar form
  setNombre("");
  setPropietario("");
  setEmail("");
  setFecha("");
  setSintomas("");
}

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 '>
      <h2 className='font-black text-3xl text-center'>Formulario</h2>
   <p className='text-lg mt-10 text-center mb-10'>Añade Pacientes y{ } <span className='text-indigo-600 font-bold '> Administralos</span></p>
   <form
   onSubmit={handleSubmit}
   action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
   
{error && <Error>
  <p>Todos los campos son obligatorios</p></Error>
    
   
    
    } 
    <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold ' htmlFor="mascota">Nombre Mascota:{nombre}</label>
        <input className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md' type="text" name="" id="mascota"
        placeholder='Nombre de la mascota' 
        value={nombre} 
        onChange={(e)=>setNombre(e.target.value)}
        />
    </div>
    <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold ' htmlFor="Propietario">Nombre Propietario</label>
        <input className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md' type="text" name="" id="Propietario"
        placeholder='Nombre de la Propietario'
        value={propietario} 
        onChange={(e)=>setPropietario(e.target.value)} />
    </div>
    <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold ' htmlFor="Correo"> Correo</label>
        <input className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md' type="email" name="" id="Correo"
        placeholder='Correo'
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold ' htmlFor="Alta">Alta</label>
        <input className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md' type="date" name="" id="Fecha"
        placeholder='Alta' 
        value={fecha} 
        onChange={(e)=>setFecha(e.target.value)}
        />
    </div>
    <div className='mb-5'>
        <label className='block text-gray-700 uppercase font-bold ' htmlFor="Sintomas">Sintomas</label>
        <textarea  className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md' placeholder='Describe los sintomas' name="" id="sintomas" cols="30" rows="10"
        value={sintomas} 
        onChange={(e)=>setSintomas(e.target.value)}
        
        ></textarea>
    </div>
    <input type="submit" value={paciente.id?'Editar paciente':"agregar paciente"} className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
    
    />
   </form>
    </div>
  )
}

export default Formulario
