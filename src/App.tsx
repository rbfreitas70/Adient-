import React, { useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Printer, FileText, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';
import { Label } from './components/Label';
import { PrintableLabels } from './components/PrintableLabels';

export default function App() {
  const [quantity, setQuantity] = useState('500');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [idNumber, setIdNumber] = useState('74258');
  const [description, setDescription] = useState('Etiqueta Ret\n29x38 Left');
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    setIsIframe(window !== window.parent);
  }, []);

  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Etiquetas',
  });

  // Generate 6 identical labels for the print view
  const labelsToPrint = Array(6).fill({
    quantity,
    date,
    idNumber,
    description,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Gerador de Etiquetas</h1>
        </div>

        {isIframe && (
          <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-yellow-800">Atenção: Impressão bloqueada na visualização</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Como você está visualizando o aplicativo dentro do editor, o navegador bloqueia a janela de impressão. 
                Para imprimir, clique no botão de <strong>abrir em nova aba</strong> no canto superior direito da tela.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Dados da Etiqueta</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantidade
                </label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Ex: 500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data (Padrão Americano)
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="YYYY-MM-DD"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número ID (Batch/Lot)
                </label>
                <input
                  type="text"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="Ex: 74258"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                  placeholder="Etiqueta Ret..."
                />
              </div>
            </div>

            <button
              onClick={() => handlePrint()}
              className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Printer className="w-5 h-5" />
              Imprimir 6 Etiquetas (A4)
            </button>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-2 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-6 text-gray-700 self-start">Pré-visualização</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 overflow-auto max-w-full flex justify-center items-center">
              <Label
                quantity={quantity}
                date={date}
                idNumber={idNumber}
                description={description}
              />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              A impressão irá gerar uma folha A4 contendo 6 cópias desta etiqueta.
            </p>
          </div>
        </div>
      </div>

      {/* Hidden Print Container */}
      <div className="absolute opacity-0 pointer-events-none" style={{ top: '-10000px', left: '-10000px' }}>
        <PrintableLabels ref={printRef} labels={labelsToPrint} />
      </div>
    </div>
  );
}
