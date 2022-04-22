// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'
import * as constants from 'constants'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, (child) => {
    // Safety for standard HTML elements
    if (typeof(child.type) === 'string') {
      return child;
    }

    // How to restrict to certain elements
    if (allowedTypes.includes(child.type)) {
      return React.cloneElement(child, { on, toggle});
    }

    return child;
  })
}

const ToggleOn = ({on, children}) => on ? children : null;
const ToggleOff = ({on, children}) => on ? null : children;
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />;

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton];

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div>Hello</div>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
