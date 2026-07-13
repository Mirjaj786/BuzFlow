import "./Navbar.css";
import Logo from "../../assets/BizFlow_logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>This is AI BuzFlow</h1>
      <img src={Logo} alt="Logo" className="logo" />
      Navbar
    </div>
  );
}
