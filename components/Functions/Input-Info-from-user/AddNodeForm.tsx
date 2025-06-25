import React, { useState } from 'react';
import {FamilyNode} from '../../../types/family';

import styles from './inputInfoFromUser.module.css';
import stylesGlobal from '../../../styles/globals.module.css';

interface Props {
    onSubmit: (data: FamilyNode) => void;
}

const AddNodeForm: React.FC<Props> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ name: '', degreeKinship: '', photo: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFormData((prev) => ({ ...prev, photo: imageUrl }));
        }
    };

    const handleSubmit = () => {
        onSubmit(formData);
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

            <input
                className={styles.inputDegreeKinship}
                name="degreeKinship"
                value={formData.degreeKinship}
                onChange={handleChange}
                placeholder="Степень родства"
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
                onClick={handleSubmit}
            >
                Добавить
            </button>

            <div className={styles.addFormBlur}></div>
        </form>
    );
};

export default AddNodeForm;