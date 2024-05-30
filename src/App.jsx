// import { useState } from 'react'
// import './index.css'

// function App() {
//   const [todos, setTodos] = useState([])
//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   const [checked, setChecked] = useState(false)

//   console.log(todos)

//   const addTodo = () => {
//     setTodos([...todos, { title, description, checked }])
//     setTitle('')
//     setDescription('')
//     setChecked(false)
//   }

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((todos,i) => i !== index)
//     setTodos(updatedTodos)
//   }

//   return (
//     <>
//       <input 
//         type="text" 
//         placeholder='Enter todo title' 
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input 
//         type="text" 
//         placeholder='Enter todo description'     
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button type="submit" onClick={addTodo}>Add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <div key={index}>
//             <input 
//               type="checkbox" 
//               id={index} 
//               checked={todo.checked} 
//               onChange={() => deleteTodo(index)}
//             />
//             <label htmlFor={index}>{`${todo.title} - ${todo.description}`}</label> 
//           </div>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App




// import { useState } from 'react';


// function App(){
//   const [name, setName] = useState('soumik');
//   const [name2, setName2] = useState('hazra');
//   return(
//     <>
//       <Header title={name}></Header>
//       <Header title={`${name} ${name2}`}></Header>
//       <Header title="Raj"></Header>
//       <Header title={name2}></Header>
//       <button type="submit" onClick={changeMyName}>Click me to change the name</button>
//     </>
//   )
//   function changeMyName(){
//     setName(Math.random())
//     setName2(Math.random())
//   }

// }


// function Header({title}){
//   return(
//     <h1>{`Hi ${title} from the React Team`}</h1>
//   )
// }

// export default App;


// import React, { useState } from 'react';

// function App() {
//   const [title, setTitle] = useState('');
//   const [des, setDes] = useState('');
//   const [todos, setTodos] = useState([
//     { id: 1, title: 'Todo 1', des: 'Description 1', done: false },
//     { id: 2, title: 'Todo 2', des: 'Description 2', done: false },
//     { id: 3, title: 'Todo 3', des: 'Description 3', done: false },
//   ]);

//   function addTodo() {
//     if (!title || !des) {
//       alert('Please enter both title and description.');
//       return;
//     }

//     const newTodo = {
//       id: todos.length + 1,
//       title: title,
//       des: des,
//       done: false,
//     };

//     setTodos([...todos, newTodo]);
//     setTitle('');
//     setDes('');
//   }

//   function doneTodo(id) {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? { ...todo, done: !todo.done } : todo
//     );
//     setTodos(updatedTodos);
//   }

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter todo title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter todo description"
//         value={des}
//         onChange={(e) => setDes(e.target.value)}
//       />
//       <button type="button" onClick={addTodo}>
//         Add
//       </button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ listStyle: 'none', textDecoration: todo.done ? 'line-through' : 'none' }}>
//             {todo.id}. {todo.title} - {todo.des}
//             <input type="checkbox" checked={todo.done} onChange={() => doneTodo(todo.id)} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;


import React from 'react';

function App() {
  return (
    <>
      <Wrapper innerComponent={<TextContent />} />
    </>
  );
}

function TextContent() {
  return (
    <div>
      <h1>Hello World Soumik was here!</h1>
    </div>
  );
}

function Wrapper({ innerComponent }) {
  return (
    <div style={{ border: '2px solid black' }}>
      {innerComponent}
    </div>
  );
}

export default App;
