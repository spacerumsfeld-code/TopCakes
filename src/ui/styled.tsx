import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import React, { ReactNode } from 'react'

class Styled {
    public cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs))
    }

    div<T extends object = {}>(
        defaultClassName?: string,
        conditionalStyles?: (props: T) => ClassValue,
    ) {
        const Component = ({
            children,
            ...props
        }: T & { children?: ReactNode }) => {
            const finalClassName = this.cn(
                defaultClassName,
                conditionalStyles ? conditionalStyles(props as T) : null,
            )
            return (
                <div className={finalClassName} {...props}>
                    {children}
                </div>
            )
        }

        return React.memo(Component) as unknown as React.FC<
            T & { children?: ReactNode }
        >
    }
}

export const styled = new Styled()
