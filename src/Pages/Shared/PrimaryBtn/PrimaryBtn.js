import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default PrimaryBtn;