

export function generateMonthData() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const monthData = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const currentDay = new Date(currentYear, currentMonth, day);
        const formattedDate = currentDay.getDate();
        const dayOfWeek = currentDay.toLocaleDateString('en-US', { weekday: 'short' }).split('')[0]
        const dayOfWeek2 = currentDay.toLocaleDateString('en-US', { weekday: 'short' }).split('')[1]
        const nameOfDay = dayOfWeek + dayOfWeek2
        monthData.push({ date: formattedDate, nameOfDay });
    }

    return monthData;
}