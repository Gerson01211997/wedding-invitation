import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './PDFGenerator.css';

const PDFGenerator = () => {
  const [invitationNumbers, setInvitationNumbers] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCount, setGeneratedCount] = useState(0);

  // URL base de la página (puedes cambiarla según tu dominio)
  const baseUrl = 'https://gerson01211997.github.io/wedding-invitation';

  const generatePDF = (invitationNumber) => {
    const doc = new jsPDF();
    
    // Configuración de colores
    const primaryColor = '#8B4513'; // Marrón
    const secondaryColor = '#DAA520'; // Dorado
    const textColor = '#2F4F4F'; // Gris oscuro

    // Título principal
    doc.setFontSize(24);
    doc.setTextColor(primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text('Invitación de Boda', 105, 30, { align: 'center' });

    // Línea decorativa
    doc.setDrawColor(secondaryColor);
    doc.setLineWidth(2);
    doc.line(50, 40, 160, 40);

    // Nombres de los novios
    doc.setFontSize(18);
    doc.setTextColor(textColor);
    doc.setFont('helvetica', 'normal');
    doc.text('Gerson & Kathe', 105, 60, { align: 'center' });

    // Fecha de la boda
    doc.setFontSize(14);
    doc.text('Sábado, 15 de Noviembre de 2025', 105, 80, { align: 'center' });
    doc.text('6:30 PM', 105, 95, { align: 'center' });

    // Número de invitación
    doc.setFontSize(16);
    doc.setTextColor(primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text(`Número de cupos: ${invitationNumber}`, 105, 150, { align: 'center' });

    // Línea decorativa inferior
    doc.setDrawColor(secondaryColor);
    doc.setLineWidth(1);
    doc.line(50, 160, 160, 160);

    
    // Crear un enlace clickeable
    doc.setFontSize(9);
    doc.setTextColor('#FFFFFF');
    doc.setFont('helvetica', 'bold');
    
    // Dibujar un rectángulo como botón
    doc.setDrawColor(secondaryColor);
    doc.setFillColor(secondaryColor);
    doc.roundedRect(60, 180, 90, 12, 3, 3, 'FD');
    
    // Agregar el enlace clickeable
    doc.link(60, 180, 90, 12, { url: baseUrl });
    doc.text('Clic para ver la invitación', 105, 188, { align: 'center' });
    
    // // URL debajo del botón
    // doc.setFontSize(8);
    // doc.setTextColor(textColor);
    // doc.setFont('helvetica', 'normal');
    // doc.text(baseUrl, 105, 200, { align: 'center' });

   

    return doc;
  };

  const handleGeneratePDFs = async () => {
    if (!invitationNumbers.trim()) {
      alert('Por favor ingresa al menos un número de invitación');
      return;
    }

    setIsGenerating(true);
    setGeneratedCount(0);

    try {
      // Convertir la entrada en un arreglo de números
      const numbers = invitationNumbers
        .split(',')
        .map(num => num.trim())
        .filter(num => num !== '');

      if (numbers.length === 0) {
        alert('No se encontraron números válidos');
        return;
      }

      // Generar un PDF por cada número de invitación
      for (let i = 0; i < numbers.length; i++) {
        const invitationNumber = numbers[i];
        const doc = generatePDF(invitationNumber);
        
        // Descargar el PDF
        doc.save(`invitacion_${invitationNumber}.pdf`);
        
        setGeneratedCount(i + 1);
        
        // Pequeña pausa para evitar problemas de descarga
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      alert(`¡Se generaron ${numbers.length} PDFs exitosamente!`);
    } catch (error) {
      console.error('Error generando PDFs:', error);
      alert('Hubo un error al generar los PDFs');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleClear = () => {
    setInvitationNumbers('');
    setGeneratedCount(0);
  };

  return (
    <div className="pdf-generator">
      <div className="pdf-generator-container">
        <h2 className="pdf-generator-title">Generador de Invitaciones PDF</h2>
        
        <div className="pdf-generator-form">
          <label htmlFor="invitation-numbers" className="pdf-generator-label">
            Números de Invitación:
          </label>
          <textarea
            id="invitation-numbers"
            className="pdf-generator-textarea"
            value={invitationNumbers}
            onChange={(e) => setInvitationNumbers(e.target.value)}
            placeholder="Ingresa los números de invitación separados por comas. Ejemplo: 1, 2, 3, 4, 5"
            rows={4}
          />
          
          <div className="pdf-generator-info">
            <p>• Separa los números con comas</p>
            <p>• Se generará un PDF individual para cada número</p>
            <p>• Cada PDF incluirá un enlace para confirmar asistencia</p>
          </div>

          <div className="pdf-generator-buttons">
            <button
              onClick={handleGeneratePDFs}
              disabled={isGenerating || !invitationNumbers.trim()}
              className="pdf-generator-button pdf-generator-button-primary"
            >
              {isGenerating ? `Generando... (${generatedCount})` : 'Generar PDFs'}
            </button>
            
            <button
              onClick={handleClear}
              disabled={isGenerating}
              className="pdf-generator-button pdf-generator-button-secondary"
            >
              Limpiar
            </button>
          </div>

          {isGenerating && (
            <div className="pdf-generator-progress">
              <div className="pdf-generator-progress-bar">
                <div 
                  className="pdf-generator-progress-fill"
                  style={{ 
                    width: `${(generatedCount / invitationNumbers.split(',').filter(n => n.trim()).length) * 100}%` 
                  }}
                ></div>
              </div>
              <p>Generando PDFs... {generatedCount} de {invitationNumbers.split(',').filter(n => n.trim()).length}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFGenerator;
