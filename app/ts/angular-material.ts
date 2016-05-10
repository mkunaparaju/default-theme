(()=> {
let w: any = window;
if (w.gamingPlatformInitFinished) {
  console.error("function gamingPlatformInitFinished is already defined! Overriding it...");
} 
w.gamingPlatformInitFinished = function () {
  let main = gamingPlatform.main;
  let translate = main.l10n().translate;
  let customize = main.game().customize;
  if (!customize) customize = (id: string, value: string) => value; // For old API without customize. TODO: remove in July 2016.
  
  if (w.platformTranslations) {
    main.l10n().setTranslations(w.platformTranslations);
  } else {
    console.error("platformTranslations wasn't defined!");
  }
  
  angular.module('whateverNameApp', ["gamingPlatformModule", 'ngMaterial'])
  .config(['$mdThemingProvider', '$mdIconProvider', 
    function ($mdThemingProvider: any, $mdIconProvider: any) {
      $mdThemingProvider
          .theme('default')
          .primaryPalette(customize('primaryPalette', 'blue'))
          .accentPalette(customize('accentPalette', 'red'));
    }])
  .run(['$rootScope', '$timeout', 
      '$mdSidenav', '$mdMedia', '$mdComponentRegistry',
      '$mdBottomSheet', '$mdDialog',
    function ($rootScope: any, $timeout: any, 
        $mdSidenav: any, $mdMedia: any, $mdComponentRegistry: any, 
        $mdBottomSheet: any, $mdDialog: any) {
          
      function showPlayerBottomSheet(
          player: gamingPlatform.api.Player, match: gamingPlatform.api.Match) {
        if (player.isMe() || player.isUnknown()) return false;
        $mdBottomSheet.show({
          templateUrl: 'html-templates/playerInfoBottomSheet.html',
          controller: ''
        });
        $rootScope.playerInBottomSheet = ()=>player;
        $rootScope.matchInBottomSheet = ()=>match;
        let model = main.model();
        $rootScope.sendChatAndCloseBottomSheet = ()=>{$mdBottomSheet.hide(); main.sendChat(model.chatMessage, player, match);};
        model.chatMessage = "";
      }
      
      function swipedMatch(match: gamingPlatform.api.Match) {
        if (match.isOver()) {
          match.dismiss();
          return;
        }
        // Two getters
        $rootScope.getSwipedMatch = ()=>match;
        $rootScope.swipedMatchDialogTitle = ()=>translate('SURE_YOU_WANT_TO_RESIGN', 
            {OPPONENTS_NAME: match.getOpponentNames()});
        // Two dialog actions
        $rootScope.closeSwipedMatchDialog = ()=>$mdDialog.cancel();
        $rootScope.dismissSwipedMatch = ()=>{match.dismiss(); $mdDialog.cancel();};
       
        $mdDialog.show({
          clickOutsideToClose: true,
          templateUrl: 'html-templates/dismissSwipedMatchDialog.html',
          scope: $rootScope,
          preserveScope: true,
        });
      }
      
      function openFeedbackDialog() {
        let title = translate('MODAL_TITLE_FEEDBACK_AND_BUGS');
        $mdDialog.show(
          $mdDialog.prompt()
            .clickOutsideToClose(true)
            .title(title)
            .textContent('')
            .ariaLabel(title)
            .ok(translate('MODAL_BUTTON_SEND_FEEDBACK_AND_BUGS'))
            .cancel(translate('MODAL_BUTTON_CLOSE'))
            // You can specify either sting with query selector
            .openFrom('#test_open_feedback_modal')
            // or an element
            .closeTo('#test_open_feedback_modal')
        ).then((feedback: string)=>main.sendFeedback(feedback));
      }
      
      let gameOverDialogShowing = false;
      function gameOverModalShowingChanged(newValue: boolean, oldValue: boolean) {
        main.log("gameOverModalShowingChanged: newValue=", newValue, "gameOverDialogShowing=", gameOverDialogShowing, " oldValue=", oldValue)
        if (!newValue && gameOverDialogShowing) {
          $mdDialog.hide();
          return;
        }
        if (newValue && !gameOverDialogShowing) {
          gameOverDialogShowing = true;
          $mdDialog.show({
            clickOutsideToClose: true,
            templateUrl: 'html-templates/gameOverDialog.html',
            scope: $rootScope,
            preserveScope: true,
          }).finally(function() {
            main.closeGameOverModal();
            gameOverDialogShowing = false;
          }); 
        }
      }
      
      $rootScope['$mdSidenav'] = $mdSidenav;
      $rootScope['$mdMedia'] = $mdMedia;
      $rootScope['$mdBottomSheet'] = $mdBottomSheet;
      $rootScope['$mdDialog'] = $mdDialog;
      
      $rootScope['showPlayerBottomSheet'] = showPlayerBottomSheet;
      $rootScope['swipedMatch'] = swipedMatch;
      $rootScope['openFeedbackDialog'] = openFeedbackDialog;
      $rootScope.$watch("main.isModalShowing('gameOverModal')", gameOverModalShowingChanged);
      
      $rootScope.sideNavIsOpen = () => false; // overridden later.
      $mdComponentRegistry.when('left').then(function(sideNav: any) {
        $rootScope.sideNavIsOpen = () => sideNav.isOpen() &&
            // When gt-xs, then the sideNav is always open (and sideNav.isOpen may return true/false regardless).
            !$mdMedia('gt-xs');
        if (main.isFirstTimeUser()) {
          $timeout(function () {
            $mdSidenav('left').toggle();
          }, 500); // I wait half a second just for the user to see the game title for a bit.
        }
      });
    } 
  ]);
  angular.bootstrap(document, ["whateverNameApp"]);
};
})();