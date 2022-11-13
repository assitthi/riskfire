var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr__1 = new ol.layer.Image({
                            opacity: 1,
                            title: "พื้นที่เสี่ยง",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11049253.167069, 2154169.329722, 11196627.939560, 2328456.279944]
                            })
                        });
var lyr__2 = new ol.layer.Image({
                            opacity: 1,
                            title: "จุดความร้อน",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11048714.759220, 2154235.304695, 11194087.841914, 2326010.588050]
                            })
                        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> ตำบล'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr__1,lyr__2,lyr__3];
lyr__3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'P_CODE': 'P_CODE', 'A_CODE': 'A_CODE', 'T_CODE': 'T_CODE', 'P_NAME_T': 'P_NAME_T', 'P_NAME_E': 'P_NAME_E', 'A_NAME_T': 'A_NAME_T', 'A_NAME_E': 'A_NAME_E', 'T_NAME_T': 'T_NAME_T', 'T_NAME_E': 'T_NAME_E', });
lyr__3.set('fieldImages', {'OBJECTID': 'Range', 'P_CODE': 'TextEdit', 'A_CODE': 'TextEdit', 'T_CODE': 'TextEdit', 'P_NAME_T': 'TextEdit', 'P_NAME_E': 'TextEdit', 'A_NAME_T': 'TextEdit', 'A_NAME_E': 'TextEdit', 'T_NAME_T': 'TextEdit', 'T_NAME_E': 'TextEdit', });
lyr__3.set('fieldLabels', {'OBJECTID': 'no label', 'P_CODE': 'no label', 'A_CODE': 'no label', 'T_CODE': 'no label', 'P_NAME_T': 'no label', 'P_NAME_E': 'no label', 'A_NAME_T': 'no label', 'A_NAME_E': 'no label', 'T_NAME_T': 'no label', 'T_NAME_E': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});