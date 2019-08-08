import React from 'react'
const newEvent = ({year, month, date}) => {
	const event = {}
	event.start = new Date(`${year}/${month}/${date}`).toISOString()
	event.end = event.start
	return event
}

export default ({days, handleClick}) => {
		return days.map((day, i) => {
			return (
				<article role="cell" key={i} onClick={(e) => handleClick(newEvent(day))}>
					<h4>{day.date}</h4>
					<ul>
						{day.events.map(event => event.id ?
							<li
								key={event.id}
								onClick={e => {
									e.stopPropagation()
									handleClick(event)
								}}
							>
								{event.title}
							</li>
						: '')}
					</ul>
				</article>
			)
		})
}
