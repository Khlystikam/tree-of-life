import React, { useState } from 'react';
import { motion } from 'framer-motion';

import FirstNodeForm from '../Functions/Input-Info-from-user/FirstNodeForm';
import AddNodeForm from '../Functions/Input-Info-from-user/AddNodeForm';
import NodeCardInfo from '../NodeCard/NodeCard';
import {FamilyNode} from '../../types/family';

import styles from './MainWindow.module.css';
import stylesGlobal from '../../styles/globals.module.css';

const MainWindow: React.FC = () => {
    // Состояние для стартовой кнопки
    const [buttonVisible, setButtonVisible] = useState(true);

    // true → показываем FirstNodeForm, false → AddNodeForm
    const [isFirstPush, setIsFirstPush] = useState(true);

    // Флаг, рендерить ли форму в принципе
    const [showForm, setShowForm] = useState(false);

    // Все добавленные узлы
    const [nodes, setNodes] = useState<FamilyNode[]>([]);

    /* ===== handlers ===== */

    // Нажали «Начать»
    const handleStart = () => {
    setButtonVisible(false);
    setShowForm(true);
    };

    // Первый узел
    const handleFirstSubmit = (data: FamilyNode) => {
    setNodes([data]);
    setIsFirstPush(false);
    setShowForm(false);
    };

    // Любой последующий узел
    const handleAddNodeSubmit = (data: FamilyNode) => {
    setNodes(prev => [...prev, data]);
    setShowForm(false);
    };

    return (
    <div className={styles.mainWindow}>
        <h1 className={styles.mainWindowH1}>Начни составлять свою родословную!</h1>

        {buttonVisible && (
        <motion.button
            type="button"
            onClick={handleStart}
            className={stylesGlobal.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            Начать «Древо жизни»
        </motion.button>
        )}

        {/* список карточек узлов */}
        {nodes.map((node, idx) => (
        <NodeCardInfo
            key={idx}
            name={node.name}
            picture={node.photo}
            degreeKinship={node.degreeKinship}
        />
        ))}

        {/* формы */}
        {showForm && (
        isFirstPush
            ? <FirstNodeForm onSubmit={handleFirstSubmit} />
            : <AddNodeForm   onSubmit={handleAddNodeSubmit} />
        )}

        {/* кнопка «Добавить ещё» */}
        {!showForm && nodes.length > 0 && (
        <button
            type="button"
            className={`${stylesGlobal.button} ${styles.buttonNewNodeNext}`}
            onClick={() => setShowForm(true)}
        >
            Добавить члена семьи
        </button>
        )}
    </div>
    );
};

export default MainWindow;
