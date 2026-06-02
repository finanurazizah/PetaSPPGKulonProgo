var wms_layers = [];
var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
    title: 'ESRI World Topo',
    type: 'base',
    source: new ol.source.XYZ({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    })
});

var lyr_OSMStandard_1 = new ol.layer.Tile({
    title: 'OSM Standard',
    type: 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var lyr_GoogleSatellite_2 = new ol.layer.Tile({
    title: 'Google Satellite',
    type: 'base',
    source: new ol.source.XYZ({
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

lyr_ESRIWorldTopo_0.setVisible(true);
lyr_OSMStandard_1.setVisible(false);
lyr_GoogleSatellite_2.setVisible(false);

var format_Sekolah_SPPG_1 = new ol.format.GeoJSON();
var features_Sekolah_SPPG_1 = format_Sekolah_SPPG_1.readFeatures(json_Sekolah_SPPG_1,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_SPPG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_SPPG_1.addFeatures(features_Sekolah_SPPG_1);
var lyr_Sekolah_SPPG_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_SPPG_1,
    style: style_Sekolah_SPPG_1,
    popuplayertitle: 'Sekolah_SPPG',
    interactive: false,
    title: '<img src="styles/legend/Sekolah_SPPG_1.png" /> Sekolah_SPPG'
});
var format_BatasKapanewon_2 = new ol.format.GeoJSON();
var features_BatasKapanewon_2 = format_BatasKapanewon_2.readFeatures(json_BatasKapanewon_2,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_BatasKapanewon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKapanewon_2.addFeatures(features_BatasKapanewon_2);
var lyr_BatasKapanewon_2 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_BatasKapanewon_2,
    style: style_BatasKapanewon_2,
    popuplayertitle: 'Batas Kapanewon',
    interactive: false,
    title: '<img src="styles/legend/BatasKapanewon_2.png" /> Batas Kapanewon'
});
var format_S_GalurPandowan_4 = new ol.format.GeoJSON();
var features_S_GalurPandowan_4 = format_S_GalurPandowan_4.readFeatures(json_S_GalurPandowan_4,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_GalurPandowan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_GalurPandowan_4.addFeatures(features_S_GalurPandowan_4);
var lyr_S_GalurPandowan_4 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_GalurPandowan_4,
    style: style_S_GalurPandowan_4,
    popuplayertitle: 'S_Galur Pandowan',
    interactive: false,
    title: 'S_Galur Pandowan<br />\
    <img src="styles/legend/S_GalurPandowan_4_0.png" /> Dekat<br />\
    <img src="styles/legend/S_GalurPandowan_4_1.png" /> Sedang<br />\
    <img src="styles/legend/S_GalurPandowan_4_2.png" /> Jauh<br />' });
var format_Sekolah_5 = new ol.format.GeoJSON();
var features_Sekolah_5 = format_Sekolah_5.readFeatures(json_Sekolah_5,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_5.addFeatures(features_Sekolah_5);
var lyr_Sekolah_5 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_5,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_5.png" /> Sekolah'
});
var format_SPPG_6 = new ol.format.GeoJSON();
var features_SPPG_6 = format_SPPG_6.readFeatures(json_SPPG_6,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_6.addFeatures(features_SPPG_6);
var lyr_SPPG_6 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_6,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_6.png" /> SPPG'
});
var format_S_GalurPandowan2_7 = new ol.format.GeoJSON();
var features_S_GalurPandowan2_7 = format_S_GalurPandowan2_7.readFeatures(json_S_GalurPandowan2_7,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_GalurPandowan2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_GalurPandowan2_7.addFeatures(features_S_GalurPandowan2_7);
var lyr_S_GalurPandowan2_7 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_GalurPandowan2_7,
    style: style_S_GalurPandowan2_7,
    popuplayertitle: 'S_Galur Pandowan 2',
    interactive: false,
    title: 'S_Galur Pandowan 2<br />\
    <img src="styles/legend/S_GalurPandowan2_7_0.png" /> Dekat<br />\
    <img src="styles/legend/S_GalurPandowan2_7_1.png" /> Sedang<br />\
    <img src="styles/legend/S_GalurPandowan2_7_2.png" /> Jauh<br />' });
var format_Sekolah_8 = new ol.format.GeoJSON();
var features_Sekolah_8 = format_Sekolah_8.readFeatures(json_Sekolah_8,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_8.addFeatures(features_Sekolah_8);
var lyr_Sekolah_8 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_8,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_8.png" /> Sekolah'
});
var format_SPPG_9 = new ol.format.GeoJSON();
var features_SPPG_9 = format_SPPG_9.readFeatures(json_SPPG_9,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_9.addFeatures(features_SPPG_9);
var lyr_SPPG_9 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_9,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_9.png" /> SPPG'
});
var format_S_GalurTirtorahayu2_10 = new ol.format.GeoJSON();
var features_S_GalurTirtorahayu2_10 = format_S_GalurTirtorahayu2_10.readFeatures(json_S_GalurTirtorahayu2_10,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_GalurTirtorahayu2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_GalurTirtorahayu2_10.addFeatures(features_S_GalurTirtorahayu2_10);
var lyr_S_GalurTirtorahayu2_10 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_GalurTirtorahayu2_10,
    style: style_S_GalurTirtorahayu2_10,
    popuplayertitle: 'S_Galur Tirtorahayu 2',
    interactive: false,
    title: 'S_Galur Tirtorahayu 2<br />\
    <img src="styles/legend/S_GalurTirtorahayu2_10_0.png" /> Dekat<br />\
    <img src="styles/legend/S_GalurTirtorahayu2_10_1.png" /> Sedang<br />\
    <img src="styles/legend/S_GalurTirtorahayu2_10_2.png" /> Jauh<br />' });
var format_Sekolah_11 = new ol.format.GeoJSON();
var features_Sekolah_11 = format_Sekolah_11.readFeatures(json_Sekolah_11,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_11.addFeatures(features_Sekolah_11);
var lyr_Sekolah_11 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_11,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_11.png" /> Sekolah'
});
var format_SPPG_12 = new ol.format.GeoJSON();
var features_SPPG_12 = format_SPPG_12.readFeatures(json_SPPG_12,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_12.addFeatures(features_SPPG_12);
var lyr_SPPG_12 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_12,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_12.png" /> SPPG'
});
var format_S_GirimulyoJatimulyo_13 = new ol.format.GeoJSON();
var features_S_GirimulyoJatimulyo_13 = format_S_GirimulyoJatimulyo_13.readFeatures(json_S_GirimulyoJatimulyo_13,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_GirimulyoJatimulyo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_GirimulyoJatimulyo_13.addFeatures(features_S_GirimulyoJatimulyo_13);
var lyr_S_GirimulyoJatimulyo_13 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_GirimulyoJatimulyo_13,
    style: style_S_GirimulyoJatimulyo_13,
    popuplayertitle: 'S_Girimulyo Jatimulyo',
    interactive: false,
    title: 'S_Girimulyo Jatimulyo<br />\
    <img src="styles/legend/S_GirimulyoJatimulyo_13_0.png" /> Dekat<br />\
    <img src="styles/legend/S_GirimulyoJatimulyo_13_1.png" /> Sedang<br />\
    <img src="styles/legend/S_GirimulyoJatimulyo_13_2.png" /> Jauh<br />' });
var format_Sekolah_14 = new ol.format.GeoJSON();
var features_Sekolah_14 = format_Sekolah_14.readFeatures(json_Sekolah_14,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_14.addFeatures(features_Sekolah_14);
var lyr_Sekolah_14 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_14,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_14.png" /> Sekolah'
});
var format_SPPG_15 = new ol.format.GeoJSON();
var features_SPPG_15 = format_SPPG_15.readFeatures(json_SPPG_15,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_15.addFeatures(features_SPPG_15);
var lyr_SPPG_15 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_15,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_15.png" /> SPPG'
});
var format_S_KalibawangBanjararum_16 = new ol.format.GeoJSON();
var features_S_KalibawangBanjararum_16 = format_S_KalibawangBanjararum_16.readFeatures(json_S_KalibawangBanjararum_16,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_KalibawangBanjararum_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_KalibawangBanjararum_16.addFeatures(features_S_KalibawangBanjararum_16);
var lyr_S_KalibawangBanjararum_16 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_KalibawangBanjararum_16,
    style: style_S_KalibawangBanjararum_16,
    popuplayertitle: 'S_Kalibawang Banjararum',
    interactive: false,
    title: 'S_Kalibawang Banjararum<br />\
    <img src="styles/legend/S_KalibawangBanjararum_16_0.png" /> Dekat<br />\
    <img src="styles/legend/S_KalibawangBanjararum_16_1.png" /> Sedang<br />\
    <img src="styles/legend/S_KalibawangBanjararum_16_2.png" /> Jauh<br />' });
var format_Sekolah_17 = new ol.format.GeoJSON();
var features_Sekolah_17 = format_Sekolah_17.readFeatures(json_Sekolah_17,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_17.addFeatures(features_Sekolah_17);
var lyr_Sekolah_17 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_17,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_17.png" /> Sekolah'
});
var format_SPPG_18 = new ol.format.GeoJSON();
var features_SPPG_18 = format_SPPG_18.readFeatures(json_SPPG_18,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_18.addFeatures(features_SPPG_18);
var lyr_SPPG_18 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_18,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_18.png" /> SPPG'
});
var format_S_KalibawangBanjarharjo_19 = new ol.format.GeoJSON();
var features_S_KalibawangBanjarharjo_19 = format_S_KalibawangBanjarharjo_19.readFeatures(json_S_KalibawangBanjarharjo_19,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_KalibawangBanjarharjo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_KalibawangBanjarharjo_19.addFeatures(features_S_KalibawangBanjarharjo_19);
var lyr_S_KalibawangBanjarharjo_19 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_KalibawangBanjarharjo_19,
    style: style_S_KalibawangBanjarharjo_19,
    popuplayertitle: 'S_Kalibawang Banjarharjo',
    interactive: false,
    title: 'S_Kalibawang Banjarharjo<br />\
    <img src="styles/legend/S_KalibawangBanjarharjo_19_0.png" /> Dekat<br />\
    <img src="styles/legend/S_KalibawangBanjarharjo_19_1.png" /> Sedang<br />\
    <img src="styles/legend/S_KalibawangBanjarharjo_19_2.png" /> Jauh<br />' });
var format_Sekolah_20 = new ol.format.GeoJSON();
var features_Sekolah_20 = format_Sekolah_20.readFeatures(json_Sekolah_20,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_20.addFeatures(features_Sekolah_20);
var lyr_Sekolah_20 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_20,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_20.png" /> Sekolah'
});
var format_SPPG_21 = new ol.format.GeoJSON();
var features_SPPG_21 = format_SPPG_21.readFeatures(json_SPPG_21,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_21.addFeatures(features_SPPG_21);
var lyr_SPPG_21 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_21,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_21.png" /> SPPG'
});
var format_S_KalibawangBanjarharjo2_22 = new ol.format.GeoJSON();
var features_S_KalibawangBanjarharjo2_22 = format_S_KalibawangBanjarharjo2_22.readFeatures(json_S_KalibawangBanjarharjo2_22,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_KalibawangBanjarharjo2_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_KalibawangBanjarharjo2_22.addFeatures(features_S_KalibawangBanjarharjo2_22);
var lyr_S_KalibawangBanjarharjo2_22 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_KalibawangBanjarharjo2_22,
    style: style_S_KalibawangBanjarharjo2_22,
    popuplayertitle: 'S_Kalibawang Banjarharjo 2',
    interactive: false,
    title: 'S_Kalibawang Banjarharjo 2<br />\
    <img src="styles/legend/S_KalibawangBanjarharjo2_22_0.png" /> Dekat<br />\
    <img src="styles/legend/S_KalibawangBanjarharjo2_22_1.png" /> Sedang<br />\
    <img src="styles/legend/S_KalibawangBanjarharjo2_22_2.png" /> Jauh<br />' });
var format_Sekolah_23 = new ol.format.GeoJSON();
var features_Sekolah_23 = format_Sekolah_23.readFeatures(json_Sekolah_23,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_23.addFeatures(features_Sekolah_23);
var lyr_Sekolah_23 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_23,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_23.png" /> Sekolah'
});
var format_SPPG_24 = new ol.format.GeoJSON();
var features_SPPG_24 = format_SPPG_24.readFeatures(json_SPPG_24,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_24.addFeatures(features_SPPG_24);
var lyr_SPPG_24 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_24,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_24.png" /> SPPG'
});
var format_S_KokapHargorejo_25 = new ol.format.GeoJSON();
var features_S_KokapHargorejo_25 = format_S_KokapHargorejo_25.readFeatures(json_S_KokapHargorejo_25,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_KokapHargorejo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_KokapHargorejo_25.addFeatures(features_S_KokapHargorejo_25);
var lyr_S_KokapHargorejo_25 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_KokapHargorejo_25,
    style: style_S_KokapHargorejo_25,
    popuplayertitle: 'S_Kokap Hargorejo',
    interactive: false,
    title: 'S_Kokap Hargorejo<br />\
    <img src="styles/legend/S_KokapHargorejo_25_0.png" /> Dekat<br />\
    <img src="styles/legend/S_KokapHargorejo_25_1.png" /> Sedang<br />\
    <img src="styles/legend/S_KokapHargorejo_25_2.png" /> Jauh<br />' });
var format_Sekolah_26 = new ol.format.GeoJSON();
var features_Sekolah_26 = format_Sekolah_26.readFeatures(json_Sekolah_26,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_26.addFeatures(features_Sekolah_26);
var lyr_Sekolah_26 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_26,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_26.png" /> Sekolah'
});
var format_SPPG_27 = new ol.format.GeoJSON();
var features_SPPG_27 = format_SPPG_27.readFeatures(json_SPPG_27,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_27.addFeatures(features_SPPG_27);
var lyr_SPPG_27 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_27,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_27.png" /> SPPG'
});
var format_S_KokapHargowilis_28 = new ol.format.GeoJSON();
var features_S_KokapHargowilis_28 = format_S_KokapHargowilis_28.readFeatures(json_S_KokapHargowilis_28,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_KokapHargowilis_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_KokapHargowilis_28.addFeatures(features_S_KokapHargowilis_28);
var lyr_S_KokapHargowilis_28 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_KokapHargowilis_28,
    style: style_S_KokapHargowilis_28,
    popuplayertitle: 'S_Kokap Hargowilis',
    interactive: false,
    title: 'S_Kokap Hargowilis<br />\
    <img src="styles/legend/S_KokapHargowilis_28_0.png" /> Dekat<br />\
    <img src="styles/legend/S_KokapHargowilis_28_1.png" /> Sedang<br />\
    <img src="styles/legend/S_KokapHargowilis_28_2.png" /> Jauh<br />' });
var format_Sekolah_29 = new ol.format.GeoJSON();
var features_Sekolah_29 = format_Sekolah_29.readFeatures(json_Sekolah_29,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_29.addFeatures(features_Sekolah_29);
var lyr_Sekolah_29 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_29,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_29.png" /> Sekolah'
});
var format_SPPG_30 = new ol.format.GeoJSON();
var features_SPPG_30 = format_SPPG_30.readFeatures(json_SPPG_30,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_30.addFeatures(features_SPPG_30);
var lyr_SPPG_30 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_30,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_30.png" /> SPPG'
});
var format_S_LendahGulurejo_31 = new ol.format.GeoJSON();
var features_S_LendahGulurejo_31 = format_S_LendahGulurejo_31.readFeatures(json_S_LendahGulurejo_31,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_LendahGulurejo_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_LendahGulurejo_31.addFeatures(features_S_LendahGulurejo_31);
var lyr_S_LendahGulurejo_31 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_LendahGulurejo_31,
    style: style_S_LendahGulurejo_31,
    popuplayertitle: 'S_Lendah Gulurejo',
    interactive: false,
    title: 'S_Lendah Gulurejo<br />\
    <img src="styles/legend/S_LendahGulurejo_31_0.png" /> Dekat<br />\
    <img src="styles/legend/S_LendahGulurejo_31_1.png" /> Sedang<br />\
    <img src="styles/legend/S_LendahGulurejo_31_2.png" /> Jauh<br />' });
var format_Sekolah_32 = new ol.format.GeoJSON();
var features_Sekolah_32 = format_Sekolah_32.readFeatures(json_Sekolah_32,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_32.addFeatures(features_Sekolah_32);
var lyr_Sekolah_32 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_32,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_32.png" /> Sekolah'
});
var format_SPPG_33 = new ol.format.GeoJSON();
var features_SPPG_33 = format_SPPG_33.readFeatures(json_SPPG_33,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_33.addFeatures(features_SPPG_33);
var lyr_SPPG_33 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_33,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_33.png" /> SPPG'
});
var format_S_LendahJatirejo_34 = new ol.format.GeoJSON();
var features_S_LendahJatirejo_34 = format_S_LendahJatirejo_34.readFeatures(json_S_LendahJatirejo_34,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_LendahJatirejo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_LendahJatirejo_34.addFeatures(features_S_LendahJatirejo_34);
var lyr_S_LendahJatirejo_34 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_LendahJatirejo_34,
    style: style_S_LendahJatirejo_34,
    popuplayertitle: 'S_Lendah Jatirejo',
    interactive: false,
    title: 'S_Lendah Jatirejo<br />\
    <img src="styles/legend/S_LendahJatirejo_34_0.png" /> Dekat<br />\
    <img src="styles/legend/S_LendahJatirejo_34_1.png" /> Sedang<br />\
    <img src="styles/legend/S_LendahJatirejo_34_2.png" /> Jauh<br />' });
var format_Sekolah_35 = new ol.format.GeoJSON();
var features_Sekolah_35 = format_Sekolah_35.readFeatures(json_Sekolah_35,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_35.addFeatures(features_Sekolah_35);
var lyr_Sekolah_35 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_35,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_35.png" /> Sekolah'
});
var format_SPPG_36 = new ol.format.GeoJSON();
var features_SPPG_36 = format_SPPG_36.readFeatures(json_SPPG_36,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_36.addFeatures(features_SPPG_36);
var lyr_SPPG_36 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_36,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_36.png" /> SPPG'
});
var format_S_LendahJatirejo2_37 = new ol.format.GeoJSON();
var features_S_LendahJatirejo2_37 = format_S_LendahJatirejo2_37.readFeatures(json_S_LendahJatirejo2_37,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_LendahJatirejo2_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_LendahJatirejo2_37.addFeatures(features_S_LendahJatirejo2_37);
var lyr_S_LendahJatirejo2_37 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_LendahJatirejo2_37,
    style: style_S_LendahJatirejo2_37,
    popuplayertitle: 'S_Lendah Jatirejo 2',
    interactive: false,
    title: 'S_Lendah Jatirejo 2<br />\
    <img src="styles/legend/S_LendahJatirejo2_37_0.png" /> Dekat<br />\
    <img src="styles/legend/S_LendahJatirejo2_37_1.png" /> Sedang<br />\
    <img src="styles/legend/S_LendahJatirejo2_37_2.png" /> Jauh<br />' });
var format_Sekolah_38 = new ol.format.GeoJSON();
var features_Sekolah_38 = format_Sekolah_38.readFeatures(json_Sekolah_38,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_38.addFeatures(features_Sekolah_38);
var lyr_Sekolah_38 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_38,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_38.png" /> Sekolah'
});
var format_SPPG_39 = new ol.format.GeoJSON();
var features_SPPG_39 = format_SPPG_39.readFeatures(json_SPPG_39,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_39.addFeatures(features_SPPG_39);
var lyr_SPPG_39 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_39,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_39.png" /> SPPG'
});
var format_S_NanggulanDonomulyo_40 = new ol.format.GeoJSON();
var features_S_NanggulanDonomulyo_40 = format_S_NanggulanDonomulyo_40.readFeatures(json_S_NanggulanDonomulyo_40,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_NanggulanDonomulyo_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_NanggulanDonomulyo_40.addFeatures(features_S_NanggulanDonomulyo_40);
var lyr_S_NanggulanDonomulyo_40 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_NanggulanDonomulyo_40,
    style: style_S_NanggulanDonomulyo_40,
    popuplayertitle: 'S_Nanggulan Donomulyo',
    interactive: false,
    title: 'S_Nanggulan Donomulyo<br />\
    <img src="styles/legend/S_NanggulanDonomulyo_40_0.png" /> Dekat<br />\
    <img src="styles/legend/S_NanggulanDonomulyo_40_1.png" /> Sedang<br />\
    <img src="styles/legend/S_NanggulanDonomulyo_40_2.png" /> Jauh<br />' });
var format_Sekolah_41 = new ol.format.GeoJSON();
var features_Sekolah_41 = format_Sekolah_41.readFeatures(json_Sekolah_41,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_41.addFeatures(features_Sekolah_41);
var lyr_Sekolah_41 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_41,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_41.png" /> Sekolah'
});
var format_SPPG_42 = new ol.format.GeoJSON();
var features_SPPG_42 = format_SPPG_42.readFeatures(json_SPPG_42,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_42.addFeatures(features_SPPG_42);
var lyr_SPPG_42 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_42,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_42.png" /> SPPG'
});
var format_S_NanggulanJatisarono_43 = new ol.format.GeoJSON();
var features_S_NanggulanJatisarono_43 = format_S_NanggulanJatisarono_43.readFeatures(json_S_NanggulanJatisarono_43,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_NanggulanJatisarono_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_NanggulanJatisarono_43.addFeatures(features_S_NanggulanJatisarono_43);
var lyr_S_NanggulanJatisarono_43 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_NanggulanJatisarono_43,
    style: style_S_NanggulanJatisarono_43,
    popuplayertitle: 'S_Nanggulan Jatisarono',
    interactive: false,
    title: 'S_Nanggulan Jatisarono<br />\
    <img src="styles/legend/S_NanggulanJatisarono_43_0.png" /> Dekat<br />\
    <img src="styles/legend/S_NanggulanJatisarono_43_1.png" /> Sedang<br />\
    <img src="styles/legend/S_NanggulanJatisarono_43_2.png" /> Jauh<br />' });
var format_Sekolah_44 = new ol.format.GeoJSON();
var features_Sekolah_44 = format_Sekolah_44.readFeatures(json_Sekolah_44,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_44.addFeatures(features_Sekolah_44);
var lyr_Sekolah_44 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_44,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_44.png" /> Sekolah'
});
var format_SPPG_45 = new ol.format.GeoJSON();
var features_SPPG_45 = format_SPPG_45.readFeatures(json_SPPG_45,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_45.addFeatures(features_SPPG_45);
var lyr_SPPG_45 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_45,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_45.png" /> SPPG'
});
var format_S_NanggulanTanjungharjo_46 = new ol.format.GeoJSON();
var features_S_NanggulanTanjungharjo_46 = format_S_NanggulanTanjungharjo_46.readFeatures(json_S_NanggulanTanjungharjo_46,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_NanggulanTanjungharjo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_NanggulanTanjungharjo_46.addFeatures(features_S_NanggulanTanjungharjo_46);
var lyr_S_NanggulanTanjungharjo_46 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_NanggulanTanjungharjo_46,
    style: style_S_NanggulanTanjungharjo_46,
    popuplayertitle: 'S_Nanggulan Tanjungharjo',
    interactive: false,
    title: 'S_Nanggulan Tanjungharjo<br />\
    <img src="styles/legend/S_NanggulanTanjungharjo_46_0.png" /> Dekat<br />\
    <img src="styles/legend/S_NanggulanTanjungharjo_46_1.png" /> Sedang<br />\
    <img src="styles/legend/S_NanggulanTanjungharjo_46_2.png" /> Jauh<br />' });
var format_Sekolah_47 = new ol.format.GeoJSON();
var features_Sekolah_47 = format_Sekolah_47.readFeatures(json_Sekolah_47,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_47.addFeatures(features_Sekolah_47);
var lyr_Sekolah_47 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_47,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_47.png" /> Sekolah'
});
var format_SPPG_48 = new ol.format.GeoJSON();
var features_SPPG_48 = format_SPPG_48.readFeatures(json_SPPG_48,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_48.addFeatures(features_SPPG_48);
var lyr_SPPG_48 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_48,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_48.png" /> SPPG'
});
var format_S_Panjatan1_49 = new ol.format.GeoJSON();
var features_S_Panjatan1_49 = format_S_Panjatan1_49.readFeatures(json_S_Panjatan1_49,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_Panjatan1_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Panjatan1_49.addFeatures(features_S_Panjatan1_49);
var lyr_S_Panjatan1_49 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_Panjatan1_49,
    style: style_S_Panjatan1_49,
    popuplayertitle: 'S_Panjatan 1',
    interactive: false,
    title: 'S_Panjatan 1<br />\
    <img src="styles/legend/S_Panjatan1_49_0.png" /> Dekat<br />\
    <img src="styles/legend/S_Panjatan1_49_1.png" /> Sedang<br />\
    <img src="styles/legend/S_Panjatan1_49_2.png" /> Jauh<br />' });
var format_Sekolah_50 = new ol.format.GeoJSON();
var features_Sekolah_50 = format_Sekolah_50.readFeatures(json_Sekolah_50,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_50.addFeatures(features_Sekolah_50);
var lyr_Sekolah_50 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_50,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_50.png" /> Sekolah'
});
var format_SPPG_51 = new ol.format.GeoJSON();
var features_SPPG_51 = format_SPPG_51.readFeatures(json_SPPG_51,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_51.addFeatures(features_SPPG_51);
var lyr_SPPG_51 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_51,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_51.png" /> SPPG'
});
var format_S_Panjatan2_52 = new ol.format.GeoJSON();
var features_S_Panjatan2_52 = format_S_Panjatan2_52.readFeatures(json_S_Panjatan2_52,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_Panjatan2_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Panjatan2_52.addFeatures(features_S_Panjatan2_52);
var lyr_S_Panjatan2_52 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_Panjatan2_52,
    style: style_S_Panjatan2_52,
    popuplayertitle: 'S_Panjatan 2',
    interactive: false,
    title: 'S_Panjatan 2<br />\
    <img src="styles/legend/S_Panjatan2_52_0.png" /> Dekat<br />\
    <img src="styles/legend/S_Panjatan2_52_1.png" /> Sedang<br />\
    <img src="styles/legend/S_Panjatan2_52_2.png" /> Jauh<br />' });
var format_Sekolah_53 = new ol.format.GeoJSON();
var features_Sekolah_53 = format_Sekolah_53.readFeatures(json_Sekolah_53,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_53.addFeatures(features_Sekolah_53);
var lyr_Sekolah_53 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_53,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_53.png" /> Sekolah'
});
var format_SPPG_54 = new ol.format.GeoJSON();
var features_SPPG_54 = format_SPPG_54.readFeatures(json_SPPG_54,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_54.addFeatures(features_SPPG_54);
var lyr_SPPG_54 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_54,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_54.png" /> SPPG'
});
var format_S_PanjatanBugel_55 = new ol.format.GeoJSON();
var features_S_PanjatanBugel_55 = format_S_PanjatanBugel_55.readFeatures(json_S_PanjatanBugel_55,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_PanjatanBugel_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_PanjatanBugel_55.addFeatures(features_S_PanjatanBugel_55);
var lyr_S_PanjatanBugel_55 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_PanjatanBugel_55,
    style: style_S_PanjatanBugel_55,
    popuplayertitle: 'S_Panjatan Bugel',
    interactive: false,
    title: 'S_Panjatan Bugel<br />\
    <img src="styles/legend/S_PanjatanBugel_55_0.png" /> Dekat<br />\
    <img src="styles/legend/S_PanjatanBugel_55_1.png" /> Sedang<br />\
    <img src="styles/legend/S_PanjatanBugel_55_2.png" /> Jauh<br />' });
var format_Sekolah_56 = new ol.format.GeoJSON();
var features_Sekolah_56 = format_Sekolah_56.readFeatures(json_Sekolah_56,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_56.addFeatures(features_Sekolah_56);
var lyr_Sekolah_56 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_56,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_56.png" /> Sekolah'
});
var format_SPPG_57 = new ol.format.GeoJSON();
var features_SPPG_57 = format_SPPG_57.readFeatures(json_SPPG_57,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_57.addFeatures(features_SPPG_57);
var lyr_SPPG_57 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_57,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_57.png" /> SPPG'
});
var format_S_PanjatanTayuban_58 = new ol.format.GeoJSON();
var features_S_PanjatanTayuban_58 = format_S_PanjatanTayuban_58.readFeatures(json_S_PanjatanTayuban_58,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_PanjatanTayuban_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_PanjatanTayuban_58.addFeatures(features_S_PanjatanTayuban_58);
var lyr_S_PanjatanTayuban_58 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_PanjatanTayuban_58,
    style: style_S_PanjatanTayuban_58,
    popuplayertitle: 'S_Panjatan Tayuban',
    interactive: false,
    title: 'S_Panjatan Tayuban<br />\
    <img src="styles/legend/S_PanjatanTayuban_58_0.png" /> Dekat<br />\
    <img src="styles/legend/S_PanjatanTayuban_58_1.png" /> Sedang<br />\
    <img src="styles/legend/S_PanjatanTayuban_58_2.png" /> Jauh<br />' });
var format_Sekolah_59 = new ol.format.GeoJSON();
var features_Sekolah_59 = format_Sekolah_59.readFeatures(json_Sekolah_59,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_59.addFeatures(features_Sekolah_59);
var lyr_Sekolah_59 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_59,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_59.png" /> Sekolah'
});
var format_SPPG_60 = new ol.format.GeoJSON();
var features_SPPG_60 = format_SPPG_60.readFeatures(json_SPPG_60,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_60.addFeatures(features_SPPG_60);
var lyr_SPPG_60 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_60,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_60.png" /> SPPG'
});
var format_S_Pengasih2_61 = new ol.format.GeoJSON();
var features_S_Pengasih2_61 = format_S_Pengasih2_61.readFeatures(json_S_Pengasih2_61,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_Pengasih2_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Pengasih2_61.addFeatures(features_S_Pengasih2_61);
var lyr_S_Pengasih2_61 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_Pengasih2_61,
    style: style_S_Pengasih2_61,
    popuplayertitle: 'S_Pengasih 2',
    interactive: false,
    title: 'S_Pengasih 2<br />\
    <img src="styles/legend/S_Pengasih2_61_0.png" /> Dekat<br />\
    <img src="styles/legend/S_Pengasih2_61_1.png" /> Sedang<br />\
    <img src="styles/legend/S_Pengasih2_61_2.png" /> Jauh<br />' });
var format_Sekolah_62 = new ol.format.GeoJSON();
var features_Sekolah_62 = format_Sekolah_62.readFeatures(json_Sekolah_62,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_62.addFeatures(features_Sekolah_62);
var lyr_Sekolah_62 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_62,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_62.png" /> Sekolah'
});
var format_SPPG_63 = new ol.format.GeoJSON();
var features_SPPG_63 = format_SPPG_63.readFeatures(json_SPPG_63,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_63.addFeatures(features_SPPG_63);
var lyr_SPPG_63 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_63,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_63.png" /> SPPG'
});
var format_S_PengasihKedungsari_64 = new ol.format.GeoJSON();
var features_S_PengasihKedungsari_64 = format_S_PengasihKedungsari_64.readFeatures(json_S_PengasihKedungsari_64,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_PengasihKedungsari_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_PengasihKedungsari_64.addFeatures(features_S_PengasihKedungsari_64);
var lyr_S_PengasihKedungsari_64 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_PengasihKedungsari_64,
    style: style_S_PengasihKedungsari_64,
    popuplayertitle: 'S_Pengasih Kedungsari',
    interactive: false,
    title: 'S_Pengasih Kedungsari<br />\
    <img src="styles/legend/S_PengasihKedungsari_64_0.png" /> Dekat<br />\
    <img src="styles/legend/S_PengasihKedungsari_64_1.png" /> Sedang<br />\
    <img src="styles/legend/S_PengasihKedungsari_64_2.png" /> Jauh<br />' });
var format_Sekolah_65 = new ol.format.GeoJSON();
var features_Sekolah_65 = format_Sekolah_65.readFeatures(json_Sekolah_65,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_65.addFeatures(features_Sekolah_65);
var lyr_Sekolah_65 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_65,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_65.png" /> Sekolah'
});
var format_SPPG_66 = new ol.format.GeoJSON();
var features_SPPG_66 = format_SPPG_66.readFeatures(json_SPPG_66,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_66.addFeatures(features_SPPG_66);
var lyr_SPPG_66 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_66,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_66.png" /> SPPG'
});
var format_S_PengasihKedungsari3_67 = new ol.format.GeoJSON();
var features_S_PengasihKedungsari3_67 = format_S_PengasihKedungsari3_67.readFeatures(json_S_PengasihKedungsari3_67,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_PengasihKedungsari3_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_PengasihKedungsari3_67.addFeatures(features_S_PengasihKedungsari3_67);
var lyr_S_PengasihKedungsari3_67 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_PengasihKedungsari3_67,
    style: style_S_PengasihKedungsari3_67,
    popuplayertitle: 'S_Pengasih Kedungsari 3',
    interactive: false,
    title: 'S_Pengasih Kedungsari 3<br />\
    <img src="styles/legend/S_PengasihKedungsari3_67_0.png" /> Dekat<br />\
    <img src="styles/legend/S_PengasihKedungsari3_67_1.png" /> Sedang<br />\
    <img src="styles/legend/S_PengasihKedungsari3_67_2.png" /> Jauh<br />' });
var format_Sekolah_68 = new ol.format.GeoJSON();
var features_Sekolah_68 = format_Sekolah_68.readFeatures(json_Sekolah_68,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_68.addFeatures(features_Sekolah_68);
var lyr_Sekolah_68 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_68,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_68.png" /> Sekolah'
});
var format_SPPG_69 = new ol.format.GeoJSON();
var features_SPPG_69 = format_SPPG_69.readFeatures(json_SPPG_69,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_69.addFeatures(features_SPPG_69);
var lyr_SPPG_69 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_69,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_69.png" /> SPPG'
});
var format_S_PengasihMargosari_70 = new ol.format.GeoJSON();
var features_S_PengasihMargosari_70 = format_S_PengasihMargosari_70.readFeatures(json_S_PengasihMargosari_70,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_PengasihMargosari_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_PengasihMargosari_70.addFeatures(features_S_PengasihMargosari_70);
var lyr_S_PengasihMargosari_70 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_PengasihMargosari_70,
    style: style_S_PengasihMargosari_70,
    popuplayertitle: 'S_Pengasih Margosari',
    interactive: false,
    title: 'S_Pengasih Margosari<br />\
    <img src="styles/legend/S_PengasihMargosari_70_0.png" /> Dekat<br />\
    <img src="styles/legend/S_PengasihMargosari_70_1.png" /> Sedang<br />\
    <img src="styles/legend/S_PengasihMargosari_70_2.png" /> Jauh<br />' });
var format_Sekolah_71 = new ol.format.GeoJSON();
var features_Sekolah_71 = format_Sekolah_71.readFeatures(json_Sekolah_71,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_71.addFeatures(features_Sekolah_71);
var lyr_Sekolah_71 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_71,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_71.png" /> Sekolah'
});
var format_SPPG_72 = new ol.format.GeoJSON();
var features_SPPG_72 = format_SPPG_72.readFeatures(json_SPPG_72,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_72.addFeatures(features_SPPG_72);
var lyr_SPPG_72 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_72,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_72.png" /> SPPG'
});
var format_S_PengasihMargosari2_73 = new ol.format.GeoJSON();
var features_S_PengasihMargosari2_73 = format_S_PengasihMargosari2_73.readFeatures(json_S_PengasihMargosari2_73,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_PengasihMargosari2_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_PengasihMargosari2_73.addFeatures(features_S_PengasihMargosari2_73);
var lyr_S_PengasihMargosari2_73 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_PengasihMargosari2_73,
    style: style_S_PengasihMargosari2_73,
    popuplayertitle: 'S_Pengasih Margosari 2',
    interactive: false,
    title: 'S_Pengasih Margosari 2<br />\
    <img src="styles/legend/S_PengasihMargosari2_73_0.png" /> Dekat<br />\
    <img src="styles/legend/S_PengasihMargosari2_73_1.png" /> Sedang<br />\
    <img src="styles/legend/S_PengasihMargosari2_73_2.png" /> Jauh<br />' });
var format_Sekolah_74 = new ol.format.GeoJSON();
var features_Sekolah_74 = format_Sekolah_74.readFeatures(json_Sekolah_74,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_74.addFeatures(features_Sekolah_74);
var lyr_Sekolah_74 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_74,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_74.png" /> Sekolah'
});
var format_SPPG_75 = new ol.format.GeoJSON();
var features_SPPG_75 = format_SPPG_75.readFeatures(json_SPPG_75,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_75.addFeatures(features_SPPG_75);
var lyr_SPPG_75 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_75,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_75.png" /> SPPG'
});
var format_S_PengasihTawangsari_76 = new ol.format.GeoJSON();
var features_S_PengasihTawangsari_76 = format_S_PengasihTawangsari_76.readFeatures(json_S_PengasihTawangsari_76,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_PengasihTawangsari_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_PengasihTawangsari_76.addFeatures(features_S_PengasihTawangsari_76);
var lyr_S_PengasihTawangsari_76 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_PengasihTawangsari_76,
    style: style_S_PengasihTawangsari_76,
    popuplayertitle: 'S_Pengasih Tawangsari',
    interactive: false,
    title: 'S_Pengasih Tawangsari<br />\
    <img src="styles/legend/S_PengasihTawangsari_76_0.png" /> Dekat<br />\
    <img src="styles/legend/S_PengasihTawangsari_76_1.png" /> Sedang<br />\
    <img src="styles/legend/S_PengasihTawangsari_76_2.png" /> Jauh<br />' });
var format_Sekolah_77 = new ol.format.GeoJSON();
var features_Sekolah_77 = format_Sekolah_77.readFeatures(json_Sekolah_77,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_77.addFeatures(features_Sekolah_77);
var lyr_Sekolah_77 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_77,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_77.png" /> Sekolah'
});
var format_SPPG_78 = new ol.format.GeoJSON();
var features_SPPG_78 = format_SPPG_78.readFeatures(json_SPPG_78,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_78.addFeatures(features_SPPG_78);
var lyr_SPPG_78 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_78,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_78.png" /> SPPG'
});
var format_S_SamigaluhGerbosari_79 = new ol.format.GeoJSON();
var features_S_SamigaluhGerbosari_79 = format_S_SamigaluhGerbosari_79.readFeatures(json_S_SamigaluhGerbosari_79,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_SamigaluhGerbosari_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_SamigaluhGerbosari_79.addFeatures(features_S_SamigaluhGerbosari_79);
var lyr_S_SamigaluhGerbosari_79 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_SamigaluhGerbosari_79,
    style: style_S_SamigaluhGerbosari_79,
    popuplayertitle: 'S_Samigaluh Gerbosari',
    interactive: false,
    title: 'S_Samigaluh Gerbosari<br />\
    <img src="styles/legend/S_SamigaluhGerbosari_79_0.png" /> Dekat<br />\
    <img src="styles/legend/S_SamigaluhGerbosari_79_1.png" /> Sedang<br />\
    <img src="styles/legend/S_SamigaluhGerbosari_79_2.png" /> Jauh<br />' });
var format_Sekolah_80 = new ol.format.GeoJSON();
var features_Sekolah_80 = format_Sekolah_80.readFeatures(json_Sekolah_80,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_80.addFeatures(features_Sekolah_80);
var lyr_Sekolah_80 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_80,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_80.png" /> Sekolah'
});
var format_SPPG_81 = new ol.format.GeoJSON();
var features_SPPG_81 = format_SPPG_81.readFeatures(json_SPPG_81,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_81.addFeatures(features_SPPG_81);
var lyr_SPPG_81 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_81,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_81.png" /> SPPG'
});
var format_S_SamigaluhNgargosari_82 = new ol.format.GeoJSON();
var features_S_SamigaluhNgargosari_82 = format_S_SamigaluhNgargosari_82.readFeatures(json_S_SamigaluhNgargosari_82,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_SamigaluhNgargosari_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_SamigaluhNgargosari_82.addFeatures(features_S_SamigaluhNgargosari_82);
var lyr_S_SamigaluhNgargosari_82 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_SamigaluhNgargosari_82,
    style: style_S_SamigaluhNgargosari_82,
    popuplayertitle: 'S_Samigaluh Ngargosari',
    interactive: false,
    title: 'S_Samigaluh Ngargosari<br />\
    <img src="styles/legend/S_SamigaluhNgargosari_82_0.png" /> Dekat<br />\
    <img src="styles/legend/S_SamigaluhNgargosari_82_1.png" /> Sedang<br />\
    <img src="styles/legend/S_SamigaluhNgargosari_82_2.png" /> Jauh<br />' });
var format_Sekolah_83 = new ol.format.GeoJSON();
var features_Sekolah_83 = format_Sekolah_83.readFeatures(json_Sekolah_83,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_83.addFeatures(features_Sekolah_83);
var lyr_Sekolah_83 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_83,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_83.png" /> Sekolah'
});
var format_SPPG_84 = new ol.format.GeoJSON();
var features_SPPG_84 = format_SPPG_84.readFeatures(json_SPPG_84,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_84.addFeatures(features_SPPG_84);
var lyr_SPPG_84 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_84,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_84.png" /> SPPG'
});
var format_S_SamigaluhPagerharjo_85 = new ol.format.GeoJSON();
var features_S_SamigaluhPagerharjo_85 = format_S_SamigaluhPagerharjo_85.readFeatures(json_S_SamigaluhPagerharjo_85,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_SamigaluhPagerharjo_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_SamigaluhPagerharjo_85.addFeatures(features_S_SamigaluhPagerharjo_85);
var lyr_S_SamigaluhPagerharjo_85 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_SamigaluhPagerharjo_85,
    style: style_S_SamigaluhPagerharjo_85,
    popuplayertitle: 'S_Samigaluh Pagerharjo',
    interactive: false,
    title: 'S_Samigaluh Pagerharjo<br />\
    <img src="styles/legend/S_SamigaluhPagerharjo_85_0.png" /> Dekat<br />\
    <img src="styles/legend/S_SamigaluhPagerharjo_85_1.png" /> Sedang<br />\
    <img src="styles/legend/S_SamigaluhPagerharjo_85_2.png" /> Jauh<br />' });
var format_Sekolah_86 = new ol.format.GeoJSON();
var features_Sekolah_86 = format_Sekolah_86.readFeatures(json_Sekolah_86,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_86.addFeatures(features_Sekolah_86);
var lyr_Sekolah_86 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_86,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_86.png" /> Sekolah'
});
var format_SPPG_87 = new ol.format.GeoJSON();
var features_SPPG_87 = format_SPPG_87.readFeatures(json_SPPG_87,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_87.addFeatures(features_SPPG_87);
var lyr_SPPG_87 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_87,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_87.png" /> SPPG'
});
var format_S_SentoloKaliagung_88 = new ol.format.GeoJSON();
var features_S_SentoloKaliagung_88 = format_S_SentoloKaliagung_88.readFeatures(json_S_SentoloKaliagung_88,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_SentoloKaliagung_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_SentoloKaliagung_88.addFeatures(features_S_SentoloKaliagung_88);
var lyr_S_SentoloKaliagung_88 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_SentoloKaliagung_88,
    style: style_S_SentoloKaliagung_88,
    popuplayertitle: 'S_Sentolo Kaliagung',
    interactive: false,
    title: 'S_Sentolo Kaliagung<br />\
    <img src="styles/legend/S_SentoloKaliagung_88_0.png" /> Dekat<br />\
    <img src="styles/legend/S_SentoloKaliagung_88_1.png" /> Sedang<br />\
    <img src="styles/legend/S_SentoloKaliagung_88_2.png" /> Jauh<br />' });
var format_Sekolah_89 = new ol.format.GeoJSON();
var features_Sekolah_89 = format_Sekolah_89.readFeatures(json_Sekolah_89,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_89.addFeatures(features_Sekolah_89);
var lyr_Sekolah_89 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_89,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_89.png" /> Sekolah'
});
var format_SPPG_90 = new ol.format.GeoJSON();
var features_SPPG_90 = format_SPPG_90.readFeatures(json_SPPG_90,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_90.addFeatures(features_SPPG_90);
var lyr_SPPG_90 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_90,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_90.png" /> SPPG'
});
var format_S_SentoloPoldaDIY_91 = new ol.format.GeoJSON();
var features_S_SentoloPoldaDIY_91 = format_S_SentoloPoldaDIY_91.readFeatures(json_S_SentoloPoldaDIY_91,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_SentoloPoldaDIY_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_SentoloPoldaDIY_91.addFeatures(features_S_SentoloPoldaDIY_91);
var lyr_S_SentoloPoldaDIY_91 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_SentoloPoldaDIY_91,
    style: style_S_SentoloPoldaDIY_91,
    popuplayertitle: 'S_Sentolo Polda DIY',
    interactive: false,
    title: 'S_Sentolo Polda DIY<br />\
    <img src="styles/legend/S_SentoloPoldaDIY_91_0.png" /> Dekat<br />\
    <img src="styles/legend/S_SentoloPoldaDIY_91_1.png" /> Sedang<br />\
    <img src="styles/legend/S_SentoloPoldaDIY_91_2.png" /> Jauh<br />' });
var format_Sekolah_92 = new ol.format.GeoJSON();
var features_Sekolah_92 = format_Sekolah_92.readFeatures(json_Sekolah_92,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_92.addFeatures(features_Sekolah_92);
var lyr_Sekolah_92 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_92,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_92.png" /> Sekolah'
});
var format_SPPG_93 = new ol.format.GeoJSON();
var features_SPPG_93 = format_SPPG_93.readFeatures(json_SPPG_93,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_93.addFeatures(features_SPPG_93);
var lyr_SPPG_93 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_93,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_93.png" /> SPPG'
});
var format_S_SentoloSukoreno_94 = new ol.format.GeoJSON();
var features_S_SentoloSukoreno_94 = format_S_SentoloSukoreno_94.readFeatures(json_S_SentoloSukoreno_94,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_SentoloSukoreno_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_SentoloSukoreno_94.addFeatures(features_S_SentoloSukoreno_94);
var lyr_S_SentoloSukoreno_94 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_SentoloSukoreno_94,
    style: style_S_SentoloSukoreno_94,
    popuplayertitle: 'S_Sentolo Sukoreno',
    interactive: false,
    title: 'S_Sentolo Sukoreno<br />\
    <img src="styles/legend/S_SentoloSukoreno_94_0.png" /> Dekat<br />\
    <img src="styles/legend/S_SentoloSukoreno_94_1.png" /> Sedang<br />\
    <img src="styles/legend/S_SentoloSukoreno_94_2.png" /> Jauh<br />' });
var format_Sekolah_95 = new ol.format.GeoJSON();
var features_Sekolah_95 = format_Sekolah_95.readFeatures(json_Sekolah_95,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_95.addFeatures(features_Sekolah_95);
var lyr_Sekolah_95 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_95,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_95.png" /> Sekolah'
});
var format_SPPG_96 = new ol.format.GeoJSON();
var features_SPPG_96 = format_SPPG_96.readFeatures(json_SPPG_96,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_96.addFeatures(features_SPPG_96);
var lyr_SPPG_96 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_96,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_96.png" /> SPPG'
});
var format_S_TemonJanten_97 = new ol.format.GeoJSON();
var features_S_TemonJanten_97 = format_S_TemonJanten_97.readFeatures(json_S_TemonJanten_97,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_TemonJanten_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_TemonJanten_97.addFeatures(features_S_TemonJanten_97);
var lyr_S_TemonJanten_97 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_TemonJanten_97,
    style: style_S_TemonJanten_97,
    popuplayertitle: 'S_Temon Janten',
    interactive: false,
    title: 'S_Temon Janten<br />\
    <img src="styles/legend/S_TemonJanten_97_0.png" /> Dekat<br />\
    <img src="styles/legend/S_TemonJanten_97_1.png" /> Sedang<br />\
    <img src="styles/legend/S_TemonJanten_97_2.png" /> Jauh<br />' });
var format_Sekolah_98 = new ol.format.GeoJSON();
var features_Sekolah_98 = format_Sekolah_98.readFeatures(json_Sekolah_98,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_98.addFeatures(features_Sekolah_98);
var lyr_Sekolah_98 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_98,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_98.png" /> Sekolah'
});
var format_SPPG_99 = new ol.format.GeoJSON();
var features_SPPG_99 = format_SPPG_99.readFeatures(json_SPPG_99,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_99.addFeatures(features_SPPG_99);
var lyr_SPPG_99 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_99,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_99.png" /> SPPG'
});
var format_S_TemonKarangwuluh_100 = new ol.format.GeoJSON();
var features_S_TemonKarangwuluh_100 = format_S_TemonKarangwuluh_100.readFeatures(json_S_TemonKarangwuluh_100,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_TemonKarangwuluh_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_TemonKarangwuluh_100.addFeatures(features_S_TemonKarangwuluh_100);
var lyr_S_TemonKarangwuluh_100 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_TemonKarangwuluh_100,
    style: style_S_TemonKarangwuluh_100,
    popuplayertitle: 'S_Temon Karangwuluh',
    interactive: false,
    title: 'S_Temon Karangwuluh<br />\
    <img src="styles/legend/S_TemonKarangwuluh_100_0.png" /> Dekat<br />\
    <img src="styles/legend/S_TemonKarangwuluh_100_1.png" /> Sedang<br />\
    <img src="styles/legend/S_TemonKarangwuluh_100_2.png" /> Jauh<br />' });
var format_Sekolah_101 = new ol.format.GeoJSON();
var features_Sekolah_101 = format_Sekolah_101.readFeatures(json_Sekolah_101,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_101.addFeatures(features_Sekolah_101);
var lyr_Sekolah_101 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_101,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_101.png" /> Sekolah'
});
var format_SPPG_102 = new ol.format.GeoJSON();
var features_SPPG_102 = format_SPPG_102.readFeatures(json_SPPG_102,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_102.addFeatures(features_SPPG_102);
var lyr_SPPG_102 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_102,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_102.png" /> SPPG'
});
var format_S_TemonPalihan_103 = new ol.format.GeoJSON();
var features_S_TemonPalihan_103 = format_S_TemonPalihan_103.readFeatures(json_S_TemonPalihan_103,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_TemonPalihan_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_TemonPalihan_103.addFeatures(features_S_TemonPalihan_103);
var lyr_S_TemonPalihan_103 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_TemonPalihan_103,
    style: style_S_TemonPalihan_103,
    popuplayertitle: 'S_Temon Palihan',
    interactive: false,
    title: 'S_Temon Palihan<br />\
    <img src="styles/legend/S_TemonPalihan_103_0.png" /> Dekat<br />\
    <img src="styles/legend/S_TemonPalihan_103_1.png" /> Sedang<br />\
    <img src="styles/legend/S_TemonPalihan_103_2.png" /> Jauh<br />' });
var format_Sekolah_104 = new ol.format.GeoJSON();
var features_Sekolah_104 = format_Sekolah_104.readFeatures(json_Sekolah_104,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_104.addFeatures(features_Sekolah_104);
var lyr_Sekolah_104 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_104,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_104.png" /> Sekolah'
});
var format_SPPG_105 = new ol.format.GeoJSON();
var features_SPPG_105 = format_SPPG_105.readFeatures(json_SPPG_105,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_105.addFeatures(features_SPPG_105);
var lyr_SPPG_105 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_105,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_105.png" /> SPPG'
});
var format_S_Wates2_106 = new ol.format.GeoJSON();
var features_S_Wates2_106 = format_S_Wates2_106.readFeatures(json_S_Wates2_106,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_Wates2_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Wates2_106.addFeatures(features_S_Wates2_106);
var lyr_S_Wates2_106 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_Wates2_106,
    style: style_S_Wates2_106,
    popuplayertitle: 'S_Wates 2',
    interactive: false,
    title: 'S_Wates 2<br />\
    <img src="styles/legend/S_Wates2_106_0.png" /> Dekat<br />\
    <img src="styles/legend/S_Wates2_106_1.png" /> Sedang<br />\
    <img src="styles/legend/S_Wates2_106_2.png" /> Jauh<br />' });
var format_Sekolah_107 = new ol.format.GeoJSON();
var features_Sekolah_107 = format_Sekolah_107.readFeatures(json_Sekolah_107,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_107.addFeatures(features_Sekolah_107);
var lyr_Sekolah_107 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_107,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_107.png" /> Sekolah'
});
var format_SPPG_108 = new ol.format.GeoJSON();
var features_SPPG_108 = format_SPPG_108.readFeatures(json_SPPG_108,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_108.addFeatures(features_SPPG_108);
var lyr_SPPG_108 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_108,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_108.png" /> SPPG'
});
var format_S_Wates3_109 = new ol.format.GeoJSON();
var features_S_Wates3_109 = format_S_Wates3_109.readFeatures(json_S_Wates3_109,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_Wates3_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Wates3_109.addFeatures(features_S_Wates3_109);
var lyr_S_Wates3_109 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_Wates3_109,
    style: style_S_Wates3_109,
    popuplayertitle: 'S_Wates 3',
    interactive: false,
    title: 'S_Wates 3<br />\
    <img src="styles/legend/S_Wates3_109_0.png" /> Dekat<br />\
    <img src="styles/legend/S_Wates3_109_1.png" /> Sedang<br />\
    <img src="styles/legend/S_Wates3_109_2.png" /> Jauh<br />' });
var format_Sekolah_110 = new ol.format.GeoJSON();
var features_Sekolah_110 = format_Sekolah_110.readFeatures(json_Sekolah_110,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_110.addFeatures(features_Sekolah_110);
var lyr_Sekolah_110 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_110,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_110.png" /> Sekolah'
});
var format_SPPG_111 = new ol.format.GeoJSON();
var features_SPPG_111 = format_SPPG_111.readFeatures(json_SPPG_111,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_111.addFeatures(features_SPPG_111);
var lyr_SPPG_111 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_111,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_111.png" /> SPPG'
});
var format_S_WatesGadingan_112 = new ol.format.GeoJSON();
var features_S_WatesGadingan_112 = format_S_WatesGadingan_112.readFeatures(json_S_WatesGadingan_112,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_WatesGadingan_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_WatesGadingan_112.addFeatures(features_S_WatesGadingan_112);
var lyr_S_WatesGadingan_112 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_WatesGadingan_112,
    style: style_S_WatesGadingan_112,
    popuplayertitle: 'S_Wates Gadingan',
    interactive: false,
    title: 'S_Wates Gadingan<br />\
    <img src="styles/legend/S_WatesGadingan_112_0.png" /> Dekat<br />\
    <img src="styles/legend/S_WatesGadingan_112_1.png" /> Sedang<br />\
    <img src="styles/legend/S_WatesGadingan_112_2.png" /> Jauh<br />' });
var format_Sekolah_113 = new ol.format.GeoJSON();
var features_Sekolah_113 = format_Sekolah_113.readFeatures(json_Sekolah_113,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_113.addFeatures(features_Sekolah_113);
var lyr_Sekolah_113 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_113,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_113.png" /> Sekolah'
});
var format_SPPG_114 = new ol.format.GeoJSON();
var features_SPPG_114 = format_SPPG_114.readFeatures(json_SPPG_114,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_114.addFeatures(features_SPPG_114);
var lyr_SPPG_114 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_114,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_114.png" /> SPPG'
});
var format_S_WatesGiripenini_115 = new ol.format.GeoJSON();
var features_S_WatesGiripenini_115 = format_S_WatesGiripenini_115.readFeatures(json_S_WatesGiripenini_115,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_WatesGiripenini_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_WatesGiripenini_115.addFeatures(features_S_WatesGiripenini_115);
var lyr_S_WatesGiripenini_115 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_WatesGiripenini_115,
    style: style_S_WatesGiripenini_115,
    popuplayertitle: 'S_Wates Giripenini',
    interactive: false,
    title: 'S_Wates Giripenini<br />\
    <img src="styles/legend/S_WatesGiripenini_115_0.png" /> Dekat<br />\
    <img src="styles/legend/S_WatesGiripenini_115_1.png" /> Sedang<br />\
    <img src="styles/legend/S_WatesGiripenini_115_2.png" /> Jauh<br />' });
var format_Sekolah_116 = new ol.format.GeoJSON();
var features_Sekolah_116 = format_Sekolah_116.readFeatures(json_Sekolah_116,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_116.addFeatures(features_Sekolah_116);
var lyr_Sekolah_116 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_116,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_116.png" /> Sekolah'
});
var format_SPPG_117 = new ol.format.GeoJSON();
var features_SPPG_117 = format_SPPG_117.readFeatures(json_SPPG_117,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_117.addFeatures(features_SPPG_117);
var lyr_SPPG_117 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_117,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_117.png" /> SPPG'
});
var format_S_WatesKarangwuni_118 = new ol.format.GeoJSON();
var features_S_WatesKarangwuni_118 = format_S_WatesKarangwuni_118.readFeatures(json_S_WatesKarangwuni_118,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_WatesKarangwuni_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_WatesKarangwuni_118.addFeatures(features_S_WatesKarangwuni_118);
var lyr_S_WatesKarangwuni_118 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_WatesKarangwuni_118,
    style: style_S_WatesKarangwuni_118,
    popuplayertitle: 'S_Wates Karangwuni',
    interactive: false,
    title: 'S_Wates Karangwuni<br />\
    <img src="styles/legend/S_WatesKarangwuni_118_0.png" /> Dekat<br />\
    <img src="styles/legend/S_WatesKarangwuni_118_1.png" /> Sedang<br />\
    <img src="styles/legend/S_WatesKarangwuni_118_2.png" /> Jauh<br />' });
var format_Sekolah_119 = new ol.format.GeoJSON();
var features_Sekolah_119 = format_Sekolah_119.readFeatures(json_Sekolah_119,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_119.addFeatures(features_Sekolah_119);
var lyr_Sekolah_119 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_119,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_119.png" /> Sekolah'
});
var format_SPPG_120 = new ol.format.GeoJSON();
var features_SPPG_120 = format_SPPG_120.readFeatures(json_SPPG_120,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_120 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_120.addFeatures(features_SPPG_120);
var lyr_SPPG_120 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_120,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_120.png" /> SPPG'
});
var format_S_WatesNgestiharjo_121 = new ol.format.GeoJSON();
var features_S_WatesNgestiharjo_121 = format_S_WatesNgestiharjo_121.readFeatures(json_S_WatesNgestiharjo_121,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_WatesNgestiharjo_121 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_WatesNgestiharjo_121.addFeatures(features_S_WatesNgestiharjo_121);
var lyr_S_WatesNgestiharjo_121 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_WatesNgestiharjo_121,
    style: style_S_WatesNgestiharjo_121,
    popuplayertitle: 'S_Wates Ngestiharjo',
    interactive: false,
    title: 'S_Wates Ngestiharjo<br />\
    <img src="styles/legend/S_WatesNgestiharjo_121_0.png" /> Dekat<br />\
    <img src="styles/legend/S_WatesNgestiharjo_121_1.png" /> Sedang<br />\
    <img src="styles/legend/S_WatesNgestiharjo_121_2.png" /> Jauh<br />' });
var format_Sekolah_122 = new ol.format.GeoJSON();
var features_Sekolah_122 = format_Sekolah_122.readFeatures(json_Sekolah_122,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_122 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_122.addFeatures(features_Sekolah_122);
var lyr_Sekolah_122 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_122,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_122.png" /> Sekolah'
});
var format_SPPG_123 = new ol.format.GeoJSON();
var features_SPPG_123 = format_SPPG_123.readFeatures(json_SPPG_123,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_123 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_123.addFeatures(features_SPPG_123);
var lyr_SPPG_123 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_123,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_123.png" /> SPPG'
});
var format_S_WatesTriharjo_124 = new ol.format.GeoJSON();
var features_S_WatesTriharjo_124 = format_S_WatesTriharjo_124.readFeatures(json_S_WatesTriharjo_124,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_WatesTriharjo_124 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_WatesTriharjo_124.addFeatures(features_S_WatesTriharjo_124);
var lyr_S_WatesTriharjo_124 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_WatesTriharjo_124,
    style: style_S_WatesTriharjo_124,
    popuplayertitle: 'S_Wates Triharjo',
    interactive: false,
    title: 'S_Wates Triharjo<br />\
    <img src="styles/legend/S_WatesTriharjo_124_0.png" /> Dekat<br />\
    <img src="styles/legend/S_WatesTriharjo_124_1.png" /> Sedang<br />\
    <img src="styles/legend/S_WatesTriharjo_124_2.png" /> Jauh<br />' });
var format_Sekolah_125 = new ol.format.GeoJSON();
var features_Sekolah_125 = format_Sekolah_125.readFeatures(json_Sekolah_125,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_125 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_125.addFeatures(features_Sekolah_125);
var lyr_Sekolah_125 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_125,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_125.png" /> Sekolah'
});
var format_SPPG_126 = new ol.format.GeoJSON();
var features_SPPG_126 = format_SPPG_126.readFeatures(json_SPPG_126,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_126 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_126.addFeatures(features_SPPG_126);
var lyr_SPPG_126 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_126,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_126.png" /> SPPG'
});
var format_S_WatesTriharjo2_127 = new ol.format.GeoJSON();
var features_S_WatesTriharjo2_127 = format_S_WatesTriharjo2_127.readFeatures(json_S_WatesTriharjo2_127,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_WatesTriharjo2_127 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_WatesTriharjo2_127.addFeatures(features_S_WatesTriharjo2_127);
var lyr_S_WatesTriharjo2_127 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_WatesTriharjo2_127,
    style: style_S_WatesTriharjo2_127,
    popuplayertitle: 'S_Wates Triharjo 2',
    interactive: false,
    title: 'S_Wates Triharjo 2<br />\
    <img src="styles/legend/S_WatesTriharjo2_127_0.png" /> Dekat<br />\
    <img src="styles/legend/S_WatesTriharjo2_127_1.png" /> Sedang<br />\
    <img src="styles/legend/S_WatesTriharjo2_127_2.png" /> Jauh<br />' });
var format_Sekolah_128 = new ol.format.GeoJSON();
var features_Sekolah_128 = format_Sekolah_128.readFeatures(json_Sekolah_128,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_128 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_128.addFeatures(features_Sekolah_128);
var lyr_Sekolah_128 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_128,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_128.png" /> Sekolah'
});
var format_SPPG_129 = new ol.format.GeoJSON();
var features_SPPG_129 = format_SPPG_129.readFeatures(json_SPPG_129,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_129 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_129.addFeatures(features_SPPG_129);
var lyr_SPPG_129 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_129,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_129.png" /> SPPG'
});
var format_S_WatesTriharjo4_130 = new ol.format.GeoJSON();
var features_S_WatesTriharjo4_130 = format_S_WatesTriharjo4_130.readFeatures(json_S_WatesTriharjo4_130,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_S_WatesTriharjo4_130 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_WatesTriharjo4_130.addFeatures(features_S_WatesTriharjo4_130);
var lyr_S_WatesTriharjo4_130 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_S_WatesTriharjo4_130,
    style: style_S_WatesTriharjo4_130,
    popuplayertitle: 'S_Wates Triharjo 4',
    interactive: false,
    title: 'S_Wates Triharjo 4<br />\
    <img src="styles/legend/S_WatesTriharjo4_130_0.png" /> Dekat<br />\
    <img src="styles/legend/S_WatesTriharjo4_130_1.png" /> Sedang<br />\
    <img src="styles/legend/S_WatesTriharjo4_130_2.png" /> Jauh<br />' });
var format_Sekolah_131 = new ol.format.GeoJSON();
var features_Sekolah_131 = format_Sekolah_131.readFeatures(json_Sekolah_131,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_131 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_131.addFeatures(features_Sekolah_131);
var lyr_Sekolah_131 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_131,
    style: style_Sekolah_74,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: '<img src="styles/legend/Sekolah_131.png" /> Sekolah'
});
var format_SPPG_132 = new ol.format.GeoJSON();
var features_SPPG_132 = format_SPPG_132.readFeatures(json_SPPG_132,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_132 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_132.addFeatures(features_SPPG_132);
var lyr_SPPG_132 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_132,
    style: style_SPPG_75,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: '<img src="styles/legend/SPPG_132.png" /> SPPG'
});
var group_SPPGWatesTriharjo4 = new ol.layer.Group({
    layers: [lyr_S_WatesTriharjo4_130, lyr_Sekolah_131, lyr_SPPG_132,],
    fold: 'close',
    title: 'SPPG Wates Triharjo 4'
});
var group_SPPGWatesTriharjo2 = new ol.layer.Group({
    layers: [lyr_S_WatesTriharjo2_127, lyr_Sekolah_128, lyr_SPPG_129,],
    fold: 'close',
    title: 'SPPG Wates Triharjo 2'
});
var group_SPPGWatesTriharjo = new ol.layer.Group({
    layers: [lyr_S_WatesTriharjo_124, lyr_Sekolah_125, lyr_SPPG_126,],
    fold: 'close',
    title: 'SPPG Wates Triharjo'
});
var group_SPPGWatesNgestiharjo = new ol.layer.Group({
    layers: [lyr_S_WatesNgestiharjo_121, lyr_Sekolah_122, lyr_SPPG_123,],
    fold: 'close',
    title: 'SPPG Wates Ngestiharjo'
});
var group_SPPGWatesKarangwuni = new ol.layer.Group({
    layers: [lyr_S_WatesKarangwuni_118, lyr_Sekolah_119, lyr_SPPG_120,],
    fold: 'close',
    title: 'SPPG Wates Karangwuni'
});
var group_SPPGWatesGiripeni = new ol.layer.Group({
    layers: [lyr_S_WatesGiripenini_115, lyr_Sekolah_116, lyr_SPPG_117,],
    fold: 'close',
    title: 'SPPG Wates Giripeni'
});
var group_SPPGWatesGadingan = new ol.layer.Group({
    layers: [lyr_S_WatesGadingan_112, lyr_Sekolah_113, lyr_SPPG_114,],
    fold: 'close',
    title: 'SPPG Wates Gadingan'
});
var group_SPPGWates3 = new ol.layer.Group({
    layers: [lyr_S_Wates3_109, lyr_Sekolah_110, lyr_SPPG_111,],
    fold: 'close',
    title: 'SPPG Wates 3'
});
var group_SPPGWates2 = new ol.layer.Group({
    layers: [lyr_S_Wates2_106, lyr_Sekolah_107, lyr_SPPG_108,],
    fold: 'close',
    title: 'SPPG Wates 2'
});
var group_SPPGTemonPalihan = new ol.layer.Group({
    layers: [lyr_S_TemonPalihan_103, lyr_Sekolah_104, lyr_SPPG_105,],
    fold: 'close',
    title: 'SPPG Temon Palihan'
});
var group_SPPGTemonKarangwuluh = new ol.layer.Group({
    layers: [lyr_S_TemonKarangwuluh_100, lyr_Sekolah_101, lyr_SPPG_102,],
    fold: 'close',
    title: 'SPPG Temon Karangwuluh'
});
var group_SPPGTemonJanten = new ol.layer.Group({
    layers: [lyr_S_TemonJanten_97, lyr_Sekolah_98, lyr_SPPG_99,],
    fold: 'close',
    title: 'SPPG Temon Janten'
});
var group_SPPGSentoloSukoreno = new ol.layer.Group({
    layers: [lyr_S_SentoloSukoreno_94, lyr_Sekolah_95, lyr_SPPG_96,],
    fold: 'close',
    title: 'SPPG Sentolo Sukoreno'
});
var group_SPPGSentoloPoldaDIY = new ol.layer.Group({
    layers: [lyr_S_SentoloPoldaDIY_91, lyr_Sekolah_92, lyr_SPPG_93,],
    fold: 'close',
    title: 'SPPG Sentolo Polda DIY'
});
var group_SPPGSentoloKaliagung = new ol.layer.Group({
    layers: [lyr_S_SentoloKaliagung_88, lyr_Sekolah_89, lyr_SPPG_90,],
    fold: 'close',
    title: 'SPPG Sentolo Kaliagung'
});
var group_SPPGSamigaluhPagerharjo = new ol.layer.Group({
    layers: [lyr_S_SamigaluhPagerharjo_85, lyr_Sekolah_86, lyr_SPPG_87,],
    fold: 'close',
    title: 'SPPG Samigaluh Pagerharjo'
});
var group_SPPGSamigaluhNgargosari = new ol.layer.Group({
    layers: [lyr_S_SamigaluhNgargosari_82, lyr_Sekolah_83, lyr_SPPG_84,],
    fold: 'close',
    title: 'SPPG Samigaluh Ngargosari'
});
var group_SPPGSamigaluhGerbosari = new ol.layer.Group({
    layers: [lyr_S_SamigaluhGerbosari_79, lyr_Sekolah_80, lyr_SPPG_81,],
    fold: 'close',
    title: 'SPPG Samigaluh Gerbosari'
});
var group_SPPGPengasihTawangsari = new ol.layer.Group({
    layers: [lyr_S_PengasihTawangsari_76, lyr_Sekolah_77, lyr_SPPG_78,],
    fold: 'close',
    title: 'SPPG Pengasih Tawangsari'
});
var group_SPPGPengasihMargosari2 = new ol.layer.Group({
    layers: [lyr_S_PengasihMargosari2_73, lyr_Sekolah_74, lyr_SPPG_75,],
    fold: 'close',
    title: 'SPPG Pengasih Margosari 2'
});
var group_SPPGPengasihMargosari = new ol.layer.Group({
    layers: [lyr_S_PengasihMargosari_70, lyr_Sekolah_71, lyr_SPPG_72,],
    fold: 'close',
    title: 'SPPG Pengasih Margosari'
});
var group_SPPGPengasihKedungsari3 = new ol.layer.Group({
    layers: [lyr_S_PengasihKedungsari3_67, lyr_Sekolah_68, lyr_SPPG_69,],
    fold: 'close',
    title: 'SPPG Pengasih Kedungsari 3'
});
var group_SPPGPengasihKedungsari = new ol.layer.Group({
    layers: [lyr_S_PengasihKedungsari_64, lyr_Sekolah_65, lyr_SPPG_66,],
    fold: 'close',
    title: 'SPPG Pengasih Kedungsari'
});
var group_SPPGPengasih2 = new ol.layer.Group({
    layers: [lyr_S_Pengasih2_61, lyr_Sekolah_62, lyr_SPPG_63,],
    fold: 'close',
    title: 'SPPG Pengasih 2'
});
var group_SPPGPanjatanTayuban = new ol.layer.Group({
    layers: [lyr_S_PanjatanTayuban_58, lyr_Sekolah_59, lyr_SPPG_60,],
    fold: 'close',
    title: 'SPPG Panjatan Tayuban'
});
var group_SPPGPanjatanBugel = new ol.layer.Group({
    layers: [lyr_S_PanjatanBugel_55, lyr_Sekolah_56, lyr_SPPG_57,],
    fold: 'close',
    title: 'SPPG Panjatan Bugel'
});
var group_SPPGPanjatan2 = new ol.layer.Group({
    layers: [lyr_S_Panjatan2_52, lyr_Sekolah_53, lyr_SPPG_54,],
    fold: 'close',
    title: 'SPPG Panjatan 2'
});
var group_SPPGPanjatan1 = new ol.layer.Group({
    layers: [lyr_S_Panjatan1_49, lyr_Sekolah_50, lyr_SPPG_51,],
    fold: 'close',
    title: 'SPPG Panjatan 1'
});
var group_SPPGNanggulanTanjungharjo = new ol.layer.Group({
    layers: [lyr_S_NanggulanTanjungharjo_46, lyr_Sekolah_47, lyr_SPPG_48,],
    fold: 'close',
    title: 'SPPG Nanggulan Tanjungharjo'
});
var group_SPPGNanggulanJatisarono = new ol.layer.Group({
    layers: [lyr_S_NanggulanJatisarono_43, lyr_Sekolah_44, lyr_SPPG_45,],
    fold: 'close',
    title: 'SPPG Nanggulan Jatisarono'
});
var group_SPPGNanggulanDonomulyo = new ol.layer.Group({
    layers: [lyr_S_NanggulanDonomulyo_40, lyr_Sekolah_41, lyr_SPPG_42,],
    fold: 'close',
    title: 'SPPG Nanggulan Donomulyo'
});
var group_SPPGLendahJatirejo2 = new ol.layer.Group({
    layers: [lyr_S_LendahJatirejo2_37, lyr_Sekolah_38, lyr_SPPG_39,],
    fold: 'close',
    title: 'SPPG Lendah Jatirejo 2'
});
var group_SPPGLendahJatirejo = new ol.layer.Group({
    layers: [lyr_S_LendahJatirejo_34, lyr_Sekolah_35, lyr_SPPG_36,],
    fold: 'close',
    title: 'SPPG Lendah Jatirejo'
});
var group_SPPGLendahGulurejo = new ol.layer.Group({
    layers: [lyr_S_LendahGulurejo_31, lyr_Sekolah_32, lyr_SPPG_33,],
    fold: 'close',
    title: 'SPPG Lendah Gulurejo'
});
var group_SPPGKokapHargowilis = new ol.layer.Group({
    layers: [lyr_S_KokapHargowilis_28, lyr_Sekolah_29, lyr_SPPG_30,],
    fold: 'close',
    title: 'SPPG Kokap Hargowilis'
});
var group_SPPGKokapHargorejo = new ol.layer.Group({
    layers: [lyr_S_KokapHargorejo_25, lyr_Sekolah_26, lyr_SPPG_27,],
    fold: 'close',
    title: 'SPPG Kokap Hargorejo'
});
var group_SPPGKalibawangBanjarharjo2 = new ol.layer.Group({
    layers: [lyr_S_KalibawangBanjarharjo2_22, lyr_Sekolah_23, lyr_SPPG_24,],
    fold: 'close',
    title: 'SPPG Kalibawang Banjarharjo 2'
});
var group_SPPGKalibawangBanjarharjo = new ol.layer.Group({
    layers: [lyr_S_KalibawangBanjarharjo_19, lyr_Sekolah_20, lyr_SPPG_21,],
    fold: 'close',
    title: 'SPPG Kalibawang Banjarharjo'
});
var group_SPPGKalibawangBanjararum = new ol.layer.Group({
    layers: [lyr_S_KalibawangBanjararum_16, lyr_Sekolah_17, lyr_SPPG_18,],
    fold: 'close',
    title: 'SPPG Kalibawang Banjararum'
});
var group_SPPGGirimulyoJatimulyo = new ol.layer.Group({
    layers: [lyr_S_GirimulyoJatimulyo_13, lyr_Sekolah_14, lyr_SPPG_15,],
    fold: 'close',
    title: 'SPPG Girimulyo Jatimulyo'
});
var group_SPPGGalurTirtorahayu2 = new ol.layer.Group({
    layers: [lyr_S_GalurTirtorahayu2_10, lyr_Sekolah_11, lyr_SPPG_12,],
    fold: 'close',
    title: 'SPPG Galur Tirtorahayu 2'
});
var group_SPPGGalurPandowan2 = new ol.layer.Group({
    layers: [lyr_S_GalurPandowan2_7, lyr_Sekolah_8, lyr_SPPG_9,],
    fold: 'close',
    title: 'SPPG Galur Pandowan 2'
});
var group_SPPGGalurPandowan = new ol.layer.Group({
    layers: [lyr_S_GalurPandowan_4, lyr_Sekolah_5, lyr_SPPG_6,],
    fold: 'close',
    title: 'SPPG Galur Pandowan'
});

lyr_ESRIWorldTopo_0.setVisible(true); lyr_Sekolah_SPPG_1.setVisible(false); lyr_BatasKapanewon_2.setVisible(true); lyr_S_GalurPandowan_4.setVisible(true); lyr_Sekolah_5.setVisible(true); lyr_SPPG_6.setVisible(true); lyr_S_GalurPandowan2_7.setVisible(true); lyr_Sekolah_8.setVisible(true); lyr_SPPG_9.setVisible(true); lyr_S_GalurTirtorahayu2_10.setVisible(true); lyr_Sekolah_11.setVisible(true); lyr_SPPG_12.setVisible(true); lyr_S_GirimulyoJatimulyo_13.setVisible(true); lyr_Sekolah_14.setVisible(true); lyr_SPPG_15.setVisible(true); lyr_S_KalibawangBanjararum_16.setVisible(true); lyr_Sekolah_17.setVisible(true); lyr_SPPG_18.setVisible(true); lyr_S_KalibawangBanjarharjo_19.setVisible(true); lyr_Sekolah_20.setVisible(true); lyr_SPPG_21.setVisible(true); lyr_S_KalibawangBanjarharjo2_22.setVisible(true); lyr_Sekolah_23.setVisible(true); lyr_SPPG_24.setVisible(true); lyr_S_KokapHargorejo_25.setVisible(true); lyr_Sekolah_26.setVisible(true); lyr_SPPG_27.setVisible(true); lyr_S_KokapHargowilis_28.setVisible(true); lyr_Sekolah_29.setVisible(true); lyr_SPPG_30.setVisible(true); lyr_S_LendahGulurejo_31.setVisible(true); lyr_Sekolah_32.setVisible(true); lyr_SPPG_33.setVisible(true); lyr_S_LendahJatirejo_34.setVisible(true); lyr_Sekolah_35.setVisible(true); lyr_SPPG_36.setVisible(true); lyr_S_LendahJatirejo2_37.setVisible(true); lyr_Sekolah_38.setVisible(true); lyr_SPPG_39.setVisible(true); lyr_S_NanggulanDonomulyo_40.setVisible(true); lyr_Sekolah_41.setVisible(true); lyr_SPPG_42.setVisible(true); lyr_S_NanggulanJatisarono_43.setVisible(true); lyr_Sekolah_44.setVisible(true); lyr_SPPG_45.setVisible(true); lyr_S_NanggulanTanjungharjo_46.setVisible(true); lyr_Sekolah_47.setVisible(true); lyr_SPPG_48.setVisible(true); lyr_S_Panjatan1_49.setVisible(true); lyr_Sekolah_50.setVisible(true); lyr_SPPG_51.setVisible(true); lyr_S_Panjatan2_52.setVisible(true); lyr_Sekolah_53.setVisible(true); lyr_SPPG_54.setVisible(true); lyr_S_PanjatanBugel_55.setVisible(true); lyr_Sekolah_56.setVisible(true); lyr_SPPG_57.setVisible(true); lyr_S_PanjatanTayuban_58.setVisible(true); lyr_Sekolah_59.setVisible(true); lyr_SPPG_60.setVisible(true); lyr_S_Pengasih2_61.setVisible(true); lyr_Sekolah_62.setVisible(true); lyr_SPPG_63.setVisible(true); lyr_S_PengasihKedungsari_64.setVisible(true); lyr_Sekolah_65.setVisible(true); lyr_SPPG_66.setVisible(true); lyr_S_PengasihKedungsari3_67.setVisible(true); lyr_Sekolah_68.setVisible(true); lyr_SPPG_69.setVisible(true); lyr_S_PengasihMargosari_70.setVisible(true); lyr_Sekolah_71.setVisible(true); lyr_SPPG_72.setVisible(true); lyr_S_PengasihMargosari2_73.setVisible(true); lyr_Sekolah_74.setVisible(true); lyr_SPPG_75.setVisible(true); lyr_S_PengasihTawangsari_76.setVisible(true); lyr_Sekolah_77.setVisible(true); lyr_SPPG_78.setVisible(true); lyr_S_SamigaluhGerbosari_79.setVisible(true); lyr_Sekolah_80.setVisible(true); lyr_SPPG_81.setVisible(true); lyr_S_SamigaluhNgargosari_82.setVisible(true); lyr_Sekolah_83.setVisible(true); lyr_SPPG_84.setVisible(true); lyr_S_SamigaluhPagerharjo_85.setVisible(true); lyr_Sekolah_86.setVisible(true); lyr_SPPG_87.setVisible(true); lyr_S_SentoloKaliagung_88.setVisible(true); lyr_Sekolah_89.setVisible(true); lyr_SPPG_90.setVisible(true); lyr_S_SentoloPoldaDIY_91.setVisible(true); lyr_Sekolah_92.setVisible(true); lyr_SPPG_93.setVisible(true); lyr_S_SentoloSukoreno_94.setVisible(true); lyr_Sekolah_95.setVisible(true); lyr_SPPG_96.setVisible(true); lyr_S_TemonJanten_97.setVisible(true); lyr_Sekolah_98.setVisible(true); lyr_SPPG_99.setVisible(true); lyr_S_TemonKarangwuluh_100.setVisible(true); lyr_Sekolah_101.setVisible(true); lyr_SPPG_102.setVisible(true); lyr_S_TemonPalihan_103.setVisible(true); lyr_Sekolah_104.setVisible(true); lyr_SPPG_105.setVisible(true); lyr_S_Wates2_106.setVisible(true); lyr_Sekolah_107.setVisible(true); lyr_SPPG_108.setVisible(true); lyr_S_Wates3_109.setVisible(true); lyr_Sekolah_110.setVisible(true); lyr_SPPG_111.setVisible(true); lyr_S_WatesGadingan_112.setVisible(true); lyr_Sekolah_113.setVisible(true); lyr_SPPG_114.setVisible(true); lyr_S_WatesGiripenini_115.setVisible(true); lyr_Sekolah_116.setVisible(true); lyr_SPPG_117.setVisible(true); lyr_S_WatesKarangwuni_118.setVisible(true); lyr_Sekolah_119.setVisible(true); lyr_SPPG_120.setVisible(true); lyr_S_WatesNgestiharjo_121.setVisible(true); lyr_Sekolah_122.setVisible(true); lyr_SPPG_123.setVisible(true); lyr_S_WatesTriharjo_124.setVisible(true); lyr_Sekolah_125.setVisible(true); lyr_SPPG_126.setVisible(true); lyr_S_WatesTriharjo2_127.setVisible(true); lyr_Sekolah_128.setVisible(true); lyr_SPPG_129.setVisible(true); lyr_S_WatesTriharjo4_130.setVisible(true); lyr_Sekolah_131.setVisible(true); lyr_SPPG_132.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0, lyr_OSMStandard_1, lyr_GoogleSatellite_2, lyr_BatasKapanewon_2, group_SPPGGalurPandowan, group_SPPGGalurPandowan2, group_SPPGGalurTirtorahayu2, group_SPPGGirimulyoJatimulyo, group_SPPGKalibawangBanjararum, group_SPPGKalibawangBanjarharjo, group_SPPGKalibawangBanjarharjo2, group_SPPGKokapHargorejo, group_SPPGKokapHargowilis, group_SPPGLendahGulurejo, group_SPPGLendahJatirejo, group_SPPGLendahJatirejo2, group_SPPGNanggulanDonomulyo, group_SPPGNanggulanJatisarono, group_SPPGNanggulanTanjungharjo, group_SPPGPanjatan1, group_SPPGPanjatan2, group_SPPGPanjatanBugel, group_SPPGPanjatanTayuban, group_SPPGPengasih2, group_SPPGPengasihKedungsari, group_SPPGPengasihKedungsari3, group_SPPGPengasihMargosari, group_SPPGPengasihMargosari2, group_SPPGPengasihTawangsari, group_SPPGSamigaluhGerbosari, group_SPPGSamigaluhNgargosari, group_SPPGSamigaluhPagerharjo, group_SPPGSentoloKaliagung, group_SPPGSentoloPoldaDIY, group_SPPGSentoloSukoreno, group_SPPGTemonJanten, group_SPPGTemonKarangwuluh, group_SPPGTemonPalihan, group_SPPGWates2, group_SPPGWates3, group_SPPGWatesGadingan, group_SPPGWatesGiripeni, group_SPPGWatesKarangwuni, group_SPPGWatesNgestiharjo, group_SPPGWatesTriharjo, group_SPPGWatesTriharjo2, group_SPPGWatesTriharjo4];
lyr_Sekolah_SPPG_1.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', 'Radius': 'Radius', 'Layout': 'Layout', 'SPPG_2': 'SPPG_2', 'Kalurahan_': 'Kalurahan_', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', 'GoogleMaps': 'GoogleMaps', 'Alamat_2': 'Alamat_2', 'ID': 'ID', 'Easting_2': 'Easting_2', 'Northing_2': 'Northing_2', 'Porsi': 'Porsi', 'Search': 'Search', });
lyr_BatasKapanewon_2.set('fieldAliases', { 'Kapanewon': 'Kapanewon', });
lyr_S_GalurPandowan_4.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_5.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_6.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_GalurPandowan2_7.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_8.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_9.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_GalurTirtorahayu2_10.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_11.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_12.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_GirimulyoJatimulyo_13.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_14.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_15.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_KalibawangBanjararum_16.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_17.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_18.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_KalibawangBanjarharjo_19.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_20.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_21.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_KalibawangBanjarharjo2_22.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_23.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_24.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_KokapHargorejo_25.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_26.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_27.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_KokapHargowilis_28.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_29.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_30.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_LendahGulurejo_31.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_32.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_33.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_LendahJatirejo_34.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_35.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_36.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_LendahJatirejo2_37.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_38.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_39.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_NanggulanDonomulyo_40.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_41.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_42.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_NanggulanJatisarono_43.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_44.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_45.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_NanggulanTanjungharjo_46.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_47.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_48.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_Panjatan1_49.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_50.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_51.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_Panjatan2_52.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_53.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_54.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_PanjatanBugel_55.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_56.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_57.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_PanjatanTayuban_58.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_59.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_60.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_Pengasih2_61.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_62.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_63.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_PengasihKedungsari_64.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_65.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_66.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_PengasihKedungsari3_67.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_68.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_69.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_PengasihMargosari_70.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_71.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_72.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_PengasihMargosari2_73.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_74.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_75.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_PengasihTawangsari_76.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_77.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_78.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_SamigaluhGerbosari_79.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_80.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_81.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_SamigaluhNgargosari_82.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_83.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_84.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_SamigaluhPagerharjo_85.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_86.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_87.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_SentoloKaliagung_88.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_89.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_90.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_SentoloPoldaDIY_91.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_92.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_93.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_SentoloSukoreno_94.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_95.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_96.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_TemonJanten_97.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_98.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_99.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_TemonKarangwuluh_100.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_101.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_102.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_TemonPalihan_103.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_104.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_105.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_Wates2_106.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_107.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_108.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_Wates3_109.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_110.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_111.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_WatesGadingan_112.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_113.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_114.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_WatesGiripenini_115.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_116.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_117.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_WatesKarangwuni_118.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_119.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_120.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_WatesNgestiharjo_121.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_122.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_123.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_WatesTriharjo_124.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_125.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_126.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_WatesTriharjo2_127.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_128.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_129.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_S_WatesTriharjo4_130.set('fieldAliases', { 'origin_id': 'SPPG', 'destinatio': 'Sekolah', 'Jarak(km)': 'Jarak (kilometer)', 'k_jarak': 'Kelas Jarak', });
lyr_Sekolah_131.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Siswa', 'Guru': 'Guru', 'Total': 'Total Porsi', 'SPPG': 'SPPG', 'Jarak(km)': 'Jarak(km)', 'k_jarak': 'kelas Jarak', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPPG_132.set('fieldAliases', { 'SPPG': 'SPPG', 'Kalurahan': 'Kalurahan', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'GoogleMaps': 'GoogleMaps', 'Alamat': 'Alamat', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Sekolah_SPPG_1.set('fieldImages', { 'No': '', 'NPSN': '', 'Sekolah': '', 'Alamat': '', 'Kalurahan': '', 'Status': '', 'Latitude': '', 'Longitude': '', 'Kapanewon': '', 'Jenjang': '', 'Siswa': '', 'Guru': '', 'Total': '', 'SPPG': '', 'Easting': '', 'Northing': '', 'Radius': '', 'Layout': '', 'SPPG_2': '', 'Kalurahan_': '', 'Latitude_2': '', 'Longitude_': '', 'GoogleMaps': '', 'Alamat_2': '', 'ID': '', 'Easting_2': '', 'Northing_2': '', 'Porsi': '', 'Search': '', });
lyr_BatasKapanewon_2.set('fieldImages', { 'Kapanewon': '', });
lyr_S_GalurPandowan_4.set('fieldImages', { 'origin_id': 'TextEdit', 'destinatio': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', });
lyr_Sekolah_5.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_6.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_GalurPandowan2_7.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_8.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_9.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_GalurTirtorahayu2_10.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_11.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_12.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_GirimulyoJatimulyo_13.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_14.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_15.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_KalibawangBanjararum_16.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_17.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_18.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_KalibawangBanjarharjo_19.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_20.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_21.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_KalibawangBanjarharjo2_22.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_23.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_24.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_KokapHargorejo_25.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_26.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_27.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_KokapHargowilis_28.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_29.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_30.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_LendahGulurejo_31.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_32.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_33.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_LendahJatirejo_34.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_35.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_36.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_LendahJatirejo2_37.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_38.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_39.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_NanggulanDonomulyo_40.set('fieldImages', { 'origin_id': 'TextEdit', 'destinatio': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', });
lyr_Sekolah_41.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_42.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_NanggulanJatisarono_43.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_44.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_45.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_NanggulanTanjungharjo_46.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_47.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_48.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_Panjatan1_49.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_50.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_51.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_Panjatan2_52.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_53.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_54.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_PanjatanBugel_55.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_56.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_57.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_PanjatanTayuban_58.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_59.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_60.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_Pengasih2_61.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_62.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_63.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_PengasihKedungsari_64.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_65.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_66.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_PengasihKedungsari3_67.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_68.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_69.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_PengasihMargosari_70.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_71.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_72.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_PengasihMargosari2_73.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_74.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_75.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_PengasihTawangsari_76.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_77.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_78.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_SamigaluhGerbosari_79.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_80.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_81.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_SamigaluhNgargosari_82.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_83.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_84.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_SamigaluhPagerharjo_85.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_86.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_87.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_SentoloKaliagung_88.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_89.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_90.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_SentoloPoldaDIY_91.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_92.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_93.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_SentoloSukoreno_94.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_95.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_96.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_TemonJanten_97.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_98.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_99.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_TemonKarangwuluh_100.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_101.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_102.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_TemonPalihan_103.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_104.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_105.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_Wates2_106.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_107.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_108.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_Wates3_109.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_110.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_111.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_WatesGadingan_112.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_113.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_114.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_WatesGiripenini_115.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_116.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_117.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_WatesKarangwuni_118.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_119.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_120.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_WatesNgestiharjo_121.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_122.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_123.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_WatesTriharjo_124.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_125.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_126.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_WatesTriharjo2_127.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_128.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_129.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_S_WatesTriharjo4_130.set('fieldImages', { 'origin_id': '', 'destinatio': '', 'Jarak(km)': '', 'k_jarak': '', });
lyr_Sekolah_131.set('fieldImages', { 'No': 'TextEdit', 'NPSN': 'TextEdit', 'Sekolah': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Kapanewon': 'TextEdit', 'Jenjang': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'SPPG': 'TextEdit', 'Jarak(km)': 'TextEdit', 'k_jarak': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_SPPG_132.set('fieldImages', { 'SPPG': 'TextEdit', 'Kalurahan': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Alamat': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_Sekolah_SPPG_1.set('fieldLabels', { 'No': 'no label', 'NPSN': 'no label', 'Sekolah': 'no label', 'Alamat': 'no label', 'Kalurahan': 'no label', 'Status': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Kapanewon': 'no label', 'Jenjang': 'no label', 'Siswa': 'no label', 'Guru': 'no label', 'Total': 'no label', 'SPPG': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Radius': 'no label', 'Layout': 'no label', 'SPPG_2': 'no label', 'Kalurahan_': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', 'GoogleMaps': 'no label', 'Alamat_2': 'no label', 'ID': 'no label', 'Easting_2': 'no label', 'Northing_2': 'no label', 'Porsi': 'no label', 'Search': 'no label', });
lyr_BatasKapanewon_2.set('fieldLabels', { 'Kapanewon': 'hidden field', });
lyr_Sekolah_5.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_6.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_8.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_9.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_11.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_12.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_14.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_15.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_17.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_18.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_20.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_21.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_23.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_24.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_26.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_27.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_29.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_30.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_32.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_33.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_35.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_36.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_38.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_39.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_41.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_42.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_44.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_45.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_47.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_48.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_50.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_51.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_53.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_54.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_56.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_57.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_59.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_60.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_62.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_63.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_65.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_66.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_68.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_69.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_71.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_72.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_74.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_75.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_77.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_78.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_80.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_81.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_83.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_84.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_86.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_87.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_89.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_90.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_92.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_93.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_95.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_96.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_98.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_99.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_101.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_102.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_104.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_105.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_107.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_108.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_110.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_111.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_113.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_114.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_116.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_117.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_119.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_120.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_122.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_123.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_125.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_126.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_128.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_129.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_Sekolah_131.set('fieldLabels', { 'No': 'hidden field', 'NPSN': 'hidden field', 'Sekolah': 'header label - always visible', 'Alamat': 'hidden field', 'Kalurahan': 'hidden field', 'Status': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Kapanewon': 'hidden field', 'Jenjang': 'hidden field', 'Siswa': 'hidden field', 'Guru': 'hidden field', 'Total': 'header label - always visible', 'SPPG': 'header label - always visible', 'Jarak(km)': 'header label - always visible', 'k_jarak': 'header label - always visible', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_132.set('fieldLabels', { 'SPPG': 'no label', 'Kalurahan': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'GoogleMaps': 'hidden field', 'Alamat': 'hidden field', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', });
lyr_SPPG_132.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});
