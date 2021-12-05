
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import s from "./App.module.css";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTable } from './redux/table';

function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTable())
  }, []);
  return (
    <div className={s.App}>
      <Search/>
      <Table/>
    </div>
  );
}

export default App;
