import React from 'react';
import { Link } from 'react-router-dom';

const ScenarioCard = ({ scenario }) => {
  return (
    <Link to={`/${scenario.meta.slug}`} className="block border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{scenario.meta.title}</h2>
      <p className="text-gray-700">{scenario.meta.description}</p>
    </Link>
  );
};

export default ScenarioCard;