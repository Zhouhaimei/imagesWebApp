const APIError = require('../rest').APIError;
var url = require('url');
var gid = 0;

function nextId() {
    gid++;
    return 't' + gid;
}
function pagination(pageNo, pageSize, array) {
    var offset = (pageNo - 1) * pageSize;
    return (offset + pageSize >= array.length)
        ? array.slice(offset, array.length)
        : array.slice(offset, offset + pageSize);
}
var list = [
    {
        id: nextId(),
        name: '九寨沟国家级自然保护区',
        description: '九寨沟位于四川省阿坝藏族羌族自治州九寨沟县境内，地处青藏高原、川西高原、山地向四川盆地过渡地带，南距成都市300多公里，是一条纵深50余千米的山沟谷地，总面积6' +
                '4297公顷，森林覆盖率超过80%。因沟内有树正寨、荷叶寨、则查洼寨等九个藏族村寨坐落在这片高山湖泊群中而得名。',
        img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5' +
                '%2C92%2C30/sign=0e10f0abf1f2b211f0238d1cabe90e5d/b812c8fcc3cec3fde22b31addc88d43' +
                'f869427d4.jpg'
    }, {
        id: nextId(),
        name: '黄山',
        description: '黄山：世界文化与自然双重遗产，世界地质公园，国家AAAAA级旅游景区，国家级风景名胜区，全国文明风景旅游区示范点，中华十大名山，天下第一奇山。',
        img: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C' +
                '5%2C150%2C50/sign=639e17ec0cf431ada8df4b6b2a5fc7ca/f11f3a292df5e0fe480c7b7f5c603' +
                '4a85edf72bc.jpg'
    }, {
        id: nextId(),
        name: '桂林',
        description: '桂林，简称桂，是中华人民共和国国际旅游城市、世界著名的风景游览城市、国际旅游航空枢纽、万年智慧圣地；国务院批复确定的国际旅游胜地、 [1-3]  国家可持续发展' +
                '议程创新示范区；联合国世界旅游组织亚太旅游协会旅游趋势与展望国际论坛永久举办地、中央军委桂林联勤保障中心驻所。',
        img: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C' +
                '5%2C116%2C38/sign=842298b408fa513d45a7648c5c043e9e/8644ebf81a4c510fcc54ef7260592' +
                '52dd52aa5c1.jpg'
    }, {
        id: nextId(),
        name: '天安门',
        description: '天安门，坐落在中华人民共和国首都北京市的中心、故宫的南端，与天安门广场以及人民英雄纪念碑、毛主席纪念堂、人民大会堂、中国国家博物馆隔长安街相望，占地面积4800' +
                '平方米，以杰出的建筑艺术和特殊的政治地位为世人所瞩目。',
        img: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C' +
                '5%2C272%2C90/sign=0b50e54ab9119313d34ef7e2045167b2/b90e7bec54e736d1773da78090504' +
                'fc2d562690f.jpg'
    }, {
        id: nextId(),
        name: '长白山脉',
        description: '长白山脉是鸭绿江、松花江和图们江的发源地。是中国满族的发祥地和满族文化圣山。长白山脉的“长白”二字还有一个美好的寓意，即为长相守，到白头，代表着人们对忠贞与美满' +
                '爱情的向往与歌颂。',
        img: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5' +
                '%2C80%2C26/sign=d0531d4356da81cb5aeb8b9f330fbb73/d6ca7bcb0a46f21fc334abe4f1246b6' +
                '00c33ae01.jpg'
    }, {
        id: nextId(),
        name: '泰山',
        description: '泰山又名岱山、岱宗、岱岳、东岳、泰岳，位于山东省中部，隶属于泰安市，绵亘于泰安、济南、淄博三市之间，总面积24200公顷。主峰玉皇顶海拔1545米，气势雄伟磅礴' +
                '，有“五岳之首”、“五岳之长”、“天下第一山”之称。是世界自然与文化遗产，世界地质公园，国家AAAAA级旅游景区，国家级风景名胜区，全国重点文物保护单位，全国文' +
                '明风景旅游区。',
        img: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C' +
                '5%2C272%2C90/sign=9a98f4b89c2bd40756cadbaf1ae0f534/0b55b319ebc4b745d015dd86c4fc1' +
                'e178b821598.jpg'
    }, {
        id: nextId(),
        name: '西湖',
        description: '西湖，位于浙江省杭州市西面，是中国大陆首批国家重点风景名胜区和中国十大风景名胜之一。它是中国大陆主要的观赏性淡水湖泊之一，也是现今《世界遗产名录》中少数几个和中' +
                '国唯一一个湖泊类文化遗产。',
        img: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5' +
                '%2C92%2C30/sign=158c273193dda144ce0464e0d3debbc7/8694a4c27d1ed21b17afadc7a96eddc' +
                '451da3fa9.jpg'
    }, {
        id: nextId(),
        name: '北京故宫',
        description: '北京故宫是中国明清两代的皇家宫殿，旧称为紫禁城，位于北京中轴线的中心，是中国古代宫廷建筑之精华。北京故宫以三大殿为中心，占地面积72万平方米，建筑面积约15万平' +
                '方米，有大小宫殿七十多座，房屋九千余间。是世界上现存规模最大、保存最为完整的木质结构古建筑之一。',
        img: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C45%2C1024' +
                '%2C676%3Bc0%3Dbaike116%2C5%2C5%2C116%2C38/sign=80b69a24d154564ef12abe798eeeb0b6/' +
                '9213b07eca806538c53502249bdda144ad34822e.jpg'
    }, {
        id: nextId(),
        name: '长城 ',
        description: '长城（Great Wall），又称万里长城，是中国古代的军事防御工程，是一道高大、坚固而连绵不断的长垣，用以限隔敌骑的行动。长城不是一道单纯孤立的城墙，而是以城' +
                '墙为主体，同大量的城、障、亭、标相结合的防御体系。',
        img: 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C3%2C1000%' +
                '2C660%3Bc0%3Dbaike116%2C5%2C5%2C116%2C38/sign=97cbdfea22738bd4d06ee8719cbbabe5/d' +
                '043ad4bd11373f0cf7dcfa8a80f4bfbfbed0442.jpg'
    }, {
        id: nextId(),
        name: '雷峰塔',
        description: '雷峰塔（Leifeng Pagoda）又名皇妃塔、西关砖塔，位于浙江省会杭州市西湖风景区南岸夕照山的雷峰上。雷峰塔为吴越忠懿王钱弘俶因黄妃得子建，初名“皇妃塔”' +
                '因地建于雷峰，后人改称“雷峰塔”。',
        img: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C' +
                '5%2C150%2C50/sign=9e1f4ede307adab429dd1311eabdd879/503d269759ee3d6d33fd7a3d45166' +
                'd224f4ade09.jpg'
    }, {
        id: nextId(),
        name: '维多利亚港',
        description: '维多利亚港（英语：Victoria Harbor）简称维港，是位于中华人民共和国香港特别行政区的香港岛和九龙半岛之间的海港。世界三大天然良港之一。由于港阔水深，' +
                '为天然良港，香港亦因而有“东方之珠”、及“世界三大夜景”之美誉 [1]  。',
        img: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C' +
                '5%2C150%2C50/sign=3bb10f4b30dbb6fd3156ed74684dc07d/42a98226cffc1e17e0e937814390f' +
                '603738de928.jpg'

    }, {
        id: nextId(),
        name: '黄果树瀑布',
        description: '黄果树瀑布，即黄果树大瀑布。古称白水河瀑布，亦名“黄葛墅”瀑布或“黄桷树”瀑布，因本地广泛分布着“黄葛榕”而得名。 [1]  位于中国贵州省安顺市镇宁布依族苗族' +
                '自治县，属珠江水系西江干流南盘江支流北盘江支流打帮河的支流可布河下游白水河段水系，为黄果树瀑布群中规模最大的一级瀑布，是世界著名大瀑布之一。以水势浩大著称。瀑布' +
                '高度为77.8米，其中主瀑高67米；瀑布宽101米，其中主瀑顶宽83.3米。黄果树瀑布属喀斯特地貌中的侵蚀裂典型瀑布。',
        img: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C' +
                '5%2C116%2C38/sign=467e6c784ced2e73e8e48e7ee668caee/a8ec8a13632762d087072743a6ec0' +
                '8fa513dc615.jpg'
    }
];

module.exports = {
    'GET /api/list': async(ctx, next) => {
        //   console.log(ctx)   console.log(url.parse(ctx.url).query)
        ctx.rest(list);
    },
    'GET /api/imgdetail': async(ctx, next) => {
        var id = url
            .parse(ctx.url)
            .query
            .split('=')[1]
        var data = list.filter((item, index) => item.id === id)
        ctx.rest(data);
    },

    'POST /api/list': async(ctx, next) => {
        var t = ctx.request.body;
        ctx.rest(pagination(t.pageNo, t.pageSize, list))
    }
}