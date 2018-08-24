import { observer } from 'mobx-react'

export default func => {
  Object.keys(func).forEach(key => {
    func[key] = observer(func[key])
  })
  return func
}
