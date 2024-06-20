
import Profile from '../assets/projects/profile.png'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import '../utils/i18n'



const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

export default function Hero() {
    const { t, i18n } = useTranslation();
    return (
        <div className="border-b border-neutral-400/60  pb-10 lg:mb-35" >
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tigh lg:mt-16 lg:text-8xl">
                            Ravy Carvalho
                        </motion.h1>

                        <motion.span 
                          variants={container(0.5)}
                          initial="hidden"
                          animate="visible"
                        className="bg-gradient-to-r from-slate-900  via-slate-600 to-neutral-400 bg-clip-text text-3xl tracking-tight text-transparent" >Front-end Developer

                        </motion.span>
                        <motion.p 
                          variants={container(1)}
                          initial="hidden"
                          animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tight'>{t('description')}</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:h-4/6'>
                        <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity: 1}}
                        transition={{duration: 1, delay: 1.2}}
                        className='rounded-lg' src={Profile} alt="Ravy Carvalho" />
                    </div>
                </div>
            </div>
        </div>
    )
}
