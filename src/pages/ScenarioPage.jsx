import React from 'react';
import { useParams } from 'react-router-dom';
import useScenarios from '../hooks/useScenarios';

const ScenarioPage = () => {
  const { slug } = useParams();
  const { scenarios, loading, error } = useScenarios();

  if (loading) return <p>Loading scenario...</p>;
  if (error) return <p>Error loading scenario: {error.message}</p>;

  const scenario = scenarios.find((s) => s.meta.slug === slug);

  if (!scenario) return <p>Scenario not found.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{scenario.meta.title}</h1>
      <p className="text-gray-600 mb-8">{scenario.meta.description}</p>
      
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: scenario.content_html }} />

      <h2 className="text-2xl font-bold mt-12 mb-4">対象商品</h2>
      <ul>
        {scenario.products.map(product => (
          <li key={product.asin} className="mb-4">
            <a href={product.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {product.name} - {product.price}円
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScenarioPage;