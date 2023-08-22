import classNames from 'classnames'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type AsProp<E extends ElementType> = {
  as: E
}

type ButtonOwnProps<E extends ElementType> = AsProp<E>

type NativeProps<E extends ElementType> = ComponentPropsWithoutRef<E>

type NativePropsWithoutButtonOwnProps<E extends ElementType> = Omit<
  NativeProps<E>,
  keyof ButtonOwnProps<E>
>

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  NativePropsWithoutButtonOwnProps<E>

export const Button = <E extends ElementType>({
  as,
  className,
  children,
  ...props
}: ButtonProps<E>) => {
  const Component: ElementType = as

  return (
    <Component
      className={classNames(
        'flex items-center justify-center w-full h-12 text-sm uppercase font-bold text-white bg-purple-700 hover:bg-purple-950 focus-visible:bg-purple-950 transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
