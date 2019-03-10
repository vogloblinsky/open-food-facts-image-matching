# open-food-facts-image-matching

Proof of concept of image matching with Open Food Facts products

## Pain d'épices au miel BIO - Bjorg - 300g

Pas injecté

IMG_9575.jpg

https://fr.openfoodfacts.org/produit/3229820004341/pain-d-epices-au-miel-bio-bjorg

https://fr.openfoodfacts.org/api/v0/product/3229820004341.json

## P'tit Nature Complet - Bjorg - 24 biscuits

Bien injecté

IMG_9576.jpg

https://fr.openfoodfacts.org/produit/3229820021027/p-tit-nature-complet-bjorg

https://fr.openfoodfacts.org/api/v0/product/3229820021027.json

https://i.ibb.co/7kKvz8X/IMG-9576.jpg

## Le cookie chocolat noisettes - Bjorg - 200g

Bien injecté

IMG_9577.jpg

https://fr.openfoodfacts.org/produit/3229820004334/le-cookie-chocolat-noisettes-bjorg

https://fr.openfoodfacts.org/api/v0/product/3229820004334.json

## Le Boudoir - Brossard - 175g

Bien injecté

IMG_9578.jpg

https://fr.openfoodfacts.org/produit/3088864620050/le-boudoir-brossard

https://fr.openfoodfacts.org/api/v0/product/3088864620050.json

https://i.ibb.co/GdJ4TsL/IMG-9578.jpg

crop right : https://i.ibb.co/1mt8fND/IMG-9578-crop-right.jpg

# Status

KO avec image-match

Plan B : openCV + pattern matching

## imgcompare test

https://github.com/fchasen/imgcompare

Algorithmes disponibles : sift, surf, orb, akaze, brisk

Résultats avec image "Boudoir Brossard"

| sift | sift-flann | surf | surf-flann | orb | orb-flann | akaze | akaze-flann | brisk | brisk-flann |
| :--: | :--------: | :--: | :--------: | :-: | :-------: | :---: | :---------: | :---: | :---------: |
| 58%  |    56%     | 50%  |    60%     | 86% |    75%    |  63%  |     59%     |  61%  |     62%     |

Résultats avec image "Bjorg cookie"

orb : 84%

Résultats avec image "Bjorg nature" - orientée à 90%

sift : 64%
sift-flann : 68%
surf : 68%
surf-flann : 69%
orb : 59%
orb-flann : 48%
akaze : 58%
akaze-flann : 82%
brisk : 67%
brisk-flann : 82%

Résultats avec image "Bjorg pain"

sift : 50%
sift-flann : 51%
surf : 56%
surf-flann : 57%
orb : 54%
orb-flann : 57%
akaze : 56%
akaze-flann : 63%
brisk : 62%
brisk-flann : 59%

./match.py --feature=sift images/off/gerbe-fondant-chocolat-lait/front_fr.22.full.jpg images/off/gerbe-fondant-chocolat-lait/IMG_0179.jpg
