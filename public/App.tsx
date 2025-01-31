import { useState } from "react";
import {AddItemForm} from '../src/components/UI/FooterItem/'
import { v4 as uuidv4 } from "uuid";


export type FilterValueType = "all" | "complated" | "active";
export interface ITaskList {
  id: string;
  title: string;
  isDone: boolean;
}

type ITodoList = {
  id: string;
  title: string;
  filter: FilterValueType;
};

type ITaskItem = {
  id: string,
  title: string,
  isDone: boolean
}

type ITodoListItem = {
  [key:string]: Array<ITaskItem>
}
function App() {
  let todoListId1 = uuidv4();
  let todoListId2 = uuidv4();

  const [tasks, setTask] = useState<ITodoListItem>({
    [todoListId1]: [
      { id: uuidv4(), title: "CSS", isDone: true },
      { id: uuidv4(), title: "JS", isDone: true },
      { id: uuidv4(), title: "React", isDone: false },
      { id: uuidv4(), title: "Redux", isDone: false },
    ],
    [todoListId2]: [
      { id: uuidv4(), title: "Milk", isDone: true },
      { id: uuidv4(), title: "Oil", isDone: true },
    ],
  });
  const [todoLists, setTodoList] = useState<Array<ITodoList>>([
    { id: todoListId1, title: "What to bay", filter: "all" },
    { id: todoListId2, title: "Movew", filter: "all" },
  ]);

  function removeTask(id: string, todoListId: string) {
    let resultTask = tasks[todoListId].filter((elem) => {
      return id !== elem.id;
    });
    if (resultTask) {
      tasks[todoListId] = resultTask;
      setTask({ ...tasks });
    } else {
      return;
    }
  }

  function addTask(title: string, todoListId: string) {
    if (title.trim() === "") {
      return;
    }
    let newTasks = [
      { id: uuidv4(), title: title.trim(), isDone: false },
      ...tasks[todoListId],
    ];
    tasks[todoListId] = newTasks;
    setTask({ ...tasks });
  }

  function changeFilter(value: FilterValueType, id: string) {
    let task = todoLists.find((itl) => itl.id === id);
    if (task) {
      task.filter = value;
      setTodoList([...todoLists]);
    } else {
    }
  }

  function changeStatusTask(id: string, isDone: boolean, todoListId: string) {
    let task = tasks[todoListId].find((item) => item.id === id);
    if (task) {
      task.isDone = isDone;
      setTask({ ...tasks });
    } else {
      return;
    }
  }

  function removeTodoList(todoListId: string) {
    let filteredTodoList = todoLists.filter((tl) => tl.id !== todoListId);
    if (filteredTodoList) {
      setTodoList(filteredTodoList);
      delete tasks[todoListId];
      setTask({ ...tasks });
    } else {
      return;
    }
  }

  const addTodoList = (title:string) => {
    let todoList: ITodoList = {
      id: uuidv4(),
      title: title,
      filter: "all"
    }
    setTodoList([
      ...todoLists, todoList
    ])
    setTask({
      ...tasks,
      [todoList.id]:[]
  })
  }
  
  const ChangeTitleTask = (id:string, value:string, listId:string) =>{
    let task = tasks[listId].find((item) => item.id === id)
    if(task){
      console.log(task)
      task.title = value
      setTask({...tasks})
      
    }else{
      return
    }
    
  }
  return (
    <div className="App">
      <div className="container">
        <div className="schena">
          <div>
            <AddItemForm addItem={addTodoList}/>
            <ul className="todoLists">
              {todoLists.map((tl) => {
                let resultTask = tasks[tl.id];
                if (tl.filter === "complated") {
                  resultTask = tasks[tl.id].filter(
                    (item) => item.isDone === true
                  );
                }
                if (tl.filter === "active") {
                  resultTask = tasks[tl.id].filter(
                    (item) => item.isDone !== true
                  );
                }
                return (
                  <li key={tl.id} className="todoList__item">
                    <TodoList
                      listId={tl.id}
                      title={tl.title}
                      task={resultTask}
                      filter={tl.filter}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatusTask={changeStatusTask}
                      removeTodoList={removeTodoList}
                      ChangeTitleTask = {ChangeTitleTask}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sidebar"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
