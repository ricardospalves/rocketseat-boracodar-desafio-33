import classNames from 'classnames'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

type NativePropsToOmit = 'type'

type NativeProps = ComponentPropsWithoutRef<'input'>

type OwnProps = {
  error?: boolean
}

export type UsernameFieldTextProps = OwnProps &
  Omit<NativeProps, NativePropsToOmit>

export const UsernameFieldText = forwardRef<
  HTMLInputElement,
  UsernameFieldTextProps
>(({ error, className, ...props }, ref) => {
  return (
    <input
      type="text"
      className={classNames([
        'block w-full h-12 px-4 bg-white text-black border border-transparent focus:outline-none focus:ring ring-purple-700',
        error ? 'border-red-400' : 'focus:border-purple-700',
        className,
      ])}
      ref={ref}
      placeholder="Exemplo: fulanodetal"
      {...props}
    />
  )
})

UsernameFieldText.displayName = 'UsernameFieldText'
