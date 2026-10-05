Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\buiph\.gemini\antigravity-ide\brain\0e818bed-b81b-4c61-8b42-d24d6eabeb17\.user_uploaded"
$dstDir = "d:\Career\NgocSangHotel\public\images"

# 1. Experience banner + 3 cards from media_1791189121561.png (852 x 482)
# The Experience section is the bottom half: Y from ~230 to 475
$imgExp = [System.Drawing.Bitmap]::FromFile("$srcDir\media_1791189121561.png")

# Lake background: crop the background banner
$rectLake = New-Object System.Drawing.Rectangle(0, 240, 852, 235)
$bmpLake = $imgExp.Clone($rectLake, $imgExp.PixelFormat)
$bmpLake.Save("$dstDir\dalat-lake-banner.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpLake.Dispose()

# Card 1: Coffee (approx x: 512, y: 288, w: 108, h: 172)
$rectCoffee = New-Object System.Drawing.Rectangle(512, 292, 108, 168)
$bmpCoffee = $imgExp.Clone($rectCoffee, $imgExp.PixelFormat)
$bmpCoffee.Save("$dstDir\exp-coffee.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpCoffee.Dispose()

# Card 2: Church (approx x: 630, y: 270, w: 110, h: 190)
$rectChurch = New-Object System.Drawing.Rectangle(630, 274, 110, 186)
$bmpChurch = $imgExp.Clone($rectChurch, $imgExp.PixelFormat)
$bmpChurch.Save("$dstDir\exp-church.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpChurch.Dispose()

# Card 3: Food (approx x: 748, y: 274, w: 110, h: 186)
$rectFood = New-Object System.Drawing.Rectangle(748, 274, 104, 186)
$bmpFood = $imgExp.Clone($rectFood, $imgExp.PixelFormat)
$bmpFood.Save("$dstDir\exp-food.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpFood.Dispose()

$imgExp.Dispose()

# 2. Location & Sunset CTA from media_1791189129527.png (847 x 635)
$imgLoc = [System.Drawing.Bitmap]::FromFile("$srcDir\media_1791189129527.png")

# Map card (approx x: 405, y: 60, w: 280, h: 155)
$rectMap = New-Object System.Drawing.Rectangle(405, 60, 280, 155)
$bmpMap = $imgLoc.Clone($rectMap, $imgLoc.PixelFormat)
$bmpMap.Save("$dstDir\dalat-map-card.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpMap.Dispose()

# Sunset CTA Banner (approx x: 0, y: 410, w: 847, h: 145)
$rectSunset = New-Object System.Drawing.Rectangle(0, 410, 847, 145)
$bmpSunset = $imgLoc.Clone($rectSunset, $imgLoc.PixelFormat)
$bmpSunset.Save("$dstDir\dalat-sunset-cta.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpSunset.Dispose()

$imgLoc.Dispose()

# 3. Hero background from media_1791189106222.jpg (858 x 635)
$imgHero = [System.Drawing.Bitmap]::FromFile("$srcDir\media_1791189106222.jpg")
$rectHero = New-Object System.Drawing.Rectangle(0, 0, 858, 290)
$bmpHero = $imgHero.Clone($rectHero, $imgHero.PixelFormat)
$bmpHero.Save("$dstDir\hero-reference-bg.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmpHero.Dispose()
$imgHero.Dispose()

Write-Output "Assets extracted successfully!"
