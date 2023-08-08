import { IdentificationCard, Lock } from '@phosphor-icons/react';
import * as Form from '@radix-ui/react-form';
import React from 'react'
type Props = {
    handleRegisterShowing : () => void
}

export default function RegisterPainel({handleRegisterShowing}: Props) {

    const [userInput, setUserInput] = React.useState('')

  return (
    <div className="w-[336px] h-[416px] rounded-l-xl font-sans flex flex-col items-center p-3 px-6 col-start-2 row-start-1">
        <div className="text-4xl font-bold mt-4">Registre-se</div>
        <Form.Root className='w-full mt-8 flex flex-col'>
            <Form.Field name='user'>
                <div>
                    <div className='flex items-baseline justify-between'>
                        <Form.Label className='font-medium leading-4 mb-1' > Usuario </Form.Label>
                        <Form.Message className='font-medium leading-4' match="valueMissing"> Adicione um usuario </Form.Message>
                    </div>
                    <div className=' bg-background rounded-md h-12'>
                        
                    <div className=' bg-background rounded-md h-12 relative z-0'>
                        <IdentificationCard size={24} className='text-primary absolute left-3 top-3' weight='bold' />
                        <Form.Control type='text' className='w-full h-12 bg-transparent appearance-none outline-none p-2 rounded-lg border-2 border-background focus:border-primary pl-12 caret-primary' />
                    </div>
                    </div>
                </div>
            </Form.Field>

            <Form.Field name='senha' className='mt-4'>
                <div>
                    <div className='flex items-baseline justify-between'>
                        <Form.Label className='font-medium leading-4 mb-1' > Senha </Form.Label>
                        <Form.Message className='font-medium leading-4' match="valueMissing"> Adicione uma senha </Form.Message>
                    </div>
                    <div className=' bg-background rounded-md h-12 relative z-0'>
                        <Lock size={24} className='text-primary absolute left-3 top-3' weight='bold' />
                        <Form.Control type='password' className='w-full h-12 bg-transparent appearance-none outline-none p-2 rounded-lg border-2 border-background focus:border-primary pl-12 caret-primary' />
                        
                    </div>
                </div>
            </Form.Field>


            <Form.Submit className='mt-10'>
                <button className="bg-secondary/80  transition-all duration-300 ease-in-out border-2 border-accent/70 hover:bg-secondary/90 hover:border-accent hover:scale-110 h-20 w-52 rounded-full text-text">
                    Registre-se
                </button>
            </Form.Submit>
        </Form.Root>
        <div className='text-sm mt-2 font-thin hover:text-primary hover:font-semibold' onClick={handleRegisterShowing}> Já possui uma conta? Faça login aqui </div>
    </div>
    

  )
}