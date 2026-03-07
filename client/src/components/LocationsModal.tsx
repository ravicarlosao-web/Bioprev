import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (location: string) => void;
}

const angolProvinces = [
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
            className="fixed inset-0 bg-black bg-opacity-40 z-[200]"
            data-testid="modal-backdrop-locations"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto" data-testid="modal-locations">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
                <h2 className="text-2xl font-bold text-[#333333]" data-testid="text-locations-title">
                  Área de Atuação
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  data-testid="button-close-locations"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-center text-gray-600 text-lg mb-8" data-testid="text-locations-subtitle">
                    Escolha sua província
                  </h3>

                  {/* Provinces Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-testid="grid-provinces">
                    {angolProvinces.map((province, idx) => (
                      <motion.button
                        key={province}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => {
                          onSelectLocation(province);
                          onClose();
                        }}
                        className="p-4 text-left border border-gray-200 rounded-lg hover:border-[#e31818] hover:bg-red-50 transition-all duration-200 group cursor-pointer"
                        data-testid={`button-province-${province.toLowerCase().replace(/-/g, '-')}`}
                      >
                        <span className="text-gray-800 font-semibold group-hover:text-[#e31818] transition-colors">
                          {province}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
