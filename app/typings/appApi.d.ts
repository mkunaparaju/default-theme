declare namespace gamingPlatform {
// One and only global object is: gamingPlatform.main (also accessible via $rootScope.main)
// Only methods that return void have side-effects (all other methods are getters, with no side-effects).
var main: api.App;

namespace api {

interface App {
  game(): Game;
  l10n(): L10n;
  fb(): FB;
  model(): Model; // All fields used in ng-model
  
  // Passing a message to the game, e.g., to show help screen (or in the future to turn sounds on/off).
  passMessageToGame(message: any): void;
  
  // Used for preventing clicks on the game iframe when clicking on platform UI (menus, etc).
  // Every void-returning api method (except log) is automatically flashing the 
  // GameIframeProtector, so call this method only for special cases
  // (e.g., if you have a button that closes a floating menu, and clicking on close might pass the click to the game iframe)
  flashGameIframeProtector(): void;
  
  // Adds a log entry to the platform logs (you get these logs in case of feedbacks, bug reports or JS exceptions).   
  log(... args: any[]): void;
  
  // Will be set to true after the game and player
  // were loaded (from local-storage or the server).
  // (Then you can call game() and me())
  isFinishedLoading(): boolean;
  // Whether it's the first time the user opened the app.
  isFirstTimeUser(): boolean;

  // Returns either the input url, or a "data:image/..." (in base64), e.g.,
  // "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDA…NTLwMDgDgAUUU5SlJ+87iSS2P//Z"
  cacheImage(imageUrl: string): string;

  // These 3 arrays are sorted by desc order of updatedTime (last updated match is first)
  yourTurnMatches(): Match[];
  opponentTurnMatches(): Match[];
  endedMatches(): Match[];
  // Returns yourTurnMatches.concat(opponentTurnMatches).concat(endedMatches);
  allMultiplayerMatches(): Match[];
  currentMatch(): Match;
  me(): Player;

  // The two share* methods use this phonegap plugin:
  // https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
  // (and screenshot via: https://github.com/gitawego/cordova-screenshot.git)
  shareInviteLink(combination: ShareCombination): void;
  shareStuff(options: ShareOptions): void;

  // page always start with '/', e.g., '/main', '/inviteFriends', '/playGame/<matchId>'
  // Changes the page and also closes all modal dialogs.
  changePage(page: string): void;
  // Whether the currentPage has page as a prefix, e.g., 
  // if the currentPage is '/playGame/practice', then isInPage('/playGame/') returns true.
  isInPage(page: string): boolean;
  // The game iframe is shown if we're in /playGame/* page and the game sent gameReady message.
  showGameIframe(): boolean;

  notifications(): Notification[];

  // Starts a new single player match. singlePlayerType is either 'practice' or 'passAndPlay'
  newSinglePlayer(singlePlayerType: string): void;
  newMultiplayerAutoMatch(): void;
  startMatchWith(opponents: Player[]): void;

  // Whether the top bar is shown or not (in the play page).
  // (To make the game iframe bigger, the top-bar can be minimized.)
  shouldShowTopBar(): boolean;
  // Negates shouldShowTopBar.
  toggleTopBar(): void;

  // Modal dialogs
  // The UI currently has these modal names:
  // playerInfoModal, myInfoModal, gameOverModal, feedbackModal
  // (you can add any other modal name you like)
  // Returns true if the modal is showing.
  isModalShowing(modalName: string): boolean;
  // Closes the modal.
  hideModal(modalName: string): void;
  // Shows the modal.
  showModal(modalName: string): void;

  // Opens either myInfoModal (if the player is me) or playerInfoModal (if player is not me).
  showPlayerInfoModal(player: Player, match: Match): void;
  playerInPlayerInfoModal(): Player;
  matchInPlayerInfoModal(): Match;
  didSendChat(): boolean;
  sendChat(chatMessage: string, player: Player, match: Match): void;

  // MyInfoModal
  // Shows MyInfoModal, and sets newDisplayName (in main.model)
  // to be the existing displayName of me().
  showMyInfoModal(): void;
  // Updates displayName to be newDisplayName (in main.model)
  // It sets userName to be displayName.toLowerCase().replace(/[ ]/g, '.')
  // If that userName was already chosen by someone else,
  // then the server adds some random digits at the end to make it unique.
  saveMyInfo(): void;
  // Deprecated: always return false.
  newUserNameWasTaken(): boolean;

  // Game over dialog
  // Dismisses gameOverModal --- exactly the same as hideModal('gameOverModal')
  closeGameOverModal(): void;
  didWinMultiplayerMatch(): boolean;

  // Sends feedback.
  sendFeedback(feedbackText: string): void;

  // Returns translate('MATCH_START_REMATCH', {OPPONENTS_NAME: opponentNames.join(", ")});
  // where opponentNames is an array of the opponent names in the current match.
  translateRematch(): string;
  
  // Pass in Match.updatedTime() or createdTime() to get back a localized string of how long ago was that time,
  // e.g., "33 seconds ago" or "yesterday". 
  timeAgo(time: number): string;
  toggleBlocking(player: Player): void;
  isBlocking(player: Player): boolean;
}

interface Model {
  chatMessage: string;
  feedbackText: string;
  currentLanguage: string;
  newDisplayName: string;
  newUserName: string;
  facebookFriendsFilter: string;
}

interface ModalCtrl {
  init(modalName: string): void;
  // Calls main.isModalShowing(modalName)
  isShowing(): boolean;
  // Calls main.showModal(modalName)
  show(): void;
  // Calls main.hideModal(modalName)
  hide(): void;
  // If you click anywhere outside the modal dialog, then it hide sit.
  // This is done with an ng-click="modal.backdrop($event)" on the
  // backdrop (the half-transparent div behind the modal dialog).
  backdrop($event: Event): void;
}
interface Notification {
  // Carefull: any of these fields may be null/undefined.
  // (At least title/message must be defined.)
  title(): string;
  message(): string;
  player(): Player;
  match(): Match;
  onClick(): void;
  onClose(): void;
}

interface FbFriend {
  getFbId(): string;
  getDisplayName(): string;
  getAvatarImage(): string;
}

interface FB {
  showLoginButton(): boolean;
  isLoggedIn(): boolean;
  login(): void;
  friends(): FbFriend[]; // sorted by their displayName.
  startMatchWith(opponents: FbFriend[]): void;

  // For filtering/searching the friends list.
  showNameFilter(): boolean;
  // Negates showNameFilter and sets nameFilter to ""
  toggleNameFilter(): void;
}

interface ShareOptions {
  takePrintscreen: boolean;
  toEmail: string; // E.g., for sending feedback to game developer.
  link: string;
  image: string;
  message: string;
  subject: string;
}
// If any field is missing (it is undefined/null), then we use it's default value
interface ShareCombination {
  takePrintscreen: boolean; // Default is: true
  // Use FB share dialog (instead of the default native app-selection dialog).
  // translationIdPrefix is the prefix of the message and subject.
  // E.g., when sharing a game-invite, the prefix is "SHARE_INTENT_GAME_INVITE",
  // then the translationId of the message is SHARE_INTENT_GAME_INVITE_MESSAGE
  // and of the subject is SHARE_INTENT_GAME_INVITE_SUBJECT.
  // After winning a game, the prefix is "SHARE_INTENT_WON_GAME".
  // You can use {{PLAYER_NAME}} and {{GAME_NAME}} in the translation text.
  translationIdPrefix: string; // Default is: "SHARE_INTENT_GAME_INVITE"
  toEmail: string; // No default.
  link: boolean; // Default is: true
  image: boolean; // Default is: true
  message: boolean; // Default is: true
  subject: boolean; // Default is: true
}

interface LangCodeAndName {
  code: string;
  name: string;
}
interface AnyDictionary {
  [index: string]: any;
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
  translate(translationId: string, interpolateParams?: StringDictionary, languageCode?: string): string;
}
interface Game {
  name(): string;
  isHidePracticeOption(): boolean;
  isHidePassAndPlayOption(): boolean;
  getIframeHtml(): string;
  themeCustomization(): AnyDictionary;
  // Returns:
  // themeCustomization()[key] ? themeCustomization()[key] : defaultValue  
  customize(key: string, defaultValue: any): any; 
}

interface Player {
  getDisplayName(): string;
  getPlayerId(): string;

  // Returns true if this player is the player using the app.
  isMe(): boolean;
  getUserName(): string; // Username is only available for my player (for all other players it's null).
  // Returns true if the player is unknown, i.e., an empty slot in a multPlayer auto-match.
  isUnknown(): boolean;
  // Returns true in single-player matches (practice or pass-and-play) for non-computer players.
  isSinglePlayer(): boolean;
  // Returns true for the computer player (in practice matches).
  isComputer(): boolean;

  // Returns the player's avatar.
  // You can use it in <img ng-src="{{player.getAvatarImage())}}">
  // In order for the avatars to be shown when the player if offline (airplane mode),
  // these images are cached. If the image is in the cache, then the string returned
  // is a "data:image/..." (in base64), e.g.,
  // "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDA…NTLwMDgDgAUUU5SlJ+87iSS2P//Z"
  // (The implementation is returning: main.cacheImage(this.avatarImageUrl))
  getAvatarImage(): string;
}
interface Match {
  // In multPlayer matches, matchId is a long number (64 bits) represented as a string,
  // matchId can also be "practice" or "passAndPlay".
  getMatchId(): string;
  // The time (new Date().getTime()) the match was created.
  createdTime(): number;
  // The time the match was last updated (when the last move happened).
  updatedTime(): number;
  // Either missing in ongoing matches, or "NORMAL" or "DISMISSED" when isOver.
  getEndMatchReason(): string;

  // Returns the localized match status, e.g., canceled/tied/who won/who has the turn.
  // (See all the MATCH_STATUS_* i18n strings, e.g., MATCH_STATUS_YOUR_TURN)
  getMatchStatusText(params: {showDisplayName: boolean}): string;

  // Returns true if matchId is "practice" or "passAndPlay".
  isSinglePlayer(): boolean;

  // Returns true if the match ended (either normally or dismissed by someone).
  // (Otherwise, we say the match is ongoing.)
  isOver(): boolean;

  // Returns null if the match is ongoing, or an array of the same length as
  // the number of players with the score of each player.
  getEndMatchScores(): number[];

  // Returns the index of the player with the highest score.
  // Returns null if the match is ongoing or if there are multiple winners.
  // E.g., if getEndMatchScores() returned [30, -10, 50, 0] then 
  // getWinnerIndex() returns 2.
  // if getEndMatchScores() returned [30, -10, 50, 50] then 
  // getWinnerIndex() returns null.
  // Note that if there is a winner, then we consider all other players as losers.
  // E.g., if getEndMatchScores() returned [30, -10, 50, 0] then playerIndex=2
  // is the winner, and all other players are the losers.
  // If there is no winner, then the match ended in a tie (there are no winners nor losers).
  getWinnerIndex(): number;
  
  // Returns true if the match is over and there are multiple winners
  // (i.e., getWinnerIndex() returned null).
  // E.g., if getEndMatchScores() returned [30, -10, 50, 50] then 
  // isTie() returns true.
  isTie(): boolean;

  // Returns -1 if the match is over, or turn index (players[turnIndex] can move next).
  getTurnIndex(): number;
  isTurnOf(player: Player): boolean;

  // In single-player matches, returns getTurnIndex().
  // Otherwise (multPlayer matches), returns the index <i> such that getPlayers()[i].isMe()
  getYourPlayerIndex(): number

  // Returns true if the match is ongoing and it's your turn (getYourPlayerIndex() == getTurnIndex()).
  isYourTurn(): boolean;

  // If params is missing, then all players are returned.
  // If excludeMe is true, then only opponents are returned.
  // If excludeSinglePlayer is true, then an empty array is returned for single-player matches.
  // If limit is positive, then the number of returned players is always less
  // than the limit (players around the current turn are more likely to be returned).
  getPlayers(params?: {limit?:number, excludeMe?: boolean, excludeSinglePlayer?: boolean}): Player[];
  
  // Returns a comma-separated string with all opponents' displayName, i.e., it returns:
  // getPlayers({excludeMe: true}).map((player) => player.getDisplayName()).join(", ");
  getOpponentNames(): string;
  
  findPlayerById(playerId: string): Player; // Returns null if playerId is not in players.

  // Returns true if you can do a multPlayer rematch, i.e.,
  // if the match is multiPlayer and there are no unknown players.
  canRematch(): boolean;

  // Returns isSinglePlayer() || canRematch()
  canStartNewMatch(): boolean;
  // Starts a new match.
  // In single-player, it starts a new match with the same matchId ("practice" or "passAndPlay").
  // In multi-player, it does a rematch, i.e., a new match with the same set of players.
  startNewMatch(): void;

  // Returns the next match (after this match) in matches,
  // or null if this match is the last one.
  // If matches is undefined/null, then we use main.allMultiplayerMatches()
  getNextMatch(matches?: Match[]): Match;
  // Does: getNextMatch() ? getNextMatch().load() : main.changePage('/main')
  loadNextMatchOrMainPage(): void;

  // Dismiss a match, i.e., quiting from a match.
  // If the match is ongoing, then you are the loser (lowest score) and the endMatchReason is DISMISSED.
  // If the match is over, then the match will be removed from the endedMatches list.
  dismiss(): void;
  dismissAndLoadNextMatchOrMainPage(): void;
  dismissAndRematch(): void;

  // Changes the page to playPage, loads the match, and sets currentMatch to this match.
  load(): void;
}

} // namespace api
} // namespace gamingPlatform
