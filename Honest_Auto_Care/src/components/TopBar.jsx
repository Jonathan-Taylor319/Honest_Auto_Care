import logo from '../assets/Just Logo.png';

function TopBar({ setActivePage }) {
  return (
    <nav className="topbar">
      <div className="topbar-header">
        <img src={logo} className="topbar-logo" alt="Honest Auto Care logo" />
        <h1 className="topbar-title">Honest Auto Care</h1>
      </div>

      <div className="topbar-buttons">
        <button className="gold-button" onClick={() => setActivePage('home')}>Home</button>
        <button className="gold-button" onClick={() => setActivePage('about')}>About</button>
        <button className="gold-button" onClick={() => setActivePage('services')}>Services</button>
        <button className="gold-button" onClick={() => setActivePage('contact')}>Contact</button>
      </div>
    </nav>
  );
}

export default TopBar;