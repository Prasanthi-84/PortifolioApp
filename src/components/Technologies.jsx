import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {DiRedis} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {BiLogoPostgresql, BiRepeat} from "react-icons/bi";
import {motion} from "framer-motion";


const iconVariants=(duration)=>{
   return{
      intial:{y: -10},
      animate:{
         y:[10,-10],
         transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
         }
      }
   }
}

const Technologies = () => {
  return (
    <div className="border-b border-netural-800 pb-24">
     <motion.h2  
            variants={iconVariants(3)}
            initial="intial"
            animate="animate"
     className="my-20 text-center text-4xl"> Technologies</motion.h2>
     <motion.div
      whileInView={{opacity:1,x:0}}
      intial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
     className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="intial"
        animate="animate"
         className="rounded-2xl border-4 border-netural-800 p-4">
           <RiReactjsLine className="text-6xl text-cyan-400"/>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="intial"
          animate="animate"
           className="rounded-2xl border-4 border-netural-800 p-4">
           <TbBrandNextjs className="text-6xl"/>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="intial"
          animate="animate"
           className="rounded-2xl border-4 border-netural-800 p-4">
           <SiMongodb className="text-6xl text-green-500"/>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="intial"
          animate="animate"
           className="rounded-2xl border-4 border-netural-800 p-4">
           <DiRedis className="text-6xl text-red-700"/>
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="intial"
          animate="animate"
           className="rounded-2xl border-4 border-netural-800 p-4">
           <FaNodeJs className="text-6xl text-green-500"/>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="intial"
          animate="animate"
           className="rounded-2xl border-4 border-netural-800 p-4">
           <BiLogoPostgresql className="text-6xl text-sky-700"/>
        </motion.div>
     </motion.div>
     
     </div>
  )
}

export default Technologies