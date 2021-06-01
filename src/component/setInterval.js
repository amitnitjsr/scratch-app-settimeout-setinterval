import React, { useState, useEffect } from 'react';

export default function SetInerval() {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        let myInterval = setInterval(() => {
            setCounter(counter => {
                const c = counter + 1;
                return c;
            });
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    const resetCounter = () => {
        setCounter(counter => { return 1; });
    };

    return (
        <div>
            <h1>
                <center>
                    SetInterval Counter - {counter} <br />
                    <button class="btn" onClick={resetCounter}>
                        Reset Counter
                    </button>
                </center>
            </h1>
        </div>
    );
}
