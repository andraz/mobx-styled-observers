import React from 'react'
import Input from './input.style'
import { observer } from 'mobx-react'

export const TextInput = observer(({ todo }) => (
  <Input onChange={todo.onInputChange} value={todo.text} />
))
