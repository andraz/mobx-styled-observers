import React from 'react'
import Button from './button.style'

export const TextButton = ({ todo }) => (
  <Button onClick={todo.toggle}>{todo.textButtonText}</Button>
)

export const CountButton = ({ todo }) => (
  <Button onClick={todo.toggle}>{todo.countButtonText}</Button>
)
