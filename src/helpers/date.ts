export function subtractRandomTimeFromDate(dateISO?: string, after: boolean = false): string {
    const currentDate: Date = dateISO ? new Date(dateISO) : new Date()
    const randomMilliseconds: number = Math.floor(Math.random() * (7 * 24 * 60 * 60 * 1000)) + (24 * 60 * 60 * 1000)
    const newDate: number = after ? currentDate.getTime() + randomMilliseconds : currentDate.getTime() - randomMilliseconds
    return new Date(newDate).toISOString()
}

export function formatDateFromISO(isoDate: string): string {
    const date: Date = new Date(isoDate)
    const options: Record<string, string> = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleDateString('ru-RU', options)
}

export function formatTimeDifferenceFromNow(isoDate: string): string {
    const currentDate: Date = new Date()
    const targetDate: Date = new Date(isoDate)
    let difference: number = currentDate.getTime() - targetDate.getTime()

    const months: number = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
    difference -= months * (1000 * 60 * 60 * 24 * 30)

    const days: number = Math.floor(difference / (1000 * 60 * 60 * 24))
    difference -= days * (1000 * 60 * 60 * 24)

    const hours: number = Math.floor(difference / (1000 * 60 * 60))
    difference -= hours * (1000 * 60 * 60)

    const minutes: number = Math.floor(difference / (1000 * 60))

    let result = ""
    if (months > 0) result += months + "м "
    if (days > 0) result += days + "д "
    if (hours > 0) result += hours + "ч "
    result += minutes + "мин"

    return result
}


