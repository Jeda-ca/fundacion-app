//import React from 'react'
//import { navLinks } from '../data/data'
import logo from '../assets/LogoMejoradoSinFondo.png'
import { getActiveClass } from '../utils/getActiveClass'


export default function NavBar(){
  return (
    <nav className="py-2 px-3 bg-pink-300 border-pink-200">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <a className="items-center"
        href="/">
          <img alt="Logo Fundación Atma Namasté" className="size-25" src={logo}/>
        </a>

        <button aria-controls="mega-menu-icons" aria-expanded="false" className="inline-flex items-center p-2 size-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-pink-400/50 hover:scale-110 transition-transform" data-collapse-toggle="mega-menu-icons" type="button">
          <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
        </button>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-2">
          <a className="text-white bg-orange-500 font-medium rounded-md text-sm px-4 py-2 md:px-5 md:py-2.5 hover:bg-amber-500/55 hover:scale-115 transition-transform"
          href="/login">Login</a>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mega-menu-icons">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-16">
            <li>
              <a className={getActiveClass(location.pathname, "/")}
                href="/">Inicio</a>
              <span className="sr-only">Inicio</span>
            </li>

            <li>
              <a className={getActiveClass(location.pathname, "/quienes-somos")}
                href="/quienes-somos">¿Quiénes somos?</a>
              <span className="sr-only">¿Quiénes somos?</span>
            </li>

            <li>
              <button className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0" data-dropdown-toggle="mega-menu-icons-dropdown" id="mega-menu-icons-dropdown-button">
                Programas
                {/* <svg aria-hidden="true" className="w-2.5 h-2.5 ms-3" fill="none" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                  <path d="m1 1 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg> */}
              </button>

              <div className="absolute z-10 grid-hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md md:grid-cols-3" id="mega-menu-icons-dropdown">
                <div className="p-3 pb-0 text-gray-900 md:pb-4 ">
                  <ul aria-labelledby="mega-menu-icons-dropdown-button" className="space-y-4">
                    <li>
                      <a className="flex items-center text-gray-500 hover:text-gray-600 px-3 py-2"
                      href="#">
                      <span className="sr-only">Para niños y adolescentes</span>
                      {/* <svg aria-hidden="true" className="w-3 h-3 me-2 text-gray-400 group-hover:text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg> */}
                      Para Niños y Adolescentes</a>
                    </li>

                    <li>
                      <a className="flex items-center text-gray-500 hover:text-gray-600 px-3 py-2"
                      href="#">
                        <span className="sr-only">Para familias</span>
                        
                        Para Familias
                      </a>
                    </li>

                    <li>
                      <a className="flex items-center text-gray-500 hover:text-gray-600 px-3 py-2"
                        href="#">
                        <span className="sr-only">Para jóvenes universitarios</span>
                        {/* <svg
                          aria-hidden="true"
                          className="w-3 h-3 me-2 text-gray-400 group-hover:text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                          <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                        </svg> */}
                        Para Jóvenes Universitarios
                      </a>
                    </li>

                    <li>
                      <a
                        className="flex items-center text-gray-500 hover:text-gray-600 px-3 py-2"
                        href="#">
                        <span className="sr-only">Para adultos</span>
                        {/* <svg
                          aria-hidden="true"
                          className="w-3 h-3 me-2 text-gray-400 group-hover:text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                        </svg> */}
                        Para Adultos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
    
            <li>
              <a className={getActiveClass(location.pathname, "/servicios")}
              href="/servicios">Servicios</a>
              <span className="sr-only">Servicios</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center md:order-2 space-x-1 md:space-x-0">
          <button
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900"
            data-dropdown-toggle="language-dropdown-menu"
            type="button">
            <svg
              aria-hidden="true"
              className="w-5 h-5 rounded-full me-3"
              viewBox="0 0 3900 3900"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <path d="M0 0h7410v3900H0z" fill="#b22234" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth="300"
              />
              <path d="M0 0h2964v2100H0z" fill="#3c3b6e" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                          id="a"
                        />
                        <use xlinkHref="#a" y="420" />
                        <use xlinkHref="#a" y="840" />
                        <use xlinkHref="#a" y="1260" />
                      </g>
                      <use xlinkHref="#a" y="1680" />
                    </g>
                    <use x="247" xlinkHref="#b" y="210" />
                  </g>
                  <use x="494" xlinkHref="#c" />
                </g>
                <use x="988" xlinkHref="#d" />
                <use x="1976" xlinkHref="#c" />
                <use x="2470" xlinkHref="#e" />
              </g>
            </svg>
            English (US)
          </button>
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm"
            id="language-dropdown-menu">
            <ul className="py-2 font-medium" role="none">
              <li>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="#"
                  role="menuitem">
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 rounded-full me-2"
                      id="flag-icon-css-us"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <g fillRule="evenodd">
                        <g strokeWidth="1pt">
                          <path
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            fill="#bd3d44"
                            transform="scale(3.9385)"
                          />
                          <path
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            fill="#fff"
                            transform="scale(3.9385)"
                          />
                        </g>
                        <path
                          d="M0 0h98.8v70H0z"
                          fill="#192f5d"
                          transform="scale(3.9385)"
                        />
                        <path
                          d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                          fill="#fff"
                          transform="scale(3.9385)"
                        />
                      </g>
                    </svg>
                    English (US)
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="#"
                  role="menuitem">
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 rounded-full me-2"
                      id="flag-icon-css-de"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 341.3h512V512H0z" fill="#ffce00" />
                      <path d="M0 0h512v170.7H0z" />
                      <path d="M0 170.7h512v170.6H0z" fill="#d00" />
                    </svg>
                    Deutsch
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="#"
                  role="menuitem">
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 rounded-full me-2"
                      id="flag-icon-css-it"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <g fillRule="evenodd" strokeWidth="1pt">
                        <path d="M0 0h512v512H0z" fill="#fff" />
                        <path d="M0 0h170.7v512H0z" fill="#009246" />
                        <path d="M341.3 0H512v512H341.3z" fill="#ce2b37" />
                      </g>
                    </svg>
                    Italiano
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="#"
                  role="menuitem">
                  <div className="inline-flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 rounded-full me-2"
                      id="flag-icon-css-cn"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <path d="M1-.3L-.7.8 0-1 .6.8-1-.3z" fill="#ffde00" id="a" />
                      </defs>
                      <path d="M0 0h512v512H0z" fill="#de2910" />
                      <use
                        height="20"
                        transform="matrix(76.8 0 0 76.8 128 128)"
                        width="30"
                        xlinkHref="#a"
                      />
                      <use
                        height="20"
                        transform="rotate(-121 142.6 -47) scale(25.5827)"
                        width="30"
                        xlinkHref="#a"
                      />
                      <use
                        height="20"
                        transform="rotate(-98.1 198 -82) scale(25.6)"
                        width="30"
                        xlinkHref="#a"
                      />
                      <use
                        height="20"
                        transform="rotate(-74 272.4 -114) scale(25.6137)"
                        width="30"
                        xlinkHref="#a"
                      />
                      <use
                        height="20"
                        transform="matrix(16 -19.968 19.968 16 256 230.4)"
                        width="30"
                        xlinkHref="#a"
                      />
                    </svg>
                    中文 (繁體)
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <button
            aria-controls="navbar-language"
            aria-expanded="false"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            data-collapse-toggle="navbar-language"
            type="button">
            <span className="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1h15M1 7h15M1 13h15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

