---
layout: post_es
title:  Respuestas desde el futuro
category: reality
tags: spanish "computational models" simulation SETM "epidemic transmision"
---
Un pequeñísimo saco proteico cargado de un trozo de código genético puede detener el mundo. Y lo ha hecho.
Cientos de miles de personas han sufrido COVID-19, la enfermedad provocada por el virus SARS-CoV-2. A esta
altura, muchos países han tomado medidas para desacelerar el ritmo de contagio de la población. Algunos lo
hicieron declarando aislamientos obligatorios, otros prohibiendo las reuniones de más de dos personas.
Algunos permitiendo que la gente salga sólo a hacer compras indispensables, otros dejando que la gente salga
a correr. Algunos lo hicieron tarde. Otros, quizás temprano.  


América es para el virus una tercera estación, después de atacar Asia y Europa. Podemos ver qué pasó hasta
ahora en lugares como China, Korea del Sur o Alemania. Pero todavía no pasó el tiempo suficiente para saber
qué tan exitosas son las distintas medidas que estos países están aplicando.  


Por eso me propuse programar un modelo. En **Covilandia**, un país imaginario de dos ciudades y 3000 habitantes,
un virus que se transmite entre las personas pone en jaque a las autoridades. Para decidir qué medidas tomar,
realizan un modelo que resulta ser muy parecido a su realidad (porque ya son un modelo). Realizan una gran
cantidad de simulaciones y finalmente toman su decisión. Veamos qué preguntas se hicieron las autoridades de
**Covilandia** y qué respuestas arriesgó el modelo.  


> Publiqué este artículo el 1º de abril de 2020 en [telegra.ph](https://telegra.ph/Respuestas-desde-el-futuro-04-01).
En ese entonces este sitio no existía. Pronto habrá una segunda parte... 


## Una advertencia

Esto es parte de un proyecto personal. Hace tiempo tenía pendiente ponerme a programar en python y la
realidad me dio una excusa. No soy epidemiólogo, ni médico. No me dedico profesionalmente a hacer modelos
matemáticos. Así que si lo que digo a continuación te parece raro o inconsistente, tomalo como de quien
viene: una persona curiosa dispuesta a compartir su curiosidad.  


## Datos de partida

**Covilandia**, como decía, es un país imaginario con dos ciudades que sufre un brote epidémico de un virus.
Cuando son infectadas, las personas pasan por un período de incubación de entre 1 y 12 días. Sólo algunos
de los infectados presentan síntomas, y entre ellos, algunos terminan internados. El gobierno de **Covilandia**
consigue confirmar sólo algunos de los casos. El riesgo de muerte no sólo depende de los pacientes, también
del porcentaje de la población infectada (es más probable morir cuando el sistema sanitario está exigido).
Las personas que no tienen síntomas pueden contagiar el virus, pero con menor probabilidad que aquellas que
sí los tienen. Una vez que se curan, son inmunes.  


Una persona puede contagiar a otra si se cruza con ella en algún momento del día, pero la probabilidad de
contagio es menor si ambas personas son cuidadosas. Las personas tienen contacto permanente con su núcleo
familiar y también con una lista de contactos definida aleatoriamente (que cambia todos los días).  


El gobierno de **Covilandia** puede tomar distintas medidas para controlar la epidemia. Puede cerrar las
ciudades, puede limitar la circulación de personas, puede aislar a aquellas con diagnóstico confirmado
o recomendar a la población que mantenga distancia. Las medidas se inician a partir de que se confirman
cierto número de casos y se aplican por una cantidad de días determinada.  


Hay algo que es bien distinto en **Covilandia**: la probabilidad de que una persona sana se cruce con un cierto
sujeto infectado es igual para todas las personas sanas.  


> En el mundo real, las sociedades forman redes complejas que tienen nodos más importantes que otros.
En el caso de una epidemia son críticos los nodos como colegios y universidades. El video de Up and Atom
lo deja muy claro: [Computational Social networks](https://www.youtube.com/watch?v=uKVQERi83lM).  


## Caso base

Después de correr el modelo con poblaciones de distinto tamaño (500, 1000, 3000, 5000 y 10000 personas) y
comprobar que se comportaba de manera aceptablemente parecida en todos los casos, decidí usar una **Covilandia**
habitada por 3000 personas. Las dos ciudades de **Covilandia** tienen aproximadamente el mismo tamaño.  


En cuanto las autoridades confirman el primer caso de **COBITS-20**, comienzan a correr simulaciones para
evaluar qué hacer. Pueden hacer unas cuantas, porque el modelo tarda unos 50 segundos en simular 180 días
para una población de 3000 personas.  

<img class="red" src="/assets/img/Rdelfuturo_1_es.png" />
> Si el gobierno de Covilandia no toma medidas de contingencia el brote de COBITS-20 dura unos 110 días y
presenta un pico durante el cual cerca del 30% de la población está infectada. La mayoría de los infectados
se recupera, muchos de ellos nunca tienen síntomas.  


Primero prueban casos extremos, como no hacer nada. El resultado es espeluznante. Como las personas de
**Covilandia** se mezclan de una manera muy pareja, cuando el brote epidémico termina, un 90% de las personas
han sido infectadas. En el peor momento del brote, un 30% de la población está infectada al mismo tiempo
(hay que recordar sin embargo que la mayoría son casos asintomáticos, no necesariamente confirmados por el
gobierno de **Covilandia**). La tasa de muerte (la cantidad de muertos sobre la cantidad total de infectados)
suele estabilizarse entre el 0,5% y el 2%.  

¿Pero qué pasa cuando el gobierno de **Covilandia** activa sus medidas de contingencia?  


## Medidas contundentes

Las autoridades saben que una posibilidad es restringir seriamente la circulación de las personas
permitiéndoles salir de su casa únicamente para lo esencial, recomendándoles incluso que mantengan
distancia cuando lo hagan. Entonces corren una simulación y comprueban que si reducen la circulación
de personas en un 60% durante 120 días, la cantidad de infectados se mantiene por debajo del 4% de la
población. Y para cuando el brote termina sólo un 10% sufrió el contagio.  


Por supuesto, algunas veces, la simulación es un éxito rotundo y el brote se contiene. Esto pasa
especialmente cuando las medidas son bastante restrictivas y se mantienen durante un plazo considerable.
Pero como los especialistas de **Covilandia** son precavidos, cuando esto sucede corren nuevas simulaciones y
se quedan con alguno de los peores casos. Les interesa hacerse una idea del peor escenario.  


<img class="blue" src="/assets/img/Rdelfuturo_2_es.png" />
> Mantener medidas muy restrictivas a partir de la confirmación de 50 casos durante 4 meses es muy efectivo,
aunque no necesariamente viable. En este caso la ciudad B prácticamente no sufre el brote, aunque como el
intercambio de personas entre ciudades es aleatorio, no siempre es así.  


Hoy, los líderes del mundo real se dividen en dos grupos. En uno están los que hablan de sostener la
actividad económica como si una epidemia no fuera a impactar en la economía. En el otro se juntan los que
dicen priorizar la salud de la población como si las medidas de contingencia no pudieran tener consecuencias
sobre ella a largo plazo.  


Pero las autoridades de **Covilandia** son sensatas. Saben que no existen aspectos de la realidad totalmente
desconectados entre sí y se dan cuenta de que sostener restricciones estrictas durante 4 meses no es posible.
Tienen que buscar opciones.  


> A veces, en un ecosistema, la caída de la población de conejos puede provocar la extinción de una especie
de mariposas. Porque al retirarse los conejos, la hierba que ellos comen invade el suelo compitiendo con otra
hierba en donde unas hormigas rojas suelen hacer sus nidos. Hormigas que mantienen una relación simbiótica
con las mariposas. Las redes complejas son sin duda apasionantes. Este ejemplo está tomado del libro de
[Ricard Solé](https://www.planetadelibros.com/libro-redes-complejas/89623).

## ¿Por cuánto tiempo?

Las autoridades corren la simulación varias veces para evaluar durante cuánto tiempo deben sostener fuertes
restricciones para obtener buenos resultados. Pero no tienen buenas noticias. Mantenerlas 14 días no cambia
prácticamente nada, 28 días tampoco. Logran reducir el pico de infectados de alrededor del 30% al 20% cuando
sostienen las medidas 56 días, pero les parece demasiado.  


<img class="blue" src="/assets/img/Rdelfuturo_3_es.png" />
> Aplicar medidas drásticas como una fuerte restricción a la circulación de personas no parece tener buen
resultado a menos que éstas se sostengan durante mucho tiempo.  


Se dan cuenta entonces de que pueden cambiar no sólo la duración de las medidas, sino también el momento en
que las implementan. ¿Puede ser una cuestión de timing?  


## ¿Cuándo?

Las personas a cargo de las simulaciones estaban aplicando las medidas una vez que se confirmaban 50 casos
positivos. Prueban entonces aplicarlas también a partir de la confirmación de 100, 150 y 200 casos. Se
sorprenden un poco, pero ven que el momento a partir del cual se aplican las mismas medidas de contingencia
puede tener un efecto significativo en el desarrollo del brote.  

<img class="gray" src="/assets/img/Rdelfuturo_4_es.png" />
> El resultado de la medidas adoptadas es muy sensible al momento a partir del que se implementan. Se sabe
que pueden aplicarse demasiado tarde, pero quizás sea posible hacerlo demasiado temprano.  


## ¿Qué hacen las personas?

Los especialistas de **Covilandia** habían logrado confirmar que las personas infectadas podían contagiar aún
sin síntomas aunque era improbable. Por eso se preguntaron qué sucedería si los ciudadanos se aislaran ni
bien sintieran alguno, por su propia cuenta. Los resultados fueron sorprendentes. Aún cuando no todas las
personas se auto-aislaran, los cambios eran significativos.  

<img class="red" src="/assets/img/Rdelfuturo_5_es.png" />
> Si aproximadamente el 60% de las personas con síntomas se aislara voluntariamente, sin ninguna acción de
las autoridades, el resultado puede mejorar el de medidas estrictas aplicadas durante 42 días.  


Por supuesto también simulan muchas otras cosas. Prueban cerrando completamente la circulación de personas
entre sus dos ciudades, evalúan el posible resultado de medidas menos restrictivas, se preguntan cuán
efectivo puede ser aislar a los casos confirmados o si aumentar la cantidad de pruebas de diagnóstico puede
cambiar algo. Les cuesta un poco decidirse, pero lo hacen.  


> Los datos de éstas y muchas otras simulaciones están, junto al código del programa, en *GitHub*.
El repositorio se llama [SETM](https://github.com/rvalla/SETM/).


## ¿Qué pasó al final?

Las autoridades de **Covilandia** decidieron luchar contra la epidemia de **COBITS-20** usando distintas
herramientas. Cuando confirmaron 150 casos, restringieron la circulación de las personas sólo un poco
(un 20%). Les recomendaron mantener distancia pero permitieron que compartieran una mesa al aire libre.
Realizaron bastantes pruebas de laboratorio (confirmando aproximadamente el 80% de los casos sintomáticos
y un 20% de los asintomáticos), cosa que les permitió aislar a muchas de las personas infectadas. Por
supuesto, los habitantes de **Covilandia** hicieron su parte. Alrededor de la mitad de los que tuvieron
síntomas se aislaron de inmediato voluntariamente. Como las medidas no eran contundentes, pudieron
sostenerlas por 56 días sin problemas. Durante el pico del brote, la cantidad de infectados no superó el
10%, mientras que un 35% por ciento de la población no se infectó nunca.  

<img class="blue" src="/assets/img/Rdelfuturo_6_es.png" />
> Con medidas mucho menos restrictivas para la población pero un seguimiento activo de los casos y la
colaboración de todos los ciudadanos, el brote en Covilandia no resultó tan grave.  


## Números y simulaciones

Como **Covilandia** es un país imaginado la epidemia de **COBITS-20** no mata, sólo descarta mínimos trozos
de memoria en la computadora. La realidad es más dura y compleja. Es muy difícil saber cuándo las
consecuencias negativas de las medidas de contingencia superan los beneficios que producen.  


Un modelo sencillo como este, no da cuenta de la complejidad total de la realidad pero permite probar
rápidamente distintos escenarios. En minutos uno puede descartar algunas de las ideas que trae preconcebidas,
y con suerte, imaginar escenarios nuevos y distintos. Porque estas situaciones nos exigen ser creativos.  


El [código del modelo](https://github.com/rvalla/SETM) queda a tu disposición por si querés hacerle alguna
pregunta. También los datos y gráficos de varias simulaciones incluyendo las que figuran acá. Si tenés suerte
como yo, no estás entre las personas que tienen que decidir qué hacer para frenar el brote. Pero sí entre las
que manteniendo distancia, evitando tocarse la cara y aislándose mientras tienen síntomas, hoy pueden cambiar
el curso de la historia.