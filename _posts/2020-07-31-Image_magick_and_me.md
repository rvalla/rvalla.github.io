---
layout: post_eng
title:  Image magick and me
category: tools
tags: english photography "command line"
---
I am a photographer. I take a lot of pictures which my camera saves as raw files. I edit them with
[RawTherapee](http://rawtherapee.com/) (a free and open source super powerful piece of software).
When I tell you I take a los of pictures I am saying tens of thousands. My *Nikon D5300* has a 3:2 aspect
ratio. I am totally ok with it, I like it. But when you want to share your work *aspect ratio* can be a
problem. Why? Well, you can showcase your work in your website but perhaps its templates require a different
width-height relation for cover images.  

And there are social networks around. You will need a 16:9 picture in *twitter*, a square image for
your *Instagram profile* (you should use [pixelfed](https://pixelfed.org/) instead). Sometimes is
possible to crop a picture, sometimes is not. You can destroy your composition completely when
cropping. So you can insert your picture in frame which has the *aspect ratio* needed.  

Are you afraid of using the command line? You shouldn't. [Image magick](https://imagemagick.org) saves
me tons of time when I need to adapt my pictures. A short line of code can make my computer do what
I need in less than a second (opening [Gimp](https://www.gimp.org/) takes me longer).  

Supose you photographed a disc from your broken drive spinning on a table:

<img class="red" src="https://rvalla.github.io/assets/img/imagick_1.jpg" />

The image has a 3:2 *aspect ratio*. But you need a file in 4:3 and you don't want to crop anything.
If you have *Image magick* installed, after open your file's path on a *terminal window* you only need...  

> magick -size *width*x*height* xc:*color* yourfile.jpg -gravity center -composite output.jpg

And now you have a 4:3 picture with your fantastic photo in the center:

<img class="blue" src="https://rvalla.github.io/assets/img/imagick_2.jpg" />

Or may be you want to change your composition drastically. So...  

> magick yourfile.jpg -crop *width*x*height*+*xoffset*+*yoffset* output.jpg

And your disc's base is the new subject in your image.  

Above commands are for *Image Magick 7*. You can do a lot of funny things with this tool and your
pictures. Perhaps I will tell you more in future posts. For now, I only want to make it clear... If
you are not afraid of the *command line* there lots of tools to make your life easier.