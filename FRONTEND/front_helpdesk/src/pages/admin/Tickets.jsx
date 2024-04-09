import React from "react";
import { Link } from "react-router-dom";
import {
  RiFilter2Fill,
  RiSearch2Line,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiTicketLine,
  RiArrowLeftSLine,
  RiFileTextLine,
  RiDiscussLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { Tab, Disclosure, Transition } from "@headlessui/react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const Tickets = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 mb-10">
        <div>
          <h1 className="font-bold text-gray-400 text-xl">Datos Generales</h1>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>-</span>
            <span>Support Center</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-secondary-100/50 hover:bg-secondary-100 flex items-center gap-2 py-2 px-4 rounded-lg hover:text-primary transition-colors">
            <RiFilter2Fill /> Filter
          </button>
          <button className="bg-primary/90 text-black hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
            Create
          </button>
        </div>
      </div>
      {/* Portada */}
      <div className="bg-secondary-100 p-8 rounded-tl-lg rounded-tr-lg grid grid-cols-1 md:grid-cols-1 items-center">
        <div className="p-8">
          <h1 className="text-3xl mb-8">Registro de Nuevo Ticket</h1>
          <form>
            <div className="space-y-12">
              <div className="border-b  border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="titulo"
                      className="block text-sm font-medium leading-6 text-gray-900">
                      Titulo (*)
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                        type="text"
                        name="titulo"
                        id="titulo"
                        autoComplete="titulo"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="descripcion"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Descripción
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 col-span-full">
                    <div className="rounded-tl-lg rounded-tr-lg items-center">
                      <label
                        htmlFor="tipo_ticket"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Tipo de Ticket
                      </label>
                      <div className="mt-2">
                        <select
                          id="tipo_ticket"
                          name="tipo_ticket"
                          autoComplete="tipo_ticket-name"
                          className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                    <div className="rounded-tl-lg rounded-tr-lg items-center">
                      <label
                        htmlFor="tipo_ticket"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Categoría
                      </label>
                      <div className="mt-2">
                        <select
                          id="Categoria"
                          name="Categoria"
                          autoComplete="Categoria-name"
                          className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                    <div className="rounded-tl-lg rounded-tr-lg items-center">
                      <label
                        htmlFor="Subcategoria"
                        className="block text-sm font-medium leading-6 text-gray-900">
                        Subcategoría
                      </label>
                      <div className="mt-2">
                        <select
                          id="Subcategoria"
                          name="Subcategoria"
                          autoComplete="Subcategoria-name"
                          className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Cover photo
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tab */}
      <Tab.Group>
        <div className="bg-secondary-100 p-8 rounded-bl-lg rounded-br-lg">
          <Tab.List className="flex flex-col md:flex-row md:items-center md:justify-between gap-x-2 gap-y-6 bg-secondary-900/50 py-3 px-4 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-titulo-grilla transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-titulo-grilla ui-not-selected:text-titulo-grilla">
                Overview
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-titulo-grilla transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-titulo-grilla ui-not-selected:text-titulo-grilla">
                Tickets
              </Tab>
              <Tab className="py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-titulo-grilla transition-colors outline-none ui-selected:bg-secondary-900 ui-selected:text-titulo-grilla ui-not-selected:text-titulo-grilla">
                FAQ
              </Tab>
            </div>
            <div className="flex justify-center">
              <button className="bg-primary/90 text-titulo-grilla hover:bg-primary flex items-center gap-2 py-2 px-4 rounded-lg transition-colors">
                Create
              </button>
            </div>
          </Tab.List>
        </div>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">
                    Popular tickets
                  </h1>
                  <Link to="/" className="flex items-center gap-2 text-primary">
                    Support <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      What admin theme does?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How to install on a local machine?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Laravel
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How Extended Licese works?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Next JS 13
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How can I import Google fonts?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Vue JS
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
              <div className="bg-secondary-100 p-8 rounded-lg">
                {/* Title card */}
                <div className="flex items-center justify-between mb-8">
                  <h1 className="text-white text-xl md:text-2xl">FAQ</h1>
                  <Link to="/" className="flex items-center gap-2 text-primary">
                    All FAQ <RiArrowRightLine />
                  </Link>
                </div>
                {/* Content card */}
                <div>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      What admin theme does?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How to install on a local machine?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Laravel
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How Extended Licese works?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Next JS 13
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                  <Disclosure>
                    <Disclosure.Button className="py-2 text-sm md:text-lg flex md:items-center justify-between gap-4">
                      <RiArrowRightSLine className="text-sm md:text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                      How can I import Google fonts?{" "}
                      <span className="hidden lg:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        Vue JS
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                        By Keenthemes to save tons and more to time money
                        projects are listed and outstanding{" "}
                        <Link to="/" className="text-primary">
                          Learn more
                        </Link>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-secondary-100 p-8 rounded-lg grid grid-cols-1 xl:grid-cols-4 gap-8">
              {/* Section 1 */}
              <div className="md:col-span-3">
                <form>
                  <div className="relative">
                    <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-4" />
                    <input
                      type="text"
                      className="bg-secondary-900 outline-none py-2 pr-4 pl-10 rounded-lg placeholder:text-gray-500 w-full"
                      placeholder="Search for anything"
                    />
                  </div>
                </form>
                <h1 className="text-white text-2xl my-8">Public tickets</h1>
                {/* Tickets */}
                <div>
                  {/* Ticket */}
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-blue-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-green-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex flex-wrap items-center gap-4">
                      <RiTicketLine className="md:text-2xl text-yellow-500" />
                      <Link
                        to="/"
                        className="md:text-xl hover:text-blue-500 transition-colors"
                      >
                        How to use Netronic with Django Framework?
                      </Link>
                      <span className="hidden md:block bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                        React
                      </span>
                    </div>
                    <div className="md:px-10">
                      <p className="text-gray-500">
                        By Keenthemes to save tons and more to time money
                        projects are listed amazing outstanding projects are
                        listed
                      </p>
                    </div>
                  </div>
                </div>
                {/* Pagination */}
                <div className="p-8 flex justify-center">
                  <nav className="flex items-center gap-2">
                    <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                      <RiArrowLeftSLine />
                    </button>
                    <div className="flex items-center">
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        1
                      </button>
                      <button className="py-2 px-4 bg-secondary-900 rounded-lg transition-colors text-gray-100">
                        2
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        3
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        4
                      </button>
                      <button className="py-2 px-4 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                        5
                      </button>
                    </div>
                    <button className="p-2 hover:bg-secondary-900 rounded-lg transition-colors hover:text-gray-100">
                      <RiArrowRightSLine />
                    </button>
                  </nav>
                </div>
              </div>
              {/* Section 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-8">
                <div className="bg-secondary-900 p-8 rounded-lg xl:mb-8">
                  <h1 className="text-2xl text-white mb-8">More channels</h1>
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiFileTextLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">Project Briefing</h5>
                        <p className="text-xs">
                          Check out our{" "}
                          <Link to="/" className="text-primary">
                            Support Policy
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiDiscussLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">More to discuss?</h5>
                        <p className="text-xs">
                          Check out our{" "}
                          <Link to="/" className="text-primary">
                            jorge@gmail.com
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiTwitterLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">Latest News</h5>
                        <p className="text-xs">
                          Follow us at{" "}
                          <Link to="/" className="text-primary">
                            KeenThemes Twitter
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-8">
                      <RiGithubLine className="text-4xl text-primary" />
                      <div className="flex flex-col gap-1">
                        <h5 className="text-white">Github Access</h5>
                        <p className="text-xs">
                          Our github repo{" "}
                          <Link to="/" className="text-primary">
                            KeenThemes Github
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary-900 p-8 rounded-lg">
                  <h1 className="text-2xl text-white mb-8">Documentation</h1>
                  <ul className="flex flex-col gap-y-4">
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Angular Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> React Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Vue Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Nich Admin
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <RiArrowRightSLine /> Dashboard Admin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="bg-secondary-100 p-8 rounded-lg">
              <div className="mb-10">
                <h1 className="text-2xl text-white mb-2">How does it work?</h1>
                <p className="text-gray-500">
                  First, a disclaimer – the entire process of writing a blog
                  post often takes more than a couple of hours, even if you can
                  type eighty words as per minute and your writing skills are
                  sharp.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Section 1 */}
                <div>
                  <h1 className="text-xl text-white mb-8">Buying Product</h1>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                </div>
                {/* Section 2 */}
                <div>
                  <h1 className="text-xl text-white mb-8">Installation</h1>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                  <div className="border-b border-dashed border-gray-600 p-2">
                    <Disclosure>
                      <Disclosure.Button className="py-2 text-lg flex items-center gap-4">
                        <RiArrowRightSLine className="text-xl ui-open:rotate-90 ui-open:text-primary ui-open:transform transition-all" />{" "}
                        What admin theme does?{" "}
                        <span className="bg-secondary-900 text-white text-sm py.0.5 px-2 rounded-lg">
                          React
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-gray-500 text-sm px-8 py-2">
                          By Keenthemes to save tons and more to time money
                          projects are listed and outstanding{" "}
                          <Link to="/" className="text-primary">
                            Learn more
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tickets;
