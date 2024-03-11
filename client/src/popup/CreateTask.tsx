import { useState } from 'react'

const CreateTask = () => {
    const [Task, SetTask] = useState()

    return(
        <>
        <div className="blur"></div>
        <div className="block__content">
            <div className="content__create">
                // Task Creat
            </div>
        </div>
        </>
    )
}

export { CreateTask }