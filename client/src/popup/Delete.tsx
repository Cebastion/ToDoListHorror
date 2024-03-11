import { useState } from 'react'

const DeleteTask = () => {
    const [Task, SetTask] = useState()

    return(
        <>
        <div className="blur"></div>
        <div className="block__content">
            <div className="content__delete">
                // Task Delete
            </div>
        </div>
        </>
    )
}

export { DeleteTask }