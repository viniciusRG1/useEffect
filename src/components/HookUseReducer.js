import React, { useReducer, useState} from 'react'

const HookUseReducer = () => {
  const[number, dispatch] = useReducer((state,action)=>{
    return Math.random(state);
  })

  const initialTasks = [
    {id: 1,text:"fazer alguma coisa"},
    {id: 2,text:"fazer outra coisa"},
  ];

  const taskReducer = (state, action) => {
    switch(action.type){
        case "ADD":
            const newTask = {
                id: Math.random(),
                text: taskText,
            };

            setTaskText("");

            return[...state, newTask];
        default: 
            return state;
    }
  };
    const [taskText, setTaskText] = useState("");
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)



  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTasks({type: "ADD"})
  }

    return (
    <div>
        <h2>reducer</h2>
        <p>número: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <h2>tarefas</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                onChange = {(e) => setTaskText(e.target.value)}
                value={taskText}
            />
            <input type='submit' value="enviar"/>
        </form>
        {tasks.map((task)=>(
            <li key={task.id}>{task.text}</li>
        ))}
    </div>
  )
}

export default HookUseReducer