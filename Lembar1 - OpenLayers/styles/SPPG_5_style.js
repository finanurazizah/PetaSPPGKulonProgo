var size = 0;
var placement = 'point';
function categories_SPPG_5(feature, value, size, resolution, labelText,
    labelFont, labelFill, bufferColor, bufferWidth,
    placement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch (valueStr) {
        case 'SPPG Galur Pandowan':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(253,216,53,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Galur Pandowan 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(255,241,118,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Galur Tirtorahayu 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(255,245,157,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Girimulyo Jatimulyo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(176,190,197,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Kalibawang Banjararum':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(245,124,0,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Kalibawang Banjarharjo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(255,183,77,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Kalibawang Banjarharjo 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(255,224,178,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Kokap Hargorejo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(161,136,127,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Kokap Hargowilis':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(109,76,65,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Lendah Gulurejo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(100,181,246,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Lendah Jatirejo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(187,222,251,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Lendah Jatirejo 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(30,136,229,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Nanggulan Donomulyo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(165,214,167,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Nanggulan Jatisarono':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(200,230,201,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Nanggulan Tanjungharjo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(67,160,71,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Panjatan 1':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(178,235,242,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Panjatan 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(0,151,167,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Panjatan Bugel':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(128,222,234,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Panjatan Tayuban':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(38,198,218,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Pengasih 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(192,202,51,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Pengasih Kedungsari':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(240,244,195,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Pengasih Kedungsari 3':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(158,157,36,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Pengasih Margosari':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(175,180,43,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Pengasih Margosari 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(240,244,195,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Pengasih Tawangsari':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(220,231,117,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Samigaluh Gerbosari':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(225,190,231,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Samigaluh Ngargosari':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(142,36,170,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Samigaluh Pagerharjo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(186,104,200,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Sentolo Kaliagung':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(248,187,208,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Sentolo Polda DIY':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(240,98,146,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Sentolo Sukoreno':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(216,27,96,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Temon Janten':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(211,47,47,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Temon Karangwuluh':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(229,115,115,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Temon Palihan':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(255,205,210,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(232,234,246,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates 3':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(209,217,240,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates Gadingan':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(179,190,229,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates Giripeni':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(159,168,218,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates Karangwuni':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(140,154,224,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates Ngestiharjo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(121,134,203,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates Triharjo':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(92,107,192,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates Triharjo 2':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(63,81,181,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        case 'SPPG Wates Triharjo 4':
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(48,63,159,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
        default:
            return [new ol.style.Style({
                image: new ol.style.RegularShape({
                    radius: 5.0 + size, points: 4,
                    displacement: [0, 0], stroke: new ol.style.Stroke({ color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.5 }), fill: new ol.style.Fill({ color: 'rgba(206,14,52,1.0)' })
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement, bufferColor,
                    bufferWidth)
            })];
            break;
    }
};

var style_SPPG_5 = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("SPPG");
    var labelFont = "11.700000000000001px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }

    var style = categories_SPPG_5(feature, value, size, resolution, labelText,
        labelFont, labelFill, bufferColor,
        bufferWidth, placement);

    return style;
};
