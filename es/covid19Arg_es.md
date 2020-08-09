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
notificación de casos confirmados y fallecimientos. El trabajo que hace [Mauro Infantino](https://twitter.com/plenque)
en [covidstats.com.ar](https://covidstats.com.ar/panorama) complementa cualquier análisis.

## El brote en Argentina

El día 21 de marzo se inició un período de aislamiento generalizado de carácter obligatorio en el país, aunque
no se mantuvo fijo y fue sufriendo modificaciones. La situación es distinta según la región del país de la que
se trate. El aislamiento fue flexibilizándose paulatinamente hasta que entre el 1 y el 17 de julio volvió a
endurecerse en la Provincia de Buenos Aires y la Ciudad de Buenos Aires.  
Mirando la evolución de *casos confirmados* podemos ver que la epidemia se comportó de manera más o menos
*lineal* hasta principios de mayo (aunque si miramos atentamente la evolución de los fallecimientos esto
no es necesariamente cierto). Y volvió a acelerarse a partir de junio.  

<img class="red" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/1_ArgentinaA.png" />

Si miramos con atención los *fallecimientos diarios* tomando promedios para 7 días podemos ver que, en realidad,
no se mantuvieron constantes sino que fueron creciendo muy lentamente desde fines de marzo. Se observa
una aceleración clara a partir de mediados de mayo.  
La *tasa de mortalidad* empieza a bajar a partir de ese momento (lo más probable es que se deba sobre todo
a la mejora de la *tasa de detección* y no a un debilitamiento del virus o a la aplicación de un tratamiento
efectivo) y se estabiliza en julio cerca del 1.8%.  

<img class="yellow" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/1_ArgentinaB.png" />

Aún cuando la *tasa de mortalidad* baja, la *tasa de positividad* (tests positivos / tests totales) sube.
Y desde mediados de mayo está por encima del 10%. Incluso el valor acumulado está por encima del 10% a partir
de la primer semana de junio. El 6 de agosto el Ministerio de Salud de la Nación cambió la
[definición de caso confirmado](https://www.argentina.gob.ar/salud/coronavirus-COVID-19/definicion-de-caso)
(ya no se requiere PCR para contactos estrechos de *casos confirmados* que sean *casos sospechosos*). Una
medida aceptable que parece originarse en la alta *tasa de positividad*, aunque quizás debiera haberse tomado
antes.  
Los *tiempos de duplicación* también se mantuvieron *más o menos* estables a partir de principios de junio
(lo que indica un crecimiento exponencial de los casos), aunque los correspondientes a los casos confirmados
vuelven a crecer desde finales de junio. Los *tiempos de duplicación* para los casos confirmados calculados
durante los últimos días de julio parecen dar buenas noticias aunque contrastan con los *tiempos de duplicación*
de los fallecimientos, que no muestran una tendencia clara.

<img class="blue" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/1_ArgentinaC.png" />

Si usamos la cantidad de *fallecidos* para estimar la *cantidad real* de infectados (tomando una *tasa de mortalidad
real* del 1% y un tiempo promedio entre la aparición de los síntomas y la muerte de 10 días) vemos
que en Argentina la proporción de casos detectados habría mejorado desde mediados de mayo y se habría estabilizado
a mediados de julio tanto en Buenos Aires como en la Capital Federal.

<img class="gray" src="https://github.com/rvalla/COVID-19/raw/master/Argentina_Data/actual_charts/1_E_00_KnownRatioAndEstimation.png" />