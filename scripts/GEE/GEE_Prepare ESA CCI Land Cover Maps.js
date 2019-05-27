/* 
 * This script prepares the 300-meter resolution ESA CCI land cover product from 1992-2015 for subsequent geospatial
 * analysis on land-system regime shifts in Tanintharyi Region, Myanmar.
 */


/*******************************
  DEFINE EXTENT AND VIEW
********************************/

// Set view extent and center
Map.setCenter(98.64212,12.40975, 11); // Zoom in and center display to Tanintharyi Region, Myanmar

// Define and display box extents covering Tanintharyi Region
var box = ee.Geometry.Rectangle(97.0,16.0, 100.0,9.0);

// Clip images to box extents
var esacci = ee.Image('users/Global/ESA-CCI-LCCS-1992-2015').clip(box);


/*******************************
  LOAD DATASETS
********************************/

// Select years of land cover maps
var tni1992 = esacci.select('b1');  // 1992
var tni1993 = esacci.select('b2');  // 1993
var tni1994 = esacci.select('b3');  // 1994
var tni1995 = esacci.select('b4');  // 1995
var tni1996 = esacci.select('b5');  // 1996
var tni1997 = esacci.select('b6');  // 1997
var tni1998 = esacci.select('b7');  // 1998
var tni1999 = esacci.select('b8');  // 1999
var tni2000 = esacci.select('b9');  // 2000
var tni2001 = esacci.select('b10'); // 2001
var tni2002 = esacci.select('b11'); // 2002
var tni2003 = esacci.select('b12'); // 2003
var tni2004 = esacci.select('b13'); // 2004
var tni2005 = esacci.select('b14'); // 2005
var tni2006 = esacci.select('b15'); // 2006
var tni2007 = esacci.select('b16'); // 2007
var tni2008 = esacci.select('b17'); // 2008
var tni2009 = esacci.select('b18'); // 2009
var tni2010 = esacci.select('b19'); // 2010
var tni2011 = esacci.select('b20'); // 2011
var tni2012 = esacci.select('b21'); // 2012
var tni2013 = esacci.select('b22'); // 2013
var tni2014 = esacci.select('b23'); // 2014
var tni2015 = esacci.select('b24'); // 2015

// Load GADM administrative boundary data
// Note: Comment out lines depending on the area of interest
var boundaryMMR = ee.FeatureCollection('ft:1skPE8pqIw-w7wlqWTE5f7xhRegbyGUrsB57JxLeY'); // Fusion table: tanintharyi_gadm_adm3_rev
var boundaryTNI = boundaryMMR.filter(ee.Filter.eq('NAME_1', 'Tanintharyi')); // Tanintharyi Region
//var boundaryDAW = boundaryMMR.filter(ee.Filter.eq('NAME_2', 'Dawei')); // Dawei District, Tanintharyi
//var boundaryMER = boundaryMMR.filter(ee.Filter.eq('NAME_2', 'Mergui')); // Mergui District, Tanintharyi
//var boundaryKAW = boundaryMMR.filter(ee.Filter.eq('NAME_2', 'Kawthoung')); // Kawthoung District, Tanintharyi


/*******************************
  RECLASSIFY CLASSES
********************************/

// [1: FOR] Forest
var oldGroup1 = ee.List([50,60,61,62,70,71,72,80,81,82,90,160,170]); // 13 classes
var revGroup1 = ee.List([1,1,1,1,1,1,1,1,1,1,1,1,1]); 

// [2: MOS] Mosaic Vegetation
var oldGroup2 = ee.List([30,40,100,110]); // 4 classes
var revGroup2 = ee.List([2,2,2,2]);

// [3: SHB] Shrubland
var oldGroup3 = ee.List([120,121,122]); // 3 classes
var revGroup3 = ee.List([3,3,3]);

// [4: OTH] Other Vegetation
var oldGroup4 = ee.List([130,140,150,152,153,180]); // 6 classes
var revGroup4 = ee.List([4,4,4,4,4,4]);

// [5: CRP] Cropland
var oldGroup5 = ee.List([10,11,12,20]); // 4 classes
var revGroup5 = ee.List([5,5,5,5]);

// [6: NON] Non-Vegetation
var oldGroup6 = ee.List([190,200,201,202,210,220]); // 6 classes
var revGroup6 = ee.List([6,6,6,6,6,6]);


/*******************************
  RECLASSIFY IMAGES
********************************/

// Reclassify 1992 image
var tni1992g1 = tni1992.remap(oldGroup1, revGroup1).toUint8();
var tni1992g2 = tni1992.remap(oldGroup2, revGroup2).toUint8();
var tni1992g3 = tni1992.remap(oldGroup3, revGroup3).toUint8();
var tni1992g4 = tni1992.remap(oldGroup4, revGroup4).toUint8();
var tni1992g5 = tni1992.remap(oldGroup5, revGroup5).toUint8();
var tni1992g6 = tni1992.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 1993 image
var tni1993g1 = tni1993.remap(oldGroup1, revGroup1).toUint8();
var tni1993g2 = tni1993.remap(oldGroup2, revGroup2).toUint8();
var tni1993g3 = tni1993.remap(oldGroup3, revGroup3).toUint8();
var tni1993g4 = tni1993.remap(oldGroup4, revGroup4).toUint8();
var tni1993g5 = tni1993.remap(oldGroup5, revGroup5).toUint8();
var tni1993g6 = tni1993.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 1994 image
var tni1994g1 = tni1994.remap(oldGroup1, revGroup1).toUint8();
var tni1994g2 = tni1994.remap(oldGroup2, revGroup2).toUint8();
var tni1994g3 = tni1994.remap(oldGroup3, revGroup3).toUint8();
var tni1994g4 = tni1994.remap(oldGroup4, revGroup4).toUint8();
var tni1994g5 = tni1994.remap(oldGroup5, revGroup5).toUint8();
var tni1994g6 = tni1994.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 1995 image
var tni1995g1 = tni1995.remap(oldGroup1, revGroup1).toUint8();
var tni1995g2 = tni1995.remap(oldGroup2, revGroup2).toUint8();
var tni1995g3 = tni1995.remap(oldGroup3, revGroup3).toUint8();
var tni1995g4 = tni1995.remap(oldGroup4, revGroup4).toUint8();
var tni1995g5 = tni1995.remap(oldGroup5, revGroup5).toUint8();
var tni1995g6 = tni1995.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 1996 image
var tni1996g1 = tni1996.remap(oldGroup1, revGroup1).toUint8();
var tni1996g2 = tni1996.remap(oldGroup2, revGroup2).toUint8();
var tni1996g3 = tni1996.remap(oldGroup3, revGroup3).toUint8();
var tni1996g4 = tni1996.remap(oldGroup4, revGroup4).toUint8();
var tni1996g5 = tni1996.remap(oldGroup5, revGroup5).toUint8();
var tni1996g6 = tni1996.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 1997 image
var tni1997g1 = tni1997.remap(oldGroup1, revGroup1).toUint8();
var tni1997g2 = tni1997.remap(oldGroup2, revGroup2).toUint8();
var tni1997g3 = tni1997.remap(oldGroup3, revGroup3).toUint8();
var tni1997g4 = tni1997.remap(oldGroup4, revGroup4).toUint8();
var tni1997g5 = tni1997.remap(oldGroup5, revGroup5).toUint8();
var tni1997g6 = tni1997.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 1998 image
var tni1998g1 = tni1998.remap(oldGroup1, revGroup1).toUint8();
var tni1998g2 = tni1998.remap(oldGroup2, revGroup2).toUint8();
var tni1998g3 = tni1998.remap(oldGroup3, revGroup3).toUint8();
var tni1998g4 = tni1998.remap(oldGroup4, revGroup4).toUint8();
var tni1998g5 = tni1998.remap(oldGroup5, revGroup5).toUint8();
var tni1998g6 = tni1998.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 1999 image
var tni1999g1 = tni1999.remap(oldGroup1, revGroup1).toUint8();
var tni1999g2 = tni1999.remap(oldGroup2, revGroup2).toUint8();
var tni1999g3 = tni1999.remap(oldGroup3, revGroup3).toUint8();
var tni1999g4 = tni1999.remap(oldGroup4, revGroup4).toUint8();
var tni1999g5 = tni1999.remap(oldGroup5, revGroup5).toUint8();
var tni1999g6 = tni1999.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2000 image
var tni2000g1 = tni2000.remap(oldGroup1, revGroup1).toUint8();
var tni2000g2 = tni2000.remap(oldGroup2, revGroup2).toUint8();
var tni2000g3 = tni2000.remap(oldGroup3, revGroup3).toUint8();
var tni2000g4 = tni2000.remap(oldGroup4, revGroup4).toUint8();
var tni2000g5 = tni2000.remap(oldGroup5, revGroup5).toUint8();
var tni2000g6 = tni2000.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2001 image
var tni2001g1 = tni2001.remap(oldGroup1, revGroup1).toUint8();
var tni2001g2 = tni2001.remap(oldGroup2, revGroup2).toUint8();
var tni2001g3 = tni2001.remap(oldGroup3, revGroup3).toUint8();
var tni2001g4 = tni2001.remap(oldGroup4, revGroup4).toUint8();
var tni2001g5 = tni2001.remap(oldGroup5, revGroup5).toUint8();
var tni2001g6 = tni2001.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2002 image
var tni2002g1 = tni2002.remap(oldGroup1, revGroup1).toUint8();
var tni2002g2 = tni2002.remap(oldGroup2, revGroup2).toUint8();
var tni2002g3 = tni2002.remap(oldGroup3, revGroup3).toUint8();
var tni2002g4 = tni2002.remap(oldGroup4, revGroup4).toUint8();
var tni2002g5 = tni2002.remap(oldGroup5, revGroup5).toUint8();
var tni2002g6 = tni2002.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2003 image
var tni2003g1 = tni2003.remap(oldGroup1, revGroup1).toUint8();
var tni2003g2 = tni2003.remap(oldGroup2, revGroup2).toUint8();
var tni2003g3 = tni2003.remap(oldGroup3, revGroup3).toUint8();
var tni2003g4 = tni2003.remap(oldGroup4, revGroup4).toUint8();
var tni2003g5 = tni2003.remap(oldGroup5, revGroup5).toUint8();
var tni2003g6 = tni2003.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2004 image
var tni2004g1 = tni2004.remap(oldGroup1, revGroup1).toUint8();
var tni2004g2 = tni2004.remap(oldGroup2, revGroup2).toUint8();
var tni2004g3 = tni2004.remap(oldGroup3, revGroup3).toUint8();
var tni2004g4 = tni2004.remap(oldGroup4, revGroup4).toUint8();
var tni2004g5 = tni2004.remap(oldGroup5, revGroup5).toUint8();
var tni2004g6 = tni2004.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2005 image
var tni2005g1 = tni2005.remap(oldGroup1, revGroup1).toUint8();
var tni2005g2 = tni2005.remap(oldGroup2, revGroup2).toUint8();
var tni2005g3 = tni2005.remap(oldGroup3, revGroup3).toUint8();
var tni2005g4 = tni2005.remap(oldGroup4, revGroup4).toUint8();
var tni2005g5 = tni2005.remap(oldGroup5, revGroup5).toUint8();
var tni2005g6 = tni2005.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2006 image
var tni2006g1 = tni2006.remap(oldGroup1, revGroup1).toUint8();
var tni2006g2 = tni2006.remap(oldGroup2, revGroup2).toUint8();
var tni2006g3 = tni2006.remap(oldGroup3, revGroup3).toUint8();
var tni2006g4 = tni2006.remap(oldGroup4, revGroup4).toUint8();
var tni2006g5 = tni2006.remap(oldGroup5, revGroup5).toUint8();
var tni2006g6 = tni2006.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2007 image
var tni2007g1 = tni2007.remap(oldGroup1, revGroup1).toUint8();
var tni2007g2 = tni2007.remap(oldGroup2, revGroup2).toUint8();
var tni2007g3 = tni2007.remap(oldGroup3, revGroup3).toUint8();
var tni2007g4 = tni2007.remap(oldGroup4, revGroup4).toUint8();
var tni2007g5 = tni2007.remap(oldGroup5, revGroup5).toUint8();
var tni2007g6 = tni2007.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2008 image
var tni2008g1 = tni2008.remap(oldGroup1, revGroup1).toUint8();
var tni2008g2 = tni2008.remap(oldGroup2, revGroup2).toUint8();
var tni2008g3 = tni2008.remap(oldGroup3, revGroup3).toUint8();
var tni2008g4 = tni2008.remap(oldGroup4, revGroup4).toUint8();
var tni2008g5 = tni2008.remap(oldGroup5, revGroup5).toUint8();
var tni2008g6 = tni2008.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2009 image
var tni2009g1 = tni2009.remap(oldGroup1, revGroup1).toUint8();
var tni2009g2 = tni2009.remap(oldGroup2, revGroup2).toUint8();
var tni2009g3 = tni2009.remap(oldGroup3, revGroup3).toUint8();
var tni2009g4 = tni2009.remap(oldGroup4, revGroup4).toUint8();
var tni2009g5 = tni2009.remap(oldGroup5, revGroup5).toUint8();
var tni2009g6 = tni2009.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2010 image
var tni2010g1 = tni2010.remap(oldGroup1, revGroup1).toUint8();
var tni2010g2 = tni2010.remap(oldGroup2, revGroup2).toUint8();
var tni2010g3 = tni2010.remap(oldGroup3, revGroup3).toUint8();
var tni2010g4 = tni2010.remap(oldGroup4, revGroup4).toUint8();
var tni2010g5 = tni2010.remap(oldGroup5, revGroup5).toUint8();
var tni2010g6 = tni2010.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2011 image
var tni2011g1 = tni2011.remap(oldGroup1, revGroup1).toUint8();
var tni2011g2 = tni2011.remap(oldGroup2, revGroup2).toUint8();
var tni2011g3 = tni2011.remap(oldGroup3, revGroup3).toUint8();
var tni2011g4 = tni2011.remap(oldGroup4, revGroup4).toUint8();
var tni2011g5 = tni2011.remap(oldGroup5, revGroup5).toUint8();
var tni2011g6 = tni2011.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2012 image
var tni2012g1 = tni2012.remap(oldGroup1, revGroup1).toUint8();
var tni2012g2 = tni2012.remap(oldGroup2, revGroup2).toUint8();
var tni2012g3 = tni2012.remap(oldGroup3, revGroup3).toUint8();
var tni2012g4 = tni2012.remap(oldGroup4, revGroup4).toUint8();
var tni2012g5 = tni2012.remap(oldGroup5, revGroup5).toUint8();
var tni2012g6 = tni2012.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2013 image
var tni2013g1 = tni2013.remap(oldGroup1, revGroup1).toUint8();
var tni2013g2 = tni2013.remap(oldGroup2, revGroup2).toUint8();
var tni2013g3 = tni2013.remap(oldGroup3, revGroup3).toUint8();
var tni2013g4 = tni2013.remap(oldGroup4, revGroup4).toUint8();
var tni2013g5 = tni2013.remap(oldGroup5, revGroup5).toUint8();
var tni2013g6 = tni2013.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2014 image
var tni2014g1 = tni2014.remap(oldGroup1, revGroup1).toUint8();
var tni2014g2 = tni2014.remap(oldGroup2, revGroup2).toUint8();
var tni2014g3 = tni2014.remap(oldGroup3, revGroup3).toUint8();
var tni2014g4 = tni2014.remap(oldGroup4, revGroup4).toUint8();
var tni2014g5 = tni2014.remap(oldGroup5, revGroup5).toUint8();
var tni2014g6 = tni2014.remap(oldGroup6, revGroup6).toUint8();

// Reclassify 2015 image
var tni2015g1 = tni2015.remap(oldGroup1, revGroup1).toUint8();
var tni2015g2 = tni2015.remap(oldGroup2, revGroup2).toUint8();
var tni2015g3 = tni2015.remap(oldGroup3, revGroup3).toUint8();
var tni2015g4 = tni2015.remap(oldGroup4, revGroup4).toUint8();
var tni2015g5 = tni2015.remap(oldGroup5, revGroup5).toUint8();
var tni2015g6 = tni2015.remap(oldGroup6, revGroup6).toUint8(); 

// Merge reclassified per class images into one image
var tni1992rev = ee.ImageCollection.fromImages([tni1992g1, tni1992g2, tni1992g3, tni1992g4, tni1992g5, tni1992g6]).mosaic();
var tni1993rev = ee.ImageCollection.fromImages([tni1993g1, tni1993g2, tni1993g3, tni1993g4, tni1993g5, tni1993g6]).mosaic();
var tni1994rev = ee.ImageCollection.fromImages([tni1994g1, tni1994g2, tni1994g3, tni1994g4, tni1994g5, tni1994g6]).mosaic();
var tni1995rev = ee.ImageCollection.fromImages([tni1995g1, tni1995g2, tni1995g3, tni1995g4, tni1995g5, tni1995g6]).mosaic();
var tni1996rev = ee.ImageCollection.fromImages([tni1996g1, tni1996g2, tni1996g3, tni1996g4, tni1996g5, tni1996g6]).mosaic();
var tni1997rev = ee.ImageCollection.fromImages([tni1997g1, tni1997g2, tni1997g3, tni1997g4, tni1997g5, tni1997g6]).mosaic();
var tni1998rev = ee.ImageCollection.fromImages([tni1998g1, tni1998g2, tni1998g3, tni1998g4, tni1998g5, tni1998g6]).mosaic();
var tni1999rev = ee.ImageCollection.fromImages([tni1999g1, tni1999g2, tni1999g3, tni1999g4, tni1999g5, tni1999g6]).mosaic();
var tni2000rev = ee.ImageCollection.fromImages([tni2000g1, tni2000g2, tni2000g3, tni2000g4, tni2000g5, tni2000g6]).mosaic();
var tni2001rev = ee.ImageCollection.fromImages([tni2001g1, tni2001g2, tni2001g3, tni2001g4, tni2001g5, tni2001g6]).mosaic();
var tni2002rev = ee.ImageCollection.fromImages([tni2002g1, tni2002g2, tni2002g3, tni2002g4, tni2002g5, tni2002g6]).mosaic();
var tni2003rev = ee.ImageCollection.fromImages([tni2003g1, tni2003g2, tni2003g3, tni2003g4, tni2003g5, tni2003g6]).mosaic();
var tni2004rev = ee.ImageCollection.fromImages([tni2004g1, tni2004g2, tni2004g3, tni2004g4, tni2004g5, tni2004g6]).mosaic();
var tni2005rev = ee.ImageCollection.fromImages([tni2005g1, tni2005g2, tni2005g3, tni2005g4, tni2005g5, tni2005g6]).mosaic();
var tni2006rev = ee.ImageCollection.fromImages([tni2006g1, tni2006g2, tni2006g3, tni2006g4, tni2006g5, tni2006g6]).mosaic();
var tni2007rev = ee.ImageCollection.fromImages([tni2007g1, tni2007g2, tni2007g3, tni2007g4, tni2007g5, tni2007g6]).mosaic();
var tni2008rev = ee.ImageCollection.fromImages([tni2008g1, tni2008g2, tni2008g3, tni2008g4, tni2008g5, tni2008g6]).mosaic();
var tni2009rev = ee.ImageCollection.fromImages([tni2009g1, tni2009g2, tni2009g3, tni2009g4, tni2009g5, tni2009g6]).mosaic();
var tni2010rev = ee.ImageCollection.fromImages([tni2010g1, tni2010g2, tni2010g3, tni2010g4, tni2010g5, tni2010g6]).mosaic();
var tni2011rev = ee.ImageCollection.fromImages([tni2011g1, tni2011g2, tni2011g3, tni2011g4, tni2011g5, tni2011g6]).mosaic();
var tni2012rev = ee.ImageCollection.fromImages([tni2012g1, tni2012g2, tni2012g3, tni2012g4, tni2012g5, tni2012g6]).mosaic();
var tni2013rev = ee.ImageCollection.fromImages([tni2013g1, tni2013g2, tni2013g3, tni2013g4, tni2013g5, tni2013g6]).mosaic();
var tni2014rev = ee.ImageCollection.fromImages([tni2014g1, tni2014g2, tni2014g3, tni2014g4, tni2014g5, tni2014g6]).mosaic();
var tni2015rev = ee.ImageCollection.fromImages([tni2015g1, tni2015g2, tni2015g3, tni2015g4, tni2015g5, tni2015g6]).mosaic();


/*******************************
  MASK REGION OF INTEREST  
********************************/

// Create a mask using administrative boundary layer
// Note: Comment out lines depending on the area of interest
var maskBoundary = ee.Image.constant(0).uint8();
maskBoundary = maskBoundary.paint(boundaryTNI, 1);
//maskBoundary = maskBoundary.paint(boundaryDAW, 1);
//maskBoundary = maskBoundary.paint(boundaryMER, 1);
//maskBoundary = maskBoundary.paint(boundaryKAW, 1);

// Mask areas outside Taninintharyi Region for each year
var masked1992tni = tni1992rev.updateMask(maskBoundary);
var masked1993tni = tni1993rev.updateMask(maskBoundary);
var masked1994tni = tni1994rev.updateMask(maskBoundary);
var masked1995tni = tni1995rev.updateMask(maskBoundary);
var masked1996tni = tni1996rev.updateMask(maskBoundary);
var masked1997tni = tni1997rev.updateMask(maskBoundary);
var masked1998tni = tni1998rev.updateMask(maskBoundary);
var masked1999tni = tni1999rev.updateMask(maskBoundary);
var masked2000tni = tni2000rev.updateMask(maskBoundary);
var masked2001tni = tni2001rev.updateMask(maskBoundary);
var masked2002tni = tni2002rev.updateMask(maskBoundary);
var masked2003tni = tni2003rev.updateMask(maskBoundary);
var masked2004tni = tni2004rev.updateMask(maskBoundary);
var masked2005tni = tni2005rev.updateMask(maskBoundary);
var masked2006tni = tni2006rev.updateMask(maskBoundary);
var masked2007tni = tni2007rev.updateMask(maskBoundary);
var masked2008tni = tni2008rev.updateMask(maskBoundary);
var masked2009tni = tni2009rev.updateMask(maskBoundary);
var masked2010tni = tni2010rev.updateMask(maskBoundary);
var masked2011tni = tni2011rev.updateMask(maskBoundary);
var masked2012tni = tni2012rev.updateMask(maskBoundary);
var masked2013tni = tni2013rev.updateMask(maskBoundary);
var masked2014tni = tni2014rev.updateMask(maskBoundary);
var masked2015tni = tni2015rev.updateMask(maskBoundary);


/*******************************
  DISPLAY LAYERS
********************************/

// Display administrative boundary
Map.addLayer(boundaryTNI,  {'color': '000000'}, 'Tanintharyi Boundary', false); // Black color boundary 

// Define styled layer descriptors of discrete intervals to apply to the image
var esa_style =
'<RasterSymbolizer>' +
  '<ColorMap type="intervals" extended="false">' +
    '<ColorMapEntry color="#000000" quantity="0"   label="No data" />' +
    '<ColorMapEntry color="#FFFF64" quantity="10"  label="Cropland, rainfed" />' +
    '<ColorMapEntry color="#FFFF64" quantity="11"  label="Cropland, herbaceous cover" />' +
    '<ColorMapEntry color="#FFFF00" quantity="12"  label="Cropland, tree or shrub cover" />' +
    '<ColorMapEntry color="#AAF0F0" quantity="20"  label="Cropland, irrigated or post-flooding" />' +
    '<ColorMapEntry color="#DCF064" quantity="30"  label="Mosaic cropland (>50%) / natural vegetation (tree, shrub, herbaceous)" />' +
    '<ColorMapEntry color="#C8C864" quantity="40"  label="Mosaic natural vegetation (tree, shrub, herbaceous cover;  50%)" />' +
    '<ColorMapEntry color="#006400" quantity="50"  label="Tree cover, broadleaved, evergreen, closed to open (>15%)" />' +
    '<ColorMapEntry color="#00A000" quantity="60"  label="Tree cover, broadleaved, deciduous, closed to open (>15%)" />' +
    '<ColorMapEntry color="#00A000" quantity="61"  label="Tree cover, broadleaved, deciduous, closed (>40%)" />' +
    '<ColorMapEntry color="#AAC800" quantity="62"  label="Tree cover, broadleaved, deciduous, open (15-40%)" />' +
    '<ColorMapEntry color="#003C00" quantity="70"  label="Tree cover, needleleaved, evergreen, closed to open (>15%)" />' +
    '<ColorMapEntry color="#003C00" quantity="71"  label="Tree cover, needleleaved, evergreen, closed (>40%)" />' +
    '<ColorMapEntry color="#005000" quantity="72"  label="Tree cover, needleleaved, evergreen, open (15-40%)" />' +
    '<ColorMapEntry color="#285000" quantity="80"  label="Tree cover, needleleaved, deciduous, closed to open (>15%)" />' +
    '<ColorMapEntry color="#285000" quantity="81"  label="Tree cover, needleleaved, deciduous, closed (>40%)" />' +
    '<ColorMapEntry color="#286400" quantity="82"  label="Tree cover, needleleaved, deciduous, open (15-40%)" />' +
    '<ColorMapEntry color="#788200" quantity="90"  label="Tree cover, mixed leaf type (broadleaved and needleleaved)" />' +
    '<ColorMapEntry color="#8CA000" quantity="100" label="Mosaic tree and shrub (>50%) / herbaceous cover (50%)" />' +
    '<ColorMapEntry color="#BE9600" quantity="110" label="Mosaic herbaceous cover (>50%) / tree and shrub (50%)" />' +
    '<ColorMapEntry color="#966400" quantity="120" label="Shrubland" />' +
    '<ColorMapEntry color="#784B00" quantity="121" label="Shrubland, evergreen" />' +
    '<ColorMapEntry color="#966400" quantity="122" label="Shrubland, deciduous" />' +
    '<ColorMapEntry color="#FFB432" quantity="130" label="Grassland" />' +
    '<ColorMapEntry color="#FFDCD2" quantity="140" label="Lichens and mosses" />' +
    '<ColorMapEntry color="#FFEBAF" quantity="150" label="Sparse vegetation (15%)" />' +
    '<ColorMapEntry color="#FFD278" quantity="152" label="Sparse shrub (15%)" />' +
    '<ColorMapEntry color="#FFEBAF" quantity="153" label="Sparse herbaceous cover (15%)" />' +
    '<ColorMapEntry color="#00785A" quantity="160" label="Tree cover, flooded, fresh or brackish water" />' +
    '<ColorMapEntry color="#009678" quantity="170" label="Tree cover, flooded, saline water" />' +
    '<ColorMapEntry color="#00DC82" quantity="180" label="Shrub or herbaceous cover, flooded, fresh / saline / brackish water" />' +
    '<ColorMapEntry color="#C31400" quantity="190" label="Urban areas" />' +
    '<ColorMapEntry color="#FFF5D7" quantity="200" label="Bare areas" />' +
    '<ColorMapEntry color="#DCDCDC" quantity="201" label="Consolidated bare areas" />' +
    '<ColorMapEntry color="#FFF5D7" quantity="202" label="Unconsolidated bare areas" />' +
    '<ColorMapEntry color="#0046C8" quantity="210" label="Water bodies" />' +
    '<ColorMapEntry color="#FFFFFF" quantity="220" label="Permanent snow and ice" />' +
  '</ColorMap>' +
'</RasterSymbolizer>';

// Display original ESA CCI land cover maps
Map.addLayer(tni1992.sldStyle(esa_style), {}, 'ESA 1992', false);
Map.addLayer(tni2004.sldStyle(esa_style), {}, 'ESA 2004', false);
Map.addLayer(tni2015.sldStyle(esa_style), {}, 'ESA 2015', false);

// Display reclassified ESA CCI land cover maps
var paletteREV = ['000000', '003c00', '8ca000', '966400', 'ffb432', 'ffff64', 'a6cee3'];
Map.addLayer(masked1992tni,  {min: 0, max: 6, palette: paletteREV}, 'TNI 1992', true);
Map.addLayer(masked2004tni,  {min: 0, max: 6, palette: paletteREV}, 'TNI 2004', true);
Map.addLayer(masked2015tni,  {min: 0, max: 6, palette: paletteREV}, 'TNI 2015', true);

// Display box extent layer
Map.addLayer(box, {'color': '000000'}, 'Box', false); 


/*******************************
  EXPORT MASKED LAND COVER MAPS
********************************/

// Land cover map 1992 
Export.image(masked1992tni.uint8(), 'Landscape_1992', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 1993 
Export.image(masked1993tni.uint8(), 'Landscape_1993', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 1994 
Export.image(masked1994tni.uint8(), 'Landscape_1994', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 1995 
Export.image(masked1995tni.uint8(), 'Landscape_1995', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 1996
Export.image(masked1996tni.uint8(), 'Landscape_1996', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 1997
Export.image(masked1997tni.uint8(), 'Landscape_1997', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 1998
Export.image(masked1998tni.uint8(), 'Landscape_1998', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 1999
Export.image(masked1999tni.uint8(), 'Landscape_1999', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2000
Export.image(masked2000tni.uint8(), 'Landscape_2000', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2001
Export.image(masked2001tni.uint8(), 'Landscape_2001', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2002
Export.image(masked2002tni.uint8(), 'Landscape_2002', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2003
Export.image(masked2003tni.uint8(), 'Landscape_2003', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2004 
Export.image(masked2004tni.uint8(), 'Landscape_2004', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2005
Export.image(masked2005tni.uint8(), 'Landscape_2005', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2006
Export.image(masked2006tni.uint8(), 'Landscape_2006', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2007
Export.image(masked2007tni.uint8(), 'Landscape_2007', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2008
Export.image(masked2008tni.uint8(), 'Landscape_2008', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2009
Export.image(masked2009tni.uint8(), 'Landscape_2009', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2010
Export.image(masked2010tni.uint8(), 'Landscape_2010', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2011
Export.image(masked2011tni.uint8(), 'Landscape_2011', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2012
Export.image(masked2012tni.uint8(), 'Landscape_2012', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2013
Export.image(masked2013tni.uint8(), 'Landscape_2013', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2014
Export.image(masked2014tni.uint8(), 'Landscape_2014', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

// Land cover map 2015 
Export.image(masked2015tni.uint8(), 'Landscape_2015', {
  region: box,
  scale: 300,
  maxPixels: 300000000,
  });

