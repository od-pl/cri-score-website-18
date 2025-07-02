import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface ReportViewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportViewModal = ({ isOpen, onClose }: ReportViewModalProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[100vw] sm:max-w-[95vw] max-h-[95vh] w-full h-auto overflow-hidden p-1 sm:p-4">
        <DialogHeader className="p-2 sm:p-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            PLAT Career Readiness Report
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-auto p-0 sm:p-4 pt-0 flex justify-center items-center" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="bg-white rounded-lg flex justify-center w-full">
            <img 
              src="/lovable-uploads/43a1e86e-242e-4145-b2a0-5200d685ffa4.png" 
              alt="PLAT Career Readiness Report"
              className={`w-full h-auto object-contain transition-opacity duration-200 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ maxHeight: 'calc(95vh - 60px)', touchAction: 'pan-x pan-y pinch-zoom', userSelect: 'none' }}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportViewModal; 