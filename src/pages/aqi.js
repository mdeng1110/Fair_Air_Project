import React from "react";
import "./aqi.css";
import aqitable from "./table.png";
import table from './table.png';

const AQI = () => {
  return (
    <div class="aqi">
      <div class="aqi-section">
        <div class="aqi-inner-container">
          <h1>Air Quality Index (AQI)</h1>
          <div>
          <img src={table} alt="aqi"/>
          </div>
          <br />
          <h2>How does the AQI work?</h2>
          <p class="text">
            Think of the AQI as a yardstick that runs from 0 to 500. The higher
            the AQI value, the greater the level of air pollution and the
            greater the health concern. For example, an AQI value of 50 or below
            represents good air quality, while an AQI value over 300 represents
            hazardous air quality. For each pollutant an AQI value of 100
            generally corresponds to an ambient air concentration that equals
            the level of the short-term national ambient air quality standard
            for protection of public health. AQI values at or below 100 are
            generally thought of as satisfactory. When AQI values are above 100,
            air quality is unhealthy: at first for certain sensitive groups of
            people, then for everyone as AQI values get higher. The AQI is
            divided into six categories. Each category corresponds to a
            different level of health concern. Each category also has a specific
            color. The color makes it easy for people to quickly determine
            whether air quality is reaching unhealthy levels in their
            communities.
          </p>
          <image src={aqitable} width="160" alt="aqi" />
          <br />

          <h2>Five major pollutants</h2>
          <p class="text">
            EPA establishes an AQI for five major air pollutants regulated by
            the Clean Air Act. Each of these pollutants has a national air
            quality standard set by EPA to protect public health:
            <p> -ground-level ozone</p>
            <p>
              -particle pollution (also known as particulate matter, including
              PM2.5 and PM10)
            </p>
            <p>-carbon monoxide</p>
            <p>sulfur dioxide</p>
            <p>nitrogen dioxide</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AQI;
