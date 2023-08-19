import  * as React from "react";
import { SvgXml } from "react-native-svg";

export const Phone = () => {
  const xml = `
  <svg width="360" height="800" viewBox="0 0 360 800" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="-182" y="-8" width="835" height="842" fill="url(#pattern0)"/>
  <defs>
  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0_1_209" transform="matrix(0.000756477 0 0 0.000750188 -0.256477 0)"/>
  </pattern>
  </defs>
  </svg>
  
    `;
  return <SvgXml xml={xml} />;
};