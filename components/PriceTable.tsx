import React from 'react';
import type { AmberPrice, TableHeader } from '../types';

interface PriceTableProps {
  data: AmberPrice[];
  headers: TableHeader[];
}

const getHeaderClasses = (key: string): string => {
  const baseThClasses = 'px-4 py-3 text-xs font-bold text-amber-100 uppercase tracking-wider';
  switch (key) {
    case 'imageUrl':
    case 'small':
    case 'medium':
    case 'large':
    case 'extraLarge':
      return `${baseThClasses} text-center`;
    default:
      return `${baseThClasses} text-left rtl:text-right`;
  }
};


const getColumnClasses = (key: string): string => {
  const baseTdClasses = 'px-4 py-4 text-sm align-top';

  switch (key) {
    case 'imageUrl':
      return `${baseTdClasses} w-28`;
    case 'typeColor':
      return `${baseTdClasses} font-semibold text-amber-900`;
    case 'description':
      return `${baseTdClasses} text-stone-600`;
    case 'inclusion':
      return `${baseTdClasses} text-stone-600`;
    case 'small':
    case 'medium':
    case 'large':
    case 'extraLarge':
      return `${baseTdClasses} text-stone-700 font-medium text-center whitespace-nowrap`;
    case 'notes':
      return `${baseTdClasses} text-stone-600`;
    default:
      return `${baseTdClasses} text-stone-600`;
  }
};

const PriceTable: React.FC<PriceTableProps> = ({ data, headers }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-x-auto border border-amber-200/50">
      <table className="w-full border-collapse">
        <thead className="bg-amber-800">
          <tr>
            {headers.map((header) => (
              <th
                key={header.key}
                scope="col"
                className={getHeaderClasses(header.key)}
              >
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-amber-100">
          {data.map((item) => (
            <tr key={item.typeColor} className="transition-colors duration-200 odd:bg-amber-50/50 even:bg-white hover:bg-amber-100/60">
              {headers.map((header) => (
                <td key={header.key} className={getColumnClasses(header.key)}>
                  {header.key === 'imageUrl' && item.imageUrl ? (
                    <div className="w-24 h-24 mx-auto bg-stone-100/50 rounded-lg flex items-center justify-center p-1 shadow-md border border-amber-100">
                      <img
                        src={item.imageUrl}
                        alt={item.typeColor}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    item[header.key as keyof AmberPrice]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
