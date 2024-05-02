"use client";
import React, { useState } from "react";
import { useTaskList } from "../hooks";
import { Task } from "../@types";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const { tasks, addTask, deleteTask, updateTask, filterTasksByName } = useTaskList();
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [task, setTask] = useState<Omit<Task, "id">>({
    title: "",
    description: "",
    datetime: "",
    duration: "",
  });

  const [filter, setFilter] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterTasksByName(filter);
  };

  const [errors, setErrors] = useState<
    Record<keyof Omit<Task, "id" | "completed">, string>
  >({
    title: "",
    description: "",
    datetime: "",
    duration: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    let errors: Omit<Task, "id" | "completed"> = {
      title: "",
      description: "",
      datetime: "",
      duration: "",
    };

    let isValid = true;
    if (!task.title) {
      errors.title = "Title is a required field";
      isValid = false;
    }
    if (!task.description) {
      errors.description = "Description is a required field";
      isValid = false;
    }
    if (!task.datetime) {
      errors.datetime = "Date is a required field";
      isValid = false;
    }
    if (!task.duration) {
      errors.duration = "Duration is a required field";
      isValid = false;
    }
    setErrors(errors);

    if (!isValid) return;

    addTask(task);
    setTask({
      title: "",
      description: "",
      datetime: "",
      duration: "",
    });
  };

  const startEditingTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editingTask) {
      updateTask(editingTask);
      setEditingTask(null);
    }
  };

  return (
    <div className="text-3xl">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-slate-100">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Criar nova tarefa
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="title"
                className="leading-7 text-sm text-gray-600"
              >
                Título
              </label>
              <input
                onChange={onChange}
                value={task.title}
                type="text"
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autoComplete="off"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="desc" className="leading-7 text-sm text-gray-600">
                Descrição
              </label>
              <input
                onChange={onChange}
                value={task.description}
                type="text"
                id="description"
                name="description"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autoComplete="off"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="datetime"
                className="leading-7 text-sm text-gray-600"
              >
                Data
              </label>
              <input
                onChange={onChange}
                value={task.datetime}
                type="datetime-local"
                id="datetime"
                name="datetime"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autoComplete="off"
              />
              {errors.datetime && (
                <p className="text-red-500 text-sm mt-1">{errors.datetime}</p>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="duration"
                className="leading-7 text-sm text-gray-600"
              >
                Duração
              </label>
              <input
                onChange={onChange}
                value={task.duration}
                type="number"
                id="duration"
                name="duration"
                placeholder="30 minutos"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                autoComplete="off"
              />
              {errors.duration && (
                <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
              )}
            </div>
            <button
              onClick={handleAddTask}
              className="text-white bg-green-800 border-0 py-2 px-8 focus:outline-none w-fit hover:bg-green-600 rounded text-lg"
            >
              Add Task
            </button>
          </div>
        </div>
        <form onSubmit={handleFilterSubmit} className="flex items-center">
          <input
            type="text"
            placeholder="Buscar por título"
            value={filter}
            onChange={handleFilterChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button type="submit" className="ml-2 bg-green-800 text-white px-4 py-2 rounded h-12 flex items-center">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 bg-slate-100">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Tasks
          </h2>
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start mb-4">
              <div className="border-b border-gray-300 mb-4 pb-4 w-1/2">
                <p className="text-lg font-medium">{task.title}</p>
                <p className="text-sm text-gray-500 mb-2">{task.description}</p>
                <p className="text-xs text-gray-400 mb-2">{task.datetime}</p>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 text-xs focus:outline-none"
                >
                  <FontAwesomeIcon icon={faTrash} className="mr-1" size="lg" />
                </button>
                <button
                  onClick={() => startEditingTask(task)}
                  className="edit-button text-gray-500 text-xs ml-2"
                >
                  <FontAwesomeIcon icon={faEdit} className="mr-1" size="lg" />
                </button>
              </div>
              {editingTask && editingTask.id === task.id && (
                <div className="w-1/2 pl-4">
                  <form onSubmit={handleUpdateTask} className="space-y-4">
                    <div className="flex flex-col">
                      <label htmlFor={`editTitle-${task.id}`} className="text-sm font-medium text-gray-600">Título:</label>
                      <input
                        type="text"
                        id={`editTitle-${task.id}`}
                        value={editingTask.title}
                        onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                        className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor={`editDescription-${task.id}`} className="text-sm font-medium text-gray-600">Descrição:</label>
                      <input
                        type="text"
                        id={`editDescription-${task.id}`}
                        value={editingTask.description}
                        onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                        className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor={`editDatetime-${task.id}`} className="text-sm font-medium text-gray-600">Data:</label>
                      <input
                        type="datetime-local"
                        id={`editDatetime-${task.id}`}
                        value={editingTask.datetime}
                        onChange={(e) => setEditingTask({ ...editingTask, datetime: e.target.value })}
                        className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor={`editDuration-${task.id}`} className="text-sm font-medium text-gray-600">Duração:</label>
                      <input
                        type="text"
                        id={`editDuration-${task.id}`}
                        value={editingTask.duration}
                        onChange={(e) => setEditingTask({ ...editingTask, duration: e.target.value })}
                        className="w-full bg-white rounded border border-gray-300 focus:border-green-800 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <button type="submit" className="text-white bg-green-800 border-0 py-2 px-8 focus:outline-none w-fit hover:bg-green-600 rounded text-lg">Atualizar Tarefa</button>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
