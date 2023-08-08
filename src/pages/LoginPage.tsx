import LoginPainel from "../components/LoginPainel"
import RegisterPainel from "../components/RegisterPainel"
import React from 'react'
import clsx from 'clsx';

type Props = {}

export default function LoginPage({}: Props) {

    const [registerShowing, setRegisterShowing] = React.useState(false)

    const handleRegisterShowing = () => {
        setRegisterShowing(prev => !prev)
    }

    return (
        <div className="w-screen h-screen bg-background/90  flex items-center justify-center relative text-text" >
          <div className="w-[672px] h-[416px] bg-background/70 rounded-xl grid grid-cols-2 overflow-hidden">
            <LoginPainel handleRegisterShowing={handleRegisterShowing} />
            <RegisterPainel handleRegisterShowing={handleRegisterShowing} />
            
            <div className={clsx("w-[336px] h-[416px] z-10 bg-primary col-start-2 row-start-1 transition ease-in-out duration-500 delay-100",{
                "-translate-x-full": registerShowing === true
            })}  > </div>
            


          </div>
        </div>
      )
}