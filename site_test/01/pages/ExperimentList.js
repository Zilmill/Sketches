// ExperimentList.js

import React from 'react';
import { Link } from 'react-router';

const ExperimentList = ({
	experiments
}) => {

	console.log('Experiments : ', experiments);
	return (
		<div>
			{
				experiments.map( (exp) => {
					let dest = '/exps/'+exp.id.toString();
					return <Link to={dest} key={exp.id}>{exp.cover}</Link>;
				})
			}
		</div>
	);
}

export default ExperimentList;