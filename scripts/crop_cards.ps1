Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Users\buiph\.gemini\antigravity-ide\brain\0e818bed-b81b-4c61-8b42-d24d6eabeb17\.user_uploaded"
$dstDir = "d:\Career\NgocSangHotel\public\images"

$imgExp = [System.Drawing.Bitmap]::FromFile("$srcDir\media_1791189121561.png")

# Card 1: Coffee photo
$rectCoffee = New-Object System.Drawing.Rectangle(438, 270, 108, 92)
$bmpCoffee = $imgExp.Clone($rectCoffee, $imgExp.PixelFormat)
$bmpCoffee.Save("$dstDir\card-photo-coffee.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpCoffee.Dispose()

# Card 2: Church photo
$rectChurch = New-Object System.Drawing.Rectangle(558, 270, 110, 102)
$bmpChurch = $imgExp.Clone($rectChurch, $imgExp.PixelFormat)
$bmpChurch.Save("$dstDir\card-photo-church.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpChurch.Dispose()

# Card 3: Food photo
$rectFood = New-Object System.Drawing.Rectangle(678, 270, 108, 102)
$bmpFood = $imgExp.Clone($rectFood, $imgExp.PixelFormat)
$bmpFood.Save("$dstDir\card-photo-food.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmpFood.Dispose()

$imgExp.Dispose()
Write-Output "Card photos extracted!"
