import { useEffect, useState } from "react";

const useMyAds = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/ads.json'); // Fetch from the root of the application
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return { data, loading, error };
}
export default useMyAds;