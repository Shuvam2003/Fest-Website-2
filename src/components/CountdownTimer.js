import { useState, useEffect } from "react";
import styles from "./CountdownTimer.module.scss";

const CountdownTimer = ({ countdownDate: toDate, handleTimerComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 12,
    minutes: 45,
    seconds: 40,
  });

  useEffect(() => {
    if (!toDate) {
      console.error("Countdown date is undefined.");
      return;
    }

    console.log("Countdown initialized with date:", toDate);

    const countdownDate = new Date(toDate).getTime();

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(timerInterval);
        handleTimerComplete(true);
        console.log("Countdown finished!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log("Time left:", { days, hours, minutes, seconds });
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timerInterval);
  }, [toDate, handleTimerComplete]);

  return (
    <div className={styles.timer}>
      <div className={styles["counter-wrapper"]}>
        <div className={styles.counter}>
          {timeLeft.days.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div>
        <div className={styles.label}>Days</div>
      </div>
      <div className={styles["counter-wrapper"]}>
        <div className={styles.counter}>
          {timeLeft.hours.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div>
        <div className={styles.label}>Hours</div>
      </div>
      <div className={styles["counter-wrapper"]}>
        <div className={styles.counter}>
          {timeLeft.minutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div>
        <div className={styles.label}>Minutes</div>
      </div>
      <div className={styles["counter-wrapper"]}>
        <div className={styles.counter}>
          {timeLeft.seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </div>
        <div className={styles.label}>Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
