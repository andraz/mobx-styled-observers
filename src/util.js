import { observer } from 'mobx-react'

export const observers = func => {
  Object.keys(func).forEach(key => {
    func[key] = observer(func[key])
  })
  return func
}
