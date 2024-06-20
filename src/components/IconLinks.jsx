import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram} from "react-icons/fa"

export default function iconLinks() {
    return (
        <motion.div className="m-8 flex items-center justify-center gap-4 text-3xl" >
                    <a target="_blank" href="https://www.linkedin.com/in/ravy-carvalho/"><FaLinkedin className="cursor-pointer hover:text-neutral-600 transition-all hover:scale-125" /></a>
                    <a target="_blank" href="https://github.com/ravycarvalhodeveloper"><FaGithub className="cursor-pointer hover:text-neutral-600 transition-all hover:scale-125"/></a>
                    <a target="_blank" href="https://www.instagram.com/ravycarvalho_"><FaInstagram className="cursor-pointer hover:text-neutral-600 transition-all hover:scale-125"/></a>
        </motion.div>
    )
}
