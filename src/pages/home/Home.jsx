

import React from 'react';
import { motion } from 'framer-motion';
import './home.style.scss'
import Directory from '../../components/directory/directory'
import { containerVariants } from '../../animations/page-animations';


const home = () => {
    return (
        <motion.div className="home" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
           <Directory/>
        </motion.div>
    );
};

export default home;