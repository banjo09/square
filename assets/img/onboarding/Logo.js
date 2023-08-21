import * as React from "react";
import { SvgXml } from "react-native-svg";

export const Logo = () => {
  const xml = `
  <svg width="155" height="20" viewBox="0 0 155 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M140.716 10.8507C142.324 11.6275 143.983 12.0145 145.387 11.9384C145.395 11.9384 145.404 11.9369 145.412 11.9369L145.512 1.59883C145.516 1.23352 145.121 1.0136 144.83 1.21787L136.444 7.08434C137.123 8.42553 138.692 9.87183 140.715 10.8507H140.716Z" fill="#00C6FB"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M145.037 12.9297C143.574 12.9297 141.914 12.5129 140.315 11.7406C138.109 10.6745 136.45 9.15287 135.653 7.63574L131.389 10.6193C131.056 10.8527 131.177 11.3894 131.574 11.4446L138.735 12.4548C139.156 12.5152 139.542 12.7306 139.822 13.0616L144.58 18.7022C144.845 19.0161 145.342 18.8252 145.347 18.4077L145.4 12.92C145.28 12.9274 145.158 12.9304 145.035 12.9304L145.037 12.9297Z" fill="#00C6FB"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M145.036 12.145C143.572 12.145 141.913 11.729 140.314 10.9559C136.553 9.13763 134.378 5.9975 135.364 3.80568C136.349 1.61535 140.068 1.32311 143.829 3.14292C145.059 3.73784 146.175 4.50945 147.055 5.37425C147.244 5.56063 147.252 5.873 147.073 6.06907C146.892 6.26589 146.592 6.27484 146.403 6.08846C145.597 5.29523 144.569 4.5855 143.429 4.03456C140.258 2.50103 136.958 2.5875 136.222 4.22242C135.487 5.85734 137.544 8.53301 140.714 10.0665C142.322 10.8441 143.981 11.2303 145.385 11.1543C146.681 11.0842 147.581 10.6309 147.92 9.87867C148.273 9.09438 147.932 8.19977 147.584 7.58546C147.451 7.35062 147.526 7.05018 147.752 6.91226C147.979 6.77434 148.268 6.85261 148.401 7.08671C149.057 8.24077 149.191 9.37992 148.78 10.2932C148.287 11.3898 147.099 12.0437 145.436 12.1346C145.303 12.1421 145.17 12.145 145.036 12.145Z" fill="#00C6FB"/>
  <path d="M11.1309 1.76314C9.74967 0.523346 8.12904 0 6.11008 0C3.26786 0 0.451531 1.29496 0.451531 4.37992C0.451531 7.57521 3.50657 8.62191 5.95046 8.73225C7.73071 8.78742 8.18224 9.31076 8.18224 9.94445C8.20885 10.6609 7.33166 11.1291 6.21649 11.1015C4.83529 11.0739 3.26786 10.7712 1.64723 9.39352L0 12.2034C2.23178 14.1313 4.22414 14.5175 6.16328 14.5175C10.3342 14.5175 11.9282 12.1482 11.9016 9.9452C11.875 6.19897 8.76679 5.64804 6.18989 5.56603C4.91438 5.53844 4.25074 5.12543 4.25074 4.3814C4.25074 3.72013 4.88849 3.25195 6.13668 3.25195C7.33238 3.25195 8.26205 3.52778 9.24493 4.24348L11.1316 1.76389L11.1309 1.76314Z" fill="#000A4A"/>
  <path d="M20.5082 10.7151C18.5424 10.7151 17.2935 9.25537 17.2935 7.21637C17.2935 5.26088 18.4626 3.71841 20.5082 3.71841C22.2352 3.71841 24.0413 4.62719 24.0413 7.21637C24.0413 9.50288 22.2618 10.7151 20.5082 10.7151ZM27.9462 19.9983V0.413524H24.5195L24.28 2.14909C23.0577 0.523862 21.5701 0.166016 19.9236 0.166016C16.0719 0.166016 13.4418 2.97587 13.4418 7.21787C13.4418 11.6254 16.1251 14.2973 19.9768 14.2973C21.358 14.2973 22.9786 13.8015 24.0945 12.3694V19.9998H27.9462V19.9983Z" fill="#000A4A"/>
  <path d="M31.0013 0.385742V7.60236C31.0013 12.8911 33.5249 14.268 36.4736 14.268C38.0676 14.2956 39.5552 13.8274 40.7243 12.2022L40.8573 13.9929H44.3114V0.385742H40.5388V7.41001C40.5388 9.17316 39.3431 10.7708 37.5636 10.7432C35.7308 10.7432 34.8537 9.66893 34.8537 7.57552V0.386488H31.002L31.0013 0.385742Z" fill="#000A4A"/>
  <path d="M57.5681 1.95659C56.8771 0.744383 55.3363 0.0838543 53.6898 0.0838543C49.8115 0.028686 46.8089 2.67303 46.8089 7.19087C46.8089 11.6804 49.6519 14.3247 53.5834 14.2971C54.8589 14.2696 56.7448 13.7186 57.6213 12.2865L57.8341 13.9945H61.2875C61.2875 9.47738 61.2875 4.90437 61.2875 0.387276H57.7011L57.5681 1.95734V1.95659ZM54.0881 3.58182C56.3731 3.58182 57.5681 5.37255 57.5681 7.32804C57.5681 9.03603 56.2401 10.7716 54.0881 10.7716C52.1756 10.7716 50.6347 9.44905 50.6347 7.19087C50.6347 4.93195 52.1756 3.58182 54.0881 3.58182Z" fill="#000A4A"/>
  <path d="M64.5285 0.414013V13.9936H68.3536V6.91419C68.3536 4.87594 69.7614 3.77407 71.4086 3.77407C72.206 3.77407 72.8696 3.99474 73.5074 4.46292L75.1014 1.3228C74.1718 0.469186 73.1357 0.0830078 71.8875 0.0830078C70.4265 0.0830078 69.2574 0.633947 68.3809 1.90133L68.0883 0.414013H64.5285Z" fill="#000A4A"/>
  <path d="M89.0224 8.48375C89.8456 2.91995 86.9236 0.0273438 82.4607 0.0273438C78.1841 0.0273438 75.5008 2.91995 75.5008 7.05161C75.5008 11.4039 78.1043 14.2958 82.8598 14.2958C84.8255 14.2958 87.0839 13.7173 88.4917 12.2851L86.3398 9.80629C85.4101 10.6331 83.975 10.8806 82.9389 10.8806C80.7869 10.8806 79.5653 9.8063 79.3791 8.48375H89.0224ZM79.3791 5.59114C79.7508 4.24176 80.9199 3.41497 82.4607 3.41497C84.0548 3.41497 85.5158 4.10384 85.5956 5.59114H79.3791Z" fill="#000A4A"/>
  <path d="M103.792 13.9939V6.69449C103.792 5.15202 104.695 3.80189 106.21 3.80189C107.75 3.80189 108.202 4.93135 108.202 6.63933V13.9939H112.054V6.55658C112.054 1.48855 109.557 0.0556641 106.82 0.0556641C104.881 0.0556641 103.633 0.772106 102.464 2.61726C101.614 0.634185 100.073 0.0832479 98.6385 0.0832479C97.5226 0.0832479 96.0084 0.441097 95.1852 1.92915L94.9198 0.38667H91.5722V13.9939H95.3973V6.72208C95.3973 5.1796 96.2471 3.71988 97.7613 3.71988C99.3288 3.71988 100.02 4.90451 100.02 6.69449V13.9939H103.792Z" fill="#000A4A"/>
  <path d="M127.888 8.48375C128.711 2.91995 125.789 0.0273438 121.326 0.0273438C117.05 0.0273438 114.366 2.91995 114.366 7.05161C114.366 11.4039 116.97 14.2958 121.725 14.2958C123.691 14.2958 125.949 13.7173 127.357 12.2851L125.205 9.80629C124.276 10.6331 122.841 10.8806 121.804 10.8806C119.652 10.8806 118.431 9.8063 118.245 8.48375H127.888ZM118.245 5.59114C118.616 4.24176 119.785 3.41497 121.326 3.41497C122.92 3.41497 124.381 4.10384 124.461 5.59114H118.245Z" fill="#000A4A"/>
  <path d="M150.905 0.100586V0.658232H150.001V3.23772H149.362V0.658232H148.455V0.100586H150.905Z" fill="#000A4A"/>
  <path d="M153.279 0.100586H154.19V3.23772H153.598V1.11598C153.598 1.05485 153.598 0.967626 153.602 0.858781C153.602 0.749935 153.602 0.667182 153.602 0.606049L153.03 3.23772H152.417L151.85 0.606049C151.85 0.667182 151.85 0.749935 151.85 0.858781C151.854 0.967626 151.854 1.05485 151.854 1.11598V3.23772H151.265V0.100586H152.181L152.732 2.56676L153.279 0.100586Z" fill="#000A4A"/>
  </svg>  
    `;
  return <SvgXml xml={xml} />;
};