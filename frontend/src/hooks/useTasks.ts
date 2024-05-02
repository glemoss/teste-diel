import { useEffect, useState } from "react";
import { Task } from "../@types";

const SERVER_URL = "http://127.0.0.1:3001";

export const useTaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const request = async () => await fetchTasks();
        request();
    }, []);

    const fetchTasks = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${SERVER_URL}/tasks`);
            if (!response.ok) {
                throw new Error("Failed to fetch tasks");
            }
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const addTask = async (newTask: Omit<Task, "id">) => {
        try {
            const response = await fetch(`${SERVER_URL}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask),
            });
            if (!response.ok) {
                throw new Error("Failed to add task");
            }
            await fetchTasks();
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    const updateTask = async (updatedTask: Task) => {
        try {
            const response = await fetch(`${SERVER_URL}/tasks/${updatedTask.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedTask),
            });
            if (!response.ok) {
                throw new Error("Failed to update task");
            }
            await fetchTasks();
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };

    const deleteTask = async (id: string) => {
        try {
            const response = await fetch(`${SERVER_URL}/tasks/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete task");
            }
            await fetchTasks();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const filterTasksByName = async (title: string) => {
        try {
            const response = await fetch(`${SERVER_URL}/tasks?title=${title}`);
            if (!response.ok) {
                setTasks([]);
            }
            const data: Task[] = await response.json();
            setTasks(data);
        } catch (error) {
            console.error('Erro ao filtrar tarefas:', error);
        }
    };

    return {
        tasks,
        isLoading,
        addTask,
        updateTask,
        deleteTask,
        filterTasksByName,
    };
};

export default useTaskList;
