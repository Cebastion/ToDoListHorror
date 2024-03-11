import { useState } from 'react'

const EditTask = () => {
    const [EditTask, SetEditTask] = useState()

    return(
        <>
        <div className="blur"></div>
        <div className="block__content">
            <div className="content__edit">
                // Task Edit
            </div>
        </div>
        </>
    )
}

export { EditTask }