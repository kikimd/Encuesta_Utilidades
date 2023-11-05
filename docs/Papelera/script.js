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

