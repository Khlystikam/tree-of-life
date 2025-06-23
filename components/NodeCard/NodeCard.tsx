import React, { useState } from 'react';
import styles from './NodeCard.module.css';
import { motion } from 'framer-motion';

interface Props {
    name: string;
    picture: string;
    degreeKinship: string;
}

const NodeCardInfo: React.FC<Props> = ({name = "", picture = "", degreeKinship = ""}) => {
    const [visibilityDiv] = useState<boolean>(true);

    return (
        <div>
            {visibilityDiv && (
                <motion.div
                    className={ styles.NodeCard }
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div
                        className={ styles.NodeCardPicture }>
                        <img
                            src={ picture }
                            alt={ name }
                            className={ styles.NodeCardPictureImg }
                        />
                    </div>
                    <p
                        className={ styles.NodeCardName }>
                        { name }
                    </p>
                    <p
                        className={ styles.NodeCardDegreeKinship }>
                        { degreeKinship }
                    </p>
                </motion.div>
            )}
        </div>
    )
};

export default NodeCardInfo;