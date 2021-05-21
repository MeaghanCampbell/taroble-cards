import React from 'react';

const stats = [
	{ name: 'Fortunes Read', stat: '71,897' },
	{ name: 'Avg. Accuracy', stat: '58.16%' },
	{ name: 'Avg. Positivity', stat: '24.57%' },
]

export default function Feature() {
	return (
		<div>
			<h3>Last 30 days</h3>
			<dl>
				{stats.map((item) => (
					<div key={item.name}>
						<dt>{item.name}</dt>
						<dd>{item.stat}</dd>
					</div>
				))}
			</dl>
		</div>
	)
}