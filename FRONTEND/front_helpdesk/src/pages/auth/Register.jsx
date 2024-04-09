import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {postClientFullService} from '../../services/Usuario.services';
// Icons
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";


export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [client, setClient] = useState({
    username: "",
    password: "",
    first_name:"",
    last_name:"",
    email:"",
    nombres:"",
    apellidos:"",
    id_empresa:"",
    direccion:"",
    id_ubigeo:"",
    celular:"",
    imagen:"",
    habilitado:"",
    tipo_usuario:""
  });

  const handleInputChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    postClientFullService(client).then((data) => {
      if (!data) {
        alert("hubo un error");
        return;
      }
      navigate("/login");
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="bg-secondary-200 p-8 rounded-xl shadow-2xl w-auto "> {/* lg:w-[450px] */}
          <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-gray-900 mb-8">
            Crear <span className="text-primary">cuenta</span>
          </h1>
          <form className="mb-8" onSubmit={handleSubmit}>
            {/* <button className="flex items-center justify-center font-bold py-3 px-4 gap-4 bg-secondary-400 w-full rounded-full mb-8 text-gray-900">
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                className="w-4 h-4"
              />
              Registrate con google
            </button> */}
            <div className="relative mb-4">
              <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="text"
                className="py-3 pl-8 pr-4 bg-secondary-300 w-full outline-none rounded-lg"
                placeholder="Nombre(s)"
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-4">
              <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="text"
                className="py-3 pl-8 pr-4 bg-secondary-300 w-full outline-none rounded-lg"
                placeholder="Apellidos"
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-4">
              <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="email"
                className="py-3 pl-8 pr-4 bg-secondary-300 w-full outline-none rounded-lg"
                placeholder="Correo electrónico"
                onChange={handleInputChange}
              />
            </div>
            <div className="relative mb-4">
              <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type={showPassword ? "text" : "password"}
                className="py-3 px-8 bg-secondary-300 w-full outline-none rounded-lg"
                placeholder="Contraseña"
                onChange={handleInputChange}
              />
              {showPassword ? (
                <RiEyeOffLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                />
              ) : (
                <RiEyeLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                />
              )}
            </div>
            <div className="relative mb-8">
              <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type={showPassword ? "text" : "password"}
                className="py-3 px-8 bg-secondary-300 w-full outline-none rounded-lg "
                placeholder="Confirmar contraseña"
                onChange={handleInputChange}
              />
              {showPassword ? (
                <RiEyeOffLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                />
              ) : (
                <RiEyeLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                />
              )}
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg">
                Registrarme
              </button>
            </div>
          </form>
          <span className="flex items-center justify-center gap-2">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Ingresa
            </Link>
          </span>
        </div>
        <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg">
        <img
          src="https://img.freepik.com/vector-gratis/ilustracion-concepto-inicio-sesion_114360-739.jpg"
          className="w-full object-cover"
        />
      </div>
      </div>
      
  </>
  );
};

export default Register;
