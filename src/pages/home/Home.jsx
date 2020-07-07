

import React from 'react';
import { motion } from 'framer-motion';
import './home.style.scss'
import Directory from '../../components/directory/directory'

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.3, duration: 1}
    }
}

const home = () => {
    return (
        <motion.div className="home" variants={containerVariants} initial="hidden" animate="visible">
           <Directory/>
        </motion.div>
    );
};

export default home;