import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TodoItem({ task, deleteTask, toggleCompleted }: any) {
  return (
    <SafeAreaView>
      <View style={styles.todoItem}>
        <View>
          <BouncyCheckbox
            isChecked={task.completed}
            onPress={() => toggleCompleted(task.id)} 
          />
        </View>
        <Text style={[styles.todoItemText, task.completed && styles.completed]}>
          {task.text}
        </Text>
        <Pressable
          style={styles.deleteButton}
          onPress={() => deleteTask(task.id)}
        >
          <Text style={{ color: '#000' }}>Delete</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  todoItemText: {
    flex: 1,
    marginRight: 8,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
    textAlign: 'center',
  }
});