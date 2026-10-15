import './Sidebar.css'

function Sidebar() {
    return(
        <>
        <div className='Sidebar flex flex-col bg-zinc-950 border-r border-r-zinc-800 text-zinc-300 max-w-[210px] h-screen'>
            <div className='Logo flex flex-row gap-1'><img src='/src/assets/logo-nf.svg'/><div className='flex flex-col self-center'><p>Portfolio</p><p>Textttt</p></div></div>
            <div className='Sites flex flex-col justify-self-start items-start w-[89%]'>
                <div className='text-violet-50 flex flex col gap-2 rounded-lg text-zinc-300'><img src='/src/assets/home.svg'/><p>Startseite</p></div>
                <div className='text-violet-50 flex flex col gap-2 rounded-lg text-zinc-300'><img src='/src/assets/user-round.svg'/><p>Über mich</p></div>
                <div className='text-violet-50 flex flex col gap-2 rounded-lg text-zinc-300'><img src='/src/assets/home.svg'/><p>Interessen</p></div>
                <div className='text-violet-50 flex flex col gap-2 rounded-lg text-zinc-300'><img src='/src/assets/home.svg'/><p>Projekte</p></div>
                <div className='text-violet-50 flex flex col gap-2 rounded-lg text-zinc-300'><img src='/src/assets/files.svg'/><p>Dokumentationen</p></div>
                <div className='text-violet-50 flex flex col gap-2 rounded-lg text-zinc-300'><img src='/src/assets/book-open.svg'/><p>Blog</p></div>
                <div className='text-violet-50 flex flex col gap-2 rounded-lg text-zinc-300'><img src='/src/assets/mail.svg'/><p>Kontakt</p></div>
            </div>
            <div className='Links flex felx-row gap-[20px] border-t border-t-zinc-800 max-w-[75%]'>
                <img src='#'/>
                <img src='#'/>
                <img src='/src/assets/mail.svg'/>
            </div>
        </div>
        </>
    )
}

export default Sidebar