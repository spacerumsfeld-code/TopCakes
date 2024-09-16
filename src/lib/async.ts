const deferredTasks: Promise<any>[] = []

export const defer = (tasks: Promise<any>[]): void => {
    for (const task of tasks) {
        deferredTasks.push(task)
    }
}

export const handleDeferredTasks = async () => {
    const results = await Promise.allSettled(deferredTasks)

    for (const result of results) {
        if (result.status === 'rejected') {
            console.error(`Deferred task rejected: ${result.reason}`)
        }
    }

    return results
}
