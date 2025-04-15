'use client';

import React from 'react';
import { Stack } from '@mantine/core';
import { TodoItem } from './TodoItem';
import { useTodos } from '../context/TodoContext';
import type { Todo } from '@types/todo';
import { useReducedMotion } from '@mantine/hooks';

export function TodoList() {
  const { todos, toggleTodo, deleteTodo, editTodo } = useTodos();
  const reduceMotion = useReducedMotion();

  return (
    <Stack>
      {todos.map((todo: Todo) => (
        <div
          key={todo.id}
          style={{
            transition: reduceMotion ? 'none' : 'all 0.2s ease',
            animation: 'slideIn 0.2s ease'
          }}
        >
          <TodoItem
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        div {
          opacity: 1;
          transform: translateX(0);
        }

        div:hover {
          transform: translateX(5px);
        }
      `}</style>
    </Stack>
  );
} 