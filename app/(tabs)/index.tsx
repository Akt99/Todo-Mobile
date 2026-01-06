import { createHomeStyles } from "@/assets/images/styles/home.styles";
import EmptyState from "@/components/EmptyState";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/** 🔁 IMPORTANT: switched to todos_v2 */
type Todo = Doc<"todos_v2">;

export default function Index() {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const [editingId, setEditingId] = useState<Id<"todos_v2"> | null>(null);
  const [editText, setEditText] = useState("");

  /** 🔁 switched to todos_v2 APIs */
  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const updateTodo = useMutation(api.todos.updateTodo);

  const isLoading = todos === undefined;
  if (isLoading) return <LoadingSpinner />;

  const handleToggleTodo = async (id: Id<"todos_v2">) => {
    await toggleTodo({ id });
  };

  const handleDeleteTodo = async (id: Id<"todos_v2">) => {
    Alert.alert("Delete Todo", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteTodo({ id }) },
    ]);
  };

  const handleEditTodo = (todo: Todo) => {
    setEditingId(todo._id);
    setEditText(todo.text);
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;
    await updateTodo({ id: editingId, text: editText.trim() });
    setEditingId(null);
    setEditText("");
  };
 const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };
  const renderTodoItem = ({ item }: { item: Todo }) => {
    const isEditing = editingId === item._id;

    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={colors.gradients.surface}
          style={homeStyles.todoItem}
        >
          {/* Checkbox */}
          <TouchableOpacity
            style={homeStyles.checkbox}
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={
                item.isCompleted
                  ? colors.gradients.success
                  : colors.gradients.muted
              }
              style={homeStyles.checkboxInner}
            >
              {item.isCompleted && (
                <Ionicons name="checkmark" size={18} color="#fff" />
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Text + Actions */}
          {isEditing ? (
            <View style={homeStyles.editContainer}>
            <TextInput
              style={homeStyles.editInput}
              value={editText}
              onChangeText={setEditText}
              autoFocus
              multiline
              placeholder="Edit your task todo..."
              placeholderTextColor={colors.textMuted}
            />
            <View style={homeStyles.editButtons}>
              <TouchableOpacity onPress={handleSaveEdit} activeOpacity={0.8}>
                <LinearGradient
                  colors={colors.gradients.success}
                  style={homeStyles.editButton}
                >
                  <Ionicons name="checkmark" size={16} color="#fff" />
                  <Text style={homeStyles.editButtonText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCancelEdit}
                activeOpacity={0.8}>
                  <LinearGradient
                  colors={colors.gradients.muted}
                  style={homeStyles.editButton}
                >
                  <Ionicons name="close" size={16} color="#fff" />
                  <Text style={homeStyles.editButtonText}>Cancel</Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
            </View>
          ) : (
            <>
              <Text
                style={[
                  homeStyles.todoText,
                  item.isCompleted && { textDecorationLine: "line-through" },
                ]}
              >
                {item.text}
              </Text>

              {/* 🔥 THIS is the missing part (icons) */}
              <View style={[homeStyles.todoActions, { marginLeft: "auto" }]}>
                <TouchableOpacity onPress={() => handleEditTodo(item)}>
                  <LinearGradient
                    colors={colors.gradients.warning}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name="pencil" size={14} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleDeleteTodo(item._id)}>
                  <LinearGradient
                    colors={colors.gradients.danger}
                    style={homeStyles.actionButton}
                  >
                    <Ionicons name="trash" size={14} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </>
          )}
        </LinearGradient>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <TodoInput />

        <FlatList
          data={todos}
          renderItem={renderTodoItem}
          keyExtractor={(item) => item._id}
          ListEmptyComponent={<EmptyState />}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
