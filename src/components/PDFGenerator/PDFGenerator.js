// // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // import jsPDF from 'jspdf';
// // // // // // // // // // import './PDFGenerator.css';

// // // // // // // // // // const PDFGenerator = () => {
// // // // // // // // // //   const [invitationNumbers, setInvitationNumbers] = useState('');
// // // // // // // // // //   const [isGenerating, setIsGenerating] = useState(false);
// // // // // // // // // //   const [generatedCount, setGeneratedCount] = useState(0);

// // // // // // // // // //   // URL base de la página (puedes cambiarla según tu dominio)
// // // // // // // // // //   const baseUrl = 'https://gerson01211997.github.io/wedding-invitation';

// // // // // // // // // //   const generatePDF = (invitationNumber) => {
// // // // // // // // // //     const doc = new jsPDF();
    
// // // // // // // // // //     // Configuración de colores
// // // // // // // // // //     const primaryColor = '#8B4513'; // Marrón
// // // // // // // // // //     const secondaryColor = '#DAA520'; // Dorado
// // // // // // // // // //     const textColor = '#2F4F4F'; // Gris oscuro

// // // // // // // // // //     // Título principal
// // // // // // // // // //     doc.setFontSize(24);
// // // // // // // // // //     doc.setTextColor(primaryColor);
// // // // // // // // // //     doc.setFont('helvetica', 'bold');
// // // // // // // // // //     doc.text('Invitación de Boda', 105, 30, { align: 'center' });

// // // // // // // // // //     // Línea decorativa
// // // // // // // // // //     doc.setDrawColor(secondaryColor);
// // // // // // // // // //     doc.setLineWidth(2);
// // // // // // // // // //     doc.line(50, 40, 160, 40);

// // // // // // // // // //     // Nombres de los novios
// // // // // // // // // //     doc.setFontSize(18);
// // // // // // // // // //     doc.setTextColor(textColor);
// // // // // // // // // //     doc.setFont('helvetica', 'normal');
// // // // // // // // // //     doc.text('Gerson & Kathe', 105, 60, { align: 'center' });

// // // // // // // // // //     // Fecha de la boda
// // // // // // // // // //     doc.setFontSize(14);
// // // // // // // // // //     doc.text('Sábado, 15 de Noviembre de 2025', 105, 80, { align: 'center' });
// // // // // // // // // //     doc.text('6:30 PM', 105, 95, { align: 'center' });

// // // // // // // // // //     // Número de invitación
// // // // // // // // // //     doc.setFontSize(16);
// // // // // // // // // //     doc.setTextColor(primaryColor);
// // // // // // // // // //     doc.setFont('helvetica', 'bold');
// // // // // // // // // //     doc.text(`Número de cupos: ${invitationNumber}`, 105, 150, { align: 'center' });

// // // // // // // // // //     // Línea decorativa inferior
// // // // // // // // // //     doc.setDrawColor(secondaryColor);
// // // // // // // // // //     doc.setLineWidth(1);
// // // // // // // // // //     doc.line(50, 160, 160, 160);

    
// // // // // // // // // //     // Crear un enlace clickeable
// // // // // // // // // //     doc.setFontSize(9);
// // // // // // // // // //     doc.setTextColor('#FFFFFF');
// // // // // // // // // //     doc.setFont('helvetica', 'bold');
    
// // // // // // // // // //     // Dibujar un rectángulo como botón
// // // // // // // // // //     doc.setDrawColor(secondaryColor);
// // // // // // // // // //     doc.setFillColor(secondaryColor);
// // // // // // // // // //     doc.roundedRect(60, 180, 90, 12, 3, 3, 'FD');
    
// // // // // // // // // //     // Agregar el enlace clickeable
// // // // // // // // // //     doc.link(60, 180, 90, 12, { url: baseUrl });
// // // // // // // // // //     doc.text('Clic para ver la invitación', 105, 188, { align: 'center' });
    
// // // // // // // // // //     // // URL debajo del botón
// // // // // // // // // //     // doc.setFontSize(8);
// // // // // // // // // //     // doc.setTextColor(textColor);
// // // // // // // // // //     // doc.setFont('helvetica', 'normal');
// // // // // // // // // //     // doc.text(baseUrl, 105, 200, { align: 'center' });

   

// // // // // // // // // //     return doc;
// // // // // // // // // //   };

// // // // // // // // // //   const handleGeneratePDFs = async () => {
// // // // // // // // // //     if (!invitationNumbers.trim()) {
// // // // // // // // // //       alert('Por favor ingresa al menos un número de invitación');
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     setIsGenerating(true);
// // // // // // // // // //     setGeneratedCount(0);

// // // // // // // // // //     try {
// // // // // // // // // //       // Convertir la entrada en un arreglo de números
// // // // // // // // // //       const numbers = invitationNumbers
// // // // // // // // // //         .split(',')
// // // // // // // // // //         .map(num => num.trim())
// // // // // // // // // //         .filter(num => num !== '');

// // // // // // // // // //       if (numbers.length === 0) {
// // // // // // // // // //         alert('No se encontraron números válidos');
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       // Generar un PDF por cada número de invitación
// // // // // // // // // //       for (let i = 0; i < numbers.length; i++) {
// // // // // // // // // //         const invitationNumber = numbers[i];
// // // // // // // // // //         const doc = generatePDF(invitationNumber);
        
// // // // // // // // // //         // Descargar el PDF
// // // // // // // // // //         doc.save(`invitacion_${invitationNumber}.pdf`);
        
// // // // // // // // // //         setGeneratedCount(i + 1);
        
// // // // // // // // // //         // Pequeña pausa para evitar problemas de descarga
// // // // // // // // // //         await new Promise(resolve => setTimeout(resolve, 500));
// // // // // // // // // //       }

// // // // // // // // // //       alert(`¡Se generaron ${numbers.length} PDFs exitosamente!`);
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error('Error generando PDFs:', error);
// // // // // // // // // //       alert('Hubo un error al generar los PDFs');
// // // // // // // // // //     } finally {
// // // // // // // // // //       setIsGenerating(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleClear = () => {
// // // // // // // // // //     setInvitationNumbers('');
// // // // // // // // // //     setGeneratedCount(0);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="pdf-generator">
// // // // // // // // // //       <div className="pdf-generator-container">
// // // // // // // // // //         <h2 className="pdf-generator-title">Generador de Invitaciones PDF</h2>
        
// // // // // // // // // //         <div className="pdf-generator-form">
// // // // // // // // // //           <label htmlFor="invitation-numbers" className="pdf-generator-label">
// // // // // // // // // //             Números de Invitación:
// // // // // // // // // //           </label>
// // // // // // // // // //           <textarea
// // // // // // // // // //             id="invitation-numbers"
// // // // // // // // // //             className="pdf-generator-textarea"
// // // // // // // // // //             value={invitationNumbers}
// // // // // // // // // //             onChange={(e) => setInvitationNumbers(e.target.value)}
// // // // // // // // // //             placeholder="Ingresa los números de invitación separados por comas. Ejemplo: 1, 2, 3, 4, 5"
// // // // // // // // // //             rows={4}
// // // // // // // // // //           />
          
// // // // // // // // // //           <div className="pdf-generator-info">
// // // // // // // // // //             <p>• Separa los números con comas</p>
// // // // // // // // // //             <p>• Se generará un PDF individual para cada número</p>
// // // // // // // // // //             <p>• Cada PDF incluirá un enlace para confirmar asistencia</p>
// // // // // // // // // //           </div>

// // // // // // // // // //           <div className="pdf-generator-buttons">
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={handleGeneratePDFs}
// // // // // // // // // //               disabled={isGenerating || !invitationNumbers.trim()}
// // // // // // // // // //               className="pdf-generator-button pdf-generator-button-primary"
// // // // // // // // // //             >
// // // // // // // // // //               {isGenerating ? `Generando... (${generatedCount})` : 'Generar PDFs'}
// // // // // // // // // //             </button>
            
// // // // // // // // // //             <button
// // // // // // // // // //               onClick={handleClear}
// // // // // // // // // //               disabled={isGenerating}
// // // // // // // // // //               className="pdf-generator-button pdf-generator-button-secondary"
// // // // // // // // // //             >
// // // // // // // // // //               Limpiar
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>

// // // // // // // // // //           {isGenerating && (
// // // // // // // // // //             <div className="pdf-generator-progress">
// // // // // // // // // //               <div className="pdf-generator-progress-bar">
// // // // // // // // // //                 <div 
// // // // // // // // // //                   className="pdf-generator-progress-fill"
// // // // // // // // // //                   style={{ 
// // // // // // // // // //                     width: `${(generatedCount / invitationNumbers.split(',').filter(n => n.trim()).length) * 100}%` 
// // // // // // // // // //                   }}
// // // // // // // // // //                 ></div>
// // // // // // // // // //               </div>
// // // // // // // // // //               <p>Generando PDFs... {generatedCount} de {invitationNumbers.split(',').filter(n => n.trim()).length}</p>
// // // // // // // // // //             </div>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default PDFGenerator;

// // // // // // // // // // InvitationPDF.jsx
// // // // // // // // // import React, { useRef } from "react";
// // // // // // // // // import jsPDF from "jspdf";

// // // // // // // // // /**
// // // // // // // // //  * Componente InvitationPDF
// // // // // // // // //  *
// // // // // // // // //  * Props (opcional):
// // // // // // // // //  * - backgroundUrl: string -> ruta/URL de la imagen de fondo (por defecto "/fondo-invitacion.jpg")
// // // // // // // // //  * - brideGroom: string -> "Boda Angélica & Alberto" (título)
// // // // // // // // //  * - guestName: string -> "Sr. Alex Murillo & Sra"
// // // // // // // // //  * - seats: number -> 2
// // // // // // // // //  * - dateLabel: string -> "06 | DICIEMBRE | 2025"
// // // // // // // // //  * - hashtag: string -> "#Nabarros"
// // // // // // // // //  * - extraNote: string -> "Lluvia de sobres"
// // // // // // // // //  * - linkUrl: string -> "http://nabarros.framer.website/"
// // // // // // // // //  */
// // // // // // // // // export default function InvitationPDF({
// // // // // // // // //   backgroundUrl = "https://gerson01211997.github.io/wedding-invitation/photos/13.webp",
// // // // // // // // //   brideGroom = "¡Nos casamos!",
// // // // // // // // //   guestName = "Gerson & Kathe",
// // // // // // // // //   seats = 2,
// // // // // // // // //   dateLabel = "15 | Noviembre | 2025",
// // // // // // // // //   extraNote = "Lluvia de sobres",
// // // // // // // // //   linkUrl = "http://nabarros.framer.website/",
// // // // // // // // // }) {
// // // // // // // // //   const loadingRef = useRef(false);

// // // // // // // // //   // Genera el PDF y devuelve un Blob URL (para abrir en nueva pestaña)
// // // // // // // // //   const generatePdfBlobUrl = async () => {
// // // // // // // // //     if (loadingRef.current) return;
// // // // // // // // //     loadingRef.current = true;

// // // // // // // // //     try {
// // // // // // // // //       const doc = new jsPDF({
// // // // // // // // //         orientation: "portrait",
// // // // // // // // //         unit: "px",
// // // // // // // // //         format: "a4",
// // // // // // // // //       });

// // // // // // // // //       const pageWidth = doc.internal.pageSize.getWidth();
// // // // // // // // //       const pageHeight = doc.internal.pageSize.getHeight();

// // // // // // // // //       // Cargar la imagen de fondo como Image object para asegurar que esté lista
// // // // // // // // //       const loadImage = (src) =>
// // // // // // // // //         new Promise((resolve, reject) => {
// // // // // // // // //           const img = new Image();
// // // // // // // // //           // evitar CORS cuando se usa URL remota: el servidor debe permitirlo, si no, usa una imagen en /public
// // // // // // // // //           img.crossOrigin = "anonymous";
// // // // // // // // //           img.onload = () => resolve(img);
// // // // // // // // //           img.onerror = (e) => reject(e);
// // // // // // // // //           img.src = src;
// // // // // // // // //         });

// // // // // // // // //       let img;
// // // // // // // // //       try {
// // // // // // // // //         img = await loadImage(backgroundUrl);
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.warn("No se pudo cargar la imagen de fondo; se seguirá con fondo blanco.", err);
// // // // // // // // //       }

// // // // // // // // //       // Si la imagen se cargó, la colocamos cubriendo la página
// // // // // // // // //       if (img) {
// // // // // // // // //         // ajustar manteniendo proporción para cubrir la página
// // // // // // // // //         doc.addImage(
// // // // // // // // //           img,
// // // // // // // // //           "JPEG",
// // // // // // // // //           0,
// // // // // // // // //           0,
// // // // // // // // //           pageWidth,
// // // // // // // // //           pageHeight,
// // // // // // // // //         );
// // // // // // // // //       } else {
// // // // // // // // //         // fondo alternativo: rectángulo suave
// // // // // // // // //         doc.setFillColor(250, 250, 250);
// // // // // // // // //         doc.rect(0, 0, pageWidth, pageHeight, "F");
// // // // // // // // //       }

// // // // // // // // //       // --- Texto: estilizado para parecerse al PDF original ---
// // // // // // // // //       // Título grande (arriba)
// // // // // // // // //       doc.setFont("times", "bold");
// // // // // // // // //       doc.setFontSize(30);
// // // // // // // // //       doc.setTextColor("#1a1a1a"); // se puede ajustar
// // // // // // // // //       // Centrar título
// // // // // // // // //       const titleX = pageWidth / 2;
// // // // // // // // //       doc.text(brideGroom, titleX, 120, { align: "center" });

// // // // // // // // //       // Botón/Texto "CLICK AQUÍ" (hacemos un área con link encima)
// // // // // // // // //       doc.setFontSize(18);
// // // // // // // // //       doc.setFont("times", "normal");
// // // // // // // // //       const clickText = "CLICK AQUÍ";
// // // // // // // // //       // posición aproximada
// // // // // // // // //       const clickY = 170;
// // // // // // // // //       doc.text(clickText, titleX, clickY, { align: "center" });

// // // // // // // // //       // Añadir link clicable (rectángulo invisible encima del texto)
// // // // // // // // //       // obtenemos ancho aproximado del texto para crear el área del link
// // // // // // // // //       const clickTextWidth = doc.getTextWidth(clickText);
// // // // // // // // //       const linkRectWidth = clickTextWidth + 10;
// // // // // // // // //       const linkRectHeight = 20;
// // // // // // // // //       const linkRectX = titleX - linkRectWidth / 2;
// // // // // // // // //       const linkRectY = clickY - 14; // ajustar para cubrir el texto

// // // // // // // // //       // doc.link(x, y, width, height, { url: "..." });
// // // // // // // // //       doc.link(linkRectX, linkRectY, linkRectWidth, linkRectHeight, { url: linkUrl });

// // // // // // // // //       // Invitado
// // // // // // // // //       doc.setFontSize(20);
// // // // // // // // //       doc.setFont("times", "bold");
// // // // // // // // //       doc.text(guestName, pageWidth / 2, 220, { align: "center" });

// // // // // // // // //       // Texto "Hemos reservado X lugar(es) en tu honor"
// // // // // // // // //       doc.setFontSize(14);
// // // // // // // // //       doc.setFont("times", "normal");
// // // // // // // // //       const reservedText = `Hemos reservado ${seats} lugar(es) en tu honor`;
// // // // // // // // //       doc.text(reservedText, pageWidth / 2, 260, { align: "center" });

// // // // // // // // //       // Nombre de los novios pequeño encima de la fecha (si quieres duplicar estilo original)
// // // // // // // // //       doc.setFontSize(16);
// // // // // // // // //       doc.text("Angélica & Alberto", pageWidth / 2, 300, { align: "center" });

// // // // // // // // //       // Fecha grande centrada
// // // // // // // // //       doc.setFontSize(18);
// // // // // // // // //       doc.setFont("times", "bold");
// // // // // // // // //       doc.text(dateLabel, pageWidth / 2, 340, { align: "center" });

// // // // // // // // //       doc.setFontSize(12);
// // // // // // // // //       doc.text(`*${extraNote}*`, pageWidth / 2, 400, { align: "center" });

// // // // // // // // //       // Enlace visible (por si el lector quiere copiarlo)
// // // // // // // // //       doc.setFontSize(10);
// // // // // // // // //       doc.setTextColor("#0000EE");
// // // // // // // // //       doc.text(linkUrl, pageWidth / 2, pageHeight - 40, { align: "center" });
// // // // // // // // //       // también ponemos link encima de esa línea
// // // // // // // // //       const urlTextWidth = doc.getTextWidth(linkUrl);
// // // // // // // // //       doc.link(pageWidth / 2 - urlTextWidth / 2, pageHeight - 50, urlTextWidth, 12, { url: linkUrl });

// // // // // // // // //       // --- Fin del PDF ---
// // // // // // // // //       // Convertir a Blob para abrir en nueva pestaña
// // // // // // // // //       const pdfBlob = doc.output("blob");
// // // // // // // // //       const blobUrl = URL.createObjectURL(pdfBlob);

// // // // // // // // //       loadingRef.current = false;
// // // // // // // // //       return blobUrl;
// // // // // // // // //     } catch (error) {
// // // // // // // // //       loadingRef.current = false;
// // // // // // // // //       console.error("Error generando PDF:", error);
// // // // // // // // //       throw error;
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Abrir en nueva pestaña (vista previa)
// // // // // // // // //   const handleViewInvitation = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const blobUrl = await generatePdfBlobUrl();
// // // // // // // // //       // abrir en nueva pestaña
// // // // // // // // //       window.open(blobUrl, "_blank");
// // // // // // // // //       // opcional: revokeObjectURL después de un tiempo
// // // // // // // // //       setTimeout(() => URL.revokeObjectURL(blobUrl), 60 * 1000);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       alert("Error al generar la invitación. Revisa la consola.");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // Descargar PDF directamente
// // // // // // // // //   const handleDownloadInvitation = async () => {
// // // // // // // // //     try {
// // // // // // // // //       // Re-crear jsPDF y guardar (más simple que crear Blob y forzar download)
// // // // // // // // //       const doc = new jsPDF({ orientation: "portrait", unit: "px", format: "a4" });
// // // // // // // // //       const pageWidth = doc.internal.pageSize.getWidth();
// // // // // // // // //       const pageHeight = doc.internal.pageSize.getHeight();

// // // // // // // // //       // Intentamos cargar la imagen (si falla se sigue con fondo blanco)
// // // // // // // // //       const loadImage = (src) =>
// // // // // // // // //         new Promise((resolve, reject) => {
// // // // // // // // //           const img = new Image();
// // // // // // // // //           img.crossOrigin = "anonymous";
// // // // // // // // //           img.onload = () => resolve(img);
// // // // // // // // //           img.onerror = (e) => reject(e);
// // // // // // // // //           img.src = src;
// // // // // // // // //         });

// // // // // // // // //       let img;
// // // // // // // // //       try {
// // // // // // // // //         img = await loadImage(backgroundUrl);
// // // // // // // // //       } catch (err) {
// // // // // // // // //         img = null;
// // // // // // // // //       }

// // // // // // // // //       if (img) {
// // // // // // // // //         doc.addImage(img, "JPEG", 0, 0, pageWidth, pageHeight);
// // // // // // // // //       } else {
// // // // // // // // //         doc.setFillColor(250, 250, 250);
// // // // // // // // //         doc.rect(0, 0, pageWidth, pageHeight, "F");
// // // // // // // // //       }

// // // // // // // // //       doc.setFont("times", "bold");
// // // // // // // // //       doc.setFontSize(30);
// // // // // // // // //       doc.setTextColor("#1a1a1a");
// // // // // // // // //       doc.text(brideGroom, pageWidth / 2, 120, { align: "center" });

// // // // // // // // //       doc.setFontSize(18);
// // // // // // // // //       doc.setFont("times", "normal");
// // // // // // // // //       const clickText = "CLICK AQUÍ";
// // // // // // // // //       const clickY = 170;
// // // // // // // // //       doc.text(clickText, pageWidth / 2, clickY, { align: "center" });

// // // // // // // // //       const clickTextWidth = doc.getTextWidth(clickText);
// // // // // // // // //       const linkRectWidth = clickTextWidth + 10;
// // // // // // // // //       const linkRectHeight = 20;
// // // // // // // // //       const linkRectX = pageWidth / 2 - linkRectWidth / 2;
// // // // // // // // //       const linkRectY = clickY - 14;
// // // // // // // // //       doc.link(linkRectX, linkRectY, linkRectWidth, linkRectHeight, { url: linkUrl });

// // // // // // // // //       doc.setFontSize(20);
// // // // // // // // //       doc.setFont("times", "bold");
// // // // // // // // //       doc.text(guestName, pageWidth / 2, 220, { align: "center" });

// // // // // // // // //       doc.setFontSize(14);
// // // // // // // // //       doc.setFont("times", "normal");
// // // // // // // // //       const reservedText = `Hemos reservado ${seats} lugar(es) en tu honor`;
// // // // // // // // //       doc.text(reservedText, pageWidth / 2, 260, { align: "center" });

// // // // // // // // //       doc.setFontSize(16);
// // // // // // // // //       doc.text("Angélica & Alberto", pageWidth / 2, 300, { align: "center" });

// // // // // // // // //       doc.setFontSize(18);
// // // // // // // // //       doc.setFont("times", "bold");
// // // // // // // // //       doc.text(dateLabel, pageWidth / 2, 340, { align: "center" });


// // // // // // // // //       doc.setFontSize(12);
// // // // // // // // //       doc.text(`*${extraNote}*`, pageWidth / 2, 400, { align: "center" });

// // // // // // // // //       doc.setFontSize(10);
// // // // // // // // //       doc.setTextColor("#0000EE");
// // // // // // // // //       doc.text(linkUrl, pageWidth / 2, pageHeight - 40, { align: "center" });

// // // // // // // // //       doc.save("invitacion.pdf");
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error(err);
// // // // // // // // //       alert("Error al descargar la invitación.");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // UI: ejemplo simple
// // // // // // // // //   return (
// // // // // // // // //     <div style={{ display: "flex", gap: 12, flexDirection: "column", alignItems: "center" }}>
// // // // // // // // //       <div style={{
// // // // // // // // //         width: 480,
// // // // // // // // //         height: 680,
// // // // // // // // //         borderRadius: 12,
// // // // // // // // //         overflow: "hidden",
// // // // // // // // //         boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
// // // // // // // // //         backgroundImage: `url(${backgroundUrl})`,
// // // // // // // // //         backgroundSize: "cover",
// // // // // // // // //         backgroundPosition: "center",
// // // // // // // // //         display: "flex",
// // // // // // // // //         flexDirection: "column",
// // // // // // // // //         justifyContent: "flex-end",
// // // // // // // // //         padding: 24,
// // // // // // // // //         color: "#fff",
// // // // // // // // //         textShadow: "0 1px 3px rgba(0,0,0,0.6)"
// // // // // // // // //       }}>
// // // // // // // // //         <div style={{ textAlign: "center", marginBottom: 24 }}>
// // // // // // // // //           <h2 style={{ margin: 0 }}>{brideGroom}</h2>
// // // // // // // // //           <p style={{ margin: "6px 0 0 0", fontWeight: 700 }}>{guestName}</p>
// // // // // // // // //           <p style={{ margin: "6px 0 0 0" }}>{`Hemos reservado ${seats} lugar(es) en tu honor`}</p>
// // // // // // // // //           <p style={{ margin: "6px 0 0 0", fontWeight: 700 }}>{dateLabel}</p>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       <div style={{ display: "flex", gap: 8 }}>
// // // // // // // // //         <button
// // // // // // // // //           onClick={handleViewInvitation}
// // // // // // // // //           style={{
// // // // // // // // //             background: "#e8c547",
// // // // // // // // //             borderRadius: 8,
// // // // // // // // //             padding: "10px 16px",
// // // // // // // // //             border: "none",
// // // // // // // // //             cursor: "pointer",
// // // // // // // // //             fontWeight: 700,
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           Ver invitación
// // // // // // // // //         </button>

// // // // // // // // //         <button
// // // // // // // // //           onClick={handleDownloadInvitation}
// // // // // // // // //           style={{
// // // // // // // // //             background: "#f3f3f3",
// // // // // // // // //             borderRadius: 8,
// // // // // // // // //             padding: "10px 16px",
// // // // // // // // //             border: "1px solid #ddd",
// // // // // // // // //             cursor: "pointer",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           Descargar
// // // // // // // // //         </button>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import React, { useRef, useState } from 'react';
// // // // // // // // import { jsPDF } from 'jspdf';

// // // // // // // // // Default export React component
// // // // // // // // export default function InvitationPDFComponent() {
// // // // // // // //   const [photoFile, setPhotoFile] = useState(null);
// // // // // // // //   const [brideName, setBrideName] = useState('Nombre Novia');
// // // // // // // //   const [groomName, setGroomName] = useState('Nombre Novio');
// // // // // // // //   const [date, setDate] = useState('Sábado, 1 de Enero de 2026');
// // // // // // // //   const [seats, setSeats] = useState('2 cupos');
// // // // // // // //   const [link, setLink] = useState('https://tusitio.com/invitacion?id=123');
// // // // // // // //   const previewRef = useRef(null);

// // // // // // // //   // handle file input
// // // // // // // //   function handleFile(e) {
// // // // // // // //     const f = e.target.files?.[0] ?? null;
// // // // // // // //     if (f) setPhotoFile(f);
// // // // // // // //   }

// // // // // // // //   // Creates an offscreen canvas with the blurred photo and returns dataURL
// // // // // // // //   async function createBackgroundDataUrl(pdfW, pdfH) {
// // // // // // // //     if (!photoFile) return null;

// // // // // // // //     // load image
// // // // // // // //     const img = await new Promise((res, rej) => {
// // // // // // // //       const i = new Image();
// // // // // // // //       i.onload = () => res(i);
// // // // // // // //       i.onerror = rej;
// // // // // // // //       i.src = URL.createObjectURL(photoFile);
// // // // // // // //     });

// // // // // // // //     // create canvas sized like the PDF in pixels (use 2x for better quality)
// // // // // // // //     const scale = 2; // improve quality
// // // // // // // //     const cW = Math.round(pdfW * scale);
// // // // // // // //     const cH = Math.round(pdfH * scale);
// // // // // // // //     const canvas = document.createElement('canvas');
// // // // // // // //     canvas.width = cW;
// // // // // // // //     canvas.height = cH;
// // // // // // // //     const ctx = canvas.getContext('2d');

// // // // // // // //     // draw the image so it covers the full canvas (cover behavior)
// // // // // // // //     const imgRatio = img.width / img.height;
// // // // // // // //     const canvasRatio = cW / cH;
// // // // // // // //     let drawW = cW;
// // // // // // // //     let drawH = cH;
// // // // // // // //     let dx = 0;
// // // // // // // //     let dy = 0;
// // // // // // // //     if (imgRatio > canvasRatio) {
// // // // // // // //       // image is wider -> fit height and crop sides
// // // // // // // //       drawH = cH;
// // // // // // // //       drawW = Math.round(img.width * (cH / img.height));
// // // // // // // //       dx = Math.round((cW - drawW) / 2);
// // // // // // // //     } else {
// // // // // // // //       // image is taller -> fit width and crop top/bottom
// // // // // // // //       drawW = cW;
// // // // // // // //       drawH = Math.round(img.height * (cW / img.width));
// // // // // // // //       dy = Math.round((cH - drawH) / 2);
// // // // // // // //     }

// // // // // // // //     // apply a gentle blur filter and slightly dim the image
// // // // // // // //     // NOTE: ctx.filter is supported in modern browsers
// // // // // // // //     ctx.filter = 'blur(8px)';
// // // // // // // //     ctx.globalAlpha = 0.85;
// // // // // // // //     ctx.drawImage(img, dx, dy, drawW, drawH);

// // // // // // // //     // Reset filters for subsequent drawing
// // // // // // // //     ctx.filter = 'none';
// // // // // // // //     ctx.globalAlpha = 1;

// // // // // // // //     // Create a vertical mask so the image fades and only shows clearly in the top half
// // // // // // // //     const gradient = ctx.createLinearGradient(0, 0, 0, cH);
// // // // // // // //     gradient.addColorStop(0, 'rgba(255,255,255,0)');
// // // // // // // //     gradient.addColorStop(0.5, 'rgba(255,255,255,0.35)');
// // // // // // // //     gradient.addColorStop(1, 'rgba(255,255,255,1)');

// // // // // // // //     ctx.fillStyle = gradient;
// // // // // // // //     ctx.fillRect(0, 0, cW, cH);

// // // // // // // //     return canvas.toDataURL('image/jpeg', 0.9);
// // // // // // // //   }

// // // // // // // //   async function generatePDF() {
// // // // // // // //     // Create PDF in points (A4) -- jsPDF's default units are "pt" when using 'a4' without specifying, but we'll pick 'pt'
// // // // // // // //     const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
// // // // // // // //     const pdfW = doc.internal.pageSize.getWidth();
// // // // // // // //     const pdfH = doc.internal.pageSize.getHeight();

// // // // // // // //     // Prepare background image (processed)
// // // // // // // //     const bgDataUrl = await createBackgroundDataUrl(pdfW, pdfH);
// // // // // // // //     if (bgDataUrl) {
// // // // // // // //       // Add background image stretched to full page
// // // // // // // //       doc.addImage(bgDataUrl, 'JPEG', 0, 0, pdfW, pdfH);
// // // // // // // //     } else {
// // // // // // // //       // If no image provided, fill the top-half with a light color
// // // // // // // //       doc.setFillColor(245, 245, 245);
// // // // // // // //       doc.rect(0, 0, pdfW, pdfH / 2, 'F');
// // // // // // // //     }

// // // // // // // //     // Now draw a semi-transparent white overlay at the bottom half to make text readable
// // // // // // // //     doc.setFillColor(255, 255, 255);
// // // // // // // //     doc.setAlpha(0.95);
// // // // // // // //     doc.rect(0, pdfH / 2, pdfW, pdfH / 2, 'F');
// // // // // // // //     doc.setAlpha(1);

// // // // // // // //     // Typography and text content
// // // // // // // //     const title = 'NUESTRA BODA';
// // // // // // // //     const names = `${groomName} & ${brideName}`;

// // // // // // // //     // Title - place roughly in the upper half (centered horizontally)
// // // // // // // //     doc.setFont('times', 'normal');
// // // // // // // //     doc.setFontSize(28);
// // // // // // // //     doc.text(title, pdfW / 2, pdfH / 2 - 130, { align: 'center' });

// // // // // // // //     // Names
// // // // // // // //     doc.setFontSize(34);
// // // // // // // //     doc.setFont('times', 'bold');
// // // // // // // //     doc.text(names, pdfW / 2, pdfH / 2 - 90, { align: 'center' });

// // // // // // // //     // Date
// // // // // // // //     doc.setFontSize(16);
// // // // // // // //     doc.setFont('times', 'normal');
// // // // // // // //     doc.text(date, pdfW / 2, pdfH / 2 - 55, { align: 'center' });

// // // // // // // //     // Seats (small)
// // // // // // // //     doc.setFontSize(12);
// // // // // // // //     doc.text(`Cupos: ${seats}`, pdfW / 2, pdfH / 2 - 35, { align: 'center' });

// // // // // // // //     // Create a button-like rectangle in the lower half
// // // // // // // //     const btnW = 220;
// // // // // // // //     const btnH = 36;
// // // // // // // //     const btnX = (pdfW - btnW) / 2;
// // // // // // // //     const btnY = pdfH / 2 + 40;

// // // // // // // //     // Draw rounded rectangle for the button
// // // // // // // //     drawRoundedRect(doc, btnX, btnY, btnW, btnH, 8, true, false);

// // // // // // // //     // Button text
// // // // // // // //     doc.setTextColor(255, 255, 255);
// // // // // // // //     doc.setFontSize(14);
// // // // // // // //     doc.text('Ver invitación', pdfW / 2, btnY + btnH / 2 + 5, { align: 'center' });

// // // // // // // //     // Reset text color
// // // // // // // //     doc.setTextColor(0, 0, 0);

// // // // // // // //     // Add the link area (clickable) on top of the button
// // // // // // // //     // jsPDF's .link uses coordinates in points
// // // // // // // //     doc.link(btnX, btnY, btnW, btnH, { url: link });

// // // // // // // //     // Add a small URL text under the button (optional)
// // // // // // // //     doc.setFontSize(10);
// // // // // // // //     doc.text(link, pdfW / 2, btnY + btnH + 18, { align: 'center' });

// // // // // // // //     // Save PDF
// // // // // // // //     doc.save('invitation.pdf');
// // // // // // // //   }

// // // // // // // //   // Helper to draw a rounded rect with fill and stroke
// // // // // // // //   function drawRoundedRect(doc, x, y, w, h, r = 6, fill = true, stroke = true) {
// // // // // // // //     // Using a simple rounded rect path approximation
// // // // // // // //     doc.setFillColor(70, 130, 180); // a pleasant blue; you can change in the UI
// // // // // // // //     doc.roundedRect(x, y, w, h, r, r, fill ? 'F' : stroke ? 'S' : '');
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="p-6 max-w-3xl mx-auto">
// // // // // // // //       <h2 className="text-2xl font-semibold mb-4">Generador de portada / Invitación (React)</h2>

// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // // // // // // //         <label className="block">
// // // // // // // //           <div className="text-sm">Foto de fondo (novios)</div>
// // // // // // // //           <input type="file" accept="image/*" onChange={handleFile} className="mt-2" />
// // // // // // // //         </label>

// // // // // // // //         <div>
// // // // // // // //           <label className="block">
// // // // // // // //             <div className="text-sm">Nombre novio</div>
// // // // // // // //             <input value={groomName} onChange={(e) => setGroomName(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // // //           </label>

// // // // // // // //           <label className="block mt-3">
// // // // // // // //             <div className="text-sm">Nombre novia</div>
// // // // // // // //             <input value={brideName} onChange={(e) => setBrideName(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // // //           </label>
// // // // // // // //         </div>

// // // // // // // //         <label className="block">
// // // // // // // //           <div className="text-sm">Fecha</div>
// // // // // // // //           <input value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // // //         </label>

// // // // // // // //         <label className="block">
// // // // // // // //           <div className="text-sm">Número de cupos</div>
// // // // // // // //           <input value={seats} onChange={(e) => setSeats(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // // //         </label>

// // // // // // // //         <label className="block md:col-span-2">
// // // // // // // //           <div className="text-sm">Enlace a la página de invitación</div>
// // // // // // // //           <input value={link} onChange={(e) => setLink(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // // //         </label>
// // // // // // // //       </div>

// // // // // // // //       <div className="flex gap-3 items-center mb-6">
// // // // // // // //         <button onClick={generatePDF} className="px-4 py-2 rounded bg-blue-600 text-white shadow">Generar PDF</button>
// // // // // // // //         <span className="text-sm text-gray-600">El PDF incluirá un botón clickeable que redirige al enlace.</span>
// // // // // // // //       </div>

// // // // // // // //       <div ref={previewRef} className="border rounded overflow-hidden shadow">
// // // // // // // //         {/* Live preview - visually similar to PDF layout */}
// // // // // // // //         <div style={{ position: 'relative', height: 700 }}>
// // // // // // // //           {/* Background (using CSS blur for the preview only) */}
// // // // // // // //           {photoFile ? (
// // // // // // // //             <img
// // // // // // // //               src={URL.createObjectURL(photoFile)}
// // // // // // // //               alt="preview"
// // // // // // // //               style={{
// // // // // // // //                 position: 'absolute',
// // // // // // // //                 left: 0,
// // // // // // // //                 top: 0,
// // // // // // // //                 width: '100%',
// // // // // // // //                 height: '50%',
// // // // // // // //                 objectFit: 'cover',
// // // // // // // //                 filter: 'blur(6px) brightness(0.85)',
// // // // // // // //                 zIndex: 0,
// // // // // // // //               }}
// // // // // // // //             />
// // // // // // // //           ) : (
// // // // // // // //             <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', background: '#f3f4f6' }} />
// // // // // // // //           )}

// // // // // // // //           {/* Lower half white panel */}
// // // // // // // //           <div style={{ position: 'absolute', left: 0, top: '50%', width: '100%', height: '50%', background: 'white', zIndex: 1 }} />

// // // // // // // //           {/* Text overlay */}
// // // // // // // //           <div style={{ position: 'absolute', left: 0, top: '20%', width: '100%', textAlign: 'center', zIndex: 2, padding: 24 }}>
// // // // // // // //             <div className="text-xs uppercase tracking-wider text-gray-700">NUESTRA BODA</div>
// // // // // // // //             <div className="text-4xl font-bold leading-tight mt-2">{groomName} &amp; {brideName}</div>
// // // // // // // //             <div className="mt-2 text-sm text-gray-600">{date}</div>
// // // // // // // //             <div className="mt-1 text-sm text-gray-500">Cupos: {seats}</div>
// // // // // // // //           </div>

// // // // // // // //           {/* Button preview */}
// // // // // // // //           <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '62%', zIndex: 3 }}>
// // // // // // // //             <a href={link} target="_blank" rel="noreferrer" className="px-5 py-2 rounded bg-blue-600 text-white inline-block shadow">Ver invitación</a>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // import React, { useRef, useState } from 'react';
// // // // // // // import { jsPDF } from 'jspdf';

// // // // // // // // Default export React component
// // // // // // // export default function InvitationPDFComponent() {
// // // // // // //   const [photoFile, setPhotoFile] = useState(null);
// // // // // // //   const [brideName, setBrideName] = useState('Nombre Novia');
// // // // // // //   const [groomName, setGroomName] = useState('Nombre Novio');
// // // // // // //   const [date, setDate] = useState('Sábado, 1 de Enero de 2026');
// // // // // // //   const [seats, setSeats] = useState('2 cupos');
// // // // // // //   const [link, setLink] = useState('https://tusitio.com/invitacion?id=123');
// // // // // // //   const previewRef = useRef(null);

// // // // // // //   // handle file input
// // // // // // //   function handleFile(e) {
// // // // // // //     const f = e.target.files?.[0] ?? null;
// // // // // // //     if (f) setPhotoFile(f);
// // // // // // //   }

// // // // // // //   // Creates an offscreen canvas with the blurred photo and returns dataURL
// // // // // // //   async function createBackgroundDataUrl(pdfW, pdfH) {
// // // // // // //     if (!photoFile) return null;

// // // // // // //     // load image
// // // // // // //     const img = await new Promise((res, rej) => {
// // // // // // //       const i = new Image();
// // // // // // //       i.onload = () => res(i);
// // // // // // //       i.onerror = rej;
// // // // // // //       i.src = URL.createObjectURL(photoFile);
// // // // // // //     });

// // // // // // //     // create canvas sized like the PDF in pixels (use 2x for better quality)
// // // // // // //     const scale = 2; // improve quality
// // // // // // //     const cW = Math.round(pdfW * scale);
// // // // // // //     const cH = Math.round(pdfH * scale);
// // // // // // //     const canvas = document.createElement('canvas');
// // // // // // //     canvas.width = cW;
// // // // // // //     canvas.height = cH;
// // // // // // //     const ctx = canvas.getContext('2d');

// // // // // // //     // draw the image so it covers the full canvas (cover behavior)
// // // // // // //     const imgRatio = img.width / img.height;
// // // // // // //     const canvasRatio = cW / cH;
// // // // // // //     let drawW = cW;
// // // // // // //     let drawH = cH;
// // // // // // //     let dx = 0;
// // // // // // //     let dy = 0;
// // // // // // //     if (imgRatio > canvasRatio) {
// // // // // // //       // image is wider -> fit height and crop sides
// // // // // // //       drawH = cH;
// // // // // // //       drawW = Math.round(img.width * (cH / img.height));
// // // // // // //       dx = Math.round((cW - drawW) / 2);
// // // // // // //     } else {
// // // // // // //       // image is taller -> fit width and crop top/bottom
// // // // // // //       drawW = cW;
// // // // // // //       drawH = Math.round(img.height * (cW / img.width));
// // // // // // //       dy = Math.round((cH - drawH) / 2);
// // // // // // //     }

// // // // // // //     // apply a gentle blur filter and slightly dim the image
// // // // // // //     // NOTE: ctx.filter is supported in modern browsers
// // // // // // //     ctx.filter = 'blur(8px)';
// // // // // // //     ctx.globalAlpha = 0.85;
// // // // // // //     ctx.drawImage(img, dx, dy, drawW, drawH);

// // // // // // //     // Reset filters for subsequent drawing
// // // // // // //     ctx.filter = 'none';
// // // // // // //     ctx.globalAlpha = 1;

// // // // // // //     // Create a vertical mask so the image fades and only shows clearly in the top half
// // // // // // //     const gradient = ctx.createLinearGradient(0, 0, 0, cH);
// // // // // // //     gradient.addColorStop(0, 'rgba(255,255,255,0)');
// // // // // // //     gradient.addColorStop(0.5, 'rgba(255,255,255,0.35)');
// // // // // // //     gradient.addColorStop(1, 'rgba(255,255,255,1)');

// // // // // // //     ctx.fillStyle = gradient;
// // // // // // //     ctx.fillRect(0, 0, cW, cH);

// // // // // // //     return canvas.toDataURL('image/jpeg', 0.9);
// // // // // // //   }

// // // // // // //   async function generatePDF() {
// // // // // // //     // Create PDF in points (A4) -- jsPDF's default units are "pt" when using 'a4' without specifying, but we'll pick 'pt'
// // // // // // //     const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
// // // // // // //     const pdfW = doc.internal.pageSize.getWidth();
// // // // // // //     const pdfH = doc.internal.pageSize.getHeight();

// // // // // // //     // Prepare background image (processed)
// // // // // // //     const bgDataUrl = await createBackgroundDataUrl(pdfW, pdfH);
// // // // // // //     if (bgDataUrl) {
// // // // // // //       // Add background image stretched to full page
// // // // // // //       doc.addImage(bgDataUrl, 'JPEG', 0, 0, pdfW, pdfH);
// // // // // // //     } else {
// // // // // // //       // If no image provided, fill the top-half with a light color
// // // // // // //       doc.setFillColor(245, 245, 245);
// // // // // // //       doc.rect(0, 0, pdfW, pdfH / 2, 'F');
// // // // // // //     }
// // // // // // //     // Now draw a semi-transparent white overlay at the bottom half to make text readable
// // // // // // //     // jsPDF doesn't have doc.setAlpha in many versions. Prefer using saveGraphicsState/setGState
// // // // // // //     // when available; otherwise draw an image-based fallback overlay.
// // // // // // //     if (typeof doc.saveGraphicsState === 'function') doc.saveGraphicsState();
// // // // // // //     if (typeof doc.setGState === 'function' && typeof doc.GState === 'function') {
// // // // // // //       // Preferred approach: use PDF graphics state opacity (supported in recent jsPDF builds)
// // // // // // //       doc.setGState(new doc.GState({ opacity: 0.95 }));
// // // // // // //       doc.setFillColor(255, 255, 255);
// // // // // // //       doc.rect(0, pdfH / 2, pdfW, pdfH / 2, 'F');
// // // // // // //     } else {
// // // // // // //       // Fallback: create a semi-transparent overlay on a canvas and insert it as an image
// // // // // // //       const overlayCanvas = document.createElement('canvas');
// // // // // // //       overlayCanvas.width = Math.round(pdfW);
// // // // // // //       overlayCanvas.height = Math.round(pdfH / 2);
// // // // // // //       const octx = overlayCanvas.getContext('2d');
// // // // // // //       octx.fillStyle = 'rgba(255,255,255,0.95)';
// // // // // // //       octx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);
// // // // // // //       const overlayDataUrl = overlayCanvas.toDataURL('image/png');
// // // // // // //       doc.addImage(overlayDataUrl, 'PNG', 0, pdfH / 2, pdfW, pdfH / 2);
// // // // // // //     }
// // // // // // //     if (typeof doc.restoreGraphicsState === 'function') doc.restoreGraphicsState();

// // // // // // //     // Typography and text content
// // // // // // //     const title = 'NUESTRA BODA';
// // // // // // //     const names = `${groomName} & ${brideName}`;

// // // // // // //     // Title - place roughly in the upper half (centered horizontally)
// // // // // // //     doc.setFont('times', 'normal');
// // // // // // //     doc.setFontSize(28);
// // // // // // //     doc.text(title, pdfW / 2, pdfH / 2 - 130, { align: 'center' });

// // // // // // //     // Names
// // // // // // //     doc.setFontSize(34);
// // // // // // //     doc.setFont('times', 'bold');
// // // // // // //     doc.text(names, pdfW / 2, pdfH / 2 - 90, { align: 'center' });

// // // // // // //     // Date
// // // // // // //     doc.setFontSize(16);
// // // // // // //     doc.setFont('times', 'normal');
// // // // // // //     doc.text(date, pdfW / 2, pdfH / 2 - 55, { align: 'center' });

// // // // // // //     // Seats (small)
// // // // // // //     doc.setFontSize(12);
// // // // // // //     doc.text(`Cupos: ${seats}`, pdfW / 2, pdfH / 2 - 35, { align: 'center' });

// // // // // // //     // Create a button-like rectangle in the lower half
// // // // // // //     const btnW = 220;
// // // // // // //     const btnH = 36;
// // // // // // //     const btnX = (pdfW - btnW) / 2;
// // // // // // //     const btnY = pdfH / 2 + 40;

// // // // // // //     // Draw rounded rectangle for the button
// // // // // // //     drawRoundedRect(doc, btnX, btnY, btnW, btnH, 8, true, false);

// // // // // // //     // Button text
// // // // // // //     doc.setTextColor(255, 255, 255);
// // // // // // //     doc.setFontSize(14);
// // // // // // //     doc.text('Ver invitación', pdfW / 2, btnY + btnH / 2 + 5, { align: 'center' });

// // // // // // //     // Reset text color
// // // // // // //     doc.setTextColor(0, 0, 0);

// // // // // // //     // Add the link area (clickable) on top of the button
// // // // // // //     // jsPDF's .link uses coordinates in points
// // // // // // //     doc.link(btnX, btnY, btnW, btnH, { url: link });

// // // // // // //     // Add a small URL text under the button (optional)
// // // // // // //     doc.setFontSize(10);
// // // // // // //     doc.text(link, pdfW / 2, btnY + btnH + 18, { align: 'center' });

// // // // // // //     // Save PDF
// // // // // // //     doc.save('invitation.pdf');
// // // // // // //   }

// // // // // // //   // Helper to draw a rounded rect with fill and stroke
// // // // // // //   function drawRoundedRect(doc, x, y, w, h, r = 6, fill = true, stroke = true) {
// // // // // // //     // Using a simple rounded rect path approximation
// // // // // // //     doc.setFillColor(70, 130, 180); // a pleasant blue; you can change in the UI
// // // // // // //     doc.roundedRect(x, y, w, h, r, r, fill ? 'F' : stroke ? 'S' : '');
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="p-6 max-w-3xl mx-auto">
// // // // // // //       <h2 className="text-2xl font-semibold mb-4">Generador de portada / Invitación (React)</h2>

// // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // // // // // //         <label className="block">
// // // // // // //           <div className="text-sm">Foto de fondo (novios)</div>
// // // // // // //           <input type="file" accept="image/*" onChange={handleFile} className="mt-2" />
// // // // // // //         </label>

// // // // // // //         <div>
// // // // // // //           <label className="block">
// // // // // // //             <div className="text-sm">Nombre novio</div>
// // // // // // //             <input value={groomName} onChange={(e) => setGroomName(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // //           </label>

// // // // // // //           <label className="block mt-3">
// // // // // // //             <div className="text-sm">Nombre novia</div>
// // // // // // //             <input value={brideName} onChange={(e) => setBrideName(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // //           </label>
// // // // // // //         </div>

// // // // // // //         <label className="block">
// // // // // // //           <div className="text-sm">Fecha</div>
// // // // // // //           <input value={date} onChange={(e) => setDate(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // //         </label>

// // // // // // //         <label className="block">
// // // // // // //           <div className="text-sm">Número de cupos</div>
// // // // // // //           <input value={seats} onChange={(e) => setSeats(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // //         </label>

// // // // // // //         <label className="block md:col-span-2">
// // // // // // //           <div className="text-sm">Enlace a la página de invitación</div>
// // // // // // //           <input value={link} onChange={(e) => setLink(e.target.value)} className="mt-2 w-full p-2 border rounded" />
// // // // // // //         </label>
// // // // // // //       </div>

// // // // // // //       <div className="flex gap-3 items-center mb-6">
// // // // // // //         <button onClick={generatePDF} className="px-4 py-2 rounded bg-blue-600 text-white shadow">Generar PDF</button>
// // // // // // //         <span className="text-sm text-gray-600">El PDF incluirá un botón clickeable que redirige al enlace.</span>
// // // // // // //       </div>

// // // // // // //       <div ref={previewRef} className="border rounded overflow-hidden shadow">
// // // // // // //         {/* Live preview - visually similar to PDF layout */}
// // // // // // //         <div style={{ position: 'relative', height: 700 }}>
// // // // // // //           {/* Background (using CSS blur for the preview only) */}
// // // // // // //           {photoFile ? (
// // // // // // //             <img
// // // // // // //               src={URL.createObjectURL(photoFile)}
// // // // // // //               alt="preview"
// // // // // // //               style={{
// // // // // // //                 position: 'absolute',
// // // // // // //                 left: 0,
// // // // // // //                 top: 0,
// // // // // // //                 width: '100%',
// // // // // // //                 height: '50%',
// // // // // // //                 objectFit: 'cover',
// // // // // // //                 filter: 'blur(6px) brightness(0.85)',
// // // // // // //                 zIndex: 0,
// // // // // // //               }}
// // // // // // //             />
// // // // // // //           ) : (
// // // // // // //             <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', background: '#f3f4f6' }} />
// // // // // // //           )}

// // // // // // //           {/* Lower half white panel */}
// // // // // // //           <div style={{ position: 'absolute', left: 0, top: '50%', width: '100%', height: '50%', background: 'white', zIndex: 1 }} />

// // // // // // //           {/* Text overlay */}
// // // // // // //           <div style={{ position: 'absolute', left: 0, top: '20%', width: '100%', textAlign: 'center', zIndex: 2, padding: 24 }}>
// // // // // // //             <div className="text-xs uppercase tracking-wider text-gray-700">NUESTRA BODA</div>
// // // // // // //             <div className="text-4xl font-bold leading-tight mt-2">{groomName} &amp; {brideName}</div>
// // // // // // //             <div className="mt-2 text-sm text-gray-600">{date}</div>
// // // // // // //             <div className="mt-1 text-sm text-gray-500">Cupos: {seats}</div>
// // // // // // //           </div>

// // // // // // //           {/* Button preview */}
// // // // // // //           <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '62%', zIndex: 3 }}>
// // // // // // //             <a href={link} target="_blank" rel="noreferrer" className="px-5 py-2 rounded bg-blue-600 text-white inline-block shadow">Ver invitación</a>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* <p className="text-sm text-gray-500 mt-3">Tips: Para mejor calidad en el PDF usa una foto con buena resolución (>= 2000px en su lado mayor).</p> */}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useRef, useState } from 'react';
// // // // // // import { jsPDF } from 'jspdf';

// // // // // // // Add Parisienne and Playfair Display fonts
// // // // // // const addElegantFontsCSS = () => {
// // // // // //   const style = document.createElement('style');
// // // // // //   style.textContent = `
// // // // // //     @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Playfair+Display:wght@400;500&display=swap');
// // // // // //   `;
// // // // // //   document.head.appendChild(style);
// // // // // // };

// // // // // // // Note: jsPDF doesn't support custom web fonts directly, so we use elegant Times styling
// // // // // // // The Parisienne and Playfair Display fonts are applied to the preview component for consistency

// // // // // // export default function InvitationPDFComponent() {
// // // // // //   const [photoFile, setPhotoFile] = useState(null);
// // // // // //   const [brideName, setBrideName] = useState('Kathe');
// // // // // //   const [groomName, setGroomName] = useState('Gerson');
// // // // // //   const [date, setDate] = useState('Sábado, 1 de Enero de 2026');
// // // // // //   const [seats, setSeats] = useState('2 cupos');
// // // // // //   const [link, setLink] = useState('https://tusitio.com/invitacion?id=123');
// // // // // //   const previewRef = useRef(null);

// // // // // //   // Load elegant fonts on component mount
// // // // // //   React.useEffect(() => {
// // // // // //     addElegantFontsCSS();
// // // // // //   }, []);

// // // // // //   const handleFile = (e) => {
// // // // // //     const file = e.target.files?.[0];
// // // // // //     if (file) setPhotoFile(file);
// // // // // //   };

// // // // // //   async function createBackgroundDataUrl(pdfW, pdfH) {
// // // // // //     if (!photoFile) return null;
// // // // // //     const img = await new Promise((res, rej) => {
// // // // // //       const i = new Image();
// // // // // //       i.onload = () => res(i);
// // // // // //       i.onerror = rej;
// // // // // //       i.src = URL.createObjectURL(photoFile);
// // // // // //     });

// // // // // //     const scale = 2;
// // // // // //     const cW = Math.round(pdfW * scale);
// // // // // //     const cH = Math.round(pdfH * scale);
// // // // // //     const canvas = document.createElement('canvas');
// // // // // //     canvas.width = cW;
// // // // // //     canvas.height = cH;
// // // // // //     const ctx = canvas.getContext('2d');

// // // // // //     const imgRatio = img.width / img.height;
// // // // // //     const canvasRatio = cW / cH;
// // // // // //     let drawW = cW;
// // // // // //     let drawH = cH;
// // // // // //     let dx = 0;
// // // // // //     let dy = 0;
// // // // // //     if (imgRatio > canvasRatio) {
// // // // // //       drawH = cH;
// // // // // //       drawW = Math.round(img.width * (cH / img.height));
// // // // // //       dx = Math.round((cW - drawW) / 2);
// // // // // //     } else {
// // // // // //       drawW = cW;
// // // // // //       drawH = Math.round(img.height * (cW / img.width));
// // // // // //       dy = Math.round((cH - drawH) / 2);
// // // // // //     }

// // // // // //     // Apply stronger blur for better text readability
// // // // // //     ctx.filter = 'blur(6px)';
// // // // // //     ctx.globalAlpha = 0.8;
// // // // // //     ctx.drawImage(img, dx, dy, drawW, drawH);
// // // // // //     ctx.filter = 'none';
// // // // // //     ctx.globalAlpha = 1;

// // // // // //     // Create a stronger overlay for better text contrast without shadows
// // // // // //     const gradient = ctx.createRadialGradient(cW/2, cH/2, 0, cW/2, cH/2, Math.max(cW, cH)/2);
// // // // // //     gradient.addColorStop(0, 'rgba(255,255,255,0.3)');
// // // // // //     gradient.addColorStop(0.5, 'rgba(255,255,255,0.4)');
// // // // // //     gradient.addColorStop(1, 'rgba(255,255,255,0.6)');
// // // // // //     ctx.fillStyle = gradient;
// // // // // //     ctx.fillRect(0, 0, cW, cH);

// // // // // //     return canvas.toDataURL('image/jpeg', 0.9);
// // // // // //   }

// // // // // //   async function generatePDF() {
// // // // // //     const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
// // // // // //     const pdfW = doc.internal.pageSize.getWidth();
// // // // // //     const pdfH = doc.internal.pageSize.getHeight();

// // // // // //     // HTML-inspired card design
// // // // // //     const cardWidth = 400;
// // // // // //     const cardHeight = 600;
// // // // // //     const cardX = (pdfW - cardWidth) / 2;
// // // // // //     const cardY = (pdfH - cardHeight) / 2;

// // // // // //     // Background color (#bfa296)
// // // // // //     doc.setFillColor(191, 162, 150);
// // // // // //     doc.rect(0, 0, pdfW, pdfH, 'F');

// // // // // //     // Card background (#fbe5da)
// // // // // //     doc.setFillColor(251, 229, 218);
// // // // // //     doc.roundedRect(cardX, cardY, cardWidth, cardHeight, 10, 10, 'F');

// // // // // //     // Photo section (350px height)
// // // // // //     const photoHeight = 350;
// // // // // //     const bgDataUrl = await createBackgroundDataUrl(cardWidth, photoHeight);
// // // // // //     if (bgDataUrl) {
// // // // // //       // Apply image to photo section
// // // // // //       doc.addImage(bgDataUrl, 'JPEG', cardX, cardY, cardWidth, photoHeight);
// // // // // //     } else {
// // // // // //       // Default background if no image
// // // // // //       doc.setFillColor(240, 220, 200);
// // // // // //       doc.rect(cardX, cardY, cardWidth, photoHeight, 'F');
// // // // // //     }

// // // // // //     // Photo mask effect (gradient overlay at bottom)
// // // // // //     doc.setFillColor(251, 229, 218);
// // // // // //     doc.setAlpha(0.4);
// // // // // //     doc.rect(cardX, cardY + photoHeight * 0.6, cardWidth, photoHeight * 0.4, 'F');
// // // // // //     doc.setAlpha(1);

// // // // // //     // Content section (below photo)
// // // // // //     const contentStartY = cardY + photoHeight + 20;

// // // // // //     // "¡Nos casamos!" subtitle
// // // // // //     doc.setFont('helvetica', 'normal');
// // // // // //     doc.setFontSize(14);
// // // // // //     doc.setTextColor(155, 123, 107); // #9b7b6b
// // // // // //     doc.text('¡Nos casamos!', cardX + cardWidth / 2, contentStartY, { align: 'center' });

// // // // // //     // Names - Parisienne style
// // // // // //     const names = `${groomName} & ${brideName}`;
// // // // // //     doc.setFont('times', 'italic'); // Simulate Parisienne
// // // // // //     doc.setFontSize(36);
// // // // // //     doc.setTextColor(110, 78, 67); // #6e4e43
// // // // // //     doc.text(names, cardX + cardWidth / 2, contentStartY + 30, { align: 'center' });

// // // // // //     // Date box
// // // // // //     const dateY = contentStartY + 70;
// // // // // //     const dateBoxX = cardX + cardWidth / 2;
    
// // // // // //     // Month
// // // // // //     doc.setFont('helvetica', 'normal');
// // // // // //     doc.setFontSize(14);
// // // // // //     doc.setTextColor(110, 78, 67);
// // // // // //     doc.text('Noviembre', dateBoxX - 40, dateY, { align: 'center' });
    
// // // // // //     // Day (large)
// // // // // //     doc.setFont('helvetica', 'bold');
// // // // // //     doc.setFontSize(32);
// // // // // //     doc.setTextColor(110, 78, 67);
// // // // // //     doc.text('15', dateBoxX, dateY, { align: 'center' });
    
// // // // // //     // Year
// // // // // //     doc.setFont('helvetica', 'normal');
// // // // // //     doc.setFontSize(14);
// // // // // //     doc.setTextColor(110, 78, 67);
// // // // // //     doc.text('2025', dateBoxX + 40, dateY, { align: 'center' });

// // // // // //     // "Cupos: 2" - Parisienne style
// // // // // //     doc.setFont('times', 'italic');
// // // // // //     doc.setFontSize(26);
// // // // // //     doc.setTextColor(122, 92, 79); // #7a5c4f
// // // // // //     doc.text(`Cupos: ${seats}`, cardX + cardWidth / 2, dateY + 40, { align: 'center' });

// // // // // //     // Button
// // // // // //     const btnW = 200;
// // // // // //     const btnH = 40;
// // // // // //     const btnX = cardX + (cardWidth - btnW) / 2;
// // // // // //     const btnY = dateY + 80;

// // // // // //     // Button background (#d2a48d)
// // // // // //     doc.setFillColor(210, 164, 141);
// // // // // //     doc.roundedRect(btnX, btnY, btnW, btnH, 20, 20, 'F');
    
// // // // // //     // Button text
// // // // // //     doc.setTextColor(255, 255, 255);
// // // // // //     doc.setFont('helvetica', 'bold');
// // // // // //     doc.setFontSize(15);
// // // // // //     doc.text('Ver invitación', cardX + cardWidth / 2, btnY + btnH / 2 + 5, { align: 'center' });

// // // // // //     doc.link(btnX, btnY, btnW, btnH, { url: link });


// // // // // //     doc.save('invitacion.pdf');
// // // // // //   }

// // // // // //   // Note: drawRoundedRect function removed as button styling is now handled inline

// // // // // //   return (
// // // // // //     <div className="p-6 max-w-3xl mx-auto" style={{ fontFamily: '"Playfair Display", serif' }}>
// // // // // //       <h2 className="text-2xl font-semibold mb-4 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>Generador de portada de invitación</h2>

// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // // // // //         <label>
// // // // // //           <div className="text-sm">Foto de fondo</div>
// // // // // //           <input type="file" accept="image/*" onChange={handleFile} className="mt-1" />
// // // // // //         </label>

// // // // // //         <div>
// // // // // //           <label>
// // // // // //             <div className="text-sm">Nombre del novio</div>
// // // // // //             <input value={groomName} onChange={(e) => setGroomName(e.target.value)} className="mt-1 w-full p-2 border rounded" />
// // // // // //           </label>
// // // // // //           <label className="mt-2">
// // // // // //             <div className="text-sm">Nombre de la novia</div>
// // // // // //             <input value={brideName} onChange={(e) => setBrideName(e.target.value)} className="mt-1 w-full p-2 border rounded" />
// // // // // //           </label>
// // // // // //         </div>

// // // // // //         <label>
// // // // // //           <div className="text-sm">Fecha</div>
// // // // // //           <input value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 w-full p-2 border rounded" />
// // // // // //         </label>

// // // // // //         <label>
// // // // // //           <div className="text-sm">Número de cupos</div>
// // // // // //           <input value={seats} onChange={(e) => setSeats(e.target.value)} className="mt-1 w-full p-2 border rounded" />
// // // // // //         </label>

// // // // // //         <label className="md:col-span-2">
// // // // // //           <div className="text-sm">Enlace a la página</div>
// // // // // //           <input value={link} onChange={(e) => setLink(e.target.value)} className="mt-1 w-full p-2 border rounded" />
// // // // // //         </label>
// // // // // //       </div>

// // // // // //       <div className="flex justify-center mb-6">
// // // // // //         <button onClick={generatePDF} className="px-6 py-2 rounded bg-blue-700 text-white shadow-md hover:bg-blue-800 transition">Generar PDF</button>
// // // // // //       </div>

// // // // // //       <div ref={previewRef} className="border rounded overflow-hidden shadow" style={{ 
// // // // // //         background: '#bfa296', 
// // // // // //         display: 'flex', 
// // // // // //         justifyContent: 'center', 
// // // // // //         alignItems: 'center', 
// // // // // //         minHeight: '100vh',
// // // // // //         padding: '20px'
// // // // // //       }}>
// // // // // //         <div style={{ 
// // // // // //           width: '400px',
// // // // // //           background: '#fbe5da',
// // // // // //           borderRadius: '10px',
// // // // // //           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
// // // // // //           overflow: 'hidden',
// // // // // //           position: 'relative',
// // // // // //           color: '#6e4e43',
// // // // // //           textAlign: 'center',
// // // // // //           fontFamily: '"Playfair Display", serif',
// // // // // //           paddingBottom: '30px'
// // // // // //         }}>
// // // // // //           {/* Photo section */}
// // // // // //           <div style={{ 
// // // // // //             position: 'relative',
// // // // // //             height: '350px',
// // // // // //             overflow: 'hidden'
// // // // // //           }}>
// // // // // //             {photoFile ? (
// // // // // //               <img
// // // // // //                 src={URL.createObjectURL(photoFile)}
// // // // // //                 alt="preview"
// // // // // //                 style={{ 
// // // // // //                   width: '100%',
// // // // // //                   height: '100%',
// // // // // //                   objectFit: 'cover'
// // // // // //                 }}
// // // // // //               />
// // // // // //             ) : (
// // // // // //               <div style={{ 
// // // // // //                 width: '100%',
// // // // // //                 height: '100%',
// // // // // //                 background: 'linear-gradient(135deg, #f5f0eb 0%, #e8ddd4 100%)'
// // // // // //               }} />
// // // // // //             )}
            
// // // // // //             {/* Photo mask */}
// // // // // //             <div style={{
// // // // // //               position: 'absolute',
// // // // // //               bottom: '-1px',
// // // // // //               width: '100%',
// // // // // //               height: '100%',
// // // // // //               background: 'linear-gradient(to bottom, transparent 60%, #fbe5da 100%)',
// // // // // //               clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0% 100%)'
// // // // // //             }}></div>
// // // // // //           </div>

// // // // // //           {/* Content section */}
// // // // // //           <div style={{ 
// // // // // //             padding: '20px 30px 0',
// // // // // //             position: 'relative'
// // // // // //           }}>
// // // // // //             {/* Subtitle */}
// // // // // //             <p style={{
// // // // // //               letterSpacing: '1px',
// // // // // //               fontSize: '14px',
// // // // // //               marginBottom: '10px',
// // // // // //               color: '#9b7b6b'
// // // // // //             }}>¡Nos casamos!</p>
            
// // // // // //             {/* Names */}
// // // // // //             <h1 style={{
// // // // // //               fontFamily: '"Parisienne", cursive',
// // // // // //               fontSize: '36px',
// // // // // //               margin: '0 0 15px',
// // // // // //               color: '#6e4e43'
// // // // // //             }}>{groomName} & {brideName}</h1>

// // // // // //             {/* Date box */}
// // // // // //             <div style={{
// // // // // //               display: 'flex',
// // // // // //               justifyContent: 'center',
// // // // // //               alignItems: 'center',
// // // // // //               gap: '10px',
// // // // // //               marginBottom: '15px'
// // // // // //             }}>
// // // // // //               <span style={{
// // // // // //                 fontSize: '14px',
// // // // // //                 color: '#6e4e43',
// // // // // //                 letterSpacing: '1px'
// // // // // //               }}>Noviembre</span>
// // // // // //               <span style={{
// // // // // //                 fontSize: '32px',
// // // // // //                 fontWeight: '600'
// // // // // //               }}>15</span>
// // // // // //               <span style={{
// // // // // //                 fontSize: '14px',
// // // // // //                 color: '#6e4e43',
// // // // // //                 letterSpacing: '1px'
// // // // // //               }}>2025</span>
// // // // // //             </div>

// // // // // //             {/* Save date */}
// // // // // //             <h2 style={{
// // // // // //               fontFamily: '"Parisienne", cursive',
// // // // // //               fontSize: '26px',
// // // // // //               margin: '15px 0',
// // // // // //               color: '#7a5c4f'
// // // // // //             }}>Cupos: {seats}</h2>

// // // // // //             {/* Button */}
// // // // // //             <a
// // // // // //               href={link}
// // // // // //               target="_blank"
// // // // // //               rel="noreferrer"
// // // // // //               style={{
// // // // // //                 display: 'inline-block',
// // // // // //                 marginTop: '10px',
// // // // // //                 backgroundColor: '#d2a48d',
// // // // // //                 color: 'white',
// // // // // //                 textDecoration: 'none',
// // // // // //                 fontSize: '15px',
// // // // // //                 fontWeight: '500',
// // // // // //                 padding: '10px 30px',
// // // // // //                 borderRadius: '30px',
// // // // // //                 boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
// // // // // //                 transition: 'all 0.3s ease'
// // // // // //               }}
// // // // // //             >
// // // // // //               Ver invitación
// // // // // //             </a>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // import React from "react";
// // // // // import jsPDF from "jspdf";
// // // // // import html2canvas from "html2canvas";

// // // // // const InvitationPDF = ({
// // // // //   names = "Gerson & Kathe",
// // // // //   month = "Noviembre",
// // // // //   day = "15",
// // // // //   year = "2025",
// // // // //   cupos = "2",
// // // // //   link = "https://gerson01211997.github.io/wedding-invitation/",
// // // // //   imageUrl = "https://gerson01211997.github.io/wedding-invitation/photos/13.webp",
// // // // // }) => {
// // // // //   const generatePDF = async () => {
// // // // //     const element = document.getElementById("pdf-preview");
// // // // //     const canvas = await html2canvas(element, {
// // // // //       useCORS: true,
// // // // //       scale: 2,
// // // // //     });
// // // // //     const imgData = canvas.toDataURL("image/png");
// // // // //     const pdf = new jsPDF("p", "mm", "a4");

// // // // //     const imgProps = pdf.getImageProperties(imgData);
// // // // //     const pdfWidth = pdf.internal.pageSize.getWidth();
// // // // //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

// // // // //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

// // // // //     // Crea un enlace clickeable
// // // // //     pdf.link(80, 265, 50, 10, { url: link });

// // // // //     pdf.save("invitacion-boda.pdf");
// // // // //   };

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         backgroundColor: "#bfa296",
// // // // //         minHeight: "100vh",
// // // // //         display: "flex",
// // // // //         justifyContent: "center",
// // // // //         alignItems: "center",
// // // // //         padding: "40px",
// // // // //         fontFamily: "'Playfair Display', serif",
// // // // //       }}
// // // // //     >
// // // // //       <div id="pdf-preview" style={styles.card}>
// // // // //         <div style={styles.photoSection}>
// // // // //           <img src={imageUrl} alt="novios" style={styles.image} />
// // // // //           <div style={styles.mask}></div>
// // // // //         </div>

// // // // //         <div style={styles.content}>
// // // // //           <p style={styles.subtitle}>¡Nos casamos!</p>
// // // // //           <h1 style={styles.names}>{names}</h1>

// // // // //           <div style={styles.dateBox}>
// // // // //             <span style={styles.month}>{month}</span>
// // // // //             <span style={styles.day}>{day}</span>
// // // // //             <span style={styles.year}>{year}</span>
// // // // //           </div>

// // // // //           <h2 style={styles.saveDate}>Cupos: {cupos}</h2>

// // // // //           <a href={link} target="_blank" rel="noreferrer" style={styles.button}>
// // // // //             Ver invitación
// // // // //           </a>
// // // // //         </div>
// // // // //       </div>

// // // // //       <button onClick={generatePDF} style={styles.generateButton}>
// // // // //         Descargar PDF
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const styles = {
// // // // //   card: {
// // // // //     width: "400px",
// // // // //     background: "#fbe5da",
// // // // //     borderRadius: "10px",
// // // // //     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
// // // // //     overflow: "hidden",
// // // // //     position: "relative",
// // // // //     color: "#6e4e43",
// // // // //     textAlign: "center",
// // // // //     paddingBottom: "30px",
// // // // //   },
// // // // //   photoSection: {
// // // // //     position: "relative",
// // // // //     height: "220px",
// // // // //     overflow: "hidden",
// // // // //   },
// // // // //   image: {
// // // // //     width: "100%",
// // // // //     height: "100%",
// // // // //     objectFit: "cover",
// // // // //   },
// // // // //   mask: {
// // // // //     position: "absolute",
// // // // //     bottom: "-1px",
// // // // //     width: "100%",
// // // // //     height: "100%",
// // // // //     background: "linear-gradient(to bottom, transparent 60%, #fbe5da 100%)",
// // // // //     clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0% 100%)",
// // // // //   },
// // // // //   content: {
// // // // //     padding: "20px 30px 0",
// // // // //   },
// // // // //   subtitle: {
// // // // //     letterSpacing: "1px",
// // // // //     fontSize: "14px",
// // // // //     marginBottom: "10px",
// // // // //     color: "#9b7b6b",
// // // // //   },
// // // // //   names: {
// // // // //     fontFamily: "'Parisienne', cursive",
// // // // //     fontSize: "36px",
// // // // //     margin: "0 0 15px",
// // // // //     color: "#6e4e43",
// // // // //   },
// // // // //   dateBox: {
// // // // //     display: "flex",
// // // // //     justifyContent: "center",
// // // // //     alignItems: "center",
// // // // //     gap: "10px",
// // // // //     marginBottom: "15px",
// // // // //   },
// // // // //   month: {
// // // // //     fontSize: "14px",
// // // // //     color: "#6e4e43",
// // // // //     letterSpacing: "1px",
// // // // //   },
// // // // //   day: {
// // // // //     fontSize: "32px",
// // // // //     fontWeight: "600",
// // // // //   },
// // // // //   year: {
// // // // //     fontSize: "14px",
// // // // //     color: "#6e4e43",
// // // // //     letterSpacing: "1px",
// // // // //   },
// // // // //   saveDate: {
// // // // //     fontFamily: "'Parisienne', cursive",
// // // // //     fontSize: "26px",
// // // // //     margin: "15px 0",
// // // // //     color: "#7a5c4f",
// // // // //   },
// // // // //   button: {
// // // // //     display: "inline-block",
// // // // //     backgroundColor: "#d2a48d",
// // // // //     color: "white",
// // // // //     textDecoration: "none",
// // // // //     fontSize: "15px",
// // // // //     fontWeight: "500",
// // // // //     padding: "10px 30px",
// // // // //     borderRadius: "30px",
// // // // //     boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   generateButton: {
// // // // //     marginLeft: "40px",
// // // // //     backgroundColor: "#6e4e43",
// // // // //     color: "white",
// // // // //     border: "none",
// // // // //     padding: "10px 20px",
// // // // //     borderRadius: "8px",
// // // // //     cursor: "pointer",
// // // // //     fontSize: "14px",
// // // // //     boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
// // // // //   },
// // // // // };

// // // // // export default InvitationPDF;

// // // // import React, { useRef } from "react";
// // // // import jsPDF from "jspdf";
// // // // import html2canvas from "html2canvas";
// // // // import "./Invitacion.css";

// // // // const Invitacion = () => {
// // // //   const pdfRef = useRef();

// // // //   const handleDownloadPDF = async () => {
// // // //     const element = pdfRef.current;
// // // //     const canvas = await html2canvas(element, { scale: 3 });
// // // //     const imgData = canvas.toDataURL("image/png");

// // // //     const pdf = new jsPDF("p", "mm", "a4");
// // // //     const imgWidth = 210; // ancho A4 en mm
// // // //     const pageHeight = 297;
// // // //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
// // // //     let heightLeft = imgHeight;
// // // //     let position = 0;

// // // //     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
// // // //     heightLeft -= pageHeight;

// // // //     while (heightLeft >= 0) {
// // // //       position = heightLeft - imgHeight;
// // // //       pdf.addPage();
// // // //       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
// // // //       heightLeft -= pageHeight;
// // // //     }

// // // //     pdf.save("invitacion-boda.pdf");
// // // //   };

// // // //   return (
// // // //     <div className="inv-wrapper">
// // // //       <div className="inv-container" ref={pdfRef}>
// // // //         <div className="inv-imagen">
// // // //           <img
// // // //             src="https://gerson01211997.github.io/wedding-invitation/photos/13.webp"
// // // //             alt="pareja"
// // // //           />
// // // //         </div>

// // // //         <div className="inv-texto">
// // // //           <p className="inv-anuncio">¡Nos casamos!</p>
// // // //           <h1 className="inv-nombres">Gerson & Kathe</h1>
// // // //           <p className="inv-fecha">
// // // //             Noviembre <strong>15</strong> 2025
// // // //           </p>
// // // //           <p className="inv-cupos">
// // // //             Cupos: <span>2</span>
// // // //           </p>

// // // //           <a
// // // //             href="https://tupagina-de-invitacion.com"
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="inv-boton"
// // // //           >
// // // //             Ver invitación
// // // //           </a>
// // // //         </div>
// // // //       </div>

// // // //       <button className="inv-descargar" onClick={handleDownloadPDF}>
// // // //         Descargar PDF
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Invitacion;

// // // import React, { useRef } from "react";
// // // import jsPDF from "jspdf";
// // // import html2canvas from "html2canvas";
// // // import "./Invitacion.css";

// // // const WeddingInvitation = () => {
// // //   const pdfRef = useRef();

// // //   const downloadPDF = async () => {
// // //     const element = pdfRef.current;
// // //     const canvas = await html2canvas(element, {
// // //       scale: 3, // calidad alta
// // //       useCORS: true, // permite imágenes externas
// // //     });
// // //     const imgData = canvas.toDataURL("image/png");

// // //     const pdf = new jsPDF("p", "mm", "a4");
// // //     const pdfWidth = 210;
// // //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

// // //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
// // //     pdf.save("invitacion-boda.pdf");
// // //   };

// // //   return (
// // //     <div style={{ textAlign: "center", backgroundColor: "#bfa296", minHeight: "100vh", padding: "20px" }}>
// // //       <div className="invitation-card" ref={pdfRef}>
// // //         <div className="photo-section">
// // //           <img
// // //             src="https://gerson01211997.github.io/wedding-invitation/photos/13.webp"
// // //             alt="Foto de los novios"
// // //           />
// // //           <div className="photo-mask"></div>
// // //         </div>

// // //         <div className="content">
// // //           <p className="subtitle">¡Nos casamos!</p>
// // //           <h1 className="names">Gerson & Kathe</h1>

// // //           <div className="date-box">
// // //             <span className="month">Noviembre</span>
// // //             <span className="day">15</span>
// // //             <span className="year">2025</span>
// // //           </div>

// // //           <h2 className="save-date">Cupos: 2</h2>

// // //           <a
// // //             href="https://gerson01211997.github.io/wedding-invitation/"
// // //             className="button-link"
// // //             target="_blank"
// // //           >
// // //             Ver invitación
// // //           </a>
// // //         </div>
// // //       </div>

// // //       <button className="download-btn" onClick={downloadPDF}>
// // //         Descargar PDF
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default WeddingInvitation;

// // import React from "react";
// // import jsPDF from "jspdf";

// // const WeddingInvitationPDF = () => {
// //   const generatePDF = () => {
// //     const doc = new jsPDF("p", "mm", "a4");

// //     // Fondo de color
// //     doc.setFillColor(251, 229, 218); // #fbe5da
// //     doc.rect(0, 0, 210, 297, "F");

// //     // Imagen superior
// //     const imageUrl = "https://gerson01211997.github.io/wedding-invitation/photos/13.webp";
// //     const imgHeight = 100;
// //     doc.addImage(imageUrl, "JPEG", 0, 0, 210, imgHeight);

// //     // Degradado inferior (simulado con rectángulo semitransparente)
// //     doc.setFillColor(251, 229, 218);
// //     doc.rect(0, imgHeight - 20, 210, 40, "F");

// //     // Texto principal
// //     doc.setTextColor(110, 78, 67); // #6e4e43
// //     doc.setFont("times", "italic");
// //     doc.setFontSize(16);
// //     doc.text("¡Nos casamos!", 105, 120, { align: "center" });

// //     // Nombres
// //     doc.setFont("courier", "bold");
// //     doc.setFontSize(36);
// //     doc.text("Gerson & Kathe", 105, 140, { align: "center" });

// //     // Fecha
// //     doc.setFont("times", "normal");
// //     doc.setFontSize(18);
// //     doc.text("Noviembre", 85, 160, { align: "right" });

// //     doc.setFont("times", "bold");
// //     doc.setFontSize(28);
// //     doc.text("15", 107, 160, { align: "center" });

// //     doc.setFont("times", "normal");
// //     doc.setFontSize(18);
// //     doc.text("2025", 125, 160, { align: "left" });

// //     // Cupos
// //     doc.setFont("courier", "italic");
// //     doc.setFontSize(22);
// //     doc.text("Cupos: 2", 105, 180, { align: "center" });

// //     // Botón
// //     const btnX = 70;
// //     const btnY = 200;
// //     const btnW = 70;
// //     const btnH = 15;

// //     // Fondo del botón
// //     doc.setFillColor(210, 164, 141); // #d2a48d
// //     doc.roundedRect(btnX, btnY, btnW, btnH, 7, 7, "F");

// //     // Texto del botón
// //     doc.setTextColor(255, 255, 255);
// //     doc.setFont("helvetica", "bold");
// //     doc.setFontSize(14);
// //     doc.text("Ver invitación", 105, btnY + 10, { align: "center" });

// //     // Link clickeable
// //     doc.link(btnX, btnY, btnW, btnH, {
// //       url: "https://gerson01211997.github.io/wedding-invitation/",
// //     });

// //     // Guardar PDF
// //     doc.save("invitacion-boda.pdf");
// //   };

// //   return (
// //     <div
// //       style={{
// //         minHeight: "100vh",
// //         backgroundColor: "#bfa296",
// //         display: "flex",
// //         flexDirection: "column",
// //         alignItems: "center",
// //         justifyContent: "center",
// //       }}
// //     >
// //       <h2 style={{ color: "#fff", fontFamily: "Playfair Display" }}>
// //         Vista previa de invitación
// //       </h2>
// //       <button
// //         onClick={generatePDF}
// //         style={{
// //           backgroundColor: "#6e4e43",
// //           color: "white",
// //           border: "none",
// //           borderRadius: "25px",
// //           padding: "12px 30px",
// //           fontSize: "16px",
// //           cursor: "pointer",
// //           marginTop: "10px",
// //         }}
// //       >
// //         Descargar PDF
// //       </button>
// //     </div>
// //   );
// // };

// // export default WeddingInvitationPDF;


// import React from "react";
// import jsPDF from "jspdf";

// const InvitationPDF = () => {
//   const handleDownload = async () => {
//     const imageUrl = "/26b0090a-9569-4e2b-97c5-04e4e4713163.png"; // Usa la imagen que subiste o una URL pública
//     const response = await fetch(imageUrl);
//     const blob = await response.blob();

//     const reader = new FileReader();
//     reader.readAsDataURL(blob);
//     reader.onloadend = function () {
//       const base64data = reader.result;
//       const doc = new jsPDF({
//         orientation: "portrait",
//         unit: "px",
//         format: "a4",
//       });

//       // Ajusta la imagen al tamaño de la hoja
//       const width = doc.internal.pageSize.getWidth();
//       const height = doc.internal.pageSize.getHeight();

//       doc.addImage(base64data, "PNG", 0, 0, width, height);
//       doc.save("invitacion-boda.pdf");
//     };
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "400px",
//         margin: "40px auto",
//         borderRadius: "20px",
//         overflow: "hidden",
//       }}
//     >
//       {/* Imagen de fondo */}
//       <img
//         src="26b0090a-9569-4e2b-97c5-04e4e4713163.png"
//         alt="Invitación"
//         style={{
//           width: "100%",
//           display: "block",
//           borderRadius: "20px",
//         }}
//       />

//       {/* Botón invisible sobre “Ver invitación” */}
//       <button
//         onClick={handleDownload}
//         style={{
//           position: "absolute",
//           bottom: "48px", // Ajusta según tu imagen
//           left: "50%",
//           transform: "translateX(-50%)",
//           width: "180px",
//           height: "45px",
//           background: "transparent",
//           border: "none",
//           cursor: "pointer",
//         }}
//         aria-label="Descargar invitación"
//       />
//     </div>
//   );
// };

// export default InvitationPDF;

import React from "react";
import jsPDF from "jspdf";

const WeddingPDFGenerator = () => {
  const imageUrl = "./photos/invitaciones/Boda_Kathe&Gerson_4.png";
  const linkUrl ="https://gerson01211997.github.io/wedding-invitation"
  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [400, 700], // tamaño personalizado similar al diseño original
    });

    // Cargar la imagen como fondo
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;

    img.onload = () => {
      pdf.addImage(img, "PNG", 0, 0, 400, 700);

      // Puedes agregar texto opcional si quieres
      // pdf.setFont("helvetica", "bold");
      // pdf.setFontSize(16);
      // pdf.text("¡Nos casamos!", 140, 60);
           // Rectángulo clickeable (posición provisional)
      const x = 105; // posición X
      const y = 625; // posición Y
      const width = 190; // ancho
      const height = 45; // alto

      // Dibujar borde visible (luego puedes quitarlo)
      pdf.setDrawColor('#8FA8D3'); // ← borde transparente
      pdf.rect(x, y, width, height); // crea el borde (invisible)
      // pdf.rect(x, y, width, height);

      // Añadir enlace sobre el área
      pdf.link(x, y, width, height, { url: linkUrl });

      pdf.save("Boda_Kathe&Gerson_4.pdf");
    };

    img.onerror = () => {
      alert("No se pudo cargar la imagen. Verifica la URL.");
    };
  };

  return (
    <div
      style={{
        background: "#bfa296",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <img
        src={imageUrl}
        alt="Previsualización de la invitación"
        style={{
          width: "300px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          marginBottom: "20px",
        }}
      />
      <button
        onClick={generatePDF}
        style={{
          backgroundColor: "#b68a74",
          color: "#fff",
          border: "none",
          borderRadius: "30px",
          padding: "10px 25px",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s ease",
        }}
      >
        Descargar PDF
      </button>
    </div>
  );
};

export default WeddingPDFGenerator;
