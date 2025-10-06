// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import './PDFGenerator.css';

// const PDFGenerator = () => {
//   const [invitationNumbers, setInvitationNumbers] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [generatedCount, setGeneratedCount] = useState(0);

//   // URL base de la página (puedes cambiarla según tu dominio)
//   const baseUrl = 'https://gerson01211997.github.io/wedding-invitation';

//   const generatePDF = (invitationNumber) => {
//     const doc = new jsPDF();
    
//     // Configuración de colores
//     const primaryColor = '#8B4513'; // Marrón
//     const secondaryColor = '#DAA520'; // Dorado
//     const textColor = '#2F4F4F'; // Gris oscuro

//     // Título principal
//     doc.setFontSize(24);
//     doc.setTextColor(primaryColor);
//     doc.setFont('helvetica', 'bold');
//     doc.text('Invitación de Boda', 105, 30, { align: 'center' });

//     // Línea decorativa
//     doc.setDrawColor(secondaryColor);
//     doc.setLineWidth(2);
//     doc.line(50, 40, 160, 40);

//     // Nombres de los novios
//     doc.setFontSize(18);
//     doc.setTextColor(textColor);
//     doc.setFont('helvetica', 'normal');
//     doc.text('Gerson & Kathe', 105, 60, { align: 'center' });

//     // Fecha de la boda
//     doc.setFontSize(14);
//     doc.text('Sábado, 15 de Noviembre de 2025', 105, 80, { align: 'center' });
//     doc.text('6:30 PM', 105, 95, { align: 'center' });

//     // Número de invitación
//     doc.setFontSize(16);
//     doc.setTextColor(primaryColor);
//     doc.setFont('helvetica', 'bold');
//     doc.text(`Número de cupos: ${invitationNumber}`, 105, 150, { align: 'center' });

//     // Línea decorativa inferior
//     doc.setDrawColor(secondaryColor);
//     doc.setLineWidth(1);
//     doc.line(50, 160, 160, 160);

    
//     // Crear un enlace clickeable
//     doc.setFontSize(9);
//     doc.setTextColor('#FFFFFF');
//     doc.setFont('helvetica', 'bold');
    
//     // Dibujar un rectángulo como botón
//     doc.setDrawColor(secondaryColor);
//     doc.setFillColor(secondaryColor);
//     doc.roundedRect(60, 180, 90, 12, 3, 3, 'FD');
    
//     // Agregar el enlace clickeable
//     doc.link(60, 180, 90, 12, { url: baseUrl });
//     doc.text('Clic para ver la invitación', 105, 188, { align: 'center' });
    
//     // // URL debajo del botón
//     // doc.setFontSize(8);
//     // doc.setTextColor(textColor);
//     // doc.setFont('helvetica', 'normal');
//     // doc.text(baseUrl, 105, 200, { align: 'center' });

   

//     return doc;
//   };

//   const handleGeneratePDFs = async () => {
//     if (!invitationNumbers.trim()) {
//       alert('Por favor ingresa al menos un número de invitación');
//       return;
//     }

//     setIsGenerating(true);
//     setGeneratedCount(0);

//     try {
//       // Convertir la entrada en un arreglo de números
//       const numbers = invitationNumbers
//         .split(',')
//         .map(num => num.trim())
//         .filter(num => num !== '');

//       if (numbers.length === 0) {
//         alert('No se encontraron números válidos');
//         return;
//       }

//       // Generar un PDF por cada número de invitación
//       for (let i = 0; i < numbers.length; i++) {
//         const invitationNumber = numbers[i];
//         const doc = generatePDF(invitationNumber);
        
//         // Descargar el PDF
//         doc.save(`invitacion_${invitationNumber}.pdf`);
        
//         setGeneratedCount(i + 1);
        
//         // Pequeña pausa para evitar problemas de descarga
//         await new Promise(resolve => setTimeout(resolve, 500));
//       }

//       alert(`¡Se generaron ${numbers.length} PDFs exitosamente!`);
//     } catch (error) {
//       console.error('Error generando PDFs:', error);
//       alert('Hubo un error al generar los PDFs');
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleClear = () => {
//     setInvitationNumbers('');
//     setGeneratedCount(0);
//   };

//   return (
//     <div className="pdf-generator">
//       <div className="pdf-generator-container">
//         <h2 className="pdf-generator-title">Generador de Invitaciones PDF</h2>
        
//         <div className="pdf-generator-form">
//           <label htmlFor="invitation-numbers" className="pdf-generator-label">
//             Números de Invitación:
//           </label>
//           <textarea
//             id="invitation-numbers"
//             className="pdf-generator-textarea"
//             value={invitationNumbers}
//             onChange={(e) => setInvitationNumbers(e.target.value)}
//             placeholder="Ingresa los números de invitación separados por comas. Ejemplo: 1, 2, 3, 4, 5"
//             rows={4}
//           />
          
//           <div className="pdf-generator-info">
//             <p>• Separa los números con comas</p>
//             <p>• Se generará un PDF individual para cada número</p>
//             <p>• Cada PDF incluirá un enlace para confirmar asistencia</p>
//           </div>

//           <div className="pdf-generator-buttons">
//             <button
//               onClick={handleGeneratePDFs}
//               disabled={isGenerating || !invitationNumbers.trim()}
//               className="pdf-generator-button pdf-generator-button-primary"
//             >
//               {isGenerating ? `Generando... (${generatedCount})` : 'Generar PDFs'}
//             </button>
            
//             <button
//               onClick={handleClear}
//               disabled={isGenerating}
//               className="pdf-generator-button pdf-generator-button-secondary"
//             >
//               Limpiar
//             </button>
//           </div>

//           {isGenerating && (
//             <div className="pdf-generator-progress">
//               <div className="pdf-generator-progress-bar">
//                 <div 
//                   className="pdf-generator-progress-fill"
//                   style={{ 
//                     width: `${(generatedCount / invitationNumbers.split(',').filter(n => n.trim()).length) * 100}%` 
//                   }}
//                 ></div>
//               </div>
//               <p>Generando PDFs... {generatedCount} de {invitationNumbers.split(',').filter(n => n.trim()).length}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PDFGenerator;

// InvitationPDF.jsx
import React, { useRef } from "react";
import jsPDF from "jspdf";

/**
 * Componente InvitationPDF
 *
 * Props (opcional):
 * - backgroundUrl: string -> ruta/URL de la imagen de fondo (por defecto "/fondo-invitacion.jpg")
 * - brideGroom: string -> "Boda Angélica & Alberto" (título)
 * - guestName: string -> "Sr. Alex Murillo & Sra"
 * - seats: number -> 2
 * - dateLabel: string -> "06 | DICIEMBRE | 2025"
 * - hashtag: string -> "#Nabarros"
 * - extraNote: string -> "Lluvia de sobres"
 * - linkUrl: string -> "http://nabarros.framer.website/"
 */
export default function InvitationPDF({
  backgroundUrl = "https://gerson01211997.github.io/wedding-invitation/photos/13.webp",
  brideGroom = "¡Nos casamos!",
  guestName = "Gerson & Kathe",
  seats = 2,
  dateLabel = "15 | Noviembre | 2025",
  extraNote = "Lluvia de sobres",
  linkUrl = "http://nabarros.framer.website/",
}) {
  const loadingRef = useRef(false);

  // Genera el PDF y devuelve un Blob URL (para abrir en nueva pestaña)
  const generatePdfBlobUrl = async () => {
    if (loadingRef.current) return;
    loadingRef.current = true;

    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Cargar la imagen de fondo como Image object para asegurar que esté lista
      const loadImage = (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          // evitar CORS cuando se usa URL remota: el servidor debe permitirlo, si no, usa una imagen en /public
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = (e) => reject(e);
          img.src = src;
        });

      let img;
      try {
        img = await loadImage(backgroundUrl);
      } catch (err) {
        console.warn("No se pudo cargar la imagen de fondo; se seguirá con fondo blanco.", err);
      }

      // Si la imagen se cargó, la colocamos cubriendo la página
      if (img) {
        // ajustar manteniendo proporción para cubrir la página
        doc.addImage(
          img,
          "JPEG",
          0,
          0,
          pageWidth,
          pageHeight,
        );
      } else {
        // fondo alternativo: rectángulo suave
        doc.setFillColor(250, 250, 250);
        doc.rect(0, 0, pageWidth, pageHeight, "F");
      }

      // --- Texto: estilizado para parecerse al PDF original ---
      // Título grande (arriba)
      doc.setFont("times", "bold");
      doc.setFontSize(30);
      doc.setTextColor("#1a1a1a"); // se puede ajustar
      // Centrar título
      const titleX = pageWidth / 2;
      doc.text(brideGroom, titleX, 120, { align: "center" });

      // Botón/Texto "CLICK AQUÍ" (hacemos un área con link encima)
      doc.setFontSize(18);
      doc.setFont("times", "normal");
      const clickText = "CLICK AQUÍ";
      // posición aproximada
      const clickY = 170;
      doc.text(clickText, titleX, clickY, { align: "center" });

      // Añadir link clicable (rectángulo invisible encima del texto)
      // obtenemos ancho aproximado del texto para crear el área del link
      const clickTextWidth = doc.getTextWidth(clickText);
      const linkRectWidth = clickTextWidth + 10;
      const linkRectHeight = 20;
      const linkRectX = titleX - linkRectWidth / 2;
      const linkRectY = clickY - 14; // ajustar para cubrir el texto

      // doc.link(x, y, width, height, { url: "..." });
      doc.link(linkRectX, linkRectY, linkRectWidth, linkRectHeight, { url: linkUrl });

      // Invitado
      doc.setFontSize(20);
      doc.setFont("times", "bold");
      doc.text(guestName, pageWidth / 2, 220, { align: "center" });

      // Texto "Hemos reservado X lugar(es) en tu honor"
      doc.setFontSize(14);
      doc.setFont("times", "normal");
      const reservedText = `Hemos reservado ${seats} lugar(es) en tu honor`;
      doc.text(reservedText, pageWidth / 2, 260, { align: "center" });

      // Nombre de los novios pequeño encima de la fecha (si quieres duplicar estilo original)
      doc.setFontSize(16);
      doc.text("Angélica & Alberto", pageWidth / 2, 300, { align: "center" });

      // Fecha grande centrada
      doc.setFontSize(18);
      doc.setFont("times", "bold");
      doc.text(dateLabel, pageWidth / 2, 340, { align: "center" });

      doc.setFontSize(12);
      doc.text(`*${extraNote}*`, pageWidth / 2, 400, { align: "center" });

      // Enlace visible (por si el lector quiere copiarlo)
      doc.setFontSize(10);
      doc.setTextColor("#0000EE");
      doc.text(linkUrl, pageWidth / 2, pageHeight - 40, { align: "center" });
      // también ponemos link encima de esa línea
      const urlTextWidth = doc.getTextWidth(linkUrl);
      doc.link(pageWidth / 2 - urlTextWidth / 2, pageHeight - 50, urlTextWidth, 12, { url: linkUrl });

      // --- Fin del PDF ---
      // Convertir a Blob para abrir en nueva pestaña
      const pdfBlob = doc.output("blob");
      const blobUrl = URL.createObjectURL(pdfBlob);

      loadingRef.current = false;
      return blobUrl;
    } catch (error) {
      loadingRef.current = false;
      console.error("Error generando PDF:", error);
      throw error;
    }
  };

  // Abrir en nueva pestaña (vista previa)
  const handleViewInvitation = async () => {
    try {
      const blobUrl = await generatePdfBlobUrl();
      // abrir en nueva pestaña
      window.open(blobUrl, "_blank");
      // opcional: revokeObjectURL después de un tiempo
      setTimeout(() => URL.revokeObjectURL(blobUrl), 60 * 1000);
    } catch (err) {
      alert("Error al generar la invitación. Revisa la consola.");
    }
  };

  // Descargar PDF directamente
  const handleDownloadInvitation = async () => {
    try {
      // Re-crear jsPDF y guardar (más simple que crear Blob y forzar download)
      const doc = new jsPDF({ orientation: "portrait", unit: "px", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Intentamos cargar la imagen (si falla se sigue con fondo blanco)
      const loadImage = (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = (e) => reject(e);
          img.src = src;
        });

      let img;
      try {
        img = await loadImage(backgroundUrl);
      } catch (err) {
        img = null;
      }

      if (img) {
        doc.addImage(img, "JPEG", 0, 0, pageWidth, pageHeight);
      } else {
        doc.setFillColor(250, 250, 250);
        doc.rect(0, 0, pageWidth, pageHeight, "F");
      }

      doc.setFont("times", "bold");
      doc.setFontSize(30);
      doc.setTextColor("#1a1a1a");
      doc.text(brideGroom, pageWidth / 2, 120, { align: "center" });

      doc.setFontSize(18);
      doc.setFont("times", "normal");
      const clickText = "CLICK AQUÍ";
      const clickY = 170;
      doc.text(clickText, pageWidth / 2, clickY, { align: "center" });

      const clickTextWidth = doc.getTextWidth(clickText);
      const linkRectWidth = clickTextWidth + 10;
      const linkRectHeight = 20;
      const linkRectX = pageWidth / 2 - linkRectWidth / 2;
      const linkRectY = clickY - 14;
      doc.link(linkRectX, linkRectY, linkRectWidth, linkRectHeight, { url: linkUrl });

      doc.setFontSize(20);
      doc.setFont("times", "bold");
      doc.text(guestName, pageWidth / 2, 220, { align: "center" });

      doc.setFontSize(14);
      doc.setFont("times", "normal");
      const reservedText = `Hemos reservado ${seats} lugar(es) en tu honor`;
      doc.text(reservedText, pageWidth / 2, 260, { align: "center" });

      doc.setFontSize(16);
      doc.text("Angélica & Alberto", pageWidth / 2, 300, { align: "center" });

      doc.setFontSize(18);
      doc.setFont("times", "bold");
      doc.text(dateLabel, pageWidth / 2, 340, { align: "center" });


      doc.setFontSize(12);
      doc.text(`*${extraNote}*`, pageWidth / 2, 400, { align: "center" });

      doc.setFontSize(10);
      doc.setTextColor("#0000EE");
      doc.text(linkUrl, pageWidth / 2, pageHeight - 40, { align: "center" });

      doc.save("invitacion.pdf");
    } catch (err) {
      console.error(err);
      alert("Error al descargar la invitación.");
    }
  };

  // UI: ejemplo simple
  return (
    <div style={{ display: "flex", gap: 12, flexDirection: "column", alignItems: "center" }}>
      <div style={{
        width: 480,
        height: 680,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 24,
        color: "#fff",
        textShadow: "0 1px 3px rgba(0,0,0,0.6)"
      }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <h2 style={{ margin: 0 }}>{brideGroom}</h2>
          <p style={{ margin: "6px 0 0 0", fontWeight: 700 }}>{guestName}</p>
          <p style={{ margin: "6px 0 0 0" }}>{`Hemos reservado ${seats} lugar(es) en tu honor`}</p>
          <p style={{ margin: "6px 0 0 0", fontWeight: 700 }}>{dateLabel}</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={handleViewInvitation}
          style={{
            background: "#e8c547",
            borderRadius: 8,
            padding: "10px 16px",
            border: "none",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Ver invitación
        </button>

        <button
          onClick={handleDownloadInvitation}
          style={{
            background: "#f3f3f3",
            borderRadius: 8,
            padding: "10px 16px",
            border: "1px solid #ddd",
            cursor: "pointer",
          }}
        >
          Descargar
        </button>
      </div>
    </div>
  );
}

