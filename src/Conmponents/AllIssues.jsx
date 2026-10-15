import React from 'react';
import IssueCard from './IssueCard';

const AllIssues = ({ allIssues, completedIssues, onAddStack, onRemoveItem, onRemoveAll }) => {
    console.log(allIssues);
    
    return (
        <div className='w-full bg-gray-50 min-h-screen py-12 px-6 md:px-16'>
            <div className='max-w-7xl mx-auto'>
            
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
                    
                    <div className='lg:col-span-9 space-y-8'>
                        
                        <div>
                            <h1 className='text-3xl md:text-4xl font-extrabold text-gray-950'>
                                Explore the{' '}
                                <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
                                    Technologies
                                </span>
                            </h1>
                            <p className='mt-2 text-base md:text-lg text-gray-500'>
                                Pick one technology per category to build your ideal stack.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                            {
                                Array.isArray(allIssues) && allIssues.map((issue) => (
                                    <IssueCard 
                                        key={issue.id} 
                                        issue={issue} 
                                        onAddStack={onAddStack} 
                                    />
                                ))
                            }
                        </div>

                    </div>

                    {/* Right Sidebar: Your Stack */}
                    <div className='lg:col-span-3 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-6'>
                        <h3 className='text-lg font-bold text-gray-900'>Your Stack</h3>
                        <p className='text-xs text-gray-400 mb-4'>
                            {completedIssues.length} Technology Selected
                        </p>
                        
                        {/* Selected Items List */}
                        <div className='space-y-3 mb-6 max-h-[350px] overflow-y-auto'>
                            {completedIssues.length === 0 ? (
                                <div className='py-8 text-center text-gray-400 text-sm'>
                                    No technologies added yet.
                                </div>
                            ) : (
                                completedIssues.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-gray-50"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">
                                                {item.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900">{item.name}</h4>
                                                <span className="text-[10px] text-gray-400">{item.category}</span>
                                            </div>
                                        </div>
                                        
                                        <button 
                                            onClick={() => onRemoveItem(item.id)}
                                            className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer p-1"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        <button 
                            onClick={onRemoveAll}
                            className="w-full border border-pink-500 text-pink-600 hover:bg-pink-50 font-medium py-2 rounded-xl transition-all cursor-pointer text-sm"
                        >
                            Remove All
                        </button>
                    
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AllIssues;