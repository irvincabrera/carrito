import React, {Component} from 'react';
import axios from 'axios';
import {addInitState, addToCart, checkBD} from "../actions";
import {connect} from "react-redux";
import {Dropdown} from "react-bootstrap";

const style1 = { height: '35.77px' };
const style2 = { fontSize: '10px', color: 'rgb(234, 34, 35)', fontWeight: 'bold', height: '22px'};

export class Contenido extends Component {

    constructor(props) {
        super(props);
        this.checarBD();
    }

    componentDidMount() {
        this.checarBD();
        const url = 'https://qa.commerceonthecloud.com/wcs/resources/store/10151/productview/byCategory/15504';
        axios.get(url).then(res => {
            let data;
            if (res.data) {
                data = res.data;
            } else {
                data = {
                    "recordSetTotal": "10",
                    "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byCategory/15504",
                    "recordSetCount": "10",
                    "MetaData": [{
                        "metaKey": "price",
                        "metaData": "1"
                    }],
                    "recordSetComplete": "true",
                    "CatalogEntryView": [{
                        "keyword": "060119B563",
                        "uniqueID": "10043",
                        "parentCategoryID": "15504",
                        "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/600x600/o4325v54_F4gd3017.png",
                        "productType": "ProductBean",
                        "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/10043",
                        "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/300x300/o4325v54_F4gd3017.png",
                        "shortDescription": "Taladro de percusión",
                        "name": "Taladro de percusión GSB 20-2 RE",
                        "buyable": "false",
                        "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\" tabindex=\"-1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"><div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones técnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tbody><tr><td id=\"tdProducto\">Potencia absorbida</td><td id=\"tdProducto\">800 W</td><tr><td id=\"tdProducto\">Velocidad de giro en vacío</td><td id=\"tdProducto\">0 – 1.100 / 3.000 rpm</td><tr><td id=\"tdProducto\">Potencia útil</td><td id=\"tdProducto\">420 W</td><tr><td id=\"tdProducto\">Peso</td><td id=\"tdProducto\">2.5 kg</td><tr><td id=\"tdProducto\">Par de giro nominal</td><td id=\"tdProducto\">5,2 / 2,0 Nm</td><tr><td id=\"tdProducto\">Rosca de conexión del husillo de taladrar</td><td id=\"tdProducto\">1/2\" – 20 UNF</td><tr><td id=\"tdProducto\">Capacidad mín./máx. de sujeción del portabrocas</td><td id=\"tdProducto\">1,5 – 13 mm</td><tr><td id=\"tdProducto\">Dimensiones de herramienta (anchura)</td><td id=\"tdProducto\">77 mm</td><tr><td id=\"tdProducto\">Dimensiones de herramienta (longitud)</td><td id=\"tdProducto\">365 mm</td><tr><td id=\"tdProducto\">Dimensiones de herramienta (altura)</td><td id=\"tdProducto\">220 mm</td><tr><td id=\"tdProducto\">Número máx. de impactos</td><td id=\"tdProducto\">0 – 17.600 / 48.000 bpm</td><tr><td id=\"tdProducto\">Diámetro de perforación en hormigón</td><td id=\"tdProducto\">20 / 13 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en madera</td><td id=\"tdProducto\">40 / 25 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en acero</td><td id=\"tdProducto\">13 / 8 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en mampostería</td><td id=\"tdProducto\">22 / 16 mm</td><tr><td id=\"tdProducto\">Nivel de presión sonora</td><td id=\"tdProducto\">99 dB(A)</td><tr><td id=\"tdProducto\">Nivel de potencia sonora</td><td id=\"tdProducto\">110 dB(A)</td><tr><td id=\"tdProducto\">Incertidumbre K</td><td id=\"tdProducto\">3 dB</td></tr></tbody></table></div></div><div class=\"col2\"> </div><div class=\"col5 a7col12 acol12 especificacionesDer\"><div class=\"tornillo\"><span class=\"spanTornillo\">Este producto incluye:</span><table id=\"tableProducto\"><tbody><tr><td id=\"tdProducto\">Empuñadura adicional</td></tr></tbody><tr><td id=\"tdProducto\">Limitador de profundidad</td></tr></tbody></table></div></div></div></div></section><section class=\"contenedorBeneficios agregaPadding\" id=\"seccion2\"><div class=\"row\"><div class=\"col6 a7col12 acol12\"><span class=\"h2titCaracteristicas\">Características</span><br><br><div class=\"imagenesCaracteristicas\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o284820v54_lv-167505-49-Logo2anogarantiaBosch2018.png\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o246750v54_wood_picto_01.png\"></div></div></section>",
                        "storeID": "10151",
                        "partNumber": "P-06011A21G1"
                    },
                        {
                            "keyword": "060119B063",
                            "uniqueID": "21001",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/600x600/o4989v54_F4gd3045Gsb202.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/21001",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/300x300/o4989v54_F4gd3045Gsb202.png",
                            "shortDescription": "Taladro de percusión",
                            "name": "Taladro de percusión GSB 20-2",
                            "buyable": "false",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\" tabindex=\"-1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"><div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones técnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tbody><tr><td id=\"tdProducto\">Potencia absorbida</td><td id=\"tdProducto\">800 W</td><tr><td id=\"tdProducto\">Velocidad de giro en vacío</td><td id=\"tdProducto\">1.100 / 3.000 rpm</td><tr><td id=\"tdProducto\">Potencia útil</td><td id=\"tdProducto\">390 W</td><tr><td id=\"tdProducto\">Peso</td><td id=\"tdProducto\">2.5 kg</td><tr><td id=\"tdProducto\">Par de giro nominal</td><td id=\"tdProducto\">5,2 / 2,0 Nm</td><tr><td id=\"tdProducto\">Rosca de conexión del husillo de taladrar</td><td id=\"tdProducto\">1/2\" – 20 UNF</td><tr><td id=\"tdProducto\">Capacidad mín./máx. de sujeción del portabrocas</td><td id=\"tdProducto\">13 mm</td><tr><td id=\"tdProducto\">Número máx. de impactos</td><td id=\"tdProducto\">17.600 / 48.000 bpm</td><tr><td id=\"tdProducto\">Diámetro de perforación en hormigón</td><td id=\"tdProducto\">20 / 13 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en madera</td><td id=\"tdProducto\">40 / 25 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en acero</td><td id=\"tdProducto\">13 / 8 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en mampostería</td><td id=\"tdProducto\">22 / 16 mm</td><tr><td id=\"tdProducto\">Nivel de presión sonora</td><td id=\"tdProducto\">99 dB(A)</td><tr><td id=\"tdProducto\">Nivel de potencia sonora</td><td id=\"tdProducto\">110 dB(A)</td><tr><td id=\"tdProducto\">Incertidumbre K</td><td id=\"tdProducto\">3 dB</td></tr></tbody></table></div></div><div class=\"col2\"> </div><div class=\"col5 a7col12 acol12 especificacionesDer\"><div class=\"tornillo\"><span class=\"spanTornillo\">Este producto incluye:</span><table id=\"tableProducto\"><tbody><tr><td id=\"tdProducto\">Empuñadura adicional</td></tr></tbody></table></div></div></div></div></section><section class=\"contenedorBeneficios agregaPadding\" id=\"seccion2\"><div class=\"row\"><div class=\"col6 a7col12 acol12\"><span class=\"h2titCaracteristicas\">Características</span><br><br><div class=\"imagenesCaracteristicas\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o284820v54_lv-167505-49-Logo2anogarantiaBosch2018.png\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o246750v54_wood_picto_01.png\"></div></div></section>",
                            "storeID": "10151",
                            "partNumber": "P-06011A20G0"
                        },
                        {
                            "keyword": "060119B563",
                            "uniqueID": "10044",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/600x600/o4325v54_F4gd3017.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/10044",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/300x300/o4325v54_F4gd3017.png",
                            "shortDescription": "Taladro de percusión",
                            "name": "Taladro de percusión GSB 20-2 RE",
                            "buyable": "false",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\" tabindex=\"-1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"><div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones técnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tbody><tr><td id=\"tdProducto\">Potencia absorbida</td><td id=\"tdProducto\">800 W</td><tr><td id=\"tdProducto\">Velocidad de giro en vacío</td><td id=\"tdProducto\">0 – 1.100 / 3.000 rpm</td><tr><td id=\"tdProducto\">Potencia útil</td><td id=\"tdProducto\">420 W</td><tr><td id=\"tdProducto\">Peso</td><td id=\"tdProducto\">2.5 kg</td><tr><td id=\"tdProducto\">Par de giro nominal</td><td id=\"tdProducto\">5,2 / 2,0 Nm</td><tr><td id=\"tdProducto\">Rosca de conexión del husillo de taladrar</td><td id=\"tdProducto\">1/2\" – 20 UNF</td><tr><td id=\"tdProducto\">Capacidad mín./máx. de sujeción del portabrocas</td><td id=\"tdProducto\">1,5 – 13 mm</td><tr><td id=\"tdProducto\">Dimensiones de herramienta (anchura)</td><td id=\"tdProducto\">77 mm</td><tr><td id=\"tdProducto\">Dimensiones de herramienta (longitud)</td><td id=\"tdProducto\">365 mm</td><tr><td id=\"tdProducto\">Dimensiones de herramienta (altura)</td><td id=\"tdProducto\">220 mm</td><tr><td id=\"tdProducto\">Número máx. de impactos</td><td id=\"tdProducto\">0 – 17.600 / 48.000 bpm</td><tr><td id=\"tdProducto\">Diámetro de perforación en hormigón</td><td id=\"tdProducto\">20 / 13 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en madera</td><td id=\"tdProducto\">40 / 25 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en acero</td><td id=\"tdProducto\">13 / 8 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en mampostería</td><td id=\"tdProducto\">22 / 16 mm</td><tr><td id=\"tdProducto\">Nivel de presión sonora</td><td id=\"tdProducto\">99 dB(A)</td><tr><td id=\"tdProducto\">Nivel de potencia sonora</td><td id=\"tdProducto\">110 dB(A)</td><tr><td id=\"tdProducto\">Incertidumbre K</td><td id=\"tdProducto\">3 dB</td></tr></tbody></table></div></div><div class=\"col2\"> </div><div class=\"col5 a7col12 acol12 especificacionesDer\"><div class=\"tornillo\"><span class=\"spanTornillo\">Este producto incluye:</span><table id=\"tableProducto\"><tbody><tr><td id=\"tdProducto\">Empuñadura adicional</td></tr></tbody><tr><td id=\"tdProducto\">Limitador de profundidad</td></tr></tbody><tr><td id=\"tdProducto\">Maletín de transporte</td></tr></tbody></table></div></div></div></div></section><section class=\"contenedorBeneficios agregaPadding\" id=\"seccion2\"><div class=\"row\"><div class=\"col6 a7col12 acol12\"><span class=\"h2titCaracteristicas\">Características</span><br><br><div class=\"imagenesCaracteristicas\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o284820v54_lv-167505-49-Logo2anogarantiaBosch2018.png\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o246750v54_wood_picto_01.png\"></div></div></section>",
                            "storeID": "10151",
                            "partNumber": "P-06011A22G1"
                        },
                        {
                            "keyword": "0601126277",
                            "uniqueID": "22812",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/600x600/o275258v54_lv-111049-12-lv-100440-12-GBM16-2.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/22812",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/300x300/o275258v54_lv-111049-12-lv-100440-12-GBM16-2.png",
                            "shortDescription": "Taladro",
                            "name": "Taladro GBM 16-2",
                            "buyable": "false",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\" tabindex=\"-1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"><div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones técnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tbody><tr><td id=\"tdProducto\">Potencia absorbida</td><td id=\"tdProducto\">600 W</td><tr><td id=\"tdProducto\">Velocidad de giro en vacío</td><td id=\"tdProducto\">1.000 – 2.500 rpm</td><tr><td id=\"tdProducto\">Peso</td><td id=\"tdProducto\">2.0 kg</td></tr></tbody></table></div></div><div class=\"col2\"> </div></div></div></section><section class=\"contenedorBeneficios agregaPadding\" id=\"seccion2\"><div class=\"row\"><div class=\"col6 a7col12 acol12\"><span class=\"h2titCaracteristicas\">Características</span><br><br><div class=\"imagenesCaracteristicas\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o27712v54_Bosch_BI_Icon_AuxiliaryHandle.png\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o75610v54_Bosch_BI_Icon_Doubleinsulation.png\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o246750v54_wood_picto_01.png\"></div></div></section>",
                            "storeID": "10151",
                            "partNumber": "P-0601126277"
                        },
                        {
                            "keyword": "06011A02D2",
                            "uniqueID": "22813",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/600x600/o275260v54_lv-111078-12-lv-107832-12-GSB550RE.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/22813",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/300x300/o275260v54_lv-111078-12-lv-107832-12-GSB550RE.png",
                            "shortDescription": "Taladro de percusión",
                            "name": "Taladro de percusión GSB 550 RE",
                            "buyable": "false",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\" tabindex=\"-1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"><div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones técnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tbody><tr><td id=\"tdProducto\">Potencia absorbida</td><td id=\"tdProducto\">550 W</td><tr><td id=\"tdProducto\">Velocidad de giro en vacío</td><td id=\"tdProducto\">0 – 2.800 rpm</td><tr><td id=\"tdProducto\">Peso</td><td id=\"tdProducto\">1.8 kg</td><tr><td id=\"tdProducto\">Capacidad mín./máx. de sujeción del portabrocas</td><td id=\"tdProducto\">13 mm</td><tr><td id=\"tdProducto\">Número máx. de impactos</td><td id=\"tdProducto\">0 – bpm</td><tr><td id=\"tdProducto\">Diámetro de perforación en hormigón</td><td id=\"tdProducto\">13 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en madera</td><td id=\"tdProducto\">25 mm</td><tr><td id=\"tdProducto\">Diámetro de perforación en acero</td><td id=\"tdProducto\">10 mm</td></tr></tbody></table></div></div><div class=\"col2\"> </div></div></div></section><section class=\"contenedorBeneficios agregaPadding\" id=\"seccion2\"><div class=\"row\"><div class=\"col6 a7col12 acol12\"><span class=\"h2titCaracteristicas\">Características</span><br><br><div class=\"imagenesCaracteristicas\"><img style=\"max-height: 100px;\" src=\"https://www.boschenlinea.com/wcsstore/boschmx/images/300x300/o246750v54_wood_picto_01.png\"></div></div></section>",
                            "storeID": "10151",
                            "partNumber": "P-06011A01G0"
                        },
                        {
                            "keyword": "0615A000UU,Combo,Taladro,GSB 450 RE,Set X-LINE 15",
                            "uniqueID": "30002",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UU/600x600/0615A000UU-0.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/30002",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UU/300x300/0615A000UU-0.png",
                            "shortDescription": "Taladro de Percusion GSB 450 Professional con un Juego de Puntas Bosch - 15 pz",
                            "name": "GSB 450 RE + Set X-LINE 15 P",
                            "Price": [{
                                "priceUsage": "Offer",
                                "priceDescription": "I",
                                "priceValue": "908.0"
                            }],
                            "buyable": "true",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li><li class=\"menuDownLi\"><a href=\"#seccion2\">Beneficios</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"> <div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones t&eacute;cnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">Taladro de percusión</td><td id=\"tdProducto\"></td></tr><tr><td id=\"tdProducto\">Rosca de conexión del husillo de taladrar</td><td id=\"tdProducto\">3/8\" -24 UNF</td></tr><tr><td id=\"tdProducto\">Potencia absorbida</td><td id=\"tdProducto\">450 W</td></tr><tr><td id=\"tdProducto\">Capacidad mín./máx. de sujeción del portabrocas</td><td id=\"tdProducto\">1 - 10 mm</td></tr><tr><td id=\"tdProducto\">Nivel de vibraciones generadas ah (metal)</td><td id=\"tdProducto\">4,9 m/s²</td></tr><tr><td id=\"tdProducto\">Ø de perforación en madera</td><td id=\"tdProducto\">20 mm</td></tr><tr><td id=\"tdProducto\">Dímetro de perforación en acero</td><td id=\"tdProducto\">10 mm</td></tr><tr><td id=\"tdProducto\">Diámetro de perforación en hormigón</td><td id=\"tdProducto\">10 mm</td></tr><tr><td id=\"tdProducto\">Velocidad de giro en vacío</td><td id=\"tdProducto\">0 - 3.100 rpm</td></tr></table></div></div><div class=\"col2\">&nbsp;</div><div class=\"col5 a7col12 acol12 especificacionesDer\"><div class=\"tornillo\"> <span class=\"spanTornillo\">Este producto incluye:</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">3 Brocas para Concreto Ø 5/6/8 mm.</td></tr><tr><td id=\"tdProducto\">3 Brocas para Madera Ø 4/6/8 mm.</td></tr><tr><td id=\"tdProducto\">GSB 450 RE </td></tr><tr><td id=\"tdProducto\">Set X-LINE 15 P</td></tr></table></div></div></div></div></section><section class=\"contenedorBeneficios\" id=\"seccion2\"> <div class=\"row\"><div class=\"col12\"><span class=\"h1Beneficios\">&#191;Por qu&eacute; este producto?</span></div><div class=\"col6 a7col12 acol12\"><span class=\"h2titBeneficios\">Los mejores productos</span><br /><ul class=\"listaBeneficios\"><li>El taladro es pequeño y ergonomico, justo como lo necesitas</li><li>Este combo es básico en el taller. Tecnología Bosch</li></ul></div><div class=\"col6 a7col12 acol12\">&nbsp;</div></section>",
                            "storeID": "10151",
                            "partNumber": "P-0615A000UU"
                        },
                        {
                            "keyword": "0615A000UV,Combo,Rotomartillo,Taladro,GSB 550 RE,SET SKIL PULGADAS 101 P",
                            "uniqueID": "30003",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UV/600x600/0615A000UV-0.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/30003",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UV/300x300/0615A000UV-0.png",
                            "shortDescription": "Rotomartillo GSB 550 RE 4.6A Bosch incluye un Set Skil Pulgadas 101 pz.",
                            "name": "GSB 550 RE + SET SKIL PULGADAS 101P",
                            "Price": [{
                                "priceUsage": "Offer",
                                "priceDescription": "I",
                                "priceValue": "1156.0"
                            }],
                            "buyable": "true",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li><li class=\"menuDownLi\"><a href=\"#seccion2\">Beneficios</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"> <div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones t&eacute;cnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">Potencia absorbida</td><td id=\"tdProducto\">550 W</td></tr><tr><td id=\"tdProducto\">Velocidad de giro en vacío</td><td id=\"tdProducto\">0 - 2.800 rpm</td></tr><tr><td id=\"tdProducto\">Peso</td><td id=\"tdProducto\">550 W</td></tr><tr><td id=\"tdProducto\">Número máx. de impactos</td><td id=\"tdProducto\">0 - bpm</td></tr><tr><td id=\"tdProducto\">Dímetro de perforación en hormigón</td><td id=\"tdProducto\">13 mm</td></tr><tr><td id=\"tdProducto\">Ø de perforación en madera</td><td id=\"tdProducto\">25 mm</td></tr><tr><td id=\"tdProducto\">Empuñadura auxiliar con limitador de profundidad</td><td id=\"tdProducto\"></td></tr><tr><td id=\"tdProducto\">Velocidad de rotación </td><td id=\"tdProducto\">700 rpm</td></tr></table></div></div><div class=\"col2\">&nbsp;</div><div class=\"col5 a7col12 acol12 especificacionesDer\"><div class=\"tornillo\"> <span class=\"spanTornillo\">Este producto incluye:</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">GSB 550 RE</td></tr><tr><td id=\"tdProducto\">SET SKIL PULGADAS 101 Pz.</td></tr></table></div></div></div></div></section><section class=\"contenedorBeneficios\" id=\"seccion2\"> <div class=\"row\"><div class=\"col12\"><span class=\"h1Beneficios\">&#191;Por qu&eacute; este producto?</span></div><div class=\"col6 a7col12 acol12\"><span class=\"h2titBeneficios\">Los mejores productos</span><br /><ul class=\"listaBeneficios\"><li>El equipo perfecto para perforar o atornillar</li><li>Perfecto para tener más completa tu caja de herramientas</li><li>Es hora de renovar tus herramientas con estos súper precios</li></ul></div><div class=\"col6 a7col12 acol12\">&nbsp;</div></section>",
                            "storeID": "10151",
                            "partNumber": "P-0615A000UV"
                        },
                        {
                            "keyword": "0615A000UW,Combo,Rotomartillo,GSB 550 RE Con 14 BROCAS,SET BROCA ESPADA 3/8 6P",
                            "uniqueID": "30004",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UW/600x600/0615A000UW-0.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/30004",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UW/300x300/0615A000UW-0.png",
                            "shortDescription": "Rotomartillo Profesional Bosch GSB 550 RE con 14 Brocas + Set adicional de Brocas marca Skil",
                            "name": "GSB 550 RE Con 14 BROCAS + SET BROCA ESPADA 3/8 6P",
                            "Price": [{
                                "priceUsage": "Offer",
                                "priceDescription": "I",
                                "priceValue": "1432.0"
                            }],
                            "buyable": "true",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li><li class=\"menuDownLi\"><a href=\"#seccion2\">Beneficios</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"> <div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones t&eacute;cnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">Corriente</td><td id=\"tdProducto\"> 4,6 A.</td></tr><tr><td id=\"tdProducto\">Potencia </td><td id=\"tdProducto\">550 W</td></tr><tr><td id=\"tdProducto\">Voltaje</td><td id=\"tdProducto\">127 V</td></tr><tr><td id=\"tdProducto\">Frecuencia de percusión máx.</td><td id=\"tdProducto\">0-44.800 min-1.</td></tr><tr><td id=\"tdProducto\">Revoluciones por minuto</td><td id=\"tdProducto\">0-2,800 min-1.</td></tr><tr><td id=\"tdProducto\">Capacidad de sujeción del portabrocas</td><td id=\"tdProducto\">13 mm (1/2\").</td></tr><tr><td id=\"tdProducto\">Perforación en madera</td><td id=\"tdProducto\">25 mm.</td></tr><tr><td id=\"tdProducto\">Perforación en acero</td><td id=\"tdProducto\">10 mm.</td></tr><tr><td id=\"tdProducto\">Zanco hexagonal</td><td id=\"tdProducto\">1/4\"</td></tr></table></div></div><div class=\"col2\">&nbsp;</div><div class=\"col5 a7col12 acol12 especificacionesDer\"><div class=\"tornillo\"> <span class=\"spanTornillo\">Este producto incluye:</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">GSB 550 RE Con 14 BROCAS </td></tr><tr><td id=\"tdProducto\">SET BROCA ESPADA 3/8 6 Pz.</td></tr></table></div></div></div></div></section><section class=\"contenedorBeneficios\" id=\"seccion2\"> <div class=\"row\"><div class=\"col12\"><span class=\"h1Beneficios\">&#191;Por qu&eacute; este producto?</span></div><div class=\"col6 a7col12 acol12\"><span class=\"h2titBeneficios\">Los mejores productos</span><br /><ul class=\"listaBeneficios\"><li>Perforar nunca fue tan fácil con este combo</li><li>Superará tus expectativas en el trabajo</li></ul></div><div class=\"col6 a7col12 acol12\">&nbsp;</div></section>",
                            "storeID": "10151",
                            "partNumber": "P-0615A000UW"
                        },
                        {
                            "keyword": "0615A000UX,Combo,BOSCH GO Impact Control,Go,Puntas Impact Control",
                            "uniqueID": "30005",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UX/600x600/0615A000UX-0.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/30005",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UX/300x300/0615A000UX-0.png",
                            "shortDescription": "Bosch Go con un juego de puntas Impact Control 25m | PH1,2,3,Z2,Z3 | 8 PZS.",
                            "name": "BOSCH GO Impact Control + Puntas Impact Control",
                            "Price": [{
                                "priceUsage": "Offer",
                                "priceDescription": "I",
                                "priceValue": "695.0"
                            }],
                            "buyable": "true",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li><li class=\"menuDownLi\"><a href=\"#seccion2\">Beneficios</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"> <div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones t&eacute;cnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">Tensión de la batería</td><td id=\"tdProducto\">3,6 V</td></tr><tr><td id=\"tdProducto\">Torque (suave/duro/máx.)</td><td id=\"tdProducto\">0,28 kg</td></tr><tr><td id=\"tdProducto\">Tipo de batería</td><td id=\"tdProducto\">Litio</td></tr><tr><td id=\"tdProducto\">Portaherramientas</td><td id=\"tdProducto\">Hexágono interior de 1/4\"</td></tr><tr><td id=\"tdProducto\">Ø máx. de los tornillos</td><td id=\"tdProducto\">5 mm</td></tr><tr><td id=\"tdProducto\">Puntas insert 25m</td><td id=\"tdProducto\">PH1,2,3,Z2,Z3</td></tr></table></div></div><div class=\"col2\">&nbsp;</div><div class=\"col5 a7col12 acol12 especificacionesDer\"><div class=\"tornillo\"> <span class=\"spanTornillo\">Este producto incluye:</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">BOSCH GO</td></tr><tr><td id=\"tdProducto\">Puntas Impact Control</td></tr></table></div></div></div></div></section><section class=\"contenedorBeneficios\" id=\"seccion2\"> <div class=\"row\"><div class=\"col12\"><span class=\"h1Beneficios\">&#191;Por qu&eacute; este producto?</span></div><div class=\"col6 a7col12 acol12\"><span class=\"h2titBeneficios\">Los mejores productos</span><br /><ul class=\"listaBeneficios\"><li>El juego perfecto para tener en la casa, taller u oficina.</li><li>El adelanto tecnológico en herramientas es BOSCH GO y Puntas Impact Control</li></ul></div><div class=\"col6 a7col12 acol12\">&nbsp;</div></section>",
                            "storeID": "10151",
                            "partNumber": "P-0615A000UX"
                        },
                        {
                            "keyword": "0615A000UY,Combo,Taladro de Percursión Skil 10 RE + 6604 SET X-LINE 15 P",
                            "uniqueID": "30006",
                            "parentCategoryID": "15504",
                            "fullImage": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UY/600x600/0615A000UY-0.png",
                            "productType": "ProductBean",
                            "resourceId": "https://qa.boschenlinea.com/wcs/resources/lbs/store/10151/productview/byId/30006",
                            "thumbnail": "https://cdn.commerceonthecloud.com/cdn/bosch/images/0615A000UY/300x300/0615A000UY-0.png",
                            "shortDescription": "Taladro de Percusion Skil 10 RE potencia de 570 W con Juego de brocas y puntas Bosch de 15 pz",
                            "name": "Taladro de Percursión Skil 10 RE + 6604 SET X-LINE 15 P",
                            "Price": [{
                                "priceUsage": "Offer",
                                "priceDescription": "I",
                                "priceValue": "715.0"
                            }],
                            "buyable": "true",
                            "longDescription": "<div class=\"lineas\"></div><div class=\"menudown\"><nav class=\"menu\"><ul><li class=\"menuDownLi\"><a href=\"#seccion1\">Especificaciones</a></li><li class=\"menuDownLi\"><a href=\"#seccion2\">Beneficios</a></li></ul></nav></div><section class=\"especificaciones\" id=\"seccion1\"><div class=\"contenedorEspecificaciones\"><div class=\"row\"> <div class=\"col5 a7col12 acol12\"><span class=\"h1Especificaciones\">Especificaciones t&eacute;cnicas</span><div class=\"dImportantes\"><span class=\"spanDImportantes\">Vista general de especificaciones</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">Potencia</td><td id=\"tdProducto\">570 w</td></tr><tr><td id=\"tdProducto\">Mandril </td><td id=\"tdProducto\">10mm (3/8”)</td></tr><tr><td id=\"tdProducto\">Acero</td><td id=\"tdProducto\">10 mm</td></tr><tr><td id=\"tdProducto\">Madera</td><td id=\"tdProducto\">20 mm</td></tr><tr><td id=\"tdProducto\">Hormigón</td><td id=\"tdProducto\">10 mm</td></tr></table></div></div><div class=\"col2\">&nbsp;</div><div class=\"col5 a7col12 acol12 especificacionesDer\"><div class=\"tornillo\"> <span class=\"spanTornillo\">Este producto incluye:</span><table id=\"tableProducto\"><tr><td id=\"tdProducto\">3 Brocas para Concreto</td></tr><tr><td id=\"tdProducto\">3 Brocas para Madera</td></tr><tr><td id=\"tdProducto\">8 Puntas para Atornillar</td></tr><tr><td id=\"tdProducto\">Taladro de Rotomartillo Skil 6604</td></tr><tr><td id=\"tdProducto\">SET X-LINE 15 P</td></tr></table></div></div></div></div></section><section class=\"contenedorBeneficios\" id=\"seccion2\"> <div class=\"row\"><div class=\"col12\"><span class=\"h1Beneficios\">&#191;Por qu&eacute; este producto?</span></div><div class=\"col6 a7col12 acol12\"><span class=\"h2titBeneficios\">Los mejores productos</span><br /><ul class=\"listaBeneficios\"><li>Economía para tu bolsillo y durabilidad es lo beneficio de éste combo</li><li>La caja de accesorios es cómoda para llevar a todos lados</li><li>El taladro cuenta con un diseño ergonómico y compacto, permite aplicaciones en lugares de difícil acceso</li></ul></div><div class=\"col6 a7col12 acol12\">&nbsp;</div></section>",
                            "storeID": "10151",
                            "partNumber": "P-0615A000UY"
                        }
                    ],
                    "recordSetStartNumber": "0",
                    "FacetView": [{
                        "Entry": [{
                            "count": "5",
                            "label": "Bosch",
                            "entryValue": "mfName_ntk_cs%3A%22Bosch%22"
                        }],
                        "name": "ManufacturerName",
                        "value": "mfName_ntk_cs"
                    },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "220 mm",
                                "entryValue": "ads_f10004_ntk_cs%3A%22220+mm%22"
                            }],
                            "name": "Altura ",
                            "value": "ads_f10004_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "365 mm",
                                "entryValue": "ads_f10054_ntk_cs%3A%22365+mm%22"
                            }],
                            "name": "Longitud ",
                            "value": "ads_f10054_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "1/2” – 13 mm",
                                "entryValue": "ads_f10058_ntk_cs%3A%221%2F2%E2%80%9D+%E2%80%93+13+mm%22"
                            },
                                {
                                    "count": "1",
                                    "label": "10mm (3/8”)",
                                    "entryValue": "ads_f10058_ntk_cs%3A%2210mm+%283%2F8%E2%80%9D%29%22"
                                }
                            ],
                            "name": "Mandril",
                            "value": "ads_f10058_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "13 / 8 mm",
                                "entryValue": "ads_f10063_ntk_cs%3A%2213+%2F+8+mm%22"
                            },
                                {
                                    "count": "1",
                                    "label": "13 mm",
                                    "entryValue": "ads_f10063_ntk_cs%3A%2213+mm%22"
                                }
                            ],
                            "name": "Máx. Ø de perforación en acero",
                            "value": "ads_f10063_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "40 mm",
                                "entryValue": "ads_f10065_ntk_cs%3A%2240+mm%22"
                            }],
                            "name": "Máx. Ø de perforación en madera",
                            "value": "ads_f10065_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "20 mm",
                                "entryValue": "ads_f10066_ntk_cs%3A%2220+mm%22"
                            },
                                {
                                    "count": "1",
                                    "label": "22 / 16 mm",
                                    "entryValue": "ads_f10066_ntk_cs%3A%2222+%2F+16+mm%22"
                                }
                            ],
                            "name": "Máx. Ø de perforación en mampostería",
                            "value": "ads_f10066_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "0 – 1.100 / 3.000 min–1",
                                "entryValue": "ads_f10074_ntk_cs%3A%220+%E2%80%93+1.100+%2F+3.000+min%E2%80%931%22"
                            }],
                            "name": "N° de revoluciones (s/ carga) ",
                            "value": "ads_f10074_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "5,2 / 2,0 Nm",
                                "entryValue": "ads_f10076_ntk_cs%3A%225%2C2+%2F+2%2C0+Nm%22"
                            }],
                            "name": "Par de giro máx.",
                            "value": "ads_f10076_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "0 – 48.000 ipm",
                                "entryValue": "ads_f10077_ntk_cs%3A%220+%E2%80%93+48.000+ipm%22"
                            },
                                {
                                    "count": "1",
                                    "label": "48000",
                                    "entryValue": "ads_f10077_ntk_cs%3A%2248000%22"
                                }
                            ],
                            "name": "Percusiones por minuto",
                            "value": "ads_f10077_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "2,6 kg",
                                "entryValue": "ads_f10078_ntk_cs%3A%222%2C6+kg%22"
                            },
                                {
                                    "count": "1",
                                    "label": "2.5 kg",
                                    "entryValue": "ads_f10078_ntk_cs%3A%222.5+kg%22"
                                },
                                {
                                    "count": "1",
                                    "label": "550 W",
                                    "entryValue": "ads_f10078_ntk_cs%3A%22550+W%22"
                                }
                            ],
                            "name": "Peso",
                            "value": "ads_f10078_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "Hexágono interior de 1/4\"",
                                "entryValue": "ads_f10082_ntk_cs%3A%22Hex%C3%A1gono+interior+de+1%2F4%5C%22%22"
                            }],
                            "name": "Portaherramientas",
                            "value": "ads_f10082_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "420 W",
                                "entryValue": "ads_f10085_ntk_cs%3A%22420+W%22"
                            },
                                {
                                    "count": "1",
                                    "label": "550 W",
                                    "entryValue": "ads_f10085_ntk_cs%3A%22550+W%22"
                                },
                                {
                                    "count": "1",
                                    "label": "570 w",
                                    "entryValue": "ads_f10085_ntk_cs%3A%22570+w%22"
                                },
                                {
                                    "count": "1",
                                    "label": "800 W",
                                    "entryValue": "ads_f10085_ntk_cs%3A%22800+W%22"
                                }
                            ],
                            "name": "Potencia",
                            "value": "ads_f10085_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "450 W",
                                "entryValue": "ads_f10086_ntk_cs%3A%22450+W%22"
                            },
                                {
                                    "count": "1",
                                    "label": "550 W",
                                    "entryValue": "ads_f10086_ntk_cs%3A%22550+W%22"
                                },
                                {
                                    "count": "1",
                                    "label": "800 W",
                                    "entryValue": "ads_f10086_ntk_cs%3A%22800+W%22"
                                }
                            ],
                            "name": "Potencia absorbida",
                            "value": "ads_f10086_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "0-2,800 min-1.",
                                "entryValue": "ads_f10100_ntk_cs%3A%220-2%2C800+min-1.%22"
                            }],
                            "name": "Revoluciones por minuto",
                            "value": "ads_f10100_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "127 V",
                                "entryValue": "ads_f10112_ntk_cs%3A%22127+V%22"
                            }],
                            "name": "Voltaje",
                            "value": "ads_f10112_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "77 mm",
                                "entryValue": "ads_f10511_ntk_cs%3A%2277+mm%22"
                            }],
                            "name": "Ancho",
                            "value": "ads_f10511_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "1 - 10 mm",
                                "entryValue": "ads_f10512_ntk_cs%3A%221+-+10+mm%22"
                            },
                                {
                                    "count": "1",
                                    "label": "1,5 - 13 mm",
                                    "entryValue": "ads_f10512_ntk_cs%3A%221%2C5+-+13+mm%22"
                                }
                            ],
                            "name": "Capacidad mín./máx. de sujeción del portabrocas",
                            "value": "ads_f10512_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "20 / 13 mm",
                                "entryValue": "ads_f10515_ntk_cs%3A%2220+%2F+13+mm%22"
                            }],
                            "name": "Máx. Ø de perforación en hormigón",
                            "value": "ads_f10515_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "7 m/s²",
                                "entryValue": "ads_f10516_ntk_cs%3A%227%C2%A0m%2Fs%C2%B2%22"
                            }],
                            "name": "Nivel de vibraciones generadas ah",
                            "value": "ads_f10516_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "0 - 17,600 / 48,000 bpm",
                                "entryValue": "ads_f10517_ntk_cs%3A%220+-+17%2C600+%2F+48%2C000+bpm%22"
                            }],
                            "name": "Número de impactos máx.",
                            "value": "ads_f10517_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "1/2\"",
                                "entryValue": "ads_f10519_ntk_cs%3A%221%2F2%5C%22%22"
                            }],
                            "name": "Rosca del husillo de taladrar",
                            "value": "ads_f10519_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "3,6 V",
                                "entryValue": "ads_f10520_ntk_cs%3A%223%2C6+V%22"
                            }],
                            "name": "Tensión de la batería",
                            "value": "ads_f10520_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "0 - 1100 / 3000 rpm",
                                "entryValue": "ads_f10523_ntk_cs%3A%220+-+1100+%2F+3000+rpm%22"
                            },
                                {
                                    "count": "1",
                                    "label": "0 - 2.800 rpm",
                                    "entryValue": "ads_f10523_ntk_cs%3A%220+-+2.800+rpm%22"
                                },
                                {
                                    "count": "1",
                                    "label": "0 - 3.100 rpm",
                                    "entryValue": "ads_f10523_ntk_cs%3A%220+-+3.100+rpm%22"
                                }
                            ],
                            "name": "Velocidad de giro en vacío",
                            "value": "ads_f10523_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "1.5 m/s²",
                                "entryValue": "ads_f10527_ntk_cs%3A%221.5%C2%A0m%2Fs%C2%B2%22"
                            }],
                            "name": "Atornillar: Incertidumbre K",
                            "value": "ads_f10527_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "2.5 m/s²",
                                "entryValue": "ads_f10528_ntk_cs%3A%222.5%C2%A0m%2Fs%C2%B2%22"
                            }],
                            "name": "Atornillar: Nivel de vibraciones generadas ah",
                            "value": "ads_f10528_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "36,0 / 14,0 Nm",
                                "entryValue": "ads_f10536_ntk_cs%3A%2236%2C0+%2F+14%2C0+Nm%22"
                            }],
                            "name": "Par de giro (atornillado blando)",
                            "value": "ads_f10536_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "19 m/s²",
                                "entryValue": "ads_f10541_ntk_cs%3A%2219%C2%A0m%2Fs%C2%B2%22"
                            },
                                {
                                    "count": "1",
                                    "label": "2.3 m/s²",
                                    "entryValue": "ads_f10541_ntk_cs%3A%222.3%C2%A0m%2Fs%C2%B2%22"
                                }
                            ],
                            "name": "Taladrar con percusión en hormigón: Nivel de vibraciones generadas ah",
                            "value": "ads_f10541_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "1.6 m/s²",
                                "entryValue": "ads_f10543_ntk_cs%3A%221.6%C2%A0m%2Fs%C2%B2%22"
                            }],
                            "name": "Taladrar en metal: Incertidumbre K",
                            "value": "ads_f10543_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": " 4,6 A.",
                                "entryValue": "ads_f10552_ntk_cs%3A%22+4%2C6+A.%22"
                            }],
                            "name": "Corriente",
                            "value": "ads_f10552_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "Litio",
                                "entryValue": "ads_f23519_ntk_cs%3A%22Litio%22"
                            }],
                            "name": "Tipo de batería",
                            "value": "ads_f23519_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "13 mm (1/2\").",
                                "entryValue": "ads_f25005_ntk_cs%3A%2213+mm+%281%2F2%5C%22%29.%22"
                            }],
                            "name": "Capacidad de sujeción del portabrocas",
                            "value": "ads_f25005_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "10 mm",
                                "entryValue": "ads_f25006_ntk_cs%3A%2210+mm%22"
                            }],
                            "name": "Diámetro de perforación en hormigón",
                            "value": "ads_f25006_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "10 mm",
                                "entryValue": "ads_f25013_ntk_cs%3A%2210+mm%22"
                            }],
                            "name": "Dímetro de perforación en acero",
                            "value": "ads_f25013_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "13 mm",
                                "entryValue": "ads_f25014_ntk_cs%3A%2213+mm%22"
                            }],
                            "name": "Dímetro de perforación en hormigón",
                            "value": "ads_f25014_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "0-44.800 min-1.",
                                "entryValue": "ads_f25015_ntk_cs%3A%220-44.800+min-1.%22"
                            }],
                            "name": "Frecuencia de percusión máx.",
                            "value": "ads_f25015_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "10 mm",
                                "entryValue": "ads_f25018_ntk_cs%3A%2210+mm%22"
                            }],
                            "name": "Hormigón",
                            "value": "ads_f25018_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "20 mm",
                                "entryValue": "ads_f25019_ntk_cs%3A%2220+mm%22"
                            }],
                            "name": "Madera",
                            "value": "ads_f25019_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "4,9 m/s²",
                                "entryValue": "ads_f25021_ntk_cs%3A%224%2C9+m%2Fs%C2%B2%22"
                            }],
                            "name": "Nivel de vibraciones generadas ah (metal)",
                            "value": "ads_f25021_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "0 - bpm",
                                "entryValue": "ads_f25022_ntk_cs%3A%220+-+bpm%22"
                            }],
                            "name": "Número máx. de impactos",
                            "value": "ads_f25022_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "10 mm.",
                                "entryValue": "ads_f25023_ntk_cs%3A%2210+mm.%22"
                            }],
                            "name": "Perforación en acero",
                            "value": "ads_f25023_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "25 mm.",
                                "entryValue": "ads_f25024_ntk_cs%3A%2225+mm.%22"
                            }],
                            "name": "Perforación en madera",
                            "value": "ads_f25024_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "PH1,2,3,Z2,Z3",
                                "entryValue": "ads_f25027_ntk_cs%3A%22PH1%2C2%2C3%2CZ2%2CZ3%22"
                            }],
                            "name": "Puntas insert 25m",
                            "value": "ads_f25027_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "3/8\" -24 UNF",
                                "entryValue": "ads_f25028_ntk_cs%3A%223%2F8%5C%22+-24+UNF%22"
                            }],
                            "name": "Rosca de conexión del husillo de taladrar",
                            "value": "ads_f25028_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "0,28 kg",
                                "entryValue": "ads_f25033_ntk_cs%3A%220%2C28+kg%22"
                            }],
                            "name": "Torque (suave/duro/máx.)",
                            "value": "ads_f25033_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "700 rpm",
                                "entryValue": "ads_f25034_ntk_cs%3A%22700+rpm%22"
                            }],
                            "name": "Velocidad de rotación ",
                            "value": "ads_f25034_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "1/4\"",
                                "entryValue": "ads_f25035_ntk_cs%3A%221%2F4%5C%22%22"
                            }],
                            "name": "Zanco hexagonal",
                            "value": "ads_f25035_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "20 mm",
                                "entryValue": "ads_f25036_ntk_cs%3A%2220+mm%22"
                            },
                                {
                                    "count": "1",
                                    "label": "25 mm",
                                    "entryValue": "ads_f25036_ntk_cs%3A%2225+mm%22"
                                }
                            ],
                            "name": "Ø de perforación en madera",
                            "value": "ads_f25036_ntk_cs"
                        },
                        {
                            "Entry": [{
                                "count": "1",
                                "label": "5 mm",
                                "entryValue": "ads_f25037_ntk_cs%3A%225+mm%22"
                            }],
                            "name": "Ø máx. de los tornillos",
                            "value": "ads_f25037_ntk_cs"
                        }
                    ],
                    "BreadCrumbTrailEntryView": [{
                        "value": "15501",
                        "label": "Herramientas eléctricas profesionales",
                        "type": "FACET_ENTRY_CATEGORY"
                    },
                        {
                            "value": "15504",
                            "label": "Taladros, taladros de impacto y atornilladores",
                            "type": "FACET_ENTRY_CATEGORY"
                        }
                    ],
                    "resourceName": "productview"
                };
            }
            return data;
        }).then((data) => {
            this.setState({items: data.CatalogEntryView});
            this.agregarDatosInicio(data);
        });
    }

    añadirCompra = (id) => {
        this.props.addToCart(id);
    };

    agregarDatosInicio = (data) => {
        this.props.addInitState(data);
    };

    checarBD = (data) => {
        this.props.checkBD(data);
    };

    sortAscending = () => {
        const articulos = this.state.items;
        articulos.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({ items: articulos })
    };

    sortDescending = () => {
        const articulos = this.state.items;
        articulos.sort((a, b) => a.name.localeCompare(b.name)).reverse();
        this.setState({ items: articulos })
    };

    sortPriceAsc = () => {
        const articulos = this.state.items;
        const sinPrecio = [];
        const conPrecio = [];
        articulos.forEach(articulo => {
            if (articulo.Price) {
                conPrecio.push(articulo);
            } else {
                sinPrecio.push(articulo);
            }
        });
        conPrecio.sort((a, b) => parseInt(a.Price[0].priceValue,10) - (parseInt(b.Price[0].priceValue,10)));
        sinPrecio.forEach(artSin => {
            conPrecio.push(artSin);
        });
        this.setState({ items: conPrecio })
    };

    sortPriceDesc = () => {
        const articulos = this.state.items;
        const sinPrecio = [];
        const conPrecio = [];
        articulos.forEach(articulo => {
            if (articulo.Price) {
                conPrecio.push(articulo);
            } else {
                sinPrecio.push(articulo);
            }
        });
        conPrecio.sort((a, b) => parseInt(a.Price[0].priceValue,10) - (parseInt(b.Price[0].priceValue,10))).reverse();
        sinPrecio.forEach(artSin => {
            conPrecio.push(artSin);
        });
        this.setState({ items: conPrecio })
    };

    render() {
        let itemList = [];
        if(this.state != null) {
            itemList = this.state.items.map(item => {
                return (
                    <div className="col-12 col-sm-6 col-lg-3 col-xl-3 product-card--container" key={item.uniqueID}>
                        <div className="product-card pt-1">
                            <div className="row">
                                <div className="col-6 col-sm-12">
                                    <div className="image-container">
                                        <img src={item.thumbnail} alt="Neceser Rose Gold Mimosa-2500001312181P" className="imgWidthProduct"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-12">
                                    <div className="product-card--detailsContainer">
                                        <h2 className="product-card--name">{item.name}</h2>
                                        <div style={style1}></div>
                                        {item.Price ? (
                                            <div>
                                                <p className="product-card--listPrice"><span
                                                    className="helvetica">$ {item.Price[0].priceValue}</span></p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="product-card--offerPrice"><span className="helvetica">No Disponible por el momento</span>
                                                </p>
                                            </div>
                                        )}
                                        <div style={style2}></div>
                                        <div className="product-card--footer col-12">
                                            <div className="row">
                                                <div className="col-6 col-sm-12">
                                                    {item.Price ? (
                                                        <button id="2500001312181P" className="buttonGenericoRojo"
                                                                onClick={() => {
                                                                    this.añadirCompra(item.uniqueID)
                                                                }}>
                                                            <span>Comprar</span>
                                                        </button>
                                                    ) : (
                                                        <button id="2500001312181P" className="buttonGenericoRojo"
                                                                disabled={true}>
                                                            <span>Comprar</span>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            });
        }

        return (
            <div className="category--container">
                <h2 className="center">Artículos de herramienta</h2>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Ordenar Por
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.sortAscending} >A - Z</Dropdown.Item>
                        <Dropdown.Item onClick={this.sortDescending}>Z -A</Dropdown.Item>
                        <Dropdown.Item onClick={this.sortPriceAsc}>Menor Precio</Dropdown.Item>
                        <Dropdown.Item onClick={this.sortPriceDesc}>Mayor Precio</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="row rowProductsContainer">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    if (state != null) {
        return {
            items: state.items
        }
    }
};

const mapDispatchToProps = (dispatch)=> {
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addInitState: (data)=>{dispatch(addInitState(data))},
        checkBD: ()=>{dispatch(checkBD())}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contenido);
