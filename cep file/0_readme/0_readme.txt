This section of the repo is dedicated to the visual assessment phase implemented in this publication. 

The files are grouped into three stages;
1. pre-assessment
2. mid-assessment
3. post-assessment

In 1_pre-assessment, you will find the *.csv file used as Grid data in the Collect Earth Project (CEP).
  This file was created via QGIS. Each entry in the file corresponds to the centroid of a polygon sampled for this visual assessment.
  Each polygon represents a homogenous contiguous cluster of pixels belonging to a specific land cover change transition.
  There are 450 samples in total, which is sub-divided into three sets of 150 randomly selected polygons corresponding to each of the three land cover transitions of interest (Forest -> Cropland, Forest -> Mosaic Vegetation, Forest -> Shrubland)

In 2_mid-assessment, you will find the *.cep file, as well as ancillary data (i.e. *.kml overlays).
  When the *.cep file is opened, it will run Google Earth Pro, as well as Collect Earth. 
  There is no need to re-load the input data file in Collect Earth, as the *.csv (in 1_pre-assessment) has already been incorporated into the survey.
  For each sample, the polygon is assessed for its size category (see readme-size-class-description.txt).
  In order to achieve that, the *.kml's of interest must be loaded into Google Earth Pro.
  E.g. when assessing a polygon identified as Forest -> Cropland in the land cover change map, the Forest -> Cropland *.kml is loaded too.
  
 In 3_post-assessment, you will find *.csv's containing the raw survey results, as well as the summarised results.
  
