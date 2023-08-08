import { Link } from 'react-router-dom';
import { Group } from '../@types/GroupClass';
import Header from '../components/Header';
import NewGroupForm from '../components/NewGroupForm';
import testUsers from '../helpers/users';

import * as ScrollArea from '@radix-ui/react-scroll-area';


type Props = {}

export default function HomePage({}: Props) {

    const groups = []
    const listUsers = testUsers()
    for (let index = 0; index < 11; index++) {
        let newGroup = new Group(`Grupo teste ${index}`, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex blanditiis veritatis in eius deleniti magnam aliquid ducimus illo, nemo quaerat officiis ad quod provident, expedita neque rem odio esse eos.', undefined, '/pomba.jpg')
        listUsers.forEach(user  => {
            newGroup.addUser(user)
        })


    groups.push( newGroup )
        
    }
    


    /**
     <div className='bg-primary w-screen px-8 py-4 flex gap-4 overflow-x-scroll'>
            <div className='h-96 w-64 bg-accent rounded-2xl shrink-0' />
            <div className='h-96 w-64 bg-accent rounded-2xl shrink-0' />
            <div className='h-96 w-64 bg-accent rounded-2xl shrink-0' />
            <div className='h-96 w-64 bg-accent rounded-2xl shrink-0' />
            <div className='h-96 w-64 bg-accent rounded-2xl shrink-0' />
            <div className='h-96 w-64 bg-accent rounded-2xl shrink-0' />
            <div className='h-96 w-64 bg-accent rounded-2xl shrink-0' />
            <div className='h-96 w-64 bg-accent rounded-2xl shrink-0' />
        </div>
     */

  return (
    <div className='bg-background w-screen h-screen font-sans text-text'>
        <Header />
        <NewGroupForm />

        <div className=' w-screen px-8 py-8 flex gap-4 overflow-x-auto scroll-pl-6 snap-x'>
            {groups.map( group => {
                return (
                    <Link to={'/home/:userId/:groupId'}>
                        <div key={group.name} className='h-96 w-64 bg-secondary rounded-2xl shrink-0 grid grid-rows-2 overflow-hidden group hover:scale-110 transition-all duration-300 ease-in-out snap-start cursor-pointer select-none'>
                            <div className='row-start-1  bg-secondary'>
                                <img className='rounded-2xl border-primary border-0 group-hover:border-4' src={group.image} alt="" />
                            </div>
                            <div className='row-start-2 p-2 bg-secondary rounded-t-3xl border-primary border-t-0 group-hover:border-t-4'>
                                <p className='text-left text-text font-semibold text-3xl '>{group.name}</p>
                                <p className=''>{group.description}</p>
                            </div>
                            
                        </div>
                    </Link>
                    
                )
            })}

        </div>
      

    </div>
  )
}