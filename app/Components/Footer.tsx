import '../globals.css';
import { promises as fs } from 'fs';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function Footer() {
    return (
        <footer className='bg-my-color px-7'>
            <div className='py-12 flex'>
                <div className='mb-12'>
                    <img className='h-5' src="https://b.galxestatic.com/w/s/76c4073/img/new-logo.bc3e2ed.svg" alt="Galxe Logo" />
                    <p className='mt-5 max-w-lg text-left text-sm font-normal text-footer-color'>
                        Galxe is the leading platform for building Web3 community. With over 11 million unique users, Galxe has
                        propelled the growth of Optimism, Polygon, Arbitrum, and more than 3000 partners with reward-based loyalty programs.
                    </p>
                    <button className='w-fit mt-6 py-3 px-7 border border-footer-button-color  text-footer-button-color rounded-lg font-bold text-base '>
                        
                    </button>
                    <div className="flex">

                    </div>
                </div>
            </div>            
        </footer>
    );
}

export default Footer;