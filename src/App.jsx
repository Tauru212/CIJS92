import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {

  const [value, setValue] = useState("");
  const [child, setChild] = useState([])

  const handleAddTodo = () =>{
    if(!value){
      alert('Vui long nhap gia tri!')
      return;
    }

    setChild([...child, value]);
    alert('Nhap gia tri thanh cong');
    setValue(" ")
  };

  console.log(value);

  return (
    <div>
      <h1>Tinder</h1>

      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <div>
        {child.map((childs) => (
          <h3>{childs}</h3>
        ))}
      </div>
      
    </div>

  );
};



export default App;
