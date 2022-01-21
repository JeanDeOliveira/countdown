const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = '1 Jan 2022'

function countdown(){
	const newYearsDate = new Date(newYeras)
	const currentDate = new Date();

	const totalSecs = (currentDate - newYearsDate) / 1000

	const minutes = Math.floor(totalSecs/60) % 60;
	const hours = Math.floor(totalSecs/3600) % 24;
	const seconds = Math.floor(totalSecs) % 60

	hoursEl.innerHTML = formatTime(hours)
	minutesEl.innerHTML = formatTime(minutes)
	secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

//initial call
countdown()

setInterval(countdown, 1000)