import { observer as obs } from 'mobx-react'

const observers = fns => {
  Object.keys(fns).forEach(key => {
    fns[key] = obs(fns[key])
  })
  return fns
}

export default observers
