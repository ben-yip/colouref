/**
 * 日本の伝統色470色: http://htmlcss.jp/color/japan.html
 */
let data = [
    {
        "name": "桜色",
        "hex": "#FEF4F4"
    },
    {
        "name": "薄桜",
        "hex": "#FDEFFB"
    },
    {
        "name": "桜鼠",
        "hex": "#E9DFEA"
    },
    {
        "name": "鴇鼠",
        "hex": "#E4D2D3"
    },
    {
        "name": "虹色",
        "hex": "#F6BFB5"
    },
    {
        "name": "珊瑚色",
        "hex": "#F5B1BB"
    },
    {
        "name": "一斤染",
        "hex": "#F5B1B4"
    },
    {
        "name": "宍色",
        "hex": "#EFAB93"
    },
    {
        "name": "紅梅色",
        "hex": "#F2A0A1"
    },
    {
        "name": "薄紅",
        "hex": "#F0908D"
    },
    {
        "name": "甚三紅",
        "hex": "#EE827C"
    },
    {
        "name": "桃色",
        "hex": "#F09199"
    },
    {
        "name": "鴇色",
        "hex": "#F4B3C2"
    },
    {
        "name": "撫子色",
        "hex": "#EEBBCB"
    },
    {
        "name": "灰梅",
        "hex": "#E8D3C7"
    },
    {
        "name": "灰桜",
        "hex": "#E8D3D1"
    },
    {
        "name": "淡紅藤",
        "hex": "#E6CDE3"
    },
    {
        "name": "石竹色",
        "hex": "#E5ABBE"
    },
    {
        "name": "薄紅梅",
        "hex": "#E597B2"
    },
    {
        "name": "桃花色",
        "hex": "#E198B4"
    },
    {
        "name": "朱華",
        "hex": "#EBA0A2"
    },
    {
        "name": "水柿",
        "hex": "#E4AB9B"
    },
    {
        "name": "ときがら茶",
        "hex": "#E09E87"
    },
    {
        "name": "退紅",
        "hex": "#D69090"
    },
    {
        "name": "薄柿",
        "hex": "#D4ACAD"
    },
    {
        "name": "長春色",
        "hex": "#C97586"
    },
    {
        "name": "梅鼠",
        "hex": "#C099A0"
    },
    {
        "name": "鴇浅葱",
        "hex": "#B88884"
    },
    {
        "name": "梅染",
        "hex": "#B48A76"
    },
    {
        "name": "蘇芳香",
        "hex": "#A86965"
    },
    {
        "name": "浅蘇芳",
        "hex": "#A25768"
    },
    {
        "name": "真朱",
        "hex": "#EC6D71"
    },
    {
        "name": "赤紫",
        "hex": "#EB6EA5"
    },
    {
        "name": "躑躅色",
        "hex": "#E95295"
    },
    {
        "name": "牡丹色",
        "hex": "#E7609E"
    },
    {
        "name": "今様色",
        "hex": "#D0576B"
    },
    {
        "name": "中紅",
        "hex": "#C85179"
    },
    {
        "name": "薔薇色",
        "hex": "#E9546B"
    },
    {
        "name": "韓紅",
        "hex": "#E95464"
    },
    {
        "name": "銀朱",
        "hex": "#C85554"
    },
    {
        "name": "赤紅",
        "hex": "#C53D43"
    },
    {
        "name": "紅緋",
        "hex": "#E83929"
    },
    {
        "name": "赤",
        "hex": "#E60033"
    },
    {
        "name": "猩々緋",
        "hex": "#E2041B"
    },
    {
        "name": "紅",
        "hex": "#D7003A"
    },
    {
        "name": "深緋",
        "hex": "#C9171E"
    },
    {
        "name": "緋色",
        "hex": "#D3381C"
    },
    {
        "name": "赤丹",
        "hex": "#CE5242"
    },
    {
        "name": "紅赤",
        "hex": "#D9333F"
    },
    {
        "name": "臙脂",
        "hex": "#B94047"
    },
    {
        "name": "朱緋",
        "hex": "#BA2636"
    },
    {
        "name": "茜色",
        "hex": "#B7282E"
    },
    {
        "name": "紅海老茶",
        "hex": "#A73836"
    },
    {
        "name": "蘇芳",
        "hex": "#9E3D3F"
    },
    {
        "name": "真紅",
        "hex": "#A22041"
    },
    {
        "name": "濃紅",
        "hex": "#A22041"
    },
    {
        "name": "苺色",
        "hex": "#A23A52"
    },
    {
        "name": "象牙色",
        "hex": "#F8F4E6"
    },
    {
        "name": "練色",
        "hex": "#EDE4CD"
    },
    {
        "name": "灰白色",
        "hex": "#E9E4D4"
    },
    {
        "name": "蒸栗色",
        "hex": "#EBE1A9"
    },
    {
        "name": "女郎花",
        "hex": "#F2F2B0"
    },
    {
        "name": "枯草色",
        "hex": "#E4DC8A"
    },
    {
        "name": "淡黄",
        "hex": "#F8E58C"
    },
    {
        "name": "白茶",
        "hex": "#DDBB99"
    },
    {
        "name": "赤白橡",
        "hex": "#D7A98C"
    },
    {
        "name": "洗柿",
        "hex": "#F2C9AC"
    },
    {
        "name": "鳥の子色",
        "hex": "#FFF1CF"
    },
    {
        "name": "蜂蜜色",
        "hex": "#FDDEA5"
    },
    {
        "name": "肌色",
        "hex": "#FCE2C4"
    },
    {
        "name": "薄卵色",
        "hex": "#FDE8D0"
    },
    {
        "name": "雄黄",
        "hex": "#F9C89B"
    },
    {
        "name": "洒落柿",
        "hex": "#F7BD8F"
    },
    {
        "name": "赤香",
        "hex": "#F6B894"
    },
    {
        "name": "砥粉色",
        "hex": "#F4DDA5"
    },
    {
        "name": "肉色",
        "hex": "#F1BF99"
    },
    {
        "name": "人色",
        "hex": "#F1BF99"
    },
    {
        "name": "丁子色",
        "hex": "#EFCD9A"
    },
    {
        "name": "香色",
        "hex": "#EFCD9A"
    },
    {
        "name": "薄香",
        "hex": "#F0CFA0"
    },
    {
        "name": "浅黄",
        "hex": "#EDD3A1"
    },
    {
        "name": "枯色",
        "hex": "#E0C38C"
    },
    {
        "name": "淡香",
        "hex": "#F3BF88"
    },
    {
        "name": "杏色",
        "hex": "#F7B977"
    },
    {
        "name": "東雲色",
        "hex": "#F19072"
    },
    {
        "name": "曙色",
        "hex": "#F19072"
    },
    {
        "name": "珊瑚朱色",
        "hex": "#EE836F"
    },
    {
        "name": "深支子",
        "hex": "#EB9B6F"
    },
    {
        "name": "浅緋",
        "hex": "#DF7163"
    },
    {
        "name": "真赭",
        "hex": "#D57C6B"
    },
    {
        "name": "洗朱",
        "hex": "#D0826C"
    },
    {
        "name": "遠州茶",
        "hex": "#CA8269"
    },
    {
        "name": "紅樺色",
        "hex": "#BB5548"
    },
    {
        "name": "赭",
        "hex": "#AB6953"
    },
    {
        "name": "蘇飛",
        "hex": "#CE7B51"
    },
    {
        "name": "小豆色",
        "hex": "#96514E"
    },
    {
        "name": "枯茶",
        "hex": "#8D6445"
    },
    {
        "name": "飴色",
        "hex": "#DEB064"
    },
    {
        "name": "駱駝色",
        "hex": "#BF7945"
    },
    {
        "name": "土色",
        "hex": "#BC7634"
    },
    {
        "name": "黄唐茶",
        "hex": "#B98C44"
    },
    {
        "name": "桑染",
        "hex": "#B79B5B"
    },
    {
        "name": "櫨色",
        "hex": "#B77B57"
    },
    {
        "name": "黄橡",
        "hex": "#B68D4C"
    },
    {
        "name": "丁字染",
        "hex": "#AD7D4C"
    },
    {
        "name": "香染",
        "hex": "#AD7D4C"
    },
    {
        "name": "枇杷茶",
        "hex": "#AE7C4F"
    },
    {
        "name": "芝翫茶",
        "hex": "#AD7E4E"
    },
    {
        "name": "焦香",
        "hex": "#AE7C58"
    },
    {
        "name": "胡桃色",
        "hex": "#A86F4C"
    },
    {
        "name": "渋紙色",
        "hex": "#946243"
    },
    {
        "name": "朽葉色",
        "hex": "#917347"
    },
    {
        "name": "桑茶",
        "hex": "#956F29"
    },
    {
        "name": "路考茶",
        "hex": "#8C7042"
    },
    {
        "name": "国防色",
        "hex": "#7B6C3E"
    },
    {
        "name": "伽羅色",
        "hex": "#D8A373"
    },
    {
        "name": "江戸茶",
        "hex": "#CD8C5C"
    },
    {
        "name": "樺色",
        "hex": "#CD5E3C"
    },
    {
        "name": "紅鬱金",
        "hex": "#CB8347"
    },
    {
        "name": "土器色",
        "hex": "#C37854"
    },
    {
        "name": "狐色",
        "hex": "#C38743"
    },
    {
        "name": "黄土色",
        "hex": "#C39143"
    },
    {
        "name": "琥珀色",
        "hex": "#BF783A"
    },
    {
        "name": "赤茶",
        "hex": "#BB5535"
    },
    {
        "name": "代赭",
        "hex": "#BB5520"
    },
    {
        "name": "煉瓦色",
        "hex": "#B55233"
    },
    {
        "name": "雀茶",
        "hex": "#AA4F37"
    },
    {
        "name": "団十郎茶",
        "hex": "#9F563A"
    },
    {
        "name": "柿渋色",
        "hex": "#9F563A"
    },
    {
        "name": "紅鳶",
        "hex": "#9A493F"
    },
    {
        "name": "灰茶",
        "hex": "#98623C"
    },
    {
        "name": "茶色",
        "hex": "#965042"
    },
    {
        "name": "檜皮色",
        "hex": "#965036"
    },
    {
        "name": "鳶色",
        "hex": "#95483F"
    },
    {
        "name": "柿茶",
        "hex": "#954E2A"
    },
    {
        "name": "弁柄色",
        "hex": "#8F2E14"
    },
    {
        "name": "赤錆色",
        "hex": "#8A3319"
    },
    {
        "name": "褐色",
        "hex": "#8A3B00"
    },
    {
        "name": "栗梅",
        "hex": "#852E19"
    },
    {
        "name": "紅檜皮",
        "hex": "#7B4741"
    },
    {
        "name": "海老茶",
        "hex": "#773C30"
    },
    {
        "name": "唐茶",
        "hex": "#783C1D"
    },
    {
        "name": "栗色",
        "hex": "#762F07"
    },
    {
        "name": "赤銅色",
        "hex": "#752100"
    },
    {
        "name": "錆色",
        "hex": "#6C3524"
    },
    {
        "name": "赤褐色",
        "hex": "#683F36"
    },
    {
        "name": "茶褐色",
        "hex": "#664032"
    },
    {
        "name": "栗皮茶",
        "hex": "#6D3C32"
    },
    {
        "name": "黒茶",
        "hex": "#583822"
    },
    {
        "name": "葡萄茶",
        "hex": "#6C2C2F"
    },
    {
        "name": "葡萄色",
        "hex": "#640125"
    },
    {
        "name": "萱草色",
        "hex": "#F8B862"
    },
    {
        "name": "柑子色",
        "hex": "#F6AD49"
    },
    {
        "name": "金茶",
        "hex": "#F39800"
    },
    {
        "name": "蜜柑色",
        "hex": "#F08300"
    },
    {
        "name": "鉛丹色",
        "hex": "#EC6D51"
    },
    {
        "name": "黄丹",
        "hex": "#EE7948"
    },
    {
        "name": "柿色",
        "hex": "#ED6D3D"
    },
    {
        "name": "黄赤",
        "hex": "#EC6800"
    },
    {
        "name": "人参色",
        "hex": "#EC6800"
    },
    {
        "name": "橙色",
        "hex": "#EE7800"
    },
    {
        "name": "照柿",
        "hex": "#EB6238"
    },
    {
        "name": "赤橙",
        "hex": "#EA5506"
    },
    {
        "name": "金赤",
        "hex": "#EA5506"
    },
    {
        "name": "朱色",
        "hex": "#EB6101"
    },
    {
        "name": "小麦色",
        "hex": "#E49E61"
    },
    {
        "name": "丹色",
        "hex": "#E45E32"
    },
    {
        "name": "黄茶",
        "hex": "#E17B34"
    },
    {
        "name": "肉桂色",
        "hex": "#DD7A56"
    },
    {
        "name": "赤朽葉色",
        "hex": "#DB8449"
    },
    {
        "name": "黄櫨染",
        "hex": "#D66A35"
    },
    {
        "name": "蒲公英色",
        "hex": "#FFD900"
    },
    {
        "name": "黄色",
        "hex": "#FFD911"
    },
    {
        "name": "中黄",
        "hex": "#FFEA00"
    },
    {
        "name": "菜の花色",
        "hex": "#FFEC47"
    },
    {
        "name": "黄檗色",
        "hex": "#FEF263"
    },
    {
        "name": "卵色",
        "hex": "#FCD575"
    },
    {
        "name": "花葉色",
        "hex": "#FBD26B"
    },
    {
        "name": "刈安色",
        "hex": "#F5E56B"
    },
    {
        "name": "玉蜀黍色",
        "hex": "#EEC362"
    },
    {
        "name": "金糸雀色",
        "hex": "#EBD842"
    },
    {
        "name": "黄支子色",
        "hex": "#FFDB4F"
    },
    {
        "name": "支子色",
        "hex": "#FBCA4D"
    },
    {
        "name": "向日葵色",
        "hex": "#FCC800"
    },
    {
        "name": "山吹色",
        "hex": "#F8B500"
    },
    {
        "name": "鬱金色",
        "hex": "#FABF14"
    },
    {
        "name": "藤黄",
        "hex": "#F7C114"
    },
    {
        "name": "金色",
        "hex": "#E6B422"
    },
    {
        "name": "黄金",
        "hex": "#E6B400"
    },
    {
        "name": "櫨染",
        "hex": "#D9A624"
    },
    {
        "name": "黄朽葉色",
        "hex": "#D3A24F"
    },
    {
        "name": "山吹茶",
        "hex": "#C89931"
    },
    {
        "name": "芥子色",
        "hex": "#D0AF47"
    },
    {
        "name": "豆がら茶",
        "hex": "#8B9683"
    },
    {
        "name": "麹塵",
        "hex": "#6E7955"
    },
    {
        "name": "山鳩色",
        "hex": "#767C6B"
    },
    {
        "name": "利休鼠",
        "hex": "#888E7E"
    },
    {
        "name": "海松茶",
        "hex": "#5A544B"
    },
    {
        "name": "藍海松茶",
        "hex": "#56564B"
    },
    {
        "name": "藍媚茶",
        "hex": "#555647"
    },
    {
        "name": "千歳茶",
        "hex": "#494A41"
    },
    {
        "name": "岩井茶",
        "hex": "#6B6F59"
    },
    {
        "name": "仙斎茶",
        "hex": "#474B42"
    },
    {
        "name": "黒緑",
        "hex": "#333631"
    },
    {
        "name": "柳煤竹",
        "hex": "#5B6356"
    },
    {
        "name": "樺茶色",
        "hex": "#726250"
    },
    {
        "name": "空五倍子色",
        "hex": "#9D896C"
    },
    {
        "name": "生壁色",
        "hex": "#94846A"
    },
    {
        "name": "肥後煤竹",
        "hex": "#897858"
    },
    {
        "name": "媚茶",
        "hex": "#716246"
    },
    {
        "name": "白橡",
        "hex": "#CBB994"
    },
    {
        "name": "亜麻色",
        "hex": "#D6C6AF"
    },
    {
        "name": "榛色",
        "hex": "#BFA46F"
    },
    {
        "name": "灰汁色",
        "hex": "#9E9478"
    },
    {
        "name": "利休茶",
        "hex": "#A59564"
    },
    {
        "name": "鶯茶",
        "hex": "#715C1F"
    },
    {
        "name": "木蘭色",
        "hex": "#C7B370"
    },
    {
        "name": "砂色",
        "hex": "#DCD3B2"
    },
    {
        "name": "油色",
        "hex": "#A19361"
    },
    {
        "name": "利休色",
        "hex": "#8F8667"
    },
    {
        "name": "梅幸茶",
        "hex": "#887938"
    },
    {
        "name": "璃寛茶",
        "hex": "#6A5D21"
    },
    {
        "name": "黄海松茶",
        "hex": "#918754"
    },
    {
        "name": "菜種油色",
        "hex": "#A69425"
    },
    {
        "name": "青朽葉",
        "hex": "#ADA250"
    },
    {
        "name": "根岸色",
        "hex": "#938B4B"
    },
    {
        "name": "鶸茶",
        "hex": "#8C8861"
    },
    {
        "name": "柳茶",
        "hex": "#A1A46D"
    },
    {
        "name": "海松色",
        "hex": "#726D40"
    },
    {
        "name": "鶯色",
        "hex": "#928C36"
    },
    {
        "name": "緑黄色",
        "hex": "#DCCB18"
    },
    {
        "name": "鶸色",
        "hex": "#D7CF3A"
    },
    {
        "name": "抹茶色",
        "hex": "#C5C56A"
    },
    {
        "name": "若草色",
        "hex": "#C3D825"
    },
    {
        "name": "黄緑",
        "hex": "#B8D200"
    },
    {
        "name": "若芽色",
        "hex": "#E0EBAF"
    },
    {
        "name": "若菜色",
        "hex": "#D8E698"
    },
    {
        "name": "若苗色",
        "hex": "#C7DC68"
    },
    {
        "name": "青丹",
        "hex": "#99AB4E"
    },
    {
        "name": "草色",
        "hex": "#7B8D42"
    },
    {
        "name": "苔色",
        "hex": "#69821B"
    },
    {
        "name": "萌黄",
        "hex": "#AACF53"
    },
    {
        "name": "苗色",
        "hex": "#B0CA71"
    },
    {
        "name": "若葉色",
        "hex": "#B9D08B"
    },
    {
        "name": "松葉色",
        "hex": "#839B5C"
    },
    {
        "name": "夏虫色",
        "hex": "#CEE4AE"
    },
    {
        "name": "鶸萌黄",
        "hex": "#82AE46"
    },
    {
        "name": "柳色",
        "hex": "#A8C97F"
    },
    {
        "name": "青白橡",
        "hex": "#9BA88D"
    },
    {
        "name": "柳鼠",
        "hex": "#C8D5BB"
    },
    {
        "name": "裏葉柳",
        "hex": "#C1D8AC"
    },
    {
        "name": "山葵色",
        "hex": "#A8BF93"
    },
    {
        "name": "老竹色",
        "hex": "#769164"
    },
    {
        "name": "白緑",
        "hex": "#D6E9CA"
    },
    {
        "name": "淡萌黄",
        "hex": "#93CA76"
    },
    {
        "name": "柳染",
        "hex": "#93B881"
    },
    {
        "name": "薄萌葱",
        "hex": "#BADCAD"
    },
    {
        "name": "深川鼠",
        "hex": "#97A791"
    },
    {
        "name": "若緑",
        "hex": "#98D98E"
    },
    {
        "name": "浅緑",
        "hex": "#88CB7F"
    },
    {
        "name": "薄緑",
        "hex": "#69B076"
    },
    {
        "name": "青鈍",
        "hex": "#6B7B6E"
    },
    {
        "name": "青磁鼠",
        "hex": "#BED2C3"
    },
    {
        "name": "薄青",
        "hex": "#93B69C"
    },
    {
        "name": "錆青磁",
        "hex": "#A6C8B2"
    },
    {
        "name": "緑青色",
        "hex": "#47885E"
    },
    {
        "name": "千歳緑",
        "hex": "#316745"
    },
    {
        "name": "若竹色",
        "hex": "#68BE8D"
    },
    {
        "name": "緑",
        "hex": "#3EB370"
    },
    {
        "name": "常磐色",
        "hex": "#007B43"
    },
    {
        "name": "千草鼠",
        "hex": "#BED3CA"
    },
    {
        "name": "千草色",
        "hex": "#92B5A9"
    },
    {
        "name": "青磁色",
        "hex": "#7EBEA5"
    },
    {
        "name": "青竹色",
        "hex": "#7EBEAB"
    },
    {
        "name": "常磐緑",
        "hex": "#028760"
    },
    {
        "name": "木賊色",
        "hex": "#3B7960"
    },
    {
        "name": "天鵞絨",
        "hex": "#2F5D50"
    },
    {
        "name": "虫襖",
        "hex": "#3A5B52"
    },
    {
        "name": "革色",
        "hex": "#475950"
    },
    {
        "name": "深緑",
        "hex": "#00552E"
    },
    {
        "name": "鉄色",
        "hex": "#005243"
    },
    {
        "name": "平和色",
        "hex": "#203700"
    },
    {
        "name": "萌葱色",
        "hex": "#006E50"
    },
    {
        "name": "花緑青",
        "hex": "#00A380"
    },
    {
        "name": "翡翠色",
        "hex": "#38B484"
    },
    {
        "name": "青緑",
        "hex": "#00A498"
    },
    {
        "name": "水浅葱",
        "hex": "#80ABA0"
    },
    {
        "name": "錆浅葱",
        "hex": "#5C929A"
    },
    {
        "name": "青碧",
        "hex": "#478384"
    },
    {
        "name": "御召茶",
        "hex": "#43676B"
    },
    {
        "name": "湊鼠",
        "hex": "#80989B"
    },
    {
        "name": "高麗納戸",
        "hex": "#2C4F54"
    },
    {
        "name": "百入茶",
        "hex": "#1F3134"
    },
    {
        "name": "錆鼠",
        "hex": "#47585C"
    },
    {
        "name": "錆鉄御納戸",
        "hex": "#485859"
    },
    {
        "name": "藍鼠",
        "hex": "#6C848D"
    },
    {
        "name": "錆御納戸",
        "hex": "#53727D"
    },
    {
        "name": "舛花色",
        "hex": "#5B7E91"
    },
    {
        "name": "熨斗目花色",
        "hex": "#426579"
    },
    {
        "name": "御召御納戸",
        "hex": "#4C6473"
    },
    {
        "name": "鉄御納戸",
        "hex": "#455765"
    },
    {
        "name": "紺鼠",
        "hex": "#44617B"
    },
    {
        "name": "藍鉄",
        "hex": "#393F4C"
    },
    {
        "name": "青褐",
        "hex": "#393E4F"
    },
    {
        "name": "褐返",
        "hex": "#203744"
    },
    {
        "name": "褐色",
        "hex": "#4D4C61"
    },
    {
        "name": "月白",
        "hex": "#EAF4FC"
    },
    {
        "name": "白菫色",
        "hex": "#EAEDF7"
    },
    {
        "name": "白花色",
        "hex": "#E8ECEF"
    },
    {
        "name": "藍白",
        "hex": "#EBF6F7"
    },
    {
        "name": "白藍",
        "hex": "#C1E4E9"
    },
    {
        "name": "水色",
        "hex": "#BCE2E8"
    },
    {
        "name": "瓶覗",
        "hex": "#A2D7DD"
    },
    {
        "name": "秘色色",
        "hex": "#ABCED8"
    },
    {
        "name": "空色",
        "hex": "#A0D8EF"
    },
    {
        "name": "勿忘草色",
        "hex": "#89C3EB"
    },
    {
        "name": "青藤色",
        "hex": "#84A2D4"
    },
    {
        "name": "白群",
        "hex": "#83CCD2"
    },
    {
        "name": "浅縹",
        "hex": "#84B9CB"
    },
    {
        "name": "薄花色",
        "hex": "#698AAB"
    },
    {
        "name": "納戸色",
        "hex": "#008899"
    },
    {
        "name": "浅葱色",
        "hex": "#00A3AF"
    },
    {
        "name": "花浅葱",
        "hex": "#2A83A2"
    },
    {
        "name": "新橋色",
        "hex": "#59B9C6"
    },
    {
        "name": "天色",
        "hex": "#2CA9E1"
    },
    {
        "name": "露草色",
        "hex": "#38A1DB"
    },
    {
        "name": "青",
        "hex": "#0095D9"
    },
    {
        "name": "薄藍",
        "hex": "#0094C8"
    },
    {
        "name": "縹色",
        "hex": "#2792C3"
    },
    {
        "name": "紺碧",
        "hex": "#007BBB"
    },
    {
        "name": "薄群青",
        "hex": "#5383C3"
    },
    {
        "name": "薄花桜",
        "hex": "#5A79BA"
    },
    {
        "name": "群青色",
        "hex": "#4C6CB3"
    },
    {
        "name": "杜若色",
        "hex": "#3E62AD"
    },
    {
        "name": "瑠璃色",
        "hex": "#1E50A2"
    },
    {
        "name": "薄縹",
        "hex": "#507EA4"
    },
    {
        "name": "瑠璃紺",
        "hex": "#19448E"
    },
    {
        "name": "紺瑠璃",
        "hex": "#164A84"
    },
    {
        "name": "藍色",
        "hex": "#165E83"
    },
    {
        "name": "青藍",
        "hex": "#274A78"
    },
    {
        "name": "深縹",
        "hex": "#2A4073"
    },
    {
        "name": "紺色",
        "hex": "#223A70"
    },
    {
        "name": "紺青",
        "hex": "#192F60"
    },
    {
        "name": "留紺",
        "hex": "#1C305C"
    },
    {
        "name": "濃藍",
        "hex": "#0F2350"
    },
    {
        "name": "鉄紺",
        "hex": "#17184B"
    },
    {
        "name": "漆黒",
        "hex": "#0D0015"
    },
    {
        "name": "淡藤色",
        "hex": "#BBC8E6"
    },
    {
        "name": "藤色",
        "hex": "#BBBCDE"
    },
    {
        "name": "紅掛空色",
        "hex": "#8491C3"
    },
    {
        "name": "紅碧",
        "hex": "#8491C3"
    },
    {
        "name": "紺桔梗",
        "hex": "#4D5AAF"
    },
    {
        "name": "花色",
        "hex": "#4D5AAF"
    },
    {
        "name": "紺藍",
        "hex": "#4A488E"
    },
    {
        "name": "紅桔梗",
        "hex": "#4D4398"
    },
    {
        "name": "桔梗色",
        "hex": "#5654A2"
    },
    {
        "name": "藤納戸",
        "hex": "#706CAA"
    },
    {
        "name": "紅掛花色",
        "hex": "#68699B"
    },
    {
        "name": "紫苑色",
        "hex": "#867BA9"
    },
    {
        "name": "白藤色",
        "hex": "#DBD0E6"
    },
    {
        "name": "藤紫",
        "hex": "#A59ACA"
    },
    {
        "name": "菫色",
        "hex": "#7058A3"
    },
    {
        "name": "青紫",
        "hex": "#674598"
    },
    {
        "name": "菖蒲色",
        "hex": "#674196"
    },
    {
        "name": "竜胆色",
        "hex": "#9079AD"
    },
    {
        "name": "江戸紫",
        "hex": "#745399"
    },
    {
        "name": "本紫",
        "hex": "#65318E"
    },
    {
        "name": "葡萄色",
        "hex": "#522F60"
    },
    {
        "name": "深紫",
        "hex": "#493759"
    },
    {
        "name": "紫黒",
        "hex": "#2E2930"
    },
    {
        "name": "紫紺",
        "hex": "#460E44"
    },
    {
        "name": "桑の実色",
        "hex": "#55295B"
    },
    {
        "name": "暗紅色",
        "hex": "#74325C"
    },
    {
        "name": "紫",
        "hex": "#884898"
    },
    {
        "name": "楝色",
        "hex": "#9985BB"
    },
    {
        "name": "薄葡萄",
        "hex": "#C0A2C7"
    },
    {
        "name": "古代紫",
        "hex": "#895B8B"
    },
    {
        "name": "茄子紺",
        "hex": "#824883"
    },
    {
        "name": "二藍",
        "hex": "#915C84"
    },
    {
        "name": "京紫",
        "hex": "#9D5B80"
    },
    {
        "name": "蒲葡",
        "hex": "#7A4170"
    },
    {
        "name": "若紫",
        "hex": "#BC64A2"
    },
    {
        "name": "紅紫",
        "hex": "#B44C97"
    },
    {
        "name": "梅紫",
        "hex": "#AA4C8F"
    },
    {
        "name": "菖蒲色",
        "hex": "#CC7EB1"
    },
    {
        "name": "紅藤色",
        "hex": "#CCA6BF"
    },
    {
        "name": "浅紫",
        "hex": "#C4A3BF"
    },
    {
        "name": "紫水晶",
        "hex": "#E7E7EB"
    },
    {
        "name": "薄梅鼠",
        "hex": "#DCD6D9"
    },
    {
        "name": "暁鼠",
        "hex": "#D3CFD9"
    },
    {
        "name": "牡丹鼠",
        "hex": "#D3CCD6"
    },
    {
        "name": "霞色",
        "hex": "#C8C2C6"
    },
    {
        "name": "藤鼠",
        "hex": "#A6A5C4"
    },
    {
        "name": "半色",
        "hex": "#A69ABD"
    },
    {
        "name": "薄色",
        "hex": "#A89DAC"
    },
    {
        "name": "薄鼠",
        "hex": "#9790A4"
    },
    {
        "name": "鳩羽鼠",
        "hex": "#9E8B8E"
    },
    {
        "name": "鳩羽色",
        "hex": "#95859C"
    },
    {
        "name": "桔梗鼠",
        "hex": "#95949A"
    },
    {
        "name": "紫鼠",
        "hex": "#71686C"
    },
    {
        "name": "葡萄鼠",
        "hex": "#705B67"
    },
    {
        "name": "濃色",
        "hex": "#634950"
    },
    {
        "name": "紫鳶",
        "hex": "#5F414B"
    },
    {
        "name": "濃鼠",
        "hex": "#4F455C"
    },
    {
        "name": "藤煤竹",
        "hex": "#5A5359"
    },
    {
        "name": "滅紫",
        "hex": "#594255"
    },
    {
        "name": "紅消鼠",
        "hex": "#524748"
    },
    {
        "name": "似せ紫",
        "hex": "#513743"
    },
    {
        "name": "灰黄緑",
        "hex": "#E6EAE3"
    },
    {
        "name": "蕎麦切色",
        "hex": "#D4DCD6"
    },
    {
        "name": "薄雲鼠",
        "hex": "#D4DCDA"
    },
    {
        "name": "枯野色",
        "hex": "#D3CBC6"
    },
    {
        "name": "潤色",
        "hex": "#C8C2BE"
    },
    {
        "name": "利休白茶",
        "hex": "#B3ADA0"
    },
    {
        "name": "茶鼠",
        "hex": "#A99E93"
    },
    {
        "name": "胡桃染",
        "hex": "#A58F86"
    },
    {
        "name": "江戸鼠",
        "hex": "#928178"
    },
    {
        "name": "煤色",
        "hex": "#887F7A"
    },
    {
        "name": "丁子茶",
        "hex": "#B4866B"
    },
    {
        "name": "柴染",
        "hex": "#B28C6E"
    },
    {
        "name": "宗伝唐茶",
        "hex": "#A16D5D"
    },
    {
        "name": "砺茶",
        "hex": "#9F6F55"
    },
    {
        "name": "煎茶色",
        "hex": "#8C6450"
    },
    {
        "name": "銀煤竹",
        "hex": "#856859"
    },
    {
        "name": "黄枯茶",
        "hex": "#765C47"
    },
    {
        "name": "煤竹色",
        "hex": "#6F514C"
    },
    {
        "name": "焦茶",
        "hex": "#6F4B3E"
    },
    {
        "name": "黒橡",
        "hex": "#544A47"
    },
    {
        "name": "憲法色",
        "hex": "#543F32"
    },
    {
        "name": "涅色",
        "hex": "#554738"
    },
    {
        "name": "檳榔子染",
        "hex": "#433D3C"
    },
    {
        "name": "黒鳶",
        "hex": "#432F2F"
    },
    {
        "name": "赤墨",
        "hex": "#3F312B"
    },
    {
        "name": "黒紅",
        "hex": "#302833"
    },
    {
        "name": "白",
        "hex": "#FFFFFF"
    },
    {
        "name": "胡粉色",
        "hex": "#FFFFFC"
    },
    {
        "name": "卯の花色",
        "hex": "#F7FCFE"
    },
    {
        "name": "白磁",
        "hex": "#F8FBF8"
    },
    {
        "name": "生成り色",
        "hex": "#FBFAF5"
    },
    {
        "name": "乳白色",
        "hex": "#F3F3F3"
    },
    {
        "name": "白練",
        "hex": "#F3F3F2"
    },
    {
        "name": "素色",
        "hex": "#EAE5E3"
    },
    {
        "name": "白梅鼠",
        "hex": "#E5E4E6"
    },
    {
        "name": "白鼠",
        "hex": "#DCDDDD"
    },
    {
        "name": "絹鼠",
        "hex": "#DDDCD6"
    },
    {
        "name": "灰青",
        "hex": "#C0C6C9"
    },
    {
        "name": "銀鼠",
        "hex": "#AFAFB0"
    },
    {
        "name": "薄鈍",
        "hex": "#ADADAD"
    },
    {
        "name": "薄墨色",
        "hex": "#A3A3A2"
    },
    {
        "name": "錫色",
        "hex": "#9EA1A3"
    },
    {
        "name": "素鼠",
        "hex": "#9FA0A0"
    },
    {
        "name": "鼠色",
        "hex": "#949495"
    },
    {
        "name": "源氏鼠",
        "hex": "#888084"
    },
    {
        "name": "灰色",
        "hex": "#7D7D7D"
    },
    {
        "name": "鉛色",
        "hex": "#7B7C7D"
    },
    {
        "name": "鈍色",
        "hex": "#727171"
    },
    {
        "name": "墨",
        "hex": "#595857"
    },
    {
        "name": "丼鼠",
        "hex": "#595455"
    },
    {
        "name": "消炭色",
        "hex": "#524E4D"
    },
    {
        "name": "藍墨茶",
        "hex": "#474A4D"
    },
    {
        "name": "羊羹色",
        "hex": "#383C3C"
    },
    {
        "name": "蝋色",
        "hex": "#2B2B2B"
    },
    {
        "name": "黒",
        "hex": "#2B2B2B"
    },
    {
        "name": "烏羽色",
        "hex": "#180614"
    },
    {
        "name": "鉄黒",
        "hex": "#281A14"
    },
    {
        "name": "濡羽色",
        "hex": "#000B00"
    },
    {
        "name": "黒壇",
        "hex": "#250D00"
    },
    {
        "name": "憲法黒茶",
        "hex": "#241A08"
    },
    {
        "name": "暗黒色",
        "hex": "#16160E"
    },
    {
        "name": "武将色",
        "hex": "#000000"
    }
];

try {
    module.exports = data;
} catch (err) {
}