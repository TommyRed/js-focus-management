import React from 'react'

// TODO exchane for the Redux
export const FocusContext = React.createContext(null)
export const FocusChangeContext = React.createContext(() => {})

const FocusAwareContainer = ({ children }) => {
    // TODO exchane for the Redux
    const [focusedElement, setFocusedElement] = React.useState(null)

    return (
        <FocusContext.Provider value={focusedElement} >
            <FocusChangeContext.Provider value={setFocusedElement}>
                {children}
            </FocusChangeContext.Provider>
        </FocusContext.Provider>
    )
}

export default FocusAwareContainer