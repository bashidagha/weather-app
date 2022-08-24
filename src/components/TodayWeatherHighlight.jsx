import React from "react";
import styles from "./todayweatherhighlight.module.css";

const TodayWeatherHighlight = (props) => {
  return (
    <>
      <div className={styles.today__highlight}>
        <h2>Today’s Hightlights </h2>

        <div className={styles.today__highlight__container}>
          <div className={styles.wind}>
            <p>Wind status</p>
            <div className={styles.in}>
              {Math.round(props.weather.wind_spd)}
              <span> mph</span>
            </div>
            <p>
              <span className="material-icons">air</span>
              {props.weather.wind_cdir_full}
            </p>
          </div>

          <div className={styles.humid}>
            <p>Humidity</p>
            <div className={styles.in}>
              {Math.round(props.weather.rh)}
              <span> %</span>
            </div>

            <div className={styles.bar}>
              <div
                className={styles.barcolor}
                style={{ width: `${props.weather.rh}%` }}
              ></div>
              <span className={styles.bar50}>50</span>
              <span className={styles.barpercent}>%</span>
            </div>
          </div>

          <div className={styles.visible}>
            <p>Visibility</p>
            <div className={styles.in}>
              {props.weather.vis}
              <span> miles</span>
            </div>
          </div>

          <div className={styles.pressure}>
            <p>Air Pressure</p>
            <div className={styles.in}>
              {Math.round(props.weather.pres)}
              <span> mb</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayWeatherHighlight;
