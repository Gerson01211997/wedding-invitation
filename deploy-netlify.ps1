# Script para deploy automático a Netlify
Write-Host "🚀 Preparando deploy a Netlify..." -ForegroundColor Green

# Verificar si existe netlify-cli
$netlifyInstalled = Get-Command netlify -ErrorAction SilentlyContinue

if (-not $netlifyInstalled) {
    Write-Host "📦 Instalando Netlify CLI..." -ForegroundColor Yellow
    npm install -g netlify-cli
}

Write-Host "🔨 Construyendo el proyecto..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build completado exitosamente!" -ForegroundColor Green
    Write-Host "🌐 Desplegando a Netlify..." -ForegroundColor Cyan
    
    netlify deploy --prod --dir=build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "🎉 ¡Deploy completado!" -ForegroundColor Green
        Write-Host "Tu sitio está ahora disponible públicamente" -ForegroundColor White
    } else {
        Write-Host "❌ Error en el deploy" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Error en el build" -ForegroundColor Red
}
