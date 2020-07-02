---
layout: default
title:  COVID-19 (es)
---

# COVID-19: Visualizando datos

En el repositorio [COVID-19](https://github.com/rvalla/COVID-19) comparto una serie de pequeños programas
escritos en [Python](https://www.python.org/) para visualizar la evolución de epidemia en las distintas
partes del mundo.  
Están hechos para realizar distintos gráficos a partir de las bases de datos:
- [2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns
Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19).
- [Reportes del Ministerio de Salud de la Nación Argentina](https://www.argentina.gob.ar/coronavirus/informe-diario).
- [Datasets en datos.gob.ar](https://datos.gob.ar/dataset?q=covid)

## Los datos
Cargo manualmente los datos de los *Informes diarios del Ministerio de Salud de la Nación Argentina* en una
planilla de cálculos que después exporto en formato *csv*. Este archivo tiene un montón de huecos ya que
los informes no detallan por provincia algunos datos. Mientras la serie temporal de *casos confirmados* y
*fallecimientos* está completa con los datos de todas las provincias del país, los datos de *altas*,
*casos descartados* y *pruebas de laboratorio* están incompletos. En todas las categorías existe un apartado
*UNKNOWN* para asegurar que el total coincida con los informes consultados.  
Para visualizar datos de [2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns
Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19) o los
[Datasets en datos.gob.ar](https://datos.gob.ar/dataset?q=covid) hace falta descargar los archivos
correspondientes. Cuando los datos cargados en *Argentina.csv* son procesados se crean un conjunto de archivos
*csv* que almacenan distinta información. Por ejemplo: *casos diarios, fallecimientos diarios* o *casos diarios
tomando el promedio de los últimos 3 o 5 días*. Los gráficos de la situación argentina toman datos de estos
archivos.

## Los gráficos
Pueden obtenerse distintos gráficos para visualizar la información por fecha o también alineando las series
a partir de que se cumple una condición (un cierto número de casos confirmados o fallecimientos). Todos los
programas tienen una lista de variables en las que se puede decidir qué gráficos se muestran al correr el
código. Guardo los que me parecen significativos en la carpeta
[Argentina_Data/actual_charts](https://github.com/rvalla/COVID-19/tree/master/Argentina_Data/actual_charts).

## La situación local
Yo vivo en Buenos Aires, así que sigo sobre todo la evolución del brote en Argentina. Voy actualizando
periódicamente algunos gráficos y comentarios en esta [página](https://rvalla.github.io/es/covid19Arg_es/).

Volver a [rvalla.github.io](https://rvalla.github.io)
