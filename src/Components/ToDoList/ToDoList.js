import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  addTask,
  deleteTask,
  completeTask,
  editTask,
} from '../../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoList = ({tasks, addTask, deleteTask, completeTask, editTask}) => {
  const [taskInput, setTaskInput] = useState('');
  const [inputError, setInputError] = useState('');
  const [editTaskId, setEditTaskId] = useState(null); // Track the currently edited task
  const [editedText, setEditedText] = useState({}); // Track edited text for each task

  // useEffect(() => {
  //   loadTasks(setTasks);
  // }, []);

  // useEffect(() => {
  //   saveTasks();
  // }, [tasks]);

  const loadTasks = async setTasks => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      addTask({id: Date.now(), text: taskInput});
      setTaskInput('');
      setInputError('');
    } else {
      setInputError('Please Enter Task');
    }
  };

  const handleDeleteTask = taskId => {
    deleteTask(taskId);
  };

  const handleCompleteTask = taskId => {
    completeTask(taskId);
  };

  const handleEditTask = taskId => {
    setEditTaskId(taskId);
    setEditedText({
      ...editedText,
      [taskId]: tasks.find(task => task.id === taskId).text,
    });
  };

  const handleUpdateTask = () => {
    editTask({id: editTaskId, text: editedText[editTaskId]});
    setEditTaskId(null);
    setEditedText({});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={taskInput}
        onChangeText={text => {
          setTaskInput(text);
          setInputError('');
        }}
      />
      {inputError !== '' && <Text style={styles.errorText}>{inputError}</Text>}
      <View style={styles.buttonContainer}>
        <Button title="Add Task" onPress={handleAddTask} />
        <Button title="Clear" onPress={() => setTaskInput('')} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <View style={styles.taskItem}>
            {editTaskId === item.id ? (
              <TextInput
                style={styles.taskTextInput}
                value={editedText[item.id]}
                onChangeText={text =>
                  setEditedText({...editedText, [item.id]: text})
                }
                onBlur={() => handleUpdateTask()}
              />
            ) : (
              <Text
                style={[styles.taskText, item.completed && styles.completed]}>
                {item.text}
              </Text>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleCompleteTask(item.id)}>
                <Text>Complete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleDeleteTask(item.id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleEditTask(item.id)}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
  },
  taskTextInput: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
});
const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  completeTask,
  editTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
