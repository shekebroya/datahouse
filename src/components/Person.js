import React from 'react';


const Person = () => (
  <div className="person flex-container">
    <div className="table person__info">
        <div className="table__row">
          <div className="table__row__column">Name</div>
          <div className="table__row__column">Shekeb Roya</div>
        </div>
        <div className="table__row">
          <div className="table__row__column">Adresse</div>
          <div className="table__row__column">Florastrasse 61 <br/>8610 Uster <br/>Schweiz</div>
        </div> 
        <div className="table__row">
          <div className="table__row__column">E-Mail</div>
          <div className="table__row__column">shekeb.roya@gmx.ch</div>
        </div>
        <div className="table__row">
          <div className="table__row__column">Mobile</div>
          <div className="table__row__column">+41 764 812016</div>
        </div>
        <div className="table__row">
          <div className="table__row__column">Nationalität</div>
          <div className="table__row__column">Deutsch</div>
        </div>
        <div className="table__row">
          <div className="table__row__column">Geburtsdatum</div>
          <div className="table__row__column">10. Januar 1978</div>
        </div>
        <div className="table__row">
          <div className="table__row__column">Geburtsort</div>
          <div className="table__row__column">Kabul</div>
        </div>
        <div className="table__row">
          <div className="table__row__column">Zivilstand</div>
          <div className="table__row__column">ledig</div>
        </div>
    </div>
    <div className="person__image flex-item">
      <img
        className="person__image__shekeb"
        src="./images/shekeb.jpg"
        alt="Image of a sitting male called shekeb"
      />
    </div>
  </div>
);

export default Person;
