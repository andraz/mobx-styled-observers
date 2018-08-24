import React, { Fragment } from 'react'
import { render } from 'react-dom'

import Todo from './todo.store'

const todo = Todo.create({
  text: 'mobx-state-tree & styled-components'
})

const { CountButton, TextButton } = todo

const App = () => (
  <Fragment>
    <p>mobx-styled-observers = mobx-state-tree + styled-components as views</p>
    <h3>CountButton</h3>
    <CountButton />
    <h3>TextButton</h3>
    <TextButton />
  </Fragment>
)

render(<App />, document.getElementById('root'))
