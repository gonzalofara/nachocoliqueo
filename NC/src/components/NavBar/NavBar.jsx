import React, { useState } from "react";

const NavBar = () => {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };
  return (
    <header>
      <nav
        className="
     flex flex-wrap
     items-center
     justify-between
     w-full
     py-4
     md:py-0
     px-4
     text-lg text-gray-700
     shadow-sm
     dark:border-b dark:border-gray-800 dark:shadow-none dark:bg-gray-900
   "
      >
        <div>
          <a href="/general" className="flex items-center content-center gap-1">
            <span className="text-gray-900 text-base font-extrabold dark:text-gray-200">
              Acreditaciones
            </span>
          </a>
        </div>

        <div className="flex items-center gap-6 md:hidden block">
          <div
            className="cursor-pointer flex items-center"
            onClick={() => history.back()}
          >
            <p className="text-sm text-gray-400 ">Volver</p>
          </div>
          <div className="cursor-pointer" onClick={handleHidden}></div>
        </div>

        <div className="w-full md:hidden" id="menu" hidden={hidden}>
          <ul
            className="
         pt-4
         text-base text-gray-700
         md:flex
         md:justify-between 
         md:pt-0 md:items-center"
          >
            <li>
              <a
                className="block text-gray-500 hover:text-teal-500"
                href="/eventos"
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block text-gray-500 hover:text-teal-500"
                href="/archivo"
              >
                Archivo
              </a>
            </li>

            <li className="">
              <p className="md:px-2 md:py-1 md:rounded py-2 block cursor-pointer bg-teal-600 hover:bg-teal-500 text-gray-100">
                Cerrar sesión
              </p>
            </li>
          </ul>
        </div>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
         pt-4
         text-base text-gray-700
         md:flex
         md:justify-between 
         md:pt-0 md:items-center"
          >
            <li>
              <a
                className="block text-gray-500 hover:text-teal-500"
                href="/eventos"
              >
                Eventos
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block text-gray-500 hover:text-teal-500"
                href="/archivo"
              >
                Archivo
              </a>
            </li>

            <li className="">
              <p className="md:px-2 md:py-1 md:rounded py-2 block cursor-pointer bg-teal-600 hover:bg-teal-500 text-gray-100">
                Cerrar sesión
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
