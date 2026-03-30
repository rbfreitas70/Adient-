import React from 'react';
import Barcode from 'react-barcode';

interface LabelProps {
  quantity: string;
  date: string;
  idNumber: string;
  partNumber1?: string;
  partNumber2?: string;
  description?: string;
}

export const Label: React.FC<LabelProps> = ({
  quantity,
  date,
  idNumber,
  partNumber1 = '5848095',
  partNumber2 = '406641',
  description = 'Etiqueta Ret\n29x38 Left',
}) => {
  return (
    <div className="w-[101mm] h-[67mm] border-[2px] border-black box-border flex flex-col bg-white text-black font-sans overflow-hidden relative">
      {/* Row 1 */}
      <div className="h-[17mm] flex border-b-[2px] border-black">
        <div className="w-[67mm] border-r-[2px] border-black flex flex-col items-center justify-end pb-0.5 relative">
          <span className="absolute top-0.5 left-1 text-[6px] font-bold">(P) Part No.</span>
          <div className="text-[36px] font-normal leading-none tracking-widest mb-0.5">{partNumber1}</div>
          <div className="h-[8mm] w-full flex justify-center overflow-hidden">
            <Barcode value={partNumber1 || '0'} format="CODE128" displayValue={false} height={30} width={1.8} margin={0} background="transparent" />
          </div>
        </div>
        <div className="w-[34mm] relative">
          {/* Empty right column */}
        </div>
      </div>

      {/* Row 2 */}
      <div className="h-[17mm] flex border-b-[2px] border-black">
        <div className="w-[34mm] border-r-[2px] border-black flex flex-col items-center justify-end pb-0.5 relative">
          <span className="absolute top-0.5 left-1 text-[6px] font-bold">(Q) Quantity</span>
          <div className="text-[36px] font-normal leading-none tracking-widest mb-0.5">{quantity}</div>
          <div className="h-[8mm] w-full flex justify-center overflow-hidden">
            <Barcode value={quantity || '0'} format="CODE128" displayValue={false} height={30} width={1.5} margin={0} background="transparent" />
          </div>
        </div>
        <div className="w-[67mm] flex flex-col justify-center relative pl-3">
          <span className="absolute top-0.5 left-1 text-[6px] font-bold">Description</span>
          <div className="text-[26px] font-bold leading-[1.1] whitespace-pre-line mt-2">
            {description}
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="h-[17mm] flex border-b-[2px] border-black">
        <div className="w-[48mm] border-r-[2px] border-black flex flex-col items-center justify-end pb-0.5 relative">
          <span className="absolute top-0.5 left-1 text-[6px] font-bold">(V) Supplier</span>
          <div className="text-[36px] font-normal leading-none tracking-widest mb-0.5">{partNumber2}</div>
          <div className="h-[8mm] w-full flex justify-center overflow-hidden">
            <Barcode value={partNumber2 || '0'} format="CODE128" displayValue={false} height={30} width={1.5} margin={0} background="transparent" />
          </div>
        </div>
        <div className="w-[53mm] flex">
          <div className="w-[20mm] border-r-[2px] border-black flex flex-col">
            <div className="h-1/2 border-b-[2px] border-black flex items-center justify-center relative">
              <span className="absolute top-0.5 left-1 text-[5px] font-bold">Mfg. Date</span>
              <span className="text-[11px] font-bold mt-2">{date}</span>
            </div>
            <div className="h-1/2 flex items-center justify-center relative">
              <span className="absolute top-0.5 left-1 text-[5px] font-bold">Country of Origin</span>
              <span className="text-[14px] font-bold mt-2">BR</span>
            </div>
          </div>
          <div className="w-[33mm] p-1 relative flex flex-col justify-center">
            <span className="absolute top-0.5 left-1 text-[5px] font-bold">Ship To</span>
            <div className="text-[8.5px] leading-[1.15] mt-2 ml-1">
              Adient do Brasil Ltda.<br />
              Av. dos Alecrins, 999<br />
              Dist. Industrial - Pouso Alegre<br />
              37550-000 - MG - Brazil
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="h-[17mm] flex">
        <div className="w-[48mm] border-r-[2px] border-black relative">
          <span className="absolute top-0.5 left-1 text-[6px] font-bold">(S) Serial</span>
        </div>
        <div className="w-[53mm] flex">
          <div className="w-[20mm] border-r-[2px] border-black flex flex-col">
            <div className="h-1/2 border-b-[2px] border-black flex items-center justify-center relative">
              <span className="absolute top-0.5 left-1 text-[5px] font-bold">Batch / Lot</span>
              <span className="text-[14px] font-bold mt-2">{idNumber}</span>
            </div>
            <div className="h-1/2 flex items-center justify-center relative">
              <span className="absolute top-0.5 left-1 text-[5px] font-bold">Eng. Level</span>
              <span className="text-[14px] font-bold mt-2">0</span>
            </div>
          </div>
          <div className="w-[33mm] p-1 relative flex flex-col justify-center">
            <span className="absolute top-0.5 left-1 text-[5px] font-bold">Ship From</span>
            <div className="text-[8.5px] leading-[1.15] mt-2 ml-1">
              Braffix Transfers C. Sorocaba<br />
              Av. Independência, 1445<br />
              Iporanga - Sorocaba<br />
              18087-101 - SP - Brazil
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
