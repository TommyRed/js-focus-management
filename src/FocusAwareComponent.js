import React from 'react'
import { useFocus, useFocusAwareness } from './useFocus'

const additionalStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#efefef',
}

const FocusAwareComponent = ({ children }) => {
    const ref = React.useRef(null)

    const { isFocused } = useFocus(ref)

    useFocusAwareness(ref)

    return (
        <div ref={ref} style={{ opacity: isFocused ? 1 : 0.5, ...additionalStyle }}>
            <p>Test</p>
            {children}
        </div>
    )
};

export default FocusAwareComponent
