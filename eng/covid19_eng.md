---
layout: default
title:  COVID-19 (es)
---

# COVID-19: Visualizando datos

In the [COVID-19](https://github.com/rvalla/COVID-19) repository I share a set of little software tools
written in [Python](https://www.python.org/) to visualize the evolution of the COVID-19 outbreak around
the world.
They are design to show data from the next databases:
- [2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns
Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19).
- [National reports by Ministerio de Salud de la Nación Argentina](https://www.argentina.gob.ar/coronavirus/informe-diario).
- [Datasets in datos.gob.ar](https://datos.gob.ar/dataset?q=covid)

## The data
I load the data from the *National reports by Ministerio de Salud de la Nación Argentina* manually in a
spreadsheet exported to a *csv* file afterwards. Note that this file has a lot of holes because 
the reports are not complete (some data is not separated by province). *Confirmed cases* and *deaths* series are
complete, but *active cases*, *laboratory tests* and *dropped cases* are not. If there is a difference between
the total and the sum of all districts I add it in *UNKNOWN* field.
To visualize data from [2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns
Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19) or from the 
[Datasets in datos.gob.ar](https://datos.gob.ar/dataset?q=covid) you need to download the data first.
Data on *Argentina.csv* is processed and save to a set of *csv* files with disctint information. For example:
*daily confirmed cases*, *daily deaths* or *dialy confirmed cases trend (taking averages for 3 o 5 days)*.

## The charts
You can obtain different charts to visualize the data. You can plot the data by date or aligning it when a
certain condition is fulfilled (selected number of confirmed cases or deahts). You can control which charts
to show/save with a set of booblean varialbles you will find in the code. I save some of them in
[Argentina_Data/actual_charts](https://github.com/rvalla/COVID-19/tree/master/Argentina_Data/actual_charts).

Back to [rvalla.github.io](https://rvalla.github.io)
