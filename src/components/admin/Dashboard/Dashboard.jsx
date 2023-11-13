import Header from '../../partials/header/Header';
import SearchComponent from './Search';
import TableComponent from './Table';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <>
      <Header user={'Admin'} />
      <div className='tableContainer'>
        <div>
          <SearchComponent />
        </div>
        <TableComponent />
      </div>
    </>
  );
};