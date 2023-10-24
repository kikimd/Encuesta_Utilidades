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

// Textil


document.getElementById('genero').addEventListener('change', function() {
    const hombrea1Div = document.querySelector('.hombrea1');
    const mujera1Div= document.querySelector('.mujera1');


    if (this.value === 'hombrea1') {
        hombrea1Div.style.display = 'block';
        mujera1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
    } 
    else if (this.value === 'mujera1') {
        hombrea1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        mujera1Div.style.display = 'block';
    }
    else if (this.value === 'elegir') {
        hombrea1Div.style.display = 'none';
        mujera1Div.style.display = 'none';
    }
});

document.getElementById('productosa1').addEventListener('change', function() {
    const ropaa1Div = document.querySelector('.ropaa1');
    const calzadoa1Div= document.querySelector('.calzadoa1');
    const accesoriosa1Div= document.querySelector('.accesoriosa1');


    if (this.value === 'ropaa1') {
        ropaa1Div.style.display = 'block';
        calzadoa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        accesoriosa1Div.style.display = 'none';  
    } 
    else if (this.value === 'calzadoa1') {
        ropaa1Div.style.display = 'none';
        calzadoa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        accesoriosa1Div.style.display = 'none';
    }
    else if (this.value === 'accesoriosa1') {
        ropaa1Div.style.display = 'none';
        calzadoa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        accesoriosa1Div.style.display = 'block';
    }
    else if (this.value === 'elegir') {
        ropaa1Div.style.display = 'none';
        calzadoa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        accesoriosa1Div.style.display = 'none';
    }
});

document.getElementById('categoriaa1').addEventListener('change', function() {
    const camisasyplayDiv = document.querySelector('.camisasyplay');
    const bottoma1Div= document.querySelector('.bottomsa1');
    const pijamaa1Div= document.querySelector('.pijamasa1');
    const ropadeportea1Div= document.querySelector('.ropadeportea1');
    const otrosa1Div= document.querySelector('.otrosa1');

    if (this.value === 'camisasyplay') {
        camisasyplayDiv.style.display = 'block';
        bottoma1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        pijamaa1Div.style.display = 'none';  
        ropadeportea1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa1Div.style.display = 'none';  
    } 
    else if (this.value === 'bottoma1') {
        camisasyplayDiv.style.display = 'none';
        bottoma1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        pijamaa1Div.style.display = 'none';  
        ropadeportea1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa1Div.style.display = 'none';  
    }
    else if (this.value === 'pijamaa1') {
        camisasyplayDiv.style.display = 'none';
        bottoma1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        pijamaa1Div.style.display = 'block';  
        ropadeportea1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa1Div.style.display = 'none';  
    }
    else if (this.value === 'ropadeportea1') {
        camisasyplayDiv.style.display = 'none';
        bottoma1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        pijamaa1Div.style.display = 'none';  
        ropadeportea1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        otrosa1Div.style.display = 'none';  
    }
    else if (this.value === 'otrosa1') {
        camisasyplayDiv.style.display = 'none';
        bottoma1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        pijamaa1Div.style.display = 'none';  
        ropadeportea1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa1Div.style.display = 'block';
    }  
    else if (this.value === 'elegir') {
        camisasyplayDiv.style.display = 'none';
        bottoma1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        pijamaa1Div.style.display = 'none';  
        ropadeportea1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa1Div.style.display = 'none';
    }
});

document.getElementById('categoriaa4').addEventListener('change', function() {
    const camisasa1Div = document.querySelector('.camisasa1');
    const playerasa1Div= document.querySelector('.playerasa1');
    const otrosa2Div= document.querySelector('.otrosa2');

    if (this.value === 'camisasa1') {
        camisasa1Div.style.display = 'block';
        playerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa2Div.style.display = 'none';  
    } 
    else if (this.value === 'playerasa1') {
        camisasa1Div.style.display = 'none';
        playerasa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        otrosa2Div.style.display = 'none';  
    }
    else if (this.value === 'otrosa2') {
        camisasa1Div.style.display = 'none';
        playerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa2Div.style.display = 'block';  
    }
    else if (this.value === 'elegir') {
        camisasa1Div.style.display = 'none';
        playerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa2Div.style.display = 'none';  
    }
});

document.getElementById('categoriaa5').addEventListener('change', function() {
    const pantalonesa1Div = document.querySelector('.pantalonesa1');
    const bermudasa1Div= document.querySelector('.bermudasa1');
    const otrosa3Div= document.querySelector('.otrosa3');

    if (this.value === 'pantalonesa1') {
        pantalonesa1Div.style.display = 'block';
        bermudasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa3Div.style.display = 'none';  
    } 
    else if (this.value === 'bermudasa1') {
        pantalonesa1Div.style.display = 'none';
        bermudasa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        otrosa3Div.style.display = 'none';  
    }
    else if (this.value === 'otrosa3') {
        pantalonesa1Div.style.display = 'none';
        bermudasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa3Div.style.display = 'block';  
    }
    else if (this.value === 'elegir') {
        pantalonesa1Div.style.display = 'none';
        bermudasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa3Div.style.display = 'none';  
    }
});

document.getElementById('categoriaa6').addEventListener('change', function() {
    const playerasa2Div = document.querySelector('.playerasa2');
    const pantalonesa2Div= document.querySelector('.pantalonesa2');
    const conjuntosa2Div= document.querySelector('.conjuntosa2');
    const otrosa4Div= document.querySelector('.otrosa4');

    if (this.value === 'playerasa2') {
        playerasa2Div.style.display = 'block';
        pantalonesa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa2Div.style.display = 'none';
        otrosa4Div.style.display = 'none';  
    } 
    else if (this.value === 'pantalonesa2') {
        playerasa2Div.style.display = 'none';
        pantalonesa2Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        conjuntosa2Div.style.display = 'none';
        otrosa4Div.style.display = 'none';  
    }
    else if (this.value === 'conjuntosa2') {
        playerasa2Div.style.display = 'none';
        pantalonesa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa2Div.style.display = 'block';
        otrosa4Div.style.display = 'none';  
    }
    else if (this.value === 'otrosa4') {
        playerasa2Div.style.display = 'none';
        pantalonesa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa2Div.style.display = 'none';
        otrosa4Div.style.display = 'block';  
    }
    else if (this.value === 'elegir') {
        playerasa2Div.style.display = 'none';
        pantalonesa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa2Div.style.display = 'none';
        otrosa4Div.style.display = 'none';  
    }
});

document.getElementById('categoriaa7').addEventListener('change', function() {
    const sudaderaa1Div = document.querySelector('.sudaderaa1');
    const pantalonerasa1Div= document.querySelector('.pantalonerasa1');
    const shortsa2Div= document.querySelector('.shortsa1');
    const playerasa3Div= document.querySelector('.playerasa3');
    const conjuntosa3Div= document.querySelector('.conjuntosa3');
    const otrosa5Div= document.querySelector('.otrosa5');

    if (this.value === 'sudaderaa1') {
        sudaderaa1Div.style.display = 'block';
        pantalonerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shortsa2Div.style.display = 'none';
        playerasa3Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa3Div.style.display = 'none';
        otrosa5Div.style.display = 'none';  
    } 
    else if (this.value === 'pantalonerasa1') {
        sudaderaa1Div.style.display = 'none';
        pantalonerasa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        shortsa2Div.style.display = 'none';
        playerasa3Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa3Div.style.display = 'none';
        otrosa5Div.style.display = 'none';  
    }
    else if (this.value === 'shortsa2') {
        sudaderaa1Div.style.display = 'none';
        pantalonerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shortsa2Div.style.display = 'block';
        playerasa3Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa3Div.style.display = 'none';
        otrosa5Div.style.display = 'none';  
    }
    else if (this.value === 'playerasa3') {
        sudaderaa1Div.style.display = 'none';
        pantalonerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shortsa2Div.style.display = 'none';
        playerasa3Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        conjuntosa3Div.style.display = 'none';
        otrosa5Div.style.display = 'none';  
    }
    else if (this.value === 'conjuntosa3') {
        sudaderaa1Div.style.display = 'none';
        pantalonerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shortsa2Div.style.display = 'none';
        playerasa3Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa3Div.style.display = 'block';
        otrosa5Div.style.display = 'none';  
    }
    else if (this.value === 'otrosa5') {
        sudaderaa1Div.style.display = 'none';
        pantalonerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shortsa2Div.style.display = 'none';
        playerasa3Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa3Div.style.display = 'none';
        otrosa5Div.style.display = 'block';  
    }
    else if (this.value === 'elegir') {
        sudaderaa1Div.style.display = 'none';
        pantalonerasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shortsa2Div.style.display = 'none';
        playerasa3Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        conjuntosa3Div.style.display = 'none';
        otrosa5Div.style.display = 'none';  
    }
});

document.getElementById('categoriaa8').addEventListener('change', function() {
    const interiora1Div = document.querySelector('.interiora1');
    const calcetinesa1Div= document.querySelector('.calcetinesa1');
    const trajesdebañoa1Div= document.querySelector('.trajesdebañoa1');

    if (this.value === 'interiora1') {
        interiora1Div.style.display = 'block';
        calcetinesa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        trajesdebañoa1Div.style.display = 'none';
    } 
    else if (this.value === 'calcetinesa1') {
        interiora1Div.style.display = 'none';
        calcetinesa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        trajesdebañoa1Div.style.display = 'none';
    }
    else if (this.value === 'trajesdebañoa1') {
        interiora1Div.style.display = 'none';
        calcetinesa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        trajesdebañoa1Div.style.display = 'none';
    }
    else if (this.value === 'elegir') {
        interiora1Div.style.display = 'none';
        calcetinesa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        trajesdebañoa1Div.style.display = 'none';
    }
});

document.getElementById('categoriaa9').addEventListener('change', function() {
    const tenisa1Div = document.querySelector('.tenisa1');
    const botasa1Div= document.querySelector('.botasa1');
    const zapatosa1Div= document.querySelector('.zapatosa1');
    const sandaliasa1Div= document.querySelector('.sandaliasa1');
    const otrosa6Div= document.querySelector('.otrosa6');

    if (this.value === 'tenisa1') {
        tenisa1Div.style.display = 'block';
        botasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        zapatosa1Div.style.display = 'none';
        sandaliasa1Div.style.display = 'none';
        otrosa6Div.style.display = 'none';  
    } 
    else if (this.value === 'botasa1') {
        tenisa1Div.style.display = 'none';
        botasa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        zapatosa1Div.style.display = 'none';
        sandaliasa1Div.style.display = 'none';
        otrosa6Div.style.display = 'none';  
    }
    else if (this.value === 'zapatosa1') {
        tenisa1Div.style.display = 'none';
        botasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        zapatosa1Div.style.display = 'block';
        sandaliasa1Div.style.display = 'none';
        otrosa6Div.style.display = 'none';  
    }
    else if (this.value === 'sandaliasa1') {
        tenisa1Div.style.display = 'none';
        botasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        zapatosa1Div.style.display = 'none';
        sandaliasa1Div.style.display = 'block';
        otrosa6Div.style.display = 'none';  
    }
    else if (this.value === 'otrosa6') {
        tenisa1Div.style.display = 'none';
        botasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        zapatosa1Div.style.display = 'none';
        sandaliasa1Div.style.display = 'block';
        otrosa6Div.style.display = 'none';  
    }
    else if (this.value === 'elegir') {
        tenisa1Div.style.display = 'none';
        botasa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        zapatosa1Div.style.display = 'none';
        sandaliasa1Div.style.display = 'none';
        otrosa6Div.style.display = 'none';  
    }
});

document.getElementById('categoriaa10').addEventListener('change', function() {
    const gorrasa1Div = document.querySelector('.gorrasa1');
    const cintosa1Div= document.querySelector('.cintosa1');
    const bandasa1Div= document.querySelector('.bandasa1');
    const pulcerascollaresa1Div= document.querySelector('.pulcerascollaresa1');
    const otrosa7Div= document.querySelector('.otrosa7');

    if (this.value === 'gorrasa1') {
        gorrasa1Div.style.display = 'block';
        cintosa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        bandasa1Div.style.display = 'none';
        pulcerascollaresa1Div.style.display = 'none';
        otrosa7Div.style.display = 'none';  
    } 
    else if (this.value === 'cintosa1') {
        gorrasa1Div.style.display = 'none';
        cintosa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        bandasa1Div.style.display = 'none';
        pulcerascollaresa1Div.style.display = 'none';
        otrosa7Div.style.display = 'none'; 
    }
    else if (this.value === 'bandasa1') {
        gorrasa1Div.style.display = 'none';
        cintosa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        bandasa1Div.style.display = 'block';
        pulcerascollaresa1Div.style.display = 'none';
        otrosa7Div.style.display = 'none'; 
    }
    else if (this.value === 'pulcerascollaresa1') {
        gorrasa1Div.style.display = 'none';
        cintosa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        bandasa1Div.style.display = 'none';
        pulcerascollaresa1Div.style.display = 'block';
        otrosa7Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa7') {
        gorrasa1Div.style.display = 'none';
        cintosa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        bandasa1Div.style.display = 'none';
        pulcerascollaresa1Div.style.display = 'none';
        otrosa7Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        gorrasa1Div.style.display = 'none';
        cintosa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        bandasa1Div.style.display = 'none';
        pulcerascollaresa1Div.style.display = 'none';
        otrosa7Div.style.display = 'none'; 
    }
});

document.getElementById('productosa2').addEventListener('change', function() {
    const ropaa2Div = document.querySelector('.ropaa2');
    const calzadoa2Div= document.querySelector('.calzadoa2');
    const accesoriosa2Div= document.querySelector('.accesoriosa2');


    if (this.value === 'ropaa2') {
        ropaa2Div.style.display = 'block';
        calzadoa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        accesoriosa2Div.style.display = 'none';  
    } 
    else if (this.value === 'calzadoa2') {
        ropaa2Div.style.display = 'none';
        calzadoa2Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        accesoriosa2Div.style.display = 'none';
    }
    else if (this.value === 'accesoriosa2') {
        ropaa2Div.style.display = 'none';
        calzadoa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        accesoriosa2Div.style.display = 'block';
    }
    else if (this.value === 'elegir') {
        ropaa2Div.style.display = 'none';
        calzadoa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        accesoriosa2Div.style.display = 'none';
    }
});


document.getElementById('categoriaa11').addEventListener('change', function() {
    const blusasa1Div = document.querySelector('.blusasa1');
    const bottomsa2Div= document.querySelector('.bottomsa2');
    const vestidosa1Div= document.querySelector('.vestidosa1');
    const abrigosa1Div= document.querySelector('.abrigosa1');
    const pijamasa2Div= document.querySelector('.pijamasa2');
    const trajesdebañoa2Div= document.querySelector('.trajesdebañoa2');
    const palazosa1Div= document.querySelector('.palazosa1');
    const conjuntosa4Div= document.querySelector('.conjuntosa4');
    const ropadeportea2Div= document.querySelector('.ropadeportea2');
    const otrosa8Div= document.querySelector('.otrosa8');

    if (this.value === 'blusasa1') {
        blusasa1Div.style.display = 'block';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    } 
    else if (this.value === 'bottomsa2') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    }
    else if (this.value === 'vestidosa1') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'block';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    }
    else if (this.value === 'abrigosa1') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'block';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    }
    else if (this.value === 'pijamasa2') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'block';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    }
    else if (this.value === 'trajesdebañoa2') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'block';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    }
    else if (this.value === 'palazosa1') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'block';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    }
    else if (this.value === 'conjuntosa4') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'block';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    }
    else if (this.value === 'ropadeportea2') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'block';
        otrosa8Div.style.display = 'none';  
    }
    else if (this.value === 'otrosa8') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'block';  
    }
    else if (this.value === 'elegir') {
        blusasa1Div.style.display = 'none';
        bottomsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        vestidosa1Div.style.display = 'none';
        abrigosa1Div.style.display = 'none';
        pijamasa2Div.style.display = 'none';
        trajesdebañoa2Div.style.display = 'none';
        palazosa1Div.style.display = 'none';
        conjuntosa4Div.style.display = 'none';
        ropadeportea2Div.style.display = 'none';
        otrosa8Div.style.display = 'none';  
    }
});

document.getElementById('categoriaa12').addEventListener('change', function() {
    const playeraa4Div = document.querySelector('.playeraa4');
    const topa1Div= document.querySelector('.topa1');
    const blusasa2Div= document.querySelector('.blusasa2');
    const otrosa9Div= document.querySelector('.otrosa9');


    if (this.value === 'playeraa4') {
        playeraa4Div.style.display = 'block';
        topa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa2Div.style.display = 'none';  
        otrosa9Div.style.display = 'none'; 
    } 
    else if (this.value === 'topa1') {
        playeraa4Div.style.display = 'none';
        topa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        blusasa2Div.style.display = 'none';  
        otrosa9Div.style.display = 'none'; 
    }
    else if (this.value === 'blusasa2') {
        playeraa4Div.style.display = 'none';
        topa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa2Div.style.display = 'block';  
        otrosa9Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa9') {
        playeraa4Div.style.display = 'none';
        topa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa2Div.style.display = 'none';  
        otrosa9Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        playeraa4Div.style.display = 'none';
        topa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa2Div.style.display = 'none';  
        otrosa9Div.style.display = 'none';
    }
});

document.getElementById('categoriaa13').addEventListener('change', function() {
    const pantalonvestira1Div = document.querySelector('.pantalonvestia1');
    const pantalonmezclillaa1Div= document.querySelector('.pantalonmezclillaa1');
    const shorta3Div= document.querySelector('.shorta3');
    const faldaa1Div= document.querySelector('.faldaa1');
    const leggina1Div= document.querySelector('.leggina1');
    const otrosa10Div= document.querySelector('.otrosa10');


    if (this.value === 'pantalonvestira1') {
        pantalonvestira1Div.style.display = 'block';
        pantalonmezclillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta3Div.style.display = 'none';  
        faldaa1Div.style.display = 'none';  
        leggina1Div.style.display = 'none';  
        otrosa10Div.style.display = 'none'; 
    } 
    else if (this.value === 'pantalonmezclillaa1') {
        pantalonvestira1Div.style.display = 'none';
        pantalonmezclillaa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        shorta3Div.style.display = 'none';  
        faldaa1Div.style.display = 'none';  
        leggina1Div.style.display = 'none';  
        otrosa10Div.style.display = 'none'; 
    }
    else if (this.value === 'shorta3') {
        pantalonvestira1Div.style.display = 'none';
        pantalonmezclillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta3Div.style.display = 'block';  
        faldaa1Div.style.display = 'none';  
        leggina1Div.style.display = 'none';  
        otrosa10Div.style.display = 'none'; 
    }
    else if (this.value === 'faldaa1') {
        pantalonvestira1Div.style.display = 'none';
        pantalonmezclillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta3Div.style.display = 'none';  
        faldaa1Div.style.display = 'block';  
        leggina1Div.style.display = 'none';  
        otrosa10Div.style.display = 'none'; 
    }
    else if (this.value === 'leggina1') {
        pantalonvestira1Div.style.display = 'none';
        pantalonmezclillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta3Div.style.display = 'none';  
        faldaa1Div.style.display = 'none';  
        leggina1Div.style.display = 'block';  
        otrosa10Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa10') {
        pantalonvestira1Div.style.display = 'none';
        pantalonmezclillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta3Div.style.display = 'none';  
        faldaa1Div.style.display = 'none';  
        leggina1Div.style.display = 'none';  
        otrosa10Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        pantalonvestira1Div.style.display = 'none';
        pantalonmezclillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta3Div.style.display = 'none';  
        faldaa1Div.style.display = 'none';  
        leggina1Div.style.display = 'none';  
        otrosa10Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa14').addEventListener('change', function() {
    const nochea1Div = document.querySelector('.nochea1');
    const coctela1Div= document.querySelector('.coctela1');
    const casuala1Div= document.querySelector('.casuala1');
    const otrosa11Div= document.querySelector('.otrosa11');


    if (this.value === 'nochea1') {
        nochea1Div.style.display = 'block';
        coctela1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        casuala1Div.style.display = 'none';   
        otrosa11Div.style.display = 'none'; 
    } 
    else if (this.value === 'coctela1') {
        nochea1Div.style.display = 'none';
        coctela1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        casuala1Div.style.display = 'none';   
        otrosa11Div.style.display = 'none'; 
    }
    else if (this.value === 'casuala1') {
        nochea1Div.style.display = 'none';
        coctela1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        casuala1Div.style.display = 'block';   
        otrosa11Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa10') {
        nochea1Div.style.display = 'none';
        coctela1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        casuala1Div.style.display = 'none';   
        otrosa11Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        nochea1Div.style.display = 'none';
        coctela1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        casuala1Div.style.display = 'none';   
        otrosa11Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa15').addEventListener('change', function() {
    const chamarraa1Div = document.querySelector('.chamarraa1');
    const sudaderaa2Div= document.querySelector('.sudaderaa2');
    const blazera1Div= document.querySelector('.blazera1');
    const sacoa1Div= document.querySelector('.sacoa1');
    const chalecoa1a1Div= document.querySelector('.chalecoa1');
    const suetera1Div= document.querySelector('.suetera1');
    const otrosa12Div= document.querySelector('.otrosa12');


    if (this.value === 'chamarraa1') {
        chamarraa1Div.style.display = 'block';
        sudaderaa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blazera1Div.style.display = 'none';
        sacoa1Div.style.display = 'none';   
        chalecoa1a1Div.style.display = 'none';   
        suetera1Div.style.display = 'none';      
        otrosa12Div.style.display = 'none'; 
    } 
    else if (this.value === 'sudaderaa2') {
        chamarraa1Div.style.display = 'none';
        sudaderaa2Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        blazera1Div.style.display = 'none';
        sacoa1Div.style.display = 'none';   
        chalecoa1a1Div.style.display = 'none';   
        suetera1Div.style.display = 'none';      
        otrosa12Div.style.display = 'none'; 
    }
    else if (this.value === 'blazera1') {
        chamarraa1Div.style.display = 'none';
        sudaderaa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blazera1Div.style.display = 'block';
        sacoa1Div.style.display = 'none';   
        chalecoa1a1Div.style.display = 'none';   
        suetera1Div.style.display = 'none';      
        otrosa12Div.style.display = 'none'; 
    }
    else if (this.value === 'sacoa1') {
        chamarraa1Div.style.display = 'none';
        sudaderaa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blazera1Div.style.display = 'none';
        sacoa1Div.style.display = 'block';   
        chalecoa1a1Div.style.display = 'none';   
        suetera1Div.style.display = 'none';      
        otrosa12Div.style.display = 'none'; 
    }
    else if (this.value === 'chalecoa1') {
        chamarraa1Div.style.display = 'none';
        sudaderaa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blazera1Div.style.display = 'none';
        sacoa1Div.style.display = 'none';   
        chalecoa1a1Div.style.display = 'block';   
        suetera1Div.style.display = 'none';      
        otrosa12Div.style.display = 'none'; 
    }
    else if (this.value === 'suetera1') {
        chamarraa1Div.style.display = 'none';
        sudaderaa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blazera1Div.style.display = 'none';
        sacoa1Div.style.display = 'none';   
        chalecoa1a1Div.style.display = 'none';   
        suetera1Div.style.display = 'block';      
        otrosa12Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa12') {
        chamarraa1Div.style.display = 'none';
        sudaderaa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blazera1Div.style.display = 'none';
        sacoa1Div.style.display = 'none';   
        chalecoa1a1Div.style.display = 'none';   
        suetera1Div.style.display = 'none';      
        otrosa12Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        chamarraa1Div.style.display = 'none';
        sudaderaa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blazera1Div.style.display = 'none';
        sacoa1Div.style.display = 'none';   
        chalecoa1a1Div.style.display = 'none';   
        suetera1Div.style.display = 'none';      
        otrosa12Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa16').addEventListener('change', function() {
    const bataa1Div = document.querySelector('.bataa1');
    const conjuntosa5Div= document.querySelector('.conjuntosa5');
    const blusasa3Div= document.querySelector('.blusasa3');
    const pantalonesa3Div= document.querySelector('.pantalonesa3');
    const shorta4Div= document.querySelector('.shorta4');
    const otrosa13Div= document.querySelector('.otrosa13');


    if (this.value === 'bataa1') {
        bataa1Div.style.display = 'block';
        conjuntosa5Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa3Div.style.display = 'none';
        pantalonesa3Div.style.display = 'none';   
        shorta4Div.style.display = 'none';        
        otrosa13Div.style.display = 'none'; 
    } 
    else if (this.value === 'conjuntosa5') {
        bataa1Div.style.display = 'none';
        conjuntosa5Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        blusasa3Div.style.display = 'none';
        pantalonesa3Div.style.display = 'none';   
        shorta4Div.style.display = 'none';        
        otrosa13Div.style.display = 'none'; 
    }
    else if (this.value === 'blusasa3') {
        bataa1Div.style.display = 'none';
        conjuntosa5Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa3Div.style.display = 'block';
        pantalonesa3Div.style.display = 'none';   
        shorta4Div.style.display = 'none';        
        otrosa13Div.style.display = 'none'; 
    }
    else if (this.value === 'pantalonesa3') {
        bataa1Div.style.display = 'none';
        conjuntosa5Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa3Div.style.display = 'none';
        pantalonesa3Div.style.display = 'block';   
        shorta4Div.style.display = 'none';        
        otrosa13Div.style.display = 'none'; 
    }
    else if (this.value === 'shorta4') {
        bataa1Div.style.display = 'none';
        conjuntosa5Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa3Div.style.display = 'none';
        pantalonesa3Div.style.display = 'none';   
        shorta4Div.style.display = 'block';        
        otrosa13Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa13') {
        bataa1Div.style.display = 'none';
        conjuntosa5Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa3Div.style.display = 'none';
        pantalonesa3Div.style.display = 'none';   
        shorta4Div.style.display = 'none';        
        otrosa13Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        bataa1Div.style.display = 'none';
        conjuntosa5Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        blusasa3Div.style.display = 'none';
        pantalonesa3Div.style.display = 'none';   
        shorta4Div.style.display = 'none';        
        otrosa13Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa17').addEventListener('change', function() {
    const bikinia1Div = document.querySelector('.bikinia1');
    const completoa1Div= document.querySelector('.completoa1');
    const shorta5Div= document.querySelector('.shorta5');
    const pareoa1Div= document.querySelector('.pareoa1');
    const otrosa14Div= document.querySelector('.otrosa14');


    if (this.value === 'bikinia1') {
        bikinia1Div.style.display = 'block';
        completoa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta5Div.style.display = 'none';
        pareoa1Div.style.display = 'none';        
        otrosa14Div.style.display = 'none'; 
    } 
    else if (this.value === 'completoa1') {
        bikinia1Div.style.display = 'none';
        completoa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        shorta5Div.style.display = 'none';
        pareoa1Div.style.display = 'none';        
        otrosa14Div.style.display = 'none'; 
    }
    else if (this.value === 'shorta5') {
        bikinia1Div.style.display = 'none';
        completoa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta5Div.style.display = 'block';
        pareoa1Div.style.display = 'none';        
        otrosa14Div.style.display = 'none'; 
    }
    else if (this.value === 'pareoa1') {
        bikinia1Div.style.display = 'none';
        completoa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta5Div.style.display = 'none';
        pareoa1Div.style.display = 'block';        
        otrosa14Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa14') {
        bikinia1Div.style.display = 'none';
        completoa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta5Div.style.display = 'none';
        pareoa1Div.style.display = 'none';        
        otrosa14Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        bikinia1Div.style.display = 'none';
        completoa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        shorta5Div.style.display = 'none';
        pareoa1Div.style.display = 'none';        
        otrosa14Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa18').addEventListener('change', function() {
    const shorta6Div = document.querySelector('.shorta6');
    const pantalona1Div= document.querySelector('.pantalona1');
    const otrosa15Div= document.querySelector('.otrosa15');


    if (this.value === 'shorta6') {
        shorta6Div.style.display = 'block';
        pantalona1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa15Div.style.display = 'none'; 
    } 
    else if (this.value === 'pantalona1') {
        shorta6Div.style.display = 'none';
        pantalona1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        otrosa15Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa15') {
        shorta6Div.style.display = 'none';
        pantalona1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa15Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        shorta6Div.style.display = 'none';
        pantalona1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa15Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa19').addEventListener('change', function() {
    const faldaa2Div = document.querySelector('.faldaa2');
    const shorta7Div= document.querySelector('.shorta7');
    const otrosa16Div= document.querySelector('.otrosa16');


    if (this.value === 'faldaa2') {
        faldaa2Div.style.display = 'block';
        shorta7Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa16Div.style.display = 'none'; 
    } 
    else if (this.value === 'shorta7') {
        faldaa2Div.style.display = 'none';
        shorta7Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        otrosa16Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa16') {
        faldaa2Div.style.display = 'none';
        shorta7Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa16Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        faldaa2Div.style.display = 'none';
        shorta7Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa16Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa20').addEventListener('change', function() {
    const shorta8Div = document.querySelector('.shorta8');
    const topsa2Div= document.querySelector('.topa2');
    const leggina2Div= document.querySelector('.leggina2');
    const blusaa4Div= document.querySelector('.blusaa4');
    const pantalonerasa2Div= document.querySelector('.pantalonerasa2');
    const conjuntosa6Div= document.querySelector('.conjuntosa6');
    const otrosa17Div= document.querySelector('.otrosa17');


    if (this.value === 'shorta8') {
        shorta8Div.style.display = 'block';
        topsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        leggina2Div.style.display = 'none';
        blusaa4Div.style.display = 'none';   
        pantalonerasa2Div.style.display = 'none';   
        conjuntosa6Div.style.display = 'none';        
        otrosa17Div.style.display = 'none'; 
    } 
    else if (this.value === 'topsa2') {
        shorta8Div.style.display = 'none';
        topsa2Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        leggina2Div.style.display = 'none';
        blusaa4Div.style.display = 'none';   
        pantalonerasa2Div.style.display = 'none';   
        conjuntosa6Div.style.display = 'none';        
        otrosa17Div.style.display = 'none'; 
    }
    else if (this.value === 'leggina2') {
        shorta8Div.style.display = 'none';
        topsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        leggina2Div.style.display = 'block';
        blusaa4Div.style.display = 'none';   
        pantalonerasa2Div.style.display = 'none';   
        conjuntosa6Div.style.display = 'none';        
        otrosa17Div.style.display = 'none'; 
    }
    else if (this.value === 'blusaa4') {
        shorta8Div.style.display = 'none';
        topsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        leggina2Div.style.display = 'none';
        blusaa4Div.style.display = 'block';   
        pantalonerasa2Div.style.display = 'none';   
        conjuntosa6Div.style.display = 'none';        
        otrosa17Div.style.display = 'none'; 
    }
    else if (this.value === 'pantalonerasa2') {
        shorta8Div.style.display = 'none';
        topsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        leggina2Div.style.display = 'none';
        blusaa4Div.style.display = 'none';   
        pantalonerasa2Div.style.display = 'block';   
        conjuntosa6Div.style.display = 'none';        
        otrosa17Div.style.display = 'none'; 
    }
    else if (this.value === 'conjuntosa6') {
        shorta8Div.style.display = 'none';
        topsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        leggina2Div.style.display = 'none';
        blusaa4Div.style.display = 'none';   
        pantalonerasa2Div.style.display = 'none';   
        conjuntosa6Div.style.display = 'block';        
        otrosa17Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa17') {
        shorta8Div.style.display = 'none';
        topsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        leggina2Div.style.display = 'none';
        blusaa4Div.style.display = 'none';   
        pantalonerasa2Div.style.display = 'none';   
        conjuntosa6Div.style.display = 'none';        
        otrosa17Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        shorta8Div.style.display = 'none';
        topsa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        leggina2Div.style.display = 'none';
        blusaa4Div.style.display = 'none';   
        pantalonerasa2Div.style.display = 'none';   
        conjuntosa6Div.style.display = 'none';        
        otrosa17Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa21').addEventListener('change', function() {
    const interiora2Div = document.querySelector('.interiora2');
    const calcetinesa2Div= document.querySelector('.calcetinesa2');
    const otrosa18Div= document.querySelector('.otrosa18');

    if (this.value === 'interiora2') {
        interiora2Div.style.display = 'block';
        calcetinesa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa18Div.style.display = 'none'; 
    } 
    else if (this.value === 'shorta7') {
        interiora2Div.style.display = 'none';
        calcetinesa2Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        otrosa18Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa16') {
        interiora2Div.style.display = 'none';
        calcetinesa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa18Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        interiora2Div.style.display = 'none';
        calcetinesa2Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        otrosa18Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa22').addEventListener('change', function() {
    const botasa2Div = document.querySelector('.botasa2');
    const zapatillaa1Div= document.querySelector('.zapatillaa1');
    const plataformaa1Div= document.querySelector('.plataformaa1');
    const sandaliasa2Div= document.querySelector('.sandaliasa2');
    const pantunflasa1Div= document.querySelector('.pantunflasa1');
    const botina1Div= document.querySelector('.botina1');
    const tenisa2Div= document.querySelector('.tenisa2');
    const otrosa19Div= document.querySelector('.otrosa19');


    if (this.value === 'botasa2') {
        botasa2Div.style.display = 'block';
        zapatillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'none';
        sandaliasa2Div.style.display = 'none';   
        pantunflasa1Div.style.display = 'none';   
        botina1Div.style.display = 'none';        
        tenisa2Div.style.display = 'none';        
        otrosa19Div.style.display = 'none'; 
    } 
    else if (this.value === 'zapatillaa1') {
        botasa2Div.style.display = 'none';
        zapatillaa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'none';
        sandaliasa2Div.style.display = 'none';   
        pantunflasa1Div.style.display = 'none';   
        botina1Div.style.display = 'none';        
        tenisa2Div.style.display = 'none';        
        otrosa19Div.style.display = 'none'; 
    }
    else if (this.value === 'plataformaa1') {
        botasa2Div.style.display = 'none';
        zapatillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'block';
        sandaliasa2Div.style.display = 'none';   
        pantunflasa1Div.style.display = 'none';   
        botina1Div.style.display = 'none';        
        tenisa2Div.style.display = 'none';        
        otrosa19Div.style.display = 'none'; 
    }
    else if (this.value === 'sandaliasa2') {
        botasa2Div.style.display = 'none';
        zapatillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'none';
        sandaliasa2Div.style.display = 'block';   
        pantunflasa1Div.style.display = 'none';   
        botina1Div.style.display = 'none';        
        tenisa2Div.style.display = 'none';        
        otrosa19Div.style.display = 'none'; 
    }
    else if (this.value === 'pantunflasa1') {
        botasa2Div.style.display = 'none';
        zapatillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'none';
        sandaliasa2Div.style.display = 'none';   
        pantunflasa1Div.style.display = 'block';   
        botina1Div.style.display = 'none';        
        tenisa2Div.style.display = 'none';        
        otrosa19Div.style.display = 'none'; 
    }
    else if (this.value === 'botina1') {
        botasa2Div.style.display = 'none';
        zapatillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'none';
        sandaliasa2Div.style.display = 'none';   
        pantunflasa1Div.style.display = 'none';   
        botina1Div.style.display = 'block';        
        tenisa2Div.style.display = 'none';        
        otrosa19Div.style.display = 'none'; 
    }
    else if (this.value === 'tenisa2') {
        botasa2Div.style.display = 'none';
        zapatillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'none';
        sandaliasa2Div.style.display = 'none';   
        pantunflasa1Div.style.display = 'none';   
        botina1Div.style.display = 'none';        
        tenisa2Div.style.display = 'block';        
        otrosa19Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa19') {
        botasa2Div.style.display = 'none';
        zapatillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'none';
        sandaliasa2Div.style.display = 'none';   
        pantunflasa1Div.style.display = 'none';   
        botina1Div.style.display = 'none';        
        tenisa2Div.style.display = 'none';        
        otrosa19Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        botasa2Div.style.display = 'none';
        zapatillaa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        plataformaa1Div.style.display = 'none';
        sandaliasa2Div.style.display = 'none';   
        pantunflasa1Div.style.display = 'none';   
        botina1Div.style.display = 'none';        
        tenisa2Div.style.display = 'none';        
        otrosa19Div.style.display = 'none'; 
    }
});

document.getElementById('categoriaa23').addEventListener('change', function() {
    const joyeriaa1Div = document.querySelector('.joyeriaa1');
    const accspcabelloa1Div= document.querySelector('.accspcabelloa1');
    const gorrasa2Div= document.querySelector('.gorrasa2');
    const cintosa2Div= document.querySelector('.cintosa2');
    const bolsasa1Div= document.querySelector('.bolsasa1');
    const perfumesa1Div= document.querySelector('.perfumesa1');
    const lentesa1Div= document.querySelector('.lentesa1');
    const otrosa20Div= document.querySelector('.otrosa20');


    if (this.value === 'joyeriaa1') {
        joyeriaa1Div.style.display = 'block';
        accspcabelloa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'none';
        cintosa2Div.style.display = 'none';   
        bolsasa1Div.style.display = 'none';   
        perfumesa1Div.style.display = 'none';        
        lentesa1Div.style.display = 'none';        
        otrosa20Div.style.display = 'none'; 
    } 
    else if (this.value === 'accspcabelloa1') {
        joyeriaa1Div.style.display = 'none';
        accspcabelloa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'none';
        cintosa2Div.style.display = 'none';   
        bolsasa1Div.style.display = 'none';   
        perfumesa1Div.style.display = 'none';        
        lentesa1Div.style.display = 'none';        
        otrosa20Div.style.display = 'none'; 
    }
    else if (this.value === 'gorrasa2') {
        joyeriaa1Div.style.display = 'none';
        accspcabelloa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'block';
        cintosa2Div.style.display = 'none';   
        bolsasa1Div.style.display = 'none';   
        perfumesa1Div.style.display = 'none';        
        lentesa1Div.style.display = 'none';        
        otrosa20Div.style.display = 'none'; 
    }
    else if (this.value === 'cintosa2') {
        joyeriaa1Div.style.display = 'none';
        accspcabelloa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'none';
        cintosa2Div.style.display = 'block';   
        bolsasa1Div.style.display = 'none';   
        perfumesa1Div.style.display = 'none';        
        lentesa1Div.style.display = 'none';        
        otrosa20Div.style.display = 'none'; 
    }
    else if (this.value === 'bolsasa1') {
        joyeriaa1Div.style.display = 'none';
        accspcabelloa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'none';
        cintosa2Div.style.display = 'none';   
        bolsasa1Div.style.display = 'block';   
        perfumesa1Div.style.display = 'none';        
        lentesa1Div.style.display = 'none';        
        otrosa20Div.style.display = 'none'; 
    }
    else if (this.value === 'perfumesa1') {
        joyeriaa1Div.style.display = 'none';
        accspcabelloa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'none';
        cintosa2Div.style.display = 'none';   
        bolsasa1Div.style.display = 'none';   
        perfumesa1Div.style.display = 'block';        
        lentesa1Div.style.display = 'none';        
        otrosa20Div.style.display = 'none'; 
    }
    else if (this.value === 'lentesa1') {
        joyeriaa1Div.style.display = 'none';
        accspcabelloa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'none';
        cintosa2Div.style.display = 'none';   
        bolsasa1Div.style.display = 'none';   
        perfumesa1Div.style.display = 'none';        
        lentesa1Div.style.display = 'block';        
        otrosa20Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa20') {
        joyeriaa1Div.style.display = 'none';
        accspcabelloa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'none';
        cintosa2Div.style.display = 'none';   
        bolsasa1Div.style.display = 'none';   
        perfumesa1Div.style.display = 'none';        
        lentesa1Div.style.display = 'none';        
        otrosa20Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        joyeriaa1Div.style.display = 'block';
        accspcabelloa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        gorrasa2Div.style.display = 'none';
        cintosa2Div.style.display = 'none';   
        bolsasa1Div.style.display = 'none';   
        perfumesa1Div.style.display = 'none';        
        lentesa1Div.style.display = 'none';        
        otrosa20Div.style.display = 'none'; 
    }
});

ocument.getElementById('categoriaa24').addEventListener('change', function() {
    const pulcerasa1Div = document.querySelector('.pulcerasa1');
    const aretesa1Div= document.querySelector('.aretesa1');
    const collaresa1Div= document.querySelector('.collaresa1');
    const anillosa1Div= document.querySelector('.anillosa1');
    const otrosa21Div= document.querySelector('.otrosa21');


    if (this.value === 'pulcerasa1') {
        pulcerasa1Div.style.display = 'block';
        aretesa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        collaresa1Div.style.display = 'none';
        anillosa1Div.style.display = 'none';        
        otrosa21Div.style.display = 'none'; 
    } 
    else if (this.value === 'aretesa1') {
        pulcerasa1Div.style.display = 'none';
        aretesa1Div.style.display = 'block';  // Asegúrate de ocultar la otra sección
        collaresa1Div.style.display = 'none';
        anillosa1Div.style.display = 'none';        
        otrosa21Div.style.display = 'none'; 
    }
    else if (this.value === 'collaresa1') {
        pulcerasa1Div.style.display = 'none';
        aretesa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        collaresa1Div.style.display = 'block';
        anillosa1Div.style.display = 'none';        
        otrosa21Div.style.display = 'none'; 
    }
    else if (this.value === 'anillosa1') {
        pulcerasa1Div.style.display = 'none';
        aretesa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        collaresa1Div.style.display = 'none';
        anillosa1Div.style.display = 'block';        
        otrosa21Div.style.display = 'none'; 
    }
    else if (this.value === 'otrosa21') {
        pulcerasa1Div.style.display = 'none';
        aretesa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        collaresa1Div.style.display = 'none';
        anillosa1Div.style.display = 'none';        
        otrosa21Div.style.display = 'block'; 
    }
    else if (this.value === 'elegir') {
        pulcerasa1Div.style.display = 'none';
        aretesa1Div.style.display = 'none';  // Asegúrate de ocultar la otra sección
        collaresa1Div.style.display = 'none';
        anillosa1Div.style.display = 'none';        
        otrosa21Div.style.display = 'none'; 
    }
});