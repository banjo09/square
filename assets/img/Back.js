import { SvgXml } from "react-native-svg";

export const BackButton = () => {
  const xml = `
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 1L1 7L7 13" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>  
    `;
  return <SvgXml xml={xml} />;
};

export const Back = ({ onClick }) => {
  const xml = `
  <svg width="22" height="22" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-a</title><polyline points="244 400 100 256 244 112" style="fill:none;stroke:#000A4A;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/><line x1="120" y1="256" x2="412" y2="256" style="fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"/></svg>
  `;
  return <SvgXml xml={xml} />;
};

export const BlackBackButton = () => {
  const xml = `
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 1L1 7L7 13" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>  
    `;
  return <SvgXml xml={xml} />;
};