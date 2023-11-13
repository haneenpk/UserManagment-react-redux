import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../../redux/slices/userSlice';
import { setLoggedIn as setAdminLoggedIn } from '../../../redux/slices/adminSlice';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../../../services/api";
import "./Header.css";

const Header = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    let response = await logoutUser();
    if (response && response.data.status === "success") {
      // Dispatch setLoggedIn action with false to update the state
      dispatch(setLoggedIn(false));
      // Navigate to the home page or any other desired location
      navigate("/");
    }
  };

  return (
    <header>
      <div className="container">
        <h1>StylesCraze</h1>
        <div className="header-right">
          <h3>{user}</h3>
          <button
            className="logout-btn"
            onClick={() =>
              logout()
            }>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
