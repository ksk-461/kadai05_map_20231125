const tourStops = [
    {
        position: { lat: 43.1084097, lng: 141.3383695 },
        id: "N01",
        name: "麻生",
        door: "右",
        restroom: "改札内",
        url: "https://www.city.sapporo.jp/st/subway/ekikonaizu/documents/sapporo.pdf"
    }, {
        position: { lat: 43.1008609, lng: 141.3418875 },
        id: "N02",
        name: "北34条",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0899615, lng: 141.3446436 },
        id: "N03",
        name: "北24条",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.081577, lng: 141.3467425 },
        id: "N04",
        name: "北18条",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0747575, lng: 141.3484953 },
        id: "N05",
        name: "北12条",
        door: "左",
        restroom: "改札内"
    }, {
        position: { lat: 43.0679978, lng: 141.3511417 },
        id: "N06",
        name: "さっぽろ",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.0601472, lng: 141.352223 },
        id: "N07",
        name: "大通",
        door: "左",
        restroom: "改札内／改札外"
    }, {
        position: { lat: 43.0554512, lng: 141.3533139 },
        id: "N08",
        name: "すすきの",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0484332, lng: 141.3551586 },
        id: "N09",
        name: "中島公園",
        door: "左",
        restroom: "改札内"
    }, {
        position: { lat: 43.0403976, lng: 141.355759 },
        id: "N10",
        name: "幌平橋",
        door: "左",
        restroom: "改札内"
    }, {
        position: { lat: 43.0376569, lng: 141.3609502 },
        id: "N11",
        name: "中の島",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0345376, lng: 141.3683138 },
        id: "N12",
        name: "平岸",
        door: "左",
        restroom: "改札内"
    }, {
        position: { lat: 43.0267795, lng: 141.3713423 },
        id: "N13",
        name: "南平岸",
        door: "右",
        restroom: "改札内"
    }, {
        position: { lat: 43.0168122, lng: 141.3673217 },
        id: "N14",
        name: "澄川",
        door: "右",
        restroom: "改札内／改札外"
    }, {
        position: { lat: 43.0060106, lng: 141.3647713 },
        id: "N15",
        name: "自衛隊前",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 42.9912369, lng: 141.3584284 },
        id: "N16",
        name: "真駒内",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.08932, lng: 141.2757 },
        id: "T01",
        name: "宮の沢",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.0811683, lng: 141.2907903 },
        id: "T02",
        name: "発寒南",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.0755475, lng: 141.3042342 },
        id: "T03",
        name: "琴似",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.070139, lng: 141.314407 },
        id: "T04",
        name: "二十四軒",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0610376, lng: 141.3145771 },
        id: "T05",
        name: "西28丁目",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0555951, lng: 141.3182692 },
        id: "T06",
        name: "円山公園",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0572083, lng: 141.3302988 },
        id: "T07",
        name: "西18丁目",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0586226, lng: 141.341109 },
        id: "T08",
        name: "西11丁目",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.0603472, lng: 141.353723 },
        id: "T09",
        name: "大通",
        door: "右",
        restroom: "改札内／改札外"
    }, {
        position: { lat: 43.0613254, lng: 141.3604141 },
        id: "T10",
        name: "バスセンター前",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.0567284, lng: 141.3734212 },
        id: "T11",
        name: "菊水",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0517949, lng: 141.3847861 },
        id: "T12",
        name: "東札幌",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0462964, lng: 141.3959125 },
        id: "T13",
        name: "白石",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.0403321, lng: 141.4110779 },
        id: "T14",
        name: "南郷7丁目",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.0357059, lng: 141.4227809 },
        id: "T15",
        name: "南郷13丁目",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0304945, lng: 141.4347131 },
        id: "T16",
        name: "南郷18丁目",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.02731, lng: 141.4528 },
        id: "T17",
        name: "大谷地",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0321649, lng: 141.4642854 },
        id: "T18",
        name: "ひばりが丘",
        door: "左",
        restroom: "改札外"
    }, {
        position: { lat: 43.0385362, lng: 141.4738982 },
        id: "T19",
        name: "新さっぽろ",
        door: "右",
        restroom: "改札外"
    }, {
        position: { lat: 43.1130391, lng: 141.3671084 },
        id: "H01",
        name: "栄町",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.1048068, lng: 141.3690872 },
        id: "H02",
        name: "新道東",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.094267, lng: 141.3716283 },
        id: "H03",
        name: "元町",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.082365, lng: 141.374338 },
        id: "H04",
        name: "環状通東",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.078171, lng: 141.364978 },
        id: "H05",
        name: "東区役所前",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.0768068, lng: 141.3549245 },
        id: "H06",
        name: "北13条東",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.0681978, lng: 141.3534417 },
        id: "H07",
        name: "さっぽろ",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.0605472, lng: 141.355423 },
        id: "H08",
        name: "大通",
        door: "",
        restroom: "改札内／改札外"
    }, {
        position: { lat: 43.0547877, lng: 141.3567871 },
        id: "H09",
        name: "豊水すすきの",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.0474994, lng: 141.3690212 },
        id: "H10",
        name: "学園前",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.041992, lng: 141.376344 },
        id: "H11",
        name: "豊平公園",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.0362046, lng: 141.3853399 },
        id: "H12",
        name: "美園",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.0301224, lng: 141.396617 },
        id: "H13",
        name: "月寒中央",
        door: "",
        restroom: "改札外"
    }, {
        position: { lat: 43.0214519, lng: 141.4032696 },
        id: "H14",
        name: "福住",
        door: "",
        restroom: "改札外"
    },
]