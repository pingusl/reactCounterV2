import logo from "../img/chronometre.png";
const Header = () => {
  return (
    <header className="header">
      <span>
        <img src={logo} className="image" alt="logo-chrono" />
      </span>

      <span> React Counter V2</span>
    </header>
  );
};
export default Header;
