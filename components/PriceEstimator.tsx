import React, { useState, useMemo } from 'react';
import type { LanguageContent } from '../types';

type SizeKey = 'small' | 'medium' | 'large' | 'extraLarge';

interface EstimationRow {
  id: number;
  selectedTypeColor: string;
  selectedSize: SizeKey | '';
  quantity: number | string;
}

interface PriceEstimatorProps {
  content: LanguageContent;
}

// Helper to parse price ranges like "1.0-1.5" into an average number
const parsePrice = (priceRange: string): number => {
  if (!priceRange || typeof priceRange !== 'string') return 0;
  const parts = priceRange.split(/–|-/).map(parseFloat);
  if (parts.length === 1) return parts[0] || 0;
  const avg = (parts[0] + parts[1]) / 2;
  return isNaN(avg) ? 0 : avg;
};


const PriceEstimator: React.FC<PriceEstimatorProps> = ({ content }) => {
  const [rows, setRows] = useState<EstimationRow[]>([
    { id: 1, selectedTypeColor: '', selectedSize: '', quantity: '' },
  ]);

  const amberTypes = useMemo(() => content.tableData.map(d => d.typeColor), [content.tableData]);

  const handleUpdateRow = (id: number, field: keyof EstimationRow, value: any) => {
    setRows(rows.map(row => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const addRow = () => {
    if (rows.length < 8) {
      setRows([...rows, { id: Date.now(), selectedTypeColor: '', selectedSize: '', quantity: '' }]);
    }
  };
  
  const removeRow = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  }

  const resetRows = () => {
    setRows([{ id: 1, selectedTypeColor: '', selectedSize: '', quantity: '' }]);
  };

  const handleDownloadPdf = () => {
    window.print();
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
              <th className="text-left font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.item}</th>
              <th className="text-left font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.inclusion}</th>
              <th className="text-left font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.size}</th>
              <th className="text-center font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.pricePerGram}</th>
              <th className="text-center font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.quantity}</th>
              <th className="text-right font-semibold text-stone-600 p-3 text-sm">{content.estimatorHeaders.total}</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {calculations.calculatedRows.map((row, index) => (
              <tr key={row.id} className="border-b border-amber-100 last:border-b-0">
                <td className="p-2 align-top" style={{minWidth: '200px'}}>
                  <select
                    value={row.selectedTypeColor}
                    onChange={(e) => handleUpdateRow(row.id, 'selectedTypeColor', e.target.value)}
                    className="w-full p-2 bg-white text-black border border-stone-300 rounded-md focus:ring-amber-500 focus:border-amber-500 text-sm"
                  >
                    <option value="">{content.selectTypePlaceholder}</option>
                    {amberTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </td>
                 <td className="p-2 align-top text-left text-stone-600 text-sm" style={{minWidth: '150px'}}>
                  {row.inclusion}
                </td>
                <td className="p-2 align-top" style={{minWidth: '180px'}}>
                  <select
                    value={row.selectedSize}
                    onChange={(e) => handleUpdateRow(row.id, 'selectedSize', e.target.value)}
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
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleUpdateRow(row.id, 'quantity', e.target.value)}
                    className="w-full p-2 bg-white text-black border border-stone-300 rounded-md text-center focus:ring-amber-500 focus:border-amber-500 text-sm"
                    placeholder="grams"
                    min="0"
                    disabled={!row.selectedSize}
                  />
                </td>
                <td className="p-2 align-top text-right font-bold text-amber-900 text-sm">
                  ${row.total.toFixed(2)}
                </td>
                <td className="p-2 align-top text-center">
                    {index > 0 && (
                         <button onClick={() => removeRow(row.id)} className="text-red-500 hover:text-red-700 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                        </button>
                    )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-3 bg-stone-100/70 border border-stone-200 rounded-lg text-xs text-stone-600 flex items-start gap-2">
        <div className="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stone-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 002 0v-3a1 1 0 00-2 0z" clipRule="evenodd" />
          </svg>
        </div>
        <p>{content.estimatorNote}</p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
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
        <div className="text-right bg-amber-50/70 p-4 rounded-lg">
          <span className="text-md font-semibold text-stone-600">{content.grandTotalLabel}:</span>
          <span className="text-2xl font-bold text-amber-900 ml-.5">
            ${calculations.grandTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceEstimator;