import  * as React from "react";
import { SvgXml } from "react-native-svg";

export const Girl = () => {
  const xml = `
  <svg width="360" height="800" viewBox="0 0 360 800" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="-11" y="-10" width="1080" height="820" fill="url(#pattern0)"/>
  <defs>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0_1_240" transform="matrix(0.000569587 0 0 0.000750188 -0.0695868 0)"/>
  </pattern>
  </defs>
  </svg>  
    `;
  return <SvgXml xml={xml} />;
};