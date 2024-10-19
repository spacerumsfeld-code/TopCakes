export const handleAsync = async <T>(
    fn: Promise<T>,
): Promise<[T | null, null | Error]> => {
    try {
        const result = await fn
        return [result, null]
    } catch (error) {
        return [null, error as Error]
    }
}

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
