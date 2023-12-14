const now = new Date();

export function getYear(date) {
    return (date ?? now).getFullYear();
}

export function getMonth(date) {
    return (date ?? now).getMonth();
}

export function getDay(date) {
    return (date ?? now).getDate();
}

export function getDaysInMonth(year, month) {
    year = year ?? getYear();
    month = month ?? getMonth();
    return new Date(year, month + 1, 0).getDate();
}


export function getExactDate(year, month, day) {
    year = year ?? getYear();
    month = month ?? getMonth();
    day = day ?? getDay();
    return new Date(year, month, day);
}

export function addMonths(date, toAdd) {
    const nextMonth = date.getMonth() + toAdd;
    return new Date(date.setMonth(nextMonth))
}