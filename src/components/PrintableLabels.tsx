import React, { forwardRef } from 'react';
import { Label } from './Label';

interface PrintableLabelsProps {
  labels: {
    quantity: string;
    date: string;
    idNumber: string;
    description: string;
  }[];
}

export const PrintableLabels = forwardRef<HTMLDivElement, PrintableLabelsProps>(
  ({ labels }, ref) => {
    return (
      <div ref={ref} className="print-container bg-white">
        <style type="text/css" media="print">
          {`
            @page { size: A4; margin: 0; }
            body { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .print-container {
              width: 210mm;
              height: 297mm;
              display: flex;
              align-items: center;
              justify-content: center;
              background: white;
            }
            .labels-grid {
              display: grid;
              grid-template-columns: repeat(2, 101mm);
              grid-template-rows: repeat(3, 67mm);
              gap: 2mm;
            }
          `}
        </style>
        <div className="labels-grid">
          {labels.map((label, index) => (
            <Label
              key={index}
              quantity={label.quantity}
              date={label.date}
              idNumber={label.idNumber}
              description={label.description}
            />
          ))}
        </div>
      </div>
    );
  }
);

PrintableLabels.displayName = 'PrintableLabels';
