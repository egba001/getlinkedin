export const calculateTimeLeft = (targetTime) => {
    const now = new Date().getTime();
    const difference = targetTime - now;
    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    return { hours, minutes, seconds };
}
