import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim()) {
      setList([...list, item]);
      setItem("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My List of Item</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter something..."
          value={item}
          onChangeText={setItem}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button title="ADD" onPress={addItem} />
        </View>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.subHeader}>Items</Text>
        {list.length === 0 ? (
          <Text style={styles.emptyText}>What you gonna add?!</Text>
        ) : (
          <FlatList
            data={list}
            renderItem={({ item }) => <Text style={styles.listItem}>• {item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#1e1e2e",  
  padding: 20,
  justifyContent: "flex-start",
},
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
    color: "white"
  },

inputContainer: {
  backgroundColor: "#ffffff",
  padding: 15,
  borderRadius: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
  marginBottom: 20,
},
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ffb86c"
  },
  listContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  emptyText: {
    color: "#666",
    fontStyle: "italic",
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
  },
});
