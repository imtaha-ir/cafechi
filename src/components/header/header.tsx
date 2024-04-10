import QRCode from "react-qr-code";
import "./style.css";

function Header(attrs: { cafeName: string; logo: any; instagram: string }) {
  return (
    <header className="cafechi-header-container">
      <img
        className="cafechi-header-logo"
        src={attrs.logo}
        alt={attrs.cafeName}
      />
      <h1 className="cafechi-header-cafe-name">{attrs.cafeName}</h1>
      <div className="cafechi-header-QR-container">
        <QRCode value={"https://instagram.com/" + attrs.instagram} size={128} />
      </div>
    </header>
  );
}

export default Header;
