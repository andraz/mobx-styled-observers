import React from 'react'
import Button from './button.style'
import { observers } from './util'

const TextButton = ({ todo }) => (
  <Button onClick={todo.toggle}>{todo.textButtonText}</Button>
)

const CountButton = ({ todo }) => (
  <Button onClick={todo.toggle}>{todo.countButtonText}</Button>
)

export default observers({ TextButton, CountButton })
