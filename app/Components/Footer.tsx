import '../globals.css';
import { promises as fs } from 'fs';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

async function Footer() {
    const file = await fs.readFile(process.cwd() + '/app/json/footer.json', 'utf8');
    const data = JSON.parse(file);
    
    return (
        <footer className='bg-my-color px-7 xl:px-20'>
            <div className='py-12 flex flex-wrap xl:py-20'>
                <div className='mb-12 w-full xl:w-fit'>
                    <img className='h-5' src={data.logo} alt="Galxe Logo" />
                    <p className='mt-5 max-w-lg text-left text-sm font-normal text-footer-color'>
                        {data.content}
                    </p>
                    <button className='w-fit mt-6 py-3 px-7 border border-footer-button-color  text-footer-button-color rounded-lg font-bold text-base '>
                        {data.latest}
                    </button>                    
                </div>
                <div className="flex flex-wrap w-full xl:">
                    {data.link_head.map((head:String,index:number) => (
                        <div className="w-1/2 mb-4 md:w-1/4 lg:w-1/5">
                            <p className="text-sm font-normal text-white mb-3 font-bold ">{head}</p>
                            {data.links[index].map((link: String)=>(
                                <a href="/" className="block text-sm font-normal text-footer-color mb-3 ">{link}</a>
                            ))}
                        </div>
                    )    
                    )}

                </div>
            </div>            
        </footer>
    );
}

export default Footer;