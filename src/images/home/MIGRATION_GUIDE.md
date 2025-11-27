# Home Background Images Migration Guide

## Current Figma Assets Being Used

The home page currently uses these 5 Figma assets:

1. `figma:asset/c00e4a5eb0a33bb1e6ad4b7ec3910c16ba75d5cb.png`
2. `figma:asset/0e340163d930663367a2823a579ddd20d93cd433.png`
3. `figma:asset/41c9683624f3c53271d5794da0028093530a60a5.png`
4. `figma:asset/efa86bb22fc7e00993068b038bd1a1c1d4d77397.png`
5. `figma:asset/2c697777245a3b03c35ec6c25db336267a21a5b0.png`

## Migration Steps

To migrate these images to the `/images/home/` folder:

1. Download/export each of these 5 images from your Figma assets
2. Save them in this folder with the following names:
   - `background-01.png` (or .jpg)
   - `background-02.png`
   - `background-03.png`
   - `background-04.png`
   - `background-05.png`

3. Once the images are in place, the Home.tsx component will automatically use them

## Adding More Images

You can add more background images to this folder. Just follow the naming convention:
- `background-06.png`
- `background-07.png`
- etc.

The code will automatically include all images that match this pattern.
