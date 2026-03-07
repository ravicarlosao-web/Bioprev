import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (location: string) => void;
}

const provinces = [
  "Luanda",
  "Huambo",
  "Benguela",
  "Kwanza-Norte",
  "Lubango"
];

export default function LocationsModal({ isOpen, onClose, onSelectLocation }: LocationsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-30 z-[200]"
            data-testid="modal-backdrop-locations"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
          >
            <div className="bg-white shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-auto" data-testid="modal-locations">
              {/* Header */}
              <div className="flex items-center justify-between p-8 pb-6">
                <h2 className="text-3xl font-light text-[#1a1a1a]" data-testid="text-locations-title">
                  Área de Atuação
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 flex-shrink-0"
                  data-testid="button-close-locations"
                >
                  <X className="w-8 h-8" strokeWidth={1.5} />
                </button>
              </div>

              {/* Decorative Wave */}
              <svg className="w-full h-8 -mb-1" viewBox="0 0 1440 60" preserveAspectRatio="none" data-testid="svg-wave">
                <path d="M0,30 Q360,0 720,30 T1440,30 L1440,60 L0,60 Z" fill="#e8e8e8" />
              </svg>

              {/* Content Area - Gray Background */}
              <div className="bg-[#e8e8e8] px-8 py-12" data-testid="content-locations">
                {/* Subtitle */}
                <h3 className="text-center text-gray-700 text-lg mb-12 font-light" data-testid="text-locations-subtitle">
                  Escolha sua província
                </h3>

                {/* Provinces in Single Column */}
                <div className="flex flex-col space-y-2 max-w-2xl mx-auto" data-testid="list-provinces">
                  {provinces.map((province, idx) => (
                    <motion.button
                      key={province}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => {
                        onSelectLocation(province);
                        onClose();
                      }}
                      className="text-left py-1 text-[#0077c0] font-normal hover:underline transition-colors text-base"
                      data-testid={`button-province-${province.toLowerCase().replace(/-/g, '-')}`}
                    >
                      {province}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
