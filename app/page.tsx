'use client';

import React from 'react';
import { MantineProvider } from '@mantine/core';
import { TodoProvider } from './context/TodoContext';
import { Layout } from './components/Layout';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

export default function Home() {
  return (
    <MantineProvider>
      <TodoProvider>
        <Layout>
          <TodoForm />
          <TodoList />
        </Layout>
      </TodoProvider>
    </MantineProvider>
  );
} 