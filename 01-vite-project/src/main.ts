import './style.css'
import { setupCounter } from './counter.ts'
import './topics/01-basic-types'
import './topics/02-object-interface'
import './topics/03-functions'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>
      TRAP
    </h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
