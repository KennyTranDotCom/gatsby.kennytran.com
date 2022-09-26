import React from 'react';

import './Divider.scss';

const Divider = ({ size }) => {
    return <hr className={'c-divider ' + (size ? '-width-' + size : '')} />;
};

export default Divider;
