'use client';

import React, { useState } from 'react';
import { TextInput, Button, Group } from '@mantine/core';
import { useTodos } from '../context/TodoContext';

export function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group>
        <TextInput
          placeholder="Add a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ flex: 1 }}
        />
        <Button type="submit">Add</Button>
      </Group>
    </form>
  );
} 