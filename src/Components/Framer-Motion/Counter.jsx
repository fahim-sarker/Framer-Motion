import React, { useEffect } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'

const Counter = () => {

    const count = useMotionValue(0);
    const roundvalue = useTransform(count, Math.round)

    useEffect(()=>{
        const animation = animate(count,100, {duration : 2})
        return animation
    },[])
  return (
    <div>
      <motion.div>
        {roundvalue}
      </motion.div>
    </div>
  )
}

export default Counter
