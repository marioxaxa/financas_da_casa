import { List } from '@phosphor-icons/react';
import * as Avatar from '@radix-ui/react-avatar';

type Props = {}

export default function Header({}: Props) {
  return (
    <section className='py-6 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between px-6 py-3.5 bg-secondary rounded-full'>
            <div className=''>
                <p className=' font-bold text-xl'>HOME PAGE</p>
            </div>
            <div className='w-auto hidden lg:block'>
                <ul className='flex items-center space-x-4 font-semibold'>
                  <li>Grupos</li>
                  <li>Amigos</li>
                </ul>
            </div>
            <List size={24} className=' lg:hidden' weight='bold' />
            <Avatar.Root className='w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-background  text-teal-950 hidden lg:block'>
                <Avatar.Image src='/pomba.jpg'/>
                <Avatar.Fallback />
            </Avatar.Root>

          </div>
        </div>
      </section>
  )
}