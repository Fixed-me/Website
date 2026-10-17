import './Sidebar.css'
import { useState } from 'react'

function Sidebar() {
    var [isVisible, setIsVisible] = useState(false);
    var [Imgsrc, setImgsrc] = useState("/src/assets/chevron-left.svg")

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const changeImg = () => {
        if (isVisible == true) {
            setImgsrc("/src/assets/chevron-left.svg")
        } else {
            setImgsrc("/src/assets/chevron-down.svg")
        }
    }

    return(
        <>
        <div className='Sidebar flex flex-col bg-zinc-950 border-r border-r-zinc-800 text-zinc-300 max-w-[210px] h-screen'>
            <div className='Logo flex flex-row gap-1'><img className='Logo-img' src='/src/assets/logo-nf.svg'/><div className='flex flex-col self-center'><span>Portfolio &</span><span>anderes</span></div></div>
            <div className='Sites flex flex-col justify-self-start items-start w-[89%]'>
                <div className='text-violet-50 flex flex-row gap-2 rounded-lg text-zinc-300'><img src='/src/assets/home.svg'/><span>Startseite</span></div>
                <div className='text-violet-50 flex flex-row gap-2 rounded-lg text-zinc-300'><img src='/src/assets/user-round.svg'/><span>Über mich</span></div>
                <div className='text-violet-50 flex flex-row gap-2 rounded-lg text-zinc-300' onClick={() => { toggleVisibility(); changeImg(); }}><img src='/src/assets/compass.svg'/><span>Interessen</span><img className='arrow self-center' key={Imgsrc} src={Imgsrc}/></div>
                {isVisible && (<>
                <div className='text-violet-50 flex flex-col gap-2 rounded-lg text-zinc-300'>
                    <span>Programmieren</span>
                </div> <div className='text-violet-50 flex flex-col gap-2 rounded-lg text-zinc-300'>
                    <span>andere Hobbys</span>
                </div>
                </>)}
                <div className='text-violet-50 flex flex-row gap-2 rounded-lg text-zinc-300'><img src='/src/assets/box.svg'/><span>Projekte</span></div>
                <div className='text-violet-50 flex flex-row gap-2 rounded-lg text-zinc-300'><img src='/src/assets/files.svg'/><span>Dokumentationen</span></div>
                <div className='text-violet-50 flex flex-row gap-2 rounded-lg text-zinc-300'><img src='/src/assets/book-open.svg'/><span>Blog</span></div>
                <div className='text-violet-50 flex flex-row gap-2 rounded-lg text-zinc-300'><img src='/src/assets/mail.svg'/><span>Kontakt</span></div>
            </div>
            <div className='Links flex felx-row gap-[20px] border-t border-t-zinc-800 max-w-[75%]'>
                <img src='/src/assets/github.svg'/>
                <img src='/src/assets/mail.svg'/>
            </div>
        </div>
        </>
    )
}

export default Sidebar