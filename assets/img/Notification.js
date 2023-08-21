import  * as React from "react";
import { SvgXml } from "react-native-svg";

export const Notification = () => {
  const xml = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="16" fill="white"/>
  <path d="M16.0167 23.1083C14.075 23.1083 12.1333 22.8 10.2917 22.1833C9.59167 21.9417 9.05833 21.45 8.825 20.8083C8.58333 20.1667 8.66667 19.4583 9.05 18.825L10.0083 17.2333C10.2083 16.9 10.3917 16.2333 10.3917 15.8417V13.4333C10.3917 10.3333 12.9167 7.80835 16.0167 7.80835C19.1167 7.80835 21.6417 10.3333 21.6417 13.4333V15.8417C21.6417 16.225 21.825 16.9 22.025 17.2417L22.975 18.825C23.3333 19.425 23.4 20.15 23.1583 20.8083C22.9167 21.4667 22.3917 21.9667 21.7333 22.1833C19.9 22.8 17.9583 23.1083 16.0167 23.1083ZM16.0167 9.05835C13.6083 9.05835 11.6417 11.0167 11.6417 13.4333V15.8417C11.6417 16.45 11.3917 17.35 11.0833 17.875L10.125 19.4667C9.94167 19.775 9.89167 20.1 10 20.375C10.1 20.6583 10.35 20.875 10.6917 20.9917C14.175 22.1583 17.8667 22.1583 21.35 20.9917C21.65 20.8917 21.8833 20.6667 21.9917 20.3667C22.1 20.0667 22.075 19.7417 21.9083 19.4667L20.95 17.875C20.6333 17.3333 20.3917 16.4417 20.3917 15.8333V13.4333C20.3917 11.0167 18.4333 9.05835 16.0167 9.05835Z" fill="#292D32"/>
  <path d="M17.5667 9.28328C17.5083 9.28328 17.45 9.27494 17.3917 9.25828C17.15 9.19161 16.9167 9.14161 16.6917 9.10828C15.9833 9.01661 15.3 9.06661 14.6583 9.25828C14.425 9.33328 14.175 9.25828 14.0167 9.08328C13.8583 8.90828 13.8083 8.65828 13.9 8.43328C14.2417 7.55828 15.075 6.98328 16.025 6.98328C16.975 6.98328 17.8083 7.54994 18.15 8.43328C18.2333 8.65828 18.1917 8.90828 18.0333 9.08328C17.9083 9.21661 17.7333 9.28328 17.5667 9.28328Z" fill="#292D32"/>
  <path d="M16.0167 25.0083C15.1917 25.0083 14.3917 24.675 13.8083 24.0916C13.225 23.5083 12.8917 22.7083 12.8917 21.8833H14.1417C14.1417 22.375 14.3417 22.8583 14.6917 23.2083C15.0417 23.5583 15.525 23.7583 16.0167 23.7583C17.05 23.7583 17.8917 22.9166 17.8917 21.8833H19.1417C19.1417 23.6083 17.7417 25.0083 16.0167 25.0083Z" fill="#292D32"/>
  <circle cx="21" cy="10" r="3" fill="#EB5757"/>
  </svg>  
    `;
  return <SvgXml xml={xml} />;
};
