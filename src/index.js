import React, { Fragment } from 'react'
import { render } from 'react-dom'

import Todo from './todo.store'

const todo = Todo.create({
  text: 'mobx-state-tree & styled-components'
})

const todo2 = Todo.create({
  text: 'new, unrelated store'
})

// components can be unwrapped to reduce visual clutter
const { CountButton, TextButton } = todo

const App = () => (
  <Fragment>
    <p>mobx-styled-observers = mobx-state-tree + styled-components as views</p>
    <h3>CountButton</h3>
    <CountButton />
    <h3>todo2.CountButton</h3>
    <todo2.CountButton />
    <h3>TextButton</h3>
    <TextButton />
    <h3>todo2.TextButton</h3>
    <todo2.TextButton />
  </Fragment>
)

render(<App />, document.getElementById('root'))
