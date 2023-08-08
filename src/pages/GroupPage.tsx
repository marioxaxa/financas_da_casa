
import BillSplitter from '../components/BillSplitter'
import Header from '../components/Header'



type Props = {}

export default function GroupPage({}: Props) {

    
  return (
    <div className='bg-background w-screen h-screen font-sans text-text relative'>
        <Header />
        <BillSplitter />
        

    </div>
  )
}