import { useEffect, useMemo, useState } from "react";
import moment from "moment";

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

function useTimer(date: string | number) {
  const [seconds, setSeconds] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const isLate = moment(moment.now()).isAfter(moment(date));

    if (isLate) {
      setSeconds(0);
      setMinuts(0);
      setHours(0);
      setDays(0);
      return;
    }

    const parsedDate = moment.duration(moment(date).diff(moment(moment.now())));

    const days = Math.floor(parsedDate.asDays());
    const hours = Math.floor(parsedDate.asHours());
    const minuts = Math.floor(parsedDate.asMinutes());
    const seconds = Math.floor(parsedDate.asSeconds());

    const parsedHours = days ? hours % (days * 24) : hours;
    const parsedMinuts = hours ? minuts % (hours * 60) : minuts;
    const parsedSeconds = minuts ? seconds % (minuts * 60) : seconds;

    setDays(days);
    setHours(parsedHours);
    setMinuts(parsedMinuts);
    setSeconds(parsedSeconds);
  }, [date]);

  // Turn a timer value like "0 minuts" into "00 minuts for beautiful displaying"
  const formatValue = (value: number) => (value.toString().length === 1 ? `0${value}` : value);

  const formattedResult = useMemo(() => {
    const formattedSeconds = formatValue(seconds);
    const formattedMinuts = formatValue(minuts);
    const formattedHours = formatValue(hours);
    const formattedDays = formatValue(days);

    const secondsNoun = getNoun(seconds, "секунду", "секунды", "секунд");
    const minutsNoun = getNoun(minuts, "минуту", "минуты", "минут");
    const hoursNoun = getNoun(hours, "час", "часа", "часов");
    const daysNoun = getNoun(days, "день", "дня", "дней");

    return {
      seconds: formattedSeconds,
      minuts: formattedMinuts,
      hours: formattedHours,
      days: formattedDays,
      secondsNoun,
      minutsNoun,
      hoursNoun,
      daysNoun,
    };
  }, [seconds, minuts, hours, days]);

  return formattedResult;
}

export default useTimer;
