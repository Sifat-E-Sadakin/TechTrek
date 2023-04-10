import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className="dropdown">
      <button className="dropdown-toggle btn" onClick={toggleMenu}>
        Click me!
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><a href="#">Option 1</a></li>
          <li><a href="#">Option 2</a></li>
          <li><a href="#">Option 3</a></li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;