// components/animations/AnimatedGrid.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.2 } },
};

const AnimatedGrid = ({ items, renderItem }) => {
  return (
    <motion.div
      className="grid product lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {items.map((itemData, index) => (
          <motion.div key={itemData._id} variants={item} exit="exit">
            {renderItem(itemData)}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedGrid;
