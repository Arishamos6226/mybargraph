import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import MyBargraph from '../../src/components/MyBargraph.jsx';

const App = () => {

    return (
        <div>
            <h1>MyBargraph – Demo</h1>
            <MyBargraph value={30} maxvalue={100} barwidthpx={400} />
        </div>
    );
};

createRoot(document.getElementById('root')).render(<App />);