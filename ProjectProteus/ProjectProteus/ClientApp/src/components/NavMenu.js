import React, { useEffect, useState } from 'react';

const NavMenu = () => {
  const [isOpen] = useState(false);

  useEffect(() => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    const handleClick = () => {
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.contains('open');
      toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
    };

    toggleBtn.addEventListener('click', handleClick);

    return () => {
      toggleBtn.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img alt="" />
        </div>
        <ul className="links">
          <li>
            <a href="#about">O nás</a>
          </li>
          <li>
            <a href="#services">Služby</a>
          </li>
          <li>
            <a href="#references">Reference</a>
          </li>
        </ul>
        <a href="#contact" className="action_btn">
          Kontaktuj nás
        </a>
        <div className="toggle_btn">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className={`dropdown_menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#about">O nás</a>
          </li>
          <li>
            <a href="#services">Služby</a>
          </li>
          <li>
            <a href="#references">Reference</a>
          </li>
          <li>
            <a href="#contact" className="action_btn">
              Kontaktuj nás
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavMenu;
