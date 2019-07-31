/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const registerLocBase = '~@daykeep/calendar-quasar/component/calendar/'
const registerLoc = registerLocBase + 'templates/quasar/'

function extendWithComponent (conf) {
  // make sure boot file is registered
  conf.boot.push('~quasar-app-extension-daykeep/src/boot/index.js')

  // make sure boot file transpiles
  conf.build.transpileDependencies.push(/quasar-app-extension-daykeep[\\/]src[\\/]boot/)

  // add calendar styles
  conf.css.push(registerLocBase + 'styles-common/calendar.vars.styl')
}

module.exports = function (api) {
  api.compatibleWith('@quasar/app', '1.x')

  // register JSON api
  api.registerDescribeApi('DaykeepCalendar', registerLoc + 'Calendar.json')
  api.registerDescribeApi('DaykeepCalendarAgenda',  registerLoc + 'CalendarAgenda.json')
  api.registerDescribeApi('DaykeepCalendarMonth',  registerLoc + 'CalendarMonth.json')
  api.registerDescribeApi('DaykeepCalendarMultiDay',  registerLoc + 'CalendarMultiDay.json')

  // extend quasar.conf
  api.extendQuasarConf(extendWithComponent)
}
