import logo from './logo.svg';
import './App.css';

function App() {

  // Array

  //let arr = [1,2,3,4,5,6,7]

  //copy

  //let arr1 = [...arr];
  //console.log(...arr1);

  //1 2 3 4 5 6 7  line 13


  //merging

  //let arr = [1,2,3,4,5,6,7];
  //let arr2 = [9,10];
  //let ans = [...arr, ...arr2];
  //console.log(ans);  //[1, 2, 3, 4, 5, 6, 7, 9, 10]


  // destructuring
  // let arr = [1,2,3,4,5,6];
  // const [a,b,c,d,e,f] = arr;
  // console.log(a,f); 

  //1 6


  // ======================Object======================

  // copy

  // let obj = {id: 1010 , name: 'aushal'};

  // let obj1 = {...obj};
  // console.log(obj1);  //{id: 1010, name: 'aushal'}

  //merge obj
  // let obj2 = {id: 1020 , place: 'surat'};
  // let ans = {...obj2, ...obj2};
  // console.log(ans);  //{id: 1020, place: 'surat'}


  //destructuring

  // let obj = {id: 1030 , name: 'aushal'};
  // let {id , name}= obj;
  // console.log(name , obj .id);

  // aushal 1030

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
