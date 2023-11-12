document.addEventListener('DOMContentLoaded', function() {
    const secciones = document.querySelectorAll('.seccion');

    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    
    document.getElementById('rubro').addEventListener('change', function() {
        const bellezaDiv = document.querySelector('.salud-belleza-bienestar');
        const textilDiv = document.querySelector('.ropa-zapatos-accesorios');

        if (this.value === 'belleza') {
            bellezaDiv.style.display = 'block';
            textilDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
        } 
        else if (this.value === 'textil') {
            bellezaDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
            textilDiv.style.display = 'block';
        }
        else if (this.value === 'elegir') {
            bellezaDiv.style.display = 'none';
            textilDiv.style.display = 'none';
        }
    });
});

document.getElementById('servicios').addEventListener('change', function() {
    const belleza1Div = document.querySelector('.belleza1');

    if (this.value === 'belleza1') {
        belleza1Div.style.display = 'block';
    } 
    else {
        belleza1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});



// ----- Cabello ----- //
document.getElementById('cabello').addEventListener('change', function() {
    const cabelloDiv = document.querySelector('.cabello');

    if (this.value === 'si') {
        cabelloDiv.style.display = 'block';
    } 
    else {
        cabelloDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

    document.getElementById('tijeras1').addEventListener('change', function() {
        const costost1Div = document.getElementById('costost1');
        const tiempot1Div = document.getElementById('tiempot1');

        if (this.value === 'si') {
            costost1Div.classList.remove('oculto');
            tiempot1Div.classList.remove('oculto');
        } else {
            costost1Div.classList.add('oculto');
            tiempot1Div.classList.add('oculto');
        }
    });

    document.getElementById('tijeras2').addEventListener('change', function() {
        const costost2Div = document.getElementById('costost2');
        const tiempot2Div = document.getElementById('tiempot2');

        if (this.value === 'si') {
            costost2Div.classList.remove('oculto');
            tiempot2Div.classList.remove('oculto');
        } else {
            costost2Div.classList.add('oculto');
            tiempot2Div.classList.add('oculto');
        }
    });

    document.getElementById('tijeras3').addEventListener('change', function() {
        const costost3Div = document.getElementById('costost3');
        const tiempot3Div = document.getElementById('tiempot3');

        if (this.value === 'si') {
            costost3Div.classList.remove('oculto');
            tiempot3Div.classList.remove('oculto');
        } else {
            costost3Div.classList.add('oculto');
            tiempot3Div.classList.add('oculto');
        }
    });

    document.getElementById('tijeras4').addEventListener('change', function() {
        const costost4Div = document.getElementById('costost4');
        const tiempot4Div = document.getElementById('tiempot4');

        if (this.value === 'si') {
            costost4Div.classList.remove('oculto');
            tiempot4Div.classList.remove('oculto');
        } else {
            costost4Div.classList.add('oculto');
            tiempot4Div.classList.add('oculto');
        }
    });

    document.getElementById('capa').addEventListener('change', function() {
        const costoscDiv = document.getElementById('costosc');
        const tiempocDiv = document.getElementById('tiempoc');

        if (this.value === 'si') {
            costoscDiv.classList.remove('oculto');
            tiempocDiv.classList.remove('oculto');
        } else {
            costoscDiv.classList.add('oculto');
            tiempocDiv.classList.add('oculto');
        }
    });

    document.getElementById('cepillo1').addEventListener('change', function() {
        const costosc1Div = document.getElementById('costosc1');
        const tiempoc1Div = document.getElementById('tiempoc1');

        if (this.value === 'si') {
            costosc1Div.classList.remove('oculto');
            tiempoc1Div.classList.remove('oculto');
        } else {
            costosc1Div.classList.add('oculto');
            tiempoc1Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillo2').addEventListener('change', function() {
        const costosc2Div = document.getElementById('costosc2');
        const tiempoc2Div = document.getElementById('tiempoc2');

        if (this.value === 'si') {
            costosc2Div.classList.remove('oculto');
            tiempoc2Div.classList.remove('oculto');
        } else {
            costosc2Div.classList.add('oculto');
            tiempoc2Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillo3').addEventListener('change', function() {
        const costosc3Div = document.getElementById('costosc3');
        const tiempoc3Div = document.getElementById('tiempoc3');

        if (this.value === 'si') {
            costosc3Div.classList.remove('oculto');
            tiempoc3Div.classList.remove('oculto');
        } else {
            costosc3Div.classList.add('oculto');
            tiempoc3Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillo4').addEventListener('change', function() {
        const costosc4Div = document.getElementById('costosc4');
        const tiempoc4Div = document.getElementById('tiempoc4');

        if (this.value === 'si') {
            costosc4Div.classList.remove('oculto');
            tiempoc4Div.classList.remove('oculto');
        } else {
            costosc4Div.classList.add('oculto');
            tiempoc4Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillo5').addEventListener('change', function() {
        const costosc5Div = document.getElementById('costosc5');
        const tiempoc5Div = document.getElementById('tiempoc5');

        if (this.value === 'si') {
            costosc5Div.classList.remove('oculto');
            tiempoc5Div.classList.remove('oculto');
        } else {
            costosc5Div.classList.add('oculto');
            tiempoc5Div.classList.add('oculto');
        }
    });

    document.getElementById('pinzas').addEventListener('change', function() {
        const costospDiv = document.getElementById('costosp');
        const tiempopDiv = document.getElementById('tiempop');

        if (this.value === 'si') {
            costospDiv.classList.remove('oculto');
            tiempopDiv.classList.remove('oculto');
        } else {
            costospDiv.classList.add('oculto');
            tiempopDiv.classList.add('oculto');
        }
    });

    document.getElementById('secadora').addEventListener('change', function() {
        const costossDiv = document.getElementById('costoss');
        const tiemposDiv = document.getElementById('tiempos');

        if (this.value === 'si') {
            costossDiv.classList.remove('oculto');
            tiemposDiv.classList.remove('oculto');
        } else {
            costossDiv.classList.add('oculto');
            tiemposDiv.classList.add('oculto');
        }
    });

    document.getElementById('plancha').addEventListener('change', function() {
        const costosp1Div = document.getElementById('costosp1');
        const tiempop1Div = document.getElementById('tiempop1');

        if (this.value === 'si') {
            costosp1Div.classList.remove('oculto');
            tiempop1Div.classList.remove('oculto');
        } else {
            costosp1Div.classList.add('oculto');
            tiempop1Div.classList.add('oculto');
        }
    });

    document.getElementById('shampoo').addEventListener('change', function() {
        const costoss1Div = document.getElementById('costoss1');
        const tiempos1Div = document.getElementById('tiempos1');

        if (this.value === 'si') {
            costoss1Div.classList.remove('oculto');
            tiempos1Div.classList.remove('oculto');
        } else {
            costoss1Div.classList.add('oculto');
            tiempos1Div.classList.add('oculto');
        }
    });

    document.getElementById('acondicionador').addEventListener('change', function() {
        const costosaDiv = document.getElementById('costosa');
        const tiempoaDiv = document.getElementById('tiempoa');

        if (this.value === 'si') {
            costosaDiv.classList.remove('oculto');
            tiempoaDiv.classList.remove('oculto');
        } else {
            costosaDiv.classList.add('oculto');
            tiempoaDiv.classList.add('oculto');
        }
    });

    document.getElementById('mascarilla').addEventListener('change', function() {
        const costosmDiv = document.getElementById('costosm');
        const tiempomDiv = document.getElementById('tiempom');

        if (this.value === 'si') {
            costosmDiv.classList.remove('oculto');
            tiempomDiv.classList.remove('oculto');
        } else {
            costosmDiv.classList.add('oculto');
            tiempomDiv.classList.add('oculto');
        }
    });

    document.getElementById('fijador').addEventListener('change', function() {
        const costosfDiv = document.getElementById('costosf');
        const tiempofDiv = document.getElementById('tiempof');

        if (this.value === 'si') {
            costosfDiv.classList.remove('oculto');
            tiempofDiv.classList.remove('oculto');
        } else {
            costosfDiv.classList.add('oculto');
            tiempofDiv.classList.add('oculto');
        }
    });

//Hombre y mujer    
document.getElementById('hom').addEventListener('change', function() {
    const homDiv = document.querySelector('.hombre');

    if (this.value === 'hombre') {
        homDiv.style.display = 'block';
    } 
    else {
        homDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('hombre1').addEventListener('change', function() {
    const criterioDiv = document.getElementById('criterio');
    const rangoDiv = document.getElementById('rango');
    const costohDiv = document.getElementById('costoh');

    if (this.value === 'si') {
        criterioDiv.classList.remove('oculto');
        rangoDiv.classList.remove('oculto');
        costohDiv.classList.add('oculto');
    } else if (this.value === 'no') {
        criterioDiv.classList.add('oculto');
        rangoDiv.classList.add('oculto');
        costohDiv.classList.remove('oculto');
    } else {
        criterioDiv.classList.add('oculto');
        rangoDiv.classList.add('oculto');
        costohDiv.classList.add('oculto');
    }
});

document.getElementById('hom').addEventListener('change', function() {
    const homDiv = document.querySelector('.mujer');

    if (this.value === 'mujer') {
        homDiv.style.display = 'block';
    } 
    else {
        homDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('mujer1').addEventListener('change', function() {
    const criteriomDiv = document.getElementById('criteriom');
    const rangomDiv = document.getElementById('rangom');
    const costomDiv = document.getElementById('costom');

    if (this.value === 'si') {
        criteriomDiv.classList.remove('oculto');
        rangomDiv.classList.remove('oculto');
        costomDiv.classList.add('oculto');
    } else if (this.value === 'no') {
        criteriomDiv.classList.add('oculto');
        rangomDiv.classList.add('oculto');
        costomDiv.classList.remove('oculto');
    } else {
        criteriomDiv.classList.add('oculto');
        rangomDiv.classList.add('oculto');
        costomDiv.classList.add('oculto');
    }
});

document.getElementById('hom').addEventListener('change', function() {
    const homDiv = document.querySelectorAll('.hombre, .mujer');

    if (this.value === 'ambos') {
        homDiv.forEach(element => {
            element.style.display = 'block';
        });
    }
});

// ----- Cabello ----- //

// ----- Uñas ----- //
document.getElementById('uñas').addEventListener('change', function() {
    const uñasDiv = document.querySelector('.uñas');

    if (this.value === 'si') {
        uñasDiv.style.display = 'block';
    } 
    else {
        uñasDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

    document.getElementById('cortauñas').addEventListener('change', function() {
        const costosx1Div = document.getElementById('costosx1');
        const tiempox1Div = document.getElementById('tiempox1');

        if (this.value === 'si') {
            costosx1Div.classList.remove('oculto');
            tiempox1Div.classList.remove('oculto');
        } else {
            costosx1Div.classList.add('oculto');
            tiempox1Div.classList.add('oculto');
        }
    });

    document.getElementById('limapapel').addEventListener('change', function() {
        const costosx2Div = document.getElementById('costosx2');
        const tiempox2Div = document.getElementById('tiempox2');

        if (this.value === 'si') {
            costosx2Div.classList.remove('oculto');
            tiempox2Div.classList.remove('oculto');
        } else {
            costosx2Div.classList.add('oculto');
            tiempox2Div.classList.add('oculto');
        }
    });

    document.getElementById('limametal').addEventListener('change', function() {
        const costosx3Div = document.getElementById('costosx3');
        const tiempox3Div = document.getElementById('tiempox3');

        if (this.value === 'si') {
            costosx3Div.classList.remove('oculto');
            tiempox3Div.classList.remove('oculto');
        } else {
            costosx3Div.classList.add('oculto');
            tiempox3Div.classList.add('oculto');
        }
    });

    document.getElementById('pulidor').addEventListener('change', function() {
        const costosx4Div = document.getElementById('costosx4');
        const tiempox4Div = document.getElementById('tiempox4');

        if (this.value === 'si') {
            costosx4Div.classList.remove('oculto');
            tiempox4Div.classList.remove('oculto');
        } else {
            costosx4Div.classList.add('oculto');
            tiempox4Div.classList.add('oculto');
        }
    });

    document.getElementById('cuticulas').addEventListener('change', function() {
        const costosx5Div = document.getElementById('costosx5');
        const tiempox5Div = document.getElementById('tiempox5');

        if (this.value === 'si') {
            costosx5Div.classList.remove('oculto');
            tiempox5Div.classList.remove('oculto');
        } else {
            costosx5Div.classList.add('oculto');
            tiempox5Div.classList.add('oculto');
        }
    });
    
    document.getElementById('cepillouñas').addEventListener('change', function() {
        const costosx6Div = document.getElementById('costosx6');
        const tiempox6Div = document.getElementById('tiempox6');

        if (this.value === 'si') {
            costosx6Div.classList.remove('oculto');
            tiempox6Div.classList.remove('oculto');
        } else {
            costosx6Div.classList.add('oculto');
            tiempox6Div.classList.add('oculto');
        }
    });

    document.getElementById('alicate').addEventListener('change', function() {
        const costosx7Div = document.getElementById('costosx7');
        const tiempox7Div = document.getElementById('tiempox7');

        if (this.value === 'si') {
            costosx7Div.classList.remove('oculto');
            tiempox7Div.classList.remove('oculto');
        } else {
            costosx7Div.classList.add('oculto');
            tiempox7Div.classList.add('oculto');
        }
    });

    document.getElementById('palitos').addEventListener('change', function() {
        const costosx8Div = document.getElementById('costosx8');
        const tiempox8Div = document.getElementById('tiempox8');

        if (this.value === 'si') {
            costosx8Div.classList.remove('oculto');
            tiempox8Div.classList.remove('oculto');
        } else {
            costosx8Div.classList.add('oculto');
            tiempox8Div.classList.add('oculto');
        }
    });

    document.getElementById('pinzasuñas').addEventListener('change', function() {
        const costosx9Div = document.getElementById('costosx9');
        const tiempox9Div = document.getElementById('tiempox9');

        if (this.value === 'si') {
            costosx9Div.classList.remove('oculto');
            tiempox9Div.classList.remove('oculto');
        } else {
            costosx9Div.classList.add('oculto');
            tiempox9Div.classList.add('oculto');
        }
    });

    document.getElementById('pincelesnail').addEventListener('change', function() {
        const costosx10Div = document.getElementById('costosx10');
        const tiempox10Div = document.getElementById('tiempox10');

        if (this.value === 'si') {
            costosx10Div.classList.remove('oculto');
            tiempox10Div.classList.remove('oculto');
        } else {
            costosx10Div.classList.add('oculto');
            tiempox10Div.classList.add('oculto');
        }
    });

    document.getElementById('lamparaLED').addEventListener('change', function() {
        const costosx11Div = document.getElementById('costosx11');
        const tiempox11Div = document.getElementById('tiempox11');

        if (this.value === 'si') {
            costosx11Div.classList.remove('oculto');
            tiempox11Div.classList.remove('oculto');
        } else {
            costosx11Div.classList.add('oculto');
            tiempox11Div.classList.add('oculto');
        }
    });

    document.getElementById('monomero').addEventListener('change', function() {
        const costosx12Div = document.getElementById('costosx12');
        const tiempox12Div = document.getElementById('tiempox12');

        if (this.value === 'si') {
            costosx12Div.classList.remove('oculto');
            tiempox12Div.classList.remove('oculto');
        } else {
            costosx12Div.classList.add('oculto');
            tiempox12Div.classList.add('oculto');
        }
    });

    document.getElementById('esmaltes').addEventListener('change', function() {
        const costosx13Div = document.getElementById('costosx13');
        const tiempox13Div = document.getElementById('tiempox13');

        if (this.value === 'si') {
            costosx13Div.classList.remove('oculto');
            tiempox13Div.classList.remove('oculto');
        } else {
            costosx13Div.classList.add('oculto');
            tiempox13Div.classList.add('oculto');
        }
    });

    document.getElementById('topcoat').addEventListener('change', function() {
        const costosx14Div = document.getElementById('costosx14');
        const tiempox14Div = document.getElementById('tiempox14');

        if (this.value === 'si') {
            costosx14Div.classList.remove('oculto');
            tiempox14Div.classList.remove('oculto');
        } else {
            costosx14Div.classList.add('oculto');
            tiempox14Div.classList.add('oculto');
        }
    });

    document.getElementById('removedor').addEventListener('change', function() {
        const costosx15Div = document.getElementById('costosx15');
        const tiempox15Div = document.getElementById('tiempox15');

        if (this.value === 'si') {
            costosx15Div.classList.remove('oculto');
            tiempox15Div.classList.remove('oculto');
        } else {
            costosx15Div.classList.add('oculto');
            tiempox15Div.classList.add('oculto');
        }
    });

    document.getElementById('algodon').addEventListener('change', function() {
        const costosx16Div = document.getElementById('costosx16');
        const tiempox16Div = document.getElementById('tiempox16');

        if (this.value === 'si') {
            costosx16Div.classList.remove('oculto');
            tiempox16Div.classList.remove('oculto');
        } else {
            costosx16Div.classList.add('oculto');
            tiempox16Div.classList.add('oculto');
        }
    });

    document.getElementById('toallitas2').addEventListener('change', function() {
        const costosx17Div = document.getElementById('costosx17');
        const tiempox17Div = document.getElementById('tiempox17');

        if (this.value === 'si') {
            costosx17Div.classList.remove('oculto');
            tiempox17Div.classList.remove('oculto');
        } else {
            costosx17Div.classList.add('oculto');
            tiempox17Div.classList.add('oculto');
        }
    });



    
// ----- Uñas ----- //
// ----- Pedicure ----- //

document.getElementById('pedicure').addEventListener('change', function() {
    const pedicureDiv = document.querySelector('.pedicure');

    if (this.value === 'si') {
        pedicureDiv.style.display = 'block';
    } 
    else {
        pedicureDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});


    document.getElementById('cortauñas').addEventListener('change', function() {
        const costosb1Div = document.getElementById('costosb1');
        const tiempob1Div = document.getElementById('tiempob1');

        if (this.value === 'si') {
            costosb1Div.classList.remove('oculto');
            tiempob1Div.classList.remove('oculto');
        } else {
            costosb1Div.classList.add('oculto');
            tiempob1Div.classList.add('oculto');
        }
    });

    document.getElementById('empujador').addEventListener('change', function() {
        const costosb2Div = document.getElementById('costosb2');
        const tiempob2Div = document.getElementById('tiempob2');

        if (this.value === 'si') {
            costosb2Div.classList.remove('oculto');
            tiempob2Div.classList.remove('oculto');
        } else {
            costosb2Div.classList.add('oculto');
            tiempob2Div.classList.add('oculto');
        }
    });

    document.getElementById('alicate').addEventListener('change', function() {
        const costosb3Div = document.getElementById('costosb3');
        const tiempob3Div = document.getElementById('tiempob3');

        if (this.value === 'si') {
            costosb3Div.classList.remove('oculto');
            tiempob3Div.classList.remove('oculto');
        } else {
            costosb3Div.classList.add('oculto');
            tiempob3Div.classList.add('oculto');
        }
    });

    document.getElementById('limap').addEventListener('change', function() {
        const costosb4Div = document.getElementById('costosb4');
        const tiempob4Div = document.getElementById('tiempob4');

        if (this.value === 'si') {
            costosb4Div.classList.remove('oculto');
            tiempob4Div.classList.remove('oculto');
        } else {
            costosb4Div.classList.add('oculto');
            tiempob4Div.classList.add('oculto');
        }
    });

    document.getElementById('piedra').addEventListener('change', function() {
        const costosb5Div = document.getElementById('costosb5');
        const tiempob5Div = document.getElementById('tiempob5');

        if (this.value === 'si') {
            costosb5Div.classList.remove('oculto');
            tiempob5Div.classList.remove('oculto');
        } else {
            costosb5Div.classList.add('oculto');
            tiempob5Div.classList.add('oculto');
        }
    });

    document.getElementById('limamad').addEventListener('change', function() {
        const costosb6Div = document.getElementById('costosb6');
        const tiempob6Div = document.getElementById('tiempob6');

        if (this.value === 'si') {
            costosb6Div.classList.remove('oculto');
            tiempob6Div.classList.remove('oculto');
        } else {
            costosb6Div.classList.add('oculto');
            tiempob6Div.classList.add('oculto');
        }
    });

    document.getElementById('limavid').addEventListener('change', function() {
        const costosb7Div = document.getElementById('costosb7');
        const tiempob7Div = document.getElementById('tiempob7');

        if (this.value === 'si') {
            costosb7Div.classList.remove('oculto');
            tiempob7Div.classList.remove('oculto');
        } else {
            costosb7Div.classList.add('oculto');
            tiempob7Div.classList.add('oculto');
        }
    });

    document.getElementById('limamet').addEventListener('change', function() {
        const costosb8Div = document.getElementById('costosb8');
        const tiempob8Div = document.getElementById('tiempob8');

        if (this.value === 'si') {
            costosb8Div.classList.remove('oculto');
            tiempob8Div.classList.remove('oculto');
        } else {
            costosb8Div.classList.add('oculto');
            tiempob8Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillou').addEventListener('change', function() {
        const costosb9Div = document.getElementById('costosb9');
        const tiempob9Div = document.getElementById('tiempob9');

        if (this.value === 'si') {
            costosb9Div.classList.remove('oculto');
            tiempob9Div.classList.remove('oculto');
        } else {
            costosb9Div.classList.add('oculto');
            tiempob9Div.classList.add('oculto');
        }
    });

    document.getElementById('separador').addEventListener('change', function() {
        const costosb10Div = document.getElementById('costosb10');
        const tiempob10Div = document.getElementById('tiempob10');

        if (this.value === 'si') {
            costosb10Div.classList.remove('oculto');
            tiempob10Div.classList.remove('oculto');
        } else {
            costosb10Div.classList.add('oculto');
            tiempob10Div.classList.add('oculto');
        }
    });

    document.getElementById('palomad').addEventListener('change', function() {
        const costosb11Div = document.getElementById('costosb11');
        const tiempob11Div = document.getElementById('tiempob11');

        if (this.value === 'si') {
            costosb11Div.classList.remove('oculto');
            tiempob11Div.classList.remove('oculto');
        } else {
            costosb11Div.classList.add('oculto');
            tiempob11Div.classList.add('oculto');
        }
    });

    document.getElementById('exfoliante').addEventListener('change', function() {
        const costosb12Div = document.getElementById('costosb12');
        const tiempob12Div = document.getElementById('tiempob12');

        if (this.value === 'si') {
            costosb12Div.classList.remove('oculto');
            tiempob12Div.classList.remove('oculto');
        } else {
            costosb12Div.classList.add('oculto');
            tiempob12Div.classList.add('oculto');
        }
    });

    document.getElementById('cremahid').addEventListener('change', function() {
        const costosb13Div = document.getElementById('costosb13');
        const tiempob13Div = document.getElementById('tiempob13');

        if (this.value === 'si') {
            costosb13Div.classList.remove('oculto');
            tiempob13Div.classList.remove('oculto');
        } else {
            costosb13Div.classList.add('oculto');
            tiempob13Div.classList.add('oculto');
        }
    });

    document.getElementById('esmalte').addEventListener('change', function() {
        const costosb14Div = document.getElementById('costosb14');
        const tiempob14Div = document.getElementById('tiempob14');

        if (this.value === 'si') {
            costosb14Div.classList.remove('oculto');
            tiempob14Div.classList.remove('oculto');
        } else {
            costosb14Div.classList.add('oculto');
            tiempob14Div.classList.add('oculto');
        }
    });

    document.getElementById('suero').addEventListener('change', function() {
        const costosb15Div = document.getElementById('costosb15');
        const tiempob15Div = document.getElementById('tiempob15');

        if (this.value === 'si') {
            costosb15Div.classList.remove('oculto');
            tiempob15Div.classList.remove('oculto');
        } else {
            costosb15Div.classList.add('oculto');
            tiempob15Div.classList.add('oculto');
        }
    });

    document.getElementById('toallas').addEventListener('change', function() {
        const costosb16Div = document.getElementById('costosb16');
        const tiempob16Div = document.getElementById('tiempob16');

        if (this.value === 'si') {
            costosb16Div.classList.remove('oculto');
            tiempob16Div.classList.remove('oculto');
        } else {
            costosb16Div.classList.add('oculto');
            tiempob16Div.classList.add('oculto');
        }
    });

    document.getElementById('acetona').addEventListener('change', function() {
        const costosb17Div = document.getElementById('costosb17');
        const tiempob17Div = document.getElementById('tiempob17');

        if (this.value === 'si') {
            costosb17Div.classList.remove('oculto');
            tiempob17Div.classList.remove('oculto');
        } else {
            costosb17Div.classList.add('oculto');
            tiempob17Div.classList.add('oculto');
        }
    });

    document.getElementById('locion').addEventListener('change', function() {
        const costosb18Div = document.getElementById('costosb18');
        const tiempob18Div = document.getElementById('tiempob18');

        if (this.value === 'si') {
            costosb18Div.classList.remove('oculto');
            tiempob18Div.classList.remove('oculto');
        } else {
            costosb18Div.classList.add('oculto');
            tiempob18Div.classList.add('oculto');
        }
    });

    document.getElementById('esmaltes').addEventListener('change', function() {
        const costosb19Div = document.getElementById('costosb19');
        const cantidadb19Div = document.getElementById('cantidadb19');         
        const tiempob19Div = document.getElementById('tiempob19');

        if (this.value === 'si') {  
            costosb19Div.classList.remove('oculto');
            cantidadb19Div.classList.remove('oculto');
            tiempob19Div.classList.remove('oculto');
        } else {            
            costosb19Div.classList.add('oculto');
            cantidadb19Div.classList.add('oculto');
            tiempob19Div.classList.add('oculto');
        }
    });

    document.getElementById('diseño').addEventListener('change', function() {
        const costosb20Div = document.getElementById('costosb20');        
        const tiempob20Div = document.getElementById('tiempob20');

        if (this.value === 'si') {            
            costosb20Div.classList.remove('oculto');
            tiempob20Div.classList.remove('oculto');
        } else {            
            costosb20Div.classList.add('oculto');
            tiempob20Div.classList.add('oculto');
        }
    });

//Hombre y mujer   

document.getElementById('hom1').addEventListener('change', function() {
    const hom1Div = document.querySelector('.hombre1');

    if (this.value === 'hombre1') {
        hom1Div.style.display = 'block';
    } 
    else {
        hom1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('hombre2').addEventListener('change', function() {
    const criterioh1Div = document.getElementById('criterioh1');
    const rangoh1Div = document.getElementById('rangoh1');
    const costoh1Div = document.getElementById('costoh1');

    if (this.value === 'si') {
        criterioh1Div.classList.remove('oculto');
        rangoh1Div.classList.remove('oculto');
        costoh1Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criterioh1Div.classList.add('oculto');
        rangoh1Div.classList.add('oculto');
        costoh1Div.classList.remove('oculto');
    } else {
        criterioh1Div.classList.add('oculto');
        rangoh1Div.classList.add('oculto');
        costoh1Div.classList.add('oculto');
    }
});

document.getElementById('hom1').addEventListener('change', function() {
    const hom1Div = document.querySelector('.mujer1');

    if (this.value === 'mujer1') {
        hom1Div.style.display = 'block';
    } 
    else {
        hom1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('mujer2').addEventListener('change', function() {
    const criteriomDiv = document.getElementById('criteriom1');
    const rangomDiv = document.getElementById('rangom1');
    const costomDiv = document.getElementById('costom1');

    if (this.value === 'si') {
        criteriomDiv.classList.remove('oculto');
        rangomDiv.classList.remove('oculto');
        costomDiv.classList.add('oculto');
    } else if (this.value === 'no') {
        criteriomDiv.classList.add('oculto');
        rangomDiv.classList.add('oculto');
        costomDiv.classList.remove('oculto');
    } else {
        criteriomDiv.classList.add('oculto');
        rangomDiv.classList.add('oculto');
        costomDiv.classList.add('oculto');
    }
});

document.getElementById('hom1').addEventListener('change', function() {
    const hom1Div = document.querySelectorAll('.hombre1, .mujer1');

    if (this.value === 'ambos') {
        hom1Div.forEach(element => {
            element.style.display = 'block';
        });
    }    
});
// ----- Pedicure ----- //

// ----- Tinte ----- //

document.getElementById('tinte').addEventListener('change', function() {
    const pedicureDiv = document.querySelector('.tinte');

    if (this.value === 'si') {
        pedicureDiv.style.display = 'block';
    } 
    else {
        pedicureDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});


    document.getElementById('pinzastin').addEventListener('change', function() {
        const costosb21Div = document.getElementById('costosb21');
        const tiempob21Div = document.getElementById('tiempob21');

        if (this.value === 'si') {
            costosb21Div.classList.remove('oculto');
            tiempob21Div.classList.remove('oculto');
        } else {
            costosb21Div.classList.add('oculto');
            tiempob21Div.classList.add('oculto');
        }
    });

    document.getElementById('tazon').addEventListener('change', function() {
        const costosb22Div = document.getElementById('costosb22');
        const tiempob22Div = document.getElementById('tiempob22');

        if (this.value === 'si') {
            costosb22Div.classList.remove('oculto');
            tiempob22Div.classList.remove('oculto');
        } else {
            costosb22Div.classList.add('oculto');
            tiempob22Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillomez').addEventListener('change', function() {
        const costosb23Div = document.getElementById('costosb23');
        const tiempob23Div = document.getElementById('tiempob23');

        if (this.value === 'si') {
            costosb23Div.classList.remove('oculto');
            tiempob23Div.classList.remove('oculto');
        } else {
            costosb23Div.classList.add('oculto');
            tiempob23Div.classList.add('oculto');
        }
    });

    document.getElementById('gorros').addEventListener('change', function() {
        const costosb24Div = document.getElementById('costosb24');
        const tiempob24Div = document.getElementById('tiempob24');

        if (this.value === 'si') {
            costosb24Div.classList.remove('oculto');
            tiempob24Div.classList.remove('oculto');
        } else {
            costosb24Div.classList.add('oculto');
            tiempob24Div.classList.add('oculto');
        }
    });

    document.getElementById('peine').addEventListener('change', function() {
        const costosb25Div = document.getElementById('costosb25');
        const tiempob25Div = document.getElementById('tiempob25');

        if (this.value === 'si') {
            costosb25Div.classList.remove('oculto');
            tiempob25Div.classList.remove('oculto');
        } else {
            costosb25Div.classList.add('oculto');
            tiempob25Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillored').addEventListener('change', function() {
        const costosb26Div = document.getElementById('costosb26');
        const tiempob26Div = document.getElementById('tiempob26');

        if (this.value === 'si') {
            costosb26Div.classList.remove('oculto');
            tiempob26Div.classList.remove('oculto');
        } else {
            costosb26Div.classList.add('oculto');
            tiempob26Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloter').addEventListener('change', function() {
        const costosb27Div = document.getElementById('costosb27');
        const tiempob27Div = document.getElementById('tiempob27');

        if (this.value === 'si') {
            costosb27Div.classList.remove('oculto');
            tiempob27Div.classList.remove('oculto');
        } else {
            costosb27Div.classList.add('oculto');
            tiempob27Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillonylon').addEventListener('change', function() {
        const costosb28Div = document.getElementById('costosb28');
        const tiempob28Div = document.getElementById('tiempob28');

        if (this.value === 'si') {
            costosb28Div.classList.remove('oculto');
            tiempob28Div.classList.remove('oculto');
        } else {
            costosb28Div.classList.add('oculto');
            tiempob28Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloova').addEventListener('change', function() {
        const costosb29Div = document.getElementById('costosb29');
        const tiempob29Div = document.getElementById('tiempob29');

        if (this.value === 'si') {
            costosb29Div.classList.remove('oculto');
            tiempob29Div.classList.remove('oculto');
        } else {
            costosb29Div.classList.add('oculto');
            tiempob29Div.classList.add('oculto');
        }
    });

    document.getElementById('aluminio').addEventListener('change', function() {
        const costosb30Div = document.getElementById('costosb30');
        const tiempob30Div = document.getElementById('tiempob30');

        if (this.value === 'si') {
            costosb30Div.classList.remove('oculto');
            tiempob30Div.classList.remove('oculto');
        } else {
            costosb30Div.classList.add('oculto');
            tiempob30Div.classList.add('oculto');
        }
    });

    document.getElementById('tintes').addEventListener('change', function() {
        const costosb31Div = document.getElementById('costosb31');
        const cantidadb31Div = document.getElementById('cantidadb31');
        const tiempob31Div = document.getElementById('tiempob31');

        if (this.value === 'si') {
            costosb31Div.classList.remove('oculto');
            cantidadb31Div.classList.remove('oculto');
            tiempob31Div.classList.remove('oculto');
        } else {
            costosb31Div.classList.add('oculto');
            cantidadb31Div.classList.add('oculto');
            tiempob31Div.classList.add('oculto');
        }
    });

    document.getElementById('decolorante').addEventListener('change', function() {
        const costosb32Div = document.getElementById('costosb32');
        const tiempob32Div = document.getElementById('tiempob32');

        if (this.value === 'si') {
            costosb32Div.classList.remove('oculto');
            tiempob32Div.classList.remove('oculto');
        } else {
            costosb32Div.classList.add('oculto');
            tiempob32Div.classList.add('oculto');
        }
    });

    document.getElementById('locionact').addEventListener('change', function() {
        const costosb33Div = document.getElementById('costosb33');
        const tiempob33Div = document.getElementById('tiempob33');

        if (this.value === 'si') {
            costosb33Div.classList.remove('oculto');
            tiempob33Div.classList.remove('oculto');
        } else {
            costosb33Div.classList.add('oculto');
            tiempob33Div.classList.add('oculto');
        }
    });

    document.getElementById('mascarillac').addEventListener('change', function() {
        const costosb34Div = document.getElementById('costosb34');
        const tiempob34Div = document.getElementById('tiempob34');

        if (this.value === 'si') {
            costosb34Div.classList.remove('oculto');
            tiempob34Div.classList.remove('oculto');
        } else {
            costosb34Div.classList.add('oculto');
            tiempob34Div.classList.add('oculto');
        }
    });

    document.getElementById('cremaacond').addEventListener('change', function() {
        const costosb35Div = document.getElementById('costosb35');
        const tiempob35Div = document.getElementById('tiempob35');

        if (this.value === 'si') {
            costosb35Div.classList.remove('oculto');
            tiempob35Div.classList.remove('oculto');
        } else {
            costosb35Div.classList.add('oculto');
            tiempob35Div.classList.add('oculto');
        }
    });


//Hombre y mujer   

document.getElementById('hom2').addEventListener('change', function() {
    const hom2Div = document.querySelector('.hombre2');

    if (this.value === 'hombre2') {
        hom2Div.style.display = 'block';
    } 
    else {
        hom2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('hombre3').addEventListener('change', function() {
    const criterioh2Div = document.getElementById('criterioh2');
    const rangoh2Div = document.getElementById('rangoh2');
    const costoh2Div = document.getElementById('costoh2');

    if (this.value === 'si') {
        criterioh2Div.classList.remove('oculto');
        rangoh2Div.classList.remove('oculto');
        costoh2Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criterioh2Div.classList.add('oculto');
        rangoh2Div.classList.add('oculto');
        costoh2Div.classList.remove('oculto');
    } else {
        criterioh2Div.classList.add('oculto');
        rangoh2Div.classList.add('oculto');
        costoh2Div.classList.add('oculto');
    }
});

document.getElementById('hom2').addEventListener('change', function() {
    const hom2Div = document.querySelector('.mujer2');

    if (this.value === 'mujer2') {
        hom2Div.style.display = 'block';
    } 
    else {
        hom2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('mujer3').addEventListener('change', function() {
    const criteriom2Div = document.getElementById('criteriom2');
    const rangom2Div = document.getElementById('rangom2');
    const costom2Div = document.getElementById('costom2');

    if (this.value === 'si') {
        criteriom2Div.classList.remove('oculto');
        rangom2Div.classList.remove('oculto');
        costom2Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criteriom2Div.classList.add('oculto');
        rangom2Div.classList.add('oculto');
        costom2Div.classList.remove('oculto');
    } else {
        criteriom2Div.classList.add('oculto');
        rangom2Div.classList.add('oculto');
        costom2Div.classList.add('oculto');
    }
});

document.getElementById('hom2').addEventListener('change', function() {
    const hom2Div = document.querySelectorAll('.hombre2, .mujer2');

    if (this.value === 'ambos') {
        hom2Div.forEach(element => {
            element.style.display = 'block';
        });
    }
});

// ----- Extensiones ----- //

document.getElementById('extensiones').addEventListener('change', function() {
    const extensionesDiv = document.querySelector('.extensiones');

    if (this.value === 'si') {
        extensionesDiv.style.display = 'block';
    } 
    else {
        extensionesDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});


    document.getElementById('extensiones1').addEventListener('change', function() {
        const costosb136Div = document.getElementById('costosb136');
        const tiempob136Div = document.getElementById('tiempob136');
        const costosb36Div = document.getElementById('costosb36');

        if (this.value === 'si') {
            costosb136Div.classList.remove('oculto');
            tiempob136Div.classList.remove('oculto');
            costosb36Div.classList.remove('oculto');
        } else {
            costosb136Div.classList.add('oculto');
            tiempob136Div.classList.add('oculto');
            costosb36Div.classList.add('oculto');
        }
    });

    document.getElementById('extensiones2').addEventListener('change', function() {
        const costosb137Div = document.getElementById('costosb137');
        const tiempob137Div = document.getElementById('tiempob137');
        const costosb237Div = document.getElementById('costosb237');
        const tiempob237Div = document.getElementById('tiempob237');
        const costosb37Div = document.getElementById('costosb37');

        if (this.value === 'si') {
            costosb137Div.classList.remove('oculto');
            tiempob137Div.classList.remove('oculto');
            costosb237Div.classList.remove('oculto');
            tiempob237Div.classList.remove('oculto');
            costosb37Div.classList.remove('oculto');
        } else {
            costosb137Div.classList.add('oculto');
            tiempob137Div.classList.add('oculto');
            costosb237Div.classList.add('oculto');
            tiempob237Div.classList.add('oculto');
            costosb37Div.classList.add('oculto');
        }
    });

    document.getElementById('extensiones3').addEventListener('change', function() {
        const costosb138Div = document.getElementById('costosb138');
        const tiempob138Div = document.getElementById('tiempob138');
        const costosb238Div = document.getElementById('costosb238');
        const tiempob238Div = document.getElementById('tiempob238');
        const costosb338Div = document.getElementById('costosb338');
        const tiempob338Div = document.getElementById('tiempob338');
        const costosb38Div = document.getElementById('costosb38');

        if (this.value === 'si') {
            costosb138Div.classList.remove('oculto');
            tiempob138Div.classList.remove('oculto');
            costosb238Div.classList.remove('oculto');
            tiempob238Div.classList.remove('oculto');
            costosb338Div.classList.remove('oculto');
            tiempob338Div.classList.remove('oculto');
            costosb38Div.classList.remove('oculto');
        } else {
            costosb138Div.classList.add('oculto');
            tiempob138Div.classList.add('oculto');
            costosb238Div.classList.add('oculto');
            tiempob238Div.classList.add('oculto');
            costosb338Div.classList.add('oculto');
            tiempob338Div.classList.add('oculto');
            costosb38Div.classList.add('oculto');
        }
    });

    document.getElementById('extensiones4').addEventListener('change', function() {
        const costosb139Div = document.getElementById('costosb139');
        const tiempob139Div = document.getElementById('tiempob139');
        const costosb239Div = document.getElementById('costosb239');
        const tiempob239Div = document.getElementById('tiempob239');
        const costosb339Div = document.getElementById('costosb339');
        const cantidadb339Div = document.getElementById('cantidadb339');
        const tiempob339Div = document.getElementById('tiempob339');
        const costosb39Div = document.getElementById('costosb39');

        if (this.value === 'si') {
            costosb139Div.classList.remove('oculto');
            tiempob139Div.classList.remove('oculto');
            costosb239Div.classList.remove('oculto');
            tiempob239Div.classList.remove('oculto');
            costosb339Div.classList.remove('oculto');
            cantidadb339Div.classList.remove('oculto');
            tiempob339Div.classList.remove('oculto');
            costosb39Div.classList.remove('oculto');
        } else {
            costosb139Div.classList.add('oculto');
            tiempob139Div.classList.add('oculto');
            costosb239Div.classList.add('oculto');
            tiempob239Div.classList.add('oculto');
            costosb339Div.classList.add('oculto');
            cantidadb339Div.classList.add('oculto');
            tiempob339Div.classList.add('oculto');
            costosb39Div.classList.add('oculto');
        }
    });
    

    document.getElementById('pinzas2').addEventListener('change', function() {
        const costosb40Div = document.getElementById('costosb40');
        const tiempob40Div = document.getElementById('tiempob40');

        if (this.value === 'si') {
            costosb40Div.classList.remove('oculto');
            tiempob40Div.classList.remove('oculto');
        } else {
            costosb40Div.classList.add('oculto');
            tiempob40Div.classList.add('oculto');
        }
    });

    document.getElementById('peine1').addEventListener('change', function() {
        const costosb41Div = document.getElementById('costosb41');
        const tiempob41Div = document.getElementById('tiempob41');

        if (this.value === 'si') {
            costosb41Div.classList.remove('oculto');
            tiempob41Div.classList.remove('oculto');
        } else {
            costosb41Div.classList.add('oculto');
            tiempob41Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillored1').addEventListener('change', function() {
        const costosb42Div = document.getElementById('costosb42');
        const tiempob42Div = document.getElementById('tiempob42');

        if (this.value === 'si') {
            costosb42Div.classList.remove('oculto');
            tiempob42Div.classList.remove('oculto');
        } else {
            costosb42Div.classList.add('oculto');
            tiempob42Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloter1').addEventListener('change', function() {
        const costosb43Div = document.getElementById('costosb43');
        const tiempob43Div = document.getElementById('tiempob43');

        if (this.value === 'si') {
            costosb43Div.classList.remove('oculto');
            tiempob43Div.classList.remove('oculto');
        } else {
            costosb43Div.classList.add('oculto');
            tiempob43Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillonylon1').addEventListener('change', function() {
        const costosb44Div = document.getElementById('costosb44');
        const tiempob44Div = document.getElementById('tiempob44');

        if (this.value === 'si') {
            costosb44Div.classList.remove('oculto');
            tiempob44Div.classList.remove('oculto');
        } else {
            costosb44Div.classList.add('oculto');
            tiempob44Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloova1').addEventListener('change', function() {
        const costosb45Div = document.getElementById('costosb45');
        const tiempob45Div = document.getElementById('tiempob45');

        if (this.value === 'si') {
            costosb45Div.classList.remove('oculto');
            tiempob45Div.classList.remove('oculto');
        } else {
            costosb45Div.classList.add('oculto');
            tiempob45Div.classList.add('oculto');
        }
    });

    document.getElementById('tijeras5').addEventListener('change', function() {
        const costosb46Div = document.getElementById('costosb46');
        const tiempob46Div = document.getElementById('tiempob46');

        if (this.value === 'si') {
            costosb46Div.classList.remove('oculto');
            tiempob46Div.classList.remove('oculto');
        } else {
            costosb46Div.classList.add('oculto');
            tiempob46Div.classList.add('oculto');
        }
    });

    document.getElementById('removedorext').addEventListener('change', function() {
        const costosb47Div = document.getElementById('costosb47');      
        const tiempob47Div = document.getElementById('tiempob47');

        if (this.value === 'si') {
            costosb47Div.classList.remove('oculto');          
            tiempob47Div.classList.remove('oculto');
        } else {
            costosb47Div.classList.add('oculto');            
            tiempob47Div.classList.add('oculto');
        }
    });

    document.getElementById('rizador').addEventListener('change', function() {
        const costosb48Div = document.getElementById('costosb48');
        const tiempob48Div = document.getElementById('tiempob48');

        if (this.value === 'si') {
            costosb48Div.classList.remove('oculto');
            tiempob48Div.classList.remove('oculto');
        } else {
            costosb48Div.classList.add('oculto');
            tiempob48Div.classList.add('oculto');
        }
    });

    document.getElementById('mascarillacab').addEventListener('change', function() {
        const costosb49Div = document.getElementById('costosb49');
        const tiempob49Div = document.getElementById('tiempob49');

        if (this.value === 'si') {
            costosb49Div.classList.remove('oculto');
            tiempob49Div.classList.remove('oculto');
        } else {
            costosb49Div.classList.add('oculto');
            tiempob49Div.classList.add('oculto');
        }
    });

    document.getElementById('acondicionador1').addEventListener('change', function() {
        const costosb50Div = document.getElementById('costosb50');
        const tiempob50Div = document.getElementById('tiempob50');

        if (this.value === 'si') {
            costosb50Div.classList.remove('oculto');
            tiempob50Div.classList.remove('oculto');
        } else {
            costosb50Div.classList.add('oculto');
            tiempob50Div.classList.add('oculto');
        }
    });

    document.getElementById('shampoo1').addEventListener('change', function() {
        const costosb51Div = document.getElementById('costosb51');
        const tiempob51Div = document.getElementById('tiempob51');

        if (this.value === 'si') {
            costosb51Div.classList.remove('oculto');
            tiempob51Div.classList.remove('oculto');
        } else {
            costosb51Div.classList.add('oculto');
            tiempob51Div.classList.add('oculto');
        }
    });


//Hombre y mujer   

document.getElementById('hom3').addEventListener('change', function() {
    const hom3Div = document.querySelector('.hombre3');

    if (this.value === 'hombre3') {
        hom3Div.style.display = 'block';
    } 
    else {
        hom3Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('hombre4').addEventListener('change', function() {
    const criterioh3Div = document.getElementById('criterioh3');
    const rangoh3Div = document.getElementById('rangoh3');
    const costoh3Div = document.getElementById('costoh3');

    if (this.value === 'si') {
        criterioh3Div.classList.remove('oculto');
        rangoh3Div.classList.remove('oculto');
        costoh3Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criterioh3Div.classList.add('oculto');
        rangoh3Div.classList.add('oculto');
        costoh3Div.classList.remove('oculto');
    } else {
        criterioh3Div.classList.add('oculto');
        rangoh3Div.classList.add('oculto');
        costoh3Div.classList.add('oculto');
    }
});

document.getElementById('hom3').addEventListener('change', function() {
    const hom3Div = document.querySelector('.mujer3');

    if (this.value === 'mujer3') {
        hom3Div.style.display = 'block';
    } 
    else {
        hom3Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('mujer4').addEventListener('change', function() {
    const criteriom3Div = document.getElementById('criteriom3');
    const rangom3Div = document.getElementById('rangom3');
    const costom3Div = document.getElementById('costom3');

    if (this.value === 'si') {
        criteriom3Div.classList.remove('oculto');
        rangom3Div.classList.remove('oculto');
        costom3Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criteriom3Div.classList.add('oculto');
        rangom3Div.classList.add('oculto');
        costom3Div.classList.remove('oculto');
    } else {
        criteriom3Div.classList.add('oculto');
        rangom3Div.classList.add('oculto');
        costom3Div.classList.add('oculto');
    }
});

document.getElementById('hom3').addEventListener('change', function() {
    const hom3Div = document.querySelectorAll('.hombre3, .mujer3');

    if (this.value === 'ambos') {
        hom3Div.forEach(element => {
            element.style.display = 'block';
        });
    }
});

// ----- Depilación láser ----- //

document.getElementById('depilacion').addEventListener('change', function() {
    const depilacionDiv = document.querySelector('.depilacion');

    if (this.value === 'si') {
        depilacionDiv.style.display = 'block';
    } 
    else {
        depilacionDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});


    document.getElementById('gafas').addEventListener('change', function() {
        const costosb52Div = document.getElementById('costosb52');
        const tiempob52Div = document.getElementById('tiempob52');        

        if (this.value === 'si') {
            costosb52Div.classList.remove('oculto');
            tiempob52Div.classList.remove('oculto');            
        } else {
            costosb52Div.classList.add('oculto');
            tiempob52Div.classList.add('oculto');            
        }
    });

    document.getElementById('laser').addEventListener('change', function() {
        const costosb53Div = document.getElementById('costosb53');
        const tiempob53Div = document.getElementById('tiempob53');        

        if (this.value === 'si') {
            costosb53Div.classList.remove('oculto');
            tiempob53Div.classList.remove('oculto');            
        } else {
            costosb53Div.classList.add('oculto');
            tiempob53Div.classList.add('oculto');            
        }
    });

    document.getElementById('gel').addEventListener('change', function() {
        const costosb54Div = document.getElementById('costosb54');
        const tiempob54Div = document.getElementById('tiempob54');        

        if (this.value === 'si') {
            costosb54Div.classList.remove('oculto');
            tiempob54Div.classList.remove('oculto');            
        } else {
            costosb54Div.classList.add('oculto');
            tiempob54Div.classList.add('oculto');            
        }
    });

    document.getElementById('gelanes').addEventListener('change', function() {
        const costosb55Div = document.getElementById('costosb55');
        const tiempob55Div = document.getElementById('tiempob55');        

        if (this.value === 'si') {
            costosb55Div.classList.remove('oculto');
            tiempob55Div.classList.remove('oculto');            
        } else {
            costosb55Div.classList.add('oculto');
            tiempob55Div.classList.add('oculto');            
        }
    });
    

    document.getElementById('toallaslim').addEventListener('change', function() {
        const costosb56Div = document.getElementById('costosb56');
        const tiempob56Div = document.getElementById('tiempob56');        

        if (this.value === 'si') {
            costosb56Div.classList.remove('oculto');
            tiempob56Div.classList.remove('oculto');            
        } else {
            costosb56Div.classList.add('oculto');
            tiempob56Div.classList.add('oculto');            
        }
    });

    document.getElementById('compresas').addEventListener('change', function() {
        const costosb57Div = document.getElementById('costosb57');
        const tiempob57Div = document.getElementById('tiempob57');

        if (this.value === 'si') {
            costosb57Div.classList.remove('oculto');
            tiempob57Div.classList.remove('oculto');
        } else {
            costosb57Div.classList.add('oculto');
            tiempob57Div.classList.add('oculto');
        }
    });

    document.getElementById('piernas').addEventListener('change', function() {
        const costosb58Div = document.getElementById('costosb58');       

        if (this.value === 'si') {
            costosb58Div.classList.remove('oculto');            
        } else {
            costosb58Div.classList.add('oculto');
        }
    });

    document.getElementById('axilas').addEventListener('change', function() {
        const costosb59Div = document.getElementById('costosb59');       

        if (this.value === 'si') {
            costosb59Div.classList.remove('oculto');            
        } else {
            costosb59Div.classList.add('oculto');
        }
    });

    document.getElementById('bikini').addEventListener('change', function() {
        const costosb60Div = document.getElementById('costosb60');       

        if (this.value === 'si') {
            costosb60Div.classList.remove('oculto');            
        } else {
            costosb60Div.classList.add('oculto');
        }
    });

    document.getElementById('zonai').addEventListener('change', function() {
        const costosb61Div = document.getElementById('costosb61');       

        if (this.value === 'si') {
            costosb61Div.classList.remove('oculto');            
        } else {
            costosb61Div.classList.add('oculto');
        }
    });

    document.getElementById('espalda').addEventListener('change', function() {
        const costosb62Div = document.getElementById('costosb62');       

        if (this.value === 'si') {
            costosb62Div.classList.remove('oculto');            
        } else {
            costosb62Div.classList.add('oculto');
        }
    });

    document.getElementById('pecho').addEventListener('change', function() {
        const costosb63Div = document.getElementById('costosb63');       

        if (this.value === 'si') {
            costosb63Div.classList.remove('oculto');            
        } else {
            costosb63Div.classList.add('oculto');
        }
    });

    document.getElementById('brazos').addEventListener('change', function() {
        const costosb64Div = document.getElementById('costosb64');       

        if (this.value === 'si') {
            costosb64Div.classList.remove('oculto');            
        } else {
            costosb64Div.classList.add('oculto');
        }
    });

    document.getElementById('entrecejo').addEventListener('change', function() {
        const costosb65Div = document.getElementById('costosb65');       

        if (this.value === 'si') {
            costosb65Div.classList.remove('oculto');            
        } else {
            costosb65Div.classList.add('oculto');
        }
    });

    document.getElementById('labio').addEventListener('change', function() {
        const costosb66Div = document.getElementById('costosb66');       

        if (this.value === 'si') {
            costosb66Div.classList.remove('oculto');            
        } else {
            costosb66Div.classList.add('oculto');
        }
    });

    document.getElementById('barbilla').addEventListener('change', function() {
        const costosb67Div = document.getElementById('costosb67');       

        if (this.value === 'si') {
            costosb67Div.classList.remove('oculto');            
        } else {
            costosb67Div.classList.add('oculto');
        }
    });

    document.getElementById('patilla').addEventListener('change', function() {
        const costosb68Div = document.getElementById('costosb68');       

        if (this.value === 'si') {
            costosb68Div.classList.remove('oculto');            
        } else {
            costosb68Div.classList.add('oculto');
        }
    });


//Hombre y mujer   

document.getElementById('hom4').addEventListener('change', function() {
    const hom4Div = document.querySelector('.hombre4');

    if (this.value === 'hombre4') {
        hom4Div.style.display = 'block';
    } 
    else {
        hom4Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('hombre5').addEventListener('change', function() {
    const criterioh4Div = document.getElementById('criterioh4');
    const rangoh4Div = document.getElementById('rangoh4');
    const costoh4Div = document.getElementById('costoh4');

    if (this.value === 'si') {
        criterioh4Div.classList.remove('oculto');
        rangoh4Div.classList.remove('oculto');
        costoh4Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criterioh4Div.classList.add('oculto');
        rangoh4Div.classList.add('oculto');
        costoh4Div.classList.remove('oculto');
    } else {
        criterioh4Div.classList.add('oculto');
        rangoh4Div.classList.add('oculto');
        costoh4Div.classList.add('oculto');
    }
});

document.getElementById('hom4').addEventListener('change', function() {
    const hom4Div = document.querySelector('.mujer4');

    if (this.value === 'mujer4') {
        hom4Div.style.display = 'block';
    } 
    else {
        hom4Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('mujer5').addEventListener('change', function() {
    const criteriom4Div = document.getElementById('criteriom4');
    const rangom4Div = document.getElementById('rangom4');
    const costom4Div = document.getElementById('costom4');

    if (this.value === 'si') {
        criteriom4Div.classList.remove('oculto');
        rangom4Div.classList.remove('oculto');
        costom4Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criteriom4Div.classList.add('oculto');
        rangom4Div.classList.add('oculto');
        costom4Div.classList.remove('oculto');
    } else {
        criteriom4Div.classList.add('oculto');
        rangom4Div.classList.add('oculto');
        costom4Div.classList.add('oculto');
    }
});

document.getElementById('hom4').addEventListener('change', function() {
    const hom4Div = document.querySelectorAll('.hombre4, .mujer4');

    if (this.value === 'ambos') {
        hom4Div.forEach(element => {
            element.style.display = 'block';
        });
    }
});

// ----- Masaje reductivo ----- //

document.getElementById('masaje').addEventListener('change', function() {
    const masajeDiv = document.querySelector('.masaje');

    if (this.value === 'si') {
        masajeDiv.style.display = 'block';
    } 
    else {
        masajeDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});


    document.getElementById('aceite').addEventListener('change', function() {
        const costosb69Div = document.getElementById('costosb69');
        const tiempob69Div = document.getElementById('tiempob69');        

        if (this.value === 'si') {
            costosb69Div.classList.remove('oculto');
            tiempob69Div.classList.remove('oculto');            
        } else {
            costosb69Div.classList.add('oculto');
            tiempob69Div.classList.add('oculto');            
        }
    });

    document.getElementById('guante').addEventListener('change', function() {
        const costosb70Div = document.getElementById('costosb70');
        const tiempob70Div = document.getElementById('tiempob70');        

        if (this.value === 'si') {
            costosb70Div.classList.remove('oculto');
            tiempob70Div.classList.remove('oculto');            
        } else {
            costosb70Div.classList.add('oculto');
            tiempob70Div.classList.add('oculto');            
        }
    });

    document.getElementById('rodillo').addEventListener('change', function() {
        const costosb71Div = document.getElementById('costosb71');
        const tiempob71Div = document.getElementById('tiempob71');        

        if (this.value === 'si') {
            costosb71Div.classList.remove('oculto');
            tiempob71Div.classList.remove('oculto');            
        } else {
            costosb71Div.classList.add('oculto');
            tiempob71Div.classList.add('oculto');            
        }
    });

   document.getElementById('ventosa').addEventListener('change', function() {
        const costosb72Div = document.getElementById('costosb72');
        const tiempob72Div = document.getElementById('tiempob72');        

        if (this.value === 'si') {
            costosb72Div.classList.remove('oculto');
            tiempob72Div.classList.remove('oculto');            
        } else {
            costosb72Div.classList.add('oculto');
            tiempob72Div.classList.add('oculto');            
        }
    });
    

    document.getElementById('cavitador').addEventListener('change', function() {
        const costosb73Div = document.getElementById('costosb73');
        const tiempob73Div = document.getElementById('tiempob73');        

        if (this.value === 'si') {
            costosb73Div.classList.remove('oculto');
            tiempob73Div.classList.remove('oculto');            
        } else {
            costosb73Div.classList.add('oculto');
            tiempob73Div.classList.add('oculto');            
        }
    });

    document.getElementById('gel1').addEventListener('change', function() {
        const costosb74Div = document.getElementById('costosb74');
        const tiempob74Div = document.getElementById('tiempob74');        

        if (this.value === 'si') {
            costosb74Div.classList.remove('oculto');
            tiempob74Div.classList.remove('oculto');            
        } else {
            costosb74Div.classList.add('oculto');
            tiempob74Div.classList.add('oculto');            
        }
    });

    document.getElementById('lampara').addEventListener('change', function() {
        const costosb75Div = document.getElementById('costosb75');
        const tiempob75Div = document.getElementById('tiempob75');        

        if (this.value === 'si') {
            costosb75Div.classList.remove('oculto');
            tiempob75Div.classList.remove('oculto');            
        } else {
            costosb75Div.classList.add('oculto');
            tiempob75Div.classList.add('oculto');            
        }
    });


    document.getElementById('termometro').addEventListener('change', function() {
        const costosb76Div = document.getElementById('costosb76');
        const tiempob76Div = document.getElementById('tiempob76');        

        if (this.value === 'si') {
            costosb76Div.classList.remove('oculto');
            tiempob76Div.classList.remove('oculto');            
        } else {
            costosb76Div.classList.add('oculto');
            tiempob76Div.classList.add('oculto');            
        }
    });

    document.getElementById('masajeador1').addEventListener('change', function() {
        const costosb77Div = document.getElementById('costosb77');
        const tiempob77Div = document.getElementById('tiempob77');        

        if (this.value === 'si') {
            costosb77Div.classList.remove('oculto');
            tiempob77Div.classList.remove('oculto');            
        } else {
            costosb77Div.classList.add('oculto');
            tiempob77Div.classList.add('oculto');            
        }
    });

    document.getElementById('masajeador2').addEventListener('change', function() {
        const costosb78Div = document.getElementById('costosb78');
        const tiempob78Div = document.getElementById('tiempob78');        

        if (this.value === 'si') {
            costosb78Div.classList.remove('oculto');
            tiempob78Div.classList.remove('oculto');            
        } else {
            costosb78Div.classList.add('oculto');
            tiempob78Div.classList.add('oculto');            
        }
    });

    document.getElementById('abdomen').addEventListener('change', function() {
        const costosb79Div = document.getElementById('costosb79');       

        if (this.value === 'si') {
            costosb79Div.classList.remove('oculto');            
        } else {
            costosb79Div.classList.add('oculto');
        }
    });

    document.getElementById('gluteos').addEventListener('change', function() {
        const costosb80Div = document.getElementById('costosb80');       

        if (this.value === 'si') {
            costosb80Div.classList.remove('oculto');            
        } else {
            costosb80Div.classList.add('oculto');
        }
    });

    document.getElementById('cintura').addEventListener('change', function() {
        const costosb81Div = document.getElementById('costosb81');       

        if (this.value === 'si') {
            costosb81Div.classList.remove('oculto');            
        } else {
            costosb81Div.classList.add('oculto');
        }
    });

    document.getElementById('caderas').addEventListener('change', function() {
        const costosb82Div = document.getElementById('costosb82');       

        if (this.value === 'si') {
            costosb82Div.classList.remove('oculto');            
        } else {
            costosb82Div.classList.add('oculto');
        }
    });

    document.getElementById('muslos').addEventListener('change', function() {
        const costosb83Div = document.getElementById('costosb83');       

        if (this.value === 'si') {
            costosb83Div.classList.remove('oculto');            
        } else {
            costosb83Div.classList.add('oculto');
        }
    });

    document.getElementById('brazos1').addEventListener('change', function() {
        const costosb84Div = document.getElementById('costosb84');       

        if (this.value === 'si') {
            costosb84Div.classList.remove('oculto');            
        } else {
            costosb84Div.classList.add('oculto');
        }
    });

    document.getElementById('espalda1').addEventListener('change', function() {
        const costosb85Div = document.getElementById('costosb85');       

        if (this.value === 'si') {
            costosb85Div.classList.remove('oculto');            
        } else {
            costosb85Div.classList.add('oculto');
        }
    });

    document.getElementById('pantorrillas').addEventListener('change', function() {
        const costosb86Div = document.getElementById('costosb86');       

        if (this.value === 'si') {
            costosb86Div.classList.remove('oculto');            
        } else {
            costosb86Div.classList.add('oculto');
        }
    });


//Hombre y mujer   

document.getElementById('hom5').addEventListener('change', function() {
    const hom5Div = document.querySelector('.hombre5');

    if (this.value === 'hombre5') {
        hom5Div.style.display = 'block';
    } 
    else {
        hom5Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('hombre6').addEventListener('change', function() {
    const criterioh5Div = document.getElementById('criterioh5');
    const rangoh5Div = document.getElementById('rangoh5');
    const costoh5Div = document.getElementById('costoh5');

    if (this.value === 'si') {
        criterioh5Div.classList.remove('oculto');
        rangoh5Div.classList.remove('oculto');
        costoh5Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criterioh5Div.classList.add('oculto');
        rangoh5Div.classList.add('oculto');
        costoh5Div.classList.remove('oculto');
    } else {
        criterioh5Div.classList.add('oculto');
        rangoh5Div.classList.add('oculto');
        costoh5Div.classList.add('oculto');
    }
});

document.getElementById('hom5').addEventListener('change', function() {
    const hom5Div = document.querySelector('.mujer5');

    if (this.value === 'mujer5') {
        hom5Div.style.display = 'block';
    } 
    else {
        hom5Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('mujer6').addEventListener('change', function() {
    const criteriom5Div = document.getElementById('criteriom5');
    const rangom5Div = document.getElementById('rangom5');
    const costom5Div = document.getElementById('costom5');

    if (this.value === 'si') {
        criteriom5Div.classList.remove('oculto');
        rangom5Div.classList.remove('oculto');
        costom5Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criteriom5Div.classList.add('oculto');
        rangom5Div.classList.add('oculto');
        costom5Div.classList.remove('oculto');
    } else {
        criteriom5Div.classList.add('oculto');
        rangom5Div.classList.add('oculto');
        costom5Div.classList.add('oculto');
    }
});

document.getElementById('hom5').addEventListener('change', function() {
    const hom5Div = document.querySelectorAll('.hombre5, .mujer5');

    if (this.value === 'ambos') {
        hom5Div.forEach(element => {
            element.style.display = 'block';
        });
    }
});

// ----- Pestañas ----- //

document.getElementById('pestañas').addEventListener('change', function() {
    const pestañasDiv = document.querySelector('.pestañas');

    if (this.value === 'si') {
        pestañasDiv.style.display = 'block';
    } 
    else {
        pestañasDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});


    document.getElementById('pinzasext').addEventListener('change', function() {
        const costosb87Div = document.getElementById('costosb87');
        const tiempob87Div = document.getElementById('tiempob87');

        if (this.value === 'si') {
            costosb87Div.classList.remove('oculto');
            tiempob87Div.classList.remove('oculto');
        } else {
            costosb87Div.classList.add('oculto');
            tiempob87Div.classList.add('oculto');
        }
    });

    document.getElementById('parches').addEventListener('change', function() {
        const costosb88Div = document.getElementById('costosb88');
        const tiempob88Div = document.getElementById('tiempob88');

        if (this.value === 'si') {
            costosb88Div.classList.remove('oculto');
            tiempob88Div.classList.remove('oculto');
        } else {
            costosb88Div.classList.add('oculto');
            tiempob88Div.classList.add('oculto');
        }
    });

    document.getElementById('anillos').addEventListener('change', function() {
        const costosb89Div = document.getElementById('costosb89');
        const tiempob89Div = document.getElementById('tiempob89');

        if (this.value === 'si') {
            costosb89Div.classList.remove('oculto');
            tiempob89Div.classList.remove('oculto');
        } else {
            costosb89Div.classList.add('oculto');
            tiempob89Div.classList.add('oculto');
        }
    });

    document.getElementById('pegamento').addEventListener('change', function() {
        const costosb90Div = document.getElementById('costosb90');
        const tiempob90Div = document.getElementById('tiempob90');

        if (this.value === 'si') {
            costosb90Div.classList.remove('oculto');
            tiempob90Div.classList.remove('oculto');
        } else {
            costosb90Div.classList.add('oculto');
            tiempob90Div.classList.add('oculto');
        }
    });

    document.getElementById('extensionespes').addEventListener('change', function() {
        const costosb91Div = document.getElementById('costosb91');
        const tiempob91Div = document.getElementById('tiempob91');

        if (this.value === 'si') {
            costosb91Div.classList.remove('oculto');
            tiempob91Div.classList.remove('oculto');
        } else {
            costosb91Div.classList.add('oculto');
            tiempob91Div.classList.add('oculto');
        }
    });

    document.getElementById('removedorpeg').addEventListener('change', function() {
        const costosb92Div = document.getElementById('costosb92');
        const tiempob92Div = document.getElementById('tiempob92');

        if (this.value === 'si') {
            costosb92Div.classList.remove('oculto');
            tiempob92Div.classList.remove('oculto');
        } else {
            costosb92Div.classList.add('oculto');
            tiempob92Div.classList.add('oculto');
        }
    });

    document.getElementById('toallitas').addEventListener('change', function() {
        const costosb93Div = document.getElementById('costosb93');
        const tiempob93Div = document.getElementById('tiempob93');

        if (this.value === 'si') {
            costosb93Div.classList.remove('oculto');
            tiempob93Div.classList.remove('oculto');
        } else {
            costosb93Div.classList.add('oculto');
            tiempob93Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillopes').addEventListener('change', function() {
        const costosb94Div = document.getElementById('costosb94');
        const tiempob94Div = document.getElementById('tiempob94');

        if (this.value === 'si') {
            costosb94Div.classList.remove('oculto');
            tiempob94Div.classList.remove('oculto');
        } else {
            costosb94Div.classList.add('oculto');
            tiempob94Div.classList.add('oculto');
        }
    });

    document.getElementById('aplicadores').addEventListener('change', function() {
        const costosb95Div = document.getElementById('costosb95');
        const tiempob95Div = document.getElementById('tiempob95');

        if (this.value === 'si') {
            costosb95Div.classList.remove('oculto');
            tiempob95Div.classList.remove('oculto');
        } else {
            costosb95Div.classList.add('oculto');
            tiempob95Div.classList.add('oculto');
        }
    });

    document.getElementById('lamparaluz').addEventListener('change', function() {
        const costosb96Div = document.getElementById('costosb96');
        const tiempob96Div = document.getElementById('tiempob96');

        if (this.value === 'si') {
            costosb96Div.classList.remove('oculto');
            tiempob96Div.classList.remove('oculto');
        } else {
            costosb96Div.classList.add('oculto');
            tiempob96Div.classList.add('oculto');
        }
    });

    document.getElementById('espejo').addEventListener('change', function() {
        const costosb97Div = document.getElementById('costosb97');
        const tiempob97Div = document.getElementById('tiempob97');

        if (this.value === 'si') {
            costosb97Div.classList.remove('oculto');
            tiempob97Div.classList.remove('oculto');
        } else {
            costosb97Div.classList.add('oculto');
            tiempob97Div.classList.add('oculto');
        }
    });

    document.getElementById('secador').addEventListener('change', function() {
        const costosb98Div = document.getElementById('costosb98');
        const tiempob98Div = document.getElementById('tiempob98');

        if (this.value === 'si') {
            costosb98Div.classList.remove('oculto');
            tiempob98Div.classList.remove('oculto');
        } else {
            costosb98Div.classList.add('oculto');
            tiempob98Div.classList.add('oculto');
        }
    });

    document.getElementById('almohadillas').addEventListener('change', function() {
        const costosb99Div = document.getElementById('costosb99');
        const tiempob99Div = document.getElementById('tiempob99');

        if (this.value === 'si') {
            costosb99Div.classList.remove('oculto');
            tiempob99Div.classList.remove('oculto');
        } else {
            costosb99Div.classList.add('oculto');
            tiempob99Div.classList.add('oculto');
        }
    });

    document.getElementById('cintamicro').addEventListener('change', function() {
        const costosb100Div = document.getElementById('costosb100');
        const tiempob100Div = document.getElementById('tiempob100');

        if (this.value === 'si') {
            costosb100Div.classList.remove('oculto');
            tiempob100Div.classList.remove('oculto');
        } else {
            costosb100Div.classList.add('oculto');
            tiempob100Div.classList.add('oculto');
        }
    });

    document.getElementById('bastoncillos').addEventListener('change', function() {
        const costosb101Div = document.getElementById('costosb101');
        const tiempob101Div = document.getElementById('tiempob101');

        if (this.value === 'si') {
            costosb101Div.classList.remove('oculto');
            tiempob101Div.classList.remove('oculto');
        } else {
            costosb101Div.classList.add('oculto');
            tiempob101Div.classList.add('oculto');
        }
    });


//Hombre y mujer   

document.getElementById('hom6').addEventListener('change', function() {
    const hom6Div = document.querySelector('.hombre6');

    if (this.value === 'hombre6') {
        hom6Div.style.display = 'block';
    } 
    else {
        hom6Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('hombre7').addEventListener('change', function() {
    const criterioh6Div = document.getElementById('criterioh6');
    const rangoh6Div = document.getElementById('rangoh6');
    const costoh6Div = document.getElementById('costoh6');

    if (this.value === 'si') {
        criterioh6Div.classList.remove('oculto');
        rangoh6Div.classList.remove('oculto');
        costoh6Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criterioh6Div.classList.add('oculto');
        rangoh6Div.classList.add('oculto');
        costoh6Div.classList.remove('oculto');
    } else {
        criterioh6Div.classList.add('oculto');
        rangoh6Div.classList.add('oculto');
        costoh6Div.classList.add('oculto');
    }
});

document.getElementById('hom6').addEventListener('change', function() {
    const hom6Div = document.querySelector('.mujer6');

    if (this.value === 'mujer6') {
        hom6Div.style.display = 'block';
    } 
    else {
        hom6Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});

document.getElementById('mujer7').addEventListener('change', function() {
    const criteriom6Div = document.getElementById('criteriom6');
    const rangom6Div = document.getElementById('rangom6');
    const costom6Div = document.getElementById('costom6');

    if (this.value === 'si') {
        criteriom6Div.classList.remove('oculto');
        rangom6Div.classList.remove('oculto');
        costom6Div.classList.add('oculto');
    } else if (this.value === 'no') {
        criteriom6Div.classList.add('oculto');
        rangom6Div.classList.add('oculto');
        costom6Div.classList.remove('oculto');
    } else {
        criteriom6Div.classList.add('oculto');
        rangom6Div.classList.add('oculto');
        costom6Div.classList.add('oculto');
    }
});

document.getElementById('hom6').addEventListener('change', function() {
    const hom6Div = document.querySelectorAll('.hombre6, .mujer6');

    if (this.value === 'ambos') {
        hom6Div.forEach(element => {
            element.style.display = 'block';
        });
    }
});

// ----- Peinados ----- //

document.getElementById('peinados').addEventListener('change', function() {
    const peinadosDiv = document.querySelector('.peinados');

    if (this.value === 'si') {
        peinadosDiv.style.display = 'block';
    } 
    else {
        peinadosDiv.style.display = 'none';  // Asegúrate de ocultar la otra sección
    }
});


    document.getElementById('secadorpelo').addEventListener('change', function() {
        const costosb102Div = document.getElementById('costosb102');
        const tiempob102Div = document.getElementById('tiempob102');

        if (this.value === 'si') {
            costosb102Div.classList.remove('oculto');
            tiempob102Div.classList.remove('oculto');
        } else {
            costosb102Div.classList.add('oculto');
            tiempob102Div.classList.add('oculto');
        }
    });

    document.getElementById('plancha1').addEventListener('change', function() {
        const costosb103Div = document.getElementById('costosb103');
        const tiempob103Div = document.getElementById('tiempob103');

        if (this.value === 'si') {
            costosb103Div.classList.remove('oculto');
            tiempob103Div.classList.remove('oculto');
        } else {
            costosb103Div.classList.add('oculto');
            tiempob103Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillored2').addEventListener('change', function() {
        const costosb104Div = document.getElementById('costosb104');
        const tiempob104Div = document.getElementById('tiempob104');

        if (this.value === 'si') {
            costosb104Div.classList.remove('oculto');
            tiempob104Div.classList.remove('oculto');
        } else {
            costosb104Div.classList.add('oculto');
            tiempob104Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloter2').addEventListener('change', function() {
        const costosb105Div = document.getElementById('costosb105');
        const tiempob105Div = document.getElementById('tiempob105');

        if (this.value === 'si') {
            costosb105Div.classList.remove('oculto');
            tiempob105Div.classList.remove('oculto');
        } else {
            costosb105Div.classList.add('oculto');
            tiempob105Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillonylon2').addEventListener('change', function() {
        const costosb106Div = document.getElementById('costosb106');
        const tiempob106Div = document.getElementById('tiempob106');

        if (this.value === 'si') {
            costosb106Div.classList.remove('oculto');
            tiempob106Div.classList.remove('oculto');
        } else {
            costosb106Div.classList.add('oculto');
            tiempob106Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloova2').addEventListener('change', function() {
        const costosb107Div = document.getElementById('costosb107');
        const tiempob107Div = document.getElementById('tiempob107');

        if (this.value === 'si') {
            costosb107Div.classList.remove('oculto');
            tiempob107Div.classList.remove('oculto');
        } else {
            costosb107Div.classList.add('oculto');
            tiempob107Div.classList.add('oculto');
        }
    });

    document.getElementById('peinepuas').addEventListener('change', function() {
        const costosb108Div = document.getElementById('costosb108');
        const tiempob108Div = document.getElementById('tiempob108');

        if (this.value === 'si') {
            costosb108Div.classList.remove('oculto');
            tiempob108Div.classList.remove('oculto');
        } else {
            costosb108Div.classList.add('oculto');
            tiempob108Div.classList.add('oculto');
        }
    });  
    
    document.getElementById('tenazas').addEventListener('change', function() {
        const costosb109Div = document.getElementById('costosb109');
        const tiempob109Div = document.getElementById('tiempob109');

        if (this.value === 'si') {
            costosb109Div.classList.remove('oculto');
            tiempob109Div.classList.remove('oculto');
        } else {
            costosb109Div.classList.add('oculto');
            tiempob109Div.classList.add('oculto');
        }
    });  

    document.getElementById('horquillas').addEventListener('change', function() {
        const costosb110Div = document.getElementById('costosb110');
        const tiempob110Div = document.getElementById('tiempob110');

        if (this.value === 'si') {
            costosb110Div.classList.remove('oculto');
            tiempob110Div.classList.remove('oculto');
        } else {
            costosb110Div.classList.add('oculto');
            tiempob110Div.classList.add('oculto');
        }
    });

    document.getElementById('rizador').addEventListener('change', function() {
        const costosb111Div = document.getElementById('costosb111');
        const tiempob111Div = document.getElementById('tiempob111');

        if (this.value === 'si') {
            costosb111Div.classList.remove('oculto');
            tiempob111Div.classList.remove('oculto');
        } else {
            costosb111Div.classList.add('oculto');
            tiempob111Div.classList.add('oculto');
        }
    });

    document.getElementById('spray').addEventListener('change', function() {
        const costosb112Div = document.getElementById('costosb112');
        const tiempob112Div = document.getElementById('tiempob112');

        if (this.value === 'si') {
            costosb112Div.classList.remove('oculto');
            tiempob112Div.classList.remove('oculto');
        } else {
            costosb112Div.classList.add('oculto');
            tiempob112Div.classList.add('oculto');
        }
    });

    document.getElementById('mousse').addEventListener('change', function() {
        const costosb113Div = document.getElementById('costosb113');
        const tiempob113Div = document.getElementById('tiempob113');

        if (this.value === 'si') {
            costosb113Div.classList.remove('oculto');
            tiempob113Div.classList.remove('oculto');
        } else {
            costosb113Div.classList.add('oculto');
            tiempob113Div.classList.add('oculto');
        }
    });

    document.getElementById('serum').addEventListener('change', function() {
        const costosb114Div = document.getElementById('costosb114');
        const tiempob114Div = document.getElementById('tiempob114');

        if (this.value === 'si') {
            costosb114Div.classList.remove('oculto');
            tiempob114Div.classList.remove('oculto');
        } else {
            costosb114Div.classList.add('oculto');
            tiempob114Div.classList.add('oculto');
        }
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Enviar').addEventListener('click', function(event) {
        event.preventDefault();
        // Obtén los valores de los campos específicos de belleza
        const corteCabello = document.getElementById('corteCabello').value;
        const tijerasMicrodentado = document.getElementById('tijerasMicrodentado').value;
        // Agrega más variables según sea necesario

        // Llama a la función específica de belleza para enviar estos datos
        enviarProductoHojaCalculoBelleza(corteCabello, tijerasMicrodentado /*, ... y así sucesivamente */);

        // También llama a la función para enviar datos generales
        //enviarDatosGenerales();
        
        alert("Información de belleza enviada con éxito.");
    });
});

// Función para enviar datos específicos de belleza a la hoja de cálculo
async function enviarProductoHojaCalculoBelleza(corteCabello, tijerasMicrodentado /*, ... y así sucesivamente */) {
    try {
        // Construye la URL de la hoja de cálculo (puedes añadir la pestaña específica si es necesario)
        //const gidBelleza = '1885976254'; // GID para la hoja de cálculo de Belleza
        const respuesta = await fetch("https://sheet.best/api/sheets/d3f7e817-4130-4931-a597-c7638d7e0893?gid=1885976254", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Corte de cabello": corteCabello,
                "Tijeras microdentado": tijerasMicrodentado,
                // Agrega más campos según sea necesario
            })
        });

        const contenido = await respuesta.json();
        console.log(contenido);
    } catch (error) {
        console.log(error);
    }
}
