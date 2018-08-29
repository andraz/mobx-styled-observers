import React from 'react'
import Button from './button'
import { types } from 'mobx-state-tree'
import { observers } from './util'

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
    }
  }))
  .views(todo =>
    observers({
      TextButton: () => (
        <Button onClick={todo.toggle}>{todo.textButtonText}</Button>
      ),
      CountButton: () => (
        <Button onClick={todo.toggle}>{todo.countButtonText}</Button>
      )
    })
  )
