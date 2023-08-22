import classNames from 'classnames'
import { ComponentPropsWithoutRef, ElementType } from 'react'
import { AiOutlineLoading3Quarters as LoadingIcon } from 'react-icons/ai'

type AsProp<E extends ElementType> = {
  as: E
}

type ButtonOwnProps<E extends ElementType> = AsProp<E> & {
  loading?: boolean
}

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
  loading,
  disabled,
  ...props
}: ButtonProps<E>) => {
  const Component: ElementType = as
  const isDisabled = disabled || loading

  return (
    <Component
      className={classNames(
        'flex items-center justify-center w-full h-12 text-sm uppercase font-bold text-white bg-purple-700 hover:bg-purple-950 focus-visible:bg-purple-950 transition-colors',
        isDisabled &&
          'opacity-70 select-none cursor-not-allowed pointer-events-none',
        className,
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <LoadingIcon
          className="block w-8 h-8 fill-current animate-spin"
          aria-hidden={true}
        />
      ) : (
        children
      )}
    </Component>
  )
}
