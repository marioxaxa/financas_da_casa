import React from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Check } from '@phosphor-icons/react';
import * as Checkbox from '@radix-ui/react-checkbox';
import ShopItem from '../@types/ShopItemInterface';
import clsx from 'clsx';

type Props = {
    shopList : Array<ShopItem>
}

export default function BillScrollList({shopList}: Props) {

    /**
     * <Checkbox.Root id={`cm/${item.name}`} className='group pb-1'>
                                                    <div className='flex items-center justify-center appearance-none  rounded-lg w-8 h-8  border-2 border-primary/5 group-data-[state=checked]:bg-accent group-data-[state=checked]:border-accent'>
                                                        <Checkbox.Indicator className='flex items-center justify-center '>
                                                            <Check size={24} weight='bold' className='text-primary' />
                                                        </Checkbox.Indicator>
                                                    </div>
                                                </Checkbox.Root>
     */

    const friends = ['Xaxá', 'Aysha', 'Fernando', 'Auanny', 'Kermany']

    const gridLayout = `grid-cols-${friends.length + 4}`

  return (
    <div className='className="text-text h-96 m-4 rounded overflow-hidden bg-primary/5 shadow-inner py-4'>
        <div className="text-text text-[20px] leading-[18px] font-medium text-center text-2xl mb-4 w-full">Feira</div>
        <div className={clsx('grid grid-cols-9 gap-1 justify-center items-center text-center text-base px-5', gridLayout)}>
            <div className='col-start-1 border-b-2 border-primary h-full'>Nome</div>
            <div className='col-start-2 border-b-2 border-primary h-full'>Quantidade comprada</div>
            <div className='col-start-3 border-b-2 border-primary h-full'>Preço Unitario</div>
            <div className='col-start-4 border-b-2 border-primary h-full'>Preço Total</div>
            {friends.map((friend,index) => {
                let styleClassName = `col-start-${index + 5}`
                return (
                    <div key={friend} className={clsx('border-b-2 border-primary h-full', styleClassName)}>{friend}</div>)
            })}
        </div>
        
        
        <ScrollArea.Root className="text-text h-full rounded overflow-hidden ">
                                <ScrollArea.Viewport className="w-full h-full rounded">
                                <div className="py-[15px] px-5">
                                    
                                    <div className={clsx('grid grid-cols-9 gap-1 justify-center items-center text-center text-base', gridLayout)}>
                                        
                                        
                                        {shopList.map((item,index) => (
                                            <>
                                                <p className='h-full items-center flex justify-center border-b-2 border-primary'>{item.name}</p>
                                                <p className='h-full items-center flex justify-center border-b-2 border-primary'>{item.unitsBuyed}</p>
                                                <p className='h-full items-center flex justify-center border-b-2 border-primary'>{item.uniPrice}</p>
                                                <p className='h-full items-center flex justify-center border-b-2 border-primary'>{item.totalPrice}</p>
                                                {friends.map((friend) => {
                                                    return (
                                                        <div className='h-full items-center flex justify-center border-b-2 border-primary'>
                                                            <input type='number' className='w-12 h-12 my-2 bg-primary/5 shadow-inner appearance-none outline-none p-2 rounded-lg border-2 border-primary/5 focus:border-primary pl-2 caret-primary text-text text-center text-xl' />
                                                        </div>
                                                    )
                                                })}
                                                
                                            </>
                                            
                                        ))}
                                    </div>
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
  )
}