import logo from '../assets/Just Logo.png';

function TopBar({ setActivePage }) {
  return (
    <nav className="topbar">
      <div className="topbar-header">
        {/* Left Logo */}
        <div className="topbar-left">
          <img src={logo} className="topbar-logo" alt="Honest Auto Care logo" />
        </div>

        {/* Centered Title + Call/Text + Buttons */}
        <div className="topbar-center">
          <h1 className="topbar-title">Honest Auto Care LLC</h1>
          <div className="topbar-actions">
            <a href="tel:19087052462" className="gold-button-small">📞</a>
            <a href="sms:19087052462" className="gold-button-small">💬</a>
          </div>
          <div className="topbar-buttons">
            <button className="gold-button" onClick={() => setActivePage('home')}>Home</button>
            <button className="gold-button" onClick={() => setActivePage('services')}>Services</button>
            <button className="gold-button" onClick={() => setActivePage('contact')}>Contact</button>
          </div>
        </div>

        {/* Right Logo */}
        <div className="topbar-right">
          <img src={logo} className="topbar-logo" alt="Honest Auto Care logo" />
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
