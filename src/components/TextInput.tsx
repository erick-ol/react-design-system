import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => (
  <div
    className={
      clsx('flex h-12 items-center gap-3 py-4 px-3 w-full bg-gray-800 rounded focus-within:ring-2 ring-cyan-300')
    }
  >
    {children}
  </div>
)

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode;
}


const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => (
  <Slot className="w-6 h-6 text-gray-400">
    {children}
  </Slot>
)

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

const TextInputInput: React.FC<TextInputInputProps> = (props) => {
  return (
    <input
      {...props}
      className={
        clsx('bg-transparent flex-1 text-gray-100 outline-none text-xs placeholder:text-gray-400')
      }
    />
  )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}
