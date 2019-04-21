import React from 'react'
import Monthly from './Monthly'
import Weekly from './Weekly'
import Daily from './Daily'

export const Calendar = (props) => {
	const view = props.view
	return <table>
		<thead>
			<tr>
				{view === 'weekly' && <td></td>}
				<th scope="col">S</th>
				<th scope="col">M</th>
				<th scope="col">Ty</th>
				<th scope="col">Wday</th>
				<th scope="col">Tay</th>
				<th scope="col">F</th>
				<th scope="col">Say</th>
			</tr>
		</thead>
		<tbody>
			{view === 'monthly' ? (
				<Monthly {...props}/>
			) : view === 'weekly' ? (
				<Weekly />
			) : (
				<Daily />
			)}
		</tbody>
	</table>
}
