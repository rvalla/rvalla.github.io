---
layout: page_es
title:  COVID-19 en Argentina (es)
---

Aquí actualizo periódicamente algunos gráficos y comentarios relacionados con el actual brote del nuevo
coronavirus *SARS-CoV-2* en la Argentina. En general los actualizo al menos cada 2 días. A veces puedo
tardar más (cambia el tiempo del que dispongo y el *Ministerio de Salud de la Nación* no siempre publica
sus [informes diarios](https://www.argentina.gob.ar/coronavirus/informe-diario) con la misma rapidez).

> Los datos informados en los reportes diarios pueden ser inconsistentes. A veces muestran grandes saltos
(el 9 de agosto se informaron por ejemplo más de 60.000 altas). Existen demoras notables tanto en la
notificación de casos confirmados como la de fallecimientos. El trabajo que hace
[Mauro Infantino](https://twitter.com/plenque) en [covidstats.com.ar](https://covidstats.com.ar/panorama)
complementa cualquier análisis.

## El brote en Argentina

El día 21 de marzo se inició un período de aislamiento generalizado de carácter obligatorio en el país, aunque
no se mantuvo fijo y fue sufriendo modificaciones. La situación es distinta según la región del país de la que
se trate. El aislamiento fue flexibilizándose paulatinamente hasta que entre el 1 y el 17 de julio volvió a
endurecerse en la Provincia de Buenos Aires y la Ciudad de Buenos Aires.  
El tiempo pasa y parece estar lejos la posibilidad de sustituir las restricciones de circulación (limitaciones
del uso del transporte público o diferenciación entre trabajadores *esenciales* y *prescindibles, por ejemplo).
A esta altura en Argentina habremos tenido un año lectivo con las escuelas cerradas en la mayor parte del país,
cosa que no parece preocupar tanto como debería.  
Mirando la evolución de *casos confirmados* podemos ver que la epidemia se comportó de manera más o menos
*lineal* hasta principios de mayo (aunque si miramos atentamente la evolución de los fallecimientos esto
no es necesariamente cierto). Y volvió a acelerarse a partir de junio.  
Si bien la tendencia en el país no cambia mucho en los últimos 2 meses es importante destacar que la cambia
mucho el peso de los distintos distritos. Mientras a comienzos de junio la Ciudad de Buenos Aires y el
conurbano de la Provincia de Buenos Aires (también conocidos como el Área Metropolitana de Buenos Aires
(AMBA)) concentraban prácticamente la totalidad de los *casos confirmados*, a partir de
comienzos de agosto esto empieza a cambiar (ver más abajo).  

<img class="red" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/1_ArgentinaA.png" />

Si miramos con atención los *fallecimientos diarios* tomando promedios para 7 días podemos ver que, en realidad,
no se mantuvieron constantes sino que fueron creciendo muy lentamente desde fines de marzo. Se observa
una aceleración clara a partir de mediados de mayo. La Ciudad de Buenos Aires no
logró reducir la tendencia diaria de *casos confirmados* ni *fallecimientos* aunque está estable desde finales de
julio. El peso relativo del interior del país está creciendo con fuerza desde principios de agosto también
mirando los *fallecimientos*.  
La *tasa de mortalidad* que bajó desde mayo hasta mediados de julio estabilizándose en torno al 1.8% comienza
a subir nuevamente cuando llegan las malas noticias desde el interior ubicándose en septiembre por encima del
2%. Lo más probable, otra vez, es que esto nos esté indicando una peor *tasa de detección* y no a un virus más
agresivo.  

<img class="yellow" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/1_ArgentinaB.png" />

Aún cuando la *tasa de mortalidad* baja, la *tasa de positividad* (tests positivos / tests totales) sube.
Y desde mediados de mayo está por encima del 10%. Incluso el valor acumulado está por encima del 10% a partir
de la primer semana de junio. El 6 de agosto el Ministerio de Salud de la Nación cambió la
[definición de caso confirmado](https://www.argentina.gob.ar/salud/coronavirus-COVID-19/definicion-de-caso)
(ya no se requiere PCR para contactos estrechos de *casos confirmados* que sean *casos sospechosos*). Una
medida aceptable que parece originarse en la alta *tasa de positividad*, aunque quizás debiera haberse tomado
antes. A partir de ese día se observa una abrupta caída de la *tasa de positividad* durante unos días, pero
después se recupera incluso alcanzando un valor más alto.  
Los *tiempos de duplicación* también se mantuvieron *más o menos* estables a partir de principios de junio
(lo que sugiere un crecimiento exponencial de los casos), aunque los correspondientes a los casos confirmados
vuelven a crecer desde finales de junio. Los *tiempos de duplicación* para los casos confirmados calculados
durante los últimos días de julio parecen dar buenas noticias aunque contrastan con los *tiempos de duplicación*
de los fallecimientos, que dan buenas noticias recién a partir del 10 de agosto. Septiembre empieza a dar 
buenas noticias con mucha más claridad.  

<img class="blue" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/1_ArgentinaC.png" />

Si usamos la cantidad de *fallecidos* para estimar la *cantidad real* de infectados (tomando una *tasa de mortalidad
real* del 1% y un tiempo promedio entre la aparición de los síntomas y la muerte de 10 días) vemos
que en Argentina la proporción de casos detectados habría mejorado desde mediados de mayo y se habría estabilizado
a mediados de julio tanto en Buenos Aires como en la Capital Federal. Luego comenzaría a caer nuevamente para
tocar su punto más bajo a mediados de agosto. Por supuesto se trata de una *estimación* y no es importante ver
en número en sí ya que parte de asumir una *mortalidad* no necesariamente correcta aunque el comportamiento
de la curva sí puede dar pistas sobre lo que está pasando. Quizás lo más notable de la evolución de la
*tasa de detección* es el hecho de que no mejore hasta comienzos de mayo (ya habían pasado 6 semanas de *aislamiento
obligatorio*).  

<img class="gray" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/estimations/1_E_00_KnownRatioAndEstimation7dAv.png" />


## Lo que pasa en las provincias

Hasta hace no mucho tiempo los gráficos de la evolución de la epidemia en Argentina reflejaban lo que
pasaba en el AMBA porque concentraba casi la totalidad de los *casos confirmados* y *fallecimientos*.  
Lamentablemente eso cambió. A partir de mediados de julio se observa una aceleración del crecimiento
de los *casos confirmados* en varias provincias del país que lamentablemente no se ha detenido. Por supuesto
hay que contrastar estos datos con los datos de las *Pruebas de laboratorio* que realiza cada jurisdicción.  

<img class="red" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/byDate/1_D_26_NewConfirmed7dAv_28_Newdeaths7dAv.png" />

Si miramos el AMBA vemos que finalmente, después de más de 6 meses de restricciones de circulación y un sistema
de alarma que no logró nunca adelantarse a la situación, la Provincia de Buenos Aires se habría estabilizado.
Aunque aún ni la provincia ni la Ciudad de Buenos Aires han conseguido que la curva comience a bajar. Algo que
cuando uno ve lo que lograron países como Uruguay o Australia resulta un rotundo fracaso (por estos días
Paraguay también da la sensación de haber logrado hacer girar la curva aunque hay que dejar pasar unos días
para confirmarlo (ver [acá](/assets/img/COVID_AUP_200915.png))).

<img class="red" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/interesting/1_D_26_NewConfirmed7dAv_28_Newdeaths7dAv_AMBA.png" />