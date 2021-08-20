import React from 'react'
import { FocusChangeContext } from './FocusAwareContainer'

const FocusChangingButton = () => {
    const ref = React.useRef(null)

    // TODO exchange for Redux state manipulation.
    const changeFocusedElement = React.useContext(FocusChangeContext)

    const handleClick = React.useCallback(() => {
        if(ref) {
            changeFocusedElement(ref.current)
        }
    }, [])

    return (
        <button ref={ref} onClick={handleClick}>Change focus</button>
    )
}

export default FocusChangingButton