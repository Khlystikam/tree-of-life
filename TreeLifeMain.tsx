import React from 'react';
import styles from './styles/globals.module.css';
import MainWindow from './components/MainWindow/MainWindow';


// interface Props {

// }

const TreeLifeMain: React.FC = () => {
    return (
            <div className={styles.treeLifWindow}>
                <MainWindow />
            </div>
        );
    };

export default TreeLifeMain;