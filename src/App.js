import logo from './logo.svg';
import './App.css';

function App() {


  //=====================concat==========================
  // let arr = [1,2,3,4,5,6];
  // let arr1 = [10,30];
  // let newarr = arr.concat (arr1);
  // console.log(newarr);   //[1, 2, 3, 4, 5, 6, 10, 30]

  //========================isarray=======================

  // let arr = [1,2,3];
  // console.log(Array.isArray(arr)); //true

  //===============================some===================

  // let arr = [1,2,3,4,5];
  // let ans = arr.some((a) =>a > 3)
  // console.log(ans);   //true

  //===============================to string================

  // let arr = [1,2,3,4]
  // console.log(arr.toString(arr));  //1,2,3,4

  //=============================find=================

    // let arr = [1,2,3,4];

    // let ans = arr.find((a) => a > 3);

    // console.log(ans)  //4

  // =====================splice====================
  
  
    // let arr = [1,2,3,4,5]
    // arr.splice(2, 0 ,9);

    // console.log(arr);   //[1, 2, 9, 3, 4, 5]

    // add 9 at 2nd index  
  
    // let arr = [1,3,10,4,5,6,7,8];

    // arr.splice(2,1);
    // console.log(arr);

    // [1, 3, 4, 5, 6, 7, 8]

    // ==================Object================

    // let obj ={
    //   id : 110,
    //   Name : 'aushal'
    // };

    // console.log(obj.id,obj['Name']);

    // 110 'aushal'

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
