import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../utils/i18n'

export default function Experience() {
    const { t, i18n } = useTranslation()
    return (
        <div className="border-b border-neutral-400/60 pb-10">
             <motion.div className="">

                    <motion.h2 
                        whileInView={{opacity:1 , y:0}}
                        initial={{opacity:0, y: -100}}
                        transition={{duration: 0.5}}
                        className="my-20 text-center text-4xl">{t('exp')}
                    </motion.h2>

                    <div className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity:0, x: -100}}
                            transition={{duration:1}}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-900">{t('data01')}</p>
                        </motion.div>      
                      <motion.div
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x: 100}}
                            transition={{duration:1}}
                            className="w-full max-w-xl lg>w-3/4">
                            <h6 className="mb-2 font-semibold">{t('title01')}</h6>
                            <p className="mb-4 text-neutral-700">{t('exp01')}</p>     
                            
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                Javascript
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                 React.js
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                Next.js
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                 Firebase
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                    mongoDB
                            </span>
                  </motion.div>          
                  
                    </div>

                    <div className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity:0, x: -100}}
                            transition={{duration:1}}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-900">{t('data02')}</p>
                        </motion.div>      
                      <motion.div
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x: 100}}
                            transition={{duration:1}}
                            className="w-full max-w-xl lg>w-3/4">
                            <h6 className="mb-2 font-semibold">{t('title02')}</h6>
                            <p className="mb-4 text-neutral-700">{t('exp02')}</p>     
                            
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                               HTML
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                 CSS
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                               JavaScript
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                 React.js
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                    Java
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                    C++
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                    Sql
                            </span>
                  </motion.div>          
                  
                    </div>

                    <div className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity:0, x: -100}}
                            transition={{duration:1}}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-900">{t('data03')}</p>
                        </motion.div>      
                      <motion.div
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x: 100}}
                            transition={{duration:1}}
                            className="w-full max-w-xl lg>w-3/4">
                            <h6 className="mb-2 font-semibold">{t('title03')}</h6>
                            <p className="mb-4 text-neutral-700">{t('exp03')}</p>     
                            
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                HTML
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                 CSS
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                               JavaScript
                            </span>
                            <span  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white">
                                React.js
                            </span>
                  </motion.div>          
                  
                    </div>
            </motion.div> 
        </div>
    )
}