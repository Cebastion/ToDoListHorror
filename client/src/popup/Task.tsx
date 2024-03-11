import { useState } from 'react'

const Task = () => {
    const [Task, SetTask] = useState()

    return(
        <>
        <div className="blur"></div>
        <div className="block__content">
            <div className="content__taskw">
                // Task
            </div>
        </div>
        </>
    )
}

export { Task }