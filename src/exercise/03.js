// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://reactjs.org/docs/context.html#reactcreatecontext

const ToggleContext = React.createContext();
ToggleContext.displayName = 'ToggleContext'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return <ToggleContext.Provider value={{on, toggle}}>
    {children}
  </ToggleContext.Provider>
}

const useToggle = () => {
  const context = React.useContext(ToggleContext);

  if (!context) {
    throw Error("useToggle must be used within a <Toggle />");
  }

  return context;
}

// 📜 https://reactjs.org/docs/hooks-reference.html#usecontext
function ToggleOn({children}) {
  const { on } = useToggle();
  return on ? children : null
}

// 🐨 do the same thing to this that you did to the ToggleOn component
function ToggleOff({children}) {
  const { on } = useToggle();
  return on ? null : children
}

// 🐨 get `on` and `toggle` from the ToggleContext with `useContext`
function ToggleButton({props}) {
  const toggleContext = useToggle();

  const {on, toggle} = toggleContext;

  return <Switch on={on} onClick={toggle} {...props} />
}

// function App() {
//   return (
//     <div>
//       <Toggle>
//         <ToggleOn>The button is on</ToggleOn>
//         <ToggleOff>The button is off</ToggleOff>
//         <div>
//           <ToggleButton />
//         </div>
//       </Toggle>
//     </div>
//   )
// }

const App = () => <ToggleButton />

export default App

/*
eslint
  no-unused-vars: "off",
*/
