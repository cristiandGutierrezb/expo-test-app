import { render, fireEvent } from "@testing-library/react-native"

import TodoItem from "../TodoItem"

describe('TodoItem testing', () => {
  const task = { id: 0, completed: false, text: "First task"}
  const element = <TodoItem task={task} deleteTask={() => {}} toggleCompleted={() => {}} />

  it('Exist text correctly', () => {
    const { getByText } = render(element)
    // expect(getByText('First task')).toBeTruthy()
    expect(getByText('Delete')).toBeTruthy()
  })

  it('Text on task is correct', () => {
    const { getByTestId } = render(element)
    const taskText = getByTestId('task-text')
    expect(taskText.props.children).toBe('First task');
  })

  it('Text on button delete is correct', () => {
    const { getByTestId } = render(element)
    const deleteButtonText = getByTestId('btn-delete')
    expect(deleteButtonText.props.children).toBe('Delete')
  })

  it('Call deleteTask is correct', () => {
    const mockDeleteTask = jest.fn()
    const { getByTestId } = render(
      <TodoItem task={task} deleteTask={mockDeleteTask} toggleCompleted={() => {}} />
    )

    const delteButton = getByTestId('btn-delete')
    fireEvent.press(delteButton)

    expect(mockDeleteTask).toHaveBeenCalledTimes(1)
  })

  it('Show line-through when complete is true', () => {
    const mockToggleCompleted = jest.fn()
    const updatedTask = { ...task, completed: true };
    const { getByTestId } = render(
      <TodoItem task={updatedTask} deleteTask={() => {}} toggleCompleted={mockToggleCompleted} />
    )

    const textTask = getByTestId('task-text')
    expect(textTask).toHaveStyle({"textDecorationLine": "line-through"})
  })

  it('Delete button is correct', () => {
    const deleteMock = jest.fn()
    const { getByText } = render(
      <TodoItem task={task} deleteTask={deleteMock} toggleCompleted={deleteMock} />
    )
    const buttonDelete = getByText('Delete')
    fireEvent.press(buttonDelete)
    expect(deleteMock).toHaveBeenCalledTimes(1)
  })

})
