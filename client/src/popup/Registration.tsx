import { useState } from 'react'

const Registration = () => {
    const [Active, SetActive] = useState(false)
    
    return(
        <>
        <div className="blur"></div>
        <div className="block__content">
            <div className="content__registration">
                {Active ? <>Log in</> : <>Sign in</>}
            </div>
        </div>
        </>
    )
}

export { Registration }