(()=>{
  interface SupportedLanguages { 
    en: string, iw: string,
    pt: string, zh: string, el: string, fr: string, hi: string, es: string,
  };
  interface Translations {
    [index: string]: SupportedLanguages;
  }
  let platformTranslations: Translations = {
  "GAME_INVITE_INSTALL_APP_FROM": {
    "en": "Install {{GAME_NAME}} app from: ",
    "iw": "התקן את האפליקציה {{GAME_NAME}}  מ:",
    "pt": "Installar {{GAME_NAME}}",
    "zh": "安装{{GAME_NAME}}游戏从：",
    "el": "Εγκαταστήστε {{GAME_NAME}} app από:",
    "fr": "installer {{GAME_NAME}} l'appli depuis:",
    "hi": "{{GAME_NAME}} को इनस्टॉल  करें यहाँ से:",
    "es": "Instalar {{GAME_NAME}} app desde:"
  },
  "GAME_INVITE_INSTALL_APP_FROM_APPLE_APPSTORE": {
    "en": "AppStore (for iPhones or iPads)",
    "iw": "חנות האפליקציות של אפל",
    "pt": "AppStore (para iPhones ou iPads)",
    "zh": "苹果商店（对于苹果手机或平板）",
    "el": "AppStore (για iPhone ή iPad)",
    "fr": "appstore (pour iphones et ipads)",
    "hi": "ऐप स्टोर ( आईफ़ोन या आईपैड के लिए )",
    "es": "AppStore (para iPhones y iPads)"
  },
  "GAME_INVITE_INSTALL_APP_FROM_GOOGLE_PLAY": {
    "en": "Google Play (for Android phones)",
    "iw": "חנות האפליקציות של גוגל",
    "pt": "Google Play (para telefones Android)",
    "zh": "谷歌玩玩（对于安桌手机）",
    "el": "Το Google Play (για τηλέφωνα Android)",
    "fr": "google play (pour téléphones android)",
    "hi": "( एंड्रॉयड फोन के लिए ) गूगल प्ले",
    "es": "Google Play (para dispositivos Android)"
  },
  "GAME_INVITE_OPEN_OR_INSTALL_GAME_NAME": {
    "en": "Open or install {{GAME_NAME}}",
    "iw": "פתח או התקן {{GAME_NAME}}",
    "pt": "Abrir ou installar {{GAME_NAME}}",
    "zh": "打开或者安装{{GAME_NAME}}",
    "el": "Ανοίξτε ή να εγκαταστήσετε {{GAME_NAME}}",
    "fr": "ouvrir ou installer {{GAME_NAME}}",
    "hi": "{{GAME_NAME}} को खोलें या इंस्टॉल करें  ",
    "es": "Abrir o instalar {{GAME_NAME}}"
  },
  "GAME_INVITE_PLAYER_NAME_WANTS_TO_PLAY_GAME_NAME_WITH_YOU": {
    "en": "{{PLAYER_NAME}} wants to play {{GAME_NAME}} with you!",
    "iw": "{{PLAYER_NAME}} רוצה לשחק איתך {{GAME_NAME}}!",
    "pt": "{{PLAYER_NAME}} quer jogar {{GAME_NAME}} com você",
    "zh": "{{PLAYER_NAME}}想和你一起玩{{GAME_NAME}}",
    "el": "{{PLAYER_NAME}} θέλει να παίξει {{GAME_NAME}} μαζί σας!",
    "fr": "{{PLAYER_NAME}} veut jouer à {{GAME_NAME}} avec vous!",
    "hi": "{{PLAYER_NAME}} आप के साथ {{GAME_NAME}} खेलना चाहता हैं !",
    "es": "{{PLAYER_NAME}} quiere jugar {{GAME_NAME}} contigo!"
  },
  };
  
  let w: any = window;
  if (!w.platformTranslations) w.platformTranslations = platformTranslations;
})();