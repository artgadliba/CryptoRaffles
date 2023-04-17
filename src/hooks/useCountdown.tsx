import { useEffect, useState, useMemo } from 'react';

function getNoun(number: number, one: string, two: string, plural: string) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return plural;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return plural;
}

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {

    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  var days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    days=hours=minutes=seconds=0;
  }

  const formatValue = (value: number) => (value.toString().length === 1 ? `0${value}` : value);

  const formattedResult = useMemo(() => {
    const formattedSeconds = formatValue(seconds);
    const formattedMinutes = formatValue(minutes);
    const formattedHours = formatValue(hours);
    const formattedDays = formatValue(days);

    const secondsNoun = getNoun(seconds, "секунду", "секунды", "секунд");
    const minutesNoun = getNoun(minutes, "минуту", "минуты", "минут");
    const hoursNoun = getNoun(hours, "час", "часа", "часов");
    const daysNoun = getNoun(days, "день", "дня", "дней");

    return {
      seconds: formattedSeconds,
      minutes: formattedMinutes,
      hours: formattedHours,
      days: formattedDays,
      secondsNoun,
      minutesNoun,
      hoursNoun,
      daysNoun,
    };
  }, [seconds, minutes, hours, days]);

  return formattedResult;
};

export { useCountdown };
