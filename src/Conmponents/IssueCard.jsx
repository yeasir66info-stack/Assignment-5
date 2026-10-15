import React from 'react';

const IssueCard = ({ issue, onAddStack }) => {
  const { name, badge, description, category, level, rating } = issue;

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
            {name.charAt(0)}
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-600">
            {badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-600 mb-4 bg-gray-50 px-3 py-2 rounded-lg">
          <span className="bg-white px-2 py-1 rounded border border-gray-200 font-medium">{category}</span>
          <span className="text-gray-500">{level}</span>
          <span className="flex items-center text-amber-500 font-semibold">
            ⭐ {rating}
          </span>
        </div>

        <button 
          onClick={() => onAddStack(issue)}
          className="w-full bg-gray-950 hover:bg-gray-900 text-white font-medium py-2.5 rounded-xl transition-all cursor-pointer shadow-sm text-sm"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default IssueCard;