import React from "react";
import FocusAwareComponent from './FocusAwareComponent'
import FocusChangingButton from './FocusChangingButton'
import FocusAwareContainer from './FocusAwareContainer'

export default function App() {
  return (
      <FocusAwareContainer>
        <div className="App">
          <h1>Hello CodeSandbox v.1.0</h1>
          <h2>Start editing to see some magic happen!</h2>
          <FocusChangingButton />
          <input type="text" />
          <hr/>
          <div style={{ display: 'flex'}}>
            <FocusAwareComponent>
              <input type="text" />
            </FocusAwareComponent>
            <FocusAwareComponent>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </FocusAwareComponent>
          </div>
        </div>
      </FocusAwareContainer>
  );
}
