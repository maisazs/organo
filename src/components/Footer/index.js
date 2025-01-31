import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='links'>
                <a><img src='/images/fb.png'></img></a>
                <a><img src='/images/tw.png'></img></a>
                <a><img src='/images/ig.png'></img></a>
            </div>
            <div>
                <img src='/images/logo.png'></img>
            </div>
            <div className='texto'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Footer