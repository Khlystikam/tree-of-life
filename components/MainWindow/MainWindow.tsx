import React, { useState } from 'react';
import styles from './MainWindow.module.css';
import stylesGlobal from '../../styles/globals.module.css';
import { motion } from 'framer-motion';

// import AddNewNodeObject from '../Functions/AddNewNodeObject';
import InputInfoFromUser from '../Functions/Input-Info-from-user/InputInfoFromUser';

const MainWindow: React.FC = () => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const [displayValueVis, setDisplayValueVis] = useState<string>("block");
    const [opacityValueZero, setOpacityValueZero] = useState<number>(0);
    const [opacityValueOne, setOpacityValueOne] = useState<number>(1);

    const chancheVisibility = () => {
        setOpacityValueZero(1);
        setOpacityValueOne(0);
        setDisplayValueVis("none");
        setVisibility(true);
    }

    return (
        <div className={styles.mainWindow}>
            <h1 className={styles.mainWindowH1}>Начни составлять свою родословную!</h1>

            <motion.button
                type="button"
                onClick={ chancheVisibility }
                className={ stylesGlobal.button }
                initial={{ opacity: opacityValueZero, display: displayValueVis }}
                animate={{ opacity: opacityValueOne, display: displayValueVis }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeOut"}}
            >
                Начать «Древо жизни»
            </motion.button>


            {/* вызываем input первого добавления node */}
            <InputInfoFromUser visibility= { visibility } firstPush= { visibility } />
        </div>
        );
    };

export default MainWindow;