import React from 'react'
import { types } from 'mobx-state-tree'

import { CountButton, TextButton } from '../component/button'
import { TextInput } from '../component/input'

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
    },
    onInputChange(e) {
      todo.text = e.target.value
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
      // pass store into the returned styled component
      return () => <TextButton todo={todo} />
    },
    get CountButton() {
      // getter uses same name as the component
      return () => <CountButton todo={todo} />
    },
    get TextInput() {
      return () => <TextInput todo={todo} />
    },
    get All() {
      // render generic UI by rendering a single JSX element
      return () => (
        <div style={{ width: '500px' }}>
          <todo.TextInput />
          <todo.CountButton />
          <todo.TextButton />
        </div>
      )
    }
  }))
