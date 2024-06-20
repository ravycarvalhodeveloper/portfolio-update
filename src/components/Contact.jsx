import IconLinks from "./IconLinks";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../utils/i18n'


export default function Contact() {
    const { t, i18n } = useTranslation();
    return (
        <div className="border-b border-neutral-400/60  pb-20" >
              <motion.h2 
              whileInView={{opacity: 1, y:0}}
              initial={{opacity:0, y: -100}}
              transition={{duration: 0.5}}
              className="my-10 text-center text-4xl">{t('contact')}</motion.h2> 
              <div className="text-center tracking-tighter">
              <motion.div
                 whileInView={{opacity: 1, y:0}}
                 initial={{opacity:0, y: -100}}
                 transition={{duration: 1}}>
                <IconLinks/>
              </motion.div>
                <motion.p
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x: -100}}
                transition={{duration: 1}} 
                className="my-4">Fortaleza - CE</motion.p>
                <motion.p 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x: -100}}
                transition={{duration: 1.5}}
                className="my-4">+55 99493-0658</motion.p>
                <motion.a 
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity:0, x: -100}}
                    transition={{duration: 2.0}}
                className="border-b border-neutral-800" href="">ravypdcarvalhomain007@gmail.com</motion.a>
            </div> 
        </div>
    )
}