declare namespace gamingPlatform {
namespace gameinvite {
// One and only global object is: gamingPlatform.gameinvite.main (also accessible via $rootScope.main)
// Only methods that return void have side-effects (all other methods are getters, with no side-effects).
var main: api.Gameinvite;

namespace api {
interface Gameinvite {
  // Returns true if this page is viewed on a mobile device that is supported by the game (android or ios).
  isMobile(): boolean;
  // Returns true if the game has an iOS app (we always assume there is an android app).
  hasIosApp(): boolean;
  // On a supported mobile device, either opens the app (if it's already installed)
  // or redirect to the AppStore/PlayStore for installation.
  openOrInstallApp(): void;
  // Opens the AppStore/PlayStore in a new window.
  // type is either 'APPLE' or 'GOOGLE'.
  openLocation(type: string): void;
  // Returns either '' or a URL to 320x50 image of the game.
  gameHeader320x50Url(): string;
  // Returns either '' or a URL to 50x50 image of the game's icon.
  gameIcon50x50Url(): string;

  // Returns the inviter's displayName,
  // or '' if the inviter wasn't found for some reason (e.g., if the inviter changed his username).
  getDisplayName(): string;
  // Returns the inviter's avatarImageUrl,
  // or '' if the inviter wasn't found for some reason (e.g., if the inviter changed his username).
  getAvatarImage(): string;

  // API shared betweem gameinvite and app.
  isFinishedLoading(): boolean;
  model(): Model; // All fields used in ng-model
  l10n(): L10n;
}
// API shared betweem gameinvite and app.
interface Model {
  currentLanguage: string;
}
interface LangCodeAndName {
  code: string;
  name: string;
}
interface StringDictionary {
  [index: string]: string;
}
interface StringToStringDictionary {
  [index: string]: StringDictionary;
}
interface L10n {
  setTranslations(idToLanguageToL10n: StringToStringDictionary): void;
  changeLanguage(languageCode: string): void;
  isRtl(): boolean; // is RTL language (Hebrew/Arabic)
  getSupportedLanguages(): LangCodeAndName[]; // sorted by name asc.
  // If you don't pass interpolateParams, then a default object with
  // GAME_NAME and PLAYER_NAME fields is used.
  // I.e., you can use {{GAME_NAME}} and {{PLAYER_NAME}} in your localized strings, e.g.,
  // {{PLAYER_NAME}} wants to play {{GAME_NAME}} with you!
  // Note that PLAYER_NAME might be missing if the inviter's changed his username.
  translate(translationId: string, interpolateParams?: StringDictionary, languageCode?: string): string;
}

} // namespace api
} // namespace gameinvite
} // namespace gamingPlatform
