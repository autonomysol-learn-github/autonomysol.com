import { useState, useEffect } from 'react';

const useLoader = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        setIsLoading(true);

        return () => clearTimeout(timer);
    }, []);

    return isLoading;
};

export default useLoader;