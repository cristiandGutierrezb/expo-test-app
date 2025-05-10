
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoList from '../TodoList';

describe('TodoList component', () => {
  it('renders initial tasks', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('Doctor Appointment')).toBeTruthy();
    expect(getByText('Meeting at School')).toBeTruthy();
  });

  it('adds a new task when Add is pressed', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText('New Task');

    fireEvent.changeText(input, 'Buy groceries');
    fireEvent.press(getByText('Add'));

    expect(getByText('Buy groceries')).toBeTruthy();
  });

  it('clears input after adding task', () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);
    const input = getByPlaceholderText('New Task');

    fireEvent.changeText(input, 'Clean room');
    fireEvent.press(getByText('Add'));

    expect(input.props.value).toBe('');
  });

});
