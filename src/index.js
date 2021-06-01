import React from 'react';
import ReactDOM from 'react-dom';
import SetTimeOut from './component/setTimeOut';
import SetInterval from './component/setInterval';

export default function App() {

    return (
        <div>
            <SetTimeOut />
            <SetInterval />
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)