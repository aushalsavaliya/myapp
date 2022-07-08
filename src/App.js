import logo from './logo.svg';
import './App.css';

function App() {


// let arr = [12,18,27,48];

// let ans = Array.isArray(arr)

// console.log(ans);
// ===========================================================

  // let grid = [12,23,45,67,29,"x"]

  // console.log(grid);



// ================================================
    // Arrow finction
    
    // const display = (Name,id) =>{
    //   console.log(Name,id);
    // }
    // display("aushal",9)

    // =================================================================

    // block scope

    // const x = 5;  ==> global scope
    // {
    //   const x = 10;  ==>  local scope

    //   console.log(x);  ==>  10
    //  }

    // console.log(x);  5
// ==================================================


  //  const x = 10
   
  //  x + x + 5;
  //  console.log(x);

  // ==================================================

  // let x = 10;
  
  // x = x + 5;
  // console.log(x);

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
          Learn React rnw
        </a>
      </header>
    </div>
  );
}

export default App;
