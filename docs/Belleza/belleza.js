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
        //const costost1Div = document.getElementById('costost1');
        //const tiempot1Div = document.getElementById('tiempot1');

        const costost1Div = document.getElementById('costost1a');
        const tiempot1Div = document.getElementById('tiempot1a');

        if (this.value === 'si') {
            costost1Div.classList.remove('oculto');
            tiempot1Div.classList.remove('oculto');
        } else {
            costost1Div.classList.add('oculto');
            tiempot1Div.classList.add('oculto');
        }
    });

    document.getElementById('tijeras2').addEventListener('change', function() {
        const costost2Div = document.getElementById('costost2a');
        const tiempot2Div = document.getElementById('tiempot2a');

        if (this.value === 'si') {
            costost2Div.classList.remove('oculto');
            tiempot2Div.classList.remove('oculto');
        } else {
            costost2Div.classList.add('oculto');
            tiempot2Div.classList.add('oculto');
        }
    });

    document.getElementById('tijeras3').addEventListener('change', function() {
        const costost3Div = document.getElementById('costost3a');
        const tiempot3Div = document.getElementById('tiempot3a');

        if (this.value === 'si') {
            costost3Div.classList.remove('oculto');
            tiempot3Div.classList.remove('oculto');
        } else {
            costost3Div.classList.add('oculto');
            tiempot3Div.classList.add('oculto');
        }
    });

    document.getElementById('tijeras4').addEventListener('change', function() {
        const costost4Div = document.getElementById('costost4a');
        const tiempot4Div = document.getElementById('tiempot4a');

        if (this.value === 'si') {
            costost4Div.classList.remove('oculto');
            tiempot4Div.classList.remove('oculto');
        } else {
            costost4Div.classList.add('oculto');
            tiempot4Div.classList.add('oculto');
        }
    });

    document.getElementById('capa').addEventListener('change', function() {
        const costoscDiv = document.getElementById('costosca');
        const tiempocDiv = document.getElementById('tiempoca');

        if (this.value === 'si') {
            costoscDiv.classList.remove('oculto');
            tiempocDiv.classList.remove('oculto');
        } else {
            costoscDiv.classList.add('oculto');
            tiempocDiv.classList.add('oculto');
        }
    });

    document.getElementById('cepillo1').addEventListener('change', function() {
        const costosc1Div = document.getElementById('costosc1a');
        const tiempoc1Div = document.getElementById('tiempoc1a');

        if (this.value === 'si') {
            costosc1Div.classList.remove('oculto');
            tiempoc1Div.classList.remove('oculto');
        } else {
            costosc1Div.classList.add('oculto');
            tiempoc1Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillo2').addEventListener('change', function() {
        const costosc2Div = document.getElementById('costosc2a');
        const tiempoc2Div = document.getElementById('tiempoc2a');

        if (this.value === 'si') {
            costosc2Div.classList.remove('oculto');
            tiempoc2Div.classList.remove('oculto');
        } else {
            costosc2Div.classList.add('oculto');
            tiempoc2Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillo3').addEventListener('change', function() {
        const costosc3Div = document.getElementById('costosc3a');
        const tiempoc3Div = document.getElementById('tiempoc3a');

        if (this.value === 'si') {
            costosc3Div.classList.remove('oculto');
            tiempoc3Div.classList.remove('oculto');
        } else {
            costosc3Div.classList.add('oculto');
            tiempoc3Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillo4').addEventListener('change', function() {
        const costosc4Div = document.getElementById('costosc4a');
        const tiempoc4Div = document.getElementById('tiempoc4a');

        if (this.value === 'si') {
            costosc4Div.classList.remove('oculto');
            tiempoc4Div.classList.remove('oculto');
        } else {
            costosc4Div.classList.add('oculto');
            tiempoc4Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillo5').addEventListener('change', function() {
        const costosc5Div = document.getElementById('costosc5a');
        const tiempoc5Div = document.getElementById('tiempoc5a');

        if (this.value === 'si') {
            costosc5Div.classList.remove('oculto');
            tiempoc5Div.classList.remove('oculto');
        } else {
            costosc5Div.classList.add('oculto');
            tiempoc5Div.classList.add('oculto');
        }
    });

    document.getElementById('pinzas').addEventListener('change', function() {
        const costospDiv = document.getElementById('costospa');
        const tiempopDiv = document.getElementById('tiempopa');

        if (this.value === 'si') {
            costospDiv.classList.remove('oculto');
            tiempopDiv.classList.remove('oculto');
        } else {
            costospDiv.classList.add('oculto');
            tiempopDiv.classList.add('oculto');
        }
    });

    document.getElementById('secadora').addEventListener('change', function() {
        const costossDiv = document.getElementById('costossa');
        const tiemposDiv = document.getElementById('tiemposa');

        if (this.value === 'si') {
            costossDiv.classList.remove('oculto');
            tiemposDiv.classList.remove('oculto');
        } else {
            costossDiv.classList.add('oculto');
            tiemposDiv.classList.add('oculto');
        }
    });

    document.getElementById('plancha').addEventListener('change', function() {
        const costosp1Div = document.getElementById('costosp1a');
        const tiempop1Div = document.getElementById('tiempop1a');

        if (this.value === 'si') {
            costosp1Div.classList.remove('oculto');
            tiempop1Div.classList.remove('oculto');
        } else {
            costosp1Div.classList.add('oculto');
            tiempop1Div.classList.add('oculto');
        }
    });

    document.getElementById('shampoo').addEventListener('change', function() {
        const costoss1Div = document.getElementById('costoss1a');
        const tiempos1Div = document.getElementById('tiempos1a');

        if (this.value === 'si') {
            costoss1Div.classList.remove('oculto');
            tiempos1Div.classList.remove('oculto');
        } else {
            costoss1Div.classList.add('oculto');
            tiempos1Div.classList.add('oculto');
        }
    });

    document.getElementById('acondicionador').addEventListener('change', function() {
        const costosaDiv = document.getElementById('costosaa');
        const tiempoaDiv = document.getElementById('tiempoaa');

        if (this.value === 'si') {
            costosaDiv.classList.remove('oculto');
            tiempoaDiv.classList.remove('oculto');
        } else {
            costosaDiv.classList.add('oculto');
            tiempoaDiv.classList.add('oculto');
        }
    });

    document.getElementById('mascarilla').addEventListener('change', function() {
        const costosmDiv = document.getElementById('costosma');
        const tiempomDiv = document.getElementById('tiempoma');

        if (this.value === 'si') {
            costosmDiv.classList.remove('oculto');
            tiempomDiv.classList.remove('oculto');
        } else {
            costosmDiv.classList.add('oculto');
            tiempomDiv.classList.add('oculto');
        }
    });

    document.getElementById('fijador').addEventListener('change', function() {
        const costosfDiv = document.getElementById('costosfa');
        const tiempofDiv = document.getElementById('tiempofa');

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
    const criterioDiv = document.getElementById('criterioa');
    const rangoDiv = document.getElementById('rangoa');
    const costohDiv = document.getElementById('costoha');

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
    const criteriomDiv = document.getElementById('criterioma');
    const rangomDiv = document.getElementById('rangoma');
    const costomDiv = document.getElementById('costoma');

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
        const costosx1Div = document.getElementById('costosx1a');
        const tiempox1Div = document.getElementById('tiempox1a');

        if (this.value === 'si') {
            costosx1Div.classList.remove('oculto');
            tiempox1Div.classList.remove('oculto');
        } else {
            costosx1Div.classList.add('oculto');
            tiempox1Div.classList.add('oculto');
        }
    });

    document.getElementById('limapapel').addEventListener('change', function() {
        const costosx2Div = document.getElementById('costosx2a');
        const tiempox2Div = document.getElementById('tiempox2a');

        if (this.value === 'si') {
            costosx2Div.classList.remove('oculto');
            tiempox2Div.classList.remove('oculto');
        } else {
            costosx2Div.classList.add('oculto');
            tiempox2Div.classList.add('oculto');
        }
    });

    document.getElementById('limametal').addEventListener('change', function() {
        const costosx3Div = document.getElementById('costosx3a');
        const tiempox3Div = document.getElementById('tiempox3a');

        if (this.value === 'si') {
            costosx3Div.classList.remove('oculto');
            tiempox3Div.classList.remove('oculto');
        } else {
            costosx3Div.classList.add('oculto');
            tiempox3Div.classList.add('oculto');
        }
    });

    document.getElementById('pulidor').addEventListener('change', function() {
        const costosx4Div = document.getElementById('costosx4a');
        const tiempox4Div = document.getElementById('tiempox4a');

        if (this.value === 'si') {
            costosx4Div.classList.remove('oculto');
            tiempox4Div.classList.remove('oculto');
        } else {
            costosx4Div.classList.add('oculto');
            tiempox4Div.classList.add('oculto');
        }
    });

    document.getElementById('cuticulas').addEventListener('change', function() {
        const costosx5Div = document.getElementById('costosx5a');
        const tiempox5Div = document.getElementById('tiempox5a');

        if (this.value === 'si') {
            costosx5Div.classList.remove('oculto');
            tiempox5Div.classList.remove('oculto');
        } else {
            costosx5Div.classList.add('oculto');
            tiempox5Div.classList.add('oculto');
        }
    });
    
    document.getElementById('cepillouñas').addEventListener('change', function() {
        const costosx6Div = document.getElementById('costosx6a');
        const tiempox6Div = document.getElementById('tiempox6a');

        if (this.value === 'si') {
            costosx6Div.classList.remove('oculto');
            tiempox6Div.classList.remove('oculto');
        } else {
            costosx6Div.classList.add('oculto');
            tiempox6Div.classList.add('oculto');
        }
    });

    document.getElementById('alicate').addEventListener('change', function() {
        const costosx7Div = document.getElementById('costosx7a');
        const tiempox7Div = document.getElementById('tiempox7a');

        if (this.value === 'si') {
            costosx7Div.classList.remove('oculto');
            tiempox7Div.classList.remove('oculto');
        } else {
            costosx7Div.classList.add('oculto');
            tiempox7Div.classList.add('oculto');
        }
    });

    document.getElementById('palitos').addEventListener('change', function() {
        const costosx8Div = document.getElementById('costosx8a');
        const tiempox8Div = document.getElementById('tiempox8a');

        if (this.value === 'si') {
            costosx8Div.classList.remove('oculto');
            tiempox8Div.classList.remove('oculto');
        } else {
            costosx8Div.classList.add('oculto');
            tiempox8Div.classList.add('oculto');
        }
    });

    document.getElementById('pinzasuñas').addEventListener('change', function() {
        const costosx9Div = document.getElementById('costosx9a');
        const tiempox9Div = document.getElementById('tiempox9a');

        if (this.value === 'si') {
            costosx9Div.classList.remove('oculto');
            tiempox9Div.classList.remove('oculto');
        } else {
            costosx9Div.classList.add('oculto');
            tiempox9Div.classList.add('oculto');
        }
    });

    document.getElementById('pincelesnail').addEventListener('change', function() {
        const costosx10Div = document.getElementById('costosx10a');
        const tiempox10Div = document.getElementById('tiempox10a');

        if (this.value === 'si') {
            costosx10Div.classList.remove('oculto');
            tiempox10Div.classList.remove('oculto');
        } else {
            costosx10Div.classList.add('oculto');
            tiempox10Div.classList.add('oculto');
        }
    });

    document.getElementById('lamparaLED').addEventListener('change', function() {
        const costosx11Div = document.getElementById('costosx11a');
        const tiempox11Div = document.getElementById('tiempox11a');

        if (this.value === 'si') {
            costosx11Div.classList.remove('oculto');
            tiempox11Div.classList.remove('oculto');
        } else {
            costosx11Div.classList.add('oculto');
            tiempox11Div.classList.add('oculto');
        }
    });

    document.getElementById('monomero').addEventListener('change', function() {
        const costosx12Div = document.getElementById('costosx12a');
        const tiempox12Div = document.getElementById('tiempox12a');

        if (this.value === 'si') {
            costosx12Div.classList.remove('oculto');
            tiempox12Div.classList.remove('oculto');
        } else {
            costosx12Div.classList.add('oculto');
            tiempox12Div.classList.add('oculto');
        }
    });

    document.getElementById('esmaltes').addEventListener('change', function() {
        const costosx13Div = document.getElementById('costosx13a');
        const tiempox13Div = document.getElementById('tiempox13a');

        if (this.value === 'si') {
            costosx13Div.classList.remove('oculto');
            tiempox13Div.classList.remove('oculto');
        } else {
            costosx13Div.classList.add('oculto');
            tiempox13Div.classList.add('oculto');
        }
    });

    document.getElementById('topcoat').addEventListener('change', function() {
        const costosx14Div = document.getElementById('costosx14a');
        const tiempox14Div = document.getElementById('tiempox14a');

        if (this.value === 'si') {
            costosx14Div.classList.remove('oculto');
            tiempox14Div.classList.remove('oculto');
        } else {
            costosx14Div.classList.add('oculto');
            tiempox14Div.classList.add('oculto');
        }
    });

    document.getElementById('removedor').addEventListener('change', function() {
        const costosx15Div = document.getElementById('costosx15a');
        const tiempox15Div = document.getElementById('tiempox15a');

        if (this.value === 'si') {
            costosx15Div.classList.remove('oculto');
            tiempox15Div.classList.remove('oculto');
        } else {
            costosx15Div.classList.add('oculto');
            tiempox15Div.classList.add('oculto');
        }
    });

    document.getElementById('algodon').addEventListener('change', function() {
        const costosx16Div = document.getElementById('costosx16a');
        const tiempox16Div = document.getElementById('tiempox16a');

        if (this.value === 'si') {
            costosx16Div.classList.remove('oculto');
            tiempox16Div.classList.remove('oculto');
        } else {
            costosx16Div.classList.add('oculto');
            tiempox16Div.classList.add('oculto');
        }
    });

    document.getElementById('toallitas2').addEventListener('change', function() {
        const costosx17Div = document.getElementById('costosx17a');
        const tiempox17Div = document.getElementById('tiempox17a');

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


    document.getElementById('cortauñas2').addEventListener('change', function() {
        const costosb1Div = document.getElementById('costosb1a');
        const tiempob1Div = document.getElementById('tiempob1a');

        if (this.value === 'si') {
            costosb1Div.classList.remove('oculto');
            tiempob1Div.classList.remove('oculto');
        } else {
            costosb1Div.classList.add('oculto');
            tiempob1Div.classList.add('oculto');
        }
    });

    document.getElementById('empujador').addEventListener('change', function() {
        const costosb2Div = document.getElementById('costosb2a');
        const tiempob2Div = document.getElementById('tiempob2a');

        if (this.value === 'si') {
            costosb2Div.classList.remove('oculto');
            tiempob2Div.classList.remove('oculto');
        } else {
            costosb2Div.classList.add('oculto');
            tiempob2Div.classList.add('oculto');
        }
    });

    document.getElementById('alicate2').addEventListener('change', function() {
        const costosb3Div = document.getElementById('costosb3a');
        const tiempob3Div = document.getElementById('tiempob3a');

        if (this.value === 'si') {
            costosb3Div.classList.remove('oculto');
            tiempob3Div.classList.remove('oculto');
        } else {
            costosb3Div.classList.add('oculto');
            tiempob3Div.classList.add('oculto');
        }
    });

    document.getElementById('limap').addEventListener('change', function() {
        const costosb4Div = document.getElementById('costosb4a');
        const tiempob4Div = document.getElementById('tiempob4a');

        if (this.value === 'si') {
            costosb4Div.classList.remove('oculto');
            tiempob4Div.classList.remove('oculto');
        } else {
            costosb4Div.classList.add('oculto');
            tiempob4Div.classList.add('oculto');
        }
    });

    document.getElementById('piedra').addEventListener('change', function() {
        const costosb5Div = document.getElementById('costosb5a');
        const tiempob5Div = document.getElementById('tiempob5a');

        if (this.value === 'si') {
            costosb5Div.classList.remove('oculto');
            tiempob5Div.classList.remove('oculto');
        } else {
            costosb5Div.classList.add('oculto');
            tiempob5Div.classList.add('oculto');
        }
    });

    document.getElementById('limamad').addEventListener('change', function() {
        const costosb6Div = document.getElementById('costosb6a');
        const tiempob6Div = document.getElementById('tiempob6a');

        if (this.value === 'si') {
            costosb6Div.classList.remove('oculto');
            tiempob6Div.classList.remove('oculto');
        } else {
            costosb6Div.classList.add('oculto');
            tiempob6Div.classList.add('oculto');
        }
    });

    document.getElementById('limavid').addEventListener('change', function() {
        const costosb7Div = document.getElementById('costosb7a');
        const tiempob7Div = document.getElementById('tiempob7a');

        if (this.value === 'si') {
            costosb7Div.classList.remove('oculto');
            tiempob7Div.classList.remove('oculto');
        } else {
            costosb7Div.classList.add('oculto');
            tiempob7Div.classList.add('oculto');
        }
    });

    document.getElementById('limamet').addEventListener('change', function() {
        const costosb8Div = document.getElementById('costosb8a');
        const tiempob8Div = document.getElementById('tiempob8a');

        if (this.value === 'si') {
            costosb8Div.classList.remove('oculto');
            tiempob8Div.classList.remove('oculto');
        } else {
            costosb8Div.classList.add('oculto');
            tiempob8Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillou').addEventListener('change', function() {
        const costosb9Div = document.getElementById('costosb9a');
        const tiempob9Div = document.getElementById('tiempob9a');

        if (this.value === 'si') {
            costosb9Div.classList.remove('oculto');
            tiempob9Div.classList.remove('oculto');
        } else {
            costosb9Div.classList.add('oculto');
            tiempob9Div.classList.add('oculto');
        }
    });

    document.getElementById('separador').addEventListener('change', function() {
        const costosb10Div = document.getElementById('costosb10a');
        const tiempob10Div = document.getElementById('tiempob10a');

        if (this.value === 'si') {
            costosb10Div.classList.remove('oculto');
            tiempob10Div.classList.remove('oculto');
        } else {
            costosb10Div.classList.add('oculto');
            tiempob10Div.classList.add('oculto');
        }
    });

    document.getElementById('palomad').addEventListener('change', function() {
        const costosb11Div = document.getElementById('costosb11a');
        const tiempob11Div = document.getElementById('tiempob11a');

        if (this.value === 'si') {
            costosb11Div.classList.remove('oculto');
            tiempob11Div.classList.remove('oculto');
        } else {
            costosb11Div.classList.add('oculto');
            tiempob11Div.classList.add('oculto');
        }
    });

    document.getElementById('exfoliante').addEventListener('change', function() {
        const costosb12Div = document.getElementById('costosb12a');
        const tiempob12Div = document.getElementById('tiempob12a');

        if (this.value === 'si') {
            costosb12Div.classList.remove('oculto');
            tiempob12Div.classList.remove('oculto');
        } else {
            costosb12Div.classList.add('oculto');
            tiempob12Div.classList.add('oculto');
        }
    });

    document.getElementById('cremahid').addEventListener('change', function() {
        const costosb13Div = document.getElementById('costosb13a');
        const tiempob13Div = document.getElementById('tiempob13a');

        if (this.value === 'si') {
            costosb13Div.classList.remove('oculto');
            tiempob13Div.classList.remove('oculto');
        } else {
            costosb13Div.classList.add('oculto');
            tiempob13Div.classList.add('oculto');
        }
    });

    document.getElementById('esmalte').addEventListener('change', function() {
        const costosb14Div = document.getElementById('costosb14a');
        const tiempob14Div = document.getElementById('tiempob14a');

        if (this.value === 'si') {
            costosb14Div.classList.remove('oculto');
            tiempob14Div.classList.remove('oculto');
        } else {
            costosb14Div.classList.add('oculto');
            tiempob14Div.classList.add('oculto');
        }
    });

    document.getElementById('suero').addEventListener('change', function() {
        const costosb15Div = document.getElementById('costosb15a');
        const tiempob15Div = document.getElementById('tiempob15a');

        if (this.value === 'si') {
            costosb15Div.classList.remove('oculto');
            tiempob15Div.classList.remove('oculto');
        } else {
            costosb15Div.classList.add('oculto');
            tiempob15Div.classList.add('oculto');
        }
    });

    document.getElementById('toallas').addEventListener('change', function() {
        const costosb16Div = document.getElementById('costosb16a');
        const tiempob16Div = document.getElementById('tiempob16a');

        if (this.value === 'si') {
            costosb16Div.classList.remove('oculto');
            tiempob16Div.classList.remove('oculto');
        } else {
            costosb16Div.classList.add('oculto');
            tiempob16Div.classList.add('oculto');
        }
    });

    document.getElementById('acetona').addEventListener('change', function() {
        const costosb17Div = document.getElementById('costosb17a');
        const tiempob17Div = document.getElementById('tiempob17a');

        if (this.value === 'si') {
            costosb17Div.classList.remove('oculto');
            tiempob17Div.classList.remove('oculto');
        } else {
            costosb17Div.classList.add('oculto');
            tiempob17Div.classList.add('oculto');
        }
    });

    document.getElementById('locion').addEventListener('change', function() {
        const costosb18Div = document.getElementById('costosb18a');
        const tiempob18Div = document.getElementById('tiempob18a');

        if (this.value === 'si') {
            costosb18Div.classList.remove('oculto');
            tiempob18Div.classList.remove('oculto');
        } else {
            costosb18Div.classList.add('oculto');
            tiempob18Div.classList.add('oculto');
        }
    });

    document.getElementById('esmaltes2').addEventListener('change', function() {
        const costosb19Div = document.getElementById('costosb19a');
        const cantidadb19Div = document.getElementById('cantidadb19a');         
        const tiempob19Div = document.getElementById('tiempob19a');

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
        const costosb20Div = document.getElementById('costosb20a');        
        const tiempob20Div = document.getElementById('tiempob20a');

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
    const criterioh1Div = document.getElementById('criterioh1a');
    const rangoh1Div = document.getElementById('rangoh1a');
    const costoh1Div = document.getElementById('costoh1a');

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
    const criteriomDiv = document.getElementById('criteriom1a');
    const rangomDiv = document.getElementById('rangom1a');
    const costomDiv = document.getElementById('costom1a');

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
        const costosb21Div = document.getElementById('costosb21a');
        const tiempob21Div = document.getElementById('tiempob21a');

        if (this.value === 'si') {
            costosb21Div.classList.remove('oculto');
            tiempob21Div.classList.remove('oculto');
        } else {
            costosb21Div.classList.add('oculto');
            tiempob21Div.classList.add('oculto');
        }
    });

    document.getElementById('tazon').addEventListener('change', function() {
        const costosb22Div = document.getElementById('costosb22a');
        const tiempob22Div = document.getElementById('tiempob22a');

        if (this.value === 'si') {
            costosb22Div.classList.remove('oculto');
            tiempob22Div.classList.remove('oculto');
        } else {
            costosb22Div.classList.add('oculto');
            tiempob22Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillomez').addEventListener('change', function() {
        const costosb23Div = document.getElementById('costosb23a');
        const tiempob23Div = document.getElementById('tiempob23a');

        if (this.value === 'si') {
            costosb23Div.classList.remove('oculto');
            tiempob23Div.classList.remove('oculto');
        } else {
            costosb23Div.classList.add('oculto');
            tiempob23Div.classList.add('oculto');
        }
    });

    document.getElementById('gorros').addEventListener('change', function() {
        const costosb24Div = document.getElementById('costosb24a');
        const tiempob24Div = document.getElementById('tiempob24a');

        if (this.value === 'si') {
            costosb24Div.classList.remove('oculto');
            tiempob24Div.classList.remove('oculto');
        } else {
            costosb24Div.classList.add('oculto');
            tiempob24Div.classList.add('oculto');
        }
    });

    document.getElementById('peine').addEventListener('change', function() {
        const costosb25Div = document.getElementById('costosb25a');
        const tiempob25Div = document.getElementById('tiempob25a');

        if (this.value === 'si') {
            costosb25Div.classList.remove('oculto');
            tiempob25Div.classList.remove('oculto');
        } else {
            costosb25Div.classList.add('oculto');
            tiempob25Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillored').addEventListener('change', function() {
        const costosb26Div = document.getElementById('costosb26a');
        const tiempob26Div = document.getElementById('tiempob26a');

        if (this.value === 'si') {
            costosb26Div.classList.remove('oculto');
            tiempob26Div.classList.remove('oculto');
        } else {
            costosb26Div.classList.add('oculto');
            tiempob26Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloter').addEventListener('change', function() {
        const costosb27Div = document.getElementById('costosb27a');
        const tiempob27Div = document.getElementById('tiempob27a');

        if (this.value === 'si') {
            costosb27Div.classList.remove('oculto');
            tiempob27Div.classList.remove('oculto');
        } else {
            costosb27Div.classList.add('oculto');
            tiempob27Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillonylon').addEventListener('change', function() {
        const costosb28Div = document.getElementById('costosb28a');
        const tiempob28Div = document.getElementById('tiempob28a');

        if (this.value === 'si') {
            costosb28Div.classList.remove('oculto');
            tiempob28Div.classList.remove('oculto');
        } else {
            costosb28Div.classList.add('oculto');
            tiempob28Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloova').addEventListener('change', function() {
        const costosb29Div = document.getElementById('costosb29a');
        const tiempob29Div = document.getElementById('tiempob29a');

        if (this.value === 'si') {
            costosb29Div.classList.remove('oculto');
            tiempob29Div.classList.remove('oculto');
        } else {
            costosb29Div.classList.add('oculto');
            tiempob29Div.classList.add('oculto');
        }
    });

    document.getElementById('aluminio').addEventListener('change', function() {
        const costosb30Div = document.getElementById('costosb30a');
        const tiempob30Div = document.getElementById('tiempob30a');

        if (this.value === 'si') {
            costosb30Div.classList.remove('oculto');
            tiempob30Div.classList.remove('oculto');
        } else {
            costosb30Div.classList.add('oculto');
            tiempob30Div.classList.add('oculto');
        }
    });

    document.getElementById('tintes').addEventListener('change', function() {
        const costosb31Div = document.getElementById('costosb31a');
        const cantidadb31Div = document.getElementById('cantidadb31a');
        const tiempob31Div = document.getElementById('tiempob31a');

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
        const costosb32Div = document.getElementById('costosb32a');
        const tiempob32Div = document.getElementById('tiempob32a');

        if (this.value === 'si') {
            costosb32Div.classList.remove('oculto');
            tiempob32Div.classList.remove('oculto');
        } else {
            costosb32Div.classList.add('oculto');
            tiempob32Div.classList.add('oculto');
        }
    });

    document.getElementById('locionact').addEventListener('change', function() {
        const costosb33Div = document.getElementById('costosb33a');
        const tiempob33Div = document.getElementById('tiempob33a');

        if (this.value === 'si') {
            costosb33Div.classList.remove('oculto');
            tiempob33Div.classList.remove('oculto');
        } else {
            costosb33Div.classList.add('oculto');
            tiempob33Div.classList.add('oculto');
        }
    });

    document.getElementById('mascarillac').addEventListener('change', function() {
        const costosb34Div = document.getElementById('costosb34a');
        const tiempob34Div = document.getElementById('tiempob34a');

        if (this.value === 'si') {
            costosb34Div.classList.remove('oculto');
            tiempob34Div.classList.remove('oculto');
        } else {
            costosb34Div.classList.add('oculto');
            tiempob34Div.classList.add('oculto');
        }
    });

    document.getElementById('cremaacond').addEventListener('change', function() {
        const costosb35Div = document.getElementById('costosb35a');
        const tiempob35Div = document.getElementById('tiempob35a');

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
    const criterioh2Div = document.getElementById('criterioh2a');
    const rangoh2Div = document.getElementById('rangoh2a');
    const costoh2Div = document.getElementById('costoh2a');

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
    const criteriom2Div = document.getElementById('criteriom2a');
    const rangom2Div = document.getElementById('rangom2a');
    const costom2Div = document.getElementById('costom2a');

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
        const costosb136Div = document.getElementById('costosb136a');
        const tiempob136Div = document.getElementById('tiempob136a');
        const costosb36Div = document.getElementById('costosb36a');

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
        const costosb137Div = document.getElementById('costosb137a');
        const tiempob137Div = document.getElementById('tiempob137a');
        const costosb237Div = document.getElementById('costosb237a');
        const tiempob237Div = document.getElementById('tiempob237a');
        const costosb37Div = document.getElementById('costosb37a');

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
        const costosb138Div = document.getElementById('costosb138a');
        const tiempob138Div = document.getElementById('tiempob138a');
        const costosb238Div = document.getElementById('costosb238a');
        const tiempob238Div = document.getElementById('tiempob238a');
        const costosb338Div = document.getElementById('costosb338a');
        const tiempob338Div = document.getElementById('tiempob338a');
        const costosb38Div = document.getElementById('costosb38a');

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
        const costosb139Div = document.getElementById('costosb139a');
        const tiempob139Div = document.getElementById('tiempob139a');
        const costosb239Div = document.getElementById('costosb239a');
        const tiempob239Div = document.getElementById('tiempob239a');
        const costosb339Div = document.getElementById('costosb339a');
        const cantidadb339Div = document.getElementById('cantidadb339a');
        const tiempob339Div = document.getElementById('tiempob339a');
        const costosb39Div = document.getElementById('costosb39a');

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
        const costosb40Div = document.getElementById('costosb40a');
        const tiempob40Div = document.getElementById('tiempob40a');

        if (this.value === 'si') {
            costosb40Div.classList.remove('oculto');
            tiempob40Div.classList.remove('oculto');
        } else {
            costosb40Div.classList.add('oculto');
            tiempob40Div.classList.add('oculto');
        }
    });

    document.getElementById('peine1').addEventListener('change', function() {
        const costosb41Div = document.getElementById('costosb41a');
        const tiempob41Div = document.getElementById('tiempob41a');

        if (this.value === 'si') {
            costosb41Div.classList.remove('oculto');
            tiempob41Div.classList.remove('oculto');
        } else {
            costosb41Div.classList.add('oculto');
            tiempob41Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillored1').addEventListener('change', function() {
        const costosb42Div = document.getElementById('costosb42a');
        const tiempob42Div = document.getElementById('tiempob42a');

        if (this.value === 'si') {
            costosb42Div.classList.remove('oculto');
            tiempob42Div.classList.remove('oculto');
        } else {
            costosb42Div.classList.add('oculto');
            tiempob42Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloter1').addEventListener('change', function() {
        const costosb43Div = document.getElementById('costosb43a');
        const tiempob43Div = document.getElementById('tiempob43a');

        if (this.value === 'si') {
            costosb43Div.classList.remove('oculto');
            tiempob43Div.classList.remove('oculto');
        } else {
            costosb43Div.classList.add('oculto');
            tiempob43Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillonylon1').addEventListener('change', function() {
        const costosb44Div = document.getElementById('costosb44a');
        const tiempob44Div = document.getElementById('tiempob44a');

        if (this.value === 'si') {
            costosb44Div.classList.remove('oculto');
            tiempob44Div.classList.remove('oculto');
        } else {
            costosb44Div.classList.add('oculto');
            tiempob44Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloova1').addEventListener('change', function() {
        const costosb45Div = document.getElementById('costosb45a');
        const tiempob45Div = document.getElementById('tiempob45a');

        if (this.value === 'si') {
            costosb45Div.classList.remove('oculto');
            tiempob45Div.classList.remove('oculto');
        } else {
            costosb45Div.classList.add('oculto');
            tiempob45Div.classList.add('oculto');
        }
    });

    document.getElementById('tijeras5').addEventListener('change', function() {
        const costosb46Div = document.getElementById('costosb46a');
        const tiempob46Div = document.getElementById('tiempob46a');

        if (this.value === 'si') {
            costosb46Div.classList.remove('oculto');
            tiempob46Div.classList.remove('oculto');
        } else {
            costosb46Div.classList.add('oculto');
            tiempob46Div.classList.add('oculto');
        }
    });

    document.getElementById('removedorext').addEventListener('change', function() {
        const costosb47Div = document.getElementById('costosb47a');      
        const tiempob47Div = document.getElementById('tiempob47a');

        if (this.value === 'si') {
            costosb47Div.classList.remove('oculto');          
            tiempob47Div.classList.remove('oculto');
        } else {
            costosb47Div.classList.add('oculto');            
            tiempob47Div.classList.add('oculto');
        }
    });

    document.getElementById('rizador').addEventListener('change', function() {
        const costosb48Div = document.getElementById('costosb48a');
        const tiempob48Div = document.getElementById('tiempob48a');

        if (this.value === 'si') {
            costosb48Div.classList.remove('oculto');
            tiempob48Div.classList.remove('oculto');
        } else {
            costosb48Div.classList.add('oculto');
            tiempob48Div.classList.add('oculto');
        }
    });

    document.getElementById('mascarillacab').addEventListener('change', function() {
        const costosb49Div = document.getElementById('costosb49a');
        const tiempob49Div = document.getElementById('tiempob49a');

        if (this.value === 'si') {
            costosb49Div.classList.remove('oculto');
            tiempob49Div.classList.remove('oculto');
        } else {
            costosb49Div.classList.add('oculto');
            tiempob49Div.classList.add('oculto');
        }
    });

    document.getElementById('acondicionador1').addEventListener('change', function() {
        const costosb50Div = document.getElementById('costosb50a');
        const tiempob50Div = document.getElementById('tiempob50a');

        if (this.value === 'si') {
            costosb50Div.classList.remove('oculto');
            tiempob50Div.classList.remove('oculto');
        } else {
            costosb50Div.classList.add('oculto');
            tiempob50Div.classList.add('oculto');
        }
    });

    document.getElementById('shampoo1').addEventListener('change', function() {
        const costosb51Div = document.getElementById('costosb51a');
        const tiempob51Div = document.getElementById('tiempob51a');

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
    const criterioh3Div = document.getElementById('criterioh3a');
    const rangoh3Div = document.getElementById('rangoh3a');
    const costoh3Div = document.getElementById('costoh3a');

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
    const criteriom3Div = document.getElementById('criteriom3a');
    const rangom3Div = document.getElementById('rangom3a');
    const costom3Div = document.getElementById('costom3a');

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
        const costosb52Div = document.getElementById('costosb52a');
        const tiempob52Div = document.getElementById('tiempob52a');        

        if (this.value === 'si') {
            costosb52Div.classList.remove('oculto');
            tiempob52Div.classList.remove('oculto');            
        } else {
            costosb52Div.classList.add('oculto');
            tiempob52Div.classList.add('oculto');            
        }
    });

    document.getElementById('laser').addEventListener('change', function() {
        const costosb53Div = document.getElementById('costosb53a');
        const tiempob53Div = document.getElementById('tiempob53a');        

        if (this.value === 'si') {
            costosb53Div.classList.remove('oculto');
            tiempob53Div.classList.remove('oculto');            
        } else {
            costosb53Div.classList.add('oculto');
            tiempob53Div.classList.add('oculto');            
        }
    });

    document.getElementById('gel').addEventListener('change', function() {
        const costosb54Div = document.getElementById('costosb54a');
        const tiempob54Div = document.getElementById('tiempob54a');        

        if (this.value === 'si') {
            costosb54Div.classList.remove('oculto');
            tiempob54Div.classList.remove('oculto');            
        } else {
            costosb54Div.classList.add('oculto');
            tiempob54Div.classList.add('oculto');            
        }
    });

    document.getElementById('gelanes').addEventListener('change', function() {
        const costosb55Div = document.getElementById('costosb55a');
        const tiempob55Div = document.getElementById('tiempob55a');        

        if (this.value === 'si') {
            costosb55Div.classList.remove('oculto');
            tiempob55Div.classList.remove('oculto');            
        } else {
            costosb55Div.classList.add('oculto');
            tiempob55Div.classList.add('oculto');            
        }
    });
    

    document.getElementById('toallaslim').addEventListener('change', function() {
        const costosb56Div = document.getElementById('costosb56a');
        const tiempob56Div = document.getElementById('tiempob56a');        

        if (this.value === 'si') {
            costosb56Div.classList.remove('oculto');
            tiempob56Div.classList.remove('oculto');            
        } else {
            costosb56Div.classList.add('oculto');
            tiempob56Div.classList.add('oculto');            
        }
    });

    document.getElementById('compresas').addEventListener('change', function() {
        const costosb57Div = document.getElementById('costosb57a');
        const tiempob57Div = document.getElementById('tiempob57a');

        if (this.value === 'si') {
            costosb57Div.classList.remove('oculto');
            tiempob57Div.classList.remove('oculto');
        } else {
            costosb57Div.classList.add('oculto');
            tiempob57Div.classList.add('oculto');
        }
    });

    document.getElementById('piernas').addEventListener('change', function() {
        const costosb58Div = document.getElementById('costosb58a');       

        if (this.value === 'si') {
            costosb58Div.classList.remove('oculto');            
        } else {
            costosb58Div.classList.add('oculto');
        }
    });

    document.getElementById('axilas').addEventListener('change', function() {
        const costosb59Div = document.getElementById('costosb59a');       

        if (this.value === 'si') {
            costosb59Div.classList.remove('oculto');            
        } else {
            costosb59Div.classList.add('oculto');
        }
    });

    document.getElementById('bikini').addEventListener('change', function() {
        const costosb60Div = document.getElementById('costosb60a');       

        if (this.value === 'si') {
            costosb60Div.classList.remove('oculto');            
        } else {
            costosb60Div.classList.add('oculto');
        }
    });

    document.getElementById('zonai').addEventListener('change', function() {
        const costosb61Div = document.getElementById('costosb61a');       

        if (this.value === 'si') {
            costosb61Div.classList.remove('oculto');            
        } else {
            costosb61Div.classList.add('oculto');
        }
    });

    document.getElementById('espalda').addEventListener('change', function() {
        const costosb62Div = document.getElementById('costosb62a');       

        if (this.value === 'si') {
            costosb62Div.classList.remove('oculto');            
        } else {
            costosb62Div.classList.add('oculto');
        }
    });

    document.getElementById('pecho').addEventListener('change', function() {
        const costosb63Div = document.getElementById('costosb63a');       

        if (this.value === 'si') {
            costosb63Div.classList.remove('oculto');            
        } else {
            costosb63Div.classList.add('oculto');
        }
    });

    document.getElementById('brazos').addEventListener('change', function() {
        const costosb64Div = document.getElementById('costosb64a');       

        if (this.value === 'si') {
            costosb64Div.classList.remove('oculto');            
        } else {
            costosb64Div.classList.add('oculto');
        }
    });

    document.getElementById('entrecejo').addEventListener('change', function() {
        const costosb65Div = document.getElementById('costosb65a');       

        if (this.value === 'si') {
            costosb65Div.classList.remove('oculto');            
        } else {
            costosb65Div.classList.add('oculto');
        }
    });

    document.getElementById('labio').addEventListener('change', function() {
        const costosb66Div = document.getElementById('costosb66a');       

        if (this.value === 'si') {
            costosb66Div.classList.remove('oculto');            
        } else {
            costosb66Div.classList.add('oculto');
        }
    });

    document.getElementById('barbilla').addEventListener('change', function() {
        const costosb67Div = document.getElementById('costosb67a');       

        if (this.value === 'si') {
            costosb67Div.classList.remove('oculto');            
        } else {
            costosb67Div.classList.add('oculto');
        }
    });

    document.getElementById('patilla').addEventListener('change', function() {
        const costosb68Div = document.getElementById('costosb68a');       

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
    const criterioh4Div = document.getElementById('criterioh4a');
    const rangoh4Div = document.getElementById('rangoh4a');
    const costoh4Div = document.getElementById('costoh4a');

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
    const criteriom4Div = document.getElementById('criteriom4a');
    const rangom4Div = document.getElementById('rangom4a');
    const costom4Div = document.getElementById('costom4a');

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
        const costosb69Div = document.getElementById('costosb69a');
        const tiempob69Div = document.getElementById('tiempob69a');        

        if (this.value === 'si') {
            costosb69Div.classList.remove('oculto');
            tiempob69Div.classList.remove('oculto');            
        } else {
            costosb69Div.classList.add('oculto');
            tiempob69Div.classList.add('oculto');            
        }
    });

    document.getElementById('guante').addEventListener('change', function() {
        const costosb70Div = document.getElementById('costosb70a');
        const tiempob70Div = document.getElementById('tiempob70a');        

        if (this.value === 'si') {
            costosb70Div.classList.remove('oculto');
            tiempob70Div.classList.remove('oculto');            
        } else {
            costosb70Div.classList.add('oculto');
            tiempob70Div.classList.add('oculto');            
        }
    });

    document.getElementById('rodillo').addEventListener('change', function() {
        const costosb71Div = document.getElementById('costosb71a');
        const tiempob71Div = document.getElementById('tiempob71a');        

        if (this.value === 'si') {
            costosb71Div.classList.remove('oculto');
            tiempob71Div.classList.remove('oculto');            
        } else {
            costosb71Div.classList.add('oculto');
            tiempob71Div.classList.add('oculto');            
        }
    });

   document.getElementById('ventosa').addEventListener('change', function() {
        const costosb72Div = document.getElementById('costosb72a');
        const tiempob72Div = document.getElementById('tiempob72a');        

        if (this.value === 'si') {
            costosb72Div.classList.remove('oculto');
            tiempob72Div.classList.remove('oculto');            
        } else {
            costosb72Div.classList.add('oculto');
            tiempob72Div.classList.add('oculto');            
        }
    });
    

    document.getElementById('cavitador').addEventListener('change', function() {
        const costosb73Div = document.getElementById('costosb73a');
        const tiempob73Div = document.getElementById('tiempob73a');        

        if (this.value === 'si') {
            costosb73Div.classList.remove('oculto');
            tiempob73Div.classList.remove('oculto');            
        } else {
            costosb73Div.classList.add('oculto');
            tiempob73Div.classList.add('oculto');            
        }
    });

    document.getElementById('gel1').addEventListener('change', function() {
        const costosb74Div = document.getElementById('costosb74a');
        const tiempob74Div = document.getElementById('tiempob74a');        

        if (this.value === 'si') {
            costosb74Div.classList.remove('oculto');
            tiempob74Div.classList.remove('oculto');            
        } else {
            costosb74Div.classList.add('oculto');
            tiempob74Div.classList.add('oculto');            
        }
    });

    document.getElementById('lampara').addEventListener('change', function() {
        const costosb75Div = document.getElementById('costosb75a');
        const tiempob75Div = document.getElementById('tiempob75a');        

        if (this.value === 'si') {
            costosb75Div.classList.remove('oculto');
            tiempob75Div.classList.remove('oculto');            
        } else {
            costosb75Div.classList.add('oculto');
            tiempob75Div.classList.add('oculto');            
        }
    });


    document.getElementById('termometro').addEventListener('change', function() {
        const costosb76Div = document.getElementById('costosb76a');
        const tiempob76Div = document.getElementById('tiempob76a');        

        if (this.value === 'si') {
            costosb76Div.classList.remove('oculto');
            tiempob76Div.classList.remove('oculto');            
        } else {
            costosb76Div.classList.add('oculto');
            tiempob76Div.classList.add('oculto');            
        }
    });

    document.getElementById('masajeador1').addEventListener('change', function() {
        const costosb77Div = document.getElementById('costosb77a');
        const tiempob77Div = document.getElementById('tiempob77a');        

        if (this.value === 'si') {
            costosb77Div.classList.remove('oculto');
            tiempob77Div.classList.remove('oculto');            
        } else {
            costosb77Div.classList.add('oculto');
            tiempob77Div.classList.add('oculto');            
        }
    });

    document.getElementById('masajeador2').addEventListener('change', function() {
        const costosb78Div = document.getElementById('costosb78a');
        const tiempob78Div = document.getElementById('tiempob78a');        

        if (this.value === 'si') {
            costosb78Div.classList.remove('oculto');
            tiempob78Div.classList.remove('oculto');            
        } else {
            costosb78Div.classList.add('oculto');
            tiempob78Div.classList.add('oculto');            
        }
    });

    document.getElementById('abdomen').addEventListener('change', function() {
        const costosb79Div = document.getElementById('costosb79a');       

        if (this.value === 'si') {
            costosb79Div.classList.remove('oculto');            
        } else {
            costosb79Div.classList.add('oculto');
        }
    });

    document.getElementById('gluteos').addEventListener('change', function() {
        const costosb80Div = document.getElementById('costosb80a');       

        if (this.value === 'si') {
            costosb80Div.classList.remove('oculto');            
        } else {
            costosb80Div.classList.add('oculto');
        }
    });

    document.getElementById('cintura').addEventListener('change', function() {
        const costosb81Div = document.getElementById('costosb81a');       

        if (this.value === 'si') {
            costosb81Div.classList.remove('oculto');            
        } else {
            costosb81Div.classList.add('oculto');
        }
    });

    document.getElementById('caderas').addEventListener('change', function() {
        const costosb82Div = document.getElementById('costosb82a');       

        if (this.value === 'si') {
            costosb82Div.classList.remove('oculto');            
        } else {
            costosb82Div.classList.add('oculto');
        }
    });

    document.getElementById('muslos').addEventListener('change', function() {
        const costosb83Div = document.getElementById('costosb83a');       

        if (this.value === 'si') {
            costosb83Div.classList.remove('oculto');            
        } else {
            costosb83Div.classList.add('oculto');
        }
    });

    document.getElementById('brazos1').addEventListener('change', function() {
        const costosb84Div = document.getElementById('costosb84a');       

        if (this.value === 'si') {
            costosb84Div.classList.remove('oculto');            
        } else {
            costosb84Div.classList.add('oculto');
        }
    });

    document.getElementById('espalda1').addEventListener('change', function() {
        const costosb85Div = document.getElementById('costosb85a');       

        if (this.value === 'si') {
            costosb85Div.classList.remove('oculto');            
        } else {
            costosb85Div.classList.add('oculto');
        }
    });

    document.getElementById('pantorrillas').addEventListener('change', function() {
        const costosb86Div = document.getElementById('costosb86a');       

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
    const criterioh5Div = document.getElementById('criterioh5a');
    const rangoh5Div = document.getElementById('rangoh5a');
    const costoh5Div = document.getElementById('costoh5a');

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
    const criteriom5Div = document.getElementById('criteriom5a');
    const rangom5Div = document.getElementById('rangom5a');
    const costom5Div = document.getElementById('costom5a');

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
        const costosb87Div = document.getElementById('costosb87a');
        const tiempob87Div = document.getElementById('tiempob87a');

        if (this.value === 'si') {
            costosb87Div.classList.remove('oculto');
            tiempob87Div.classList.remove('oculto');
        } else {
            costosb87Div.classList.add('oculto');
            tiempob87Div.classList.add('oculto');
        }
    });

    document.getElementById('parches').addEventListener('change', function() {
        const costosb88Div = document.getElementById('costosb88a');
        const tiempob88Div = document.getElementById('tiempob88a');

        if (this.value === 'si') {
            costosb88Div.classList.remove('oculto');
            tiempob88Div.classList.remove('oculto');
        } else {
            costosb88Div.classList.add('oculto');
            tiempob88Div.classList.add('oculto');
        }
    });

    document.getElementById('anillos').addEventListener('change', function() {
        const costosb89Div = document.getElementById('costosb89a');
        const tiempob89Div = document.getElementById('tiempob89a');

        if (this.value === 'si') {
            costosb89Div.classList.remove('oculto');
            tiempob89Div.classList.remove('oculto');
        } else {
            costosb89Div.classList.add('oculto');
            tiempob89Div.classList.add('oculto');
        }
    });

    document.getElementById('pegamento').addEventListener('change', function() {
        const costosb90Div = document.getElementById('costosb90a');
        const tiempob90Div = document.getElementById('tiempob90a');

        if (this.value === 'si') {
            costosb90Div.classList.remove('oculto');
            tiempob90Div.classList.remove('oculto');
        } else {
            costosb90Div.classList.add('oculto');
            tiempob90Div.classList.add('oculto');
        }
    });

    document.getElementById('extensionespes').addEventListener('change', function() {
        const costosb91Div = document.getElementById('costosb91a');
        const tiempob91Div = document.getElementById('tiempob91a');

        if (this.value === 'si') {
            costosb91Div.classList.remove('oculto');
            tiempob91Div.classList.remove('oculto');
        } else {
            costosb91Div.classList.add('oculto');
            tiempob91Div.classList.add('oculto');
        }
    });

    document.getElementById('removedorpeg').addEventListener('change', function() {
        const costosb92Div = document.getElementById('costosb92a');
        const tiempob92Div = document.getElementById('tiempob92a');

        if (this.value === 'si') {
            costosb92Div.classList.remove('oculto');
            tiempob92Div.classList.remove('oculto');
        } else {
            costosb92Div.classList.add('oculto');
            tiempob92Div.classList.add('oculto');
        }
    });

    document.getElementById('toallitas').addEventListener('change', function() {
        const costosb93Div = document.getElementById('costosb93a');
        const tiempob93Div = document.getElementById('tiempob93a');

        if (this.value === 'si') {
            costosb93Div.classList.remove('oculto');
            tiempob93Div.classList.remove('oculto');
        } else {
            costosb93Div.classList.add('oculto');
            tiempob93Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillopes').addEventListener('change', function() {
        const costosb94Div = document.getElementById('costosb94a');
        const tiempob94Div = document.getElementById('tiempob94a');

        if (this.value === 'si') {
            costosb94Div.classList.remove('oculto');
            tiempob94Div.classList.remove('oculto');
        } else {
            costosb94Div.classList.add('oculto');
            tiempob94Div.classList.add('oculto');
        }
    });

    document.getElementById('aplicadores').addEventListener('change', function() {
        const costosb95Div = document.getElementById('costosb95a');
        const tiempob95Div = document.getElementById('tiempob95a');

        if (this.value === 'si') {
            costosb95Div.classList.remove('oculto');
            tiempob95Div.classList.remove('oculto');
        } else {
            costosb95Div.classList.add('oculto');
            tiempob95Div.classList.add('oculto');
        }
    });

    document.getElementById('lamparaluz').addEventListener('change', function() {
        const costosb96Div = document.getElementById('costosb96a');
        const tiempob96Div = document.getElementById('tiempob96a');

        if (this.value === 'si') {
            costosb96Div.classList.remove('oculto');
            tiempob96Div.classList.remove('oculto');
        } else {
            costosb96Div.classList.add('oculto');
            tiempob96Div.classList.add('oculto');
        }
    });

    document.getElementById('espejo').addEventListener('change', function() {
        const costosb97Div = document.getElementById('costosb97a');
        const tiempob97Div = document.getElementById('tiempob97a');

        if (this.value === 'si') {
            costosb97Div.classList.remove('oculto');
            tiempob97Div.classList.remove('oculto');
        } else {
            costosb97Div.classList.add('oculto');
            tiempob97Div.classList.add('oculto');
        }
    });

    document.getElementById('secador').addEventListener('change', function() {
        const costosb98Div = document.getElementById('costosb98a');
        const tiempob98Div = document.getElementById('tiempob98a');

        if (this.value === 'si') {
            costosb98Div.classList.remove('oculto');
            tiempob98Div.classList.remove('oculto');
        } else {
            costosb98Div.classList.add('oculto');
            tiempob98Div.classList.add('oculto');
        }
    });

    document.getElementById('almohadillas').addEventListener('change', function() {
        const costosb99Div = document.getElementById('costosb99a');
        const tiempob99Div = document.getElementById('tiempob99a');

        if (this.value === 'si') {
            costosb99Div.classList.remove('oculto');
            tiempob99Div.classList.remove('oculto');
        } else {
            costosb99Div.classList.add('oculto');
            tiempob99Div.classList.add('oculto');
        }
    });

    document.getElementById('cintamicro').addEventListener('change', function() {
        const costosb100Div = document.getElementById('costosb100a');
        const tiempob100Div = document.getElementById('tiempob100a');

        if (this.value === 'si') {
            costosb100Div.classList.remove('oculto');
            tiempob100Div.classList.remove('oculto');
        } else {
            costosb100Div.classList.add('oculto');
            tiempob100Div.classList.add('oculto');
        }
    });

    document.getElementById('bastoncillos').addEventListener('change', function() {
        const costosb101Div = document.getElementById('costosb101a');
        const tiempob101Div = document.getElementById('tiempob101a');

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
    const criterioh6Div = document.getElementById('criterioh6a');
    const rangoh6Div = document.getElementById('rangoh6a');
    const costoh6Div = document.getElementById('costoh6a');

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
    const criteriom6Div = document.getElementById('criteriom6a');
    const rangom6Div = document.getElementById('rangom6a');
    const costom6Div = document.getElementById('costom6a');

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
        const costosb102Div = document.getElementById('costosb102a');
        const tiempob102Div = document.getElementById('tiempob102a');

        if (this.value === 'si') {
            costosb102Div.classList.remove('oculto');
            tiempob102Div.classList.remove('oculto');
        } else {
            costosb102Div.classList.add('oculto');
            tiempob102Div.classList.add('oculto');
        }
    });

    document.getElementById('plancha1').addEventListener('change', function() {
        const costosb103Div = document.getElementById('costosb103a');
        const tiempob103Div = document.getElementById('tiempob103a');

        if (this.value === 'si') {
            costosb103Div.classList.remove('oculto');
            tiempob103Div.classList.remove('oculto');
        } else {
            costosb103Div.classList.add('oculto');
            tiempob103Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillored2').addEventListener('change', function() {
        const costosb104Div = document.getElementById('costosb104a');
        const tiempob104Div = document.getElementById('tiempob104a');

        if (this.value === 'si') {
            costosb104Div.classList.remove('oculto');
            tiempob104Div.classList.remove('oculto');
        } else {
            costosb104Div.classList.add('oculto');
            tiempob104Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloter2').addEventListener('change', function() {
        const costosb105Div = document.getElementById('costosb105a');
        const tiempob105Div = document.getElementById('tiempob105a');

        if (this.value === 'si') {
            costosb105Div.classList.remove('oculto');
            tiempob105Div.classList.remove('oculto');
        } else {
            costosb105Div.classList.add('oculto');
            tiempob105Div.classList.add('oculto');
        }
    });

    document.getElementById('cepillonylon2').addEventListener('change', function() {
        const costosb106Div = document.getElementById('costosb106a');
        const tiempob106Div = document.getElementById('tiempob106a');

        if (this.value === 'si') {
            costosb106Div.classList.remove('oculto');
            tiempob106Div.classList.remove('oculto');
        } else {
            costosb106Div.classList.add('oculto');
            tiempob106Div.classList.add('oculto');
        }
    });

    document.getElementById('cepilloova2').addEventListener('change', function() {
        const costosb107Div = document.getElementById('costosb107a');
        const tiempob107Div = document.getElementById('tiempob107a');

        if (this.value === 'si') {
            costosb107Div.classList.remove('oculto');
            tiempob107Div.classList.remove('oculto');
        } else {
            costosb107Div.classList.add('oculto');
            tiempob107Div.classList.add('oculto');
        }
    });

    document.getElementById('peinepuas').addEventListener('change', function() {
        const costosb108Div = document.getElementById('costosb108a');
        const tiempob108Div = document.getElementById('tiempob108a');

        if (this.value === 'si') {
            costosb108Div.classList.remove('oculto');
            tiempob108Div.classList.remove('oculto');
        } else {
            costosb108Div.classList.add('oculto');
            tiempob108Div.classList.add('oculto');
        }
    });  
    
    document.getElementById('tenazas').addEventListener('change', function() {
        const costosb109Div = document.getElementById('costosb109a');
        const tiempob109Div = document.getElementById('tiempob109a');

        if (this.value === 'si') {
            costosb109Div.classList.remove('oculto');
            tiempob109Div.classList.remove('oculto');
        } else {
            costosb109Div.classList.add('oculto');
            tiempob109Div.classList.add('oculto');
        }
    });  

    document.getElementById('horquillas').addEventListener('change', function() {
        const costosb110Div = document.getElementById('costosb110a');
        const tiempob110Div = document.getElementById('tiempob110a');

        if (this.value === 'si') {
            costosb110Div.classList.remove('oculto');
            tiempob110Div.classList.remove('oculto');
        } else {
            costosb110Div.classList.add('oculto');
            tiempob110Div.classList.add('oculto');
        }
    });

    document.getElementById('rizador2').addEventListener('change', function() {
        const costosb111Div = document.getElementById('costosb111a');
        const tiempob111Div = document.getElementById('tiempob111a');

        if (this.value === 'si') {
            costosb111Div.classList.remove('oculto');
            tiempob111Div.classList.remove('oculto');
        } else {
            costosb111Div.classList.add('oculto');
            tiempob111Div.classList.add('oculto');
        }
    });

    document.getElementById('spray').addEventListener('change', function() {
        const costosb112Div = document.getElementById('costosb112a');
        const tiempob112Div = document.getElementById('tiempob112a');

        if (this.value === 'si') {
            costosb112Div.classList.remove('oculto');
            tiempob112Div.classList.remove('oculto');
        } else {
            costosb112Div.classList.add('oculto');
            tiempob112Div.classList.add('oculto');
        }
    });

    document.getElementById('mousse').addEventListener('change', function() {
        const costosb113Div = document.getElementById('costosb113a');
        const tiempob113Div = document.getElementById('tiempob113a');

        if (this.value === 'si') {
            costosb113Div.classList.remove('oculto');
            tiempob113Div.classList.remove('oculto');
        } else {
            costosb113Div.classList.add('oculto');
            tiempob113Div.classList.add('oculto');
        }
    });

    document.getElementById('serum').addEventListener('change', function() {
        const costosb114Div = document.getElementById('costosb114a');
        const tiempob114Div = document.getElementById('tiempob114a');

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
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        event.preventDefault();
        // Obtén los valores de los campos específicos de belleza
        const corteCabello = document.getElementById('cabello').value;
        const tijerasMicrodentado = document.getElementById('tijeras1').value;
        const costost1 = document.getElementById('costost1').value;
        const tiempot1 = document.getElementById('tiempot1').value;
        const tijeras2 = document.getElementById('tijeras2').value;
        const costost2 = document.getElementById('costost2').value;
        const tiempot2 = document.getElementById('tiempot2').value;
        const tijeras3 = document.getElementById('tijeras3').value;
        const costost3 = document.getElementById('costost3').value;
        const tiempot3 = document.getElementById('tiempot3').value;
        const tijeras4 = document.getElementById('tijeras4').value;
        const costost4 = document.getElementById('costost4').value;
        const tiempot4 = document.getElementById('tiempot4').value;
        const capa = document.getElementById('capa').value;
        const costosc = document.getElementById('costosc').value;
        const tiempoc = document.getElementById('tiempoc').value;
        const cepillo1 = document.getElementById('cepillo1').value;
        const costosc1 = document.getElementById('costosc1').value;   
        const tiempoc1 = document.getElementById('tiempoc1').value;
        const cepillo2 = document.getElementById('cepillo2').value;
        const costosc2 = document.getElementById('costosc2').value;
        const tiempoc2 = document.getElementById('tiempoc2').value;
        const cepillo3 = document.getElementById('cepillo3').value;
        const costosc3 = document.getElementById('costosc3').value;
        const tiempoc3 = document.getElementById('tiempoc3').value;
        const cepillo4 = document.getElementById('cepillo4').value;
        const costosc4 = document.getElementById('costosc4').value;
        const tiempoc4 = document.getElementById('tiempoc4').value;
        const cepillo5 = document.getElementById('cepillo5').value;
        const costosc5 = document.getElementById('costosc5').value;
        const tiempoc5 = document.getElementById('tiempoc5').value;
        const pinzas = document.getElementById('pinzas').value;
        const costosp = document.getElementById('costosp').value;
        const tiempop = document.getElementById('tiempop').value;
        const secadora = document.getElementById('secadora').value;
        const costoss = document.getElementById('costoss').value;
        const tiempos = document.getElementById('tiempos').value;
        const plancha = document.getElementById('plancha').value;
        const costosp1 = document.getElementById('costosp1').value; 
        const tiempop1 = document.getElementById('tiempop1').value;
        const shampoo = document.getElementById('shampoo').value;
        const costoss1 = document.getElementById('costoss1').value;
        const tiempos1 = document.getElementById('tiempos1').value;
        const acondicionador = document.getElementById('acondicionador').value;
        const costosa = document.getElementById('costosa').value;
        const tiempoa = document.getElementById('tiempoa').value;
        const mascarilla = document.getElementById('mascarilla').value;
        const costosm = document.getElementById('costosm').value;
        const tiempom = document.getElementById('tiempom').value;
        const fijador = document.getElementById('fijador').value;
        const costosf = document.getElementById('costosf').value;
        const tiempof = document.getElementById('tiempof').value;
        const hom = document.getElementById('hom').value;
        const hombre1 = document.getElementById('hombre1').value;
        const criterio = document.getElementById('criterio').value;
        const rango = document.getElementById('rango').value;
        const costoh = document.getElementById('costoh').value;
        const mujer1 = document.getElementById('mujer1').value;
        const criteriom = document.getElementById('criteriom').value;
        const rangom = document.getElementById('rangom').value;
        const costom = document.getElementById('costom').value;
        const uñas = document.getElementById('uñas').value;
        const cortauñas = document.getElementById('cortauñas').value;
        const costosx1 = document.getElementById('costosx1').value;
        const tiempox1 = document.getElementById('tiempox1').value;
        const limapapel = document.getElementById('limapapel').value;
        const costosx2 = document.getElementById('costosx2').value;
        const tiempox2 = document.getElementById('tiempox2').value;
        const limametal = document.getElementById('limametal').value;
        const costosx3 = document.getElementById('costosx3').value;
        const tiempox3 = document.getElementById('tiempox3').value;
        const pulidor = document.getElementById('pulidor').value;
        const costosx4 = document.getElementById('costosx4').value;
        const tiempox4 = document.getElementById('tiempox4').value;
        const cuticulas = document.getElementById('cuticulas').value;
        const costosx5 = document.getElementById('costosx5').value;
        const tiempox5 = document.getElementById('tiempox5').value;
        const cepillouñas = document.getElementById('cepillouñas').value;
        const costosx6 = document.getElementById('costosx6').value;
        const tiempox6 = document.getElementById('tiempox6').value;
        const alicate = document.getElementById('alicate').value;
        const costosx7 = document.getElementById('costosx7').value;
        const tiempox7 = document.getElementById('tiempox7').value;
        const palitos = document.getElementById('palitos').value;
        const costosx8 = document.getElementById('costosx8').value;
        const tiempox8 = document.getElementById('tiempox8').value;
        const pinzauñas = document.getElementById('pinzasuñas').value;
        const costosx9 = document.getElementById('costosx9').value;
        const tiempox9 = document.getElementById('tiempox9').value;
        const pincelesnail = document.getElementById('pincelesnail').value;
        const costosx10 = document.getElementById('costosx10').value;
        const tiempox10 = document.getElementById('tiempox10').value;
        const lamparaLED = document.getElementById('lamparaLED').value;
        const costosx11 = document.getElementById('costosx11').value;
        const tiempox11 = document.getElementById('tiempox11').value;
        const monomero = document.getElementById('monomero').value;
        const costosx12 = document.getElementById('costosx12').value;
        const tiempox12 = document.getElementById('tiempox12').value;
        const esmaltes = document.getElementById('esmaltes').value;
        const costoMinimo = document.getElementById('costoMinimo').value;
        const costoMaximo = document.getElementById('costoMaximo').value;
        const tiempox13 = document.getElementById('tiempox13').value;
        const topcoat = document.getElementById('topcoat').value;
        const costosx14 = document.getElementById('costosx14').value;
        const tiempox14 = document.getElementById('tiempox14').value;
        const removedor = document.getElementById('removedor').value;
        const costosx15 = document.getElementById('costosx15').value;
        const tiempox15 = document.getElementById('tiempox15').value;
        const algodon = document.getElementById('algodon').value;
        const costosx16 = document.getElementById('costosx16').value;
        const tiempox16 = document.getElementById('tiempox16').value;
        const toallitas2 = document.getElementById('toallitas2').value;
        const costosx17 = document.getElementById('costosx17').value;
        const tiempox17 = document.getElementById('tiempox17').value;
        const pedicure = document.getElementById('pedicure').value;
        const cortauñas2 = document.getElementById('cortauñas2').value;
        const costosb1 = document.getElementById('costosb1').value;
        const tiempob1 = document.getElementById('tiempob1').value;
        const empujador = document.getElementById('empujador').value;
        const costosb2 = document.getElementById('costosb2').value;
        const tiempob2 = document.getElementById('tiempob2').value;
        const alicate2 = document.getElementById('alicate2').value;
        const costosb3 = document.getElementById('costosb3').value;
        const tiempob3 = document.getElementById('tiempob3').value;
        const limap = document.getElementById('limap').value;
        const costosb4 = document.getElementById('costosb4').value;
        const tiempob4 = document.getElementById('tiempob4').value;
        const piedra = document.getElementById('piedra').value;
        const costosb5 = document.getElementById('costosb5').value;
        const tiempob5 = document.getElementById('tiempob5').value;
        const limamad = document.getElementById('limamad').value;
        const costosb6 = document.getElementById('costosb6').value;
        const tiempob6 = document.getElementById('tiempob6').value;
        const limavid = document.getElementById('limavid').value;
        const costosb7 = document.getElementById('costosb7').value;
        const tiempob7 = document.getElementById('tiempob7').value;
        const limamet = document.getElementById('limamet').value;
        const costosb8 = document.getElementById('costosb8').value;
        const tiempob8 = document.getElementById('tiempob8').value;
        const cepillou = document.getElementById('cepillou').value;
        const costosb9 = document.getElementById('costosb9').value;
        const tiempob9 = document.getElementById('tiempob9').value;
        const separador = document.getElementById('separador').value;
        const costosb10 = document.getElementById('costosb10').value;
        const tiempob10 = document.getElementById('tiempob10').value;
        const palomad = document.getElementById('palomad').value;
        const costosb11 = document.getElementById('costosb11').value;
        const tiempob11 = document.getElementById('tiempob11').value;
        const exfoliante = document.getElementById('exfoliante').value;
        const costosb12 = document.getElementById('costosb12').value;
        const tiempob12 = document.getElementById('tiempob12').value;
        const cremahid = document.getElementById('cremahid').value;
        const costosb13 = document.getElementById('costosb13').value;
        const tiempob13 = document.getElementById('tiempob13').value;
        const esmalte = document.getElementById('esmalte').value;
        const costosb14 = document.getElementById('costosb14').value;
        const tiempob14 = document.getElementById('tiempob14').value;
        const suero = document.getElementById('suero').value;
        const costosb15 = document.getElementById('costosb15').value;
        const tiempob15 = document.getElementById('tiempob15').value;
        const toallas = document.getElementById('toallas').value;
        const costosb16 = document.getElementById('costosb16').value;
        const tiempob16 = document.getElementById('tiempob16').value;
        const acetona = document.getElementById('acetona').value;
        const costosb17 = document.getElementById('costosb17').value;
        const tiempob17 = document.getElementById('tiempob17').value;
        const locion = document.getElementById('locion').value;
        const costosb18 = document.getElementById('costosb18').value;
        const tiempob18 = document.getElementById('tiempob18').value;
        const esmaltes2 = document.getElementById('esmaltes2').value;
        const cantidadDesde = document.getElementById('cantidadDesde').value;
        const cantidadHasta = document.getElementById('cantidadHasta').value;
        //const costosb19 = document.getElementById('costosb19').value;
        const cantidadb19 = document.getElementById('cantidadb19').value;
        const tiempob19 = document.getElementById('tiempob19').value;
        const diseño = document.getElementById('diseño').value;
        const cantidadDesde1 = document.getElementById('cantidadDesde1').value;
        const cantidadHasta1 = document.getElementById('cantidadHasta1').value;
        //const costosb20 = document.getElementById('costosb20').value;
        const tiempob20 = document.getElementById('tiempob20').value;
        const hom1 = document.getElementById('hom1').value;
        const hombre2 = document.getElementById('hombre2').value;
        const criterioh1 = document.getElementById('criterioh1').value;
        const rangoh1 = document.getElementById('rangoh1').value;
        const costoh1 = document.getElementById('costoh1').value;
        const mujer2 = document.getElementById('mujer2').value;
        const criteriom1 = document.getElementById('criteriom1').value;
        const rangom1 = document.getElementById('rangom1').value;
        const costom1 = document.getElementById('costom1').value;
        const tinte = document.getElementById('tinte').value;
        const pinzastin = document.getElementById('pinzastin').value;
        const costosb21 = document.getElementById('costosb21').value;
        const tiempob21 = document.getElementById('tiempob21').value;
        const tazon = document.getElementById('tazon').value;
        const costosb22 = document.getElementById('costosb22').value;
        const tiempob22 = document.getElementById('tiempob22').value;
        const cepillomez = document.getElementById('cepillomez').value;
        const costosb23 = document.getElementById('costosb23').value;
        const tiempob23 = document.getElementById('tiempob23').value;
        const gorros = document.getElementById('gorros').value;
        const costosb24 = document.getElementById('costosb24').value;
        const tiempob24 = document.getElementById('tiempob24').value;
        const peine = document.getElementById('peine').value;
        const costosb25 = document.getElementById('costosb25').value;
        const tiempob25 = document.getElementById('tiempob25').value;
        const cepillored = document.getElementById('cepillored').value;
        const costosb26 = document.getElementById('costosb26').value;
        const tiempob26 = document.getElementById('tiempob26').value;
        const cepilloter = document.getElementById('cepilloter').value;
        const costosb27 = document.getElementById('costosb27').value;
        const tiempob27 = document.getElementById('tiempob27').value;
        const cepillonylon = document.getElementById('cepillonylon').value;
        const costosb28 = document.getElementById('costosb28').value;
        const tiempob28 = document.getElementById('tiempob28').value;
        const cepilloova = document.getElementById('cepilloova').value;
        const costosb29 = document.getElementById('costosb29').value;
        const tiempob29 = document.getElementById('tiempob29').value;
        const aluminio = document.getElementById('aluminio').value;
        const costosb30 = document.getElementById('costosb30').value;
        const tiempob30 = document.getElementById('tiempob30').value;
        const tintes = document.getElementById('tintes').value;
        const cantidadDesde2 = document.getElementById('cantidadDesde2').value;
        const cantidadHasta2 = document.getElementById('cantidadHasta2').value;
        //const costosb31 = document.getElementById('costosb31').value;
        const cantidadb31 = document.getElementById('cantidadb31').value;
        const tiempob31 = document.getElementById('tiempob31').value;
        const decolorante = document.getElementById('decolorante').value;
        const costosb32 = document.getElementById('costosb32').value;
        const tiempob32 = document.getElementById('tiempob32').value;
        const locionact = document.getElementById('locionact').value;
        const costosb33 = document.getElementById('costosb33').value;
        const tiempob33 = document.getElementById('tiempob33').value;
        const mascarillac = document.getElementById('mascarillac').value;
        const costosb34 = document.getElementById('costosb34').value;
        const tiempob34 = document.getElementById('tiempob34').value;
        const cremaacond = document.getElementById('cremaacond').value;
        const costosb35 = document.getElementById('costosb35').value;
        const tiempob35 = document.getElementById('tiempob35').value;
        const hom2 = document.getElementById('hom2').value;
        const hombre3 = document.getElementById('hombre3').value;
        const criterioh2 = document.getElementById('criterioh2').value;
        const rangoh2 = document.getElementById('rangoh2').value;
        const costoh2 = document.getElementById('costoh2').value;
        const mujer3 = document.getElementById('mujer3').value;
        const criteriom2 = document.getElementById('criteriom2').value;
        const rangom2 = document.getElementById('rangom2').value;
        const costom2 = document.getElementById('costom2').value;
        const extensiones = document.getElementById('extensiones').value;
        const extensiones1  = document.getElementById('extensiones1').value;
        const costosb136 = document.getElementById('costosb136').value;
        const tiempob136 = document.getElementById('tiempob136').value;
        const costosb36 = document.getElementById('costosb36').value;
        const extensiones2  = document.getElementById('extensiones2').value;
        const costosb137 = document.getElementById('costosb137').value;
        const tiempob137 = document.getElementById('tiempob137').value;
        const costosb237 = document.getElementById('costosb237').value;
        const tiempob237 = document.getElementById('tiempob237').value;
        const costosb37 = document.getElementById('costosb37').value;
        const extensiones3  = document.getElementById('extensiones3').value;
        const costosb138 = document.getElementById('costosb138').value;
        const tiempob138 = document.getElementById('tiempob138').value;
        const costosb238 = document.getElementById('costosb238').value;
        const tiempob238 = document.getElementById('tiempob238').value;
        const costosb338 = document.getElementById('costosb338').value;
        const tiempob338 = document.getElementById('tiempob338').value;
        const costosb38 = document.getElementById('costosb38').value;
        const extensiones4 = document.getElementById('extensiones4').value;
        const costosb139 = document.getElementById('costosb139').value;
        const tiempob139 = document.getElementById('tiempob139').value;
        const costosb239 = document.getElementById('costosb239').value;
        const tiempob239 = document.getElementById('tiempob239').value;
        const costosb339 = document.getElementById('costosb339').value;
        const cantidadb339 = document.getElementById('cantidadb339').value;
        const tiempob339 = document.getElementById('tiempob339').value;
        const costosb39 = document.getElementById('costosb39').value;
        const pinzas2 = document.getElementById('pinzas2').value;
        const costosb40 = document.getElementById('costosb40').value;
        const tiempob40 = document.getElementById('tiempob40').value;
        const peine1 = document.getElementById('peine1').value;
        const costosb41 = document.getElementById('costosb41').value;
        const tiempob41 = document.getElementById('tiempob41').value;
        const cepillored1 = document.getElementById('cepillored1').value;
        const costosb42 = document.getElementById('costosb42').value;
        const tiempob42 = document.getElementById('tiempob42').value;
        const cepilloter1 = document.getElementById('cepilloter1').value;
        const costosb43 = document.getElementById('costosb43').value;
        const tiempob43 = document.getElementById('tiempob43').value;
        const cepillonylon1 = document.getElementById('cepillonylon1').value;
        const costosb44 = document.getElementById('costosb44').value;
        const tiempob44 = document.getElementById('tiempob44').value;
        const cepilloova1 = document.getElementById('cepilloova1').value;
        const costosb45 = document.getElementById('costosb45').value;
        const tiempob45 = document.getElementById('tiempob45').value;
        const tijeras5 = document.getElementById('tijeras5').value;
        const costosb46 = document.getElementById('costosb46').value;
        const tiempob46 = document.getElementById('tiempob46').value;
        const removedorext = document.getElementById('removedorext').value;
        const costosb47 = document.getElementById('costosb47').value;
        const tiempob47 = document.getElementById('tiempob47').value;
        const rizador = document.getElementById('rizador').value;
        const costosb48 = document.getElementById('costosb48').value;
        const tiempob48 = document.getElementById('tiempob48').value;
        const mascarillacab = document.getElementById('mascarillacab').value;
        const costosb49 = document.getElementById('costosb49').value;
        const tiempob49 = document.getElementById('tiempob49').value;
        const acondicionador1 = document.getElementById('acondicionador1').value;
        const costosb50 = document.getElementById('costosb50').value;
        const tiempob50 = document.getElementById('tiempob50').value;
        const shampoo1 = document.getElementById('shampoo1').value;
        const costosb51 = document.getElementById('costosb51').value;
        const tiempob51 = document.getElementById('tiempob51').value;
        const hom3 = document.getElementById('hom3').value;
        const hombre4 = document.getElementById('hombre4').value;
        const criterioh3 = document.getElementById('criterioh3').value;
        const rangoh3 = document.getElementById('rangoh3').value;
        const costoh3 = document.getElementById('costoh3').value;
        const mujer4 = document.getElementById('mujer4').value;
        const criteriom3 = document.getElementById('criteriom3').value;
        const rangom3 = document.getElementById('rangom3').value;
        const costom3 = document.getElementById('costom3').value;
        const depilacion = document.getElementById('depilacion').value;
        const gafas = document.getElementById('gafas').value;
        const costosb52 = document.getElementById('costosb52').value;
        const tiempob52 = document.getElementById('tiempob52').value;
        const laser = document.getElementById('laser').value;
        const costosb53 = document.getElementById('costosb53').value;
        const tiempob53 = document.getElementById('tiempob53').value;
        const gel = document.getElementById('gel').value;
        const costosb54 = document.getElementById('costosb54').value;
        const tiempob54 = document.getElementById('tiempob54').value;
        const gelanes = document.getElementById('gelanes').value;
        const costosb55 = document.getElementById('costosb55').value;
        const tiempob55 = document.getElementById('tiempob55').value;
        const toallaslim = document.getElementById('toallaslim').value;
        const costosb56 = document.getElementById('costosb56').value;
        const tiempob56 = document.getElementById('tiempob56').value;
        const compresas = document.getElementById('compresas').value;
        const costosb57 = document.getElementById('costosb57').value;
        const tiempob57 = document.getElementById('tiempob57').value;
        const piernas = document.getElementById('piernas').value;
        const costosb58 = document.getElementById('costosb58').value;
        const axilas = document.getElementById('axilas').value;
        const costosb59 = document.getElementById('costosb59').value;
        const bikini = document.getElementById('bikini').value;
        const costosb60 = document.getElementById('costosb60').value;
        const zonai = document.getElementById('zonai').value;
        const costosb61 = document.getElementById('costosb61').value;
        const espalda = document.getElementById('espalda').value;
        const costosb62 = document.getElementById('costosb62').value;
        const pecho = document.getElementById('pecho').value;
        const costosb63 = document.getElementById('costosb63').value;
        const brazos = document.getElementById('brazos').value;
        const costosb64 = document.getElementById('costosb64').value;
        const entrecejo = document.getElementById('entrecejo').value;
        const costosb65 = document.getElementById('costosb65').value;
        const labio = document.getElementById('labio').value;
        const costosb66 = document.getElementById('costosb66').value;
        const barbilla = document.getElementById('barbilla').value;
        const costosb67 = document.getElementById('costosb67').value;
        const patilla = document.getElementById('patilla').value;
        const costosb68 = document.getElementById('costosb68').value;
        const hom4 = document.getElementById('hom4').value;
        const hombre5 = document.getElementById('hombre5').value;
        const criterioh4 = document.getElementById('criterioh4').value;
        const rangoh4 = document.getElementById('rangoh4').value;
        const costoh4 = document.getElementById('costoh4').value;
        const mujer5 = document.getElementById('mujer5').value;
        const criteriom4 = document.getElementById('criteriom4').value;
        const rangom4 = document.getElementById('rangom4').value;
        const costom4 = document.getElementById('costom4').value;
        const masaje = document.getElementById('masaje').value;
        const aceite = document.getElementById('aceite').value;
        const costosb69 = document.getElementById('costosb69').value;
        const tiempob69 = document.getElementById('tiempob69').value;
        const guante = document.getElementById('guante').value;
        const costosb70 = document.getElementById('costosb70').value;
        const tiempob70 = document.getElementById('tiempob70').value;
        const rodillo = document.getElementById('rodillo').value;
        const costosb71 = document.getElementById('costosb71').value;
        const tiempob71 = document.getElementById('tiempob71').value;
        const ventosa = document.getElementById('ventosa').value;
        const costosb72 = document.getElementById('costosb72').value;
        const tiempob72 = document.getElementById('tiempob72').value;
        const cavitador = document.getElementById('cavitador').value;
        const costosb73 = document.getElementById('costosb73').value;
        const tiempob73 = document.getElementById('tiempob73').value;
        const gel1 = document.getElementById('gel1').value;
        const costosb74 = document.getElementById('costosb74').value;
        const tiempob74 = document.getElementById('tiempob74').value;
        const lampara = document.getElementById('lampara').value;
        const costosb75 = document.getElementById('costosb75').value;
        const tiempob75 = document.getElementById('tiempob75').value;
        const termometro = document.getElementById('termometro').value;
        const costosb76 = document.getElementById('costosb76').value;
        const tiempob76 = document.getElementById('tiempob76').value;
        const masajeador1 = document.getElementById('masajeador1').value;
        const costosb77 = document.getElementById('costosb77').value;
        const tiempob77 = document.getElementById('tiempob77').value;
        const masajeador2 = document.getElementById('masajeador2').value;
        const costosb78 = document.getElementById('costosb78').value;
        const tiempob78 = document.getElementById('tiempob78').value;
        const abdomen = document.getElementById('abdomen').value;
        const costosb79 = document.getElementById('costosb79').value;
        const gluteos = document.getElementById('gluteos').value;
        const costosb80 = document.getElementById('costosb80').value;
        const cintura = document.getElementById('cintura').value;
        const costosb81 = document.getElementById('costosb81').value;
        const caderas = document.getElementById('caderas').value;
        const costosb82 = document.getElementById('costosb82').value;
        const muslos = document.getElementById('muslos').value;
        const costosb83 = document.getElementById('costosb83').value;
        const brazos1 = document.getElementById('brazos1').value;
        const costosb84 = document.getElementById('costosb84').value;
        const espalda1 = document.getElementById('espalda1').value;
        const costosb85 = document.getElementById('costosb85').value;
        const pantorrillas = document.getElementById('pantorrillas').value;
        const costosb86 = document.getElementById('costosb86').value;
        const hom5 = document.getElementById('hom5').value;
        const hombre6 = document.getElementById('hombre6').value;
        const criterioh5 = document.getElementById('criterioh5').value;
        const rangoh5 = document.getElementById('rangoh5').value;
        const costoh5 = document.getElementById('costoh5').value;
        const mujer6 = document.getElementById('mujer6').value;
        const criteriom5 = document.getElementById('criteriom5').value;
        const rangom5 = document.getElementById('rangom5').value;
        const costom5 = document.getElementById('costom5').value;
        const pestañas = document.getElementById('pestañas').value;
        const pinzasext = document.getElementById('pinzasext').value;
        const costosb87 = document.getElementById('costosb87').value;
        const tiempob87 = document.getElementById('tiempob87').value;
        const parches = document.getElementById('parches').value;
        const costosb88 = document.getElementById('costosb88').value;
        const tiempob88 = document.getElementById('tiempob88').value;
        const anillos = document.getElementById('anillos').value;
        const costosb89 = document.getElementById('costosb89').value;
        const tiempob89 = document.getElementById('tiempob89').value;
        const pegamento = document.getElementById('pegamento').value;
        const costosb90 = document.getElementById('costosb90').value;
        const tiempob90 = document.getElementById('tiempob90').value;
        const extensionespes = document.getElementById('extensionespes').value;
        const costosb91 = document.getElementById('costosb91').value;
        const tiempob91 = document.getElementById('tiempob91').value;
        const removedorpeg = document.getElementById('removedorpeg').value;
        const costosb92 = document.getElementById('costosb92').value;
        const tiempob92 = document.getElementById('tiempob92').value;
        const toallitas = document.getElementById('toallitas').value;
        const costosb93 = document.getElementById('costosb93').value;
        const tiempob93 = document.getElementById('tiempob93').value;
        const cepillopes = document.getElementById('cepillopes').value;
        const costosb94 = document.getElementById('costosb94').value;
        const tiempob94 = document.getElementById('tiempob94').value;
        const aplicadores  = document.getElementById('aplicadores').value;
        const costosb95 = document.getElementById('costosb95').value;
        const tiempob95 = document.getElementById('tiempob95').value;
        const lamparaluz = document.getElementById('lamparaluz').value;
        const costosb96 = document.getElementById('costosb96').value;
        const tiempob96 = document.getElementById('tiempob96').value;
        const espejo = document.getElementById('espejo').value;
        const costosb97 = document.getElementById('costosb97').value;
        const tiempob97 = document.getElementById('tiempob97').value;
        const secador = document.getElementById('secador').value;
        const costosb98 = document.getElementById('costosb98').value;
        const tiempob98 = document.getElementById('tiempob98').value;
        const almohadillas = document.getElementById('almohadillas').value;
        const costosb99 = document.getElementById('costosb99').value;
        const tiempob99 = document.getElementById('tiempob99').value;
        const cintamicro = document.getElementById('cintamicro').value;
        const costosb100 = document.getElementById('costosb100').value;
        const tiempob100 = document.getElementById('tiempob100').value;
        const bastoncillos = document.getElementById('bastoncillos').value;
        const costosb101 = document.getElementById('costosb101').value;
        const tiempob101 = document.getElementById('tiempob101').value;
        const hom6 = document.getElementById('hom6').value;
        const hombre7 = document.getElementById('hombre7').value;
        const criterioh6 = document.getElementById('criterioh6').value;
        const rangoh6 = document.getElementById('rangoh6').value;
        const costoh6 = document.getElementById('costoh6').value;
        const mujer7 = document.getElementById('mujer7').value;
        const criteriom6 = document.getElementById('criteriom6').value;
        const rangom6 = document.getElementById('rangom6').value;
        const costom6 = document.getElementById('costom6').value;
        const peinados = document.getElementById('peinados').value;
        const secadorpelo = document.getElementById('secadorpelo').value;
        const costosb102 = document.getElementById('costosb102').value;
        const tiempob102 = document.getElementById('tiempob102').value;
        const plancha1 = document.getElementById('plancha1').value;
        const costosb103 = document.getElementById('costosb103').value;
        const tiempob103 = document.getElementById('tiempob103').value;
        const cepillored2 = document.getElementById('cepillored2').value;
        const costosb104 = document.getElementById('costosb104').value;
        const tiempob104 = document.getElementById('tiempob104').value;
        const cepilloter2 = document.getElementById('cepilloter2').value;
        const costosb105 = document.getElementById('costosb105').value;
        const tiempob105 = document.getElementById('tiempob105').value;
        const cepillonylon2 = document.getElementById('cepillonylon2').value;
        const costosb106 = document.getElementById('costosb106').value;
        const tiempob106 = document.getElementById('tiempob106').value;
        const cepilloova2 = document.getElementById('cepilloova2').value;
        const costosb107 = document.getElementById('costosb107').value;
        const tiempob107 = document.getElementById('tiempob107').value;
        const peinepuas = document.getElementById('peinepuas').value;
        const costosb108 = document.getElementById('costosb108').value;
        const tiempob108 = document.getElementById('tiempob108').value;
        const tenazas = document.getElementById('tenazas').value;
        const costosb109 = document.getElementById('costosb109').value;
        const tiempob109 = document.getElementById('tiempob109').value;
        const horquillas = document.getElementById('horquillas').value;
        const costosb110 = document.getElementById('costosb110').value;
        const tiempob110 = document.getElementById('tiempob110').value;
        const rizador2 = document.getElementById('rizador2').value;
        const costosb111 = document.getElementById('costosb111').value;
        const tiempob111 = document.getElementById('tiempob111').value;
        const spray = document.getElementById('spray').value;
        const costosb112 = document.getElementById('costosb112').value;
        const tiempob112 = document.getElementById('tiempob112').value;
        const mousse = document.getElementById('mousse').value;
        const costosb113 = document.getElementById('costosb113').value;
        const tiempob113 = document.getElementById('tiempob113').value;
        const serum = document.getElementById('serum').value;
        const costosb114 = document.getElementById('costosb114').value;
        const tiempob114 = document.getElementById('tiempob114').value;

        // Agrega más variables según sea necesario

        // Llama a la función específica de belleza para enviar estos datos
        enviarProductoHojaCalculoBelleza(corteCabello, tijerasMicrodentado, costost1, tiempot1, tijeras2, costost2, tiempot2, tijeras3, costost3, tiempot3, tijeras4, costost4, tiempot4, capa, costosc, tiempoc, cepillo1, costosc1, tiempoc1, cepillo2, costosc2, tiempoc2, cepillo3, costosc3, tiempoc3, cepillo4, costosc4, tiempoc4, cepillo5, costosc5, tiempoc5, pinzas, costosp, tiempop, secadora, costoss, tiempos, plancha, costosp1, tiempop1, shampoo, costoss1, tiempos1, acondicionador, costosa, tiempoa, mascarilla, costosm, tiempom, fijador, costosf, tiempof, hom, hombre1, criterio, rango, costoh, mujer1, criteriom, rangom, costom, uñas, cortauñas, costosx1, tiempox1, limapapel, costosx2, tiempox2, limametal, costosx3, tiempox3, pulidor, costosx4, tiempox4, cuticulas, costosx5, tiempox5, cepillouñas, costosx6, tiempox6, alicate, costosx7, tiempox7, palitos, costosx8, tiempox8, pinzauñas, costosx9, tiempox9, pincelesnail, costosx10, tiempox10, lamparaLED, costosx11, tiempox11, monomero, costosx12, tiempox12, esmaltes, costoMinimo, costoMaximo, tiempox13, topcoat, costosx14, tiempox14, removedor, costosx15, tiempox15, algodon, costosx16, tiempox16, toallitas2, costosx17,  tiempox17, pedicure, cortauñas2, costosb1, tiempob1,  empujador, costosb2, tiempob2, alicate2,  costosb3, tiempob3, limap, costosb4, tiempob4, piedra, costosb5, tiempob5, limamad, costosb6, tiempob6, limavid, costosb7, tiempob7, limamet, costosb8, tiempob8, cepillou, costosb9, tiempob9, separador, costosb10, tiempob10, palomad, costosb11, tiempob11, exfoliante, costosb12, tiempob12, cremahid, costosb13, tiempob13, esmalte, costosb14, tiempob14, suero, costosb15, tiempob15, toallas, costosb16, tiempob16, acetona, costosb17, tiempob17, locion, costosb18, tiempob18, esmaltes2, cantidadDesde, cantidadHasta, cantidadb19, tiempob19, diseño, cantidadDesde1, cantidadHasta1, tiempob20, hom1, hombre2, criterioh1, rangoh1, costoh1, mujer2, criteriom1, rangom1, costom1, tinte, pinzastin, costosb21, tiempob21, tazon, costosb22, tiempob22, cepillomez, costosb23, tiempob23, gorros, costosb24, tiempob24, peine, costosb25, tiempob25, cepillored, costosb26, tiempob26, cepilloter, costosb27, tiempob27, cepillonylon, costosb28, tiempob28, cepilloova, costosb29, tiempob29, aluminio, costosb30, tiempob30, tintes, cantidadDesde2, cantidadHasta2, cantidadb31, tiempob31, decolorante, costosb32, tiempob32, locionact, costosb33, tiempob33, mascarillac, costosb34, tiempob34, cremaacond, costosb35, tiempob35, hom2, hombre3, criterioh2, rangoh2, costoh2, mujer3, criteriom2, rangom2, costom2, extensiones, extensiones1, costosb136, tiempob136, tiempob136, costosb36, extensiones2, costosb137, tiempob137, costosb237, tiempob237, costosb37, extensiones3, costosb138, tiempob138, costosb238, tiempob238, costosb338, tiempob338, costosb38, extensiones4, costosb139, tiempob139, costosb239, tiempob239, costosb339, cantidadb339, tiempob339, costosb39, pinzas2, costosb40, tiempob40, peine1, costosb41, tiempob41, cepillored1, costosb42, tiempob42, cepilloter1, costosb43, tiempob43, cepillonylon1, costosb44, tiempob44, cepilloova1, costosb45, tiempob45, tijeras5, costosb46, tiempob46, removedorext, costosb47, tiempob47, rizador, costosb48, tiempob48, mascarillacab, costosb49, tiempob49, acondicionador1, costosb50, tiempob50, shampoo1, costosb51, tiempob51, hom3, hombre4, criterioh3, rangoh3, costoh3, mujer4, criteriom3, rangom3, costom3, depilacion, gafas, costosb52, tiempob52, laser, costosb53, tiempob53, gel, costosb54, tiempob54, gelanes, costosb55, tiempob55, toallaslim, costosb56, tiempob56, compresas, costosb57, tiempob57, piernas, costosb58, axilas, costosb59, bikini, costosb60, zonai, costosb61, espalda, costosb62, pecho, costosb63, brazos, costosb64, entrecejo, costosb65, labio, costosb66, barbilla, costosb67, patilla, costosb68, hom4, hombre5, criterioh4, rangoh4, costoh4, mujer5, criteriom4, rangom4, costom4, masaje, aceite, costosb69, tiempob69, guante, costosb70, tiempob70, rodillo, costosb71, tiempob71, ventosa, costosb72, tiempob72, cavitador, costosb73, tiempob73, gel1, costosb74, tiempob74, lampara, costosb75, tiempob75, termometro, costosb76, tiempob76, masajeador1, costosb77, tiempob77, masajeador2, costosb78, tiempob78, abdomen, costosb79, gluteos, costosb80, cintura, costosb81, caderas, costosb82, muslos, costosb83, brazos1, costosb84, espalda1, costosb85, pantorrillas, costosb86, hom5, hombre6, criterioh5, rangoh5, costoh5, mujer6, criteriom5, rangom5, costom5, pestañas, pinzasext, costosb87, tiempob87, parches, costosb88, tiempob88, anillos, costosb89, tiempob89, pegamento, costosb90, tiempob90, extensionespes, costosb91, tiempob91, removedorpeg, costosb92, tiempob92, toallitas, costosb93, tiempob93, cepillopes, costosb94, tiempob94, aplicadores, costosb95, tiempob95, lamparaluz, costosb96, tiempob96, espejo, costosb97, tiempob97, secador, costosb98, tiempob98, almohadillas, costosb99, tiempob99, cintamicro, costosb100, tiempob100, bastoncillos, costosb101, tiempob101, hom6, hombre7, criterioh6, rangoh6, costoh6, mujer7, criteriom6, rangom6, costom6, peinados, secadorpelo, costosb102, tiempob102, plancha1, costosb103, tiempob103, cepillored2, costosb104, tiempob104, cepilloter2, costosb105, tiempob105, cepillonylon2, costosb106, tiempob106, cepilloova2, costosb107, tiempob107, peinepuas, costosb108, tiempob108, tenazas, costosb109, tiempob109, horquillas, costosb110, tiempob110, rizador2, costosb111, tiempob111, spray, costosb112, tiempob112, mousse, costosb113, tiempob113, serum, costosb114, tiempob114);

        // También llama a la función para enviar datos generales
        //enviarDatosGenerales();
        
        alert("Información de belleza enviada con éxito.");
    });
});

// Función para enviar datos específicos de belleza a la hoja de cálculo
async function enviarProductoHojaCalculoBelleza(corteCabello, tijerasMicrodentado, costost1, tiempot1, tijeras2, costost2, tiempot2, tijeras3, costost3, tiempot3, tijeras4, costost4, tiempot4, capa, costosc, tiempoc, cepillo1, costosc1, tiempoc1, cepillo2, costosc2, tiempoc2, cepillo3, costosc3, tiempoc3, cepillo4, costosc4, tiempoc4, cepillo5, costosc5, tiempoc5, pinzas, costosp, tiempop, secadora, costoss, tiempos, plancha, costosp1, tiempop1, shampoo, costoss1, tiempos1, acondicionador, costosa, tiempoa, mascarilla, costosm, tiempom, fijador, costosf, tiempof, hom, hombre1, criterio, rango, costoh, mujer1, criteriom, rangom, costom, uñas, cortauñas, costosx1, tiempox1, limapapel, costosx2, tiempox2, limametal, costosx3, tiempox3, pulidor, costosx4, tiempox4, cuticulas, costosx5, tiempox5, cepillouñas, costosx6, tiempox6, alicate, costosx7, tiempox7, palitos, costosx8, tiempox8, pinzauñas, costosx9, tiempox9, pincelesnail, costosx10, tiempox10, lamparaLED, costosx11, tiempox11, monomero, costosx12, tiempox12, esmaltes, costoMinimo, costoMaximo, tiempox13, topcoat, costosx14, tiempox14, removedor, costosx15, tiempox15, algodon, costosx16, tiempox16, toallitas2, costosx17,  tiempox17, pedicure, cortauñas2, costosb1, tiempob1, empujador, costosb2, tiempob2, alicate2, costosb3, tiempob3, limap, costosb4, tiempob4, piedra, costosb5, tiempob5, limamad, costosb6, tiempob6, limavid, costosb7, tiempob7, limamet, costosb8, tiempob8, cepillou, costosb9, tiempob9, separador, costosb10, tiempob10, palomad, costosb11, tiempob11, exfoliante, costosb12, tiempob12, cremahid, costosb13, tiempob13, esmalte, costosb14, tiempob14, suero, costosb15, tiempob15, toallas, costosb16, tiempob16, acetona, costosb17, tiempob17, locion, costosb18, tiempob18, esmaltes2, cantidadDesde, cantidadHasta, cantidadb19, tiempob19, diseño, cantidadDesde1, cantidadHasta1, tiempob20, hom1, hombre2, criterioh1, rangoh1, costoh1, mujer2, criteriom1, rangom1, costom1, tinte, pinzastin, costosb21, tiempob21, tazon, costosb22, tiempob22, cepillomez, costosb23, tiempob23, gorros, costosb24, tiempob24, peine, costosb25, tiempob25, cepillored, costosb26, tiempob26, cepilloter, costosb27, tiempob27, cepillonylon, costosb28, tiempob28, cepilloova, costosb29, tiempob29, aluminio, costosb30, tiempob30, tintes, cantidadDesde2, cantidadHasta2, cantidadb31, tiempob31, decolorante, costosb32, tiempob32, locionact, costosb33, tiempob33, mascarillac, costosb34, tiempob34, cremaacond, costosb35, tiempob35, hom2, hombre3, criterioh2, rangoh2, costoh2, mujer3, criteriom2, rangom2, costom2, extensiones, extensiones1, costosb136, tiempob136, tiempob136, costosb36, extensiones2, costosb137, tiempob137, costosb237, tiempob237, costosb37, extensiones3, costosb138, tiempob138, costosb238, tiempob238, costosb338, tiempob338, costosb38, extensiones4, costosb139, tiempob139, costosb239, tiempob239, costosb339, cantidadb339, tiempob339, costosb39, pinzas2, costosb40, tiempob40, peine1, costosb41, tiempob41, cepillored1, costosb42, tiempob42, cepilloter1, costosb43, tiempob43, cepillonylon1, costosb44, tiempob44, cepilloova1, costosb45, tiempob45, tijeras5, costosb46, tiempob46, removedorext, costosb47, tiempob47, rizador, costosb48, tiempob48, mascarillacab, costosb49, tiempob49, acondicionador1, costosb50, tiempob50, shampoo1, costosb51, tiempob51, hom3, hombre4, criterioh3, rangoh3, costoh3, mujer4, criteriom3, rangom3, costom3, depilacion, gafas, costosb52, tiempob52, laser, costosb53, tiempob53, gel, costosb54, tiempob54, gelanes, costosb55, tiempob55, toallaslim, costosb56, tiempob56, compresas, costosb57, tiempob57, piernas, costosb58, axilas, costosb59, bikini, costosb60, zonai, costosb61, espalda, costosb62, pecho, costosb63, brazos, costosb64, entrecejo, costosb65, labio, costosb66, barbilla, costosb67, patilla, costosb68, hom4, hombre5, criterioh4, rangoh4, costoh4, mujer5, criteriom4, rangom4, costom4, masaje, aceite, costosb69, tiempob69, guante, costosb70, tiempob70, rodillo, costosb71, tiempob71, ventosa, costosb72, tiempob72, cavitador, costosb73, tiempob73, gel1, costosb74, tiempob74, lampara, costosb75, tiempob75, termometro, costosb76, tiempob76, masajeador1, costosb77, tiempob77, masajeador2, costosb78, tiempob78, abdomen, costosb79, gluteos, costosb80, cintura, costosb81, caderas, costosb82, muslos, costosb83, brazos1, costosb84, espalda1, costosb85, pantorrillas, costosb86, hom5, hombre6, criterioh5, rangoh5, costoh5, mujer6, criteriom5, rangom5, costom5, pestañas, pinzasext, costosb87, tiempob87, parches, costosb88, tiempob88, anillos, costosb89, tiempob89, pegamento, costosb90, tiempob90, extensionespes, costosb91, tiempob91, removedorpeg, costosb92, tiempob92, toallitas, costosb93, tiempob93, cepillopes, costosb94, tiempob94, aplicadores, costosb95, tiempob95, lamparaluz, costosb96, tiempob96, espejo, costosb97, tiempob97, secador, costosb98, tiempob98, almohadillas, costosb99, tiempob99, cintamicro, costosb100, tiempob100, bastoncillos, costosb101, tiempob101, hom6, hombre7, criterioh6, rangoh6, costoh6, mujer7, criteriom6, rangom6, costom6, peinados, secadorpelo, costosb102, tiempob102, plancha1, costosb103, tiempob103, cepillored2, costosb104, tiempob104, cepilloter2, costosb105, tiempob105, cepillonylon2, costosb106, tiempob106, cepilloova2, costosb107, tiempob107, peinepuas, costosb108, tiempob108, tenazas, costosb109, tiempob109, horquillas, costosb110, tiempob110, rizador2, costosb111, tiempob111, spray, costosb112, tiempob112, mousse, costosb113, tiempob113, serum, costosb114, tiempob114){
    try {
        // Construye la URL de la hoja de cálculo (puedes añadir la pestaña específica si es necesario)
        const respuesta = await fetch("https://sheet.best/api/sheets/d3f7e817-4130-4931-a597-c7638d7e0893/tabs/Belleza", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cabello": corteCabello,
                "tijeras1": tijerasMicrodentado,
                "costost1": costost1,
                "tiempot1": tiempot1,
                "tijeras2": tijeras2,
                "costost2": costost2,
                "tiempot2": tiempot2,
                "tijeras3": tijeras3,
                "costost3": costost3,
                "tiempot3": tiempot3,
                "tijeras4": tijeras4,
                "costost4": costost4,
                "tiempot4": tiempot4,
                "capa": capa,
                "costosc": costosc,
                "tiempoc": tiempoc,
                "cepillo1": cepillo1,
                "costosc1": costosc1,
                "tiempoc1": tiempoc1,
                "cepillo2": cepillo2,
                "costosc2": costosc2,
                "tiempoc2": tiempoc2,
                "cepillo3": cepillo3,
                "costosc3": costosc3,
                "tiempoc3": tiempoc3,
                "cepillo4": cepillo4,
                "costosc4": costosc4,
                "tiempoc4": tiempoc4,
                "cepillo5": cepillo5,
                "costosc5": costosc5,
                "tiempoc5": tiempoc5,
                "pinzas": pinzas,
                "costosp": costosp,
                "tiempop": tiempop,
                "secadora": secadora,
                "costoss": costoss,
                "tiempos": tiempos,
                "plancha": plancha,
                "costosp1": costosp1,
                "tiempop1": tiempop1,
                "shampoo": shampoo,
                "costoss1": costoss1,
                "tiempos1": tiempos1,
                "acondicionador": acondicionador,
                "costosa": costosa,
                "tiempoa": tiempoa,
                "mascarilla": mascarilla,
                "costosm": costosm,
                "tiempom": tiempom,
                "fijador": fijador,
                "costosf": costosf,
                "tiempof": tiempof,
                "hom-selec": hom,
                "hombre1": hombre1,
                "criterio": criterio,
                "rango": rango,
                "costoh": costoh,
                "mujer1": mujer1,
                "criteriom": criteriom,
                "rangom": rangom,
                "costom": costom,
                "uñas": uñas,
                "cortauñas": cortauñas,
                "costosx1": costosx1,
                "tiempox1": tiempox1,
                "limapapel": limapapel,
                "costosx2": costosx2,
                "tiempox2": tiempox2,
                "limametal": limametal,
                "costosx3": costosx3,
                "tiempox3": tiempox3,
                "pulidor": pulidor,
                "costosx4": costosx4,
                "tiempox4": tiempox4,
                "cuticulas": cuticulas,
                "costosx5": costosx5,
                "tiempox5": tiempox5,
                "cepillouñas": cepillouñas,
                "costosx6": costosx6,
                "tiempox6": tiempox6,
                "alicate": alicate,
                "costosx7": costosx7,
                "tiempox7": tiempox7,
                "palitos": palitos,
                "costosx8": costosx8,
                "tiempox8": tiempox8,
                "pinzasuñas": pinzasuñas,
                "costosx9": costosx9,
                "tiempox9": tiempox9,
                "pincelesnail": pincelesnail,
                "costosx10": costosx10,
                "tiempox10": tiempox10,
                "lamparaLED": lamparaLED,
                "costosx11": costosx11,
                "tiempox11": tiempox11,
                "monomero": monomero,
                "costosx12": costosx12,
                "tiempox12": tiempox12,
                "esmaltes": esmaltes,
                "costoMinimo": costoMinimo,
                "costoMaximo": costoMaximo,
                "tiempox13": tiempox13,
                "topcoat": topcoat,
                "costosx14": costosx14,
                "tiempox14": tiempox14,
                "removedor": removedor,
                "costosx15": costosx15,
                "tiempox15": tiempox15,
                "algodon": algodon,
                "costosx16": costosx16,
                "tiempox16": tiempox16,
                "toallitas2": toallitas2,
                "costosx17": costosx17,
                "tiempox17": tiempox17,
                "pedicure": pedicure,
                "cortauñas2": cortauñas2,
                "costosb1": costosb1,
                "tiempob1": tiempob1,
                "empujador": empujador,
                "costosb2": costosb2,
                "tiempob2": tiempob2,
                "alicate2": alicate2,
                "costosb3": costosb3,
                "tiempob3": tiempob3,
                "limap": limap,
                "costosb4": costosb4,
                "tiempob4": tiempob4,
                "piedra": piedra,
                "costosb5": costosb5,
                "tiempob5": tiempob5,
                "limamad": limamad,
                "costosb6": costosb6,
                "tiempob6": tiempob6,
                "limavid": limavid,
                "costosb7": costosb7,
                "tiempob7": tiempob7,
                "limamet": limamet,
                "costosb8": costosb8,
                "tiempob8": tiempob8,
                "cepillou": cepillou,
                "costosb9": costosb9,
                "tiempob9": tiempob9,
                "separador": separador,
                "costosb10": costosb10,
                "tiempob10": tiempob10,
                "palomad": palomad,
                "costosb11": costosb11,
                "tiempob11": tiempob11,
                "exfoliante": exfoliante,
                "costosb12": costosb12,
                "tiempob12": tiempob12,
                "cremahid": cremahid,
                "costosb13": costosb13,
                "tiempob13": tiempob13,
                "esmalte": esmalte,
                "costosb14": costosb14,
                "tiempob14": tiempob14,
                "suero": suero,
                "costosb15": costosb15,
                "tiempob15": tiempob15,
                "toallas": toallas,
                "costosb16": costosb16,
                "tiempob16": tiempob16,
                "acetona": acetona,
                "costosb17": costosb17, 
                "tiempob17": tiempob17,
                "locion": locion,
                "costosb18": costosb18,
                "tiempob18": tiempob18,
                "esmaltes2": esmaltes2,
                "cantidadDesde": cantidadDesde,
                "cantidadHasta": cantidadHasta,
                "cantidadb19": cantidadb19,
                "tiempob19": tiempob19,
                "diseño": diseño,
                "cantidadDesde1": cantidadDesde1,
                "cantidadHasta1": cantidadHasta1,
                "tiempob20": tiempob20,
                "hom1": hom1,
                "hombre2": hombre2,
                "criterioh1": criterioh1,
                "rangoh1": rangoh1,
                "costoh1": costoh1,
                "mujer2": mujer2,
                "criteriom1": criteriom1,
                "rangom1": rangom1,
                "costom1": costom1,
                "tinte": tinte,
                "pinzastin": pinzastin,
                "costosb21": costosb21,
                "tiempob21": tiempob21,
                "tazon": tazon,
                "costosb22": costosb22,
                "tiempob22": tiempob22,
                "cepillomez": cepillomez,
                "costosb23": costosb23,
                "tiempob23": tiempob23,
                "gorros": gorros,
                "costosb24": costosb24,
                "tiempob24": tiempob24,
                "peine": peine,
                "costosb25": costosb25,
                "tiempob25": tiempob25,
                "cepillored": cepillored,
                "costosb26": costosb26,
                "tiempob26": tiempob26,
                "cepilloter": cepilloter,
                "costosb27": costosb27,
                "tiempob27": tiempob27,
                "cepillonylon": cepillonylon,
                "costosb28": costosb28,
                "tiempob28": tiempob28,
                "cepilloova": cepilloova,
                "costosb29": costosb29,
                "tiempob29": tiempob29,
                "aluminio": aluminio,
                "costosb30": costosb30,
                "tiempob30": tiempob30,
                "tintes": tintes,
                "cantidadDesde2": cantidadDesde2,
                "cantidadHasta2": cantidadHasta2,
                "cantidadb31": cantidadb31,
                "tiempob31": tiempob31,
                "decolorante": decolorante,
                "costosb32": costosb32,
                "tiempob32": tiempob32,
                "locionact": locionact,
                "costosb33": costosb33,
                "tiempob33": tiempob33,
                "mascarillac": mascarillac,
                "costosb34": costosb34,
                "tiempob34": tiempob34,
                "cremaacond": cremaacond,
                "costosb35": costosb35,
                "tiempob35": tiempob35,
                "hom2": hom2,
                "hombre3": hombre3,
                "criterioh2": criterioh2,
                "rangoh2": rangoh2,
                "costoh2": costoh2,
                "mujer3": mujer3,
                "criteriom2": criteriom2,
                "rangom2": rangom2,
                "costom2": costom2,
                "extensiones": extensiones,
                "extensiones1": extensiones1,
                "costosb136": costosb136,
                "tiempob136": tiempob136,
                "costosb36": costosb36,
                "extensiones2": extensiones2,
                "costosb137": costosb137,
                "tiempob137": tiempob137,
                "costosb237": costosb237,
                "tiempob237": tiempob237,
                "costosb37": costosb37,
                "extensiones3": extensiones3,
                "costosb138": costosb138,
                "tiempob138": tiempob138,       
                "costosb238": costosb238,
                "tiempob238": tiempob238,
                "costosb338": costosb338,
                "tiempob338": tiempob338,
                "costosb38": costosb38,
                "extensiones4": extensiones4,
                "costosb139": costosb139,
                "tiempob139": tiempob139,
                "costosb239": costosb239,
                "tiempob239": tiempob239,
                "costosb339": costosb339,
                "cantidadb339": cantidadb339,
                "tiempob339": tiempob339,
                "costosb39": costosb39,
                "pinzas2": pinzas2,
                "costosb40": costosb40,
                "tiempob40": tiempob40,
                "peine1": peine1,
                "costosb41": costosb41,
                "tiempob41": tiempob41,
                "cepillored1": cepillored1,
                "costosb42": costosb42,
                "tiempob42": tiempob42,
                "cepilloter1": cepilloter1,
                "costosb43": costosb43,
                "tiempob43": tiempob43,
                "cepillonylon1": cepillonylon1,
                "costosb44": costosb44,
                "tiempob44": tiempob44,
                "cepilloova1": cepilloova1,
                "costosb45": costosb45,
                "tiempob45": tiempob45,
                "tijeras5": tijeras5,
                "costosb46": costosb46,
                "tiempob46": tiempob46,
                "removedorext": removedorext,
                "costosb47": costosb47,
                "tiempob47": tiempob47,
                "rizador": rizador,
                "costosb48": costosb48,
                "tiempob48": tiempob48,
                "mascarillacab": mascarillacab,
                "costosb49": costosb49,
                "tiempob49": tiempob49,
                "acondicionador1": acondicionador1,
                "costosb50": costosb50,
                "tiempob50": tiempob50,
                "shampoo1": shampoo1,
                "costosb51": costosb51,
                "tiempob51": tiempob51,
                "hom3": hom3,
                "hombre4": hombre4,
                "criterioh3": criterioh3,
                "rangoh3": rangoh3,
                "costoh3": costoh3,
                "mujer4": mujer4,
                "criteriom3": criteriom3,
                "rangom3": rangom3,
                "costom3": costom3,
                "depilacion": depilacion,
                "gafas": gafas,
                "costosb52": costosb52,
                "tiempob52": tiempob52,
                "laser": laser,
                "costosb53": costosb53,
                "tiempob53": tiempob53,
                "gel": gel,
                "costosb54": costosb54,
                "tiempob54": tiempob54,
                "gelanes": gelanes,
                "costosb55": costosb55,
                "tiempob55": tiempob55,
                "toallaslim": toallaslim,
                "costosb56": costosb56,
                "tiempob56": tiempob56,
                "compresas": compresas,
                "costosb57": costosb57,
                "tiempob57": tiempob57,
                "piernas": piernas,
                "costosb58": costosb58,
                "axilas": axilas,
                "costosb59": costosb59,
                "bikini": bikini,
                "costosb60": costosb60,
                "zonai": zonai,
                "costosb61": costosb61,
                "espalda": espalda,
                "costosb62": costosb62,
                "pecho": pecho,
                "costosb63": costosb63,
                "brazos": brazos,
                "costosb64": costosb64,
                "entrecejo": entrecejo,
                "costosb65": costosb65,
                "labio": labio,
                "costosb66": costosb66,
                "barbilla": barbilla,
                "costosb67": costosb67,
                "patilla": patilla,
                "costosb68": costosb68,
                "hom4": hom4,
                "hombre5": hombre5,
                "criterioh4": criterioh4,
                "rangoh4": rangoh4,
                "costoh4": costoh4,
                "mujer5": mujer5,
                "criteriom4": criteriom4,
                "rangom4": rangom4,
                "costom4": costom4,
                "masaje": masaje,
                "aceite": aceite,
                "costosb69": costosb69,
                "tiempob69": tiempob69,
                "guante": guante,
                "costosb70": costosb70,
                "tiempob70": tiempob70,
                "rodillo": rodillo,
                "costosb71": costosb71,
                "tiempob71": tiempob71,
                "ventosa": ventosa,
                "costosb72": costosb72,
                "tiempob72": tiempob72,
                "cavitador": cavitador,
                "costosb73": costosb73,
                "tiempob73": tiempob73,
                "gel1": gel1,
                "costosb74": costosb74,
                "tiempob74": tiempob74,
                "lampara": lampara,
                "costosb75": costosb75,
                "tiempob75": tiempob75,
                "termometro": termometro,
                "costosb76": costosb76,
                "tiempob76": tiempob76,
                "masajeador1": masajeador1,
                "costosb77": costosb77,
                "tiempob77": tiempob77,
                "masajeador2": masajeador2,
                "costosb78": costosb78,
                "tiempob78": tiempob78,
                "abdomen": abdomen,
                "costosb79": costosb79,
                "gluteos": gluteos,
                "costosb80": costosb80,
                "cintura": cintura,
                "costosb81": costosb81,
                "caderas": caderas,
                "costosb82": costosb82,
                "muslos": muslos,
                "costosb83": costosb83,
                "brazos1": brazos1,
                "costosb84": costosb84,
                "espalda1": espalda1,
                "costosb85": costosb85,
                "pantorrillas": pantorrillas,
                "costosb86": costosb86,
                "hom5": hom5,
                "hombre6": hombre6,
                "criterioh5": criterioh5,
                "rangoh5": rangoh5,
                "costoh5": costoh5,
                "mujer6": mujer6,
                "criteriom5": criteriom5,
                "rangom5": rangom5,
                "costom5": costom5,
                "peinados": peinados,
                "secadorpelo": secadorpelo,
                "costosb102": costosb102,
                "tiempob102": tiempob102,
                "plancha1": plancha1,
                "costosb103": costosb103,
                "tiempob103": tiempob103,
                "cepillored2": cepillored2,
                "costosb104": costosb104,
                "tiempob104": tiempob104,
                "cepilloter2": cepilloter2,
                "costosb105": costosb105,
                "tiempob105": tiempob105,
                "cepillonylon2": cepillonylon2,
                "costosb106": costosb106,
                "tiempob106": tiempob106,
                "cepilloova2": cepilloova2,
                "costosb107": costosb107,
                "tiempob107": tiempob107,
                "peinepuas": peinepuas,
                "costosb108": costosb108,
                "tiempob108": tiempob108,
                "tenazas": tenazas,
                "costosb109": costosb109,
                "tiempob109": tiempob109,
                "horquillas": horquillas,
                "costosb110": costosb110,
                "tiempob110": tiempob110,
                "rizador2": rizador2,
                "costosb111": costosb111,
                "tiempob111": tiempob111,
                "spray": spray,
                "costosb112": costosb112,
                "tiempob112": tiempob112,
                "mousse": mousse,
                "costosb113": costosb113,
                "tiempob113": tiempob113,
                "serum": serum,
                "costosb114": costosb114,
                "tiempob114": tiempob114,
                // Agrega más campos según sea necesario
            })
        });

        const contenido = await respuesta.json();
        console.log(contenido);
    } catch (error) {
        console.log(error);
    }
}
