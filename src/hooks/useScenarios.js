import { useState, useEffect } from 'react';

const useScenarios = () => {
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Viteの'base'設定を自動的に反映させるため、相対パスでfetchする
    const dataUrl = `${import.meta.env.BASE_URL}data.json`;

    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setScenarios(data.scenarios || []);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { scenarios, loading, error };
};

export default useScenarios;