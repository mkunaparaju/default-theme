function gamingPlatformInitFinished() {
  let w: any = window;
  let main = gamingPlatform.main;
  let translate = main.l10n().translate;
  if (w.platformTranslations) main.l10n().setTranslations(w.platformTranslations);
  
  angular.module('whateverNameApp', ["gamingPlatformModule", 'ngMaterial'])
  .config(['$mdThemingProvider', '$mdIconProvider', 
    function ($mdThemingProvider: any, $mdIconProvider: any) {
      $mdThemingProvider
          .theme('default')
          .primaryPalette('blue')
          .accentPalette('red');
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
      
      if (main.isFirstTimeUser()) {
        $mdComponentRegistry.when('left').then(function() {
          $timeout(function () {
            $mdSidenav('left').toggle();
          }, 500); // I wait half a second just for the user to see the game title for a bit.
        });
      }
    } 
  ]);
  angular.bootstrap(document, ["whateverNameApp"]);
}