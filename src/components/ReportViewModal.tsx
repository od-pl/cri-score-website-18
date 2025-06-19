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
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto overflow-hidden p-0">
        <DialogHeader className="p-4">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            PLAT Career Readiness Report
          </DialogTitle>
        </DialogHeader>
        
        <div className="overflow-auto p-4 pt-0">
          <div className="bg-white rounded-lg flex justify-center">
            <img 
              src="/lovable-uploads/43a1e86e-242e-4145-b2a0-5200d685ffa4.png" 
              alt="PLAT Career Readiness Report"
              className={`w-auto h-auto object-contain transition-opacity duration-200 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ maxHeight: 'calc(95vh - 120px)' }} // Account for header and padding
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportViewModal; 