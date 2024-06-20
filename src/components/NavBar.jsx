import IconLinks from "./IconLinks"
import { useTranslation } from 'react-i18next';
import '../utils/i18n'

import { motion } from "framer-motion";


export default function NavBar() {
    const { i18n } = useTranslation();

 
    const changeLanguage = value => {
        i18n.changeLanguage(value)
        .then(() => {
            console.log("Linguagem alterada")
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
  
    return (
            <nav className=" mb-20 flex items-center justify-between py-6">
                <div className="flex flex-shrink-0 items-center">
                    <h1 className="font-bold text-3xl">RC DEV</h1>
                </div>

               <motion.div 
                 initial={{x:100, opacity:0}}
                 animate={{x:0, opacity: 1}}
                 transition={{duration: 1, delay: 1.2}}
                className="flex gap-4 absolute top-3 left-8">
                     <button 
                     className="bg-slate-800 text-black border-slate-950 border-2 h-9 w-20 bg-transparent rounded font-bold hover:bg-slate-300 transition-all scale-90" 
                     onClick={() => changeLanguage('pt')}>PT-BR</button>
  

                    <button className="bg-slate-800 text-black  border-slate-950  h-9 w-20 bg-transparent border-2 rounded font-bold  hover:bg-slate-300 transition-all scale-90" 
                    onClick={() => changeLanguage('en')}>English</button>      
               </motion.div>
   
         
                <div className="m-8 flex items-center justify-center gap-4 text-3xl">
                    <IconLinks/>
                </div>
                
            </nav>
        
    )
}