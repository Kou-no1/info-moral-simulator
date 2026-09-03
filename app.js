const scenarios = [
  {
    id:"flame", icon:"🔥", label:"シナリオ 1", title:"その投稿、広がったら？",
    short:"友達との写真や軽い一言が、思わぬ形で広がる場面を体験します。",
    tags:["炎上","スクリーンショット","他人への配慮"], core:true,
    intro:"放課後、友達と撮ったおもしろ写真。勢いでSNSに載せようとしています。", appName:"PicTalk",
    resultTitle:"投稿は「送った瞬間」で終わらない",
    resultSummary:"SNSでは、削除してもスクリーンショットや転載が残ることがあります。自分だけでなく、一緒に写っている人の気持ちも考える必要があります。",
    reflections:["投稿する前に、誰の許可が必要だった？","削除したあとも残るものには何がある？","自分が写される側だったら、どう感じる？"],
    steps:[
      {type:"post-compose",prompt:"友達3人で撮った変顔写真。どうする？",context:"写真には友達の顔と、制服の校章が少し写っています。",content:{user:"あなた",text:"今日めっちゃ笑った😂 最高すぎ",image:"放課後の変顔写真（制服の一部が写っている）"},
       choices:[
        {text:"そのまま全体公開で投稿する",delta:{privacy:28,care:24,verify:2,balance:4},result:"数分後、知らない人からも反応がつき始めました。"},
        {text:"友達だけに公開する",delta:{privacy:14,care:12,verify:2,balance:2},result:"公開範囲は狭まりましたが、友達本人の確認はまだ取っていません。"},
        {text:"投稿する前に、写っている友達に確認する",delta:{privacy:3,care:2,verify:1,balance:1},result:"友達の1人が『これは載せないでほしい』と答えました。"}]},
      {type:"feed",prompt:"投稿後、クラスメイトがからかうコメントをしました。どう返す？",context:"コメントには、写真の友達を笑うような言葉が入っています。",content:{comments:["Aさん：この顔やばすぎ笑","Bさん：保存したwww","Cさん：これ他のグループにも送っていい？"]},
       choices:[
        {text:"ノリに合わせて、さらにいじる",delta:{privacy:10,care:28,verify:2,balance:3},result:"やり取りが盛り上がり、写真の本人が嫌そうな反応を見せ始めました。"},
        {text:"反応せず、そのままにする",delta:{privacy:7,care:12,verify:2,balance:1},result:"からかうコメントだけが残り、別の人がさらに返信しました。"},
        {text:"からかうのをやめるよう伝え、投稿も見直す",delta:{privacy:2,care:3,verify:1,balance:1},result:"コメントの流れはいったん止まりました。"}]},
      {type:"notification",prompt:"翌日、写真が別のアカウントにも転載されていました。どうする？",context:"自分の投稿を消しても、転載された画像は自分では直接消せません。",content:{notes:["知らないアカウントが画像を共有","『この学校どこ？』というコメント","友達から『消してほしい』とDM"]},
       choices:[
        {text:"自分の投稿だけ消して終わりにする",delta:{privacy:18,care:15,verify:3,balance:2},result:"元投稿は消えましたが、転載された画像は残りました。"},
        {text:"転載した相手に強い言葉で言い返す",delta:{privacy:8,care:18,verify:4,balance:8},result:"やり取りがさらに注目され、別の人も参加してきました。"},
        {text:"友達に謝り、大人に相談して削除依頼・通報をする",delta:{privacy:3,care:3,verify:1,balance:2},result:"すぐ全部消えるとは限りませんが、被害を広げない対応につながりました。"}]}
    ]
  },
  {
    id:"privacy",icon:"🔎",label:"シナリオ 2",title:"バラバラの情報がつながる",
    short:"写真・位置情報・会話の断片から、個人情報が推測される過程を体験します。",
    tags:["個人情報","位置情報","写真の背景"],core:true,
    intro:"新しく始めたSNS。知らない人とも趣味の話でつながり始めました。",appName:"LinkUp",
    resultTitle:"個人情報は「1個ずつ」ではなく、組み合わせで考える",
    resultSummary:"学校名や住所を直接書かなくても、制服・駅名・背景・時間帯などが組み合わさると、生活圏が推測されることがあります。",
    reflections:["自分では個人情報と思わなかったものは何だった？","写真の背景から、どんなことが分かる？","知らない相手に答えなくてよい質問はどれ？"],
    steps:[
      {type:"profile",prompt:"プロフィールを作ります。どこまで書く？",context:"学校名そのものは書いていません。",content:{profile:["小6","サッカー好き","○○駅の近く","誕生日 10/12"]},
       choices:[
        {text:"全部書く。共通点が増えて友達ができそう",delta:{privacy:30,care:3,verify:4,balance:2},result:"プロフィールだけで、年齢・生活圏・誕生日が分かる状態になりました。"},
        {text:"駅名だけ消して、ほかは書く",delta:{privacy:18,care:2,verify:3,balance:1},result:"生活圏はぼかせましたが、年齢や誕生日は公開されています。"},
        {text:"趣味だけ書き、場所や年齢は詳しく書かない",delta:{privacy:3,care:2,verify:1,balance:1},result:"共通の趣味は伝えつつ、生活情報はかなり減らせました。"}]},
      {type:"photo",prompt:"『今日の帰り道！』という写真を投稿しようとしています。どうする？",context:"背景に店名とバス停が写っています。",content:{image:"帰り道の写真。背景に『中央通り』『○○スーパー』の看板。"},
       choices:[
        {text:"気にせずそのまま投稿する",delta:{privacy:30,care:3,verify:6,balance:2},result:"場所を知っている人には、よく通る道がかなり絞り込めそうです。"},
        {text:"顔だけスタンプで隠して投稿する",delta:{privacy:20,care:2,verify:5,balance:1},result:"顔は隠れましたが、背景の情報は残っています。"},
        {text:"背景も確認して、場所が分かる部分を避ける",delta:{privacy:3,care:2,verify:1,balance:1},result:"写真から生活圏を推測される情報が減りました。"}]},
      {type:"dm",prompt:"知らない相手から『どこの小学校？』と聞かれました。どうする？",context:"趣味が同じで、相手は『近くに住んでるかも』と言っています。",content:{messages:["相手：サッカー好きなんだ！","相手：○○駅の近く？ 自分も近いよ","相手：どこの小学校？"]},
       choices:[
        {text:"学校名を答える",delta:{privacy:35,care:2,verify:8,balance:3},result:"相手はあなたの通う場所を具体的に知ることができました。"},
        {text:"学校名は言わず、だいたいの地域だけ答える",delta:{privacy:15,care:2,verify:5,balance:2},result:"学校名は伝えませんでしたが、生活圏の手がかりは増えました。"},
        {text:"学校名や住んでいる場所は答えない",delta:{privacy:2,care:2,verify:1,balance:1},result:"趣味の話だけにとどめ、個人を特定する情報は増やしませんでした。"}]}
    ]
  },
  {
    id:"dependence",icon:"🌙",label:"シナリオ 3",title:"あと5分だけ、のつもりが…",
    short:"通知・グループチャット・動画視聴が睡眠や学校生活にどう影響するか体験します。",
    tags:["ネット依存","睡眠","通知"],core:true,
    intro:"夜、宿題もお風呂も終わりました。寝る前に少しだけスマホを見るつもりです。",appName:"ChatLoop",
    resultTitle:"ネットとの距離は、自分で決める練習ができる",
    resultSummary:"SNSや動画は『もう少しだけ』が続きやすいことがあります。使わない時間を先に決めたり、通知を切ったりする工夫が役立ちます。",
    reflections:["眠る時間を守るために、先に決められることは？","通知を見るとやめにくくなるのはなぜ？","友達との関係を大切にしつつ、断る言い方は？"],
    steps:[
      {type:"night-chat",prompt:"21:45。グループチャットが盛り上がっています。どうする？",context:"明日は1時間目からテストがあります。",content:{time:"21:45",messages:["A：まだ起きてる人ー？","B：この動画見て！","C：あとでゲーム入ろ"]},
       choices:[
        {text:"少しだけ参加する",delta:{privacy:1,care:3,verify:1,balance:18},result:"返信が来るたび気になって、22時を過ぎました。"},
        {text:"通知だけ確認して、返信はしない",delta:{privacy:1,care:2,verify:1,balance:10},result:"返信はしませんでしたが、通知が来るたび画面を見てしまいました。"},
        {text:"『今日は寝るね』と伝えて通知を切る",delta:{privacy:1,care:2,verify:1,balance:2},result:"一言伝えたので、気持ちを切り替えやすくなりました。"}]},
      {type:"video",prompt:"22:20。おすすめ動画が次々に出てきます。どうする？",context:"『この1本で終わり』と思っても、次の動画が自動で出てきます。",content:{time:"22:20",notes:["おすすめ動画 3:12","次の動画 2:48","ショート動画が自動再生中"]},
       choices:[
        {text:"眠くなるまで見る",delta:{privacy:1,care:1,verify:1,balance:30},result:"気づくと23時を過ぎていました。"},
        {text:"タイマーを10分にして見る",delta:{privacy:1,care:1,verify:1,balance:10},result:"区切りを作れたので、止めやすくなりました。"},
        {text:"スマホを充電場所に置いてベッドから離す",delta:{privacy:1,care:1,verify:1,balance:2},result:"手の届かない場所に置いたことで、次の動画を開きにくくなりました。"}]},
      {type:"morning",prompt:"翌朝。いつもより眠く、授業中にぼんやりしています。どう考える？",context:"夜の使い方と朝の調子はつながっています。",content:{notes:["目覚ましを2回止めた","朝ごはんを急いで食べた","1時間目にあくびが出る"]},
       choices:[
        {text:"今日はたまたま。今夜も同じでいい",delta:{privacy:1,care:1,verify:2,balance:22},result:"原因を見直さないままだと、同じことが続くかもしれません。"},
        {text:"寝る時間だけ早くして、スマホは枕元に置く",delta:{privacy:1,care:1,verify:2,balance:9},result:"寝る時間は意識できましたが、通知が気になりやすい状態は残っています。"},
        {text:"夜のルールを決め、通知や置き場所も変える",delta:{privacy:1,care:1,verify:1,balance:2},result:"『気合い』だけではなく、使い方の環境そのものを変えました。"}]}
    ]
  },
  {
    id:"bullying",icon:"💬",label:"シナリオ 4",title:"グループチャットの空気",
    short:"悪口・仲間外れが始まったとき、書き込む側・見ている側としてどう行動するか考えます。",
    tags:["ネットいじめ","傍観","相談"],new:true,
    intro:"クラスのグループチャット。ある友達の失敗をきっかけに、からかう投稿が増えてきました。",appName:"ClassChat",
    resultTitle:"『自分は書いていない』だけでは止まらないことがある",
    resultSummary:"ネットいじめでは、同調する投稿だけでなく、面白がるスタンプや無言の傍観が相手を追い込むことがあります。安全を優先し、信頼できる大人に相談することも大切です。",
    reflections:["面白がるスタンプも相手にはどう見える？","一人で止めるのが怖いとき、誰に相談できる？","証拠を残すことと拡散することの違いは？"],
    steps:[
      {type:"group-chat",prompt:"友達へのからかいが始まりました。どうする？",context:"『昨日のミス、またやりそう』という投稿に笑うスタンプが続いています。",content:{messages:["A：昨日のミスやばかった笑","B：またやりそう🤣","C：😂😂😂"]},
       choices:[
        {text:"自分も笑うスタンプを押す",delta:{privacy:2,care:28,verify:2,balance:3},result:"直接悪口を書かなくても、『みんなで笑っている』空気が強くなりました。"},
        {text:"何もせず見ている",delta:{privacy:1,care:13,verify:2,balance:2},result:"からかいは止まらず、投稿する人が増えていきました。"},
        {text:"『もうやめよう』と伝える／難しければ大人に相談する",delta:{privacy:1,care:3,verify:1,balance:2},result:"一人で抱え込まず、止めるための行動につながりました。"}]},
      {type:"group-chat",prompt:"『あの子だけ別グループにしよう』という話が出ました。どうする？",context:"本人には見えない別グループを作ろうとしています。",content:{messages:["A：新しいグループ作ろ","B：○○は入れないで","C：了解"]},
       choices:[
        {text:"新しいグループに入る",delta:{privacy:3,care:30,verify:2,balance:3},result:"仲間外れが見えにくい場所で続く形になりました。"},
        {text:"自分は発言しないが、グループには残る",delta:{privacy:2,care:14,verify:2,balance:2},result:"自分は書かなくても、仲間外れの場に参加している状態は続きます。"},
        {text:"参加せず、信頼できる大人に状況を伝える",delta:{privacy:2,care:3,verify:1,balance:2},result:"本人の安全を考えながら、周りの大人が対応できる状態を作りました。"}]},
      {type:"screenshot",prompt:"相談するとき、チャットの証拠をどう扱う？",context:"先生に状況を説明するため、やり取りを見せる必要があります。",content:{notes:["悪口の投稿","仲間外れを相談するメッセージ","相手の名前が分かる画面"]},
       choices:[
        {text:"証拠のスクショを友達全員にも送る",delta:{privacy:22,care:18,verify:4,balance:3},result:"相談のための証拠が、別の拡散になってしまいました。"},
        {text:"全部消して、何も残さない",delta:{privacy:2,care:8,verify:15,balance:2},result:"気持ちは分かりますが、状況を説明する材料がなくなってしまいました。"},
        {text:"必要な証拠だけ残し、先生や保護者など相談相手にだけ見せる",delta:{privacy:3,care:3,verify:2,balance:2},result:"拡散を避けながら、状況を正確に伝えることができました。"}]}
    ]
  },
  {
    id:"ai",icon:"🤖",label:"シナリオ 5",title:"生成AIの答え、本当に正しい？",
    short:"もっともらしいAIの回答を、そのまま信じる・提出する危険と確かめ方を体験します。",
    tags:["生成AI","情報確認","著作・提出"],new:true,
    intro:"社会科の調べ学習。分からないことを生成AIに質問したところ、すぐ詳しい答えが返ってきました。",appName:"StudyAI",
    resultTitle:"AIは便利。でも『答えを確かめる人』は自分",
    resultSummary:"生成AIは、自然な文章でも誤った内容を出すことがあります。調べ学習では複数の資料や公式情報で確かめ、自分で理解した言葉にすることが大切です。",
    reflections:["AIの文章が自然でも、確かめる必要があるのはなぜ？","学校の課題でAIを使うとき、先生に確認したいことは？","『参考にする』と『そのまま提出する』は何が違う？"],
    steps:[
      {type:"ai-answer",prompt:"AIが詳しい答えを出しました。次にどうする？",context:"参考資料の名前も書かれていますが、本当に存在するかはまだ確認していません。",content:{ai:"○○城は1682年に建てられ、△△という人物が設計しました。参考：『日本城郭大事典 第8巻』"},
       choices:[
        {text:"詳しいから、そのままノートに写す",delta:{privacy:1,care:2,verify:32,balance:2},result:"文章は自然ですが、年号や参考資料が正しいかはまだ分かりません。"},
        {text:"AIに『本当に？』ともう一度聞くだけ",delta:{privacy:1,care:2,verify:16,balance:2},result:"同じAIが自信を持って答えても、それだけでは裏付けになりません。"},
        {text:"教科書・自治体・博物館など別の資料で確かめる",delta:{privacy:1,care:2,verify:2,balance:2},result:"別の資料と比べることで、誤りや食い違いに気づける可能性が高まりました。"}]},
      {type:"ai-image",prompt:"発表スライド用にAIで人物画像を作りました。どう使う？",context:"実在した歴史人物ですが、AI画像は本物の写真ではありません。",content:{image:"AIが作った『歴史人物らしい肖像』"},
       choices:[
        {text:"本物の写真として載せる",delta:{privacy:1,care:5,verify:28,balance:2},result:"見る人は『本当に残っている写真』だと誤解するかもしれません。"},
        {text:"説明せず、イメージ画像として載せる",delta:{privacy:1,care:4,verify:13,balance:2},result:"意図は違っても、見る人にはAI生成だと分かりません。"},
        {text:"AI生成のイメージだと明記し、必要なら先生にも確認する",delta:{privacy:1,care:2,verify:2,balance:2},result:"本物の資料と生成画像を区別して伝えられました。"}]},
      {type:"assignment",prompt:"AIが作文を全部作ってくれました。提出はどうする？",context:"先生は『自分で考えたことを書こう』と説明しています。",content:{notes:["AI作文：800字完成","自分はまだ内容を十分説明できない","提出まで20分"]},
       choices:[
        {text:"そのまま自分の作文として提出する",delta:{privacy:1,care:10,verify:25,balance:8},result:"提出物と自分の理解が一致せず、学習したことを説明できない状態になりました。"},
        {text:"少し言葉を変えて提出する",delta:{privacy:1,care:8,verify:15,balance:5},result:"表現を変えても、考える部分をAIに任せた問題は残っています。"},
        {text:"アイデア整理に使い、自分で考え直して書く",delta:{privacy:1,care:2,verify:2,balance:3},result:"AIを道具として使いながら、自分の学びとして説明できる形にしました。"}]}
    ]
  },
  {
    id:"game",icon:"🎮",label:"シナリオ 6",title:"『今だけ』のゲーム課金",
    short:"期間限定・ガチャ・友達との競争で、判断が急がされる場面を体験します。",
    tags:["オンラインゲーム","課金","時間"],new:true,
    intro:"遊んでいるゲームに『今日だけ限定！』のアイテムが表示されました。",appName:"BattleQuest",
    resultTitle:"『今だけ』『あと少し』は、判断を急がせる",
    resultSummary:"ゲームでは、限定表示やガチャ、友達との比較で『今すぐ欲しい』気持ちが強くなることがあります。お金と時間のルールは、興奮しているときではなく先に決めておくことが有効です。",
    reflections:["『今日だけ』と表示されると、気持ちはどう変わる？","自分のお金でも、課金前に確認したいことは？","負けた直後に続ける判断は冷静かな？"],
    steps:[
      {type:"game-offer",prompt:"限定アイテムが欲しい。どうする？",context:"『残り15分』。購入には家族が設定した決済が使えます。",content:{notes:["限定スキン 980円","残り 00:15:00","今買うとボーナス付き"]},
       choices:[
        {text:"時間がないので、すぐ購入する",delta:{privacy:2,care:4,verify:10,balance:28},result:"『残り時間』に急かされて、必要か考える前に購入しました。"},
        {text:"友達が買ったか聞いて、みんな買っていたら買う",delta:{privacy:2,care:4,verify:11,balance:19},result:"自分の必要性ではなく、周りの行動が判断の基準になりました。"},
        {text:"いったん閉じ、家のルールや金額を確認してから決める",delta:{privacy:2,care:2,verify:2,balance:3},result:"時間制限から離れ、落ち着いて判断する時間を作りました。"}]},
      {type:"gacha",prompt:"欲しいキャラが出ません。あと1回どうする？",context:"すでに何回か引いています。『次こそ出る気がする』と感じています。",content:{notes:["結果：はずれ","結果：はずれ","『あと1回で出そう…』"]},
       choices:[
        {text:"出るまで続ける",delta:{privacy:1,care:2,verify:12,balance:32},result:"『ここまで使ったから』という気持ちで、やめるタイミングが遠くなりました。"},
        {text:"あと1回だけ、と決めて引く",delta:{privacy:1,care:2,verify:8,balance:18},result:"『あと1回』が繰り返されない仕組みがないと、続けやすい状態です。"},
        {text:"最初に決めた上限でやめる",delta:{privacy:1,care:2,verify:2,balance:3},result:"結果ではなく、先に決めたルールで区切ることができました。"}]},
      {type:"game-night",prompt:"22時。友達から『今からランク戦！』と誘われました。どうする？",context:"明日は学校。1試合は10〜20分ですが、勝つまで続けたくなることがあります。",content:{time:"22:00",messages:["友：今からランク戦いこう","友：あと1人でチーム組める","友：お願い！"]},
       choices:[
        {text:"友達に悪いので参加する",delta:{privacy:1,care:4,verify:2,balance:25},result:"友達を大切にしたい気持ちはありますが、自分の生活時間が後回しになりました。"},
        {text:"1試合だけ参加する",delta:{privacy:1,care:3,verify:2,balance:13},result:"1試合で終われる場合もありますが、勝敗で続けたくなる可能性があります。"},
        {text:"今日は断り、次に遊べる時間を伝える",delta:{privacy:1,care:2,verify:1,balance:2},result:"関係を切るのではなく、遊ぶ時間の境界線を伝えました。"}]}
    ]
  },
  {
    id:"impersonation",icon:"🎭",label:"シナリオ 7",title:"そのアカウント、本当に本人？",
    short:"なりすまし・偽アカウント・急な送金依頼から、本人確認の方法を考えます。",
    tags:["なりすまし","偽アカウント","本人確認"],new:true,
    intro:"仲のよい友達と同じ名前・同じアイコンの新しいアカウントからフォローされました。",appName:"FriendNet",
    resultTitle:"『知っている人に見える』と『本人だと確かめた』は別",
    resultSummary:"名前やアイコンはコピーできます。急なお願い、秘密にしてという指示、外部リンクなどが出たときは、別の連絡手段で本人に確認することが有効です。",
    reflections:["本人確認に使える『別の方法』には何がある？","『急いで』『秘密にして』と言われると判断はどうなる？","偽アカウントを見つけたら、どんな対応ができる？"],
    steps:[
      {type:"fake-profile",prompt:"友達と同じ名前の新アカウント。どうする？",context:"アイコンも同じですが、ユーザー名の最後に数字が1つ増えています。",content:{profile:["名前：たくみ","アイコン：いつもの写真","ID：takumi_218 → takumi_2187"]},
       choices:[
        {text:"友達だと思ってすぐフォローを返す",delta:{privacy:18,care:2,verify:28,balance:2},result:"見た目が似ているだけで、本人確認はできていません。"},
        {text:"プロフィールの投稿数だけ見て判断する",delta:{privacy:10,care:2,verify:15,balance:2},result:"投稿やプロフィールもコピーできるため、十分な確認にはなりません。"},
        {text:"いつもの連絡先や学校で本人に確認する",delta:{privacy:2,care:2,verify:2,balance:2},result:"そのアカウントは友達本人のものではないと分かりました。"}]},
      {type:"dm",prompt:"偽アカウントから『写真送って』とDMが来ました。どうする？",context:"『本人確認に必要だから』と言っています。",content:{messages:["相手：スマホ壊れて新垢にした！","相手：本人確認したいから写真送って","相手：他の人には言わないで"]},
       choices:[
        {text:"友達なら大丈夫だと思って写真を送る",delta:{privacy:32,care:2,verify:25,balance:2},result:"相手が本人でなければ、送った写真が別の目的に使われる可能性があります。"},
        {text:"顔が写らない写真なら送る",delta:{privacy:16,care:2,verify:18,balance:2},result:"顔がなくても、背景や持ち物などから情報が分かることがあります。"},
        {text:"送らず、本人確認が取れるまでやり取りを止める",delta:{privacy:2,care:2,verify:2,balance:2},result:"追加の情報を渡さず、安全を優先しました。"}]},
      {type:"urgent-message",prompt:"『ゲームカード番号を送って。急いで！』と頼まれました。どうする？",context:"『親には内緒で』『あとで必ず返す』とも書かれています。",content:{notes:["急いで！","コンビニでカード買える？","番号だけ写真で送って","誰にも言わないで"]},
       choices:[
        {text:"困っている友達のために送る",delta:{privacy:16,care:6,verify:30,balance:8},result:"急がされ、秘密にするよう求められたことで、確認する前に行動してしまいました。"},
        {text:"金額を少なくして送る",delta:{privacy:10,care:5,verify:20,balance:6},result:"金額を減らしても、本人確認ができていない問題は変わりません。"},
        {text:"別の方法で本人確認し、大人にも相談する",delta:{privacy:2,care:2,verify:2,balance:2},result:"送金や番号送信をせず、詐欺やなりすましの可能性を確認できました。"}]}
    ]
  }
];

const metricDefs = [
  ["privacy","情報を守る","写真・位置・アカウント・個人情報を必要以上に広げない"],
  ["care","相手を思いやる","画面の向こうの相手の気持ちや権利を考える"],
  ["verify","確かめる","情報や相手が本物か、別の方法で確認する"],
  ["balance","使い方を決める","時間・お金・勢いに流されず、自分で区切る"]
];

const state = {
  mode: (() => {
    const path = location.pathname.replace(/\\/g,"/");
    const qMode = new URLSearchParams(location.search).get("mode");
    if (path.includes("/teacher/") || qMode==="teacher") return "teacher";
    if (path.includes("/student/") || qMode==="student") return "student";
    return localStorage.getItem("ims_mode_v3") || localStorage.getItem("ims_mode_v2") || "student";
  })(),
  currentScenario:null, stepIndex:0, choices:[],
  scores:{privacy:0,care:0,verify:0,balance:0},
  completed:JSON.parse(localStorage.getItem("ims_completed_v3") || localStorage.getItem("ims_completed_v2") || "{}"),
  votes:[0,0,0],
  pendingChoice:null,

  // v3 LIVE classroom
  liveTeacher: JSON.parse(localStorage.getItem("ims_live_teacher") || "null"),
  liveStudent: JSON.parse(localStorage.getItem("ims_live_student") || "null"),
  deviceId: localStorage.getItem("ims_device_id") || "",
  livePollTimer:null,
  tallyPollTimer:null,
  studentHasVotedKey:null,
  lastLiveSessionState:null
};


const LIVE = {
  get url(){ return String((window.IMS_CONFIG && window.IMS_CONFIG.GAS_WEB_APP_URL) || "").trim(); },
  get configured(){ return /^https:\/\/script\.google\.com\/macros\/s\/.+\/exec/.test(this.url); }
};

if(!state.deviceId){
  state.deviceId = (crypto.randomUUID ? crypto.randomUUID() : `dev-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  localStorage.setItem("ims_device_id", state.deviceId);
}

function randomToken(){
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
}
function randomLessonCode(){
  return String(Math.floor(100000 + Math.random()*900000));
}
function stopLiveTimers(){
  if(state.livePollTimer){ clearTimeout(state.livePollTimer); state.livePollTimer=null; }
  if(state.tallyPollTimer){ clearTimeout(state.tallyPollTimer); state.tallyPollTimer=null; }
}
function gasPost(payload){
  if(!LIVE.configured) return Promise.reject(new Error("GAS URLが未設定です"));
  return fetch(LIVE.url,{
    method:"POST",
    mode:"no-cors",
    headers:{"Content-Type":"text/plain;charset=UTF-8"},
    body:JSON.stringify(payload)
  });
}
function gasJsonp(params, timeout=7000){
  return new Promise((resolve,reject)=>{
    if(!LIVE.configured){ reject(new Error("GAS URLが未設定です")); return; }
    const cb=`__ims_cb_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script=document.createElement("script");
    const timer=setTimeout(()=>cleanup(new Error("通信がタイムアウトしました")),timeout);
    function cleanup(err,data){
      clearTimeout(timer);
      try{ delete window[cb]; }catch(_){}
      script.remove();
      err ? reject(err) : resolve(data);
    }
    window[cb]=(data)=>cleanup(null,data);
    const q=new URLSearchParams({...params,callback:cb,_:String(Date.now())});
    script.src=`${LIVE.url}?${q.toString()}`;
    script.onerror=()=>cleanup(new Error("GASとの通信に失敗しました"));
    document.head.appendChild(script);
  });
}
async function createLiveLesson(){
  if(!LIVE.configured) throw new Error("config.js にGAS WebアプリURLを設定してください。");
  for(let attempt=0;attempt<4;attempt++){
    const code=randomLessonCode(), sessionId=randomToken(), teacherKey=randomToken();
    await gasPost({action:"createSession",code,sessionId,teacherKey});
    await new Promise(r=>setTimeout(r,850));
    try{
      const info=await gasJsonp({action:"session",code});
      if(info && info.ok && info.session && info.session.sessionId===sessionId){
        state.liveTeacher={code,sessionId,teacherKey};
        localStorage.setItem("ims_live_teacher",JSON.stringify(state.liveTeacher));
        return state.liveTeacher;
      }
    }catch(_){}
  }
  throw new Error("授業コードを作成できませんでした。もう一度お試しください。");
}
async function closeLiveLesson(){
  if(!state.liveTeacher) return;
  try{
    await gasPost({action:"closeSession",...state.liveTeacher});
  }catch(_){}
  state.liveTeacher=null;
  localStorage.removeItem("ims_live_teacher");
  stopLiveTimers();
}
async function pushTeacherState(phase="voting",chosenChoice=""){
  if(!state.liveTeacher || !state.currentScenario) return;
  const payload={
    action:"updateSession",
    ...state.liveTeacher,
    scenarioId:state.currentScenario.id,
    stepIndex:state.stepIndex,
    phase,
    chosenChoice: chosenChoice === "" ? "" : Number(chosenChoice)
  };
  await gasPost(payload);
}
async function joinLiveLesson(code){
  code=String(code||"").replace(/\D/g,"").slice(0,6);
  if(code.length!==6) throw new Error("6桁の授業コードを入力してください。");
  const info=await gasJsonp({action:"session",code});
  if(!info || !info.ok || !info.session || !info.session.active) throw new Error("その授業コードは見つからないか、終了しています。");
  state.liveStudent={code,sessionId:info.session.sessionId};
  localStorage.setItem("ims_live_student",JSON.stringify(state.liveStudent));
  state.lastLiveSessionState=info.session;
  return info.session;
}
function leaveLiveLesson(){
  state.liveStudent=null;state.lastLiveSessionState=null;state.studentHasVotedKey=null;
  localStorage.removeItem("ims_live_student");stopLiveTimers();
}
async function sendLiveVote(choiceIndex){
  if(!state.liveStudent || !state.currentScenario) return;
  await gasPost({
    action:"vote",
    code:state.liveStudent.code,
    sessionId:state.liveStudent.sessionId,
    deviceId:state.deviceId,
    scenarioId:state.currentScenario.id,
    stepIndex:state.stepIndex,
    choice:Number(choiceIndex)
  });
}
function liveStepKey(session){
  if(!session) return "";
  return `${session.code}|${session.scenarioId}|${session.stepIndex}`;
}

const app = document.getElementById("app");
const homeBtn = document.getElementById("homeBtn");
const modeBtn = document.getElementById("modeBtn");
const modeBadge = document.getElementById("modeBadge");
const modeDialog = document.getElementById("modeDialog");
const closeModeDialog = document.getElementById("closeModeDialog");

homeBtn.addEventListener("click",renderHome);
modeBtn.addEventListener("click",()=>{modeDialog.hidden=false;});
closeModeDialog.addEventListener("click",()=>{modeDialog.hidden=true;});
modeDialog.addEventListener("click",e=>{if(e.target===modeDialog)modeDialog.hidden=true;});
document.querySelectorAll(".mode-select-btn").forEach(b=>b.addEventListener("click",()=>{setMode(b.dataset.mode);modeDialog.hidden=true;renderHome();}));

function setMode(mode){
  state.mode=mode;
  localStorage.setItem("ims_mode_v3",mode);
  document.body.classList.toggle("teacher-mode",mode==="teacher");
  modeBadge.textContent=mode==="teacher"?"授業モード":"児童モード";
}
function clamp(n){return Math.max(0,Math.min(100,n));}
function letter(i){return String.fromCharCode(65+i);}
function resetRun(){
  state.stepIndex=0;state.choices=[];state.scores={privacy:0,care:0,verify:0,balance:0};
  state.votes=[0,0,0];state.pendingChoice=null;
}
function renderHome(){
  stopLiveTimers();
  state.currentScenario=null;
  setMode(state.mode);
  const tpl=document.getElementById("homeTemplate");
  app.innerHTML="";app.appendChild(tpl.content.cloneNode(true));

  document.querySelectorAll(".mode-card").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.mode===state.mode);
    btn.addEventListener("click",()=>{setMode(btn.dataset.mode);renderHome();});
  });

  renderLiveHomePanel();

  document.getElementById("scenarioHeading").textContent=state.mode==="teacher"
    ?"電子黒板で進めるシナリオを選ぼう"
    :(state.liveStudent?"先生がシナリオを開始するまで待とう":"体験するシナリオを選ぼう");

  const grid=document.getElementById("scenarioGrid");

  if(state.mode==="student" && state.liveStudent){
    grid.innerHTML=`<div class="card live-wait-card" style="grid-column:1/-1">
      <div class="big-icon">📡</div>
      <h2>授業に参加中</h2>
      <p>授業コード <strong>${state.liveStudent.code}</strong><br>先生が最初の場面を開始すると、この画面が自動で切り替わります。</p>
      <p class="live-message">先生の画面を見ながら待ってください。</p>
    </div>`;
    beginStudentSessionPolling(true);
  }else{
    scenarios.forEach(sc=>{
      const card=document.createElement("article");
      card.className="scenario-card card";card.setAttribute("role","button");card.setAttribute("tabindex","0");
      const done=state.completed[sc.id]?`<span class="done-mark">体験済み ✓</span>`:"";
      card.innerHTML=`${done}<div class="icon" aria-hidden="true">${sc.icon}</div><p class="eyebrow">${sc.label}</p><h3>${sc.title}</h3><p>${sc.short}</p>
        <div class="meta">${sc.tags.map(t=>`<span class="pill">${t}</span>`).join("")}${sc.new?`<span class="pill new">追加</span>`:""}</div>`;
      card.addEventListener("click",()=>startScenario(sc.id));
      card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();startScenario(sc.id);}});
      grid.appendChild(card);
    });
  }

  const doneCount=Object.values(state.completed).filter(Boolean).length;
  document.getElementById("overallProgress").textContent=state.mode==="teacher"?"全7テーマ・各3場面":`${doneCount} / ${scenarios.length} 体験済み`;
  document.getElementById("lessonTip").innerHTML=state.mode==="teacher"
    ?`<h3>🧑‍🏫 授業モード</h3><ol><li><strong>LIVE授業</strong>：授業コードを児童に伝えると、各端末の回答が自動集計されます。</li><li>先生が「クラスではA/B/Cを選ぶ」を押すと結果公開。次の場面へ進むと児童端末も追従します。</li><li>GASが未設定・通信不調でも、従来の<strong>手動挙手集計</strong>で進められます。</li></ol>`
    :`<h3>👤 児童モード</h3><ol><li>個別学習なら、そのままシナリオを選びます。</li><li>先生と一緒に進めるときは、上の「授業に参加」から6桁コードを入力します。</li><li>LIVE授業中は、回答は匿名の端末IDだけで集計されます。</li></ol>`;
  window.scrollTo({top:0,behavior:"smooth"});
}
function startScenario(id){
  state.currentScenario=scenarios.find(s=>s.id===id);resetRun();
  if(state.mode==="teacher"){
    renderTeacherScenario();
    if(state.liveTeacher){
      pushTeacherState("voting","").catch(()=>{});
    }
  }else{
    renderStudentScenario();
  }
}

/* student */
function renderStudentScenario(){
  const sc=state.currentScenario,tpl=document.getElementById("studentScenarioTemplate");
  app.innerHTML="";app.appendChild(tpl.content.cloneNode(true));
  bindBack();
  document.getElementById("scenarioLabel").textContent=sc.label+(state.liveStudent?"・LIVE授業":"");
  document.getElementById("scenarioTitle").textContent=sc.title;
  document.getElementById("scenarioIntro").textContent=sc.intro;
  document.getElementById("phoneAppHeader").innerHTML=`<span class="app-dot"></span>${sc.appName}`;
  renderStudentStep();
  if(state.liveStudent) beginStudentSessionPolling(false);
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderStudentStep(){
  const sc=state.currentScenario,step=sc.steps[state.stepIndex],current=state.stepIndex+1;
  document.getElementById("stepText").textContent=`場面 ${current} / ${sc.steps.length}`;
  document.getElementById("stepBar").style.width=`${current/sc.steps.length*100}%`;
  const phoneContent=document.getElementById("phoneContent");
  phoneContent.className="phone-content"+(step.type==="night-chat"||step.type==="game-night"?" screen-night":"");
  phoneContent.innerHTML=buildMockContent(step);
  const panel=document.getElementById("decisionPanel");

  if(state.liveStudent){
    const session=state.lastLiveSessionState;
    const key=liveStepKey(session);
    if(session && (session.phase==="reveal" || session.phase==="finished") && session.scenarioId===sc.id && Number(session.stepIndex)===state.stepIndex && session.chosenChoice!==""){
      showLiveStudentReveal(Number(session.chosenChoice), session.phase==="finished");return;
    }
    if(state.studentHasVotedKey===key){
      panel.innerHTML=`<p class="eyebrow">回答送信済み</p><div class="live-vote-lock"><h4>✓ 回答を送りました</h4><p>集計は先生の電子黒板に反映されます。先生が結果を公開するまで、画面を見ながら待ちましょう。</p></div>`;
      return;
    }
  }

  panel.innerHTML=`${state.liveStudent?`<div class="live-joined-banner"><span><span class="live-status-dot on"></span>LIVE授業・${state.liveStudent.code}</span><strong>匿名集計</strong></div>`:""}
    <p class="eyebrow">${state.liveStudent?"いま投票中":"あなたならどうする？"}</p><h3>${step.prompt}</h3><div class="context-box">${step.context}</div>
    <div class="choice-list">${step.choices.map((c,i)=>`<button class="choice-btn" data-index="${i}" type="button"><span class="choice-index">${letter(i)}</span>${c.text}</button>`).join("")}</div>`;
  panel.querySelectorAll(".choice-btn").forEach(b=>b.addEventListener("click",()=>showStudentOutcome(Number(b.dataset.index))));
}
function showStudentOutcome(index){
  const step=state.currentScenario.steps[state.stepIndex],choice=step.choices[index];
  const panel=document.getElementById("decisionPanel");

  if(state.liveStudent){
    const key=`${state.liveStudent.code}|${state.currentScenario.id}|${state.stepIndex}`;
    state.studentHasVotedKey=key;
    panel.innerHTML=`<p class="eyebrow">回答を送信中</p><div class="live-vote-lock"><h4>${letter(index)} を選びました</h4><p id="liveSendMsg">電子黒板の集計へ送っています…</p></div>`;
    sendLiveVote(index).then(()=>{
      const msg=document.getElementById("liveSendMsg");
      if(msg) msg.textContent="✓ 回答を送りました。先生が結果を公開するまで待ちましょう。";
    }).catch(()=>{
      state.studentHasVotedKey=null;
      const msg=document.getElementById("liveSendMsg");
      if(msg) msg.innerHTML=`<span class="live-error">送信できませんでした。通信を確認して、もう一度選んでください。</span>`;
      setTimeout(()=>{ if(state.currentScenario) renderStudentStep(); },1800);
    });
    return;
  }

  panel.innerHTML=`<p class="eyebrow">このあとどうなった？</p><div class="outcome-box"><h4>${letter(index)} を選びました</h4><p>${choice.result}</p>
  <button id="studentNextBtn" class="primary-btn" type="button">${state.stepIndex===state.currentScenario.steps.length-1?"振り返りへ":"次の場面へ →"}</button></div>`;
  document.getElementById("studentNextBtn").addEventListener("click",()=>commitChoice(index,null));
}
function commitChoice(index,voteSnapshot){
  const sc=state.currentScenario,step=sc.steps[state.stepIndex],choice=step.choices[index];
  Object.keys(state.scores).forEach(k=>state.scores[k]+=choice.delta[k]||0);
  state.choices.push({step:state.stepIndex+1,prompt:step.prompt,choice:choice.text,result:choice.result,votes:voteSnapshot});
  state.stepIndex++;
  if(state.stepIndex>=sc.steps.length){
    state.completed[sc.id]=true;localStorage.setItem("ims_completed_v3",JSON.stringify(state.completed));renderResult();
  }else{
    state.votes=[0,0,0];
    if(state.mode==="teacher"){
      renderTeacherStep();
      if(state.liveTeacher) pushTeacherState("voting","").catch(()=>{});
    }else{
      renderStudentStep();
    }
  }
}

/* teacher */
function renderTeacherScenario(){
  const sc=state.currentScenario,tpl=document.getElementById("teacherScenarioTemplate");
  app.innerHTML="";app.appendChild(tpl.content.cloneNode(true));bindBack();
  document.getElementById("teacherScenarioLabel").textContent=sc.label+(state.liveTeacher?"・LIVE授業":"・授業モード");
  document.getElementById("teacherScenarioTitle").textContent=sc.title;
  document.getElementById("teacherAppName").textContent=sc.appName;
  document.getElementById("resetVotesBtn").addEventListener("click",()=>{
    if(state.liveTeacher) return;
    state.votes=[0,0,0];updateVoteUI();
  });
  if(state.liveTeacher){
    document.getElementById("resetVotesBtn").textContent="LIVE自動集計中";
    document.getElementById("resetVotesBtn").disabled=true;
  }
  renderTeacherStep();
  window.scrollTo({top:0,behavior:"smooth"});
}
function renderTeacherStep(){
  const sc=state.currentScenario,step=sc.steps[state.stepIndex],current=state.stepIndex+1;
  state.pendingChoice=null;state.votes=[0,0,0];
  document.getElementById("teacherStepText").textContent=`場面 ${current} / ${sc.steps.length}`;
  document.getElementById("teacherStepBar").style.width=`${current/sc.steps.length*100}%`;
  document.getElementById("teacherPrompt").textContent=step.prompt;
  document.getElementById("teacherContextBox").textContent=step.context;
  const status=document.getElementById("teacherLiveStatus");
  status.innerHTML=state.liveTeacher
    ?`<span class="live-code-mini"><span class="live-status-dot on"></span>LIVE ${state.liveTeacher.code}</span><div class="live-count-note" id="liveTotalCount">回答 0人</div>`
    :`<span class="sync-warning">手動挙手モード</span>`;
  const mock=document.getElementById("teacherMockScreen");
  mock.className="teacher-mock-screen"+(step.type==="night-chat"||step.type==="game-night"?" screen-night":"");
  mock.innerHTML=buildMockContent(step);
  const choices=document.getElementById("teacherChoices");
  choices.innerHTML=step.choices.map((c,i)=>`
    <article class="teacher-choice ${state.liveTeacher?"live-readonly":""}" data-index="${i}">
      <div class="teacher-choice-head"><div class="teacher-letter">${letter(i)}</div><h4>${c.text}</h4></div>
      <div class="vote-control">
        <div class="vote-row">
          <button class="vote-btn minus" data-index="${i}" type="button" aria-label="${letter(i)}を1人減らす">−</button>
          <div class="vote-number" id="voteNum${i}">0</div>
          <button class="vote-btn plus" data-index="${i}" type="button" aria-label="${letter(i)}を1人増やす">＋</button>
        </div>
        <div class="vote-bar"><div id="voteBar${i}"></div></div>
        <div class="vote-meta"><span>${state.liveTeacher?"LIVE回答":"挙手"}</span><span id="votePct${i}">0%</span></div>
        <button class="choose-route-btn" data-index="${i}" type="button">クラスでは ${letter(i)} を選ぶ</button>
      </div>
    </article>`).join("");
  choices.querySelectorAll(".plus").forEach(b=>b.addEventListener("click",()=>changeVote(Number(b.dataset.index),1)));
  choices.querySelectorAll(".minus").forEach(b=>b.addEventListener("click",()=>changeVote(Number(b.dataset.index),-1)));
  choices.querySelectorAll(".choose-route-btn").forEach(b=>b.addEventListener("click",()=>showTeacherOutcome(Number(b.dataset.index))));
  document.getElementById("teacherOutcome").hidden=true;updateVoteUI();
  if(state.liveTeacher) beginTeacherTallyPolling();
}
function changeVote(i,delta){
  if(state.liveTeacher) return;
  state.votes[i]=Math.max(0,state.votes[i]+delta);updateVoteUI();
}
function updateVoteUI(){
  const total=state.votes.reduce((a,b)=>a+b,0);
  state.votes.forEach((v,i)=>{
    const num=document.getElementById(`voteNum${i}`),bar=document.getElementById(`voteBar${i}`),pct=document.getElementById(`votePct${i}`);
    if(!num)return;const p=total?Math.round(v/total*100):0;num.textContent=v;bar.style.width=`${p}%`;pct.textContent=`${p}%`;
  });
  const totalEl=document.getElementById("liveTotalCount");
  if(totalEl) totalEl.textContent=`回答 ${total}人`;
}
function showTeacherOutcome(index){
  const step=state.currentScenario.steps[state.stepIndex],choice=step.choices[index],total=state.votes.reduce((a,b)=>a+b,0);
  const snapshot=state.votes.slice();
  state.pendingChoice={index,votes:snapshot};
  if(state.liveTeacher){
    stopTeacherTallyPolling();
    pushTeacherState("reveal",index).catch(()=>{});
  }
  const summary=total?step.choices.map((_,i)=>`<span class="class-pill">${letter(i)} ${snapshot[i]}人（${Math.round(snapshot[i]/total*100)}%）</span>`).join(""):`<span class="class-pill">回答はまだ0人</span>`;
  const out=document.getElementById("teacherOutcome");out.hidden=false;
  out.innerHTML=`<div class="class-summary">${summary}</div><p class="eyebrow">このあとどうなった？</p><h3>クラスでは ${letter(index)} を選択</h3><p>${choice.result}</p>
    <div class="teacher-outcome-actions">
      ${state.liveTeacher?"":`<button id="backToVoteBtn" class="secondary-btn" type="button">選び直す</button>`}
      <button id="teacherNextBtn" class="primary-btn" type="button">${state.stepIndex===state.currentScenario.steps.length-1?"振り返りへ":"次の場面へ →"}</button>
    </div>`;
  const back=document.getElementById("backToVoteBtn");
  if(back) back.addEventListener("click",()=>{out.hidden=true;state.pendingChoice=null;});
  document.getElementById("teacherNextBtn").addEventListener("click",()=>{
    if(state.stepIndex===state.currentScenario.steps.length-1 && state.liveTeacher){
      pushTeacherState("finished",index).catch(()=>{});
    }
    commitChoice(index,snapshot);
  });
  out.scrollIntoView({behavior:"smooth",block:"nearest"});
}


/* LIVE classroom flow */
function renderLiveHomePanel(){
  const panel=document.getElementById("liveHomePanel");
  if(!panel) return;

  if(state.mode==="teacher"){
    if(state.liveTeacher){
      panel.innerHTML=`<div class="live-card teacher-live card">
        <p class="eyebrow">LIVE CLASSROOM</p>
        <h3><span class="live-status-dot on"></span>LIVE授業を受付中</h3>
        <p>児童は「児童モード → 授業に参加」から、この6桁コードを入力します。</p>
        <div class="live-row">
          <div class="live-code-box"><small>授業コード</small><span class="live-code">${state.liveTeacher.code}</span></div>
          <button id="endLiveLessonBtn" class="secondary-btn" type="button">LIVE授業を終了</button>
        </div>
        <p class="live-hint">※回答は氏名ではなく、このブラウザに保存したランダム端末IDで重複を防ぎます。</p>
      </div>`;
      document.getElementById("endLiveLessonBtn").addEventListener("click",async()=>{
        if(confirm("このLIVE授業を終了しますか？")){
          await closeLiveLesson();renderHome();
        }
      });
    }else{
      panel.innerHTML=`<div class="live-card teacher-live card">
        <p class="eyebrow">LIVE CLASSROOM</p>
        <h3>📡 児童30台の回答を電子黒板へ</h3>
        <p>「LIVE授業を開始」を押すと6桁の授業コードを発行します。児童が選んだA/B/Cが自動で人数・割合表示されます。</p>
        <div class="live-row">
          <button id="startLiveLessonBtn" class="primary-btn" type="button">LIVE授業を開始</button>
          <span id="liveTeacherMsg" class="live-message">${LIVE.configured?"GAS接続設定済み":"⚠ config.js のGAS URLが未設定です"}</span>
        </div>
      </div>`;
      document.getElementById("startLiveLessonBtn").addEventListener("click",async()=>{
        const btn=document.getElementById("startLiveLessonBtn"),msg=document.getElementById("liveTeacherMsg");
        btn.disabled=true;msg.textContent="授業コードを作成しています…";
        try{
          await createLiveLesson();renderHome();
        }catch(err){
          msg.innerHTML=`<span class="live-error">${err.message}</span>`;btn.disabled=false;
        }
      });
    }
  }else{
    if(state.liveStudent){
      panel.innerHTML=`<div class="live-card card">
        <p class="eyebrow">LIVE CLASSROOM</p>
        <h3><span class="live-status-dot on"></span>授業コード ${state.liveStudent.code} に参加中</h3>
        <div class="live-row"><button id="leaveLessonBtn" class="secondary-btn" type="button">授業から退出</button></div>
      </div>`;
      document.getElementById("leaveLessonBtn").addEventListener("click",()=>{leaveLiveLesson();renderHome();});
    }else{
      panel.innerHTML=`<div class="live-card card">
        <p class="eyebrow">LIVE CLASSROOM</p>
        <h3>📱 先生と一緒に進める授業に参加</h3>
        <p>電子黒板に表示された6桁の授業コードを入力してください。</p>
        <div class="live-row">
          <input id="lessonCodeInput" class="live-input" inputmode="numeric" maxlength="6" placeholder="123456" aria-label="6桁の授業コード">
          <button id="joinLessonBtn" class="primary-btn" type="button">授業に参加</button>
          <span id="liveStudentMsg" class="live-message"></span>
        </div>
      </div>`;
      const input=document.getElementById("lessonCodeInput");
      input.addEventListener("input",()=>{input.value=input.value.replace(/\D/g,"").slice(0,6);});
      const join=async()=>{
        const msg=document.getElementById("liveStudentMsg"),btn=document.getElementById("joinLessonBtn");
        btn.disabled=true;msg.textContent="接続しています…";
        try{
          await joinLiveLesson(input.value);renderHome();
        }catch(err){
          msg.innerHTML=`<span class="live-error">${err.message}</span>`;btn.disabled=false;
        }
      };
      document.getElementById("joinLessonBtn").addEventListener("click",join);
      input.addEventListener("keydown",e=>{if(e.key==="Enter")join();});
    }
  }
}

function beginTeacherTallyPolling(){
  stopTeacherTallyPolling();
  const poll=async()=>{
    if(!state.liveTeacher || !state.currentScenario || state.pendingChoice) return;
    try{
      const data=await gasJsonp({
        action:"tally",
        code:state.liveTeacher.code,
        sessionId:state.liveTeacher.sessionId,
        scenarioId:state.currentScenario.id,
        stepIndex:String(state.stepIndex)
      },5500);
      if(data && data.ok && Array.isArray(data.counts)){
        state.votes=[Number(data.counts[0]||0),Number(data.counts[1]||0),Number(data.counts[2]||0)];
        updateVoteUI();
      }
    }catch(_){}
    if(state.liveTeacher && state.currentScenario && !state.pendingChoice){
      state.tallyPollTimer=setTimeout(poll,1400);
    }
  };
  poll();
}
function stopTeacherTallyPolling(){
  if(state.tallyPollTimer){clearTimeout(state.tallyPollTimer);state.tallyPollTimer=null;}
}

function beginStudentSessionPolling(fromHome){
  if(!state.liveStudent) return;
  if(state.livePollTimer){clearTimeout(state.livePollTimer);state.livePollTimer=null;}
  const poll=async()=>{
    if(!state.liveStudent) return;
    try{
      const data=await gasJsonp({action:"session",code:state.liveStudent.code},5500);
      if(!data || !data.ok || !data.session || !data.session.active){
        leaveLiveLesson();
        if(document.getElementById("app")){
          app.innerHTML=`<div class="card live-wait-card"><div class="big-icon">🏁</div><h2>授業が終了しました</h2><p>先生がLIVE授業を終了しました。</p><button id="returnHomeAfterLive" class="primary-btn" type="button">ホームへ</button></div>`;
          document.getElementById("returnHomeAfterLive").addEventListener("click",renderHome);
        }
        return;
      }
      const s=data.session;
      if(s.sessionId!==state.liveStudent.sessionId){
        leaveLiveLesson();renderHome();return;
      }
      const old=state.lastLiveSessionState;
      state.lastLiveSessionState=s;

      if(s.scenarioId){
        const sc=scenarios.find(x=>x.id===s.scenarioId);
        if(sc){
          const changed=!state.currentScenario || state.currentScenario.id!==sc.id || state.stepIndex!==Number(s.stepIndex);
          if(changed){
            state.currentScenario=sc;
            state.stepIndex=Number(s.stepIndex)||0;
            state.studentHasVotedKey=null;
            renderStudentScenario();
            return;
          }
          if(state.currentScenario && state.currentScenario.id===sc.id){
            if(!old || old.phase!==s.phase || old.chosenChoice!==s.chosenChoice){
              renderStudentStep();
            }
          }
        }
      }
    }catch(_){}
    if(state.liveStudent) state.livePollTimer=setTimeout(poll,3000 + Math.floor(Math.random()*700));
  };
  poll();
}

function showLiveStudentReveal(index,finished=false){
  const step=state.currentScenario.steps[state.stepIndex],choice=step.choices[index];
  const panel=document.getElementById("decisionPanel");
  panel.innerHTML=`<p class="eyebrow">${finished?"シナリオ終了":"クラスで結果を確認"}</p><div class="outcome-box"><h4>クラスでは ${letter(index)} を選びました</h4><p>${choice.result}</p>
    <div class="live-vote-lock"><p>${finished?"このシナリオは終了です。電子黒板を見ながらクラスで振り返りましょう。":"次の場面は先生が送ります。電子黒板を見ながら話し合いましょう。"}</p></div></div>`;
}

/* mock screen renderer */
function buildMockContent(step){
  const c=step.content||{};
  if(step.type==="post-compose")return `<div class="post"><div class="post-head"><div class="avatar">自</div><div><div class="post-user">${c.user}</div><div class="post-time">投稿を作成中</div></div></div><p>${c.text}</p><div class="post-image">${c.image}</div><div class="reactions"><span>♡ いいね</span><span>💬 コメント</span><span>↗ シェア</span></div></div>`;
  if(step.type==="feed")return `<div class="post"><div class="post-head"><div class="avatar">自</div><div><div class="post-user">あなた</div><div class="post-time">12分前</div></div></div><div class="post-image">放課後の写真</div></div>${c.comments.map((x,i)=>`<div class="notification"><strong>コメント ${i+1}</strong>${x}</div>`).join("")}`;
  if(step.type==="notification"||step.type==="screenshot"||step.type==="assignment"||step.type==="game-offer"||step.type==="gacha"||step.type==="urgent-message")return c.notes.map(x=>`<div class="notification"><strong>画面の情報</strong>${x}</div>`).join("");
  if(step.type==="profile"||step.type==="fake-profile")return `<div class="post"><div class="post-head"><div class="avatar">自</div><div><div class="post-user">プロフィール</div><div class="post-time">公開情報</div></div></div>${c.profile.map(x=>`<p>・${x}</p>`).join("")}</div>`;
  if(step.type==="photo"||step.type==="ai-image")return `<div class="post"><div class="post-head"><div class="avatar">画</div><div><div class="post-user">画像を確認</div></div></div><div class="post-image">${c.image}</div></div>`;
  if(step.type==="dm"||step.type==="group-chat")return `<div class="system-note">${step.type==="dm"?"DM":"グループチャット"}</div>${c.messages.map(m=>`<div class="chat-row"><div class="chat-avatar">友</div><div class="bubble">${m}</div></div>`).join("")}`;
  if(step.type==="night-chat"||step.type==="game-night")return `<div class="clock-card"><div class="clock">${c.time}</div><p>${step.type==="night-chat"?"明日は1時間目からテスト":"明日は学校"}</p></div>${c.messages.map(m=>`<div class="chat-row"><div class="chat-avatar">友</div><div class="bubble">${m}</div></div>`).join("")}`;
  if(step.type==="video")return `<div class="clock-card"><div class="clock">${c.time}</div><p>寝る前のおすすめ動画</p></div>${c.notes.map(n=>`<div class="notification"><strong>▶ 動画</strong>${n}</div>`).join("")}`;
  if(step.type==="morning")return `<div class="post"><div class="post-head"><div class="avatar">朝</div><div><div class="post-user">翌朝の様子</div><div class="post-time">7:58</div></div></div>${c.notes.map(n=>`<p>・${n}</p>`).join("")}</div>`;
  if(step.type==="ai-answer")return `<div class="post"><div class="post-head"><div class="avatar">AI</div><div><div class="post-user">StudyAI</div><div class="post-time">回答</div></div></div><p>${c.ai}</p></div>`;
  return `<div class="notification">場面を確認しよう</div>`;
}

/* result */
function riskLabel(v){if(v<=18)return"よく意識できた";if(v<=42)return"もう少し工夫できる";return"見直したいポイントあり";}
function renderResult(){
  const sc=state.currentScenario,tpl=document.getElementById("resultTemplate");
  app.innerHTML="";app.appendChild(tpl.content.cloneNode(true));
  document.getElementById("resultModeLabel").textContent=state.mode==="teacher"?"クラスで振り返り":"振り返り";
  document.getElementById("timelineLabel").textContent=state.mode==="teacher"?"クラスで選んだ道":"あなたの選択";
  document.getElementById("resultTitle").textContent=sc.resultTitle;
  document.getElementById("resultSummary").textContent=sc.resultSummary;
  const grid=document.getElementById("metricGrid");
  metricDefs.forEach(([key,title,desc])=>{
    const risk=clamp(state.scores[key]),safe=100-risk,div=document.createElement("div");
    div.className="metric-card card";
    div.innerHTML=`<h3>${title}</h3><div class="metric-score">${safe}<span style="font-size:15px"> / 100</span></div><div class="metric-bar"><div style="width:${safe}%"></div></div><p><strong>${riskLabel(risk)}</strong><br>${desc}</p>`;
    grid.appendChild(div);
  });
  const timeline=document.getElementById("choiceTimeline");
  state.choices.forEach(item=>{
    const div=document.createElement("div"),voteText=item.votes?`<br><strong>挙手：</strong>${item.votes.map((v,i)=>`${letter(i)} ${v}人`).join(" / ")}`:"";
    div.className="choice-event";div.innerHTML=`<div class="num">${item.step}</div><div><h4>${item.choice}</h4><p>${item.result}${voteText}</p></div>`;timeline.appendChild(div);
  });
  const rq=document.getElementById("reflectionQuestions");
  sc.reflections.forEach((q,i)=>{const d=document.createElement("div");d.className="reflection-q";d.textContent=`${i+1}. ${q}`;rq.appendChild(d);});
  document.getElementById("retryBtn").addEventListener("click",()=>startScenario(sc.id));
  document.getElementById("nextScenarioBtn").addEventListener("click",renderHome);
  window.scrollTo({top:0,behavior:"smooth"});
}
function bindBack(){document.querySelectorAll(".back-home").forEach(b=>b.addEventListener("click",renderHome));}

setMode(state.mode);renderHome();
