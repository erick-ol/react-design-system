import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps { }

export const Checkbox: React.FC<CheckboxProps> = ({ }) => {

  return (
    <CheckboxPrimitive.Root
      className="w-6 h-6 p[2px] rounded bg-gray-800 flex items-center justify-center"
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
