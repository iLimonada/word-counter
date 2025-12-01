const averageReadingTime = (text: string = ''):string => {
    if(!text) return '0';

    const wordPerMinute = 225; // Média 200-250
    const words = text.trim().split(/\s+/).length;
    if(words === 0) return '0'

    const time = Math.ceil(words / wordPerMinute)
    return `~${time} ${time > 1 ? 'minutos' : 'minuto'}`
}

export default averageReadingTime;