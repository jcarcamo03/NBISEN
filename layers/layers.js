var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SPSNBIAbsoluto_1 = new ol.format.GeoJSON();
var features_SPSNBIAbsoluto_1 = format_SPSNBIAbsoluto_1.readFeatures(json_SPSNBIAbsoluto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPSNBIAbsoluto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPSNBIAbsoluto_1.addFeatures(features_SPSNBIAbsoluto_1);
var lyr_SPSNBIAbsoluto_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPSNBIAbsoluto_1, 
                style: style_SPSNBIAbsoluto_1,
                interactive: true,
    title: 'SPS (NBI Absoluto)<br />\
    <img src="styles/legend/SPSNBIAbsoluto_1_0.png" /> 0 - 3<br />\
    <img src="styles/legend/SPSNBIAbsoluto_1_1.png" /> 3 - 21<br />\
    <img src="styles/legend/SPSNBIAbsoluto_1_2.png" /> 21 - 58<br />\
    <img src="styles/legend/SPSNBIAbsoluto_1_3.png" /> 58 - 137.6<br />\
    <img src="styles/legend/SPSNBIAbsoluto_1_4.png" /> 137.6 - 1620<br />'
        });
var format_SPSNBI_2 = new ol.format.GeoJSON();
var features_SPSNBI_2 = format_SPSNBI_2.readFeatures(json_SPSNBI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPSNBI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPSNBI_2.addFeatures(features_SPSNBI_2);
var lyr_SPSNBI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPSNBI_2, 
                style: style_SPSNBI_2,
                interactive: true,
    title: 'SPS (NBI %)<br />\
    <img src="styles/legend/SPSNBI_2_0.png" /> <= 17.4%<br />\
    <img src="styles/legend/SPSNBI_2_1.png" /> <= 28.1%<br />\
    <img src="styles/legend/SPSNBI_2_2.png" /> <= 38.1%<br />\
    <img src="styles/legend/SPSNBI_2_3.png" /> <= 54.2%<br />\
    <img src="styles/legend/SPSNBI_2_4.png" /> <= 100%<br />'
        });
var format_TegucigalpaNBIAbsoluto_3 = new ol.format.GeoJSON();
var features_TegucigalpaNBIAbsoluto_3 = format_TegucigalpaNBIAbsoluto_3.readFeatures(json_TegucigalpaNBIAbsoluto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TegucigalpaNBIAbsoluto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TegucigalpaNBIAbsoluto_3.addFeatures(features_TegucigalpaNBIAbsoluto_3);
var lyr_TegucigalpaNBIAbsoluto_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TegucigalpaNBIAbsoluto_3, 
                style: style_TegucigalpaNBIAbsoluto_3,
                interactive: true,
    title: 'Tegucigalpa (NBI Absoluto)<br />\
    <img src="styles/legend/TegucigalpaNBIAbsoluto_3_0.png" /> 0<br />\
    <img src="styles/legend/TegucigalpaNBIAbsoluto_3_1.png" /> <= 10<br />\
    <img src="styles/legend/TegucigalpaNBIAbsoluto_3_2.png" /> <= 41<br />\
    <img src="styles/legend/TegucigalpaNBIAbsoluto_3_3.png" /> <= 126<br />\
    <img src="styles/legend/TegucigalpaNBIAbsoluto_3_4.png" /> <= 2860<br />'
        });
var format_TegucigalpaNBI_4 = new ol.format.GeoJSON();
var features_TegucigalpaNBI_4 = format_TegucigalpaNBI_4.readFeatures(json_TegucigalpaNBI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TegucigalpaNBI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TegucigalpaNBI_4.addFeatures(features_TegucigalpaNBI_4);
var lyr_TegucigalpaNBI_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TegucigalpaNBI_4, 
                style: style_TegucigalpaNBI_4,
                interactive: true,
    title: 'Tegucigalpa (NBI %)<br />\
    <img src="styles/legend/TegucigalpaNBI_4_0.png" /> 0%<br />\
    <img src="styles/legend/TegucigalpaNBI_4_1.png" /> <=18.4%<br />\
    <img src="styles/legend/TegucigalpaNBI_4_2.png" /> <= 29.5%<br />\
    <img src="styles/legend/TegucigalpaNBI_4_3.png" /> <= 44.1%<br />\
    <img src="styles/legend/TegucigalpaNBI_4_4.png" /> <= 100%<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_SPSNBIAbsoluto_1.setVisible(false);lyr_SPSNBI_2.setVisible(true);lyr_TegucigalpaNBIAbsoluto_3.setVisible(false);lyr_TegucigalpaNBI_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SPSNBIAbsoluto_1,lyr_SPSNBI_2,lyr_TegucigalpaNBIAbsoluto_3,lyr_TegucigalpaNBI_4];
lyr_SPSNBIAbsoluto_1.set('fieldAliases', {'Nombre': 'Nombre', 'Codigo': 'Codigo', 'Tipo': 'Tipo', 'Code': 'Code', 'NBARRIO': 'NBARRIO', 'NBI0': 'NBI0', 'NBI1': 'NBI1', 'NBI2': 'NBI2', 'NBI3': 'NBI3', 'NBI4': 'NBI4', 'total1': 'total1', 'NBIPerc': 'NBIPerc', 'pobres': 'pobres', });
lyr_SPSNBI_2.set('fieldAliases', {'Nombre': 'Nombre', 'Codigo': 'Codigo', 'Tipo': 'Tipo', 'Code': 'Code', 'NBARRIO': 'NBARRIO', 'NBI0': 'NBI0', 'NBI1': 'NBI1', 'NBI2': 'NBI2', 'NBI3': 'NBI3', 'NBI4': 'NBI4', 'total1': 'total1', 'NBIPerc': 'NBIPerc', 'pobres': 'pobres', });
lyr_TegucigalpaNBIAbsoluto_3.set('fieldAliases', {'GEOCODIGO': 'GEOCODIGO', 'BAR_NOM': 'BAR_NOM', 'Viviendas': 'Viviendas', 'Hogares': 'Hogares', 'Poblacion': 'Poblacion', '0nbi': '0nbi', '1nbi': '1nbi', '2nbi': '2nbi', '3nbi': '3nbi', '4nbi': '4nbi', 'total': 'total', 'nbiperc': 'nbiperc', 'nbiabs': 'nbiabs', });
lyr_TegucigalpaNBI_4.set('fieldAliases', {'GEOCODIGO': 'GEOCODIGO', 'BAR_NOM': 'BAR_NOM', 'Viviendas': 'Viviendas', 'Hogares': 'Hogares', 'Poblacion': 'Poblacion', '0nbi': '0nbi', '1nbi': '1nbi', '2nbi': '2nbi', '3nbi': '3nbi', '4nbi': '4nbi', 'total': 'total', 'nbiperc': 'nbiperc', 'nbiabs': 'nbiabs', });
lyr_SPSNBIAbsoluto_1.set('fieldImages', {'Nombre': '', 'Codigo': '', 'Tipo': '', 'Code': '', 'NBARRIO': '', 'NBI0': '', 'NBI1': '', 'NBI2': '', 'NBI3': '', 'NBI4': '', 'total1': '', 'NBIPerc': '', 'pobres': '', });
lyr_SPSNBI_2.set('fieldImages', {'Nombre': '', 'Codigo': '', 'Tipo': '', 'Code': '', 'NBARRIO': '', 'NBI0': '', 'NBI1': '', 'NBI2': '', 'NBI3': '', 'NBI4': '', 'total1': '', 'NBIPerc': '', 'pobres': '', });
lyr_TegucigalpaNBIAbsoluto_3.set('fieldImages', {'GEOCODIGO': '', 'BAR_NOM': '', 'Viviendas': '', 'Hogares': '', 'Poblacion': '', '0nbi': '', '1nbi': '', '2nbi': '', '3nbi': '', '4nbi': '', 'total': '', 'nbiperc': '', 'nbiabs': '', });
lyr_TegucigalpaNBI_4.set('fieldImages', {'GEOCODIGO': '', 'BAR_NOM': '', 'Viviendas': '', 'Hogares': '', 'Poblacion': '', '0nbi': '', '1nbi': '', '2nbi': '', '3nbi': '', '4nbi': '', 'total': '', 'nbiperc': '', 'nbiabs': '', });
lyr_SPSNBIAbsoluto_1.set('fieldLabels', {'Nombre': 'inline label', 'Codigo': 'inline label', 'Tipo': 'inline label', 'Code': 'inline label', 'NBARRIO': 'inline label', 'NBI0': 'inline label', 'NBI1': 'inline label', 'NBI2': 'inline label', 'NBI3': 'inline label', 'NBI4': 'inline label', 'total1': 'inline label', 'NBIPerc': 'inline label', 'pobres': 'inline label', });
lyr_SPSNBI_2.set('fieldLabels', {'Nombre': 'inline label', 'Codigo': 'inline label', 'Tipo': 'inline label', 'Code': 'inline label', 'NBARRIO': 'inline label', 'NBI0': 'inline label', 'NBI1': 'inline label', 'NBI2': 'inline label', 'NBI3': 'inline label', 'NBI4': 'inline label', 'total1': 'inline label', 'NBIPerc': 'inline label', 'pobres': 'inline label', });
lyr_TegucigalpaNBIAbsoluto_3.set('fieldLabels', {'GEOCODIGO': 'inline label', 'BAR_NOM': 'inline label', 'Viviendas': 'inline label', 'Hogares': 'inline label', 'Poblacion': 'inline label', '0nbi': 'inline label', '1nbi': 'inline label', '2nbi': 'inline label', '3nbi': 'inline label', '4nbi': 'inline label', 'total': 'inline label', 'nbiperc': 'inline label', 'nbiabs': 'inline label', });
lyr_TegucigalpaNBI_4.set('fieldLabels', {'GEOCODIGO': 'inline label', 'BAR_NOM': 'inline label', 'Viviendas': 'inline label', 'Hogares': 'inline label', 'Poblacion': 'inline label', '0nbi': 'inline label', '1nbi': 'inline label', '2nbi': 'inline label', '3nbi': 'inline label', '4nbi': 'inline label', 'total': 'inline label', 'nbiperc': 'inline label', 'nbiabs': 'inline label', });
lyr_TegucigalpaNBI_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});