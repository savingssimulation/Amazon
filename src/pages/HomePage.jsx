import React from 'react';
import useScenarios from '../hooks/useScenarios';
import ScenarioCard from '../components/ScenarioCard';

const HomePage = () => {
  const { scenarios, loading, error } = useScenarios();

  if (loading) return <p>Loading scenarios...</p>;
  if (error) return <p>Error loading scenarios: {error.message}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">ライフスタイル別 節約額シミュレーション</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenarios.map((scenario) => (
          <ScenarioCard key={scenario.meta.slug} scenario={scenario} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;