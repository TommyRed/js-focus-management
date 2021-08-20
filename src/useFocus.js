import React from 'react'
import { FocusContext, FocusChangeContext } from './FocusAwareContainer'

export const useFocusAwareness = (ref) => { 
    // TODO exchange for Redux state manipulation.
    const changeFocusedElement = React.useContext(FocusChangeContext)

    React.useEffect(() => {
        const listener = ({ target }) => {
            changeFocusedElement(target)
        };

        if (ref) {
            ref.current.addEventListener("click", listener);
        }
    }, [ref]);
}

export const useFocus = (ref) => {
    // TODO exchange for Redux state manipulation.
    const focusedElement = React.useContext(FocusContext)

    // TODO optional chaining
    const isFocusedExact = ref && focusedElement && ref.current === focusedElement

    const isFocused = React.useMemo(() => {
        if (ref && focusedElement) {
            let focusedParent = focusedElement

            while (focusedParent.parentElement != null) {
                if (focusedParent === ref.current) {
                    return true
                }

                focusedParent = focusedParent.parentElement
            }
        }

        return false
    }, [ref, focusedElement])

    return {
        ref,
        isFocused,
        isFocusedExact,
    }
}