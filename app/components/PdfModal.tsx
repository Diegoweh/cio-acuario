'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export function PdfModal({ isOpen, onClose, pdfUrl, title }: PdfModalProps) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-6xl max-h-[90vh] m-4 bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-100 border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            {title || 'Documento PDF'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[calc(100%-64px)]">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={title || 'PDF Viewer'}
          />
        </div>
      </div>
    </div>
  );
}
