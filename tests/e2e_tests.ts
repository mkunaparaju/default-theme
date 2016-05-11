namespace e2eTests {
let GAME_ID = "6000581957124096-0";
// All tests use GAME_ID which is text-tictactoe (owned by Yoav Zibin).
// I'm using a test game so auto-match won't interfere with real players.
// Moreover, the test game is configured with facebook appId that is for domain http://localhost:9000/
// So it's possible to test FB login. You can use my FB test account: email='yz44@nyu.edu', pass='testfbaccount'.
// test-tictactoe supports English&Hebrew.
// to-do: make it support all languages supported by the platform.


module Logging {
  function getFunctionName(myFunction: any) {
    if (typeof myFunction !== 'function') throw new Error("You can ONLY pass a function to getFunctionName");
    return /^function\s+([\w\$]+)\s*\(/.exec( myFunction.toString() )[ 1 ];
  }
  function addLogToFunction(moduleName: string): (f:Function)=>void {
    return function (myFunction: Function) {
      willDoLog("Calling " + moduleName + "." + getFunctionName(myFunction));
    };
  }
  function addPrecallToFunction(precall: (f?: Function)=>void, myFunction: Function): Function {
    return function () {
      precall(myFunction);
      return myFunction.apply(null, arguments);
    };
  }
  function addPrecall(precall: (f?: Function)=>void, object: any): void {
    for (let key in object) {
      let val = object[key];
      // I only want to log mutating methods (to avoid clutter).
      if (key.indexOf('expect') === 0) continue;
      if (key.indexOf('is') === 0) continue;
      if (key.indexOf('get') === 0) continue;
      if (typeof val !== 'function') throw new Error("You should ONLY export functions");
      object[key] = addPrecallToFunction(precall, val);
    }
  }
  export function addLogging(moduleName: string, object: any): void {
    addPrecall(addLogToFunction(moduleName), object);
  }
}

module gameinvitePage {
  export function getInviteText() {
    let elem = id('invite_text');
    waitForElement(elem);
    return elem.getText();
  }
  
  export function getCurrentLanguageCode(): webdriver.promise.Promise<string> {
    let elem = model('currentLanguage');
    waitForElement(elem);
    return getValueAttribute(elem);
  }
  export function clickOnLanguageOption(languageName: string) {
    click(element(by.cssContainingText('option', languageName)));
  }  
}
Logging.addLogging("gameinvitePage", gameinvitePage);

module mainPage {
  export function expectVisible() {
    expectDisplayed(getOpenNewMatchModal());
  }
  
  export function getOpenNewMatchModal() {
    return id('open_new_match_modal');
  }
  export function openNewMatchModal() {
    click(getOpenNewMatchModal());
    newMatchModal.expectVisible();
    return newMatchModal;
  }
  
  export function openLeftNav() {
    click(getMenuButton());
    leftNav.expectVisible();
    return leftNav;
  }
  
  export function getMenuButton() {
    return id('menu_button');
  }
  
  export function getGameName() {
    return id('game_name').getText();
  }
  
  export function expectNoMatches() {
    expectMatchCounts({yourTurn: 0, opponentTurn: 0, ended: 0});
  }
  export function expectMatchCounts(counts: {yourTurn: number, opponentTurn: number, ended: number}) {
    expectToBe(allElements(by.repeater('main.yourTurnMatches()')).count(), counts.yourTurn);
    expectToBe(allElements(by.repeater('main.opponentTurnMatches()')).count(), counts.opponentTurn);
    expectToBe(allElements(by.repeater('main.endedMatches()')).count(), counts.ended);
  }
  export function clickMatchIndex(index: number) {
    click(allElementsByNgClick('match.load()').get(index));
  }
}
Logging.addLogging("mainPage", mainPage);

module playPage {
  export function expectVisible() {
    expectDisplayed(getOpenExtraMatchOptions());
  }
  
  export function getMatchStatusText() {
    return id('match_status_text').getText();
  }
  
  export function getPlayerImg(playerIndex: number) {
    return element(by.repeater('main.currentMatch().getPlayers').row(playerIndex));
  } 
  export function openInfoModalForPlayerIndex(playerIndex: number) {
    click(getPlayerImg(playerIndex));
    playerInfoModal.expectVisible();
    return playerInfoModal;
  }
  
  export function getOpenExtraMatchOptions() {
    return id('open_play_page_menu');
  }
  export function openExtraMatchOptions() {
    click(getOpenExtraMatchOptions());
    extraMatchOptionsModal.expectVisible();
    return extraMatchOptionsModal;
  }
  
  export function getGotoMain() {
    return id('play_page_goto_main');
  }
  export function gotoMain() {
    clickAndWaitToDisappear(getGotoMain());
  }
}
Logging.addLogging("playPage", playPage);

function waitForBackdropToDisappear() {
  waitForElementToDisappear(element(by.css("md-backdrop")));
}

module extraMatchOptionsModal {
  export function expectVisible() {
    expectDisplayed(getSharePrintscreen());
  }
  export function waitTillClosed() {
    waitForElementToDisappear(getSharePrintscreen());
    waitForBackdropToDisappear();
  }
  
  export function getSharePrintscreen() {
    return id('share_invite_link_with_printscreen');
  }
  export function sharePrintscreen() {
    click(getSharePrintscreen());
  }
  
  export function getDismissMatch() {
    return id('dismiss_match');
  }
  export function dismissMatch() {
    clickAndWaitToDisappear(getDismissMatch());
    waitTillClosed();
  }
  
  export function getLoadNext() {
    return id('load_next');
  }
  export function loadNext() {
    clickAndWaitToDisappear(getLoadNext());
    waitTillClosed();
  }
}
Logging.addLogging("extraMatchOptionsModal", extraMatchOptionsModal);

module gameOverModal {
  export function expectVisible() {
    expectDisplayed(getMatchOverTitleElem());
  }
  export function waitTillClosed() {
    waitForElementToDisappear(getMatchOverTitleElem());
    waitForBackdropToDisappear();
  }
  
  export function getMatchOverTitleElem() {
    return id('game_over_match_title');
  }
  export function getMatchOverTitle() {
    return getMatchOverTitleElem().getText();
  }
  
  export function getMatchOverStatus() {
    return id('game_over_match_status').getText();
  }
  
  export function getShareInviteLink() {
    return id('share_invite_link');
  }
  export function shareInviteLink() {
    click(getShareInviteLink());
  }
  
  export function getRematch() {
    return id('game_over_rematch');
  }
  // Starts a rematch (multi-player) or a new match (single-player).
  export function newMatch() {
    clickAndWaitToDisappear(getRematch());
    waitTillClosed();
  }
  
  export function close() {
    currBrowser.executeScript("gamingPlatform.main.closeGameOverModal()");
    waitTillClosed();
  }
}
Logging.addLogging("gameOverModal", gameOverModal);

module friendsInvitePage {
  export function expectVisible() {
    expectDisplayed(getGotoMain());
  }
  
  export function getGotoMain() {
    return id('invite_friends_goto_main');
  }
  export function gotoMain() {
    clickAndWaitToDisappear(getGotoMain());
  }
  
  export function getStartNameFilter() {
    return id('start_name_filter');
  }
  export function startNameFilter() {
    click(getStartNameFilter());
  }
  
  export function getCancelNameFilter() {
    return id('cancel_name_filter');
  }
  export function cancelNameFilter() {
    click(getCancelNameFilter());
  }
  
  function getNameFilterModel() {
    return model('facebookFriendsFilter');
  }
  export function getNameFilter() {
    return getValueAttribute(getNameFilterModel());
  }
  export function setNameFilter(nameFilter: string) {
    replaceKeys(getNameFilterModel(), nameFilter);
  }
  
  export function expectFriendsCounts(count: number) {
    expectToBe(allElements(by.repeater('main.fb().friends()')).count(), count);
  }
  export function getFriendName(friendIndex: number) {
    return allElements(by.css('.friends-list .name')).get(friendIndex);
  }
  export function inviteFriend(friendIndex: number) {
    return allElements(by.css('.friends-list .invite-button')).get(friendIndex);
  }
  
  export function getFbLogin() {
    return id('invite_friends_fb_login');
  }
  export function fbLogin() {
    click(getFbLogin());
  }
  
  export function getNoFriendsMessage() {
    return id('no_friends_msg').getText();
  }
}
Logging.addLogging("friendsInvitePage", friendsInvitePage);

module notifications {
  function pressNotification(ngClick: string, notificationIndex: number) {
    let elems = allElementsByNgClick(ngClick); 
    waitForNumberOfElements(elems, notificationIndex + 1);
    click(elems.get(notificationIndex));
    waitForNumberOfElements(elems, notificationIndex);
  }
  export function clickNotificationWithIndex(notificationIndex: number) {
    pressNotification('notification.onClick()', notificationIndex);
  }
  
  export function closeNotificationWithIndex(notificationIndex: number) {
    pressNotification('notification.onClose()', notificationIndex);
  }
  
  export function getNotificationsCount() {
    return allElements(by.repeater('main.notifications()')).count();
  }
  export function expectNoNotifications() {
    expectToBe(notifications.getNotificationsCount(), 0);
  }
  export function expectMaybeGameinviteNotification() {
    // There might be a gameinvite notification from some failed previous tests,
    // if so, just close it.
    getNotificationsCount().then(runInSameBrowser((count) => {
      expect(count == 0 || count == 1).toBeTruthy();
      if (count == 1) {
        expectGameInvite();
        closeNotificationWithIndex(0);
      }
    }));
  }
  
  export function getTitle(notificationIndex: number) {
    return allElementsByNgIf('notification.title()').get(notificationIndex).getText();
  }
  export function getMessage(notificationIndex: number) {
    return allElementsByNgIf('notification.message()').get(notificationIndex).getText();
  }
  
  export function expectMoveSent_CreateNewMatch() {
    // (Regular en l10n is: "Move sent, and no more moves to make in any game. Click to create new game.")
    expectOneNotificationWithMessageId("IN_APP_NOTIFICATION_MOVE_SENT_CREATE_NEW_MATCH");
  }
  export function expectMoveSent_LoadNextMatch() {
    expectOneNotificationWithMessageId("IN_APP_NOTIFICATION_MOVE_SENT_LOAD_NEXT_MATCH");
  }
  export function expectTooManyMatches_DismissEndedMatches() {
    expectOneNotificationWithMessageId("IN_APP_NOTIFICATION_TOO_MANY_MATCHES_DISMISS_ENDED_MATCHES");
  }
  export function expectYouWereBlockedInNotificationIndex(notificationIndex: number) {
    waitForNumberOfElements(allElementsByNgClick('notification.onClose()'), notificationIndex + 1);
    l10n.expectTranslate(getMessage(notificationIndex), "IN_APP_NOTIFICATION_YOU_WERE_BLOCKED");
  }
  export function expectOneNotificationWithMessageId(messageId: string) {
    expectOneNotification("", messageId);
  }
  export function expectGameInvite() {
    expectOneNotificationWithTitleId("IN_APP_NOTIFICATION_GAME_INVITE_TITLE");
  }
  export function expectOneNotificationWithTitleId(titleId: string) {
    expectOneNotification(titleId, "");
  }
  export function expectOneNotification(
      titleId: string, messageId: string, interpolationParams?: any) {
    waitForNumberOfElements(allElementsByNgClick('notification.onClose()'), 1);
    expectToBe(getNotificationsCount(), 1);
    if (titleId) {
      l10n.expectTranslate(getTitle(0), titleId, interpolationParams);
    } 
    if (messageId) {
      l10n.expectTranslate(getMessage(0), messageId, interpolationParams);
    } 
  }
}
Logging.addLogging("notifications", notifications);


module newMatchModal {
  export function expectVisible() {
    expectDisplayed(getStartAutoMatch());
  }
  export function waitTillClosed() {
    waitForElementToDisappear(getStartAutoMatch());
    waitForBackdropToDisappear();
  }
  
  export function getStartAutoMatch() {
    return id('fab_start_multiplayer_auto_match');
  }
  export function startAutoMatch() {
    click(getStartAutoMatch());
    waitTillClosed();
  }
  
  export function getStartPractice() {
    return id('fab_start_practice');
  }
  export function startPractice() {
    click(getStartPractice());
    waitTillClosed();
  }
  
  export function getStartPassAndPlay() {
    return id('fab_start_pass_and_play');
  }
  export function startPassAndPlay() {
    click(getStartPassAndPlay());
    waitTillClosed();
  }
}
Logging.addLogging("newMatchModal", newMatchModal);

// Bottom sheet.
module playerInfoModal {
  export function isPresent() {
    return getPlayerInfoAvatar().isPresent();
  }
  export function expectVisible() {
    expectDisplayed(getPlayerInfoAvatar());
  }
  export function waitTillClosed() {
    waitForElementToDisappear(getPlayerInfoAvatar());
    waitForBackdropToDisappear();
  }
  
  export function getDisplayName() {
    return id('player_info_name').getText();
  }
  
  // to-do: add chat, invite to new match
  export function getNewGame() {
    return id('player_info_invite_to_match');
  }
  export function inviteToNewGame() {
    clickAndWaitToDisappear(getNewGame());
    waitTillClosed();
  }
  
  export function getPlayerBlocked() {
    return id('player_info_toggle_blocking');
  }
  export function blockPlayer() {
    click(getPlayerBlocked());
  }  
  
  export function getPlayerInfoAvatar() {
    return id('player_info_img');
  }
  export function close() {
    clickAndWaitToDisappear(getPlayerInfoAvatar());
    waitTillClosed();
  }
}
Logging.addLogging("playerInfoModal", playerInfoModal);

module leftNav {
  export function expectVisible() {
    expectDisplayed(getMyAvatarImg());
  }
  export function waitTillClosed() {
    // The avatar disappears pretty quickly, and then the newDisplayName input disappears last.
    waitForElementToDisappear(getNewDisplayNameModel());
    waitForBackdropToDisappear();
  }
  
  export function getMyAvatarImg() {
    return id('my_avatar_img');
  }
  
  export function getNewDisplayNameModel() {
    return model('newDisplayName');
  }
  export function setNewDisplayName(newDisplayName: string) {
    replaceKeys(getNewDisplayNameModel(), newDisplayName);
  }
  export function getNewDisplayName(): webdriver.promise.Promise<string> {
    return getValueAttribute(getNewDisplayNameModel());
  }
  
  /* angular-material's select element is really weird, so I can't test it.
  export function getCurrentLanguageCode(): webdriver.promise.Promise<string> {
    return getValueAttribute(model('currentLanguage'));
  }
  export function clickOnLanguageOption(languageName: string) {
    click(element(by.cssContainingText('option', languageName)));
  }*/
  export function changeLanguage(languageCode: string) {
    getOpenFeedbackBtnName().then((feedbackBtnName: string) => {
      currBrowser.executeScript('gamingPlatform.main.l10n().changeLanguage("' + languageCode + '")');
      waitUntil(()=>getOpenFeedbackBtnName().then((newFeedbackBtnName: string) => newFeedbackBtnName !== feedbackBtnName));
    });
  }
  
  /* make FB work...
  export function getFbLogin() {
    return id('my_info_fb_login');
  }
  export function fbLogin() {
    click(getFbLogin());
  }
  export function getGotoInviteFriends() {
    return id('goto_invite_friends');
  }
  export function gotoInviteFriends() {
    click(getGotoInviteFriends());
    waitTillClosed();
  }*/
  
  export function getStartAutoMatch() {
    return id('start_multiplayer_auto_match');
  }
  export function startAutoMatch() {
    click(getStartAutoMatch());
    waitTillClosed();
  }
  
  export function getStartPractice() {
    return id('start_practice');
  }
  export function startPractice() {
    click(getStartPractice());
    waitTillClosed();
  }
  
  export function getStartPassAndPlay() {
    return id('start_pass_and_play');
  }
  export function startPassAndPlay() {
    click(getStartPassAndPlay());
    waitTillClosed();
  }
  
  export function getShareInviteLink() {
    return id('share_invite_link_no_printscreen');
  }
  export function shareInviteLink() {
    click(getShareInviteLink());
  }
  
  export function getOpenFeedbackModal() {
    return id('open_feedback_modal');
  }
  export function openFeedbackModal() {
    click(getOpenFeedbackModal());
    return feedbackModal;
  }
  
  export function getOpenFeedbackBtnName() {
    return id('open_feedback_btn_name').getText();
  }
  
  export function getClose() {
    return id('close_left_nav');
  }
  export function close() {
    click(getClose());
    waitTillClosed();
  }
}
Logging.addLogging("leftNav", leftNav);

module feedbackModal {
  export function expectVisible() {
    expectDisplayed(getClose());
  }
  
  export function getFeedbackModel() {
    return element(by.model(("dialog.result"))); //used to be: model('feedbackText');
  }
  export function getFeedback() {
    return getValueAttribute(getFeedbackModel());
  }
  export function setFeedback(feedbackText: string) {
    replaceKeys(getFeedbackModel(), feedbackText);
  }
  
  export function getClose() {
    return element(byNgClick('dialog.abort()'));
  }
  export function close() {
    clickAndWaitToDisappear(getClose());
  }
}
Logging.addLogging("feedbackModal", feedbackModal);

module tictactoe {
  let isInGameIframe = false;
  export function run(func: ()=>void) {
    // The game_iframe_protector takes time to disappear
    waitForElementToDisappear(element(by.id('game_iframe_protector')));
    currBrowser.driver.switchTo().frame('game_iframe');
    // Sometimes it takes for the game_iframe some time to load.
    waitForElement(element(by.id('e2e_test_div_0x0')));
    isInGameIframe = true;
    func();
    currBrowser.driver.switchTo().defaultContent(); // you are now outside any iframes
    isInGameIframe = false;
  }

  export function expectPieceKindDisplayed(row: number, col: number, pieceKind: string, isDisplayed: boolean) {
    check(isInGameIframe);
    let elem = element(by.id('e2e_test_piece' + pieceKind + '_' + row + 'x' + col));
    // Careful when using animations and asserting isDisplayed:
    // Originally, my animation started from {opacity: 0;}
    // And then the image wasn't displayed.
    // I changed it to start from {opacity: 0.1;}
    if (isDisplayed) {
      expectDisplayed(elem);
    } else {
      expectNotPresent(elem);
    }
  }
  export function expectPiece(row: number, col: number, expectedPieceKind: string) {
    check(isInGameIframe);
    expectPieceKindDisplayed(row, col, 'X', expectedPieceKind === "X");
    expectPieceKindDisplayed(row, col, 'O', expectedPieceKind === "O");
  }
  export function expectBoard(board: string[][]) {
    check(isInGameIframe);
    // I can't use gameLogic.ROWS/COLS (instead of 3) because gameLogic is not defined
    // in end-to-end tests.
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        expectPiece(row, col, board[row][col]);
      }
    }
  }
  export function expectEmptyBoard() {
    check(isInGameIframe);
    expectBoard(
        [['', '', ''],
         ['', '', ''],
         ['', '', '']]);
  }
  export function clickDivAndExpectPiece(row: number, col: number, expectedPieceKind: string): void {
    check(isInGameIframe);
    let elem = element(by.id('e2e_test_div_' + row + 'x' + col));
    click(elem);
    expectPiece(row, col, expectedPieceKind);
  }
}

// Module to l10n platform strings based on the latest default translations.
// This way I don't need to update the tests if I make small changes in the text.
module l10n {
  export function expectTranslate(actual: webdriver.promise.Promise<string>, translationId: string, interpolationParams?: any, languageCode?: string) {
    let script = 'return (gamingPlatform.main ? gamingPlatform.main : gamingPlatform.gameinvite.main).l10n().translate(' + JSON.stringify(translationId) +
      (interpolationParams ? "," + JSON.stringify(interpolationParams) : "") +
      (languageCode ? "," + JSON.stringify(languageCode) : "") + ")";
    log("Executing script in " + getBrowserName(currBrowser) + ":\n" + script);
    currBrowser.executeScript(script).then((text)=>{
      log("L10n of " + translationId + " is " + text);
      expectToBe(actual, text);
    });
  }
}

let lastTest: any;
module JasmineOverrides {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  let jasmineAny = (<any>jasmine);
  let executeMock = jasmineAny.Spec.prototype.execute
  let jasmineSpec = jasmineAny.Spec;
  jasmineSpec.prototype.execute = function (...args: any[]) {
      lastTest = this.result;
      executeMock.apply(this, args);
  };
  log('jasmine-version:' + jasmineAny.version ? jasmineAny.version : jasmine.getEnv().versionString());
  // Pause for expect failures
  let originalAddExpectationResult = jasmineSpec.prototype.addExpectationResult;
  jasmineSpec.prototype.addExpectationResult = function () {
    if (!arguments[0]) {
      // Sadly, getStacktrace() is not helpful since it points to jasmine's internals: jasmine-core/jasmine.js:894:25
      // But if there was an error, the stack trace is in arguments[1].error.stack.
      error("\n\nFailure in test:\n" + 
          arguments[1].message + "\n" + 
          (arguments[1].error ? " stacktrace=\n\n" + arguments[1].error.stack : '') +
          "\n\n\n" +
          " Failure arguments=" + JSON.stringify(arguments));
    }
    return originalAddExpectationResult.apply(this, arguments);
  };
  // Pause on exception
  protractor.promise.controlFlow().on('uncaughtException', function(e: any) {
    error('Unhandled error: ' + e);
  });
}

declare var require: (module: string) => any;
declare var Buffer: any;

// Common functions
let currBrowser: protractor.Protractor = browser;
let secondBrowser: protractor.Protractor = browser.forkNewDriverInstance();
browser.ignoreSynchronization = true;
secondBrowser.ignoreSynchronization = true;

function getBrowserName(b: protractor.Protractor) {
  return b === secondBrowser ? "browser2" : "browser1";
}

function setFirstBrowser() {
  currBrowser = browser;
}
function runInSecondBrowser(fn: ()=>void) {
  runInBrowser(secondBrowser, fn);
}
function runInBrowser(b: protractor.Protractor, fn: ()=>void) {
  let oldBrowser = currBrowser;
  currBrowser = b;
  try {
    fn();
  } finally {
    currBrowser = oldBrowser;
  }
}
function runInSameBrowser<T>(fn: (t: T) => void) {
  let b = currBrowser;
  return (t: T) => {
    runInBrowser(b, () => { fn(t); });
  };
}

function check(value: boolean) {
  if (!value) throw new Error("Check failed");
}
function regexEscape(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function getStacktrace(): string {
  return (<any>new Error()).stack;
}

function element(locator: webdriver.Locator) {
  return currBrowser.element(locator);
}

function allElements(locator: webdriver.Locator): protractor.ElementArrayFinder {
  let e: any = currBrowser.element;
  return e.all(locator);
}

function byNgClick(clickExpression: string) {
  return by.css('[ng-click="' + clickExpression + '"]');
}
function byNgIf(ifExpression: string) {
  return by.css('[ng-if="' + ifExpression + '"]');
}
function allElementsByNgClick(clickExpression: string) {
  return allElements(byNgClick(clickExpression));
}
function allElementsByNgIf(ifExpression: string) {
  return allElements(byNgIf(ifExpression));
}

function printArgumentsToError() {
  log("printArgumentsToError args=" + JSON.stringify(arguments));
  return false;
}
function safePromise<T>(p: webdriver.promise.Promise<T>): webdriver.promise.Promise<T> {
  if (!p) error("safePromise p = " + p);
  return p.then((x:any)=>x, ()=>false);
}
function waitUntil(fn: ()=>any) {
  currBrowser.driver.wait(
    fn, 10000).thenCatch(error);
}
function waitForElement(elem: protractor.ElementFinder) {
  let elemName = getElementName(elem);
  willDoLog("waitForElement " + elemName);
  waitUntil(
    ()=>safePromise(elem.isPresent()).then(
      (isPresent)=>isPresent &&
        safePromise(elem.isDisplayed()).then((isDisplayed)=>
          isDisplayed && safePromise(elem.isEnabled()))));
  expectToBe(elem.isDisplayed(), true);
}

function waitForElementToDisappear(elem: protractor.ElementFinder) {
  let elemName = getElementName(elem);
  willDoLog("waitForElementToDisappear " + elemName);
  waitUntil(()=>safePromise(elem.isPresent()).then(
      (isPresent)=>isPresent ? 
        safePromise(elem.isDisplayed()).then((isDisplayed)=>!isDisplayed) : !isPresent));
  // Element is either not present or not displayed.
}

function waitForNumberOfElements(elements: protractor.ElementArrayFinder, waitForNumber: number) {
  willDoLog("waitForNumberOfElements to be " + waitForNumber);
  waitUntil(()=>elements.count().then((actualNumber)=>actualNumber == waitForNumber));
}

function getElementName(elem: protractor.ElementFinder) {
  return getBrowserName(currBrowser) + "." + elem.locator();
}

let startedExecutionTime = new Date().getTime();
function log(msg: string) {
  let now = new Date().getTime();
  console.log("After " + (now - startedExecutionTime) + " milliseconds: " + msg);
}
function error(msg: string) {
  log(Array.prototype.slice.call(arguments).join(", "));
  currBrowser.pause();
}
function willDoLog(msg: string) {
  msg += ' in ' + getBrowserName(currBrowser);
  log("Will do: " + msg);
  call(()=>{
    log("Doing: " + msg);
  });
}
function call(fn: ()=>void) {
  currBrowser.call(fn);
}

function id(idWithoutTestPrefix: string): protractor.ElementFinder {
  if (idWithoutTestPrefix.indexOf("test_") === 0) {
    throw new Error("You called id('test_XXX'), but you should call without the 'test_' prefix!");
  }
  return element(by.id('test_' + idWithoutTestPrefix));
}

function model(idWithoutAppDotModelDot: string): protractor.ElementFinder {
  return element(by.model('main.model().' + idWithoutAppDotModelDot));
}

// For <input> elements: replaces the text inside the element with newStr.
function replaceKeys(elem: protractor.ElementFinder, newStr: string) {
  let b = currBrowser;
  waitForElement(elem);
  elem.clear();
  elem.sendKeys(newStr);
  
  currBrowser.sleep(1000); // for some weird reason, in leftNav.setNewDisplayName (and I saw it happening when entering feedback text),
  // it's often empty (model().newDisplayName is undefined)
  // Even with sleep of 1000 it still happens sometimes, so I'll retry
  getValueAttribute(elem).then((actualStr)=>{
    if (actualStr !== newStr) {
      console.log("replaceKeys misbehaved, so calling it again");
      runInBrowser(b, ()=>replaceKeys(elem, newStr));
    }
  });
}

function getValueAttribute(elem: protractor.ElementFinder) {
  return getAttribute(elem, 'value');
}
function getAttribute(elem: protractor.ElementFinder, attributeName: string) {
  waitForElement(elem);
  return elem.getAttribute(attributeName);
}

function click(elem: protractor.ElementFinder) {
  waitForElement(elem);
  let msg = ' on ' + getElementName(elem);
  let stacktrace = getStacktrace();
  willDoLog("Click" + msg);
  elem.click().then(
    ()=>{
      // successfully clicked on element.
    },
    function () {
      // Failed to click, sometimes because it takes some time to close an overlay model, e.g.,
      //Element is not clickable at point (983, 58). Other element would receive the click: <div class="overlayModal ng-scope" ng-click="modal.backdrop($event)" ng-if="modal.isShowing()" aria-hidden="true">...</div>
      error("Failed clicking" + msg + " stacktrace=" + stacktrace + " arguments=" + JSON.stringify(arguments));
    }
  );
}
function clickAndWaitToDisappear(elem: protractor.ElementFinder) {
  click(elem);
  waitForElementToDisappear(elem);
}

function expectToBe<T>(p: webdriver.promise.Promise<T>, val: T) {
  let stacktrace = getStacktrace();
  p.then((v)=> {
    // If an expectation is not met, we'll pause the browser so we can see what's happening.
    if (v !== val) {
      error("Had a failed expectation: expected '" + v + "' to be '" + val + "' stacktrace=" + stacktrace);
    }
  });
  expect(p).toBe(val);
}

function expectToContain(p: webdriver.promise.Promise<string>, substr: string) {
  let stacktrace = getStacktrace();
  p.then((v)=> {
    // If an expectation is not met, we'll pause the browser so we can see what's happening.
    if (v.indexOf(substr) === -1) {
      error("Had a failed expectation: expected '" + v + "' to contain '" + substr + "' in stacktrace=" + stacktrace);
    }
  });
  expect(p).toContain(substr);
}

function expectDisplayed(element: protractor.ElementFinder) {
  waitForElement(element);
  expectToBe(element.isDisplayed(), true);
}

function expectNotPresent(element: protractor.ElementFinder) {
  expectToBe(element.isPresent(), false);
}

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
// In examples online you'll see "webdriver"; remember to replace it with "protractor".
describe('App ', function() {
  let browser1NameStr = getUserNameForBrowser(1);
  let browser2NameStr = getUserNameForBrowser(2);
  
  function getUserNameForBrowser(browserNumber: number) {
    // Max length allowed in my platform is 30 chars
    // "testBrowser1 015542174922302365" is already 31 chars.
    let name = 'testbr' + browserNumber + '-' + ('' + Math.random()).substr(2);
    // I'm choosing a name with all lowercase and no space (so the username will be the same).
    check(name.match(/^testbr[0-9][-][0-9]+$/).length == 1);
    check(name.length <= 30);
    return name;
  }
  
  function closeLeftNavAndMaybeGameinviteNotification() {
    // Before closing any notification (like gameinvite), we need to close leftNav
    leftNav.close();
    notifications.expectMaybeGameinviteNotification();
  }
  
  beforeEach(()=>{
    log('\n\n\nRunning test: ' + lastTest.fullName);
    loadApp();
    checkNoErrorInLogs();
  });
  afterEach(()=>{
    checkPostTestInvariant();
    checkNoErrorInLogs();
  });
  
  function checkNoErrorInLogs() {
    expectEmptyBrowserLogs(browser);
    expectEmptyBrowserLogs(secondBrowser);
  }
  
  function checkInvariantsInCurrBrowser(isPostTest: boolean) {
    expectEmptyBrowserLogs(currBrowser);
    let b = currBrowser;
    let project = getProject(b);
    if (project === 'app') {
      willDoLog("Start checkInvariantsInCurrBrowser for app");
      // All tests must go back to main page, and cleanup after themselves,
      // i.e., have no matches and no open notifications.
      mainPage.expectVisible(); 
      if (isPostTest) mainPage.expectNoMatches(); // Ok to have matches before loadApp()
      notifications.expectNoNotifications();
      leftNav.waitTillClosed();
      willDoLog("End checkInvariantsInCurrBrowser");
    }
  }
  function checkInvariantsInAllBrowsers(isPostTest: boolean) {
    checkInvariantsInCurrBrowser(isPostTest);
    runInSecondBrowser(()=>{
      checkInvariantsInCurrBrowser(isPostTest);
    });
  }
  function checkPreLoadAppInvariantInCurrBrowser() {
    log("Checking pre-loadApp() invariants in " + getBrowserName(currBrowser) + ": that all browsers are back in main page, and that there are no notifications; it's ok to have matches.");
    checkInvariantsInCurrBrowser(false);
  }
  function checkPostTestInvariant() {
    log("Checking post-test invariants: that all browsers are back in main page, and that there are no notifications and no matches.");
    checkInvariantsInAllBrowsers(true);
  }

  interface DeviceParams {
    dirName: string;
    deviceMetrics: DeviceMetrics;
  } 
  interface DeviceMetrics { 
    width: number;
    height: number;
    pixelRatio: number;
  }
  
  function getDeviceParams(): DeviceParams {
    //console.log("\n\n\nXXXXX\n\n\nbrowser.params=" + JSON.stringify(browser.params));
    return browser.params.supportedDevices[browser.params.deviceName];
  }
  function getDeviceDirName() {
    return getDeviceParams().dirName;
  }
  function getDeviceMetrics() {
    return getDeviceParams().deviceMetrics;
  }
  
  setPosition(browser, 0, 0);
  setPosition(secondBrowser, 450, 0);
  setSize(browser);
  setSize(secondBrowser);
  function setPosition(b: protractor.Protractor, x: number, y: number) {
    b.driver.manage().window().setPosition(x, y);
  }
  function setSize(b: protractor.Protractor) {
    // We want to set iPhone4 size (320x480), because this is the smallest size I support.
    // However, chrome desktop browser (on Mac) can't have width smaller than 400 anyway
    // (see http://stackoverflow.com/questions/8681903/browser-doesnt-scale-below-400px)
    // Moreover, setSize includes also the browser's address bar and buttons, so it's not the real size.
    // The real width&height are set in protractor.conf:
    // 'chromeOptions': { "mobileEmulation": { "deviceName": "Apple iPhone 4" } }
    // So this size just needs to be bigger than 320x(480+address-bar+chrome-tabs)
    var widthAndHeight = getDeviceMetrics();
    b.driver.manage().window().setSize(widthAndHeight.width + 20, widthAndHeight.height + 100);
  }
  function expectEmptyBrowserLogs(b: protractor.Protractor) {
    b.manage().logs().get('browser').then(function(browserLog) {
      // See if there are any errors (warnings are ok)
      let hasErrors = false;
      for (let log of browserLog) {
        let level = log.level.name;
        if (level === 'INFO' || level === 'WARNING') continue; // (warnings are ok)
        hasErrors = true;
      }
      if (hasErrors) {
        // This log produces too much clutter:
        log('\n\n\nlog: ' + require('util').inspect(browserLog) + "\n\n\n");
        // So it's better to pause, and look and console.
        error(getBrowserName(b) + " has a warning/error in the logs. Opens the developer console in the browsers and look at the logs.");
      }
    });
  }

  // We have 3 projects: app, gameinvite, gamedeveloper.
  interface StringIndexer {
    [name: string]: string;
  }
  let browserNameToProject: StringIndexer = {};
  function getProject(b: protractor.Protractor) {
    return browserNameToProject[getBrowserName(b)];
  }
  function getPage(url: string) {
    let browserName = getBrowserName(currBrowser);
    willDoLog("Loading " + url + " in " + browserName);
    if (url.substr(0, 1) !== '/') {
      throw new Error("Url must start with /, but url=" + url);
    }
    let withoutInitialSlash = url.substr(1);
    let project = withoutInitialSlash.substr(0, withoutInitialSlash.indexOf('/'));
    if (project !== 'app' && project !== 'gameinvite' && project !== 'gamedeveloper') {
      throw new Error("Url for an unknown project: project=" + project + " url=" + url);
    }
    let previousProject = browserNameToProject[browserName];
    if (previousProject) {
      checkPreLoadAppInvariantInCurrBrowser();
    }
    browserNameToProject[browserName] = project;
    currBrowser.get(url);
  }

  function startAutoMatch(retryNumber: number) {
    mainPage.expectNoMatches();
    if (retryNumber >= 5) {
      throw new Error("Tried already 5 times to create an auto-match with an unknown opponent");
    }
    mainPage.openNewMatchModal().startAutoMatch();
  }

  function makeMoveAndDismissMatch() {
    tictactoe.run(()=>{
      tictactoe.clickDivAndExpectPiece(2, 2, 'O');
    });
    playPage.openExtraMatchOptions().dismissMatch();
  }
  
  function getIsFirstPlayerMe(): webdriver.promise.Promise<boolean> {
    playPage.expectVisible();
    return currBrowser.executeScript('return gamingPlatform.main.currentMatch().getPlayers()[0].isMe()');
  }

  // Creates one auto-match with an unknown opponent.
  // Auto-match is tricky because if some previous test failed then the server
  // may have a pending auto match (or if someone else is doing an e2e test concurrently).
  // So if it happens, I resign the match and wait (exponential backoff)
  function createAutoMatch(retryNumber: number) {
    log("\n\n createAutoMatch retryNumber=" + retryNumber);
    startAutoMatch(retryNumber);
    // If we have an auto-match with an unknown opponent, then the opponent is the second player.
    getIsFirstPlayerMe().then(function (isFirstPlayerMe) {
      if (!isFirstPlayerMe) {
        log("\n\n No luck in createAutoMatch: I was hoping not to be matched, but first-browser was auto-matched. Making a move and dismissing match and retrying.\n\n");
        // Make any move and resign (I make a move so these auto matches will be cleaned up)
        makeMoveAndDismissMatch(); // will take me back to main menu
        createAutoMatch(retryNumber + 1);
      } else {
        // yippie! make a move
        tictactoe.run(()=>{
          tictactoe.expectEmptyBoard();
          tictactoe.clickDivAndExpectPiece(0, 0, "X");
          tictactoe.clickDivAndExpectPiece(1, 1, ""); // You can only make one move (double checking it's not single player)
        });
        notifications.expectMoveSent_CreateNewMatch();
        notifications.closeNotificationWithIndex(0);
        playPage.gotoMain();
        continueAfterAutoMatch();
      }
    });
  }
  function continueAfterAutoMatch() {
    log("\n\n continueAfterAutoMatch");
    setFirstBrowser();
    // Verify we have exactly one auto-match with an unknown opponent.
    mainPage.expectMatchCounts({yourTurn: 0, opponentTurn: 1, ended: 0});
    // Do auto-match in the second browser, which should match up the two browsers,
    // unless the first browser message didn't get yet to AppEngine (or we conflicted with some other auto-match).
    createAutoMatchWithFirstBrowser(0);
  }
  function createAutoMatchWithFirstBrowser(retryNumber: number) {
    log("\n\n createAutoMatchWithFirstBrowser retryNumber=" + retryNumber);
    runInSecondBrowser(()=>{
      loadApp();
      notifications.expectNoNotifications();
      startAutoMatch(retryNumber);
      // Should be:
      // First browser is the first player, and second browser is the second player.
      getIsFirstPlayerMe().then(function (isFirstPlayerMe) {
        runInSecondBrowser(()=>{
          if (isFirstPlayerMe) {
            log("\n\n No luck #1 in createAutoMatchWithFirstBrowser: I was hoping to be matched, but second-browser wasn't auto-matched with anyone. Just dismissing match and retrying.\n\n");
            // Dismissing the match and retrying.
            playPage.openExtraMatchOptions().dismissMatch(); // will take me back to main menu
            createAutoMatchWithFirstBrowser(retryNumber + 1);
          } else {
            // There is a tiny chance second browser was auto-matched with someone else (not first browser)
            playPage.openInfoModalForPlayerIndex(0);
            playerInfoModal.getDisplayName().then((otherPlayerName) => {
              runInSecondBrowser(()=>{
                playerInfoModal.close();
                if (otherPlayerName.indexOf(browser1NameStr) === -1) {
                  log("\n\n No luck #2 in createAutoMatchWithFirstBrowser: I was hoping to be matched with first-browser, but second-browser was auto-matched with someone else. Making a move, dismissing match and retrying.\n\n");
                  // Make any move and resign (I make a move so these auto matches will be cleaned up)
                  makeMoveAndDismissMatch(); // will take me back to main menu
                } else {
                  // yippie
                  continueAfterAutoMatchWithFirstBrowser();
                }
              });
            });
          }
        });
      });
    });
  }
  function continueAfterAutoMatchWithFirstBrowser() {
    log("\n\n continueAfterAutoMatchWithFirstBrowser");
    setFirstBrowser();
    runInSecondBrowser(()=>{
      // yippie! make a move
      tictactoe.run(()=>{
        tictactoe.expectBoard(
            [['X', '', ''],
             ['', '', ''],
             ['', '', '']]);
        tictactoe.clickDivAndExpectPiece(1, 1, "O");
        tictactoe.clickDivAndExpectPiece(2, 2, ""); // You can only make one move (double checking it's not single player)
      });
      notifications.expectMoveSent_CreateNewMatch();
      playPage.gotoMain();
      mainPage.expectMatchCounts({yourTurn: 0, opponentTurn: 1, ended: 0});
    });
    loadApp();
    notifications.expectOneNotification("PUSH_NOTIFICATION_YOUR_TURN_NOTIFICATION_TITLE", "PUSH_NOTIFICATION_YOUR_TURN_NOTIFICATION_BODY", 
      {OPPONENT_NAME: browser2NameStr})
    notifications.closeNotificationWithIndex(0);
    mainPage.expectMatchCounts({yourTurn: 1, opponentTurn: 0, ended: 0});
    dismissOnlyMatch();
    runInSecondBrowser(()=>{
      loadApp();
      notifications.expectOneNotification("PUSH_NOTIFICATION_OPPONENT_QUIT_NOTIFICATION_TITLE", "PUSH_NOTIFICATION_OPPONENT_QUIT_NOTIFICATION_BODY", 
        {OPPONENT_NAME: browser1NameStr});
      notifications.closeNotificationWithIndex(0);
      mainPage.expectMatchCounts({yourTurn: 0, opponentTurn: 0, ended: 1});
      mainPage.clickMatchIndex(0);
      // Will show gameOverModal
      gameOverModal.expectVisible();
      gameOverModal.close();
      playPage.openExtraMatchOptions().dismissMatch();
      mainPage.expectNoMatches();
    });
  }

  function dismissOnlyMatch() {
    mainPage.clickMatchIndex(0);
    playPage.openExtraMatchOptions().dismissMatch(); // will go to main menu.
    mainPage.expectNoMatches();
  }

  function loadApp() {
    // ChannelApi keeps an HTTP connection open, which causes protractor to fail after 10 seconds with:
    // Error Timed out waiting for Protractor to synchronize with the page
    // So we turn off channel API (isProtractor=true does that).
    // to-do: now that we use ignoreSynchronization=true, 
    // then we can remove isProtractor=true (which will enable FB-web and ChannelApi),
    // but to save on resources I should avoid loading the app in beforeEach.
    getPage('/app/index.html?onlyGameId=' + GAME_ID + '&isProtractor=true&testBrowserName=' + getBrowserName(currBrowser));
  }
  function loadGameinvite(userName: string) {
    getPage('/gameinvite/?' + userName + '=testtictactoe');
    let interpolationParams = {GAME_NAME: "test-tictactoe", PLAYER_NAME: userName};
    let translationId = "GAME_INVITE_PLAYER_NAME_WANTS_TO_PLAY_GAME_NAME_WITH_YOU";
    l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, interpolationParams);
    expectDisplayed(id('gameHeader320x50Url'));
    return interpolationParams;
  }

  function oneTimeInitInBothBrowsers() {
    // The first time the app loads, we show leftNav.
    closeLeftNavAndMaybeGameinviteNotification();
    runInSecondBrowser(()=>{
      loadApp();
      closeLeftNavAndMaybeGameinviteNotification();
    });
    
    changeDisplayName(browser1NameStr);
    runInSecondBrowser(()=>{
      changeDisplayName(browser2NameStr);
    });
  }
  
  function changeDisplayName(newName: string) {
    // Sets my displayName to browser1NameStr (this will also set userName to browser1NameStr because that string is very unique and highly unlikely to be taken by anyone).
    mainPage.openLeftNav();
    // Verify that initially the name starts with Guest-.
    expectToContain(leftNav.getNewDisplayName(), "Guest-");
    // Change displayName to newName.
    leftNav.setNewDisplayName(newName);
    leftNav.close();
  }

  // This test must be first because it requires an empty local-storage,
  // and following tests assume the displayName were changed.
  it('one-time initialization: shows leftNav when loading an app for the first time, changes displayName in the first browser, and verifies game helpscreen is shown', ()=>{
    oneTimeInitInBothBrowsers();
    // Verify displayName changed.
    mainPage.openLeftNav();
    expectToBe(leftNav.getNewDisplayName(), browser1NameStr);
    leftNav.close();
    // The game helpscreen is open on the first time.
    mainPage.openNewMatchModal().startPractice();
    tictactoe.run(() => {
      clickAndWaitToDisappear(element(by.id('e2e_test_close_help_screen')));
    });
    playPage.gotoMain();
  });

  it('can open feedback modal', ()=>{
    // Testing opening feedback (but not sending it, to avoid getting a feedback email)
    mainPage.openLeftNav().openFeedbackModal();
    feedbackModal.setFeedback("Some feedback text");
    feedbackModal.close();
    leftNav.close();
  });

  it('can switch languages and it localize correctly', ()=>{
    mainPage.openLeftNav();
    // Testing changing a langague (English->Hebrew->English), and making sure l10n worked.
    l10n.expectTranslate(leftNav.getOpenFeedbackBtnName(), "MAIN_FEEDBACK_AND_BUGS_TITLE", {}, "en");
    leftNav.changeLanguage('iw'); // Selecting language Hebrew
    l10n.expectTranslate(leftNav.getOpenFeedbackBtnName(), "MAIN_FEEDBACK_AND_BUGS_TITLE", {}, "iw");
    leftNav.changeLanguage('en'); // Selecting language English 
    l10n.expectTranslate(leftNav.getOpenFeedbackBtnName(), "MAIN_FEEDBACK_AND_BUGS_TITLE", {}, "en");
    leftNav.close();
    // to-do: add a test that language was switch in TicTacToe game (i.e., that the rules' language was changed)
  });

  it('can go to practice play page, click on back button and it will go back to main menu', ()=>{
    mainPage.openNewMatchModal().startPractice();
    currBrowser.navigate().back();
    mainPage.expectVisible();
  });

  it('can auto-match', ()=>{
    mainPage.expectNoMatches();
    createAutoMatch(0);
  });

  it('can make a move in a practice TicTacToe match, and restart it', ()=>{
    mainPage.openNewMatchModal().startPractice();
    // Make a move in TicTacToe!
    tictactoe.run(()=>{
      tictactoe.expectEmptyBoard();
      tictactoe.clickDivAndExpectPiece(1, 0, "X");
      // wait for AI to make at least one move
      // For some reason waitForElement doesn't work, but elementsLocated does work. Weird...
      currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x0')), 10000);
      tictactoe.expectPiece(0, 0, 'O'); // AI played at position 0x0
    });
    playPage.gotoMain();
    // Restart a new practice match.
    mainPage.openNewMatchModal().startPractice();
    tictactoe.run(()=>{
      tictactoe.expectEmptyBoard();
    });
    playPage.gotoMain();
  });

  it('can finish a passAndPlay TicTacToe match, restart it, and go back to main menu', ()=>{
    mainPage.openNewMatchModal().startPassAndPlay();
    tictactoe.run(()=>{
      tictactoe.expectEmptyBoard();
      // End game with X winning.
      for (let col = 0; col < 2; col++) {
        tictactoe.clickDivAndExpectPiece(1, col, "X");
        tictactoe.clickDivAndExpectPiece(2, col, "O");
      }
      // Winning move
      tictactoe.clickDivAndExpectPiece(1, 2, "X");
      tictactoe.expectBoard(
          [['', '', ''],
           ['X', 'X', 'X'],
           ['O', 'O', '']]);
    });
    expectDisplayed(id('game_over_match_status'));
    gameOverModal.newMatch(); // Will restart a new single-player game
    tictactoe.run(()=>{
      tictactoe.expectEmptyBoard();
      tictactoe.clickDivAndExpectPiece(0, 0, "X");
      tictactoe.clickDivAndExpectPiece(1, 1, "O");
    });
    // Restart passAndPlay
    playPage.gotoMain();
    mainPage.openNewMatchModal().startPassAndPlay();
    tictactoe.run(()=>{
      tictactoe.expectEmptyBoard();
    });
    playPage.gotoMain();
  });
  
  it('from Prasoon Goyal & Rachita Hajela: can go to practice, open game invite in 2nd browser, back to main menu', ()=> {
    mainPage.openNewMatchModal().startPractice();
    runInSecondBrowser(()=>{
      let interpolationParams = loadGameinvite(browser1NameStr);
      loadApp();
      notifications.expectOneNotification('IN_APP_NOTIFICATION_GAME_INVITE_TITLE', 'IN_APP_NOTIFICATION_GAME_INVITE_BODY', interpolationParams);
      notifications.closeNotificationWithIndex(0);
    });
    playPage.gotoMain();
  });
  
  it('from DiegoRincon: can finish a practice TicTacToe match and go back to main menu', function () {
    mainPage.openNewMatchModal().startPractice();
    tictactoe.run(function () {
        tictactoe.expectEmptyBoard();
        tictactoe.clickDivAndExpectPiece(1, 0, "X");
        // wait for AI to make at least one move
        // For some reason waitForElement doesn't work, but elementsLocated does work. Weird...
        currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x0')), 10000);
        tictactoe.expectPiece(0, 0, 'O'); // AI played at position 0x0
        tictactoe.clickDivAndExpectPiece(2, 0, "X");
        currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x1')), 10000);
        tictactoe.expectPiece(0, 1, 'O'); // AI played at position 0x0
        tictactoe.clickDivAndExpectPiece(1, 1, "X");
        currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x2')), 10000);
        tictactoe.expectPiece(0, 2, 'O'); // AI played at position 0x0
    });
    expectDisplayed(id('game_over_match_status'));
    gameOverModal.close();
    playPage.gotoMain();
  });

  it('from ismailmustafa and pdhar (team Carrom)@: can finish a passAndPlay match, go to the main menu, finish a practice match, and go back to main menu', ()=>{
    mainPage.openNewMatchModal().startPassAndPlay();
    
    // Run game to completion
    tictactoe.run(()=>{
      tictactoe.expectEmptyBoard();
      let isX = true;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (i == 2 && j == 1) break;
          tictactoe.clickDivAndExpectPiece(i, j, isX ? 'X' : 'O');
          isX = !isX;
        }
      }
      tictactoe.expectBoard(
          [['X', 'O', 'X'],
           ['O', 'X', 'O'],
           ['X', '', '']]);
    });
    
    // Check for game over modal, close, and go to main
    expectDisplayed(id('game_over_match_status'));
    gameOverModal.close();
    playPage.gotoMain();
    
    // Start a practice match
    mainPage.openNewMatchModal().startPractice();
    tictactoe.run(()=>{
      tictactoe.clickDivAndExpectPiece(1, 1, 'X');
      currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x0')), 10000);
      tictactoe.clickDivAndExpectPiece(2, 2, 'X');
      currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x2')), 10000);
      tictactoe.clickDivAndExpectPiece(2, 1, 'X');
      currBrowser.driver.wait(protractor.until.elementsLocated(by.id('e2e_test_pieceO_0x1')), 10000);
      tictactoe.expectBoard(
          [['O', 'O', 'O'],
           ['', 'X', ''],
           ['', 'X', 'X']]);
    });
    
    // Check for game over modal, close, and go to main
    expectDisplayed(id('game_over_match_status'));
    gameOverModal.close();
    playPage.gotoMain();
  });
  
  it('from pioneers team (Hung-Ting Wen): single-player game ends in win/lose', ()=> {
    mainPage.openNewMatchModal().startPassAndPlay();
    tictactoe.run(()=>{
      /**
       * First test case: X won
       */
      tictactoe.expectEmptyBoard();
      tictactoe.clickDivAndExpectPiece(0, 0, 'X');
      tictactoe.clickDivAndExpectPiece(1, 2, 'O');
      tictactoe.clickDivAndExpectPiece(1, 1, 'X');
      tictactoe.clickDivAndExpectPiece(2, 1, 'O');

      //Winning move
      tictactoe.clickDivAndExpectPiece(2, 2, 'X');
      tictactoe.expectBoard(
          [['X', '', ''],
           ['', 'X', 'O'],
           ['', 'O', 'X']]);
    });
    expectDisplayed(id('game_over_match_status'));
    l10n.expectTranslate(gameOverModal.getMatchOverStatus(), 'MATCH_STATUS_OPPONENT_WON_WITH_NAME', {OPPONENT_NAME: 'PLAYER_X'});
    
    gameOverModal.newMatch(); // Will restart a new single-player game
    tictactoe.run(()=>{
      /**
       * Second test case: O won
       */
      tictactoe.expectEmptyBoard();
      tictactoe.clickDivAndExpectPiece(0, 0, 'X');
      tictactoe.clickDivAndExpectPiece(1, 1, 'O');
      tictactoe.clickDivAndExpectPiece(1, 2, 'X');
      tictactoe.clickDivAndExpectPiece(0, 2, 'O');
      tictactoe.clickDivAndExpectPiece(2, 1, 'X');
      //Winning move
      tictactoe.clickDivAndExpectPiece(2, 0, 'O');
      tictactoe.expectBoard(
          [['X', '', 'O'],
           ['', 'O', 'X'],
           ['O', 'X', '']]);
    });
    expectDisplayed(id('game_over_match_status'));
    l10n.expectTranslate(gameOverModal.getMatchOverStatus(), 'MATCH_STATUS_OPPONENT_WON_WITH_NAME', {OPPONENT_NAME: 'PLAYER_O'});
    
    //Cleanup
    gameOverModal.close();
    playPage.gotoMain();
  });
  
  it('from pioneers team (Hung-Ting Wen): single player game ends in a tie', ()=> {
    mainPage.openNewMatchModal().startPassAndPlay();
    tictactoe.run(()=>{
      /**
       * Third test case: tie
       */
      tictactoe.expectEmptyBoard();
      for (let col = 0; col < 2; col++) {
        tictactoe.clickDivAndExpectPiece(0, col, 'X');
        tictactoe.clickDivAndExpectPiece(1, col, 'O');
      }

      tictactoe.clickDivAndExpectPiece(1, 2, 'X');
      tictactoe.clickDivAndExpectPiece(0, 2, 'O');
      tictactoe.clickDivAndExpectPiece(2, 0, 'X');
      tictactoe.clickDivAndExpectPiece(2, 2, 'O');
      tictactoe.clickDivAndExpectPiece(2, 1, 'X');
      tictactoe.expectBoard(
          [['X', 'X', 'O'],
           ['O', 'O', 'X'],
           ['X', 'X', 'O']]);
    });
    expectDisplayed(id('game_over_match_status'));
    l10n.expectTranslate(gameOverModal.getMatchOverStatus(), 'MATCH_STATUS_ENDED_IN_TIE', {});
    //Cleanup
    gameOverModal.close();
    playPage.gotoMain();
  });
  
  it('from Shuang Wang (Enclosed Combat team): can start a match from gameinvite, player1 blocks player2, and player2 receives block message when invite player1 to a new game', ()=>{
    loadGameinvite(browser2NameStr);
    loadApp();
    notifications.clickNotificationWithIndex(0);
    playPage.openInfoModalForPlayerIndex(1);
    playerInfoModal.blockPlayer();
    playerInfoModal.close();
    playPage.openExtraMatchOptions().dismissMatch();
    runInSecondBrowser(()=>{
      loadGameinvite(browser1NameStr);
      loadApp();
      notifications.clickNotificationWithIndex(0);
      playPage.openInfoModalForPlayerIndex(1);
      playerInfoModal.inviteToNewGame();
      notifications.expectNoNotifications();
      tictactoe.run(()=>{
        tictactoe.expectEmptyBoard();
        tictactoe.clickDivAndExpectPiece(0, 0, 'X');
      });
      notifications.expectYouWereBlockedInNotificationIndex(1);
      expect(notifications.getNotificationsCount()).toBe(2);
      notifications.closeNotificationWithIndex(1);
      notifications.closeNotificationWithIndex(0);
      playPage.openExtraMatchOptions().dismissMatch();
      mainPage.clickMatchIndex(0);
      playPage.openExtraMatchOptions().dismissMatch();
    });
  }); 
  
  it('can invite using userName', ()=>{
    runInSecondBrowser(()=>{
      let interpolationParams = loadGameinvite(browser1NameStr);
      loadApp();
      notifications.expectOneNotification('IN_APP_NOTIFICATION_GAME_INVITE_TITLE', 'IN_APP_NOTIFICATION_GAME_INVITE_BODY', interpolationParams);
      notifications.closeNotificationWithIndex(0);
    });
  });
  
  it('can switch languages in gameinvite and it localize correctly', ()=>{
    runInSecondBrowser(()=>{
      loadGameinvite(browser1NameStr);

      

      // Testing changing a langague (English->Hebrew->English), and making sure l10n worked.
      let englishInterpolationParams = {GAME_NAME: "test-tictactoe", PLAYER_NAME: browser1NameStr};
      let translationId = "GAME_INVITE_PLAYER_NAME_WANTS_TO_PLAY_GAME_NAME_WITH_YOU";
      let hebrewInterpolationParams = {GAME_NAME: "HEBREW-test-tictactoe", PLAYER_NAME: browser1NameStr};
      l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, englishInterpolationParams, "en");
      expectToBe(gameinvitePage.getCurrentLanguageCode(), 'string:en');
      gameinvitePage.clickOnLanguageOption('עברית'); // Selecting language Hebrew
      expectToBe(gameinvitePage.getCurrentLanguageCode(), 'string:iw');
      l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, hebrewInterpolationParams, "iw");
      gameinvitePage.clickOnLanguageOption('English');
      l10n.expectTranslate(gameinvitePage.getInviteText(), translationId, englishInterpolationParams, "en");
    });
  });
  
  function expectModel(ngModel:string, toBe: string) {
    let elem = element(by.model(ngModel));
    waitForElement(elem);
    waitUntil(()=>elem.getAttribute('value').then((v)=>v === toBe));
    expect(elem.getAttribute('value')).toBe(toBe);
  }
  
  it('gameDeveloper login', function () {
    runInSecondBrowser(()=>{
      getPage('/gamedeveloper/gameDeveloper.html');
      expectModel('developerLogin.email', '');
    });
  });
  
  it('gameDeveloper main', function () {
    runInSecondBrowser(()=>{
      // Test game developer account is:
      getPage('/gamedeveloper/gameDeveloper.html#/developer/6000581957124096/3363110773855931519');
      expectModel('developerMain.gameDeveloperInfo.gameDeveloperEmail',
        'yoav.zibin+testtictactoe@gmail.com');
    });
  });
  
  it('gameDeveloper test-tictactoe', function () {
    runInSecondBrowser(()=>{
      getPage('/gamedeveloper/gameDeveloper.html#/developer/6000581957124096/3363110773855931519/6000581957124096-0');
      expectModel('developerGame.game.phonegapAppName',
        'test-tictactoe');
    });
  });
    
  it('cleanup any remaining gameinvites', function () {
    notifications.expectMaybeGameinviteNotification();
    runInSecondBrowser(()=>{
      notifications.expectMaybeGameinviteNotification();
    });
  });
  
});

}
