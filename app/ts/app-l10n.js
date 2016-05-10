(function () {
    ;
    var platformTranslations = {
        "MAXIMIZE_GAME": {
            "en": "Maximize game",
            "iw": "הגדל משחק",
            "pt": "Maximize jogo",
            "zh": "最大化的游戏",
            "el": "Μεγιστοποιήστε το παιχνίδι",
            "fr": "Maximiser jeu",
            "hi": "खेल अधिकतम",
            "es": "maximizar juego"
        },
        "SHOW_PLAYERS": {
            "en": "Show players",
            "iw": "הראה שחקנים",
            "pt": "Mostrar jogadores",
            "zh": "显示玩家",
            "el": "Εμφάνιση παίκτες",
            "fr": "Afficher les joueurs",
            "hi": "शो खिलाड़ियों",
            "es": "Mostrar jugadores"
        },
        "TIME_AGO_SOME_SECONDS": {
            "en": "{{UNITS}} seconds ago",
            "iw": "לפני {{UNITS}} שניות",
            "pt": "{{UNITS}} segundos atrás",
            "zh": "{{UNITS}}秒前",
            "el": "Πριν από {{UNITS}} δευτερόλεπτα",
            "fr": "il y a {{UNITS}} secondes",
            "hi": "{{UNITS}} सेकंड पहले",
            "es": "hace {{UNITS}} segundos"
        },
        "TIME_AGO_ONE_MINUTE": {
            "en": "1 minute ago",
            "iw": "לפני דקה",
            "pt": "1 minuto atrás",
            "zh": "1分钟前",
            "el": "Πριν από 1 λεπτό",
            "fr": "il y a 1 minute",
            "hi": "1 मिनट पहले",
            "es": "Hace 1 minuto"
        },
        "TIME_AGO_SOME_MINUTES": {
            "en": "{{UNITS}} minutes ago",
            "iw": "לפני {{UNITS}} דקות",
            "pt": "{{UNITS}} minutos atrás",
            "zh": "{{UNITS}}分钟前",
            "el": "{{UNITS}} λεπτά πριν",
            "fr": "Il y a {{UNITS}} minutes",
            "hi": "{{UNITS}} मिनट पहले",
            "es": "Hace {{UNITS}} minutos"
        },
        "TIME_AGO_ONE_HOUR": {
            "en": "1 hour ago",
            "iw": "לפני שעה",
            "pt": "1 hora atrás",
            "zh": "1小时前",
            "el": "Πριν από 1 ώρα",
            "fr": "Il ya 1 heure",
            "hi": "1 घंटे पहले",
            "es": "Hace 1 día"
        },
        "TIME_AGO_SOME_HOURS": {
            "en": "{{UNITS}} hours ago",
            "iw": "לפני {{UNITS}} שעות",
            "pt": "{{UNITS}} horas atrás",
            "zh": "{{UNITS}}小时前",
            "el": "Πριν από {{UNITS}} ώρες",
            "fr": "Il y a {{UNITS}} heures",
            "hi": "{{UNITS}} घंटे पहले",
            "es": "Hace {{UNITS}} horas"
        },
        "TIME_AGO_YESTERDAY": {
            "en": "yesterday",
            "iw": "אתמול",
            "pt": "ontem",
            "zh": "昨天",
            "el": "εχθές",
            "fr": "hier",
            "hi": "बिता कल",
            "es": "ayer"
        },
        "TIME_AGO_SOME_DAYS": {
            "en": "{{UNITS}} days ago",
            "iw": "לפני {{UNITS}} ימים",
            "pt": "{{UNITS}} dias atrás",
            "zh": "{{UNITS}}天前",
            "el": "{{UNITS}} ημέρες πριν",
            "fr": "Il y a {{UNITS}} jours",
            "hi": "{{UNITS}} दिन पहले",
            "es": "Hace {{UNITS}} días"
        },
        "TIME_AGO_LAST_WEEK": {
            "en": "last week",
            "iw": "בשבוע שעבר",
            "pt": "semana passada",
            "zh": "上个星期",
            "el": "Την προηγούμενη εβδομάδα",
            "fr": "la semaine dernière",
            "hi": "पिछले सप्ताह",
            "es": "la semana pasada"
        },
        "TIME_AGO_SOME_WEEKS": {
            "en": "{{UNITS}} weeks ago",
            "iw": "לפני {{UNITS}} שבועות",
            "pt": "{{UNITS}} semanas atrás",
            "zh": "{{UNITS}}周前",
            "el": "Πριν από {{UNITS}} εβδομάδες",
            "fr": "Il y a {{UNITS}} semaines",
            "hi": "{{UNITS}} सप्ताह पहले",
            "es": "hace {{UNITS}} semanas"
        },
        "TIME_AGO_LAST_MONTH": {
            "en": "last month",
            "iw": "בחודש שעבר",
            "pt": "mês passado",
            "zh": "上个月",
            "el": "τον προηγούμενο μήνα",
            "fr": "le mois dernier",
            "hi": "पिछले महीने",
            "es": "el mes pasado"
        },
        "TIME_AGO_SOME_MONTHS": {
            "en": "{{UNITS}} months ago",
            "iw": "לפני {{UNITS}} חודשים",
            "pt": "{{UNITS}} meses atrás",
            "zh": "{{UNITS}}个月前",
            "el": "{{UNITS}} μήνες πριν",
            "fr": "Il y a {{UNITS}} mois",
            "hi": "{{UNITS}} महीने पहले",
            "es": "Hace {{UNITS}} meses"
        },
        "TIME_AGO_LAST_YEAR": {
            "en": "last year",
            "iw": "בשנה שעברה",
            "pt": "ano passado",
            "zh": "去年",
            "el": "πέρυσι",
            "fr": "l'année dernière",
            "hi": "पिछले साल",
            "es": "el año pasado"
        },
        "TIME_AGO_SOME_YEARS": {
            "en": "{{UNITS}} years ago",
            "iw": "לפני {{UNITS}} שנים",
            "pt": "{{UNITS}} anos atrás",
            "zh": "{{UNITS}}年前",
            "el": "{{UNITS}} χρόνια πριν",
            "fr": "Il y a {{UNITS}} ans",
            "hi": "{{UNITS}} साल पहले",
            "es": "Hace {{UNITS}} años"
        },
        "LANGUAGE": {
            "en": "Language",
            "iw": "שפה",
            "pt": "Língua",
            "zh": "语言",
            "el": "Γλώσσα",
            "fr": "La langue",
            "hi": "भाषा",
            "es": "Idioma"
        },
        "CHAT_MESSAGE_LABEL": {
            "en": "Type in a chat message",
            "iw": "הקלד הודעת צט",
            "pt": "Digite uma mensagem de chat",
            "zh": "输入一个聊天信息",
            "el": "Πληκτρολογήσετε ένα μήνυμα συνομιλίας",
            "fr": "Tapez un message de chat dans",
            "hi": "में टाइप एक चैट संदेश",
            "es": "Escribir en un mensaje de chat"
        },
        "CHAT_SENT": {
            "en": "Chat sent",
            "iw": "צט נשלח",
            "pt": "Bate-papo enviadas",
            "zh": "对话发送",
            "el": "Κουβέντα αποστέλλονται",
            "fr": "Message envoyé",
            "hi": "चैट संदेश भेजा",
            "es": "Mensaje enviado"
        },
        "FB_FRIENDS_ACTION_INVITE": {
            "en": "Invite",
            "iw": "הזמן",
            "pt": "Convidar",
            "zh": "邀请",
            "el": "Πρόσκληση",
            "fr": "Invitez",
            "hi": "आमंत्रण",
            "es": "Invitar"
        },
        "FB_FRIENDS_DID_NOT_INSTALL_APP": {
            "en": "We're sorry, but it looks like none of your friends has this app installed.",
            "iw": "החברים שלך לא התקינו את האפליקציה",
            "pt": "Desculpe, mas parece que nenhum dos seus amigos tem esse aplicativo instalado.",
            "zh": "不好意思，你朋友们都没安装这个程序",
            "el": "Δυστυχώς, κανένας από την λίστα φίλων σας, δεν έχει εγκαταστήσει την εφαρμογή.",
            "fr": "Désolé, il semblerait qu'aucun de vos amis n'ait installé cette application",
            "hi": "माफ़ कीजिये, लेकिन ऐसा लगता है की आपके दोस्तों के पास यह एप्लिकेशन नहीं है ।",
            "es": "Ninguno de tus amigos tiene el app instalado"
        },
        "FB_FRIENDS_FILTER_CANCEL": {
            "en": "Cancel",
            "iw": "בטל",
            "pt": "Cancelar",
            "zh": "取消",
            "el": "Ακύρωση",
            "fr": "Annuler",
            "hi": "रद्द",
            "es": "Cancelar"
        },
        "FB_FRIENDS_SHARE": {
            "en": "Share",
            "iw": "שתף",
            "pt": "Compartilhar",
            "zh": "分享",
            "el": "Μερίδιο",
            "fr": "Partager",
            "hi": "बाँटो ",
            "es": "Compartir"
        },
        "FB_FRIENDS_TITLE": {
            "en": "Facebook",
            "iw": "חברים",
            "pt": "Amigos",
            "zh": "脸书上的朋友",
            "el": "Φίλοι",
            "fr": "Facebook",
            "hi": "फेसबुक",
            "es": "Facebook"
        },
        "IN_APP_NOTIFICATION_GAME_INVITE_BODY": {
            "en": "{{PLAYER_NAME}} wants to play with you!",
            "iw": "{{PLAYER_NAME}} רוצה לשחק איתך!",
            "pt": "{{PLAYER_NAME}} quer jogar com você!",
            "zh": "{{PLAYER_NAME}}想和你一起玩",
            "el": "{{PLAYER_NAME}} θέλει να παίξει μαζί σας!",
            "fr": "{{PLAYER_NAME}} veut jouer avec vous!",
            "hi": "{{PLAYER_NAME}} आपके साथ खेलना चहता है। ",
            "es": "{{PLAYER_NAME}} quiere jugar contigo!"
        },
        "IN_APP_NOTIFICATION_GAME_INVITE_TITLE": {
            "en": "Game invite",
            "iw": "הזמנה למשחק",
            "pt": "Convite",
            "zh": "游戏邀请",
            "el": "προσκαλούν παιχνίδι",
            "fr": "Invitation à une partie",
            "hi": "खेल आमंत्रण",
            "es": "Invitar a jugar"
        },
        "IN_APP_NOTIFICATION_GOT_FB_ERROR": {
            "en": "We received an error from Facebook, please try again later.",
            "iw": "היתה שגיאה בפייסבוק. נסה שוב אחר כך",
            "pt": "Nós recebemos um erro do Facebook. Por favor tente novamente mais tarde.",
            "zh": "错误，请重试",
            "el": "Προκλήθηκε σφάλμα από την μεριά του Facebook, παρακαλώ προσπαθήστε αργότερα.",
            "fr": "Nous avons reçu une erreur de Facebook, veuillez réessayer",
            "hi": "हमे फेसबुक से गलती का संदेश आया है, कृपया बाद में कोशिश करें। ",
            "es": "Recibimos un error de Facebook, intenta otra vez mas tarde"
        },
        "IN_APP_NOTIFICATION_MOVE_SENT_CREATE_NEW_MATCH": {
            "en": "Move sent, and no more moves to make in any game. Click to create new game.",
            "iw": "מסע נשלח. לחץ כדי להתחיל משחק חדש",
            "pt": "Mova enviou, e não há mais movimentos para fazer em qualquer jogo. Clique para criar um novo jogo.",
            "zh": "最后回合结束，点击开始新的游戏",
            "el": "Μετακίνηση έστειλε, και όχι περισσότερες κινήσεις για να κάνει σε κάθε παιχνίδι. Κάντε κλικ για να δημιουργήσετε νέο παιχνίδι.",
            "fr": "Action envoyée, plus aucune action à effectuer dans aucune partie. Appuyer pour créer une nouvelle partie",
            "hi": "चाल भेजदी है, आपके  बाकी खेलों में कोई चाल अभ नहीं बची है ",
            "es": "Jugada enviada; no hay jugadas por hacer en otros juegos. Haz click para crear un nuevo juego."
        },
        "IN_APP_NOTIFICATION_MOVE_SENT_LOAD_NEXT_MATCH": {
            "en": "Move sent. Click to make a move in the next game.",
            "iw": "מסע נשלח. לחץ כדי לעשות מסע במשחק הבא",
            "pt": "Mova enviado. Clique para fazer um movimento no próximo jogo.",
            "zh": "操作已发送，请在下一场游戏中进行操作",
            "el": "Μετακίνηση σταλεί. Κάντε κλικ για να κάνει μια κίνηση στο επόμενο παιχνίδι.",
            "fr": "Action envoyée. Appuyer pour effectuer une action dans une autre partie",
            "hi": "चाल भेजदी है, क्लिक करें अगली चाल के लिए। ",
            "es": "Jugada enviada; haz click para hacer una movida en el siguente juego."
        },
        "IN_APP_NOTIFICATION_TOO_MANY_MATCHES_DISMISS_ENDED_MATCHES": {
            "en": "You have too many games. Click here to quit games that ended.",
            "iw": "יש לך יותר מידי משחקים. לחץ כאן כדי לבטל משחקים שנגמרו כבר",
            "pt": "Você tem muitos jogos em progresso. Clique aqui para sair de partidas encerradas.",
            "zh": "你有太多局，请点这来退出已结束的",
            "el": "Έχετε πολλά ενεργά παιχνίδια. Κάντε κλίκ εδώ για να κλείσετε κάποια από τα παιχνίδια που έχουν τελειώσει.",
            "fr": "Vous avez trop de parties. Appuyez ici pour quitter les parties terminées",
            "hi": "आपके पास अधिकतम खेल है। क्लिक करें कुछ खेलो को रद्द करने के लिए। ",
            "es": "Tienes demasiados juegos abiertos. Haz click para cerrar juegos terminados."
        },
        "IN_APP_NOTIFICATION_YOU_WERE_BLOCKED": {
            "en": "You were blocked and therefore you can't send chat or start a new match with the blocking player.",
            "iw": "מישהו חסם אותך ואינך יכול לשלוח צט",
            "pt": "Você foi bloqueado e, portanto, você não pode enviar conversar ou iniciar uma nova partida com o jogador de bloqueio.",
            "zh": "你被屏蔽了，所以你不能聊天或者匹配屏蔽了的玩家",
            "el": "Μπορείτε είχαν μπλοκαριστεί και ως εκ τούτου δεν μπορείτε να στείλετε συνομιλήσετε ή να ξεκινήσετε μια νέα αγώνα με τον παίκτη αποκλεισμού.",
            "fr": "Vous avez été bloqué, vous ne pouvez donc plus envoyer de messages ou commencer une nouvelle partie avec le joueur qui vous a bloqué",
            "hi": "आपको ब्लोक कर दिया गया है , इसलिए चैट सन्देश भेजना या नया खेल खेलना ब्लॉकिंग खिलाड़ी के साथ असंभव है। ",
            "es": "You were blocked and therefore you can't send chat or start a new match with the blocking player."
        },
        "MAIN_FEEDBACK_AND_BUGS_TITLE": {
            "en": "Feedback",
            "iw": "משוב",
            "pt": "Comentários e erros",
            "zh": "反馈",
            "el": "Ανατροφοδότηση",
            "fr": "retours",
            "hi": "सुझाव भेजें ",
            "es": "Feedback"
        },
        "MAIN_INVITE_FRIENDS_TITLE": {
            "en": "Facebook friends",
            "iw": "הזמן חבר למשחק",
            "pt": "Convide os seus amigos para jogar",
            "zh": "邀请朋友来玩",
            "el": "Καλέστε τους φίλους σας για ένα παιχνίδι.",
            "fr": "Amis Facebook",
            "hi": "फेसबुक के दोस्त ",
            "es": "Amigos de Facebook"
        },
        "MAIN_LOG_IN_WITH_FACEBOOK": {
            "en": "Log in with Facebook",
            "iw": "כנס עם פייסבוק",
            "pt": "Entrar com Facebook",
            "zh": "登陆脸书",
            "el": "Συνδεθείτε με λογαριασμό Facebook.",
            "fr": "Se connecter via facebook",
            "hi": "फ़ेसबुक लॉगिन करें",
            "es": "Iniciar sesion con Facebook"
        },
        "MAIN_LOG_OUT_FROM_FACEBOOK": {
            "en": "Log out from Facebook",
            "iw": "צא מפייסבוק",
            "pt": "Sair do Facebook",
            "zh": "退出脸书",
            "el": "Αποσυνδεθείτε από το Facebook.",
            "fr": "Se déconnecter de facebook",
            "hi": "फेसबुक से लॉग आउट करें",
            "es": "Cerrar sesion de Facebook"
        },
        "MAIN_MATCH_GROUP_ENDED_MATCHES": {
            "en": "Ended Games",
            "iw": "משחקים שנגמרו",
            "pt": "Partidas terminadas",
            "zh": "已结束游戏",
            "el": "Ολοκληρωμένα παιχνίδια",
            "fr": "Parties terminées",
            "hi": "समाप्त खेल ",
            "es": "Juegos terminados"
        },
        "MAIN_MATCH_GROUP_OPPONENT_TURN_MATCHES": {
            "en": "Opponent turn",
            "iw": "תור היריב",
            "pt": "por sua vez, oponente",
            "zh": "对方回合",
            "el": "τη σειρά του αντιπάλου",
            "fr": "tour de votre adversaire",
            "hi": "विपक्षी की बरी ",
            "es": "Turno del oponente"
        },
        "MAIN_MATCH_GROUP_YOUR_TURN_MATCHES": {
            "en": "Your turn",
            "iw": "תורך",
            "pt": "Sua vez",
            "zh": "你的回合",
            "el": "Σειρά σου",
            "fr": "votre tour",
            "hi": "आपकी बरी ",
            "es": "Tu turno"
        },
        "MAIN_MATCH_LAST_MOVE_ON": {
            "en": "Last move:",
            "iw": "מסע אחרון:",
            "pt": "Última jogada",
            "zh": "最后一步",
            "el": "Τελευταία κίνηση:",
            "fr": "Dernière action",
            "hi": "पिछला कदम:",
            "es": "Ultima jugada:"
        },
        "MAIN_MATCH_STARTED_ON": {
            "en": "Started:",
            "iw": "המשחק התחיל:",
            "pt": "Começo",
            "zh": "开始",
            "el": "Ξεκίνησε:",
            "fr": "Commencé",
            "hi": "आरंभ:",
            "es": "Empezo:"
        },
        "MAIN_NEW_AUTO_MATCH_EXPLANATION": {
            "en": "Let us find an opponent for you automatically.",
            "iw": "שחק נגד יריב אקראי",
            "pt": "Jogar contra um oponente escolhido ao acaso",
            "zh": "随机选择对手",
            "el": "Παίξτε εναντίον τυχαίων αντιπάλων.",
            "fr": "Nous allons vous trouver un adversaire automatiquement",
            "hi": "आपके लिए हमे ऑटोमेटिकली विरोधी ढूंढने दें। ",
            "es": "Encontrar un oponente automaticamente"
        },
        "MAIN_NEW_AUTO_MATCH_TITLE": {
            "en": "Random opponent",
            "iw": "יריב אקראי",
            "pt": "Novo jogo contra um oponente escolhido ao acaso",
            "zh": "自动找对手的新一局",
            "el": "Νέο παιχνίδι εναντίον τυχαίου αντιπάλου",
            "fr": "Adversaire aléatoire",
            "hi": "यादृच्छ (रैंडम) विरोधी ",
            "es": "Oponente aleatorio"
        },
        "MAIN_NEW_MATCH_GROUP_TITLE": {
            "en": "New game",
            "iw": "משחק חדש",
            "pt": "Novo jogo",
            "zh": "新一局",
            "el": "Νέο παιχνίδι",
            "fr": "nouvelle partie",
            "hi": "नया खेल",
            "es": "Nuevo juego"
        },
        "MAIN_PASS_AND_PLAY_EXPLANATION": {
            "en": "Players will use the same phone/tablet.",
            "iw": "כמה שחקנים ישחקו עם אותו טלפון",
            "pt": "Todos os jogadores vão jogar no mesmo telefone/tablet.",
            "zh": "在一台机器上玩",
            "el": "Πολλαπλοί παίχτες στην ίδια συσκευή.",
            "fr": "Les joueurs utiliseront le même téléphone/tablette",
            "hi": "सरे खिलाड़ी एक ही फोन / टेबलेट पर खेलेंगे। ",
            "es": "Los jugadores usaran el mismo telefono/tablet"
        },
        "MAIN_PASS_AND_PLAY_TITLE": {
            "en": "Play together on one device",
            "iw": "שחקו ביחד על מכשיר אחד",
            "pt": "Mais de um jogador no mesmo telefone",
            "zh": "在一台机器上玩",
            "el": "Παίξτε μαζί στην ίδια συσκευή.",
            "fr": "Jouer ensemble sur le même appareil",
            "hi": "एक ही फोन / टेबलेट पर खेलें । ",
            "es": "Jugar contos en un dispositivo"
        },
        "MAIN_PRACTICE_EXPLANATION": {
            "en": "Play against the computer.",
            "iw": "שחק נגד המחשב",
            "pt": "Jogar contra o computador",
            "zh": "和电脑玩",
            "el": "Παίξτε εναντίον του υπολογιστή.",
            "fr": "Joueur contre l'ordinateur",
            "hi": "कंप्यूटर के खिलाफ खेलें। ",
            "es": "Jugar contra la computadora"
        },
        "MAIN_PRACTICE_TITLE": {
            "en": "Practice",
            "iw": "התאמן",
            "pt": "Praticar",
            "zh": "练习",
            "el": "Εξάσκηση.",
            "fr": "Entraînement",
            "hi": "अभ्यास",
            "es": "Practicar"
        },
        "MAIN_SHARE_INVITE_LINK_TITLE": {
            "en": "Share an invite link",
            "iw": "שתף הזמנה למשחק",
            "pt": "Compartilhar um link de convite com os seus amigos",
            "zh": "分享链接给你的好友",
            "el": "Μοιραστείτε ένα σύνδεσμο πρόσκλησης με τους φίλους σας",
            "fr": "partager une invitation avec vos amis",
            "hi": "खेल आमंत्रण का लिंक अपने दोस्तों को भेजें ",
            "es": "Compartir un link de invitacion con tus amigos."
        },
        "MATCH_DELETE": {
            "en": "Delete game",
            "iw": "מחק את המשחק",
            "pt": "excluir jogo",
            "zh": "删除当前游戏",
            "el": "Διαγραφή παιχνίδι",
            "fr": "effacer la partie",
            "hi": "खेल ख़ारिज करें ",
            "es": "Borrar juego"
        },
        "MATCH_LOAD_NEXT": {
            "en": "Load next game",
            "iw": "טען את המשחק הבא",
            "pt": "Carga próximo jogo",
            "zh": "载入下场游戏",
            "el": "Φορτίο επόμενο παιχνίδι",
            "fr": "charger la partie suivante",
            "hi": "अगला खेल लोड करें ",
            "es": "Cargar siguiente juego"
        },
        "MATCH_NEW_GAME": {
            "en": "New game",
            "iw": "משחק חדש",
            "pt": "Novo jogo",
            "zh": "新游戏",
            "el": "Νέο παιχνίδι",
            "fr": "nouvelle partie",
            "hi": "नया खेल",
            "es": "Nueva partida"
        },
        "SURE_YOU_WANT_TO_RESIGN": {
            "en": "Are you sure you want to resign and delete your game with {{OPPONENTS_NAME}}?",
            "iw": "האם אתה בטוח שאתה רוצה למחוק את המשחק עם {{OPPONENTS_NAME}}?",
            "pt": "Tem certeza de que quer renunciar e apagar seu jogo com {{OPPONENTS_NAME}}?",
            "zh": "你确定要辞职，并与{{OPPONENTS_NAME}}删除你的游戏？",
            "el": "Είστε σίγουροι ότι θέλετε να παραιτηθεί και να διαγράψετε το παιχνίδι σας με {{OPPONENTS_NAME}};",
            "fr": "Etes-vous sûr de vouloir démissionner et supprimer votre jeu avec {{OPPONENTS_NAME}}?",
            "hi": "आप इस्तीफा देने और {{OPPONENTS_NAME}} के साथ अपने खेल को हटाना चाहते हैं आप सुनिश्चित हैं?",
            "es": "¿Está seguro de que desea renunciar y eliminar su juego con {{OPPONENTS_NAME}}?"
        },
        "MATCH_RESIGN_AND_DELETE": {
            "en": "Resign",
            "iw": "בטל משחק",
            "pt": "Demitir-se e excluir jogo",
            "zh": "重新分配并删除游戏",
            "el": "Παραιτηθεί και να διαγράψετε το παιχνίδι",
            "fr": "abandonner et effacer la partie",
            "hi": "खेल छोड़के ख़ारिज करें ",
            "es": "Renunciar y borrar juego"
        },
        "MATCH_SHARE_PRINTSCREEN": {
            "en": "Share printscreen",
            "iw": "שתף צילום מסך",
            "pt": "Compartilhar printscreen",
            "zh": "分享截屏",
            "el": "Μοιραστείτε PrintScreen",
            "fr": "partager l'écran",
            "hi": "प्रिंटस्क्रीन बाँटे",
            "es": "Compartir pantalla"
        },
        "REMATCH": {
            "en": "Rematch",
            "iw": "משחק חוזר",
            "pt": "revanche",
            "zh": "复赛",
            "el": "ρεβάνς",
            "fr": "rematch",
            "hi": "दोबारा मैच",
            "es": "Revancha"
        },
        "MATCH_START_REMATCH": {
            "en": "Rematch with {{OPPONENTS_NAME}}",
            "iw": "התחל משחק חדש עם {{OPPONENTS_NAME}}",
            "pt": "Revanche: começar um novo jogo com {{OPPONENTS_NAME}}",
            "zh": "新比赛：与{{OPPONENTS_NAME}}开始新游戏",
            "el": "Ρεβάνς: ξεκινήσετε ένα νέο παιχνίδι με {{OPPONENTS_NAME}}",
            "fr": "revanche: commencer une nouvelle partie avec {{OPPONENTS_NAME}}",
            "hi": "दोबारा खेल खेलें: {{OPPONENTS_NAME}} के साथ ",
            "es": "Revancha: nuevo juego con {{OPPONENTS_NAME}}"
        },
        "MATCH_STATUS_CANCELED": {
            "en": "Game canceled",
            "iw": "משחק בוטל",
            "pt": "Jogo cancelado",
            "zh": "游戏取消",
            "el": "Το παιχνίδι ακυρώθηκε",
            "fr": "partie annulée",
            "hi": "खेल रद्द",
            "es": "Juego cancelado"
        },
        "MATCH_STATUS_COMPUTER'S_TURN": {
            "en": "Computer's turn",
            "iw": "תור המחשב",
            "pt": "Turno do computador",
            "zh": "该电脑下了",
            "el": "Σειρά του υπολογιστή",
            "fr": "tour de l'ordinateur",
            "hi": "कंप्यूटर की बारी",
            "es": "Turno de la computadoa"
        },
        "MATCH_STATUS_COMPUTER_WON": {
            "en": "Computer won",
            "iw": "המחשב ניצח",
            "pt": "O computador ganhou",
            "zh": "电脑赢了",
            "el": "Ο υπολογιστής κέρδισε",
            "fr": "l'ordinateur a gagné",
            "hi": "कम्प्यूटर जीता",
            "es": "Computadora ganó"
        },
        "MATCH_STATUS_ENDED_IN_TIE": {
            "en": "Tie",
            "iw": "תיקו",
            "pt": "Empate",
            "zh": "平局",
            "el": "Ισοπαλία",
            "fr": "match nul",
            "hi": "खेल टाई",
            "es": "Empate"
        },
        "MATCH_STATUS_OPPONENT'S_TURN": {
            "en": "Opponent's turn",
            "iw": "תור היריב",
            "pt": "Vez do oponente",
            "zh": "对方回合",
            "el": "Σειρά του αντιπάλου",
            "fr": "tour de votre adversaire",
            "hi": "विपक्षी की बारी ",
            "es": "Turno del oponente"
        },
        "MATCH_STATUS_OPPONENT'S_TURN_WITH_NAME": {
            "en": "{{OPPONENT_NAME}}'s turn",
            "iw": "תור {{OPPONENT_NAME}}",
            "pt": "Vez do(a) {{OPPONENT_NAME}}",
            "zh": "{{OPPONENT_NAME}}回合",
            "el": "Σειρά του/της {{OPPONENT_NAME}}",
            "fr": "tour de {{OPPONENT_NAME}}",
            "hi": "{{OPPONENT_NAME}} की बारी",
            "es": "Turno de {{OPPONENT_NAME}}"
        },
        "MATCH_STATUS_OPPONENT_WON": {
            "en": "Opponent won",
            "iw": "היריב נצח",
            "pt": "O seu oponente ganhou",
            "zh": "对方赢了",
            "el": "Ο αντίπαλος κέρδισε",
            "fr": "votre adversaire a gagné",
            "hi": "विपक्षी जीता",
            "es": "Oponente ganó"
        },
        "MATCH_STATUS_OPPONENT_WON_WITH_NAME": {
            "en": "{{OPPONENT_NAME}} won",
            "iw": "{{OPPONENT_NAME}} נצח",
            "pt": "{{OPPONENT_NAME}} ganhou",
            "zh": "{{OPPONENT_NAME}}贏了",
            "el": "Ο/Η {{OPPONENT_NAME}} κέρδισε",
            "fr": "{{OPPONENT_NAME}} a gagné",
            "hi": "{{OPPONENT_NAME}} जीता",
            "es": "{{OPPONENT_NAME}} ganó"
        },
        "MATCH_STATUS_PASS_AND_PLAY_PLAYER_NUM_WON": {
            "en": "Player {{PLAYER_NUMBER}} won",
            "iw": "שחקן  {{PLAYER_NUMBER}} נצח",
            "pt": "Jogador(a) {{PLAYER_NUMBER}} ganhou",
            "zh": "{{PLAYER_NUMBER}}赢了",
            "el": "Ο παίχτης με αριθμό Player {{PLAYER_NUMBER}} κέρδισε",
            "fr": "le joueur {{PLAYER_NUMBER}} a gagné",
            "hi": "खिलाड़ी {{PLAYER_NUMBER}} जीता",
            "es": "Player {{PLAYER_NUMBER}} ganó"
        },
        "MATCH_STATUS_PASS_AND_PLAY_TURN_OF_PLAYER_NUM": {
            "en": "Turn of player {{PLAYER_NUMBER}}",
            "iw": "תור שחקן {{PLAYER_NUMBER}}",
            "pt": "Vez do(a) jogador(a) {{PLAYER_NUMBER}}",
            "zh": "{{PLAYER_NUMBER}}回合",
            "el": "Σειρά του παίχτη {{PLAYER_NUMBER}}",
            "fr": "tour du joueur {{PLAYER_NUMBER}}",
            "hi": "खिलाड़ी {{PLAYER_NUMBER}} की बारी",
            "es": "Turno de jugador no. {{PLAYER_NUMBER}}"
        },
        "MATCH_STATUS_YOUR_TURN": {
            "en": "Your turn",
            "iw": "תורך",
            "pt": "Sua vez",
            "zh": "该你下了",
            "el": "Είναι η σειρά σας",
            "fr": "votre tour",
            "hi": "आपकी बारी",
            "es": "Tu turno"
        },
        "MATCH_STATUS_YOU_WON": {
            "en": "You won!",
            "iw": "נצחת!",
            "pt": "Você ganhou!",
            "zh": "你赢了",
            "el": "Είστε ο νικητής!",
            "fr": "vous avez gagné!",
            "hi": "आप जीते!",
            "es": "Ganaste!"
        },
        "MODAL_BUTTON_BLOCK": {
            "en": "Block player",
            "iw": "חסום את השחקן",
            "pt": "Bloco jogador de chats ou convites de envio",
            "zh": "阻止用户发送消息或邀请",
            "el": "παίκτης τετράγωνο από την αποστολή συνομιλίες ή προσκλήσεις",
            "fr": "empêcher le joueur de vous envoyer des messages et des invitations",
            "hi": "प्रतियोगी को चैट और आमंत्रण भेजनी से रोकें ",
            "es": "Bloquear jugador de mandar invitaciones o chats"
        },
        "MODAL_BUTTON_UNBLOCK": {
            "en": "Unblock player",
            "iw": "בטל חסימה",
            "pt": "Desbloquear jogador: permitir chats ou convidam",
            "zh": "解除阻止：允许发送消息或邀请",
            "el": "Ξεμπλοκάρετε παίκτη: επιτρέπουν συνομιλίες ή προσκλήσεις",
            "fr": "débloquer le joueur: permettre les messages et les invitations",
            "hi": "प्रतियोगी को अनब्लॉक करें : चैट सन्देश और आमंत्रण भेजने दें। ",
            "es": "Desbloquear jugador: permitir chats e invitaciones"
        },
        "MODAL_BUTTON_CLOSE": {
            "en": "Close",
            "iw": "סגור",
            "pt": "Fechar",
            "zh": "关闭",
            "el": "Κλείσιμο",
            "fr": "fermer",
            "hi": "बंद करे",
            "es": "Cerrar"
        },
        "MODAL_BUTTON_INVITE_TO_NEW_MATCH": {
            "en": "New game",
            "iw": "משחק חדש",
            "pt": "Novo jogo",
            "zh": "新游戏",
            "el": "Νέο παιχνίδι",
            "fr": "nouvelle partie",
            "hi": "नया खेल",
            "es": "Juego nuevo"
        },
        "MODAL_BUTTON_SAVE": {
            "en": "Save",
            "iw": "שמור",
            "pt": "Salvar",
            "zh": "保存",
            "el": "Αποθήκευση",
            "fr": "sauvegarder",
            "hi": "सेव करें ",
            "es": "Salvar"
        },
        "MODAL_BUTTON_SEND_CHAT": {
            "en": "Send",
            "iw": "שלח",
            "pt": "Enviar",
            "zh": "发送",
            "el": "Στέλνω",
            "fr": "envoyer",
            "hi": "भेजें",
            "es": "Mandar"
        },
        "MODAL_BUTTON_SEND_FEEDBACK_AND_BUGS": {
            "en": "Send feedback",
            "iw": "משוב",
            "pt": "Enviar comentário",
            "zh": "发送反馈",
            "el": "Στείλτε την άποψη σας",
            "fr": "envoyer vos retours",
            "hi": "सुझाव भेजें ",
            "es": "Mandar feedback"
        },
        "MODAL_FEEDBACK_AND_BUGS_PLACEHOLDER_TEXT": {
            "en": "Enter your feedback here, and add your email if you want a reply :)",
            "iw": "משוב",
            "pt": "Entre aqui o seu comentário e o seu email se você quiser que nós lhe respondemos",
            "zh": "在这里输入你的反馈，如果你想要收到回复那么请填写你的电子邮件",
            "el": "Εισάγεται την άποψη σας εδώ και άμα περιμένετε κάποιου είδους απάντηση εισάγεται την ηλεκτρονική σαςδιεύθυνση",
            "fr": "écrivez vos retours ici, et ajoutez votre adresse email si vous voulez une réponse :)",
            "hi": "यहाँ अपने सुझाव भरें, यदी आप जवाब चाहते हैं, तो आपना ईमेल दर्ज  करें :)",
            "es": "Escribe tu feedback aqui, incluye tu e-mail si quieres una respuesta :)"
        },
        "MODAL_TITLE_FEEDBACK_AND_BUGS": {
            "en": "Feedback",
            "iw": "משוב",
            "pt": "Comentários",
            "zh": "反馈",
            "el": "Απόψεις και σφάλματα.",
            "fr": "retours",
            "hi": "सुझाव",
            "es": "Feedback"
        },
        "MODAL_TITLE_MATCH_OVER": {
            "en": "Game over",
            "iw": "משחק נגמר",
            "pt": "Fim do jogo",
            "zh": "游戏结束",
            "el": "Λήξη παιχνιδιού",
            "fr": "partie terminée",
            "hi": "खेल खत्म",
            "es": "Juego terminado"
        },
        "MODAL_TITLE_USER_INFO": {
            "en": "Your user info",
            "iw": "פרטי משתמש",
            "pt": "Suas Informações",
            "zh": "你的用户信息",
            "el": "Πληροφορίες χρήστη",
            "fr": "vos infos",
            "hi": "आपकी जानकारी ",
            "es": "Tu informacion de perfil"
        },
        "MODAL_USER_INFO_NAME": {
            "en": "Name",
            "iw": "שם",
            "pt": "Nome",
            "zh": "名称",
            "el": "Όνομα",
            "fr": "nom",
            "hi": "नाम",
            "es": "Nombre"
        },
        "MODAL_USER_INFO_USERNAME": {
            "en": "User name",
            "iw": "שם משתמש",
            "pt": "Nome de usuário",
            "zh": "用户名称",
            "el": "Όνομα χρήστη",
            "fr": "pseudonyme",
            "hi": "उपयोगकर्ता नाम",
            "es": "Nombre de usuario"
        },
        "MODAL_USER_INFO_USERNAME_WAS_TAKEN": {
            "en": "This user name was already selected by someone else. Please choose another user name.",
            "iw": "שם משתמש הזה כבר נבחר על ידי מישהו אחר. בחר שם משתמש אחר בבקשה",
            "pt": "Esse nome de usuário já foi escolhido por uma outra pessoa. Por favor, escolha um novo nome de usuário.",
            "zh": "这个用户已经被其他用户选择了。请选择另一个用户",
            "el": "Αυτό το όνομα χρήστη έχει ήδη επιλεγεί από κάποιον άλλο. Παρακαλώ επιλέξτε ένα άλλο όνομα χρήστη.",
            "fr": "ce pseudonyme est déjà utilisé par quelqu'un d'autre. Veuillez sélectionner un autre pseudonyme",
            "hi": "यह उपयोगकर्ता नाम पहले से ही किसी और के द्वारा चुना गया है । एक अन्य उपयोगकर्ता के नाम का चयन करें।",
            "es": "Este nombre de usuario no esta disponible. Por favor escoge otro nombre."
        },
        "PUSH_NOTIFICATION_CHAT_MESSAGE_NOTIFICATION_TITLE": {
            "en": "Message from {{OPPONENT_NAME}}:",
            "iw": "הודעה מ {{OPPONENT_NAME}}",
            "pt": "Mensagem de {{OPPONENT_NAME}}:",
            "zh": "来自{{OPPONENT_NAME}}的消息",
            "el": "Μήνυμα από {{OPPONENT_NAME}}:",
            "fr": "message de {{OPPONENT_NAME}}:",
            "hi": "{{OPPONENT_NAME}} से संदेश",
            "es": "Mensaje de {{OPPONENT_NAME}}:"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_TIE_NOTIFICATION_BODY": {
            "en": "Game with {{OPPONENT_NAME}} ended in a tie",
            "iw": "{{OPPONENT_NAME}} עשה מסע אחרון",
            "pt": "Jogo contra {{OPPONENT_NAME}} terminou em empate",
            "zh": "与{{OPPONENT_NAME}}的一局以平局结束",
            "el": "Ο χρήστης  {{OPPONENT_NAME}} έκανε την τελευταία κίνηση",
            "fr": "la partie avec {{OPPONENT_NAME}} a fini par un match nul",
            "hi": "{{OPPONENT_NAME}} के साथ खेल एक टाई में समाप्त हो गया",
            "es": "Juego con {{OPPONENT_NAME}} termino empatado"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_TIE_NOTIFICATION_TITLE": {
            "en": "Game ended in a tie",
            "iw": "משחק נגמר בתיקו",
            "pt": "Jogo terminou em empate",
            "zh": "平局",
            "el": "Το παιχνίδι έληξε σε ισοπαλία",
            "fr": "la partie a fini par un match nul",
            "hi": "खेल एक टाई में समाप्त हो गया",
            "es": "Juego termino empatado"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_YOU_LOST_NOTIFICATION_BODY": {
            "en": "{{OPPONENT_NAME}} won",
            "iw": "{{OPPONENT_NAME}} נצח",
            "pt": "{{OPPONENT_NAME}} ganhou",
            "zh": "{{OPPONENT_NAME}}贏了",
            "el": "Ο/Η \t{{OPPONENT_NAME}} κέρδισε",
            "fr": "{{OPPONENT_NAME}} a gagné",
            "hi": "{{OPPONENT_NAME}} जीता",
            "es": "{{OPPONENT_NAME}} ganó"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_YOU_LOST_NOTIFICATION_TITLE": {
            "en": "You lost",
            "iw": "הפסדת",
            "pt": "Você perdeu",
            "zh": "你输了",
            "el": "Χάσατε",
            "fr": "vous avez perdu",
            "hi": "आप हार गए",
            "es": "Perdiste"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_YOU_WON_NOTIFICATION_BODY": {
            "en": "You won against {{OPPONENT_NAME}}!",
            "iw": "{{OPPONENT_NAME}} הפסיד",
            "pt": "Você ganhou contra {{OPPONENT_NAME}}!",
            "zh": "你贏了{{OPPONENT_NAME}}!",
            "el": "Ο/Η \t{{OPPONENT_NAME}} έχασε",
            "fr": "vous avez gagné contre {{OPPONENT_NAME}}!",
            "hi": "आप {{OPPONENT_NAME}} के खिलाफ जीते !",
            "es": "Ganaste contra {{OPPONENT_NAME}}!"
        },
        "PUSH_NOTIFICATION_MATCH_ENDED_YOU_WON_NOTIFICATION_TITLE": {
            "en": "You won",
            "iw": "נצחת",
            "pt": "Você ganhou",
            "zh": "你赢了",
            "el": "Είστε ο νικητής",
            "fr": "vous avez gagné",
            "hi": "आप जीते",
            "es": "Ganaste"
        },
        "PUSH_NOTIFICATION_NEW_MATCH_NOTIFICATION_BODY": {
            "en": "{{OPPONENT_NAME}} invited you to play",
            "iw": "{{OPPONENT_NAME}} הזמין אותך למשחק",
            "pt": "{{OPPONENT_NAME}} te convidou para jogar",
            "zh": "{{OPPONENT_NAME}}邀請你来玩",
            "el": "Ο/Η \t{{OPPONENT_NAME}} σας προσκάλεσε να παίξετε",
            "fr": "{{OPPONENT_NAME}} vous a invité à jouer",
            "hi": "{{OPPONENT_NAME}} खेलने के लिए आपको आमंत्रित किया",
            "es": "{{OPPONENT_NAME}} te invito a jugar"
        },
        "PUSH_NOTIFICATION_NEW_MATCH_NOTIFICATION_TITLE": {
            "en": "New game",
            "iw": "משחק חדש",
            "pt": "Novo Jogo",
            "zh": "新一局",
            "el": "Νέο παιχνίδι",
            "fr": "nouvelle partie",
            "hi": "नया खेल",
            "es": "Nuevo juego"
        },
        "PUSH_NOTIFICATION_OPPONENT_QUIT_NOTIFICATION_BODY": {
            "en": "{{OPPONENT_NAME}} quit",
            "iw": "{{OPPONENT_NAME}} עזב",
            "pt": "{{OPPONENT_NAME}} saiu da partida",
            "zh": "{{OPPONENT_NAME}}退出了",
            "el": "Ο/Η \t{{OPPONENT_NAME}} παραιτήθηκε",
            "fr": "{{OPPONENT_NAME}} a quitté la partie",
            "hi": "{{OPPONENT_NAME}} खेल छोड़ चुके ",
            "es": "{{OPPONENT_NAME}} renunció"
        },
        "PUSH_NOTIFICATION_OPPONENT_QUIT_NOTIFICATION_TITLE": {
            "en": "You won",
            "iw": "נצחת",
            "pt": "Você ganhou",
            "zh": "你赢了",
            "el": "Είστε ο νικητής",
            "fr": "vous avez gagné",
            "hi": "आप जीते",
            "es": "Ganaste"
        },
        "PUSH_NOTIFICATION_YOUR_TURN_NOTIFICATION_BODY": {
            "en": "{{OPPONENT_NAME}} just played",
            "iw": "{{OPPONENT_NAME}} שחק",
            "pt": "{{OPPONENT_NAME}} acabou de jogar",
            "zh": "{{OPPONENT_NAME}}刚刚下了一步",
            "el": "Ο/Η \t{{OPPONENT_NAME}} εκτέλεσε μια κίνηση",
            "fr": "{{OPPONENT_NAME}} vient de jouer",
            "hi": "{{OPPONENT_NAME}}  हाल ही में खेले",
            "es": "{{OPPONENT_NAME}} hizo una jugada"
        },
        "PUSH_NOTIFICATION_YOUR_TURN_NOTIFICATION_TITLE": {
            "en": "Your turn",
            "iw": "תורך",
            "pt": "Sua vez",
            "zh": "该你下了",
            "el": "Είναι η σειρά σας",
            "fr": "votre tour",
            "hi": "आपकी बारी",
            "es": "Tu turno"
        },
        "SHARE_INTENT_GAME_INVITE_MESSAGE": {
            "en": "I want to play {{GAME_NAME}} with you!",
            "iw": "אני רוצה לשחק {{GAME_NAME}} איתך!",
            "pt": "Eu quero jogar {{GAME_NAME}} com você!",
            "zh": "我想和你一起玩{{GAME_NAME}}!!",
            "el": "Θέλω να παίξω {{GAME_NAME}} μαζί σας!",
            "fr": "je veux jouer {{GAME_NAME}} avec toi!",
            "hi": "मैं तुम्हारे साथ {{GAME_NAME}} खेलना चाहता हूँ!",
            "es": "Quiero jugar {{GAME_NAME}} contigo!"
        },
        "SHARE_INTENT_GAME_INVITE_SUBJECT": {
            "en": "Invitation to play {{GAME_NAME}}!",
            "iw": "הזמנה למשחק {{GAME_NAME}}!",
            "pt": "Convite para jogar {{GAME_NAME}}!",
            "zh": "邀請你来玩{{GAME_NAME}}!!",
            "el": "Πρόσκληση να παίξει {{GAME_NAME}}!",
            "fr": "invitation à jouer {{GAME_NAME}}!",
            "hi": "{{GAME_NAME}} खेलने के लिए निमंत्रण !",
            "es": "Invitacion para jugar {{GAME_NAME}}!"
        },
        "SHARE_INTENT_WON_GAME_MESSAGE": {
            "en": "I won a game of {{GAME_NAME}}! Let's see if you can win against me!",
            "iw": "נצחתי במשחק {{GAME_NAME}}! בוא נראה אם אתה יכול לנצח אותי!",
            "pt": "Eu ganhei uma partida de {{GAME_NAME}}! Vamos ver se você consegue ganhar contra mim",
            "zh": "我贏了一局{{GAME_NAME}}! 你赢得了我吗?",
            "el": "Κέρδισα ένα παιχνίδι του {{GAME_NAME}}! Ας δούμε αν μπορείτε να κερδίσετε εναντίον μου!",
            "fr": "j'ai gagné une partie de {{GAME_NAME}}! Qui peut gagner contre moi?",
            "hi": "मैं {{GAME_NAME}} का एक खेल जीता हूँ ! देखते है की तुम मेरे खिलाफ जीत सकते हो !",
            "es": "Gane un juego de {{GAME_NAME}}! Vamos a ver si puedes ganar contra mi!"
        },
        "SHARE_INTENT_WON_GAME_SUBJECT": {
            "en": "I won a game of {{GAME_NAME}}!",
            "iw": "נצחתי במשחק {{GAME_NAME}}!",
            "pt": "Eu ganhei uma partida de {{GAME_NAME}}!",
            "zh": "我贏了一局{{GAME_NAME}}!",
            "el": "Κέρδισα ένα παιχνίδι του {{GAME_NAME}}!",
            "fr": "j'ai gagné une partie de {{GAME_NAME}}!",
            "hi": "मैं {{GAME_NAME}} का एक खेल जीता हूँ !",
            "es": "Gane un partido de {{GAME_NAME}}!"
        },
        "SHARE": {
            "en": "Share",
            "iw": "שתף",
            "pt": "Compartilhar",
            "zh": "分享",
            "el": "Μερίδιο",
            "fr": "Partager",
            "hi": "शेयर",
            "es": "Compartir"
        },
        "SHARE_INTENT_WON_GAME_TAKE_SCREENSHOT": {
            "en": "Share a screenshot of your victory",
            "iw": "שתף צילום מסך של הנצחון שלך",
            "pt": "Compartilhe a imagem da sua vitória",
            "zh": "分享你的胜利画面",
            "el": "Μοιραστείτε ένα screenshot της νίκης σας",
            "fr": "partager une capture d'écran de votre victoire",
            "hi": "अपने जीत का स्क्रीनशॉट निकालके बांटे ",
            "es": "Comparte la pantalla de tu victoria"
        },
        "SHARE_INTENT_WON_GAME_TAKE_SCREENSHOT_MAY_TAKE_TIME": {
            "en": "Taking a screenshot may take a couple of seconds",
            "iw": "צילום מסך יכול לקחת כמה שניות",
            "pt": "Tirar a foto da sua tela pode demorar alguns segundos",
            "zh": "屏幕截图也许需要几秒钟",
            "el": "Λαμβάνοντας ένα στιγμιότυπο μπορεί να πάρει μια-δυο δευτερόλεπτα",
            "fr": "prendre une capture d'écran peut prendre plusieurs secondes",
            "hi": "एक स्क्रीनशॉट लेने में कुछ सेकंड लग सकते हैं",
            "es": "Tomar la captura de pantalla puede tomar unos momentos."
        },
        "TO_MAIN_MENU": {
            "en": "Go to main menu",
            "iw": "חזור לתפריט הראשי",
            "pt": "Ir para o menu principal",
            "zh": "前往主菜单",
            "el": "Πηγαίνετε στο κύριο μενού",
            "fr": "aller au menu principal",
            "hi": "मैन मेन्यू पर जाए ",
            "es": "Ir a menu principal"
        },
        "UNKNOWN_PLAYER_NAME": {
            "en": "Unknown",
            "iw": "מישהו",
            "pt": "Desconhecido",
            "zh": "未知",
            "el": "Άγνωστο",
            "fr": "inconnu",
            "hi": "अज्ञात",
            "es": "Desconocido"
        }
    };
    var w = window;
    if (w.platformTranslations) {
        console.error("platformTranslations is already defined!");
    }
    w.platformTranslations = platformTranslations;
})();
//# sourceMappingURL=app-l10n.js.map