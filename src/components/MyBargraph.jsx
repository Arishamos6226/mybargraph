import React from 'react';
import PropTypes from 'prop-types';
import './MyBargraph.css';

const MyBargraph = ({ value, maxvalue, barwidthpx }) => {
    const percentage = (value / maxvalue) * 100;

    return (
        <div className="bargraph-container" style={{ width: `${barwidthpx}px` }}>
            <div
                className="bargraph-bar"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

MyBargraph.propTypes = {
    value: PropTypes.number.isRequired,
    maxvalue: PropTypes.number.isRequired,
    barwidthpx: PropTypes.number.isRequired,
};

export default MyBargraph;