import React from "react";
import { motion } from "framer-motion";

const Home = () => (
    <motion.section
        className="container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        <h1>Hello, I'm [Deeksha]</h1>
        <p>I’m a [Software Developer]. I’ve been working in [IT Industry] for [5 years] with [3 years] of relevant development experience, and I’ve had the privilege of working with some fantastic clients.
            I’m excited to be able to share my work with you here.
            If you have any questions, feel free to reach out to me at [email address]</p>
    </motion.section>
);

export default Home;
