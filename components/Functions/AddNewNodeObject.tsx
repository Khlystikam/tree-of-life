import React from 'react';
import NodeCardInfo from '../NodeCard/NodeCard';

interface Props {
    visibility: boolean;
    name: string;
    picture: string;
    degreeKinship: string;
}

const AddNewNodeObject: React.FC<Props> = ({ visibility = false, name = "", picture = "", degreeKinship = ""}) => {

    if (visibility === true){
        return (
            <NodeCardInfo name={ name } picture={ picture } degreeKinship={ degreeKinship } />
        );
    }

    return null;
};

export default AddNewNodeObject;