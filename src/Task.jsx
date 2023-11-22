import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const Task = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (!task) {
      return alert("Enter a Task");
    }
    setTaskList([...taskList, { task, id: Math.random().toString() }]);
    alert("Task Added");
    setTask("");
  };

  const handleDelete = (id) => {
    setTaskList((currentList) => currentList.filter((t) => t.id !== id));
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setTask}
          value={task}
          style={styles.inputBox}
          placeholder="Add a Task"
        />
        <Button onPress={handleAddTask} title="Add Task" />
      </View>
      <View>
        <Text style={styles.border}></Text>
        {taskList.length > 0 ? (
          <Text style={styles.textTitle}>Your Tasks</Text>
        ) : (
          <Text style={styles.textTitle}>No Tasks</Text>
        )}
        <View>
          <FlatList
            data={taskList}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  android_ripple={{ color: "gray" }}
                  onPress={() => handleDelete(item.id)}
                >
                  <Text style={styles.taskItem}>
                    {index + 1}. {item.task}
                  </Text>
                </Pressable>
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          />

          {/* {taskList?.map((taskItem, index) => (
              <Text style={styles.taskItem} key={index}>
                {taskItem}
              </Text>
            ))} */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 15,
  },
  textTitle: {
    marginTop: 10,
    color: "rebeccapurple",
    alignSelf: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
  border: {
    borderBottomWidth: 1,
    color: "#cccccc",
  },
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rebeccapurple",
    color: "#fff",
    fontSize: 20,
  },
});

export default Task;
