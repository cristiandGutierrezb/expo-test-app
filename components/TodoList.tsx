import { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import TodoItem from './TodoItem';

// import { getAllTask } from '../lib/api';
// import { clearInformationTasks } from '../utils/mappingTasks';

export default function TodoList() {
  
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctor Appointment', completed: true },
    { id: 2, text: 'Meeting at School', completed: false }
  ]);
  const [text, setText] = useState('');
  
  function addTask() {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText('');
  }
  
  function deleteTask(id: any) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  
  function toggleCompleted(id: any) {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  // useEffect(() => {
  //   getAllTask()
  //   .then((data) => {
  //     const mappingTaks = clearInformationTasks(data.data)
  //     console.log(mappingTaks);
  //     setTasks(mappingTaks)
  //   })
  //   .catch(e => console.log(e))
  // }, [])
  
  return (
    <View>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New Task"
      />
      <Button title="Add" onPress={addTask} />
    </View>
  );
}