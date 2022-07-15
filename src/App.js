import logo from './logo.svg';
import './App.css';

function App() {

  let data =
    [
      {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
      },
      {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
      },
      {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
      },
      {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
      },
      {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
      },
    ]

  let edata = data.filter((v, i) => v.status === true);
  console.log(edata);

   let totalsalary = edata.reduce((acc, v, i) => acc + v.salary + v.bonus , 0);
   console.log(totalsalary);


  return (
    <div>
      {
        edata.map((v, i) => {
          return (
            <div key={i}>
              <h1>{v.name}</h1>
              <h3>{v.salary}</h3>
              <h3>{v.bonus}</h3>
              <h1>{v.salary + v.bonus}</h1>
              <h3>{v.status.toString()}</h3>
            </div>
          )
        })
      }
      <h3>total :- {totalsalary}</h3>
    </div>
  );
}

export default App;
