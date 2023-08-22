import classNames from 'classnames'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { SiGithub as GitHubIcon } from 'react-icons/si'

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
    <div className="relative">
      <GitHubIcon
        className="block w-5 h-5 my-auto absolute inset-y-0 left-2 fill-black"
        aria-hidden={true}
      />

      <input
        type="text"
        className={classNames([
          'block w-full h-12 pl-9 pr-4 bg-white text-black border border-transparent focus:outline-none focus:ring ring-purple-700',
          error ? 'border-red-400' : 'focus:border-purple-700',
          className,
        ])}
        ref={ref}
        placeholder="Exemplo: fulanodetal"
        {...props}
      />
    </div>
  )
})

UsernameFieldText.displayName = 'UsernameFieldText'
