import * as React from "react";
import { SvgXml } from "react-native-svg";

export const SuccessImage = () => {
  const xml = `
  <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="61.2256" y="14.2254" width="2" height="8" rx="1" fill="#00D68F"/>
  <rect x="61.2256" y="102.225" width="2" height="8" rx="1" fill="#00D68F"/>
  <rect x="110.226" y="61.2254" width="2" height="8" rx="1" transform="rotate(90 110.226 61.2254)" fill="#00D68F"/>
  <rect x="22.2256" y="61.2254" width="2" height="8" rx="1" transform="rotate(90 22.2256 61.2254)" fill="#00D68F"/>
  <rect x="92.631" y="30.4056" width="2" height="4" rx="1" transform="rotate(45 92.631 30.4056)" fill="#8CFAC7"/>
  <rect x="33.234" y="89.8026" width="2" height="4" rx="1" transform="rotate(45 33.234 89.8026)" fill="#8CFAC7"/>
  <rect x="94.0452" y="92.631" width="2" height="4" rx="1" transform="rotate(135 94.0452 92.631)" fill="#8CFAC7"/>
  <rect x="34.6483" y="33.234" width="2" height="4" rx="1" transform="rotate(135 34.6483 33.234)" fill="#8CFAC7"/>
  <circle cx="62.2256" cy="62.2254" r="36" fill="#00D68F"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M60.0889 68.2254C59.8129 68.2254 59.5489 68.1114 59.3599 67.9104L54.4969 62.7314C54.1179 62.3294 54.1389 61.6964 54.5409 61.3184C54.9439 60.9404 55.5769 60.9604 55.9539 61.3624L60.0789 65.7534L68.4869 56.5514C68.8609 56.1424 69.4929 56.1154 69.9009 56.4874C70.3079 56.8594 70.3359 57.4924 69.9639 57.8994L60.8269 67.8994C60.6399 68.1054 60.3739 68.2234 60.0959 68.2254H60.0889Z" fill="white"/>
  </svg>  
    `;
  return <SvgXml xml={xml} />;
};
