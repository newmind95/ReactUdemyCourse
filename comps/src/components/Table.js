import { Fragment } from 'react';

const Table = ({ data, config, keyFn }) => {

	const renderedHeaders = config.map((column) => {
		if (column.header) {
			return <Fragment key={column.label}>{column.header()}</Fragment>
		}
		return <th key={column.label}>{column.label}</th>
	});

	const renderedRows = data.map((rowData) => {
		const renderedCells = config.map((column) => {
			return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
		});
		return (
			<tr className="border-b-2" key={keyFn(rowData)}>
				{renderedCells}
			</tr>
		);
	});

	return (
		<div>
			<table className="table-auto border-spacing-4">
				<thead className="border-b-2">
					<tr>
						{renderedHeaders}
					</tr>
				</thead>
				<tbody>
					{renderedRows}
				</tbody>
			</table>
		</div>
	);
}

export default Table;