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

<a name="scripts"></a>
## Scripts
The following scripts were used for preparing datasets, analysing datasets, and generating figures.

#### Data Analysis

*Scripts:* R scripts for generating a [stacked area plot](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/R/R_Stacked-Area-Plot_Land-Cover-Transition.R) of annual net land cover change, and for generating barplots to visualise the results of the Intensity Analysis framework at the [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/R/R_Barplot_Intensity-Analysis-Interval-Level.R), [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/R/R_Barplot_Intensity-Analysis-Category-Level.R), and [transition](https://github.com/dondealban/ms-sustainability-2019/blob/master/scripts/R/R_Barplot_Intensity-Analysis-Transition-Level.R) levels.


<a name="output_files"></a>
## Output Files

***Intensity Analysis***
1. barplots for visualising results of Intensity Analysis at three levels—interval, category, and transition—for the region and for each district:
- Tanintharyi Region: [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_Fig04_Interval-Level%20Intensity%20Analysis.pdf), [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS5_Category-Level%20Intensity%20Analysis.pdf), and [transition](https://github.com/dondealban/ms-sustainability-2019/tree/master/figures/intensity%20analysis) levels
- Dawei District: [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS2_Interval-Level%20Intensity%20Analysis%20-%20Dawei.pdf) and [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS6_Category-Level%20Intensity%20Analysis%20-%20Dawei.pdf) levels
- Myeik District: [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS3_Interval-Level%20Intensity%20Analysis%20-%20Myeik.pdf) and [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS7_Category-Level%20Intensity%20Analysis%20-%20Myeik.pdf) levels
- Kawthoung District: [interval](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS4_Interval-Level%20Intensity%20Analysis%20-%20Kawthoung.pdf) and [category](https://github.com/dondealban/ms-sustainability-2019/blob/master/figures/paper/De%20Alban%20et%20al_2019_FigS8_Category-Level%20Intensity%20Analysis%20-%20Kawthoung.pdf) levels
2.

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

<a name="license"></a>
## License
Creative Commons Attribution 4.0 International [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
