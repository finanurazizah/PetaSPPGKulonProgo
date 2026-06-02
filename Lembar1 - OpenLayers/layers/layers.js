var wms_layers = [];

var lyr_OSMStandard_0 = new ol.layer.Tile({
    'title': 'ESRI World Topo',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    })
});

var lyr_OSMStandard_1 = new ol.layer.Tile({
    'title': 'OSM Standard',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
        url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

var lyr_GoogleSatellite_2 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

lyr_OSMStandard_0.setVisible(true);
lyr_OSMStandard_1.setVisible(false);
lyr_GoogleSatellite_2.setVisible(false);

var format_BatasKapanewon_1 = new ol.format.GeoJSON();
var features_BatasKapanewon_1 = format_BatasKapanewon_1.readFeatures(json_BatasKapanewon_1,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_BatasKapanewon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKapanewon_1.addFeatures(features_BatasKapanewon_1);
var lyr_BatasKapanewon_1 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_BatasKapanewon_1,
    style: style_BatasKapanewon_1,
    popuplayertitle: 'Batas Kapanewon',
    interactive: false,
    title: '<img src="styles/legend/BatasKapanewon_1.png" /> Batas Kapanewon'
});
var format_Sekolah_2 = new ol.format.GeoJSON();
var features_Sekolah_2 = format_Sekolah_2.readFeatures(json_Sekolah_2,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_2.addFeatures(features_Sekolah_2);
var lyr_Sekolah_2 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_2,
    style: style_Sekolah_2,
    popuplayertitle: 'Sekolah',
    interactive: true,
    title: 'Sekolah<br />\
    <img src="styles/legend/Sekolah_2_0.png" /> SPPG Galur Pandowan<br />\
    <img src="styles/legend/Sekolah_2_1.png" /> SPPG Galur Pandowan 2<br />\
    <img src="styles/legend/Sekolah_2_2.png" /> SPPG Galur Tirtorahayu 2<br />\
    <img src="styles/legend/Sekolah_2_3.png" /> SPPG Girimulyo Jatimulyo<br />\
    <img src="styles/legend/Sekolah_2_4.png" /> SPPG Kalibawang Banjararum<br />\
    <img src="styles/legend/Sekolah_2_5.png" /> SPPG Kalibawang Banjarharjo<br />\
    <img src="styles/legend/Sekolah_2_6.png" /> SPPG Kalibawang Banjarharjo 2<br />\
    <img src="styles/legend/Sekolah_2_7.png" /> SPPG Kokap Hargorejo<br />\
    <img src="styles/legend/Sekolah_2_8.png" /> SPPG Kokap Hargowilis<br />\
    <img src="styles/legend/Sekolah_2_9.png" /> SPPG Lendah Gulurejo<br />\
    <img src="styles/legend/Sekolah_2_10.png" /> SPPG Lendah Jatirejo<br />\
    <img src="styles/legend/Sekolah_2_11.png" /> SPPG Lendah Jatirejo 2<br />\
    <img src="styles/legend/Sekolah_2_12.png" /> SPPG Nanggulan Donomulyo<br />\
    <img src="styles/legend/Sekolah_2_13.png" /> SPPG Nanggulan Jatisarono<br />\
    <img src="styles/legend/Sekolah_2_14.png" /> SPPG Nanggulan Tanjungharjo<br />\
    <img src="styles/legend/Sekolah_2_15.png" /> SPPG Panjatan 1<br />\
    <img src="styles/legend/Sekolah_2_16.png" /> SPPG Panjatan 2<br />\
    <img src="styles/legend/Sekolah_2_17.png" /> SPPG Panjatan Bugel<br />\
    <img src="styles/legend/Sekolah_2_18.png" /> SPPG Panjatan Tayuban<br />\
    <img src="styles/legend/Sekolah_2_19.png" /> SPPG Pengasih 2<br />\
    <img src="styles/legend/Sekolah_2_20.png" /> SPPG Pengasih Kedungsari<br />\
    <img src="styles/legend/Sekolah_2_21.png" /> SPPG Pengasih Kedungsari 3<br />\
    <img src="styles/legend/Sekolah_2_22.png" /> SPPG Pengasih Margosari<br />\
    <img src="styles/legend/Sekolah_2_23.png" /> SPPG Pengasih Margosari 2<br />\
    <img src="styles/legend/Sekolah_2_24.png" /> SPPG Pengasih Tawangsari<br />\
    <img src="styles/legend/Sekolah_2_25.png" /> SPPG Samigaluh Gerbosari<br />\
    <img src="styles/legend/Sekolah_2_26.png" /> SPPG Samigaluh Ngargosari<br />\
    <img src="styles/legend/Sekolah_2_27.png" /> SPPG Samigaluh Pagerharjo<br />\
    <img src="styles/legend/Sekolah_2_28.png" /> SPPG Sentolo Kaliagung<br />\
    <img src="styles/legend/Sekolah_2_29.png" /> SPPG Sentolo Polda DIY<br />\
    <img src="styles/legend/Sekolah_2_30.png" /> SPPG Sentolo Sukoreno<br />\
    <img src="styles/legend/Sekolah_2_31.png" /> SPPG Temon Janten<br />\
    <img src="styles/legend/Sekolah_2_32.png" /> SPPG Temon Karangwuluh<br />\
    <img src="styles/legend/Sekolah_2_33.png" /> SPPG Temon Palihan<br />\
    <img src="styles/legend/Sekolah_2_34.png" /> SPPG Wates 2<br />\
    <img src="styles/legend/Sekolah_2_35.png" /> SPPG Wates 3<br />\
    <img src="styles/legend/Sekolah_2_36.png" /> SPPG Wates Gadingan<br />\
    <img src="styles/legend/Sekolah_2_37.png" /> SPPG Wates Giripeni<br />\
    <img src="styles/legend/Sekolah_2_38.png" /> SPPG Wates Karangwuni<br />\
    <img src="styles/legend/Sekolah_2_39.png" /> SPPG Wates Ngestiharjo<br />\
    <img src="styles/legend/Sekolah_2_40.png" /> SPPG Wates Triharjo<br />\
    <img src="styles/legend/Sekolah_2_41.png" /> SPPG Wates Triharjo 2<br />\
    <img src="styles/legend/Sekolah_2_42.png" /> SPPG Wates Triharjo 4<br />' });
var format_PelayananSPPG_3 = new ol.format.GeoJSON();
var features_PelayananSPPG_3 = format_PelayananSPPG_3.readFeatures(json_PelayananSPPG_3,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PelayananSPPG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PelayananSPPG_3.addFeatures(features_PelayananSPPG_3);
var lyr_PelayananSPPG_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_PelayananSPPG_3,
    style: style_PelayananSPPG_3,
    popuplayertitle: 'Pelayanan SPPG',
    interactive: false,
    title: 'Pelayanan SPPG<br />\
    <img src="styles/legend/PelayananSPPG_3_0.png" /> SPPG Galur Pandowan<br />\
    <img src="styles/legend/PelayananSPPG_3_1.png" /> SPPG Galur Pandowan 2<br />\
    <img src="styles/legend/PelayananSPPG_3_2.png" /> SPPG Galur Tirtorahayu 2<br />\
    <img src="styles/legend/PelayananSPPG_3_3.png" /> SPPG Girimulyo Jatimulyo<br />\
    <img src="styles/legend/PelayananSPPG_3_4.png" /> SPPG Kalibawang Banjararum<br />\
    <img src="styles/legend/PelayananSPPG_3_5.png" /> SPPG Kalibawang Banjarharjo<br />\
    <img src="styles/legend/PelayananSPPG_3_6.png" /> SPPG Kalibawang Banjarharjo 2<br />\
    <img src="styles/legend/PelayananSPPG_3_7.png" /> SPPG Kokap Hargorejo<br />\
    <img src="styles/legend/PelayananSPPG_3_8.png" /> SPPG Kokap Hargowilis<br />\
    <img src="styles/legend/PelayananSPPG_3_9.png" /> SPPG Lendah Gulurejo<br />\
    <img src="styles/legend/PelayananSPPG_3_10.png" /> SPPG Lendah Jatirejo<br />\
    <img src="styles/legend/PelayananSPPG_3_11.png" /> SPPG Lendah Jatirejo 2<br />\
    <img src="styles/legend/PelayananSPPG_3_12.png" /> SPPG Nanggulan Donomulyo<br />\
    <img src="styles/legend/PelayananSPPG_3_13.png" /> SPPG Nanggulan Jatisarono<br />\
    <img src="styles/legend/PelayananSPPG_3_14.png" /> SPPG Nanggulan Tanjungharjo<br />\
    <img src="styles/legend/PelayananSPPG_3_15.png" /> SPPG Panjatan 1<br />\
    <img src="styles/legend/PelayananSPPG_3_16.png" /> SPPG Panjatan 2<br />\
    <img src="styles/legend/PelayananSPPG_3_17.png" /> SPPG Panjatan Bugel<br />\
    <img src="styles/legend/PelayananSPPG_3_18.png" /> SPPG Panjatan Tayuban<br />\
    <img src="styles/legend/PelayananSPPG_3_19.png" /> SPPG Pengasih 2<br />\
    <img src="styles/legend/PelayananSPPG_3_20.png" /> SPPG Pengasih Kedungsari<br />\
    <img src="styles/legend/PelayananSPPG_3_21.png" /> SPPG Pengasih Kedungsari 3<br />\
    <img src="styles/legend/PelayananSPPG_3_22.png" /> SPPG Pengasih Margosari<br />\
    <img src="styles/legend/PelayananSPPG_3_23.png" /> SPPG Pengasih Margosari 2<br />\
    <img src="styles/legend/PelayananSPPG_3_24.png" /> SPPG Pengasih Tawangsari<br />\
    <img src="styles/legend/PelayananSPPG_3_25.png" /> SPPG Samigaluh Gerbosari<br />\
    <img src="styles/legend/PelayananSPPG_3_26.png" /> SPPG Samigaluh Ngargosari<br />\
    <img src="styles/legend/PelayananSPPG_3_27.png" /> SPPG Samigaluh Pagerharjo<br />\
    <img src="styles/legend/PelayananSPPG_3_28.png" /> SPPG Sentolo Kaliagung<br />\
    <img src="styles/legend/PelayananSPPG_3_29.png" /> SPPG Sentolo Polda DIY<br />\
    <img src="styles/legend/PelayananSPPG_3_30.png" /> SPPG Sentolo Sukoreno<br />\
    <img src="styles/legend/PelayananSPPG_3_31.png" /> SPPG Temon Janten<br />\
    <img src="styles/legend/PelayananSPPG_3_32.png" /> SPPG Temon Karangwuluh<br />\
    <img src="styles/legend/PelayananSPPG_3_33.png" /> SPPG Temon Palihan<br />\
    <img src="styles/legend/PelayananSPPG_3_34.png" /> SPPG Wates 2<br />\
    <img src="styles/legend/PelayananSPPG_3_35.png" /> SPPG Wates 3<br />\
    <img src="styles/legend/PelayananSPPG_3_36.png" /> SPPG Wates Gadingan<br />\
    <img src="styles/legend/PelayananSPPG_3_37.png" /> SPPG Wates Giripeni<br />\
    <img src="styles/legend/PelayananSPPG_3_38.png" /> SPPG Wates Karangwuni<br />\
    <img src="styles/legend/PelayananSPPG_3_39.png" /> SPPG Wates Ngestiharjo<br />\
    <img src="styles/legend/PelayananSPPG_3_40.png" /> SPPG Wates Triharjo<br />\
    <img src="styles/legend/PelayananSPPG_3_41.png" /> SPPG Wates Triharjo 2<br />\
    <img src="styles/legend/PelayananSPPG_3_42.png" /> SPPG Wates Triharjo 4<br />' });
var format_Sekolah_SPPG_4 = new ol.format.GeoJSON();
var features_Sekolah_SPPG_4 = format_Sekolah_SPPG_4.readFeatures(json_Sekolah_SPPG_4,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Sekolah_SPPG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_SPPG_4.addFeatures(features_Sekolah_SPPG_4);
var lyr_Sekolah_SPPG_4 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Sekolah_SPPG_4,
    style: style_Sekolah_SPPG_4,
    popuplayertitle: 'Sekolah_SPPG',
    interactive: false,
    title: '<img src="styles/legend/Sekolah_SPPG_4.png" /> Sekolah_SPPG'
});
var format_SPPG_5 = new ol.format.GeoJSON();
var features_SPPG_5 = format_SPPG_5.readFeatures(json_SPPG_5,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_SPPG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPPG_5.addFeatures(features_SPPG_5);
var lyr_SPPG_5 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_SPPG_5,
    style: style_SPPG_5,
    popuplayertitle: 'SPPG',
    interactive: true,
    title: 'SPPG<br />\
    <img src="styles/legend/SPPG_5_0.png" /> SPPG Galur Pandowan<br />\
    <img src="styles/legend/SPPG_5_1.png" /> SPPG Galur Pandowan 2<br />\
    <img src="styles/legend/SPPG_5_2.png" /> SPPG Galur Tirtorahayu 2<br />\
    <img src="styles/legend/SPPG_5_3.png" /> SPPG Girimulyo Jatimulyo<br />\
    <img src="styles/legend/SPPG_5_4.png" /> SPPG Kalibawang Banjararum<br />\
    <img src="styles/legend/SPPG_5_5.png" /> SPPG Kalibawang Banjarharjo<br />\
    <img src="styles/legend/SPPG_5_6.png" /> SPPG Kalibawang Banjarharjo 2<br />\
    <img src="styles/legend/SPPG_5_7.png" /> SPPG Kokap Hargorejo<br />\
    <img src="styles/legend/SPPG_5_8.png" /> SPPG Kokap Hargowilis<br />\
    <img src="styles/legend/SPPG_5_9.png" /> SPPG Lendah Gulurejo<br />\
    <img src="styles/legend/SPPG_5_10.png" /> SPPG Lendah Jatirejo<br />\
    <img src="styles/legend/SPPG_5_11.png" /> SPPG Lendah Jatirejo 2<br />\
    <img src="styles/legend/SPPG_5_12.png" /> SPPG Nanggulan Donomulyo<br />\
    <img src="styles/legend/SPPG_5_13.png" /> SPPG Nanggulan Jatisarono<br />\
    <img src="styles/legend/SPPG_5_14.png" /> SPPG Nanggulan Tanjungharjo<br />\
    <img src="styles/legend/SPPG_5_15.png" /> SPPG Panjatan 1<br />\
    <img src="styles/legend/SPPG_5_16.png" /> SPPG Panjatan 2<br />\
    <img src="styles/legend/SPPG_5_17.png" /> SPPG Panjatan Bugel<br />\
    <img src="styles/legend/SPPG_5_18.png" /> SPPG Panjatan Tayuban<br />\
    <img src="styles/legend/SPPG_5_19.png" /> SPPG Pengasih 2<br />\
    <img src="styles/legend/SPPG_5_20.png" /> SPPG Pengasih Kedungsari<br />\
    <img src="styles/legend/SPPG_5_21.png" /> SPPG Pengasih Kedungsari 3<br />\
    <img src="styles/legend/SPPG_5_22.png" /> SPPG Pengasih Margosari<br />\
    <img src="styles/legend/SPPG_5_23.png" /> SPPG Pengasih Margosari 2<br />\
    <img src="styles/legend/SPPG_5_24.png" /> SPPG Pengasih Tawangsari<br />\
    <img src="styles/legend/SPPG_5_25.png" /> SPPG Samigaluh Gerbosari<br />\
    <img src="styles/legend/SPPG_5_26.png" /> SPPG Samigaluh Ngargosari<br />\
    <img src="styles/legend/SPPG_5_27.png" /> SPPG Samigaluh Pagerharjo<br />\
    <img src="styles/legend/SPPG_5_28.png" /> SPPG Sentolo Kaliagung<br />\
    <img src="styles/legend/SPPG_5_29.png" /> SPPG Sentolo Polda DIY<br />\
    <img src="styles/legend/SPPG_5_30.png" /> SPPG Sentolo Sukoreno<br />\
    <img src="styles/legend/SPPG_5_31.png" /> SPPG Temon Janten<br />\
    <img src="styles/legend/SPPG_5_32.png" /> SPPG Temon Karangwuluh<br />\
    <img src="styles/legend/SPPG_5_33.png" /> SPPG Temon Palihan<br />\
    <img src="styles/legend/SPPG_5_34.png" /> SPPG Wates 2<br />\
    <img src="styles/legend/SPPG_5_35.png" /> SPPG Wates 3<br />\
    <img src="styles/legend/SPPG_5_36.png" /> SPPG Wates Gadingan<br />\
    <img src="styles/legend/SPPG_5_37.png" /> SPPG Wates Giripeni<br />\
    <img src="styles/legend/SPPG_5_38.png" /> SPPG Wates Karangwuni<br />\
    <img src="styles/legend/SPPG_5_39.png" /> SPPG Wates Ngestiharjo<br />\
    <img src="styles/legend/SPPG_5_40.png" /> SPPG Wates Triharjo<br />\
    <img src="styles/legend/SPPG_5_41.png" /> SPPG Wates Triharjo 2<br />\
    <img src="styles/legend/SPPG_5_42.png" /> SPPG Wates Triharjo 4<br />\
    <img src="styles/legend/SPPG_5_43.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true); lyr_BatasKapanewon_1.setVisible(true); lyr_Sekolah_2.setVisible(true); lyr_PelayananSPPG_3.setVisible(true); lyr_Sekolah_SPPG_4.setVisible(false); lyr_SPPG_5.setVisible(true);
var layersList = [lyr_OSMStandard_0, lyr_OSMStandard_1, lyr_GoogleSatellite_2, lyr_BatasKapanewon_1, lyr_PelayananSPPG_3, lyr_Sekolah_2, lyr_SPPG_5];
lyr_BatasKapanewon_1.set('fieldAliases', { 'Kapanewon': 'Kapanewon', });
lyr_Sekolah_2.set('fieldAliases', { 'Sekolah': 'Sekolah', 'NPSN': 'NPSN', 'Jenjang': 'Jenjang', 'Status': 'Status', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Kapanewon': 'Kapanewon', 'SPPG': 'SPPG', 'Siswa': 'Jumlah Siswa', 'Guru': 'Jumlah Guru', 'Total': 'Jumlah Total', 'No': 'No', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Easting': 'Easting', 'Northing': 'Northing', 'Radius': 'Radius', 'Layout': 'Layout', });
lyr_PelayananSPPG_3.set('fieldAliases', { 'SPPG': 'SPPG', 'Sekolah': 'Sekolah', 'EC_Jarak': 'EC_Jarak', 'NC_Jarak': 'NC_Jarak', 'EXC_Jarak': 'EXC_Jarak', 'XT_Jarak': 'XT_Jarak', 'Jarak_km': 'Jarak_km', 'Layer': 'Layer', 'Path': 'Path', 'Waktu_m': 'Waktu_m', 'K_waktu': 'K_waktu', 'K_jarak': 'K_jarak', 'S_jarak_km': 'S_jarak_km', });
lyr_Sekolah_SPPG_4.set('fieldAliases', { 'No': 'No', 'NPSN': 'NPSN', 'Sekolah': 'Sekolah', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Kapanewon': 'Kapanewon', 'Jenjang': 'Jenjang', 'Siswa': 'Jumlah Siswa', 'Guru': 'Jumlah Guru', 'Total': 'Jumlah Total', 'SPPG': 'SPPG', 'Easting': 'Easting', 'Northing': 'Northing', 'Radius': 'Radius', 'Layout': 'Layout', 'SPPG_2': 'SPPG_2', 'Kalurahan_': 'Kalurahan_', 'Latitude_2': 'Latitude_2', 'Longitude_': 'Longitude_', 'GoogleMaps': 'GoogleMaps', 'Alamat_2': 'Alamat_2', 'ID': 'ID', 'Easting_2': 'Easting_2', 'Northing_2': 'Northing_2', 'Porsi': 'Jumlah Porsi Perhari', 'Search': 'Search', });
lyr_SPPG_5.set('fieldAliases', { 'SPPG': 'SPPG', 'Alamat': 'Alamat', 'Kalurahan': 'Kalurahan', 'GoogleMaps': 'GoogleMaps', 'Porsi': 'Jumlah Porsi Perhari', 'ID': 'ID', 'Easting': 'Easting', 'Northing': 'Northing', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Melayani Sekolah': 'Melayani Sekolah', });
lyr_BatasKapanewon_1.set('fieldImages', { 'Kapanewon': '', });
lyr_Sekolah_2.set('fieldImages', { 'Sekolah': 'TextEdit', 'NPSN': 'TextEdit', 'Jenjang': 'TextEdit', 'Status': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'Kapanewon': 'TextEdit', 'SPPG': 'TextEdit', 'Siswa': 'TextEdit', 'Guru': 'TextEdit', 'Total': 'TextEdit', 'No': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Radius': 'TextEdit', 'Layout': 'TextEdit', });
lyr_PelayananSPPG_3.set('fieldImages', { 'SPPG': 'TextEdit', 'Sekolah': 'TextEdit', 'EC_Jarak': 'TextEdit', 'NC_Jarak': 'TextEdit', 'EXC_Jarak': 'TextEdit', 'XT_Jarak': 'TextEdit', 'Jarak_km': 'TextEdit', 'Layer': 'TextEdit', 'Path': 'TextEdit', 'Waktu_m': 'TextEdit', 'K_waktu': 'TextEdit', 'K_jarak': 'TextEdit', 'S_jarak_km': 'TextEdit', });
lyr_Sekolah_SPPG_4.set('fieldImages', { 'No': '', 'NPSN': '', 'Sekolah': '', 'Alamat': '', 'Kalurahan': '', 'Status': '', 'Latitude': '', 'Longitude': '', 'Kapanewon': '', 'Jenjang': '', 'Siswa': '', 'Guru': '', 'Total': '', 'SPPG': '', 'Easting': '', 'Northing': '', 'Radius': '', 'Layout': '', 'SPPG_2': '', 'Kalurahan_': '', 'Latitude_2': '', 'Longitude_': '', 'GoogleMaps': '', 'Alamat_2': '', 'ID': '', 'Easting_2': '', 'Northing_2': '', 'Porsi': '', 'Search': '', });
lyr_SPPG_5.set('fieldImages', { 'SPPG': 'TextEdit', 'Alamat': 'TextEdit', 'Kalurahan': 'TextEdit', 'GoogleMaps': 'TextEdit', 'Porsi': 'TextEdit', 'ID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Melayani Sekolah': 'TextEdit', });
lyr_BatasKapanewon_1.set('fieldLabels', { 'Kapanewon': 'no label', });
lyr_Sekolah_2.set('fieldLabels', { 'Sekolah': 'header label - always visible', 'NPSN': 'header label - always visible', 'Jenjang': 'header label - always visible', 'Status': 'header label - always visible', 'Alamat': 'header label - always visible', 'Kalurahan': 'header label - always visible', 'Kapanewon': 'header label - always visible', 'SPPG': 'header label - always visible', 'Siswa': 'header label - always visible', 'Guru': 'header label - always visible', 'Total': 'header label - always visible', 'No': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', 'Radius': 'hidden field', 'Layout': 'hidden field', });
lyr_PelayananSPPG_3.set('fieldLabels', { 'SPPG': 'no label', 'Sekolah': 'no label', 'EC_Jarak': 'no label', 'NC_Jarak': 'no label', 'EXC_Jarak': 'no label', 'XT_Jarak': 'no label', 'Jarak_km': 'no label', 'Layer': 'no label', 'Path': 'no label', 'Waktu_m': 'no label', 'K_waktu': 'no label', 'K_jarak': 'no label', 'S_jarak_km': 'inline label - always visible', });
lyr_Sekolah_SPPG_4.set('fieldLabels', { 'No': 'no label', 'NPSN': 'no label', 'Sekolah': 'no label', 'Alamat': 'no label', 'Kalurahan': 'no label', 'Status': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Kapanewon': 'no label', 'Jenjang': 'no label', 'Siswa': 'no label', 'Guru': 'no label', 'Total': 'no label', 'SPPG': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Radius': 'no label', 'Layout': 'no label', 'SPPG_2': 'no label', 'Kalurahan_': 'no label', 'Latitude_2': 'no label', 'Longitude_': 'no label', 'GoogleMaps': 'no label', 'Alamat_2': 'no label', 'ID': 'no label', 'Easting_2': 'no label', 'Northing_2': 'no label', 'Porsi': 'no label', 'Search': 'no label', });
lyr_SPPG_5.set('fieldLabels', { 'SPPG': 'header label - always visible', 'Alamat': 'header label - always visible', 'Kalurahan': 'header label - always visible', 'GoogleMaps': 'header label - always visible', 'Porsi': 'header label - always visible', 'ID': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Melayani Sekolah': 'header label - always visible', });
lyr_SPPG_5.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});
