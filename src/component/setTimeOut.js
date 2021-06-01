import React, { useState, useEffect } from 'react';

export default function SetTimeOut() {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCounter(counter => {
                const c = counter + 1;
                return c;
            });
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    });

    const resetCounter = () => {
        setCounter(counter => {
            return 1;
        });
    };

    return (
        <div>
            <h1>
                <center>
                    SetTimeOut Counter - {counter} <br />
                    <button class="btn" onClick={resetCounter}>
                        Reset Counter
                    </button>
                </center>
            </h1>
        </div>
    );
}
