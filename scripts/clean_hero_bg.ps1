Add-Type -AssemblyName System.Drawing

$src = "d:\Career\NgocSangHotel\public\images\hero-reference-bg.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($src)
$width = $bmp.Width
$height = $bmp.Height

$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

# Text area is from x=0 to x=280
# Window starts around x=300
$rect = New-Object System.Drawing.Rectangle(0, 0, 280, $height)
$cStart = [System.Drawing.Color]::FromArgb(255, 68, 48, 38)
$cEnd = [System.Drawing.Color]::FromArgb(255, 88, 62, 50)

$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $rect,
    $cStart,
    $cEnd,
    [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
)
$g.FillRectangle($brush, $rect)

# Soft feather blend from x=280 to x=310
$blendRect = New-Object System.Drawing.Rectangle(278, 0, 32, $height)
$blendBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $blendRect,
    [System.Drawing.Color]::FromArgb(255, 88, 62, 50),
    [System.Drawing.Color]::FromArgb(0, 88, 62, 50),
    [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
)
$g.FillRectangle($blendBrush, $blendRect)

$g.Dispose()

$dst = "d:\Career\NgocSangHotel\public\images\hero-clean-bg.jpg"
$bmp.Save($dst, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$bmp.Dispose()

Write-Output "Clean hero background with intact arched window created!"
