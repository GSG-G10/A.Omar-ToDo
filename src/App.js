import React, { useState } from "react";
import { Input, List, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import {PlusOutlined, DeleteOutlined} from '@ant-design/icons';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [task, setTask] = useState([
    {
      id: 0,
      description: "Task 1",
      checked: false
    },
    {
      id: 1,
      description: "Task 2",
      checked: false
    },
  ]);
  const handleAddTodo = () => {
    setTask([...task, {id: task.length, description: inputValue, checked: false}])
  }
  const handleValue = (e) => {
    setInputValue(e.target.value)
  }
  const handleDeleteTodo = (e) => {
    // console.dir(e.target.parentNode.parentNode)
    const itemId = Number(e.target.parentNode.parentNode.parentNode.getAttribute('id'))
    setTask(task.filter(todo => todo.id !== itemId))
  }
  const handleCheckTodo = (index) => {
    const newTask = [...task]
    newTask[index].checked = !newTask[index].checked
    setTask(newTask)
    
  }
  return (
    <div className="App">
      <div className="container">
        <Input placeholder="add your note" addonAfter={<PlusOutlined style={{ width: 50 }} onClick={handleAddTodo} />} onChange={handleValue} />
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={task}
            renderItem={(todo, index) => <List.Item id={todo.id} style={{textDecoration: todo.checked ? 'line-through': ''}} >
              <Checkbox onChange={() => handleCheckTodo(index)}>
                {todo.description}
              </Checkbox>
              
            <div style={{display: 'flex'}}>
              <DeleteOutlined className="list-icon" onClick={handleDeleteTodo} />
            </div>
            </List.Item>}
          />
      </div>
    </div>
  );
}

export default App;
