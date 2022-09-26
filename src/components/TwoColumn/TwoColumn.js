import React from 'react';

import './TwoColumn.scss';

const TwoColumn = ({ column1, column2 }) => {
    return (
        <div className="c-split-lists">
            <div className="o-container">
                <div className="o-box">
                    <div className="o-row">
                        <div className="c-split-lists__col [ o-column md:o-column-6 ] [ u-mb-lg md:u-mb-none ]">
                            <div className="o-box">{column1}</div>
                        </div>
                        <div className="c-split-lists__col [ o-column md:o-column-6 ]">
                            <div className="o-box">{column2}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoColumn;
