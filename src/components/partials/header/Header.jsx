import "./Header.css";

const Header = ({ user }) => {
  return (
    <header>
      <div className="container">
        <h1>StylesCraze</h1>
        <h3>{user}</h3>
      </div>
    </header>
  );
};

export default Header;
