import React from 'react'
import { types } from 'mobx-state-tree'

import button from './button.component'
const { CountButton, TextButton } = button

export default types
  .model({
    text: types.string,
    done: false,
    count: 0
  })
  .actions(todo => ({
    toggle() {
      todo.done = !todo.done
      todo.count++
    }
  }))
  .views(todo => ({
    get doneCheck() {
      return todo.done ? '✔️' : '❌'
    },
    get donePlay() {
      return todo.done ? '⏸️' : '▶️'
    },
    get textButtonText() {
      return `${todo.text} | play = ${todo.doneCheck}`
    },
    get countButtonText() {
      return `${todo.donePlay} ${todo.count}`
    },
    get TextButton() {
      // wrap store into the returned styled component via closure
      return () => <TextButton todo={todo} />
    },
    get CountButton() {
      // getter can use same name as the component
      return () => <CountButton todo={todo} /> // component name
    }
  }))
