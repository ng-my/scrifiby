import "dayjs/locale/zh-cn"; // Chinese (China)
import "dayjs/locale/zh-tw"; // Chinese (Taiwan)
import "dayjs/locale/da"; // Danish
import "dayjs/locale/de"; // German
import "dayjs/locale/en"; // English
import "dayjs/locale/es"; // Spanish
import "dayjs/locale/fr"; // French
import "dayjs/locale/it"; // Italian
import "dayjs/locale/hu"; // Hungarian
import "dayjs/locale/nl"; // Dutch
import "dayjs/locale/nb"; // Norwegian Bokmål
import "dayjs/locale/pl";
import "dayjs/locale/pt";
import "dayjs/locale/fi";
import "dayjs/locale/sv";
import "dayjs/locale/tr";
import "dayjs/locale/el";
import "dayjs/locale/ru";
import "dayjs/locale/uk";
import "dayjs/locale/he";
import "dayjs/locale/ar";
import "dayjs/locale/ko";
import "dayjs/locale/ja";
import "dayjs/locale/el";

import localizedFormat from "dayjs/plugin/localizedFormat";
import timezone from "dayjs/plugin/timezone";

export const useTime = () => {
  const specialMappings = {
    "zh-CN": "zh-cn", // 简体中文
    "zh-TW": "zh-tw", // 繁体中文
    "da-DK": "da", // 丹麦语
    "de-DE": "de", // 德语
    "en-US": "en", // 英语（美国）
    "es-ES": "es", // 西班牙语
    "fr-FR": "fr", // 法语
    "it-IT": "it", // 意大利语
    "hu-HU": "hu", // 匈牙利语
    "nl-NL": "nl", // 荷兰语
    "no-NO": "nb", // 挪威语（Bokmål）
    "pl-PL": "pl", // 波兰语
    "pt-PT": "pt", // 葡萄牙语
    "fi-FI": "fi", // 芬兰语
    "sv-SE": "sv", // 瑞典语
    "tr-TR": "tr", // 土耳其语
    "el-GR": "el", // 希腊语
    "ru-RU": "ru", // 俄语
    "uk-UA": "uk", // 乌克兰语
    "he-IL": "he", // 希伯来语
    "ar-SA": "ar", // 阿拉伯语
    "ko-KR": "ko", // 韩语
    "ja-JP": "ja" // 日语
  };

  const dayjs = useDayjs();
  dayjs.extend(localizedFormat);
  dayjs.extend(timezone);

  const getTime = (utcTime: string) => {
    const i18n = useI18n();
    const local = i18n.locale.value;
    // 1. 解析为 dayjs 对象（此时是 UTC 时间对象）
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const utcObj = dayjs.utc(utcTime).tz(userTimeZone);
    // 2. 转成本地时间对象
    const localObj = utcObj.locale(specialMappings?.[local] || "en");

    if (local === "he-IL") {
      return dayjs(localObj).format("D MMMM YYYY, HH:mm");
    }
    if (local === "uk-UA") {
      return dayjs(localObj).format("D MMM YYYY р., HH:mm");
    }
    if (local === "el-GR") {
      return formatGreekDateTime(utcTime);
    }

    return dayjs(localObj).format("lll");
  };

  function formatGreekDateTime(utcTime: any) {
    // 首先用英文格式化
    const dateObj = dayjs
      .utc(utcTime)
      .tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const formattedDate = dateObj.format("D MMM YYYY, h:mm");

    // 然后手动添加希腊语的上午/下午指示器
    const hour = dateObj.hour();
    const amPm = hour < 12 ? "π.μ." : "μ.μ.";

    return `${formattedDate} ${amPm}`;
  }

  return {
    getTime
  };
};
