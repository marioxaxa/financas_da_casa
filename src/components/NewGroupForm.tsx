import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, PlusCircle, X } from '@phosphor-icons/react';

type Props = {}

export default function NewGroupForm({}: Props) {

    const friends = ['pera', 'uva', 'maça', 'salasdia misa', 'tudo', 'aaaaaaaa', 'ccccccc' , 'djdj']


  return (
    <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className='absolute right-16 bottom-16 w-14 h-14 rounded-full flex justify-center items-center border-secondary/80 border-2 bg-secondary/80 transition-all duration-300 ease-in-out group hover:bg-secondary hover:border-primary hover:scale-110 z-10'>
                    <PlusCircle size={48} weight='bold' className='text-primary/80 group-hover:text-primary' />
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className='bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0'/>
            <Dialog.Content className=' data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none '>
                <div className='flex justify-between items-center'>
                    <Dialog.Title className='text-text m-0 text-[32px] font-medium'> Novo grupo</Dialog.Title>
                    <Dialog.Close asChild>
                        <X size={24} weight='bold' className='text-primary hover:text-primary/75 transition ease-in-out delay-150' />
                    </Dialog.Close>
                </div>
                <Dialog.Description className='text-text font-thin'> 
                    Adicione um novo grupo para organizar suas finanças 
                </Dialog.Description>

                <form className='grid grid-cols-2 grid-rows-3 gap-x-4 mt-2'>
                    <div className='row-span-1 '>
                        <label className='text-text pl-2' >Nome do grupo</label>
                        <input type='text' className='w-full h-12 bg-primary/5 shadow-inner appearance-none outline-none p-2 rounded-lg border-2 border-primary/5 focus:border-primary pl-2 caret-primary text-text '/>
                    </div>

                    <div className='row-start-2 row-end-4 '>
                        <label className='text-text pl-2' >Descrição do grupo</label>
                
                        <textarea className='w-full h-28 bg-primary/5 shadow-inner appearance-none outline-none p-2 rounded-lg border-2 border-primary/5 focus:border-primary pl-2 caret-primary text-text resize-none' />
                    </div>

                    <div className='col-start-2 row-start-1 row-end-4'>
                        
                            <ScrollArea.Root className="text-text w-[200px] h-64 rounded overflow-hidden  bg-primary/5 shadow-inner ">
                                <ScrollArea.Viewport className="w-full h-full rounded">
                                <div className="py-[15px] px-5">
                                    <div className="text-text text-[20px] leading-[18px] font-medium mb-2">Participantes</div>
                                    {friends.map((friend) => (
                                        <div className='flex items-center justify-between w-full'>    
                                            <Checkbox.Root id={`cm/${friend}`} className='group pb-1'>
                                                <div className='flex items-center justify-center appearance-none  rounded-lg w-8 h-8  border-2 border-primary/5 group-data-[state=checked]:bg-accent group-data-[state=checked]:border-accent'>
                                                    <Checkbox.Indicator className='flex items-center justify-center '>
                                                        <Check size={24} weight='bold' className='text-primary' />
                                                    </Checkbox.Indicator>
                                                </div>
                                            </Checkbox.Root>
                                            <label htmlFor={`cm/${friend}`} >{friend}</label>
                                        </div>
                                    ))}
                                </div>
                                </ScrollArea.Viewport>
                                <ScrollArea.Scrollbar
                                className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                                orientation="vertical"
                                >
                                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                                </ScrollArea.Scrollbar>
                                <ScrollArea.Scrollbar
                                className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                                orientation="horizontal"
                                >
                                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                                </ScrollArea.Scrollbar>
                                <ScrollArea.Corner className="bg-blackA8" />
                            </ScrollArea.Root>
                        
                    </div>
                    <input type='submit' className='w-32 h-12 mt-6 mb-2 mx-auto bg-accent text-text rounded-lg border-2 border-accent hover:border-accent/75 transition ease-in-out delay-150 col-span-2' />
                </form>
                
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
  )
}