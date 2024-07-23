import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// export const handleApiResponse = async <T>(response: Response) => {
//     const { data, error } = await response.json()

//     if (error) {
//         throw new Error(error.message)
//     }

//     return data as T['data']
// }

/**
 * An array to store the deferred tasks.
 */
const deferredTasks: Promise<any>[] = []

/**
 * Adds a deferred task to the deferredTasks array.
 * The task is represented as a function returning a promise.
 *
 * @param fn - A function that returns a promise.
 */
export const defer = <T>(fn: () => Promise<T>): void => {
    deferredTasks.push(fn())
}

/**
 * Waits for all deferred tasks to be settled. If any task is rejected, an error is logged.
 */
export const handleDeferredTasks = async () => {
    const results = await Promise.allSettled(deferredTasks)

    for (const result of results) {
        if (result.status === 'rejected') {
            console.error(`Deferred task rejected: ${result.reason}`)
        }
    }
}
