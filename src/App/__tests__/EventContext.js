import * as ReactAll from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import { EventProvider, EventConsumer } from '../EventContext'

describe('<EventContext />', () => {
	const isLoggedIn = false
	jest.spyOn(ReactAll, 'useContext').mockImplementation(() => ({
		isLoggedIn
	}))
	it('renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<EventProvider />, div)
		ReactDOM.unmountComponentAtNode(div)
		ReactDOM.render(<EventConsumer>{() => {}}</EventConsumer>, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
