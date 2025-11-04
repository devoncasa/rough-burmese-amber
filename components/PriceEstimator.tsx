import React, { useState, useMemo, useRef } from 'react';
import type { LanguageContent } from '../types';

// Add type definition for the jsPDF and Chart.js libraries loaded from CDN
declare global {
  interface Window {
    jspdf: any;
    Chart: any;
  }
}


type SizeKey = 'small' | 'medium' | 'large' | 'extraLarge';

interface EstimationRow {
  id: number;
  selectedTypeColor: string;
  selectedSize: SizeKey | '';
  quantity: number | string;
}

interface PriceEstimatorProps {
  content: LanguageContent;
  language: 'en' | 'es' | 'ar' | 'hi' | 'th' | 'zh' | 'nl' | 'ja' | 'fr' | 'vi';
}

// Helper to format numbers as USD currency, ensuring two decimal places.
const formatCurrency = (value: number): string => {
  if (isNaN(value)) {
    value = 0;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};


// Helper to parse price ranges like "1.0-1.5" into an average number
const parsePrice = (priceRange: string): number => {
  if (!priceRange || typeof priceRange !== 'string') return 0;
  const parts = priceRange.replace(',', '.').split(/–|-/).map(parseFloat);
  if (parts.length === 1) return parts[0] || 0;
  const avg = (parts[0] + parts[1]) / 2;
  return isNaN(avg) ? 0 : avg;
};

const RARE_AMBER_TYPES = [
  'Gold Yellow (Clean)',
  'Orange Amber (Clean)',
  'Pigeon Blood Red to Cherry Red',
  'Wood Pattern Amber',
  'Black Amber (Brownish Visible)',
  'Black Amber (Solid Dark)',
  'Mila Amber (Bee Wax-like, Partial)',
  'Mila Amber (Pure Milky / Bee Wax Type)',
  // French translations
  'Jaune Or (Pur)',
  'Ambre Orange (Pur)',
  'Rouge Sang de Pigeon à Rouge Cerise',
  'Ambre à Motif de Bois',
  'Ambre Noir (Reflets Brunâtres)',
  'Ambre Noir (Uni Opaque)',
  'Ambre Mila (Type Cire d\'Abeille, Partiel)',
  'Ambre Mila (Laiteux Pur / Type Cire)',
  // Dutch translations
  'Goudgeel (Helder)',
  'Oranje Amber (Helder)',
  'Duivenbloedrood tot Kersrood',
  'Amber met Houtpatroon',
  'Zwarte Amber (Zichtbaar Bruinachtig)',
  'Zwarte Amber (Effen Donker)',
  'Mila Amber (Bijenwas-achtig, Deels)',
  'Mila Amber (Puur Melkachtig / Bijenwas)',
  // Spanish translations
  'Dorado (Limpio)',
  'Ámbar Naranja (Limpio)',
  'Rojo Sangre de Paloma / Rojo Cereza',
  'Ámbar con Vetas de Madera',
  'Ámbar Negro (Marrón Visible)',
  'Ámbar Negro (Sólido Oscuro)',
  'Ámbar Mila (Tipo Cera de Abeja, Parcial)',
  'Ámbar Mila (Puro / Tipo Cera de Abeja)',
  // Arabic translations
  'أصفر ذهبي (نقي)',
  'برتقالي (نقي)',
  'أحمر دم الحمام إلى أحمر كرزي',
  'نقش خشبي',
  'أسود (بني واضح)',
  'أسود صلب',
  'ميلا (شبه شمع النحل)',
  'ميلا (حليبي نقي / شمع النحل)',
  // Hindi translations
  'गोल्ड येलो (स्वच्छ)',
  'ऑरेंज एंबर (स्वच्छ)',
  'पिजन ब्लड रेड / चेरी रेड',
  'वुड पैटर्न एंबर',
  'ब्लैक एंबर (भूरा झलक)',
  'ब्लैक एंबर (सॉलिड डार्क)',
  'मीला एंबर (बी वैक्स समान, आंशिक)',
  'मीला एंबर (शुद्ध दूधिया / बी वैक्स टाइप)',
  // Thai translations
  'สีเหลืองทอง (สะอาด)',
  'อำพันส้ม (สะอาด)',
  'อำพันแดงเลือดนก',
  'อำพันลายไม้',
  'อำพันดำ (มีลายน้ำตาลปนเล็กน้อย)',
  'อำพันดำสนิท',
  'อำพันมิล่า (เหลืองจักรพรรดิสีเข้ม)',
  'อำพันมิล่า (เหลืองจักรพรรดิสีทอง)',
  // Chinese translations
  '黄金珀 (净水)',
  '橙珀 (净水)',
  '血珀 (鸽血红/樱桃红)',
  '根珀 (木纹)',
  '翳珀 (可见棕色)',
  '纯黑珀 (Solid Dark)',
  '蜜蜡 (部分蜡质)',
  '纯蜜蜡 / 白蜜蜡',
  // Japanese translations
  'ゴールドイエロー (クリーン)',
  'オレンジアンバー (クリーン)',
  'ピジョンブラッドレッド～チェリーレッド',
  '木目調アンバー',
  'ブラックアンバー (茶色みあり)',
  'ブラックアンバー (ソリッドダーク)',
  'ミラアンバー (蜜蝋タイプ・一部)',
  'ミラアンバー (純白蜜蝋タイプ)',
  // Vietnamese translations
  'Vàng Kim (Hàng trong)',
  'Hổ Phách Cam (Hàng trong)',
  'Đỏ Huyết Bồ Câu đến Đỏ Anh Đào',
  'Hổ Phách Vân Gỗ (Rễ Cây)',
  'Hổ Phách Đen (Ánh Nâu)',
  'Hổ Phách Đen (Đen Đặc)',
  'Hổ Phách Sáp Ong (Mila, Đục/Mây)',
  'Hổ Phách Sáp Ong (Mila, Sáp đặc/Trắng Sữa)',
];


const PriceEstimator: React.FC<PriceEstimatorProps> = ({ content, language }) => {
  const [rows, setRows] = useState<EstimationRow[]>([
    { id: 1, selectedTypeColor: '', selectedSize: '', quantity: '' },
  ]);
  
  const itemRefs = useRef<{
    [key: number]: { 
      typeSelect?: HTMLSelectElement | null;
      sizeSelect?: HTMLSelectElement | null; 
      quantityInput?: HTMLInputElement | null;
    };
  }>({});
  
  // Helper function to focus and smoothly scroll to the next input field on mobile devices.
  const focusAndScrollToNext = (element: HTMLElement | null | undefined) => {
    if (element && window.innerWidth < 1024) {
      element.focus();
      // Timeout ensures that the focus has been set and the UI has updated before scrolling,
      // which is particularly important on mobile devices where a virtual keyboard may appear.
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      }, 150);
    }
  };


  const amberTypes = useMemo(() => content.tableData.map(d => d.typeColor), [content.tableData]);

  const handleUpdateRow = (id: number, field: keyof EstimationRow, value: any) => {
    setRows(rows.map(row => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const addRow = () => {
    if (rows.length < 8) {
      const newRowId = Date.now();
      setRows([...rows, { id: newRowId, selectedTypeColor: '', selectedSize: '', quantity: '' }]);

      // Use a timeout to wait for the next render cycle after the state update
      setTimeout(() => {
        const newRowElement = itemRefs.current[newRowId]?.typeSelect;
        if (newRowElement) {
          newRowElement.focus();
          newRowElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 0);
    }
  };
  
  const removeRow = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
    if (itemRefs.current[id]) {
        delete itemRefs.current[id];
    }
  }

  const resetRows = () => {
    setRows([{ id: 1, selectedTypeColor: '', selectedSize: '', quantity: '' }]);
    itemRefs.current = {};
  };

  const handleDownloadPdf = async () => {
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      const isRtl = language === 'ar';
      let pdfFont = 'helvetica';

      const loadFont = async (fontName: string, fontUrl: string) => {
        try {
          const fontResponse = await fetch(fontUrl);
          if (!fontResponse.ok) throw new Error('Font file could not be loaded');
          
          const fontBuffer = await fontResponse.arrayBuffer();
          const fontUint8Array = new Uint8Array(fontBuffer);
          let binary = '';
          for (let i = 0; i < fontUint8Array.byteLength; i++) {
              binary += String.fromCharCode(fontUint8Array[i]);
          }
          const fontBase64 = window.btoa(binary);

          const vfsFileName = `${fontName}-Regular.ttf`;
          doc.addFileToVFS(vfsFileName, fontBase64);
          doc.addFont(vfsFileName, fontName, 'normal');
          return fontName;
        } catch (error) {
          console.error(`Failed to load ${fontName} font. PDF content might not render correctly.`, error);
          return 'helvetica'; // Fallback font
        }
      };

      if (isRtl) {
        pdfFont = await loadFont('Amiri', 'https://raw.githack.com/google/fonts/main/ofl/amiri/Amiri-Regular.ttf');
      } else if (language === 'hi') {
        pdfFont = await loadFont('NotoSansDevanagari', 'https://raw.githack.com/google/fonts/main/ofl/notosansdevanagari/static/NotoSansDevanagari-Regular.ttf');
      } else if (language === 'th') {
        pdfFont = await loadFont('Sarabun', 'https://raw.githack.com/google/fonts/main/ofl/sarabun/Sarabun-Regular.ttf');
      } else if (language === 'zh') {
        pdfFont = await loadFont('SourceHanSansSC', 'https://rawcdn.githack.com/Mr-He-style/fonts/main/ttf/SourceHanSansSC-Regular.ttf');
      } else if (language === 'ja') {
        pdfFont = await loadFont('NotoSansJP', 'https://rawcdn.githack.com/google/fonts/main/ofl/notosansjp/NotoSansJP-Regular.ttf');
      } else if (language === 'vi') {
        pdfFont = await loadFont('BeVietnamPro', 'https://raw.githack.com/google/fonts/main/ofl/bevietnampro/BeVietnamPro-Regular.ttf');
      }
      
      doc.setFont(pdfFont);


      const now = new Date();
      const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
      const formattedTime = `${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}`;
      const dateTimeString = `${formattedDate} at ${formattedTime.replace(/-/g, ':')}`;
      const fileName = `RoughBurmeseAmber_Estimate_${formattedDate}_${formattedTime}.pdf`;

      const logoUrl = 'https://raw.githubusercontent.com/devoncasa/VickyLuxGems-Assets/main/vicky-burmese-amber-logo.jpg';
      
      const addHeader = (docInstance: any): Promise<void> => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'Anonymous';
          const pageWidth = docInstance.internal.pageSize.getWidth();
          const margin = 15;
          const logoSize = 25;

          img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = (this as HTMLImageElement).naturalWidth;
            canvas.height = (this as HTMLImageElement).naturalHeight;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.drawImage(this as HTMLImageElement, 0, 0);
              const dataURL = canvas.toDataURL('image/jpeg');
              const logoX = isRtl ? pageWidth - margin - logoSize : margin;
              docInstance.addImage(dataURL, 'JPEG', logoX, 12, logoSize, logoSize);
            }
            
            const textX = isRtl ? pageWidth - margin - logoSize - 10 : margin + logoSize + 10;
            const textAlign = isRtl ? 'right' : 'left';
            
            docInstance.setFontSize(22);
            docInstance.setFont(pdfFont, 'bold');
            docInstance.text(content.pdfTitle, textX, 22, { align: textAlign });
            
            docInstance.setFontSize(10);
            docInstance.setFont(pdfFont, 'normal');
            docInstance.text(content.companyName, textX, 29, { align: textAlign });
            docInstance.text(`${content.pdfDate}: ${dateTimeString}`, textX, 35, { align: textAlign });
            resolve();
          };
          img.onerror = () => {
            const textX = isRtl ? pageWidth - margin : margin;
            const textAlign = isRtl ? 'right' : 'left';
            docInstance.setFontSize(22);
            docInstance.setFont(pdfFont, 'bold');
            docInstance.text(content.pdfTitle, textX, 22, { align: textAlign });
            
            docInstance.setFontSize(10);
            docInstance.setFont(pdfFont, 'normal');
            docInstance.text(content.companyName, textX, 29, { align: textAlign });
            docInstance.text(`${content.pdfDate}: ${dateTimeString}`, textX, 35, { align: textAlign });
            resolve();
          };
          img.src = logoUrl;
        });
      };
      
      let head = [[
        content.estimatorHeaders.item,
        content.estimatorHeaders.inclusion,
        content.estimatorHeaders.size,
        content.estimatorHeaders.pricePerGram,
        content.estimatorHeaders.quantity,
        content.estimatorHeaders.total
      ]];
      
      const validRows = calculations.calculatedRows.filter(row => row.selectedTypeColor && parseFloat(String(row.quantity)) > 0);
      let body = validRows.map(row => {
          const sizeLabel = sizeOptions.find(opt => opt.key === row.selectedSize)?.label || '';
          return [
            row.selectedTypeColor,
            row.inclusion,
            sizeLabel,
            `$${row.pricePerGram.toFixed(2)}`,
            `${row.quantity} g`,
            formatCurrency(row.total)
          ];
      });

      const arabicRegex = /[\u0600-\u06FF]/;
      if (isRtl) {
          const rtlMarker = '\u202B';
          const processRtlText = (text: any) => {
              if (typeof text === 'string' && arabicRegex.test(text)) {
                  return rtlMarker + text;
              }
              return text;
          };
          head[0] = head[0].map(processRtlText);
          body = body.map(row => row.map(processRtlText));
      }

      const columnStylesLtr = {
          0: { cellWidth: 45, halign: 'left' },
          1: { halign: 'left' },
          2: { halign: 'left' },
          3: { halign: 'center' },
          4: { halign: 'center' },
          5: { halign: 'right', fontStyle: 'bold' },
      };

      const columnStylesRtl = {
          0: { halign: 'left', fontStyle: 'bold' }, 
          1: { halign: 'center' }, 
          2: { halign: 'center' }, 
          3: { halign: 'right' },  
          4: { halign: 'right' }, 
          5: { cellWidth: 45, halign: 'right'}, 
      };
      
      let finalColumnStyles: { [key: number]: { cellWidth?: number; halign: string; fontStyle?: string; } } = columnStylesLtr;

      if (isRtl) {
          head = [head[0].reverse()];
          body = body.map(row => row.reverse());
          finalColumnStyles = columnStylesRtl;
      }

      await addHeader(doc);
      
      doc.autoTable({
          head: head,
          body: body,
          startY: 48,
          theme: 'grid',
          headStyles: { fillColor: '#78350f', textColor: '#ffffff', fontStyle: 'bold', font: pdfFont },
          alternateRowStyles: { fillColor: '#fef3c7' },
          styles: { cellPadding: 2.5, fontSize: 9, font: pdfFont },
          columnStyles: finalColumnStyles,
      });

      let finalY = doc.autoTable.previous.finalY;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      let pdfCursorY = finalY;

      const checkPageBreak = (currentY: number, requiredSpace: number = 20) => {
        if (currentY + requiredSpace > pageHeight - 20) {
            doc.addPage();
            return 20; // New Y position on new page
        }
        return currentY;
      };

      // ---- START of Order Summary Section ----
      const commonItems = validRows.filter(row => !RARE_AMBER_TYPES.includes(row.selectedTypeColor));
      const rareItems = validRows.filter(row => RARE_AMBER_TYPES.includes(row.selectedTypeColor));

      const calculateCategorySummary = (items: typeof validRows) => {
          const totalWeight = items.reduce((sum, item) => sum + parseFloat(String(item.quantity)), 0);
          const subtotal = items.reduce((sum, item) => sum + item.total, 0);
          const avgPrice = totalWeight > 0 ? subtotal / totalWeight : 0;
          return { totalWeight, subtotal, avgPrice };
      };

      const commonSummary = calculateCategorySummary(commonItems);
      const rareSummary = calculateCategorySummary(rareItems);
      
      let chartImage = '';
      if (window.Chart && (commonSummary.totalWeight > 0 || rareSummary.totalWeight > 0)) {
          const canvas = document.createElement('canvas');
          canvas.width = 300;
          canvas.height = 300;
          
          new window.Chart(canvas.getContext('2d'), {
              type: 'pie',
              data: {
                  labels: [content.pdfCommonTypes, content.pdfRareTypes],
                  datasets: [{
                      data: [commonSummary.totalWeight, rareSummary.totalWeight],
                      backgroundColor: ['#f59e0b', '#dc2626'], // amber-500, red-600
                      borderColor: '#ffffff',
                      borderWidth: 2,
                  }]
              },
              options: {
                  responsive: false,
                  animation: { duration: 0 },
                  plugins: {
                      legend: { 
                        position: 'bottom', 
                        labels: { 
                          font: { size: 12, family: 'helvetica' }, 
                          boxWidth: 15,
                          padding: 15
                        }
                      },
                      tooltip: { enabled: false }
                  }
              }
          });
          chartImage = canvas.toDataURL('image/png');
      }


      if (commonSummary.totalWeight > 0 || rareSummary.totalWeight > 0) {
          pdfCursorY = checkPageBreak(pdfCursorY, 80);
          pdfCursorY += 15;

          doc.setFontSize(14);
          doc.setFont(pdfFont, 'bold');
          doc.text(content.pdfOrderSummaryTitle, pageWidth / 2, pdfCursorY, { align: 'center' });
          pdfCursorY += 10;
          
          const summaryStartY = pdfCursorY;
          const textX = isRtl ? pageWidth - 15 : 15;
          const align = isRtl ? 'right' : 'left';
          let textCursorY = summaryStartY;

          const chartSize = 40;
          const chartX = isRtl ? 15 : pageWidth - 15 - chartSize;
          if (chartImage && rareSummary.totalWeight > 0 && commonSummary.totalWeight > 0) {
              doc.addImage(chartImage, 'PNG', chartX, summaryStartY - 5, chartSize, chartSize);
          }


          const drawSummaryBlock = (title: string, summary: ReturnType<typeof calculateCategorySummary>) => {
              doc.setFontSize(11);
              doc.setFont(pdfFont, 'bold');
              doc.text(title, textX, textCursorY, { align });
              textCursorY += 6;
              doc.setFontSize(10);
              doc.setFont(pdfFont, 'normal');
              doc.text(`${content.pdfTotalWeight}: ${summary.totalWeight.toLocaleString()} grams`, textX, textCursorY, { align });
              textCursorY += 6;
              doc.text(`${content.pdfAvgPrice}: ${formatCurrency(summary.avgPrice)} / gram`, textX, textCursorY, { align });
              textCursorY += 6;
              doc.setFont(pdfFont, 'bold');
              doc.text(`${content.pdfSubtotal}: ${formatCurrency(summary.subtotal)}`, textX, textCursorY, { align });
              textCursorY += 10;
          };

          if (commonSummary.totalWeight > 0) {
              drawSummaryBlock(content.pdfCommonTypes, commonSummary);
          }
          if (rareSummary.totalWeight > 0) {
              drawSummaryBlock(content.pdfRareTypes, rareSummary);
          }
          pdfCursorY = textCursorY;
      }
      
      pdfCursorY = checkPageBreak(pdfCursorY, 30);

      // Grand Total
      doc.setDrawColor(209, 213, 219);
      doc.line(15, pdfCursorY - 5, pageWidth - 15, pdfCursorY - 5);
      doc.setFontSize(14);
      doc.setFont(pdfFont, 'bold');
      const grandTotalText = `${content.grandTotalLabel}: ${formatCurrency(calculations.grandTotal)}`;
      const grandTotalX = isRtl ? 15 : pageWidth - 15;
      const grandTotalAlign = isRtl ? 'left' : 'right';
      doc.text(grandTotalText, grandTotalX, pdfCursorY, { align: grandTotalAlign });
      pdfCursorY += 10;
      
      // ---- START of Discount & Availability Section ----
      doc.setDrawColor(209, 213, 219); 
      doc.line(15, pdfCursorY, pageWidth - 15, pdfCursorY);
      pdfCursorY += 10;
      
      // Section Title
      doc.setFontSize(12);
      doc.setFont(pdfFont, 'bold');
      doc.setTextColor(0);
      const sectionTitleX = isRtl ? pageWidth - 15 : 15;
      const sectionTitleAlign = isRtl ? 'right' : 'left';
      doc.text(content.pdfDiscountInfoTitle, sectionTitleX, pdfCursorY, { align: sectionTitleAlign });
      pdfCursorY += 10;
      
      // Discount Calculation Logic
      const grandTotal = calculations.grandTotal;
      const discountedTotalHigh = grandTotal - (commonSummary.subtotal * 0.10 + rareSummary.subtotal * 0.05);
      const discountedTotalLow = grandTotal - (commonSummary.subtotal * 0.25 + rareSummary.subtotal * 0.15);
      
      const labelX = isRtl ? pageWidth - 15 : 15;
      const valueX = isRtl ? pageWidth - 90 : 90;
      const alignLeft = isRtl ? 'right' : 'left';
      
      doc.setFontSize(10);
      
      doc.setFont(pdfFont, 'normal');
      doc.setTextColor(87, 83, 78);
      doc.text(content.pdfEstimatedDiscount + ':', labelX, pdfCursorY, { align: alignLeft });
      
      doc.setFont(pdfFont, 'bold');
      let discountTextY = pdfCursorY;
      if (commonSummary.totalWeight > 0) {
          doc.text(`- ${content.pdfCommonTypes}: 10–25%`, valueX, discountTextY, { align: alignLeft });
          discountTextY += 6;
      }
      if (rareSummary.totalWeight > 0) {
          doc.text(`- ${content.pdfRareTypes}: 5–15%`, valueX, discountTextY, { align: alignLeft });
          discountTextY += 6;
      }
      pdfCursorY = discountTextY;
      
      doc.setFont(pdfFont, 'normal');
      doc.text(content.pdfEstimatedTotalAfterDiscount + ':', labelX, pdfCursorY, { align: alignLeft });
      doc.setFont(pdfFont, 'bold');
      doc.setTextColor(34, 139, 34); // ForestGreen for emphasis
      doc.text(`${formatCurrency(discountedTotalLow)} – ${formatCurrency(discountedTotalHigh)}`, valueX, pdfCursorY, { align: alignLeft });
      pdfCursorY += 12;
      
      pdfCursorY = checkPageBreak(pdfCursorY, 40);

      // Discount Policy
      doc.setFontSize(10);
      doc.setFont(pdfFont, 'bold');
      doc.setTextColor(0);
      doc.text(content.pdfDiscountPolicyTitle, labelX, pdfCursorY, { align: alignLeft });
      pdfCursorY += 6;
      
      doc.setFontSize(8);
      doc.setFont(pdfFont, 'normal');
      doc.setTextColor(100);
      const policyText = doc.splitTextToSize(content.pdfDiscountPolicyContent, pageWidth - 30);
      doc.text(policyText, labelX, pdfCursorY, { align: alignLeft });
      pdfCursorY += doc.getTextDimensions(policyText).h + 8;
      
      pdfCursorY = checkPageBreak(pdfCursorY, 45);

      // Availability Note
      doc.setFontSize(10);
      doc.setFont(pdfFont, 'bold');
      doc.setTextColor(0);
      doc.text(content.pdfAvailabilityNoteTitle, labelX, pdfCursorY, { align: alignLeft });
      pdfCursorY += 6;
      
      doc.setFontSize(8);
      doc.setFont(pdfFont, 'normal');
      doc.setTextColor(100);
      const availabilityText = doc.splitTextToSize(content.pdfAvailabilityNoteContent, pageWidth - 30);
      doc.text(availabilityText, labelX, pdfCursorY, { align: alignLeft });
      pdfCursorY += doc.getTextDimensions(availabilityText).h + 15;
      
      pdfCursorY = checkPageBreak(pdfCursorY, 60);

      // Footer contact info
      doc.setFontSize(9);
      doc.setFont(pdfFont, 'bold');
      doc.setTextColor(0);
      doc.text(content.companyName, labelX, pdfCursorY, { align: alignLeft });
      pdfCursorY += 5;

      doc.setFont(pdfFont, 'normal');
      doc.setFontSize(8);
      const address = "919/1 JEWELRY TRADE CENTER BUILDING, SILOM 19, SILOM RD., BANGRAK, BANGKOK 10500, THAILAND";
      const addressLines = doc.splitTextToSize(address, 180);
      doc.text(addressLines, labelX, pdfCursorY, { align: alignLeft });
      pdfCursorY += (addressLines.length * 3.5) + 2;

      doc.text("WhatsApp/Tel: +66(0)81 851 9922, +66(0)63 195 9922", labelX, pdfCursorY, { align: alignLeft });
      pdfCursorY += 4;
      doc.text("Email: info.vkamber@gmail.com", labelX, pdfCursorY, { align: alignLeft });
      pdfCursorY += 4;
      doc.text("Official Website: www.vickyamber.com", labelX, pdfCursorY, { align: alignLeft });
      
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.setFont(pdfFont, 'normal');
          doc.setFontSize(8);
          doc.setTextColor(150);
          doc.text(
              content.companyName, 
              doc.internal.pageSize.width / 2, 
              doc.internal.pageSize.height - 10, 
              { align: 'center' }
          );
      }

      // A more robust check for mobile/tablet devices, including modern iPads
      const isMobileTablet = () => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        // Basic regex check for common mobile patterns
        if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
          return true;
        }
        // Check for iPad on iOS 13+ which may pretend to be a Mac
        if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
          return true;
        }
        return false;
      };

      if (isMobileTablet()) {
        // For mobile/tablet devices, open the PDF in a new tab.
        // The browser's built-in PDF viewer will handle saving/sharing.
        const pdfDataUri = doc.output('datauristring');
        window.open(pdfDataUri, '_blank');
      } else {
        // For desktop devices, trigger a direct download.
        doc.save(fileName);
      }

    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Sorry, there was an error creating the PDF. Please ensure you have a stable internet connection and try again.");
    }
  };
  
  const sizeOptions: {key: SizeKey, label: string}[] = [
      { key: 'small', label: 'Small (1–20g)'},
      { key: 'medium', label: 'Medium (20–150g)'},
      { key: 'large', label: 'Large (150–500g)'},
      { key: 'extraLarge', label: 'Extra Large (500–2000g)'},
  ];

  const calculations = useMemo(() => {
    let grandTotal = 0;
    const calculatedRows = rows.map(row => {
      const amberDetails = content.tableData.find(d => d.typeColor === row.selectedTypeColor);
      const pricePerGram = (amberDetails && row.selectedSize) ? parsePrice(amberDetails[row.selectedSize]) : 0;
      const inclusion = amberDetails ? amberDetails.inclusion : '';
      const quantityNum = parseFloat(String(row.quantity)) || 0;
      const total = pricePerGram * quantityNum;
      grandTotal += total;
      return { ...row, pricePerGram, total, inclusion };
    });
    return { calculatedRows, grandTotal };
  }, [rows, content.tableData]);


  return (
    <div className="my-12 p-6 bg-white shadow-xl rounded-2xl border border-amber-200/50" id="price-estimator">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-6 text-center">{content.estimatorTitle}</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max">
          <thead>
            <tr className="border-b border-amber-200">
              <th className="text-left rtl:text-right font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.item}</th>
              <th className="text-left rtl:text-right font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.inclusion}</th>
              <th className="text-left rtl:text-right font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.size}</th>
              <th className="text-center font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.pricePerGram}</th>
              <th className="text-center font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.quantity}</th>
              <th className="text-right rtl:text-left font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.total}</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {calculations.calculatedRows.map((row, index) => (
              <tr key={row.id} className="border-b border-amber-100 last:border-b-0">
                <td className="p-2 align-top" style={{minWidth: '200px'}}>
                  <select
                    ref={el => {
                      if (!itemRefs.current[row.id]) itemRefs.current[row.id] = {};
                      itemRefs.current[row.id]!.typeSelect = el;
                    }}
                    value={row.selectedTypeColor}
                    onChange={(e) => {
                      handleUpdateRow(row.id, 'selectedTypeColor', e.target.value);
                      focusAndScrollToNext(itemRefs.current[row.id]?.sizeSelect);
                    }}
                    className="w-full p-2 bg-white text-black border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-sm"
                  >
                    <option value="">{content.selectTypePlaceholder}</option>
                    {amberTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </td>
                 <td className="p-2 align-top text-left rtl:text-right text-stone-600 text-sm" style={{minWidth: '150px'}}>
                  {row.inclusion}
                </td>
                <td className="p-2 align-top" style={{minWidth: '180px'}}>
                  <select
                    ref={el => {
                      if (!itemRefs.current[row.id]) itemRefs.current[row.id] = {};
                      itemRefs.current[row.id]!.sizeSelect = el;
                    }}
                    value={row.selectedSize}
                    onChange={(e) => {
                      handleUpdateRow(row.id, 'selectedSize', e.target.value);
                      focusAndScrollToNext(itemRefs.current[row.id]?.quantityInput);
                    }}
                    className="w-full p-2 bg-white text-black border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-sm"
                    disabled={!row.selectedTypeColor}
                  >
                    <option value="">{content.selectSizePlaceholder}</option>
                    {sizeOptions.map(opt => <option key={opt.key} value={opt.key}>{opt.label}</option>)}
                  </select>
                </td>
                <td className="p-2 align-top text-center text-stone-700 font-medium text-sm">
                  ${row.pricePerGram.toFixed(2)}
                </td>
                <td className="p-2 align-top" style={{width: '120px'}}>
                  <input
                    ref={el => {
                      if (!itemRefs.current[row.id]) itemRefs.current[row.id] = {};
                      itemRefs.current[row.id]!.quantityInput = el;
                    }}
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleUpdateRow(row.id, 'quantity', e.target.value)}
                    className="w-full p-2 bg-white text-black border border-stone-300 rounded-md text-center focus:ring-amber-500 focus:border-amber-500 text-sm"
                    placeholder="grams"
                    min="0"
                    disabled={!row.selectedSize}
                  />
                </td>
                <td className="p-2 align-top text-right rtl:text-left font-bold text-amber-900 text-sm">
                  {formatCurrency(row.total)}
                </td>
                <td className="p-2 align-top text-center">
                    {index > 0 && (
                         <button onClick={() => removeRow(row.id)} className="text-red-500 hover:text-red-700 p-1 rounded-full" aria-label="Remove item">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="http://www.w3.org/2000/svg" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                        </button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={addRow}
          disabled={rows.length >= 8}
          className="px-4 py-2 text-sm font-semibold text-white bg-amber-700 rounded-md hover:bg-amber-800 disabled:bg-stone-400 disabled:cursor-not-allowed transition-colors"
        >
          {content.addRowButton}
        </button>
        <button
          onClick={resetRows}
          className="px-4 py-2 text-sm font-semibold text-amber-800 bg-amber-100 rounded-md hover:bg-amber-200/80 transition-colors"
        >
          {content.resetButton}
        </button>
        <button
          onClick={handleDownloadPdf}
          className="px-4 py-2 text-sm font-semibold text-amber-800 bg-amber-100 rounded-md hover:bg-amber-200/80 transition-colors"
        >
          {content.downloadButton}
        </button>
      </div>

      <div className="mt-6 p-3 bg-stone-100/70 border border-stone-200 rounded-lg text-base text-stone-600 flex items-start gap-2">
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-500" viewBox="http://www.w3.org/2000/svg" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 002 0v-3a1 1 0 00-2 0z" clipRule="evenodd" />
          </svg>
        </div>
        <p>{content.estimatorNote}</p>
      </div>
      
      <div className="mt-4 p-4 bg-teal-50/80 border border-teal-200/90 rounded-lg text-sm text-teal-900">
        <h3 className="font-bold">{content.estimatorRemark.title}</h3>
        <p className="mt-1 whitespace-pre-line">{content.estimatorRemark.content}</p>
      </div>


      <div className="mt-8 flex justify-end">
        <div className="text-right rtl:text-left bg-amber-50/70 p-4 rounded-lg">
          <span className="text-md font-semibold text-stone-600">{content.grandTotalLabel}:</span>
          <span className="text-2xl font-bold text-amber-900 ml-0.5 rtl:ml-0 rtl:mr-0.5">
            {formatCurrency(calculations.grandTotal)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceEstimator;