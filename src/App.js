import logo from './logo.svg';
import './App.css';

function App() {
 let data=
  [
  {
    grid: 123,
    name: 'Amit',
    fees: 50000,
    attendance: 80
  },
  {
    grid: 456,
    name: 'Ajay',
    fees: 70000,
    attendance: 90
  },
  {
    grid: 856,
    name: 'Ashish',
    fees: 30000,
    attendance: 65
  },
  {
    grid: 762,
    name: 'Raj',
    fees: 90000,
    attendance: 70
  },
 ]

  let sdata = data.filter((v,i) => v.attendance > 71);
  console.log(sdata);

  let total = sdata.reduce((acc,v,i) => acc + v.fees ,0)
  console.log(total);
  return (
    <div>
      {
        sdata.map((v,i) => {
          return(
            <div key = {i}>
              <h1>{v.name}</h1>
              <h3>{v.grid}</h3>
              <h3>{v.fees}</h3>

            </div>
          )
        })
      }
      <div>  
          <h4>total :- {total}</h4>
        </div>
    </div>
    
  );
}

export default App;
