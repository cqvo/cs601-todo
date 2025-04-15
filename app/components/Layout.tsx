'use client';

import React from 'react';
import { Container, Title, Paper } from '@mantine/core';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container size="sm" py="xl">
      <Title order={1} align="center" mb="xl">
        Todo App
      </Title>
      <Paper shadow="sm" p="md" withBorder>
        {children}
      </Paper>
    </Container>
  );
} 