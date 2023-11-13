import { useSelector } from 'react-redux';
import Header from '../../partials/header/Header';

const Home = () => {
  const username = useSelector(state => state.user.username);

  return (
    <Header user={username} />
  );
};

export default Home;
