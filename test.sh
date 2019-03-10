#!/bin/bash

offImage='images/off/gerble-lait-chocolat/front_fr.71.full.jpg'
myImage='images/off/gerble-lait-chocolat/IMG_0177.jpg'

./match.py --feature=sift  $offImage $myImage
./match.py --feature=sift-flann  $offImage $myImage
./match.py --feature=surf  $offImage $myImage
./match.py --feature=surf-flann  $offImage $myImage
./match.py --feature=orb  $offImage $myImage
./match.py --feature=orb-flann  $offImage $myImage
./match.py --feature=akaze  $offImage $myImage
./match.py --feature=akaze-flann  $offImage $myImage
./match.py --feature=brisk  $offImage $myImage
./match.py --feature=brisk-flann  $offImage $myImage