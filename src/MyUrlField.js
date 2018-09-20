import React from 'react';
import PropTypes from 'prop-types';

const UrlField = ({ record = {}, source }) => 
    <a href={record[source]}>
        {record[source]}
    </a>;

UrlField.propTypes = {
    record: PropTypes.object,
    source: PropTypes.isRequired,
};

export default UrlField;