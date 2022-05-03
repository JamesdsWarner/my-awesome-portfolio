import { useState, useEffect } from 'react';

export const useWindowSize = () => {

    const [isWide, setIsWide] = useState(undefined);
    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 960) {
                setIsWide(false)
            } else {
                setIsWide(true)
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, []);
    return isWide;
}