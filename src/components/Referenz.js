import React from 'react';

const Referenz = () => (
  <div className="container">
    <h2 className="ref">Referenzen</h2>
    <div className="table">
      <div className="table__row table-space">
        <div className="table__row__column-left">
          <a className="image-link" href="https://arcane-river-96772.herokuapp.com/" target="_blank">
            <div className="mask"><h4 className="mask__title">Webseite ansehen.</h4></div>
            <img className="table__row__column__img" src="./images/umfrage.png" alt="umfrage app" />
          </a>
        </div>
        <div className="table__row__column-right">
          <h3>Umfrage App</h3>
          <p>React, Redux, MongoDB, Responsive, ...<br/>Abschlussarbeit CAS Front End Engineering, HSR Rapperswill</p>
          <a href="https://github.com/shekebroya/umfrageApp" target="_blank" >github repository</a>
        </div>
      </div>
      <div className="table__row table-space">
        <div className="table__row__column-left">
          <a className="image-link" href="https://www.medidata.ch/md/microsite/index_de.html" target="_blank">
            <div className="mask"><h4 className="mask__title">Webseite ansehen.</h4></div>
            <img className="table__row__column__img" src="./images/medidata.png" alt="Bonitätsprüfung"/>
          </a>
        </div>
        <div className="table__row__column-right"><h3>Medidata Bonitätsprüfung</h3><p>Responsive<br/> Medidata Bonitätsprüfung</p></div>
      </div>
      <div className="table__row table-space">
        <div className="table__row__column-left">
            <img className="table__row__column__img" src="./images/medidata.png" alt="Medidata"/>
        </div>
        <div className="table__row__column-right"><h3>Medidata Relaunch</h3><p>CMS Typo3, Responsive, Relaunch voraussichtlich Sommer 2018</p></div>
      </div>
      <div className="table__row table-space">
        <div className="table__row__column-left">
          <a className="image-link" href="https://www.vetropack.ch/de/" target="_blank">
            <div className="mask"><h4 className="mask__title">Webseite ansehen.</h4></div>
            <img className="table__row__column__img" src="./images/vetropack.png" alt="Vetropack"/>
          </a>
        </div>
        <div className="table__row__column-right"><h3>Vetropack</h3><p>CMS Typo3, Responsive</p></div>
      </div>
      <div className="table__row table-space">
        <div className="table__row__column-left">
          <a className="image-link" href="https://stadt.winterthur.ch/" target="_blank">
            <div className="mask"><h4 className="mask__title">Webseite ansehen.</h4></div>
            <img className="table__row__column__img" src="./images/stadt.winti.png" alt="Stadt Winterthur"/>
          </a>
        </div>
        <div className="table__row__column-right"><h3>Stadt Winterthur</h3><p>CMS, Responsive</p></div>
      </div>
      <div className="table__row table-space">
        <div className="table__row__column-left">
          <a className="image-link" href="https://stadtplan.winterthur.ch/" target="_blank">
            <div className="mask"><h4 className="mask__title">Webseite ansehen.</h4></div>
            <img className="table__row__column__img" src="./images/stadtplan.winti.png" alt="Stadtplan Winterthur"/>
          </a>
        </div>
        <div className="table__row__column-right"><h3>Stadtplan Winterthur</h3><p>CMS, Responsive</p></div>
      </div>
      <div className="table__row table-space">
        <div className="table__row__column-left">
          <a className="image-link" href="http://grandtour.myswitzerland.com/de/" target="_blank">
            <div className="mask"><h4 className="mask__title">Webseite ansehen.</h4></div>
            <img className="table__row__column__img" src="./images/grandtour.png" alt="Grand Tour of Switzerland"/>
          </a>
        </div>
        <div className="table__row__column-right"><h3>Grand Tour of Switzerland</h3><p>Responsive</p></div>
      </div>
      <div className="table__row table-space">
        <div className="table__row__column-left">
          <a className="image-link" href="https://www.mystsnet.com/de/" target="_blank">
            <div className="mask"><h4 className="mask__title">Webseite ansehen.</h4></div>
            <img className="table__row__column__img" src="./images/swiss-travel-system.png" alt="Swiss Travel System "/>
          </a>
        </div>
        <div className="table__row__column-right"><h3>Swiss Travel System</h3><p>CMS Typo3, Responsive</p></div>
      </div>

    </div>

  </div>
);

export default Referenz;
