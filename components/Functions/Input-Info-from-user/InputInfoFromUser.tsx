import React, { useState } from 'react';
import styles from './inputInfoFromUser.module.css';
import AddNewNodeObject from '../AddNewNodeObject';

interface Props {
    visibility: boolean;
    firstPush: boolean;
}

const InputInfoFromUser: React.FC<Props> = ({ visibility = false, firstPush = false }) => {
    const [visibilityAddNewNode, setVisibilityAddNewNode] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        name: '',
        degreeKinship: '',
        photo: '',
    });

    // функция сбора информации из всех input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
        ...prev,
        [name]: value,
        }));
    };

    // функция вызова компонента NodeCardInfo с введенными данными в input
    const voiteCompNodeCard = () => {
        setVisibilityAddNewNode(true);
    }

    if (visibility === true && firstPush === true){
        return (
            <form className={styles.popupContainer}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введи имя!"
                />

                <input
                    type="text"
                    name="degreeKinship"
                    value={formData.degreeKinship}
                    onChange={handleChange}
                    placeholder="Какая степень родства?"
                />
                <button
                    onClick={ voiteCompNodeCard }
                    type="button"
                    >
                    Добавить
                </button>

                {visibilityAddNewNode && (
                    <AddNewNodeObject
                        visibility={visibilityAddNewNode}
                        name={formData.name}
                        picture={formData.photo}
                        degreeKinship={formData.degreeKinship}
                    />
                )}
            </form>
        );
    } else {
        return (
            <form className={styles.popupContainer}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введи имя!"
                />

                <input
                    type="text"
                    name="degreeKinship"
                    value={formData.degreeKinship}
                    onChange={handleChange}
                    placeholder="Какая степень родства?"
                />

                <input
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    placeholder="Добавьте фото!"
                    className={styles.photo}
                />

                <button
                    onClick={ voiteCompNodeCard }
                    type="button"
                    >
                    Добавить
                </button>

                {visibilityAddNewNode && (
                    <AddNewNodeObject
                        visibility={visibilityAddNewNode}
                        name={formData.name}
                        picture={formData.photo}
                        degreeKinship={formData.degreeKinship}
                    />
                )}
            </form>
        );
    }

    return null;
};

export default InputInfoFromUser;