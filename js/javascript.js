const API_KEY = "fda52d499834e26cef7f03be049e8c84";
const URL_BASE = "https://api.themoviedb.org/3";
const URL_IMAGEN = "https://image.tmdb.org/t/p/w500";
const URL_GENEROS = "https://api.themoviedb.org/3/genre/movie/list";

const btnPosterP1 = document.getElementById("post-p-1");
const btnPosterP2 = document.getElementById("post-p-2");
const btnPosterP3 = document.getElementById("post-p-3");
const btnPosterP4 = document.getElementById("post-p-4");
const btnPosterP5 = document.getElementById("post-p-5");
const btnPosterP6 = document.getElementById("post-p-6");
const btnPosterP7 = document.getElementById("post-p-7");
const btnPosterP8 = document.getElementById("post-p-8");
const btnPosterP9 = document.getElementById("post-p-9");
const btnPosterP10 = document.getElementById("post-p-10");

const btnPosterS1 = document.getElementById("post-s-1");
const btnPosterS2 = document.getElementById("post-s-2");
const btnPosterS3 = document.getElementById("post-s-3");
const btnPosterS4 = document.getElementById("post-s-4");
const btnPosterS5 = document.getElementById("post-s-5");
const btnPosterS6 = document.getElementById("post-s-6");
const btnPosterS7 = document.getElementById("post-s-7");
const btnPosterS8 = document.getElementById("post-s-8");
const btnPosterS9 = document.getElementById("post-s-9");
const btnPosterS10 = document.getElementById("post-s-10");

const btnPosterFav1 = document.getElementById("post-fav-1");
const btnPosterFav2 = document.getElementById("post-fav-2");
const btnPosterFav3 = document.getElementById("post-fav-3");
const btnPosterFav4 = document.getElementById("post-fav-4");
const btnPosterFav5 = document.getElementById("post-fav-5");
const btnPosterFav6 = document.getElementById("post-fav-6");
const btnPosterFav7 = document.getElementById("post-fav-7");
const btnPosterFav8 = document.getElementById("post-fav-8");

const inputBusqueda = document.getElementById("input-busqueda");
const resultadosBusqueda = document.getElementById("resultados-busqueda");

const selectGenero = document.getElementById("categoria");
const contenedorResultado = document.querySelector(".contenedor-pelicula");
const botonGenerarPelicula = document.getElementById("boton-obtener-pelicula");


const titulo = document.getElementById("titulo");
const tituloOriginal = document.getElementById("titulo-original");
const sinopsis = document.getElementById("sinopsis");
const duracion = document.getElementById("duracion");
const estreno = document.getElementById("fecha-estreno");
const generos = document.getElementById("generos");
const presupuesto = document.getElementById("presupuesto");
const recaudacion = document.getElementById("recaudacion");
const idioma = document.getElementById("idioma");
const puntuacionPelicula = document.getElementById("nota");
const posterGrande = document.getElementById("poster-img");


const tituloS = document.getElementById("tituloS");
const tituloOriginalS = document.getElementById("titulo-originalS");
const sinopsisS = document.getElementById("sinopsisS");
const duracionS = document.getElementById("duracionS");
const estrenoS = document.getElementById("fecha-estrenoS");
const generosS = document.getElementById("generosS");
const idiomaS = document.getElementById("idiomaS");
const nota = document.getElementById("notaS");
const posterGrandeS = document.getElementById("poster-imgS");


const trailer = document.getElementById("trailer");
const btnTrailer = document.getElementById("boton-trailer");



/**
 * @brief Carga posters de peliculas actuales en index.html
 * 
 * Carga los posters de películas del menú principal (index) y los habilita para al hacer click en ellos redirigir a su ficha técnica
 * 
 */
function cargarPeliculas() {

    fetch(URL_BASE + "/movie/popular?api_key=" + API_KEY + "&language=es-ES&page=1")

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (datos) {

            let contador = 1;

            for (let i = 0; i < datos.results.length && contador <= 10; i++) {

                if (datos.results[i].poster_path) {

                    let img = document.getElementById("post-p-" + contador);

                    if (img) {
                        img.src = URL_IMAGEN + datos.results[i].poster_path;
                        img.alt = datos.results[i].title;
                    }

                    contador++;
                }
            }

            if (btnPosterP1) {
                btnPosterP1.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[0].id, true);
                });
            }

            if (btnPosterP2) {
                btnPosterP2.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[1].id, true);
                });
            }

            if (btnPosterP3) {
                btnPosterP3.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[2].id, true);
                });
            }

            if (btnPosterP4) {
                btnPosterP4.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[3].id, true);
                });
            }

            if (btnPosterP5) {
                btnPosterP5.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[4].id, true);
                });
            }

            if (btnPosterP6) {
                btnPosterP6.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[5].id, true);
                });
            }

            if (btnPosterP7) {
                btnPosterP7.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[6].id, true);
                });
            }

            if (btnPosterP8) {
                btnPosterP8.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[7].id, true);
                });
            }

            if (btnPosterP9) {
                btnPosterP9.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[8].id, true);
                });
            }

            if (btnPosterP10) {
                btnPosterP10.addEventListener("click", function () {
                    cambiarPaginaPelicula(datos.results[9].id, true);
                });
            }

        })

        .catch(function (error) {
            console.log("Error cargando peliculas: ", error);
        });
}




/**
 * @brief Carga posters de series actuales en index.html
 * 
 * Carga los posters de series del menú principal (index), y como con los de películas, los habilita como botones para su respectiva ficha téncinca
 */
function cargarSeries() {

    fetch(URL_BASE+"/tv/popular?api_key="+API_KEY+"&language=es-ES&page=1")

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (datos) {

            let contador = 1;

            for (let i = 0; i < datos.results.length && contador <= 10; i++) {

                if (datos.results[i].poster_path != null) {

                    let img = document.getElementById("post-s-" + contador);

                    if (img) {
                        img.src = URL_IMAGEN + datos.results[i].poster_path;
                        img.alt = datos.results[i].name;
                    }

                    contador++;
                }
            }

            if (btnPosterS1) {
                btnPosterS1.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[0].id, true);
                });
            }

            if (btnPosterS2) {
                btnPosterS2.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[1].id, true);
                });
            }

            if (btnPosterS3) {
                btnPosterS3.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[2].id, true);
                });
            }

            if (btnPosterS4) {
                btnPosterS4.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[3].id, true);
                });
            }

            if (btnPosterS5) {
                btnPosterS5.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[4].id, true);
                });
            }

            if (btnPosterS6) {
                btnPosterS6.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[5].id, true);
                });
            }

            if (btnPosterS7) {
                btnPosterS7.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[6].id, true);
                });
            }

            if (btnPosterS8) {
                btnPosterS8.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[7].id, true);
                });
            }

            if (btnPosterS9) {
                btnPosterS9.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[8].id, true);
                });
            }

            if (btnPosterS10) {
                btnPosterS10.addEventListener("click", function () {
                    cambiarPaginaSerie(datos.results[9].id, true);
                });
            }

            

        })

        .catch(function (error) {
            console.log("Error cargando series:", error);
        });
}

/**
 * @brief Cambia la URL a la ficha de la pelicula (info-pelicula.html)
 * 
 * Cambia la URL de la pagina donde esté a la ficha técnica de la película, añadiendo un parámetro a la URL que es el codigo de la película para que las funciones del DOM puedan sacarlo y usarlo
 * 
 * 
 * @param {*} codigo Es el id de la película
 * @param {*} principal Un boolean que expresa si esta funcion se llama desde el index u otra página (ya que por la estructura de carpetas necesita un indicador de a donde redirigir)
 */
function cambiarPaginaPelicula(codigo, principal) {
    if (principal) {
    window.location.href = "paginas/info-pelicula.html?id=" + codigo;
    } else {
    window.location.href = "info-pelicula.html?id=" + codigo; 
    }
}
/**
 * @brief Cambia la URL a la ficha tecnica de la serie (info-serie.html)
 * 
 * @param {*} codigo Id de la serie
 * @param {*} principal Si se llama desde index.html o desde un html dentro de /paginas
 */
function cambiarPaginaSerie(codigo, principal) {
    if (principal) {
    window.location.href = "paginas/info-serie.html?id=" + codigo;
    } else {
    window.location.href = "info-serie.html?id=" + codigo; 
    }
}

function cambiarPaginaTrailer(codigo) {
    window.location.href = "trailer.html?id=" + codigo;
}



/**
 * @brief Carga los posters de sobremi.html
 * 
 * Carga los posters de las películas de la pagina "sobremi.html" con sus ids especificos y los habilita como botones para sus fichas técnicas
 */
function cargarPeliculasFavoritas() {

    let peliculasFavoritas = [1891, 329, 807, 637, 414906, 940721, 948];

    for (let i = 0; i < peliculasFavoritas.length; i++) {

        fetch(URL_BASE + "/movie/" + peliculasFavoritas[i] + "?api_key=" + API_KEY + "&language=es-ES")

            .then(function (respuesta) {
                return respuesta.json();
            })

            .then(function (datosFavorita) {

                let imgFav = document.getElementById("post-fav-" + (i + 1));

                if (imgFav && datosFavorita.poster_path) {
                    imgFav.src = URL_IMAGEN + datosFavorita.poster_path;
                    imgFav.alt = datosFavorita.title;
                }

            })

            .catch(function (error) {
                console.log("Error cargando pelicula favorita: ", error);
            });
            
    }

    if (btnPosterFav1) {
    btnPosterFav1.addEventListener("click", function () {
        cambiarPaginaPelicula(peliculasFavoritas[0], false);
        });
    }

    if (btnPosterFav2) {
        btnPosterFav2.addEventListener("click", function () {
            cambiarPaginaPelicula(peliculasFavoritas[1], false);
        });
    }

    if (btnPosterFav3) {
        btnPosterFav3.addEventListener("click", function () {
            cambiarPaginaPelicula(peliculasFavoritas[2], false);
        });
    }

    if (btnPosterFav4) {
        btnPosterFav4.addEventListener("click", function () {
            cambiarPaginaPelicula(peliculasFavoritas[3], false);
        });
    }

    if (btnPosterFav5) {
        btnPosterFav5.addEventListener("click", function () {
            cambiarPaginaPelicula(peliculasFavoritas[4], false);
        });
    }

    if (btnPosterFav6) {
        btnPosterFav6.addEventListener("click", function () {
            cambiarPaginaPelicula(peliculasFavoritas[5], false);
        });
    }

    if (btnPosterFav7) {
        btnPosterFav7.addEventListener("click", function () {
            cambiarPaginaPelicula(peliculasFavoritas[6], false);
        });
    }

}

/**
 * @brief Carga la info de la película en info-pelicula.html
 * 
 * Esta funcion está en el DOM por lo que esta siempre activa, y trabaja con el codigo que le llega (*1 para mas detalles)
 * 
 * Con el codigo de la película, Añade los datos que llegan por la api al contenedor, a modo de ficha tecnica de la película
 * 
 * @param {*} codigo Id de la película
 */
function cargarInfoPelicula(codigo) {

    fetch(URL_BASE + "/movie/" + codigo + "?api_key=" + API_KEY + "&language=es-ES")

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (datos) {

            if (titulo) {
                titulo.textContent = datos.title;
            }

            if (tituloOriginal) {
                tituloOriginal.textContent = datos.original_title;
            }

            if (sinopsis) {
                sinopsis.textContent = datos.overview;
            }

            if (posterGrande) {
                posterGrande.src = URL_IMAGEN + datos.poster_path;
                posterGrande.alt = datos.title;
            }

            if (duracion) {
                duracion.innerHTML ="<b>Duración:</b> " +datos.runtime + " min";
            }

            if (estreno) {
                estreno.innerHTML = "<b>Fecha de estreno:</b> " + datos.release_date;
            }


            if (generos) {
                let textoGeneros = "";
                for (let i = 0; i < datos.genres.length; i++) {
                    textoGeneros += datos.genres[i].name;
                    if (i < datos.genres.length - 1) {
                        textoGeneros += ", ";
                    }
                }
                generos.innerHTML = "<b>Géneros:</b> " + textoGeneros;
            }

            if (presupuesto) {
                if (datos.budget > 0) {
                    presupuesto.innerHTML = "<b>Presupuesto:</b> " + datos.budget.toLocaleString() + " €";
                } else {
                    presupuesto.innerHTML = "<b>Presupuesto:</b> " +"No disponible";
                }
            }

            if (recaudacion) {
                if (datos.revenue > 0) {
                    recaudacion.innerHTML ="<b>Recaudacion:</b> " + datos.revenue.toLocaleString() + " €";
                } else {
                    recaudacion.innerHTML ="<b>Recaudacion:</b> " +"No disponible";
                }
            }

            if (idioma) {
                idioma.innerHTML ="<b>Idioma original:</b> " +datos.original_language;
            }

            if (puntuacionPelicula) {
                puntuacionPelicula.textContent = datos.vote_average;
                if (datos.vote_average === 0) {
                    puntuacionPelicula.textContent = "N/A";
                }
            }

            if (btnTrailer) {
                btnTrailer.addEventListener("click", function () {
                    cambiarPaginaTrailer(codigo, true);
                });
            }



        })

        .catch(function (error) {
            console.log("Error cargando la pelicula:", error);
        });
}

/**
 * @brief Carga la info de la serie en info-serie.html
 * 
 * Practicamente igual que el de películas pero los hice en funciones diferentes ya que requieren de endpoints diferentes, además de que sus respectivos datos no se llaman igual (ej: titulo es en uno title y en otro name)
 * 
 * @param {*} codigo Id de la serie
 */
function cargarInfoSerie(codigo) {

    fetch(URL_BASE + "/tv/" + codigo + "?api_key=" + API_KEY + "&language=es-ES")
        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (datos) {

            if (tituloS) {
                tituloS.textContent = datos.name;
            }

            if (tituloOriginalS) {
                tituloOriginalS.textContent = datos.original_name;
            }

            if (sinopsisS) {
                sinopsisS.textContent = datos.overview;
            }

            if (posterGrandeS) {
                posterGrandeS.src = URL_IMAGEN + datos.poster_path;
                posterGrandeS.alt = datos.name;
            }

            if (duracionS) {
                if (datos.episode_run_time && datos.episode_run_time.length > 0) {
                    duracionS.innerHTML = "<b>Duración:</b> " + datos.episode_run_time[0] + " min";
                } else {
                    duracionS.innerHTML = "<b>Duración:</b> No disponible";
                }
            }

            if (estrenoS) {
                estrenoS.innerHTML = "<b>Fecha de estreno:</b> " + datos.first_air_date;
            }

            if (generosS) {
                let textoGeneros = "";
                for (let i = 0; i < datos.genres.length; i++) {
                    textoGeneros += datos.genres[i].name;
                    if (i < datos.genres.length - 1) {
                        textoGeneros += ", ";
                    }
                }
                generosS.innerHTML = "<b>Géneros:</b> " + textoGeneros;
            }
            if (idiomaS) {
                idiomaS.innerHTML = "<b>Idioma original:</b> " + datos.original_language;
            }

            if (notaS) {
                notaS.textContent = datos.vote_average;
                if (datos.vote_average === 0) {
                    notaS.textContent = "N/A"
                }
            }
        })

        .catch(function (error) {
            console.log("Error cargando la serie:", error);
        });
}

/**
 * @brief Carga el trailer en el iframe de trailer.html
 * 
 * Hace el fetch para el trailer (que te devuelve la direccion de un video de youtube en base al id de la pelicula en la api)
 * 
 * Filtra entre los resultados, que sea un trailer y que esté en youtube, para luego ponerle de src al iframe el embebido de youtube con la url que esta asociada a el id de la pelicula
 * 
 * Si la pelicula no tiene trailer en la api, saltara un mensaje de error.
 * 
 * @param {*} codigo Codigo de la película
 */
function cargarTrailer(codigo) {

    fetch("https://api.themoviedb.org/3/movie/"+ codigo + "/videos?api_key=" + API_KEY)
        .then(function (respuesta) {
            return respuesta.json();
        })

    .then(function (datos) {

        if (datos.results.length > 0) {
            const video = datos.results.find(v => v.type === "Trailer" && v.site === "YouTube"); //Filtra los resultados del fetch que sean trailers y esten en yt
            
            if (video) {
                trailer.src = "https://www.youtube.com/embed/" + video.key;
            }
        } else {
            trailer.src = "";
                alert("No hay trailer de esta película");
        }
    });
}

/**
 * @brief Activa y controla el input de busqueda de index.html
 * 
 * Con un evento input, cada vez que se escribe en la barra de busqueda, le quita los espacios al texto y llama a la funcion que busca el contenido en la api
 * 
 * El evento click detecta donde ha sido el ultimo click para que si es fuera de la caja de busqueda, quita las opciones de busqueda 
 * 
 */
function activarBarraBusqueda() {

    if (inputBusqueda) {
        inputBusqueda.addEventListener("input", function () {
            let texto = inputBusqueda.value.trim();  //Quita los espacios
            buscarContenido(texto);
        });
    }

    document.addEventListener("click", function (evento) {
        let cajaBusqueda = document.querySelector(".cuadro-busqueda");

        if (cajaBusqueda && !cajaBusqueda.contains(evento.target)) {
            if (resultadosBusqueda) {
                resultadosBusqueda.style.display = "none";
            }
        }
    });
}

/**
 * @brief Busca el texto en la api (index.html)
 * 
 * Con el texto del input, hace un fetch para buscar similitudes en un apartado especifico de la api para la busqueda
 * 
 * @param {*} texto texto escrito en la barra de busqueda
 */
function buscarContenido(texto) {

    fetch(URL_BASE + "/search/multi?api_key=" + API_KEY + "&language=es-ES&query=" + encodeURIComponent(texto)) //codifica el texto para ser apropiado para la url

        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (datos) {
            mostrarResultadosBusqueda(datos.results);
        })

        .catch(function (error) {
            console.log("Error en la búsqueda:", error);
        });
}


/**
 * @brief Muestra los resultados similares a lo que has escrito
 * 
 * Filtra el contenido entre peliiculas y series y en base a las coincidencias de la busqueda crea un slice (de hasta 5) en el display "resultados de busqueda".
 * 
 * Al hacer click en una de los resultados de busqueda, redirige a la ficha tecnica, diferenciando si es pelicula o serie.
 * 
 * 
 * @param {*} resultados Los resultados de la busqueda en el input
 */
function mostrarResultadosBusqueda(resultados) {

    resultadosBusqueda.innerHTML = "";

    let resultadosValidos = resultados.filter(item => item.media_type === "movie" || item.media_type === "tv"); //filtra entre pelicula o serie
    resultadosValidos = resultadosValidos.slice(0, 5);

    resultadosBusqueda.style.display = resultadosValidos.length ? "block" : "none"; //Si exsisten resultados, se pone el estilo block

    resultadosValidos.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("resultado-item");

        if (item.media_type === "movie") {
            div.textContent = item.title;
            div.addEventListener("click", function () {
                cambiarPaginaPelicula(item.id, true);
            });
        }

        if (item.media_type === "tv") {
            div.textContent = item.name;
            div.addEventListener("click", function () {
                cambiarPaginaSerie(item.id, true);
            });
        }

        resultadosBusqueda.appendChild(div);
    });
}



/**
 * @brief Carga en el select de recomendacion.html los generos de peliculas
 * 
 * Bastante similar al proyecto de Chuck Norris, carga en el select de "recomendacion.html" los distintos géneros de películas
 * 
 */
function cargarGeneros() {

    fetch(URL_GENEROS + "?api_key=" + API_KEY + "&language=es-ES")
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            selectGenero.innerHTML = "";

            datos.genres.forEach(function (genero) {
                const opcion = document.createElement("option");
                opcion.value = genero.id;
                opcion.textContent = genero.name;
                selectGenero.appendChild(opcion);
            });
        })
        .catch(function (error) {
            console.log("Error cargando géneros:", error);
        });
}

/**
 * @brief Carga la pelicula seleccionada (recomendacion.html)
 * 
 * En base al género seleccionado en el select de "recomendacion.html", busca aleatoriamente una película (filtra las películas que SI tengan poster) y carga su Titulo , poster y un botoón para ver detalles de la película, que redirige a su ficha técnica
 * 
 * 
 * @param {*} idGenero El genero de película seleccionado en el select
 */
function cargarPeliculaPorGenero(idGenero) {

    fetch(URL_BASE + "/discover/movie?api_key=" + API_KEY + "&language=es-ES&with_genres=" + idGenero)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {

            const peliculas = datos.results;

            const peliculasConPoster = peliculas.filter(pelicula => pelicula.poster_path);

            const posicionAleatoria = Math.floor(Math.random() * peliculasConPoster.length);
            const pelicula = peliculasConPoster[posicionAleatoria];

            contenedorResultado.innerHTML = `<div class="recuadro-recomendacion">
                                            <h3 class="titulo-recomendacion" >${pelicula.title}</h3>
                                            <img class="poster-recomendacion" src="${URL_IMAGEN + pelicula.poster_path}" alt="${pelicula.title}">
                                            </div>
                                            <button class="boton-detalles-recomendacion" id="ver-detalles">Ver detalles</button>`;

            const botonVerDetalles = document.getElementById("ver-detalles");

            botonVerDetalles.addEventListener("click", function () {
                cambiarPaginaPelicula(pelicula.id, false);
            });

        })
        .catch(function (error) {
            console.log("Error cargando película:", error);
        });
}



document.addEventListener("DOMContentLoaded", function () {

    cargarPeliculas();
    cargarSeries();
    cargarPeliculasFavoritas();

    if (inputBusqueda) {
        activarBarraBusqueda();
    }

    let parametros = new URLSearchParams(window.location.search); 
    let codigo = parametros.get("id"); //*1 Dentro de la url, busca un parámetro que sea "id", que luego servirá como parametro para la función del

    if (codigo) {
        cargarInfoPelicula(codigo);
        cargarInfoSerie(codigo);
        cargarTrailer(codigo);
    }

    if (selectGenero && botonGenerarPelicula) {
        cargarGeneros();

        botonGenerarPelicula.addEventListener("click", function () {
            const idGenero = selectGenero.value;
            cargarPeliculaPorGenero(idGenero);
        });
    }

});
