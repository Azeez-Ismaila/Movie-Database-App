import "./App.css";
import Form from "./Form";
import Todolist from "./Todolist";
import {useEffect, useState} from "react"
  function App() {
    const [inputText, setInputText] = useState("")
    const [todo, setTodo] = useState([])
    const [status,setStatus] = useState("all")
    const [filteredTodos,setFilteredTodos] = useState([])
    // Run once the app start
    useEffect(()=>{
     getLocalTodos()
     },[])

    useEffect(()=>{
      filterHandler()
      saveLocalTodos()
    },[todo,status])
   const filterHandler = ()=>{
    switch (status) {
      case "completed":
        setFilteredTodos(todo.filter(todo => todo.completed === true ))
        break;
    case "uncompleted":
      setFilteredTodos(todo.filter(todo => todo.completed === false ))
      break
      default:  setFilteredTodos(todo)
        break;
    }
   }

   const saveLocalTodos = () =>{
    if(todo.length>0){
localStorage.setItem("todo",JSON.stringify(todo))
    }
    
   }
   const getLocalTodos = ()=>{
    if (localStorage.getItem("todo") === null){
      localStorage.setItem("todo",JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todo"))
      setTodo(todoLocal)
   }
    }
      
    return (
      <div className="App">
        <header>
          <h1>My Todo List</h1>
        </header>
        <Form todo={todo} setTodo={setTodo} inputText = {inputText} setInputText ={setInputText} setStatus={setStatus}/>
        <Todolist todo={todo} setTodo={setTodo} inputText = {inputText} filteredTodos={filteredTodos}/>
      </div>
    );
  }

export default App;
