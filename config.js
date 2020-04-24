// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "hi！李依婷小盆友",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "祝你",
        "岁岁年年 万喜万般宜",
        "祝你",
        "sing shen fai lo (生辰快乐）！",
        "생일 축하합니다！",
        "お诞生日おめでとうございます！",
        "С днем рождения！",
        "Alles Gute Zum Geburtstag！",
        "iFeliz cumpleaños！",
        "Buon Compleanno！",
        "Hongera！",
        "Fortuna dies natalis！",
        "Grattis pa fodelsedagen！",
        "Happy birthday！",
        "没有啦！,
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "hi！李依婷小盆友": "./imgs/16.jpg",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "祝你": "./imgs/2.jpg",
        "岁岁年年 万喜万般宜": "./imgs/1.jpg",
        "祝你": "./imgs/17.jpg",
        "sing shen fai lo (生辰快乐）！": "./imgs/3.jpg",
        "생일 축하합니다！": "./imgs/4.jpg",
        "お诞生日おめでとうございます！": "./imgs/5.jpg",
        "С днем рождения！": "./imgs/6.jpg",
        "Alles Gute Zum Geburtstag！": "./imgs/7.jpg",
        "iFeliz cumpleaños！": "./imgs/8.jpg",
        "Buon Compleanno！": "./imgs/9.jpg",
        "Hongera！": "./imgs/10.jpg",
        "Fortuna dies natalis！": "./imgs/11.jpg",
        "Grattis pa fodelsedagen！": "./imgs/12.jpg",
        "Happy birthday！": "./imgs/13.jpg",
        "没有啦！": "./imgs/14.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "横幅",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
