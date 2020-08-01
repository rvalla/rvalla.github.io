---
layout: post_es
title:  Image magick y yo
category: tools
tags: spanish photography "command line"
---
Soy fotógrafo. Tomo un montón de fotos que mi cámara guarda como archivos *raw*. Los edito después con 
[RawTherapee](http://rawtherapee.com/) (un software muy poderoso de código abierto). Cuando digo que saco
un montón de fotos hablo de decenas de miles. Mi *Nikon D5300* toma fotos con una relación de aspecto 3:2.
A mí me encanta, pero cuando quiero compartir mi trabajo la relación de aspecto puede ser un problema.
¿Por qué? Podés querer usar una foto de portada en un sitio web cuya plantilla necesita una foto en 4:2.  

Además están las redes sociales. Si quiero compartir una foto en *twitter* quiero usar 16:9, en un perfil
de *Instagram* 1:1 (es una buena oportunidad para recomendar [pixelfed](https://pixelfed.org/)). A veces
una imagen puede recortarse para cambiarle la relación de aspecto. A veces no es posible porque puede
arruinar la composición. En esos casos inserto la imagen en un *marco* con las proporciones que busco.  

¿Te asusta usar una línea de comandos? Sería una pena... [Image magick](https://imagemagick.org) me ahorra
una gran cantidad de tiempo a la hora de adaptar mis archivos. Una simple línea de código puede recortar una
imagen o hacerla flotar en un marco adecuado (está bien, lo del marco es un poquito más difícil). En general
puedo recortar una foto en un tiempo más breve que el que tarda [Gimp](https://www.gimp.org/) en abrirse.  

Supongamos que fotografiaste un disco rígido roto mientras giraba en una mesa:

<img class="red" src="https://rvalla.github.io/assets/img/imagick_1.jpg" />

La imagen original tiene una *relación de aspecto* 3:2. Por alguna razón necesitás una imagen en 4:3.
Tenés instalado *Image magick* en tu computadora. Como no querés recortar la imagen para mantener su
composición, después de ubicarte en la carpeta que contiene la imagen en la terminal ejecutás...

> magick -size *width*x*height* xc:*color* yourfile.jpg -gravity center -composite output.jpg

Y obtenés una archivo en 4:3 con tu fantástica foto flotando en el centro:  

<img class="blue" src="https://rvalla.github.io/assets/img/imagick_2.jpg" />

Quizás quieras probar una nueva composición. Entonces...  

> magick yourfile.jpg -crop *width*x*height*+*xoffset*+*yoffset* output.jpg

Y la base del disco y su reflejo son los nuevos *sujetos* de la fotografía:  

<img class="gray" src="https://rvalla.github.io/assets/img/imagick_3.jpg" />

Los comandos corresponden a la versión 7 de *Image Magick*. Puedo hacer un montón de cosas divertidas
con esta herramienta y mis fotos. Seguramente cuente más sobre esto en el futuro. Por ahora, sólo quiero
dejar clara una cosa... Si no le tenés miedo a la *línea de comandos* hay montones de herramientas listas
para hacerte la vida más fácil.