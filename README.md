# 2019 Sustainability paper
Integrating analytical frameworks to investigate land-cover regime shifts in dynamic landscapes.

[![DOI](https://img.shields.io/badge/DOI-10.3390%2Fsu11041139-blue.svg)](https://doi.org/10.3390/su11041139)


## Table of Contents
- [Overview](#overview)
- [Abstract](#abstract)
- [Scripts](#scripts)
- [Output Files](#output_files)
- [Citation](#citation)
- [References](#references)
- [License](#license)


<a name="overview"></a>
## Overview
This repository contains the materials used for my investigation of landscape-level land-cover regime shifts published in [Sustainability](https://www.mdpi.com/journal/sustainability) journal on February 2019. The paper, both the [main paper](https://www.mdpi.com/2071-1050/11/4/1139/pdf) and [supplementary materials](https://www.mdpi.com/2071-1050/11/4/1139#supplementary), is published open-access and can be downloaded for free under a [CC BY 4.0 license](#license). The materials provided in this repository serve to supplement the published paper by creating a backup of the materials used in and developed through the study, to encourage doing better science by fostering reproducibility and transparency, and to improve the overall impact of the research—both for other researchers and my future self.

<a name="abstract"></a>
## Abstract
Regime shifts—rapid long-term transitions between stable states—are well documented in ecology but remain controversial and understudied in land use and land cover change (LUCC). In particular, uncertainty surrounds the prevalence and causes of regime shifts at the landscape level. We studied LUCC dynamics in the Tanintharyi Region (Myanmar), which contains one of the last remaining significant contiguous forest areas in Southeast Asia but was heavily deforested between 1992–2015. By combining remote sensing methods and a literature review of historical processes leading to LUCC, we identified a regime shift from a forest-oriented state to an agricultural-oriented state between 1997–2004. The regime shift was triggered by a confluence of complex political and economic conditions within Myanmar, notably the ceasefires between various ethnic groups and the military government, coupled with its enhanced business relations with Thailand and China. Government policies and foreign direct investment enabling the establishment of large-scale agro-industrial concessions reinforced the new agriculture-oriented regime and prevented reversion to the original forest-dominated regime. Our approach of integrating complementary analytical frameworks to identify and understand land-cover regime shifts can help policymakers to preempt future regime shifts in Tanintharyi, and can be applied to the study of land change in other regions.

| <img src="https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig01_Conceptual%20Framework.jpg" width="300" /> | <img src="https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig07_Ball%20%26%20Valley%20Diagram.jpg" width="500" /> |
|:---:|:---:|

<a name="scripts"></a>
## Scripts
We used the following scripts for preparing datasets, analysing datasets, and generating figures.

#### 1. Data Preparation
The main spatial data source used for this investigation was the 24-year annual time-series [global land cover product (1992–2015)](https://www.esa-landcover-cci.org/?q=node/175) developed by the European Space Agency Climate Change Initiative (ESA CCI). We used the land cover maps to quantify annual land cover transitions between 1992 and 2015 and to investigate landscape-level land-cover regime shifts. To prepare the time-series land cover maps for analysis, we developed a script using [Google Earth Engine](https://earthengine.google.com/) [(Gorelick et al. 2017)](#gorelick_etal_2017). We defined the geographic areas of interest, particularly Tanintharyi Region (and its districts Dawei, Myeik, and Kawthoung), using the [Global Administrative Database](https://gadm.org/). We aggregated the detailed land cover categories within the study area into six broad classes, namely Forest, Mosaic Vegetation, Shrubland, Cropland, Other Vegetation, and Non-Vegetation (see [main text of supplementary material](https://www.mdpi.com/2071-1050/11/4/1139#supplementary) for more information regarding the aggregation of land cover classes). After reclassification, we then masked out the pixels outside each specific area of interest prior to exporting the land cover maps for further data processing ([Fig.2](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig02_Study%20Area.pdf) in the paper).

![fig-02](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig02_Study%20Area.jpg)

*Scripts:* [GEE script](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/GEE/GEE_Prepare%20ESA%20CCI%20Land%20Cover%20Maps.js) for preparing image subsets from the 24-year annual time-series global ESA CCI land cover product.

#### 2. Data Analysis
We generated stacked area plots, Sankey diagrams, and conducted Intensity Analysis [(Aldwaik & Pontius 2012)](#aldwaik_pontius_2012) to identify and characterise the patterns and dynamics of the land-cover regime shift. Thereafter, we used the land-use regime shift analytical framework to explain the processes driving the regime shift [(Ramankutty & Coomes 2016)](#ramankutty_coomes_2016).

We calculated the area of each land cover category per year using the `Land Cover Change` function of the `Semi-Automatic Classification Plugin` in [QGIS](https://qgis.org/en/site/) software [(QGIS Development Team 2018)](#qgis_2018), and used the calculated outputs to generate a stacked area plot ([Fig.3](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig03_Stacked%20Area%20Plot.pdf) in the paper) using [R software](https://www.r-project.org/) [(R Core Team 2016)](#rcore_2016). The plot tracked the proportion of the total map area comprising each land cover category over the 24-year period.

We generated transition (or cross-tabulation) matrices by calculating the annual area of change for all land cover transitions in QGIS. We then used the transition matrices to conduct Intensity Analysis, a quantitative method to analyse land cover change over time for an area of interest to summarise the change within time-intervals whilst allowing the user to determine whether the changes observed in the maps are due to real transitions or map errors, and extracted information at three levels of analysis: interval, category, and transition, progressing from general analysis to more detailed, respectively.

| <img src="https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig03_Stacked%20Area%20Plot.jpg" width="400" /> | <img src="https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig04_Interval-Level%20Intensity%20Analysis.jpg" width="400" /> |
|:---:|:---:|

For the identification step, we conducted an interval-level Intensity Analysis, in which we calculated the total landscape change (percentage of all map pixels changing category) for each time interval, from which we identified time intervals with either faster or slower rates of change than the interval-level uniform intensity ([Fig.4](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig04_Interval-Level%20Intensity%20Analysis.pdf) in the paper). We then examined how the overall annual rates of change varied across time intervals to determine whether a regime shift occurred. We defined a regime shift as the period during which the overall annual rate of landscape change exceeded the uniform intensity for the entire interval range.

Next, we characterised the land cover transitions during the regime shift and the (stable) land-cover regimes. We used the output transition matrices to produce a Sankey diagram using an [online generator](https://sankey.csaladen.es/#) to visualise the land cover transitions at three time-periods, 1992–1997, 1997–2004, 2004–2015, which illustrated the flows and patterns of gross land cover transitions in three time periods: pre-regime shift, during the regime shift, and post-regime shift ([Fig.5](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig05_Sankey%20Diagram.pdf) in the paper; Cuba 2015).

![fig-05](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig05_Sankey%20Diagram.png)

Additionally, category-level Intensity Analysis quantified the size (area) and intensity (proportion of all transitioning pixels) of gross losses and gross gains for each land cover category per interval, from which we identified active or dormant land cover categories. The category-level Intensity Analysis revealed that forest actively lost area over the period of the regime shift (see [Fig.6](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig06_Category-Level%20Intensity%20Analysis.pdf) in the paper). We therefore conducted a transition-level Intensity Analysis to quantify the size, intensity, and specific destination land cover categories for forest losses during each interval. From these transitions, we determined systematic transitions of forest losses (i.e., deforestation) whether forest was systematically transitioning into another land cover category (see Table 2 in the paper). This was a critical component in identifying systematic land cover transitions, and by extension the drivers, of forest conversion. Finally, we adopted the analytical framework for understanding land-use regime shifts to develop a structured complementary narrative that identified and explained the preconditions, triggers, and self-reinforcing processes governing the regime shift (Ramankutty & Coomes 2016).

*Scripts:* R scripts for generating a [stacked area plot](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/R/final/R_Stacked-Area-Plot_Land-Cover-Transition.R) of annual net land cover change, and for generating barplots to visualise the results of the Intensity Analysis framework at the [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/R/final/R_Barplot_Intensity-Analysis-Interval-Level.R), [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/R/final/R_Barplot_Intensity-Analysis-Category-Level.R), and [transition](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/R/final/R_Barplot_Intensity-Analysis-Transition-Level.R) levels, which were generated using the [`tidyverse` package](https://www.tidyverse.org) [(Wickham and RStudio 2017)](#wickham_rstudio_2017); and [JSON script](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/JSON/Script_Sankey-Diagram.json) for generating the Sankey diagram.

<a name="output_files"></a>
## Output Files

***Change Analysis and Visualisation***
1. [stacked area plot](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig03_Stacked%20Area%20Plot.pdf) showing annual net land cover change
2. [Sankey diagram](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig05_Sankey%20Diagram.pdf) showing gross land cover transitions at different time-periods
3. [ball-and-valley diagram](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig07_Ball%20%26%20Valley%20Diagram.pdf) visualising the land-cover regime shift

***Intensity Analysis***
1. output [spreadsheets](https://github.com/dondealban/ms-sustainability-2019/tree/master/xlsx%20spreadsheet) using the [Excel Macro](https://sites.google.com/site/intensityanalysis/home) developed by Aldwaik & Pontius (2012)
2. barplots for visualising results of Intensity Analysis at three levels—interval, category, and transition—for the region and for each district:
- Tanintharyi Region: [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig04_Interval-Level%20Intensity%20Analysis.pdf), [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS5_Category-Level%20Intensity%20Analysis.pdf), and [transition](https://github.com/dondealban/ms-sustainability-2019/tree/master/figures/intensity%20analysis) levels
- Dawei District: [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS2_Interval-Level%20Intensity%20Analysis%20-%20Dawei.pdf) and [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS6_Category-Level%20Intensity%20Analysis%20-%20Dawei.pdf) levels
- Myeik District: [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS3_Interval-Level%20Intensity%20Analysis%20-%20Myeik.pdf) and [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS7_Category-Level%20Intensity%20Analysis%20-%20Myeik.pdf) levels
- Kawthoung District: [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS4_Interval-Level%20Intensity%20Analysis%20-%20Kawthoung.pdf) and [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS8_Category-Level%20Intensity%20Analysis%20-%20Kawthoung.pdf) levels
3. [sunburst diagrams](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig06_Category-Level%20Intensity%20Analysis.pdf) for summarising the gross losses and gross gains among land cover categories at regional and district levels from the results of the category-level Intensity Analysis

***Extras***
- [QML files](https://github.com/dondealban/ms-sustainability-2019/tree/master/qml) for displaying land cover raster maps in QGIS

<a name="citation"></a>
## Citation
De Alban, J.D.T., G.W. Prescott, K.M. Woods, J. Jamaludin, K.T. Latt, C.L. Lim, A.C. Maung, E.L. Webb (2019). Integrating analytical frameworks to investigate land-cover regime shifts in dynamic landscapes. *Sustainability.* 11(4), 1139. [doi:10.3390/su11041139](https://doi.org/10.3390/su11041139)

**BibTeX entry:**
```
@article{de_alban_integrating_2019,
	title = {Integrating analytical frameworks to investigate land-cover regime shifts in dynamic landscapes},
	volume = {11},
	copyright = {http://creativecommons.org/licenses/by/4.0/},
	url = {https://www.mdpi.com/2071-1050/11/4/1139},
	doi = {10.3390/su11041139},
	language = {en},
	number = {4},
	urldate = {2019-02-22},
	journal = {Sustainability},
	author = {De Alban, Jose Don T. and Prescott, Graham W. and Woods, Kevin M. and Jamaludin, Johanness and Latt, Kyaw Thinn and Lim, Cheng Ling and Maung, Aye Chan and Webb, Edward L.},
	month = feb,
	year = {2019},
	keywords = {process, deforestation, sustainable development, pattern, Myanmar, agricultural plantation, armed conflict, ESA CCI land cover dataset, land use/land cover change, Tanintharyi Region},
	pages = {1139}
}
```

<a name="references"></a>
## References

<a name="aldwaik_pontius_2012"></a>
Aldwaik, S.Z., Pontius, R.G. (2012) Intensity analysis to unify measurements of size and stationarity of land changes by interval, category, and transition. *Landscape and Urban Planning*, 202, 18–27. [doi:10.1016/j.landurbplan.2012.02.010](https://doi.org/10.1016/j.landurbplan.2012.02.010)

<a name="gorelick_etal_2017"></a>
Gorelick, N., Hancher, M., Dixon, M., Ilyushchenko, S., Thau, D. & Moore, R. (2017) Google Earth Engine: planetary-scale geospatial analysis for everyone. *Remote Sensing of Environment*, 106(1), 103–114. [doi:10.1016/j.rse.2017.06.031](https://doi.org/10.1016/j.rse.2017.06.031)

<a name="qgis_2018"></a>
QGIS Development Team (2018) QGIS Geographic Information System. Open Source Geospatial Foundation Project.

<a name="rcore_2016"></a>
R Core Team (2016) R: A Language and Environment for Statistical Computing. R Foundation for Statistical Computing, Vienna, Austria.

<a name="ramankutty_coomes_2016"></a>
Ramankutty, N., Coomes, O. (2016) Land-use regime shifts: an analytical framework and agenda for future land-use research. *Ecology and Society*, 21(2). [doi:10.5751/ES-08370-210201](https://doi.org/10.5751/ES-08370-210201)

<a name="wickham_rstudio_2017"></a>
Wickham, H., RStudio. (2017). tidyverse: Easily Install and Load the 'Tidyverse'.

<a name="license"></a>
## License
Creative Commons Attribution 4.0 International [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
