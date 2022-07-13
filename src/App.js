import logo from './logo.svg';
import './App.css';

function App() {
  let data=
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



 
  let mdata = data.filter((v,i) => v.status === true);
  console.log(mdata);

  let totalsalary = mdata.reduce((acc, v, i) => acc + v.salary + v.bonus , 0)
  console.log(totalsalary);

  let total = data.map((v,i) => v.salary + v.bonus)  
  console.log(total);


  return (
   <div>
    {
      data.map((v,i) => {
        return(
          <div key = {i}>
            <h1>{v.name}</h1>
            <h4>{v.salary }</h4>
            <h4>{v.bonus}</h4>
            <h4>total</h4>
            <h4>{v.salary + v.bonus}</h4>
          </div>
        )
      })
    }
      <div>
        <h3>totalsalarys</h3>
        <h4>{mdata.reduce((acc, v, i) => acc + v.salary + v.bonus , 0)}</h4>     
      </div>
   </div>
  );
}

export default App;
