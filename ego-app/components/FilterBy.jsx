"use client";
import { useState } from "react";

export default function FilterBy({ setCategory, category }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory); // Actualiza la categoría seleccionada
    setIsOpen(false); // Cierra el dropdown después de seleccionar
  };

  const getClassName = (categoryToCheck) => {
    return category === categoryToCheck ? 'filter-desk-selected' : '';
  };

  return (
    <div className="filter-item d-flex justify-content-start">
      <button className="btn-filter-by" onClick={toggleDropdown}>
        Filtrar por
        <img className="arrow-dropdown arrow-dropdown-desk mx-2" src={isOpen ? "/up-filter-category.svg" : "/down-filter-category.svg"} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu-filter mt-2">
          <li onClick={() => handleCategoryChange('todos')}>Todos</li>
          <li onClick={() => handleCategoryChange('Pickups y Comerciales')}>Pickups y Comerciales</li>
          <li onClick={() => handleCategoryChange('SUVs y Crossovers')}>SUVs y Crossovers</li>
          <li onClick={() => handleCategoryChange('autos')}>Autos</li>
        </ul>
      )}
      <ul className="menu-filter-desktop m-0">
        <li onClick={() => handleCategoryChange('todos')} className={getClassName('todos')}>Todos</li>
        <li onClick={() => handleCategoryChange('Pickups y Comerciales')} className={getClassName('Pickups y Comerciales')}>Pickups y Comerciales</li>
        <li onClick={() => handleCategoryChange('SUVs y Crossovers')} className={getClassName('SUVs y Crossovers')}>SUVs y Crossovers</li>
        <li onClick={() => handleCategoryChange('autos')} className={getClassName('autos')}>Autos</li>
      </ul>
    </div>
  );
}
