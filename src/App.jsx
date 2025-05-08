import React from "react"
import {  easeInOut, useScroll } from "framer-motion"

function App() {

  const gridcontainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.50,
      },
    }
  };

  const gridvariants = {
    hidden: { opacity: 0 }, show: { opacity: 1 }
  }

  const { scrollYProgress: completionProgress } = useScroll();

  const svgiconvariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(252, 211, 77, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(252, 211, 77, 1)",
      transition: {
        duration: 2,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "reverse",
      },
    },
  };


  return (
    <>
  
      <div className="flex flex-col gap-10 overflow-x-hidden">
        <motion.section
          variants={gridcontainer}
          className="grid grid-cols-3 p-10 gap-10 justify-center "
          initial="hidden"
          animate="show">
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-x-10" >
            <motion.div className="w-20 h-20 rounded-lg bg-white flex" initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}></motion.div>
            <motion.div className="w-20 h-20 rounded-full bg-white flex" initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}></motion.div>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.div className="w-1/3 h-1/3 bg-rose-500 shadow-md" animate={{
              scale: [1, 2, 2, 1],
              rotate: ["0", "90", "980", "0"],
              borderRadius: ["10%", "10%", "50%", "10%"]
            }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
              }}></motion.div>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.button className="text-2xl px-8 cursor-pointer bg-amber-500 py-4 rounded-lg text-white"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1, background: "d1dfdb", color: "black" }}
              transition={{
                bounceDamping: 10,
                bounceStiffness: 600
              }}
            >subscribe</motion.button>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.div className="w-1/3 h-1/3 rounded-lg bg-amber-500" drag dragConstraints={{
              top: -125,
              left: -125,
              right: 125,
              bottom: 125
            }}
              transition={{
                bounceDamping: 10,
                bounceStiffness: 600
              }}></motion.div>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.div className="w-1/3 h-1/3 bg-gray-50/20  rounded-xl">
              <motion.div className="w-full bg-gray-400 h-full origin-bottom rounded-xl" style={{ scaleY: completionProgress }}
                transition={{
                  delay: 5
                }}></motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.svg
              width="300"
              height="300"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/2 stroke-amber-400 stroke-[0.5]"
            >
              <motion.path
                d="M12 2L14.92 8.62L22 9.24L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.24L9.08 8.62L12 2Z"
                variants={svgiconvariants}
                initial="hidden"
                animate="visible"
                transition={{
                  default: {
                    duration: 2,
                    ease: easeInOut,
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: "reverse",
                  },
                  fill: {
                    duration: 0.25,
                    delay: 2,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: "reverse",
                  },
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.section>
        <motion.section
          variants={gridcontainer}
          className="grid grid-cols-3 p-10 gap-10 justify-center "
          initial="hidden"
          animate="show">
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-x-10" >
            <motion.div className="w-20 h-20 rounded-lg bg-white flex" initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}></motion.div>
            <motion.div className="w-20 h-20 rounded-full bg-white flex" initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}></motion.div>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.div className="w-1/3 h-1/3 bg-rose-500 shadow-md" animate={{
              scale: [1, 2, 2, 1],
              rotate: ["0", "90", "980", "0"],
              borderRadius: ["10%", "10%", "50%", "10%"]
            }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
              }}></motion.div>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.button className="text-2xl px-8 cursor-pointer bg-amber-500 py-4 rounded-lg text-white"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1, background: "d1dfdb", color: "black" }}
              transition={{
                bounceDamping: 10,
                bounceStiffness: 600
              }}
            >subscribe</motion.button>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.div className="w-1/3 h-1/3 rounded-lg bg-amber-500" drag dragConstraints={{
              top: -125,
              left: -125,
              right: 125,
              bottom: 125
            }}
              transition={{
                bounceDamping: 10,
                bounceStiffness: 600
              }}></motion.div>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.div className="w-1/3 h-1/3 bg-gray-50/20  rounded-xl">
              <motion.div className="w-full bg-gray-400 h-full origin-bottom rounded-xl" style={{ scaleY: completionProgress }}
                transition={{
                  delay: 5
                }}></motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={gridvariants} className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center">
            <motion.svg
              width="300"
              height="300"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-1/2 stroke-amber-400 stroke-[0.5]"
            >
              <motion.path
                d="M12 2L14.92 8.62L22 9.24L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.24L9.08 8.62L12 2Z"
                variants={svgiconvariants}
                initial="hidden"
                animate="visible"
                transition={{
                  default: {
                    duration: 2,
                    ease: easeInOut,
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: "reverse",
                  },
                  fill: {
                    duration: 0.25,
                    delay: 2,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 1,
                    repeatType: "reverse",
                  },
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.section>

      </div>
    </>
  )
}

export default App
