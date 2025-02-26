"use client";

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MenuModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      {/* Contenedor del Menú */}
      <div className="menu-container d-flex justify-content-between align-items-center">
        <a href="#" onClick={handleShow}>Menú</a>
        <div className="logo-ego">
          <img 
            width="50"
            height="30"
            src="/menu-hamburger.svg"
            alt="Menú"
            onClick={handleShow}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Modal de Bootstrap */}
      <div className={`modal fade ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }} aria-hidden={!show}>
        <div className="modal-dialog modal-dialog-right m-0">
          <div className="modal-content">
            {/* Cabecera del Modal */}
            <div className="modal-header px-4 d-flex justify-content-end border-0">
              <p className="modal-title px-1">Cerrar</p>
              <button type="button" className="btn-close p-0 m-0" onClick={handleClose} aria-label="Close"></button>
            </div>
            {/* Cuerpo del Modal */}
            <div className="modal-body p-0">
              <ul className="nav nav-vertical align-items-end mb-3 px-5">
                <li><a href='/#'>Modelos</a></li>
                <li><a href='/#'>Servicios y Accesorios</a></li>
                <li><a href='/#'>Financiación</a></li>
                <li><a href='/#'>Reviews y Comunidad</a></li>
                <hr />
                <li><a href='/#'>Toyota Mobility Service</a></li>
                <li><a href='/#'>Toyota Gazoo Racing</a></li>
                <li><a href='/#'>Toyota Híbridos</a></li>
                <hr />
                <li><a href='/#'>Concesionarios</a></li>
                <li><a href='/#'>Test Drive</a></li>
                <li><a href='/#'>Contacto</a></li>
              </ul>

              <ul className="nav nav-vertical nav-vertical-footer align-items-end cat-bottom px-5 pt-3">
                <li><a href='/#'>Actividades</a></li>
                <li><a href='/#'>Servicios al Cliente</a></li>
                <li><a href='/#'>Ventas Especiales</a></li>
                <li><a href='/#'>Innovación</a></li>
                <li><a href='/#'>Prensa</a></li>
                <li><a href='/#'>Acerca de...</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
