import { useState, ChangeEvent } from 'react';
import {FamilyNode} from '../../../types/family';

import styles from './inputInfoFromUser.module.css';
import stylesGlobal from '../../../styles/globals.module.css';

interface Props {
    onSubmit: (data: FamilyNode) => void;
}

const FirstNodeForm: React.FC<Props> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FamilyNode>({
        name: '',
        photo: '',
        degreeKinship: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setFormData(prev => ({ ...prev, photo: URL.createObjectURL(file) }));
        }
    };

    return (
            <form className={styles.addFormContainer}>
                <input
                    className={styles.inputName}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Имя"
                />
                
                <label className={stylesGlobal.customFileLabel}>
                        Загрузить фото
                    <input
                        type="file"
                        name="photo"
                        onChange={handleChangeFile}
                        className={stylesGlobal.hiddenFileInput}
                    />
                </label>

                <button
                    className={`${styles.buttonAction} ${stylesGlobal.button}`}
                    type="button"
                    onClick={() => onSubmit(formData)}
                >
                Добавить
                </button>

                <div className={styles.addFormBlur}></div>
            </form>
    );
};

export default FirstNodeForm;