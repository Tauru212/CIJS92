import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {

  // let [person, setPerson] =  useState({
  //   name: "mindX",
  //   age: 23,
  // })

  // const ChangeName = () => {
  //   let name = prompt("Enter Name: ");
  //   setPerson({...person, name});
  // }

  // const ChangeAge = () =>{
  //   let age = prompt("Enter Age: ");
  //   setPerson({...person, age});
  // }

  // return (
  //   <div>
  //     <h1>{person.name}</h1>
  //     <h1>{person.age}</h1>
  //     <button onClick={ChangeName}>Change name</button>
  //     <button onClick={ChangeAge}>Change age</button>
  //   </div>
  // );


    let [infor, setInfor] = useState({name:'', age:''})
    const onClick = ()=>{
        let name =window.prompt("Nhập tên: ");
       
        while (!name) {
          alert('Bạn chưa nhập tên');
          name = window.prompt('Nhập lại tên:'); 
        }
        let age = window.prompt("Nhập tuổi: ");
        while (!age) {
          alert('Bạn chưa nhập tuổi');
          name = window.prompt('Nhập lại tên:'); 
          age = window.prompt('Nhập lại tuổi:'); 
        }
        
        setInfor({ name, age });

    }
  
  // let age = prompt("Enter Age: ");


  return (
    <div>
      <button onClick={onClick}>Click me?</button>
      <p>Name:{infor.name}</p>
      <p>Age:{infor.age}</p>

    </div>
  );
};



export default App;
