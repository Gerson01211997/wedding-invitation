# Script para deploy automático a Vercel
Write-Host "🚀 Preparando deploy a Vercel..." -ForegroundColor Green

# Verificar si existe vercel-cli
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue

if (-not $vercelInstalled) {
    Write-Host "📦 Instalando Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host "🌐 Desplegando a Vercel..." -ForegroundColor Cyan
Write-Host "⚠️  Sigue las instrucciones en pantalla para configurar tu proyecto" -ForegroundColor Yellow

vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 ¡Deploy completado!" -ForegroundColor Green
    Write-Host "Tu sitio está ahora disponible públicamente" -ForegroundColor White
} else {
    Write-Host "❌ Error en el deploy" -ForegroundColor Red
}
