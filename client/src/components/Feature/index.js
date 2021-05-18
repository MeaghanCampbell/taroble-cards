import React from 'react';

const stats = [
    { name: 'Fortunes Read', stat: '71,897' },
    { name: 'Avg. Accuracy', stat: '58.16%' },
    { name: 'Avg. Positivity', stat: '24.57%' },
]

export default function Feature() {
    return (
        <div className="bg-gray-300 p-10">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}