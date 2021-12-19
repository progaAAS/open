
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import s from "./App.module.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTable } from './redux/table';
import { getHeaders } from './redux/headers';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTable())
    dispatch(getHeaders())
  }, []);
  return (
    <div className={s.App}>
      <Search/>
      <Table/>
    </div>
  );
}

export default App;
