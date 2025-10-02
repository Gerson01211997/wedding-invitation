# Script para iniciar el servidor React accesible desde la red
Write-Host "🚀 Iniciando servidor React accesible desde la red..." -ForegroundColor Green

# Obtener la IP local
$localIP = (Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Wi-Fi*" | Where-Object {$_.IPAddress -like "192.168.*" -or $_.IPAddress -like "10.*" -or $_.IPAddress -like "172.*"})[0].IPAddress

if (-not $localIP) {
    $localIP = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -like "192.168.*" -or $_.IPAddress -like "10.*" -or $_.IPAddress -like "172.*"})[0].IPAddress
}

Write-Host "📡 Tu IP local es: $localIP" -ForegroundColor Yellow
Write-Host "🌐 El sitio estará disponible en:" -ForegroundColor Cyan
Write-Host "   - Local: http://localhost:3000" -ForegroundColor White
Write-Host "   - Red:   http://$localIP:3000" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  Asegúrate de que el firewall de Windows permita conexiones en el puerto 3000" -ForegroundColor Red
Write-Host ""

# Configurar variables de entorno y ejecutar
$env:HOST = "0.0.0.0"
$env:PORT = "3000"

# Iniciar el servidor
npm start
