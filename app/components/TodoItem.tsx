'use client';

import React, { useState, useCallback } from 'react';
import { Checkbox, TextInput, ActionIcon, Group, Paper } from '@mantine/core';
import { IconTrash, IconEdit, IconCheck, IconX } from '@tabler/icons-react';
import { Todo } from '../../types/todo';
import { useReducedMotion } from '@mantine/hooks';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [isDeleting, setIsDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleDelete = useCallback(() => {
    setIsDeleting(true);
    // Wait for animation to complete before actual deletion
    setTimeout(() => {
      onDelete(todo.id);
    }, 200);
  }, [todo.id, onDelete]);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <Paper 
      shadow="xs" 
      p="md" 
      withBorder 
      style={{
        marginBottom: '1rem',
        transition: reduceMotion ? 'none' : 'all 0.2s ease',
        opacity: isDeleting ? 0 : 1,
        transform: isDeleting ? 'translateX(-100%)' : 'translateX(0)',
      }}
    >
      <Group justify="space-between" wrap="nowrap">
        {isEditing ? (
          <>
            <TextInput
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
              style={{ flex: 1 }}
              autoFocus
            />
            <Group gap="xs">
              <ActionIcon variant="filled" color="green" onClick={handleEdit}>
                <IconCheck size={16} />
              </ActionIcon>
              <ActionIcon variant="filled" color="red" onClick={handleCancel}>
                <IconX size={16} />
              </ActionIcon>
            </Group>
          </>
        ) : (
          <>
            <Group>
              <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                label={todo.text}
                styles={{
                  label: {
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'gray' : 'inherit',
                    transition: 'all 0.2s ease'
                  }
                }}
              />
            </Group>
            <Group gap="xs">
              <ActionIcon variant="filled" color="blue" onClick={() => setIsEditing(true)}>
                <IconEdit size={16} />
              </ActionIcon>
              <ActionIcon variant="filled" color="red" onClick={handleDelete}>
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          </>
        )}
      </Group>
    </Paper>
  );
} 