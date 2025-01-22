import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import '../utils/i18n'


import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.jpg";
import taskplus from '../assets/projects/taskplus.jpg';
import criptonow from '../assets/projects/criptonow.jpg';


export default function Projects() {
  const { t, i18n } = useTranslation();
  return (
    <div className="border-b border-neutral-400/60  pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        {t('proj')}
      </motion.h2>

      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a target="_blank" href="https://lagraxa.vercel.app/">
              <img
                src={project1}
                width={150}
                height={150}
                alt="Proje01"
                className="mb-6 rounded hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{t('proj01title')}</h6>
            <p className="mb-4 text-neutral-500">{t('proj01descrip')}</p>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Next.JS
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Sass
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Cosmic.JS
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              TypeScript
            </span>
          </motion.div>
        </div>

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a target="_blank" href="https://task-plus-five.vercel.app/">
              <img
                src={taskplus}
                width={150}
                height={150}
                alt="Proje01"
                className="mb-6 rounded hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{t('projectaskplus')}</h6>
            <p className="mb-4 text-neutral-500">{t('descriptiontaskplus')}</p>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Next.JS
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Tailwind
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
            TypeScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              NextAuth
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
            Google Cloud
            </span>
          </motion.div>
        </div>



        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a target="_blank" href="https://your-link.vercel.app/">
              <img
                src={project2}
                width={150}
                height={150}
                alt="Proje01"
                className="mb-6 rounded hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{t('proj02title')}</h6>
            <p className="mb-4 text-neutral-500">{t('proj02descrip')}</p>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Tailwind
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Firebase
            </span>
          </motion.div>
        </div>

        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a target="_blank" href="https://your-link.vercel.app/">
              <img
                src={criptonow}
                width={150}
                height={150}
                alt="Proje01"
                className="mb-6 rounded hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{t('projectcriptonow')}</h6>
            <p className="mb-4 text-neutral-500">{t('descriptioncriptonow')}</p>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Tailwind
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              TypeScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              API
            </span>
          </motion.div>
        </div>


        


        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a target="_blank" href="https://start-movie.vercel.app/">
              <img
                src={project3}
                width={150}
                height={150}
                alt="Proje01"
                className="mb-6 rounded hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{t('proj03title')}</h6>
            <p className="mb-4 text-neutral-500">{t('proj03descrip')}</p>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              HTML
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
             API
            </span>
          </motion.div>
        </div>




        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a target="_blank" href="https://ravycarvalhodeveloper.github.io/cardapio/">
              <img
                src={project4}
                width={150}
                height={150}
                alt="Proje01"
                className="mb-6 rounded hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{t('proj04title')}</h6>
            <p className="mb-4 text-neutral-500">{t('proj04descrip')}</p>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              JavaScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              CSS3
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              HTML5
            </span>
          </motion.div>
        </div>




        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a target="_blank" href="https://portfolio-ravycarvalho.vercel.app/">
              <img
                src={project5}
                width={150}
                height={150}
                alt="Proje01"
                className="mb-6 rounded hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{t('proj05title')}</h6>
            <p className="mb-4 text-neutral-500">{t('proj05descrip')}</p>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
             React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              Tailwind
            </span>
          </motion.div>
        </div>





        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <a target="_blank" href="https://ravycarvalhodeveloper.github.io/landing-page-barbershop/">
              <img
                src={project6}
                width={150}
                height={150}
                alt="Proje01"
                className="mb-6 rounded hover:shadow-lg hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{t('proj06title')}</h6>
            <p className="mb-4 text-neutral-500">{t('proj06descrip')}</p>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              HTML5
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
              CSS3
            </span>
            <span className="mr-2 rounded bg-neutral-900 text-white px-2 py-1 text-sm font-medium">
             JavaScript
            </span>

          </motion.div>
        </div>





      </div>
    </div>
  );
}
