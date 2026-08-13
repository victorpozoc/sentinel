/* =========================================
   SENTINEL
   Dashboard principal
   AIIM Nova
========================================= */


/* =========================================
   ESTADO DE LA APLICACIÓN
========================================= */

const dashboardState = {

    currentView: "resumen",

    /*
     * Historial de navegación.
     *
     * Cada elemento representa una vista
     * que el usuario ha visitado.
     */

    navigationHistory: [],

    user: {

        username: "admin",

        role: "Administrador"

    }

};


/* =========================================
   DATOS SIMULADOS
   -----------------------------------------
   Estos datos serán reemplazados
   posteriormente por la API.
========================================= */

const sentinelData = {

    activos: [

        {
            id: "A001",
            nombre: "Tanque 01",
            tipo: "Reservorio",
            ubicacion: "Planta A",
            estado: "operativo"
        },

        {
            id: "A002",
            nombre: "Bomba 01",
            tipo: "Bomba",
            ubicacion: "Planta A",
            estado: "operativo"
        },

        {
            id: "A003",
            nombre: "Bomba 02",
            tipo: "Bomba",
            ubicacion: "Planta A",
            estado: "offline"
        },

        {
            id: "A004",
            nombre: "Tanque 02",
            tipo: "Reservorio",
            ubicacion: "Planta B",
            estado: "operativo"
        },

        {
            id: "A005",
            nombre: "Sensor 01",
            tipo: "Sensor",
            ubicacion: "Planta B",
            estado: "operativo"
        }

    ],


    /*variables: [

        {
            id: "V001",
            nombre: "Nivel",
            activo: "Tanque 01",
            valor: 4.82,
            unidad: "m",
            estado: "normal"
        },

        {
            id: "V002",
            nombre: "Temperatura",
            activo: "Tanque 01",
            valor: 27.4,
            unidad: "°C",
            estado: "normal"
        },

        {
            id: "V003",
            nombre: "Presión",
            activo: "Bomba 01",
            valor: 5.2,
            unidad: "bar",
            estado: "alerta"
        },

        {
            id: "V004",
            nombre: "Caudal",
            activo: "Bomba 01",
            valor: 38,
            unidad: "L/min",
            estado: "normal"
        },

        {
            id: "V005",
            nombre: "Nivel",
            activo: "Tanque 02",
            valor: 2.31,
            unidad: "m",
            estado: "normal"
        },

        {
            id: "V006",
            nombre: "Temperatura",
            activo: "Tanque 02",
            valor: 25.8,
            unidad: "°C",
            estado: "normal"
        }

    ],*/

    variables: [

        {
            id: "V001",

            nombre: "Nivel",

            activo: "Tanque 01",

            valor: 4.82,

            unidad: "m",

            estado: "normal",

            minimo: 1.00,

            maximo: 5.00,

            ultimaActualizacion:
                "2026-08-13 09:30",

            historico: [

                {
                    timestamp:
                        "2026-08-13T04:00:00",
                    valor: 4.20
                },

                {
                    timestamp:
                        "2026-08-13T05:00:00",
                    valor: 4.32
                },

                {
                    timestamp:
                        "2026-08-13T06:00:00",
                    valor: 4.40
                },

                {
                    timestamp:
                        "2026-08-13T07:00:00",
                    valor: 4.51
                },

                {
                    timestamp:
                        "2026-08-13T08:00:00",
                    valor: 4.68
                },

                {
                    timestamp:
                        "2026-08-13T09:00:00",
                    valor: 4.82
                }

            ]

        },

    ],


    alertas: [

        {
            id: "AL001",
            tipo: "warning",
            variable: "Presión",
            activo: "Bomba 01",
            valor: "5.2 bar",
            hora: "21:42"
        },

        {
            id: "AL002",
            tipo: "critical",
            variable: "Comunicación",
            activo: "Bomba 02",
            valor: "Offline",
            hora: "21:38"
        },

        {
            id: "AL003",
            tipo: "warning",
            variable: "Nivel",
            activo: "Tanque 01",
            valor: "5.41 m",
            hora: "21:20"
        }

    ],


    eventos: [

        {
            hora: "21:43",
            activo: "Tanque 01",
            evento: "Nivel actualizado"
        },

        {
            hora: "21:42",
            activo: "Bomba 01",
            evento: "Presión fuera de rango"
        },

        {
            hora: "21:40",
            activo: "Sensor 01",
            evento: "Lectura recibida"
        },

        {
            hora: "21:38",
            activo: "Bomba 02",
            evento: "Pérdida de comunicación"
        },

        {
            hora: "21:25",
            activo: "Tanque 02",
            evento: "Nivel actualizado"
        }

    ]

};


/* =========================================
   ELEMENTOS DEL DOM
========================================= */

const menuItems =
    document.querySelectorAll(
        ".menu-item[data-view]"
    );


const dashboardViews =
    document.querySelectorAll(
        ".dashboard-view"
    );


const pageTitle =
    document.getElementById(
        "page-title"
    );


const pageDescription =
    document.getElementById(
        "page-description"
    );


const userName =
    document.getElementById(
        "user-name"
    );


const userRole =
    document.getElementById(
        "user-role"
    );


const logoutButton =
    document.getElementById(
        "logout-button"
    );

const detailView =
    document.getElementById(
        "view-detalle"
    );


const detailType =
    document.getElementById(
        "detail-type"
    );


const detailTitle =
    document.getElementById(
        "detail-title"
    );


const detailSubtitle =
    document.getElementById(
        "detail-subtitle"
    );


const detailContent =
    document.getElementById(
        "detail-content"
    );


const detailBackButton =
    document.getElementById(
        "detail-back-button"
    );

/*----------------HISTORICO-------------- */
const historicoView =
    document.getElementById("view-historico");

const historicoBackButton =
    document.getElementById("historico-back-button");

const historicoType =
    document.getElementById("historico-type");

const historicoTitle =
    document.getElementById("historico-title");

const historicoSubtitle =
    document.getElementById("historico-subtitle");

const historicoSummary =
    document.getElementById("historico-summary");

const historicoChartContainer =
    document.getElementById("historico-chart-container");

const historicoTooltip =
    document.getElementById("historico-tooltip");

const historicoHourMode =
    document.getElementById("historico-hour-mode");

const historicoHourValue =
    document.getElementById("historico-hour-value");

const historicoHourRange =
    document.getElementById("historico-hour-range");

const historicoHourStart =
    document.getElementById("historico-hour-start");

const historicoHourEnd =
    document.getElementById("historico-hour-end");

const historicoHourClear =
    document.getElementById("historico-hour-clear");

/* =========================================
   CONFIGURACIÓN DE VISTAS
========================================= */

const viewConfig = {

    resumen: {

        title: "Resumen",

        description:
            "Estado general de la infraestructura"

    },


    activos: {

        title: "Activos",

        description:
            "Infraestructura registrada en SENTINEL"

    },


    variables: {

        title: "Variables",

        description:
            "Variables supervisadas actualmente"

    },


    alertas: {

        title: "Alertas",

        description:
            "Eventos que requieren atención"

    },


    eventos: {

        title: "Eventos",

        description:
            "Historial de actividad de SENTINEL"

    }

};


/* =========================================
   NAVEGACIÓN
========================================= */

menuItems.forEach(function(menuItem) {

    menuItem.addEventListener(
        "click",
        function() {

            const view =
                menuItem.dataset.view;

            changeView(view);

        }
    );

});


/* =========================================
   CAMBIAR VISTA
========================================= */

function changeView(view) {

    if (!viewConfig[view]) {

        return;

    }


    /*
     * Si estamos cambiando realmente
     * de vista, agregamos la vista actual
     * al historial.
     */

    if (
        dashboardState.currentView !== view
    ) {

        dashboardState.navigationHistory.push(
            dashboardState.currentView
        );

    }


    dashboardState.currentView =
        view;


    /*
     * Ocultar todas las vistas.
     */

    dashboardViews.forEach(
        function(dashboardView) {

            dashboardView.classList.remove(
                "active"
            );

        }
    );


    /*
     * Mostrar la vista seleccionada.
     */

    const selectedView =
        document.getElementById(
            `view-${view}`
        );


    if (selectedView) {

        selectedView.classList.add(
            "active"
        );

    }


    /*
     * Actualizar menú.
     */

    menuItems.forEach(
        function(menuItem) {

            menuItem.classList.remove(
                "active"
            );


            if (
                menuItem.dataset.view === view
            ) {

                menuItem.classList.add(
                    "active"
                );

            }

        }
    );


    /*
     * Actualizar encabezado.
     */

    pageTitle.textContent =
        viewConfig[view].title;


    pageDescription.textContent =
        viewConfig[view].description;


    /*
     * Renderizar contenido.
     */

    switch (view) {

        case "resumen":

            renderResumen();

            break;


        case "activos":

            renderActivos();

            break;


        case "variables":

            renderVariables();

            break;


        case "alertas":

            renderAlertas();

            break;


        case "eventos":

            renderEventos();

            break;

    }

}


/* =========================================
   RESUMEN
========================================= */

function renderResumen() {

    const totalAssets =
        sentinelData.activos.length;


    const operationalAssets =
        sentinelData.activos.filter(
            function(asset) {

                return asset.estado === "operativo";

            }
        ).length;


    const offlineAssets =
        sentinelData.activos.filter(
            function(asset) {

                return asset.estado === "offline";

            }
        ).length;


    const totalAlerts =
        sentinelData.alertas.length;


    const criticalAlerts =
        sentinelData.alertas.filter(
            function(alert) {

                return alert.tipo === "critical";

            }
        ).length;


    document.getElementById(
        "total-assets"
    ).textContent =
        totalAssets;


    document.getElementById(
        "operational-assets"
    ).textContent =
        operationalAssets;


    document.getElementById(
        "offline-assets"
    ).textContent =
        offlineAssets;


    document.getElementById(
        "total-alerts"
    ).textContent =
        totalAlerts;


    document.getElementById(
        "critical-alerts"
    ).textContent =
        criticalAlerts;


    document.getElementById(
        "last-update"
    ).textContent =
        "21:43";

}


/* =========================================
   ACTIVOS
========================================= */

function renderActivos() {

    const container =
        document.getElementById(
            "assets-container"
        );


    container.innerHTML = "";


    sentinelData.activos.forEach(
        function(asset) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "asset-card";


            const statusClass =
                asset.estado === "operativo"
                    ? "status-normal"
                    : "status-offline";


            card.innerHTML = `

                <div class="asset-header">

                    <span class="asset-type">
                        ${asset.tipo}
                    </span>

                    <span class="asset-id">
                        ${asset.id}
                    </span>

                </div>


                <div class="asset-name">
                    ${asset.nombre}
                </div>


                <div class="asset-location">
                    ${asset.ubicacion}
                </div>


                <div class="asset-status ${statusClass}">

                    ●

                    ${asset.estado}

                </div>

            `;


            container.appendChild(card);

            card.addEventListener(
                "click",
                function() {

                    openAssetDetail(
                        asset.id
                    );

                }
            );

        }
    );

}


/* =========================================
   VARIABLES
========================================= */

function renderVariables() {

    const container =
        document.getElementById(
            "variables-container"
        );


    container.innerHTML = "";


    sentinelData.variables.forEach(
        function(variable) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "variable-card";


            let statusClass =
                "status-normal";


            if (
                variable.estado === "alerta"
            ) {

                statusClass =
                    "status-warning";

            }


            if (
                variable.estado === "critico"
            ) {

                statusClass =
                    "status-critical";

            }


            card.innerHTML = `

                <div class="variable-header">

                    <span class="variable-name">
                        ${variable.nombre}
                    </span>

                    <span class="variable-id">
                        ${variable.id}
                    </span>

                </div>


                <div class="variable-value">

                    ${variable.valor}

                    ${variable.unidad}

                </div>


                <div class="variable-asset">

                    ${variable.activo}

                </div>


                <div
                    class="variable-status ${statusClass}"
                >

                    ● ${variable.estado}

                </div>

            `;


            container.appendChild(card);

            card.addEventListener(
                "click",
                function() {

                    openVariableDetail(
                        variable.id
                    );

                }
            );

        }
    );

}

function renderVariableHistory(variable, range = "1h") {

    const chart =
        document.getElementById(
            "variable-history-chart"
        );


    if (!chart) {

        return;

    }


    chart.innerHTML = `

        <div class="detail-card-description">
            Cargando histórico...
        </div>

    `;


    historicoService.obtener(
        variable.id,
        range
    ).then(function(history) {

        /*
         * Evita pintar una respuesta
         * "vieja" si el usuario ya salió
         * de esta vista o cambió de variable
         * antes de que la promesa resolviera.
         */

        if (
            dashboardState.currentView !==
            `variable:${variable.id}`
        ) {

            return;

        }


        if (history.length === 0) {

            chart.innerHTML = `

                <div class="detail-card-description">
                    No existen datos históricos.
                </div>

            `;

            return;

        }


        const values =
            history.map(function(item) {

                return item.valor;

            });


        const minimum = Math.min(...values);

        const maximum = Math.max(...values);


        chart.innerHTML = `

            <div class="history-summary">

                <div>
                    <span>Mínimo</span>
                    <strong>
                        ${minimum} ${variable.unidad}
                    </strong>
                </div>

                <div>
                    <span>Máximo</span>
                    <strong>
                        ${maximum} ${variable.unidad}
                    </strong>
                </div>

                <div>
                    <span>Registros</span>
                    <strong>${history.length}</strong>
                </div>

            </div>

            <div class="history-chart-svg">
                ${buildSparkline(
                    history,
                    minimum,
                    maximum,
                    variable.unidad
                )}
            </div>

        `;

    }).catch(function(error) {

        console.error(
            "Error al obtener histórico:",
            error
        );

        chart.innerHTML = `

            <div class="detail-card-description">
                No se pudo cargar el histórico.
            </div>

        `;

    });

}


function buildSparkline(
    history,
    minimum,
    maximum,
    unit
) {

    const width = 700;
    const height = 220;

    const paddingLeft = 55;
    const paddingRight = 15;
    const paddingTop = 20;
    const paddingBottom = 35;

    const chartWidth =
        width -
        paddingLeft -
        paddingRight;

    const chartHeight =
        height -
        paddingTop -
        paddingBottom;

    const range =
        (maximum - minimum) || 1;


    /*
     * ================================
     * PUNTOS DE LA GRÁFICA
     * ================================
     */

    const stepX =
        chartWidth /
        (history.length - 1 || 1);


    const points =
        history.map(function(item, index) {

            const x =
                paddingLeft +
                index * stepX;


            const y =
                paddingTop +
                chartHeight -
                (
                    (item.valor - minimum) /
                    range
                ) *
                chartHeight;


            return {
                x: x,
                y: y
            };

        });


    const polylinePoints =
        points
            .map(function(point) {

                return `${point.x},${point.y}`;

            })
            .join(" ");


    /*
     * ================================
     * ETIQUETAS DEL EJE Y
     * ================================
     */

    const yLabels = 4;

    let yAxisHTML = "";

    for (
        let i = 0;
        i <= yLabels;
        i++
    ) {

        const ratio =
            i / yLabels;


        const value =
            maximum -
            ratio * range;


        const y =
            paddingTop +
            ratio * chartHeight;


        yAxisHTML += `

            <line
                x1="${paddingLeft}"
                y1="${y}"
                x2="${width - paddingRight}"
                y2="${y}"
                class="chart-grid-line"
            />

            <text
                x="${paddingLeft - 8}"
                y="${y + 4}"
                text-anchor="end"
                class="chart-axis-label"
            >
                ${value.toFixed(2)}
            </text>

        `;

    }


    /*
     * ================================
     * ETIQUETAS DEL EJE X
     * ================================
     */

    let xAxisHTML = "";

    const labelCount =
        Math.min(4, history.length);


    for (
        let i = 0;
        i < labelCount;
        i++
    ) {

        const index =
            Math.round(
                (
                    i /
                    (labelCount - 1 || 1)
                ) *
                (history.length - 1)
            );


        const point =
            points[index];


        const date =
            new Date(
                history[index].timestamp
            );


        const timeLabel =
            date.toLocaleTimeString(
                "es-PE",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        xAxisHTML += `

            <text
                x="${point.x}"
                y="${height - 10}"
                text-anchor="middle"
                class="chart-axis-label"
            >
                ${timeLabel}
            </text>

        `;

    }


    /*
     * ================================
     * GRÁFICA
     * ================================
     */

    return `

        <svg
            viewBox="0 0 ${width} ${height}"
            preserveAspectRatio="xMidYMid meet""
            class="sparkline"
        >

            <!-- EJE Y -->

            ${yAxisHTML}


            <!-- EJE X -->

            <line
                x1="${paddingLeft}"
                y1="${paddingTop + chartHeight}"
                x2="${width - paddingRight}"
                y2="${paddingTop + chartHeight}"
                class="chart-axis-line"
            />


            <!-- LÍNEA -->

            <polyline
                points="${polylinePoints}"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            />


            <!-- ETIQUETAS X -->

            ${xAxisHTML}


            <!-- UNIDAD -->
            <!--
            <text
                x="10"
                y="15"
                class="chart-unit-label"
            >
                ${unit}
            </text>
            -->

        </svg>

    `;

}

/* =========================================
   ALERTAS
========================================= */

function renderAlertas() {

    const container =
        document.getElementById(
            "alerts-container"
        );


    container.innerHTML = "";


    sentinelData.alertas.forEach(
        function(alert) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "alert-item";


            const severityClass =
                alert.tipo === "critical"
                    ? "status-critical"
                    : "status-warning";


            const severityText =
                alert.tipo === "critical"
                    ? "Crítica"
                    : "Advertencia";


            item.innerHTML = `

                <span
                    class="alert-severity ${severityClass}"
                >

                    ${severityText}

                </span>


                <span class="alert-variable">

                    ${alert.variable}

                    · ${alert.valor}

                </span>


                <span class="alert-asset">

                    ${alert.activo}

                </span>


                <span class="alert-time">

                    ${alert.hora}

                </span>

            `;


            container.appendChild(item);

        }
    );

}


/* =========================================
   EVENTOS
========================================= */

function renderEventos() {

    const container =
        document.getElementById(
            "events-container"
        );


    container.innerHTML = "";


    sentinelData.eventos.forEach(
        function(event) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "event-item";


            item.innerHTML = `

                <span class="event-time">

                    ${event.hora}

                </span>


                <span class="event-asset">

                    ${event.activo}

                </span>


                <span class="event-description">

                    ${event.evento}

                </span>

            `;


            container.appendChild(item);

        }
    );

}


/* =========================================
   USUARIO
========================================= */

function loadUser() {

    userName.textContent =
        dashboardState.user.username;


    userRole.textContent =
        dashboardState.user.role;

}


/* =========================================
   CERRAR SESIÓN
========================================= */

logoutButton.addEventListener(
    "click",
    function() {

        const confirmLogout =
            confirm(
                "¿Desea cerrar la sesión?"
            );


        if (!confirmLogout) {

            return;

        }


        /*
         * Temporalmente volvemos
         * al login.
         *
         * Posteriormente aquí
         * destruiremos la sesión.
         */

        window.location.href =
            "index.html";

    }
);

/**/

function openAssetDetail(
    assetId,
    addToHistory = true
) {

    const asset =
        sentinelData.activos.find(
            function(item) {

                return item.id === assetId;

            }
        );


    if (!asset) {

        return;

    }


    /*
     * Buscar las variables relacionadas
     * con este activo.
     */

    const assetVariables =
        sentinelData.variables.filter(
            function(variable) {

                return variable.activo === asset.nombre;

            }
        );


    detailType.textContent =
        "Activo";


    detailTitle.textContent =
        asset.nombre;


    detailSubtitle.textContent =
        asset.tipo;


    /*
     * Construcción de variables
     */

    let variablesHTML = "";


    if (assetVariables.length === 0) {

        variablesHTML = `

            <div class="detail-card-description">

                No hay variables asociadas
                a este activo.

            </div>

        `;

    } else {

        assetVariables.forEach(
            function(variable) {

                const statusClass =
                    variable.estado === "normal"
                        ? "status-normal"
                        : "status-warning";


                variablesHTML += `

                    <div
                        class="detail-variable-row"
                        data-variable-id="${variable.id}"
                    >

                        <div>

                            <span class="detail-variable-name">

                                ${variable.nombre}

                            </span>

                            <span class="detail-variable-id">

                                ${variable.id}

                            </span>

                        </div>


                        <div class="detail-variable-current">

                            ${variable.valor}

                            ${variable.unidad}

                        </div>


                        <div
                            class="
                                detail-variable-status
                                ${statusClass}
                            "
                        >

                            ● ${variable.estado.toUpperCase()}

                        </div>

                    </div>

                `;

            }
        );

    }


    /*
     * Construcción del detalle
     */

    detailContent.innerHTML = `

        <!-- ESTADO -->

        <div class="detail-card">

            <div class="detail-card-title">

                Estado

            </div>


            <div class="detail-card-value">

                <span class="
                    ${asset.estado === "operativo"
                        ? "status-normal"
                        : "status-offline"}
                ">

                    ● ${asset.estado.toUpperCase()}

                </span>

            </div>

        </div>


        <!-- INFORMACIÓN -->

        <div class="detail-card">

            <div class="detail-card-title">

                Información

            </div>


            <div class="detail-info-list">

                <div class="detail-info-row">

                    <span class="detail-info-label">
                        ID
                    </span>

                    <span class="detail-info-value">
                        ${asset.id}
                    </span>

                </div>


                <div class="detail-info-row">

                    <span class="detail-info-label">
                        Tipo
                    </span>

                    <span class="detail-info-value">
                        ${asset.tipo}
                    </span>

                </div>


                <div class="detail-info-row">

                    <span class="detail-info-label">
                        Ubicación
                    </span>

                    <span class="detail-info-value">
                        ${asset.ubicacion}
                    </span>

                </div>

            </div>

        </div>


        <!-- VARIABLES -->

        <div class="detail-card detail-card-wide">

            <div class="detail-card-title">

                Variables

            </div>


            <div class="detail-variables-list">

                ${variablesHTML}

            </div>

        </div>

    `;


    /*
     * Agregar interacción a cada variable
     */

    const variableRows =
        document.querySelectorAll(
            ".detail-variable-row"
        );


    variableRows.forEach(
        function(row) {

            row.addEventListener(
                "click",
                function() {

                    openVariableDetail(
                        row.dataset.variableId
                    );

                }
            );

        }
    );


    showDetailView(
        `asset:${asset.id}`,
        addToHistory
    );

}

function openVariableDetail(
    variableId,
    addToHistory = true
) {

    const variable =
        sentinelData.variables.find(
            function(item) {

                return item.id === variableId;

            }
        );


    if (!variable) {

        return;

    }


    detailType.textContent =
        "Variable";


    detailTitle.textContent =
        variable.nombre;


    detailSubtitle.textContent =
        variable.activo;


    detailContent.innerHTML = `

        <div class="detail-card">

            <div class="detail-card-title">
                Valor actual
            </div>

            <div class="detail-variable-value">

                ${variable.valor}

                <span class="detail-variable-unit">
                    ${variable.unidad}
                </span>

            </div>

            <div class="
                variable-status
                ${variable.estado === "normal"
                    ? "status-normal"
                    : "status-warning"}
            ">

                ● ${variable.estado.toUpperCase()}

            </div>

        </div>


        <div class="detail-card">

            <div class="detail-card-title">
                Información
            </div>

            <div class="detail-info-list">

                <div class="detail-info-row">

                    <span class="detail-info-label">
                        ID
                    </span>

                    <span class="detail-info-value">
                        ${variable.id}
                    </span>

                </div>


                <div class="detail-info-row">

                    <span class="detail-info-label">
                        Activo
                    </span>

                    <span class="detail-info-value">
                        ${variable.activo}
                    </span>

                </div>


                <div class="detail-info-row">

                    <span class="detail-info-label">
                        Unidad
                    </span>

                    <span class="detail-info-value">
                        ${variable.unidad}
                    </span>

                </div>

            </div>

        </div>


        <div class="detail-card detail-card-wide">

            <div class="detail-card-title">
                Histórico
            </div>


            <div class="history-controls">

                <button
                    class="history-range active"
                    data-range="1h"
                >
                    1 h
                </button>

                <button
                    class="history-range"
                    data-range="6h"
                >
                    6 h
                </button>

                <button
                    class="history-range"
                    data-range="24h"
                >
                    24 h
                </button>

                <button
                    class="history-range"
                    data-range="7d"
                >
                    7 días
                </button>

                <button
                    class="history-range"
                    data-range="30d"
                >
                    30 días
                </button>

                <button
                    class="btn-secondary"
                    id="btn-ver-historico-completo"
                >
                    Ver histórico completo →
                </button>

            </div>


            <div
                id="variable-history-chart"
                class="variable-history-chart"
            >

                <!-- Gráfica -->

            </div>

        </div>

    `;

    /* =========================================
       BOTÓN: VER HISTÓRICO COMPLETO
    ========================================= */

    const fullHistoryButton =
        document.getElementById(
            "btn-ver-historico-completo"
        );


    if (fullHistoryButton) {

        fullHistoryButton.addEventListener(
            "click",
            function() {

                window.location.href =
                    `historico.html?variable=${encodeURIComponent(variable.id)}`;

            }
        );

    }


    /* =========================================
       CONTROLES DEL HISTÓRICO
    ========================================= */
    const historyButtons =
        document.querySelectorAll(
            ".history-range"
        );


    historyButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                historyButtons.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                renderVariableHistory(
                    variable,
                    button.dataset.range
                );

            }
        );

    });


    /*
     * Carga inicial: rango de 1 hora.
     */

    renderVariableHistory(variable, "1h");


    showDetailView(
        `variable:${variable.id}`,
        addToHistory
    );


    showDetailView(
        `variable:${variable.id}`,
        addToHistory
    );

}

function showDetailView(
    detailContext,
    addToHistory = true
) {

    /*
     * Guardar la posición actual
     * solamente cuando estamos entrando
     * realmente a un nuevo detalle.
     */

    if (addToHistory) {

        dashboardState.navigationHistory.push(
            dashboardState.currentView
        );

    }


    /*
     * Actualizar contexto actual.
     */

    dashboardState.currentView =
        detailContext;


    /*
     * Ocultar vistas.

     */

    dashboardViews.forEach(
        function(view) {

            view.classList.remove(
                "active"
            );

        }
    );


    /*
     * Mostrar detalle.

     */

    detailView.classList.add(
        "active"
    );


    /*
     * Encabezado.

     */

    pageTitle.textContent =
        "Detalle";


    pageDescription.textContent =
        "Información del elemento seleccionado";

}

detailBackButton.addEventListener(
    "click",
    function() {

        goBack();

    }
);

function goBack() {

    /*
     * Si no hay historial,
     * regresamos al resumen.
     */

    if (
        dashboardState.navigationHistory.length === 0
    ) {

        changeView("resumen");

        return;

    }


    /*
     * Sacamos la última posición
     * del historial.
     */

    const previous =
        dashboardState.navigationHistory.pop();


    /*
     * Si es una vista principal,
     * usamos changeView().
     */

    if (
        viewConfig[previous]
    ) {

        /*
         * Evitamos que changeView()
         * vuelva a agregar la vista actual
         * al historial.
         */

        const current =
            dashboardState.currentView;


        dashboardState.currentView =
            previous;


        dashboardViews.forEach(
            function(view) {

                view.classList.remove(
                    "active"
                );

            }
        );


        const selectedView =
            document.getElementById(
                `view-${previous}`
            );


        if (selectedView) {

            selectedView.classList.add(
                "active"
            );

        }


        menuItems.forEach(
            function(menuItem) {

                menuItem.classList.remove(
                    "active"
                );


                if (
                    menuItem.dataset.view === previous
                ) {

                    menuItem.classList.add(
                        "active"
                    );

                }

            }
        );


        pageTitle.textContent =
            viewConfig[previous].title;


        pageDescription.textContent =
            viewConfig[previous].description;


        switch (previous) {

            case "resumen":

                renderResumen();

                break;


            case "activos":

                renderActivos();

                break;


            case "variables":

                renderVariables();

                break;


            case "alertas":

                renderAlertas();

                break;


            case "eventos":

                renderEventos();

                break;

        }


        return;

    }


    /*
     * Si el historial contiene un detalle,
     * debemos reconstruirlo.
     */

    if (
        previous.startsWith("asset:")
    ) {

        const assetId =
            previous.split(":")[1];


        openAssetDetail(
            assetId,
            false
        );


        return;

    }


    if (
        previous.startsWith("variable:")
    ) {

        const variableId =
            previous.split(":")[1];


        openVariableDetail(
            variableId,
            false
        );


        return;

    }


    /*
     * Seguridad ante un valor
     * desconocido.
     */

    dashboardState.currentView =
        "resumen";


    changeView("resumen");

}

/*-----------------------------------------*/

/* =========================================
   SERVICIO DE DATOS HISTÓRICOS
   -----------------------------------------
   Capa de acceso a datos.

   El resto del código NUNCA debe saber si el
   histórico viene de datos simulados o de
   una base de datos externo.

   Todas las funciones devuelven Promise, así
   el cambio de origen no requerirá modificar
   a quien las consume (renderVariableHistory).
========================================= */


const historicoService = {

    obtener: function(variableId, range) {

        return obtenerHistoricoSimulado(
            variableId,
            range
        );

        /*
         * Cuando se conecte la DB,
         * bastará con reemplazar la línea
         * anterior por algo como:
         *
         * return obtenerHistoricoDesdeDB(
         *     variableId,
         *     range
         * );
         *
         * manteniendo la misma firma:
         * mismos parámetros, mismo tipo
         * de retorno (Promise con array de
         * { timestamp, valor }).
         */

    }

};



/* =========================================
   ORIGEN SIMULADO (TEMPORAL)
   -----------------------------------------
   Reemplazar por integración real cuando
   esté disponible la fuente.
========================================= */

const RANGE_CONFIG = {

    "1h":  { points: 12, stepMinutes: 5 },
    "6h":  { points: 24, stepMinutes: 15 },
    "24h": { points: 48, stepMinutes: 30 },
    "7d":  { points: 168, stepMinutes: 60 },
    "30d": { points: 360, stepMinutes: 60 }

};


function obtenerHistoricoSimulado(variableId, range) {

    const variable =
        sentinelData.variables.find(
            function(item) {

                return item.id === variableId;

            }
        );


    if (!variable) {

        return Promise.resolve([]);

    }


    const config =
        RANGE_CONFIG[range] || RANGE_CONFIG["1h"];


    const baseValue = variable.valor;

    const now = new Date();

    const points = [];


    for (let i = config.points - 1; i >= 0; i--) {

        const timestamp = new Date(
            now.getTime() -
            i * config.stepMinutes * 60000
        );

        /*
         * Variación aleatoria pequeña
         * alrededor del valor actual,
         * solo para fines de demostración.
         */

        const variation =
            (Math.random() - 0.5) *
            baseValue * 0.08;

        const valor =
            Math.round(
                (baseValue + variation) * 100
            ) / 100;


        points.push({
            timestamp: timestamp.toISOString(),
            valor: valor
        });

    }


    /*
     * El último punto siempre refleja
     * el valor real actual de la variable.
     */

    points[points.length - 1] = {
        timestamp: now.toISOString(),
        valor: baseValue
    };


    /*
     * Simula latencia de red para que el
     * comportamiento sea idéntico al que
     * tendrá cuando se consulte Google Sheets.
     */

    return new Promise(function(resolve) {

        setTimeout(function() {

            resolve(points);

        }, 200);

    });

}

/* =========================================
   INICIALIZACIÓN
========================================= */

function initializeDashboard() {

    loadUser();

    renderResumen();

    changeView("resumen");

}


initializeDashboard();