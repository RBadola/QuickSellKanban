
import './App.css';
import Group from './Components/Group/Group';
import Header from './Components/Header/Header';
import { DataContext } from './Components/Context/DataContext';
import { useContext, useEffect } from 'react';
import Card from './Components/Card/Card';
function App() {
  const {  status,us,pr,groupByPriority,groupByStatus,groupByUser,getData } = useContext(DataContext)
  
  return (
    <div>
      <Header />
      <div className='groups'>
        {
        groupByStatus &&  status.map((item, i) => <Group key={i} title={item}  />)
        }
         {
        groupByPriority &&  pr.map((item, i) => <Group t="priority" key={i} title={item}  />)
        }
         {
        groupByUser &&  us.map((item, i) => <Group key={i} title={item}  />)
        }
      </div>

    </div>
  );
}

export default App;
