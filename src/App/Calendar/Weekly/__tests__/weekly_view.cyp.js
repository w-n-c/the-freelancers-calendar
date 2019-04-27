import {hours} from '../'
describe('Weekly component renders', function() {
	it('should display a week divided into days x hours', function() {
		cy
			.visit('/weekly/2019/4/26')
			.get('tbody>tr').should('have.length', 24)
			.each(($tr, i) => {
				cy
					.wrap($tr)
					.contains('th', hours[i])
			})
	})
})
