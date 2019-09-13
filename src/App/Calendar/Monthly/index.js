import React, { useContext } from 'react'
import { pick, map, extend, chunk } from 'lodash/fp'
import EventContext from '../../EventContext'
import SectionHeader from '../SectionHeader'
import Days from './Days'
import { getDaysOfMonth } from './utils'


// screen reads a little awkwardly but should work until we make
// a tagged template to parse the numbers
const makeAriaHeader = week => makeWeekRangeString(week[0].date, week[6].date)
const makeWeekRangeString = (start, end) => `Week of the ${start} to the ${end}`

export default (props) => {
	const day = pick(['year', 'month', 'date'], props)
	const { navigate } = props

	const { filterTodaysEvents } = useContext(EventContext)
	const addEvents = day => extend(day, { events: filterTodaysEvents(day)})
	const daysOfMonth = map(addEvents, getDaysOfMonth(day))
	const weeksOfMonth = chunk(7, daysOfMonth)

	return <div className="monthly" role="rowgroup">
		{weeksOfMonth.map((daysOfWeek, i) =>
			<section role="row" key={i}>
				<SectionHeader
					role="rowheader"
					className="aria-only"
					ariaHeader={makeAriaHeader(daysOfWeek)}
				/>
				<Days days={daysOfWeek} navigate={navigate} />
			</section>
		)}
	</div>
}
