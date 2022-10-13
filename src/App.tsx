import { EnvelopeSimple, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div
      className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100"
    >
      <header
        className='flex flex-col items-center justify-center'
      >
        <Logo />
        <Heading size='lg' className='mt-4 mb-1'>
          Ignite Lab
        </Heading>
        <Text
          size='lg'
          className='text-gray-400'
        >
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        className='flex flex-col items-stretch mt-10 w-full max-w-sm gap-4'
      >
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text size='lg' className='font-semibold'>
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text size='lg' className='font-semibold'>
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>

      <footer className='mt-8 flex flex-col items-center gap-4'>
        <Text asChild size='md' className='text-gray-400 hover:text-gray-200'>
          <a href="#" className='underline'>
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size='md' className='text-gray-400 hover:text-gray-200'>
          <a href="#" className='underline'>
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}

export { App }
