import { useSelector } from 'react-redux';
import Header from '../../partials/header/Header';

const Home = () => {
  const username = useSelector(state => state.user.username);

  return (
    <Header user={username} role={'user'} />
  );
};

export default Home;
