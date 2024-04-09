import React from "react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/CardTicket";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Historico = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        {/* <h1 className="text-4xl text-gray-500">Good morning, jotredev!</h1> */}
        <div className="flex items-center gap-2 text-3xl">
          <RiArrowLeftSLine className="hover:cursor-pointer hover:text-white transition-colors" />
          <RiArrowRightSLine className="hover:cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        
        <CardTicket
          ticket="total"
          totalTickets="145,000"
          text="Tickets totales"
        />
        <CardTicket
          ticket="pending"
          totalTickets="5,000"
          text="Tickets pendientes"
        />
        <CardTicket
          ticket="inProcess"
          totalTickets="130,000"
          text="Tickets en proceso"
        />
        <CardTicket
          ticket="close"
          totalTickets="10,000"
          text="Tickets cerrados"
        />
      </div> */}
      <div>
        <h1 className="text-2xl text-gray-500 my-10">Tickets Históricos</h1>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-4 mb-3 p-2 bg-secondary-500 text-titulo-grilla">
          <h5>ID</h5>
          <h5>Tipo Ticket</h5>
          <h5>Descripción</h5>
          <h5>Estado</h5>
          <h5>Fec. Creación</h5>
          <h5>Acciones</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-4 bg-secondary-200 p-2 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">T. Ticket</h5>
            <span>Incidencia</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
              Abierto
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">Fecha</h5>
            <span>28/10/2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-gray-300 p-2 rounded-lg transition-colors">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-white"
              transition
              menuClassName="bg-white p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-gray-400 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-gray-400 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-4 bg-secondary-200 p-2 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">T. Ticket</h5>
            <span>Incidencia</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-blue-500/10 text-blue-500 rounded-lg">
              En proceso
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
            <span>28/10/2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-gray-300 p-2 rounded-lg transition-colors">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-white"
              transition
              menuClassName="bg-white p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-gray-400 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-gray-400 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center mb-4 bg-secondary-200 p-2 rounded-xl">
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">ID</h5>
            <span>#25546</span>
          </div>
          <div>
            <h5 className="md:hidden text-gray-500 font-bold mb-2">T. Ticket</h5>
            <span>Incidencia</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Descripción</h5>
            <p>Mi computadora no prende</p>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Estatus</h5>
            <span className="py-1 px-2 bg-green-500/10 text-green-500 rounded-lg">
              Cerrado
            </span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Fecha</h5>
            <span>28/10/2022</span>
          </div>
          <div>
            <h5 className="md:hidden text-white font-bold mb-2">Acciones</h5>
            <Menu
              menuButton={
                <MenuButton className="flex items-center gap-x-2 bg-gray-300 p-2 rounded-lg transition-colors">
                  Acciones
                </MenuButton>
              }
              align="end"
              arrow
              arrowClassName="bg-white"
              transition
              menuClassName="bg-white p-4"
            >
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-gray-400 flex items-center gap-x-4 p-2 flex-1"
                >
                  Dashboard tickets
                </Link>
              </MenuItem>
              <MenuItem className="p-0 hover:bg-transparent">
                <Link
                  to="/perfil"
                  className="rounded-lg transition-colors text-gray-700 hover:bg-gray-400 flex items-center gap-x-4 p-2 flex-1"
                >
                  Información
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historico;