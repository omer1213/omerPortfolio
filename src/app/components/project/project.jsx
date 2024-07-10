import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // For animations
import Image from "next/image";

const ProjectCard = ({ title, description, tags, imageUrl, isEven }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className={`group mb-4 m-6 max-sm:h-96 h-64 sm:mb-8 last:mb-0 w-full sm:w-1/2 lg:w-5/12 flex flex-col sm:flex-row items-center bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 transition ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            whileHover={{ scale: 1.04, backgroundColor: "gray" }} // Animation properties
        >
            <div className="w-full mt-12 sm:w-1/2 flex justify-between items-center p-4 order-2 sm:order-1" id="project">
                <Image
                    src={imageUrl}
                    alt={`Image for ${title}`}
                    quality={95}
                    width={400} // Adjust the width as needed
                    height={400} // Adjust the height as needed
                    className="rounded-t-lg sm:rounded-none sm:rounded-l-lg shadow-2xl transition duration-300 transform-gpu group-hover:scale-105 group-hover:translate-x-3 group-hover:translate-y-3"
                />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 order-1 sm:order-2">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2">
                    {tags.map((tag, index) => (
                        <li
                            className="bg-black bg-opacity-70 px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            key={index}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
















// import React from "react";
// import Image from "next/image";
// import { motion, useAnimation } from "framer-motion"; // For animations
// import { useInView } from "react-intersection-observer"; // For scroll animations

// const ProjectCard = ({ title, description, tags, imageUrl, isEven }) => {
//     const controls = useAnimation();
//     const [ref, inView] = useInView({ threshold: 0.1 });

//     React.useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         } else {
//             controls.start("hidden");
//         }
//     }, [controls, inView]);

//     const variants = {
//         hidden: { opacity: 0, scale: 0.9 },
//         visible: { opacity: 1, scale: 1 },
//     };

//     return (
//         <motion.div
//             ref={ref}
//             animate={controls}
//             initial="hidden"
//             variants={variants}
//             transition={{ duration: 0.5 }}
//             className={`group mb-4 m-6 max-sm:h-96 h-64 sm:mb-8 last:mb-0 w-full sm:w-1/2 lg:w-5/12 flex flex-col sm:flex-row items-center bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 transition ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}
//             whileHover={{ scale: 1.04, backgroundColor: "gray" }} // Animation properties
//         >
//             <div className="w-full sm:w-1/2 flex justify-between items-center p-4 order-2 sm:order-1">
//                 <Image
//                     src={imageUrl}
//                     alt={`Image for ${title}`}
//                     quality={95}
//                     width={400} // Adjust the width as needed
//                     height={400} // Adjust the height as needed
//                     className="rounded-t-lg sm:rounded-none sm:rounded-l-lg shadow-2xl transition duration-300 transform-gpu group-hover:scale-105 group-hover:translate-x-3 group-hover:translate-y-3"
//                 />
//             </div>
//             <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 order-1 sm:order-2">
//                 <h3 className="text-2xl font-semibold">{title}</h3>
//                 <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
//                 <ul className="flex flex-wrap mt-4 gap-2">
//                     {tags.map((tag, index) => (
//                         <li
//                             className="bg-black bg-opacity-70 px-3 py-1 text-sm uppercase tracking-wider text-white rounded-full dark:text-white/70"
//                             key={index}
//                         >
//                             {tag}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </motion.div>
//     );
// };

// export default ProjectCard;
