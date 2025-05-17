import Image from 'next/image'
import { motion } from 'framer-motion'

type DefaultTitleProps = {
    title: string;
}

export default function DefaultTitle({title}: DefaultTitleProps) {
    return(
        <div className="flex">
            <motion.li 
                className="flex ml-2 items-center text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5}}
            >
                <Image
                src="/pitanga-laranja.png"
                alt="Pitanga"
                width={24}
                height={24}
                className="hover:animate-spin"
                />
            </motion.li>
            <h2 className="max-w-7xl pl-4 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">       
                {title}
            </h2>
        </div>
    )
}