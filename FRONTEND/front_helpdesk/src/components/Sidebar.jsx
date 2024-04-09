import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiBarChart2Line,
  RiEarthLine,
  RiCustomerService2Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiQuestionFill,
  RiAddLine,
  RiFolderOpenFill,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import { FaHouseChimney } from "react-icons/fa6";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-200 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-gray-900 mb-10">
            Admin<span className="text-gray-900 text-4xl">.</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-400 hover:text-white transition-colors"
              >
                <FaHouseChimney  className="text-primary size-5" /> Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/tickets"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-400 hover:text-white transition-colors"
              >
                <RiAddLine className="text-primary size-6" /> Nuevo Ticket
              </Link>
            </li>
            <li>
              <Link
                to="/historico"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-400 hover:text-white transition-colors"
              >
                <RiFolderOpenFill className="text-primary size-6" /> Histórico de Tickets
              </Link>
            </li>
            <li>
              <Link
                to="/tickets"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-400 hover:text-white transition-colors"
              >
                <RiQuestionFill  className="text-primary size-6" /> Ayuda
              </Link>
            </li>
            {/* <li>
              <button
                onClick={() => setShowSubmenu(!showSubmenu)}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-400 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-primary" /> Redes sociales
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubmenu && "rotate-90"
                  } transition-all`}
                />
              </button>
              <ul
                className={` ${
                  showSubmenu ? "h-[130px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-gray-100 hover:text-white 
                    hover:bg-gray-400
                    transition-colors"
                  >
                    Post red social
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-gray-100 hover:text-white 
                    hover:bg-gray-400
                    transition-colors"
                  >
                    Estadisticas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-600 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-gray-100 hover:text-white 
                    hover:bg-gray-400 transition-colors"
                  >
                    Perfiles
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* <li>
              <Link
                to="/tickets"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-400 hover:text-white transition-colors"
              >
                <RiCustomerService2Line className="text-primary" /> Soporte
                técnico
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:hover:bg-gray-400 hover:text-white transition-colors"
              >
                <RiCalendarTodoLine className="text-primary" /> Calendario
              </Link>
            </li> */}
          </ul>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-gray-400 hover:text-white transition-colors"
          >
            <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
