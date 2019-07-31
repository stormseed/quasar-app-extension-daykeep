import {
  DaykeepCalendar,
  DaykeepCalendarAgenda,
  DaykeepCalendarMonth,
  DaykeepCalendarMultiDay
} from '@daykeep/calendar-quasar'

export default ({ Vue }) => {
  Vue.component('DaykeepCalendar', DaykeepCalendar)
  Vue.component('DaykeepCalendarAgenda', DaykeepCalendarAgenda)
  Vue.component('DaykeepCalendarMonth', DaykeepCalendarMonth)
  Vue.component('DaykeepCalendarMultiDay', DaykeepCalendarMultiDay)
  Vue.component('daykeep-calendar', DaykeepCalendar)
  Vue.component('daykeep-calendar-agenda', DaykeepCalendarAgenda)
  Vue.component('daykeep-calendar-month', DaykeepCalendarMonth)
  Vue.component('daykeep-calendar-multi-day', DaykeepCalendarMultiDay)
}
