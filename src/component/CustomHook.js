import React, { useEffect, useState } from "react";

// Old way and not command this way.
const BoxOldMouseMove = () => {
    const [state, setState] = useState({ left: 0, top: 0, width: 100, height: 100 });
    useEffect(() => {
        const handleWindowMouseMove = (e) => {
            setState(state => ({
                ...state,
                left: e.pageX,
                top: e.pageY,
            }));
        }
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => window.removeEventListener('mousemove', handleWindowMouseMove);
    }, []);
    return (
        <div>
            <h3>使用react的useEffect Hook来做鼠标mousemove事件的注册，return的时候取消注册事件，位置： {state.height}, {state.width}, {state.left}, {state.top}</h3>
        </div>
    )
}

const BoxMouseMove = () => {
    const windowPosition = useWindowPosition();
    const windowSize = useWindowSize();
    return (
        <div>
            <h3>使用react的useEffect Hook来做鼠标mousemove事件的注册，return的时候取消注册事件，位置： {windowPosition.left}, {windowPosition.top}, {windowSize.width}, {windowSize.height}</h3>
        </div>
    )
}

const useWindowSize = () => {
    const [size, setSize] = useState({width: 100, height: 200});
    useEffect(() => {
        setSize({
            width: 1000,
            height: 500,
        })
        document.title = `click count is ${size.width}, ${size.height}`;
    }, [size.width, size.height])
    return size;
}

const useWindowPosition = () => {
    const [position, setPosition] = useState({left: 0, top: 0});
    useEffect(() => {
        const handleWindowMouseMove = (e) => {
            setPosition({
                left: e.pageX,
                top: e.pageY,
            });
        }
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => window.removeEventListener('mousemove', handleWindowMouseMove);
    }, [])
    return position;
}

export default BoxMouseMove;