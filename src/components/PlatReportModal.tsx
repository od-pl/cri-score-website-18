import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, X } from "lucide-react";

interface PlatReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewReport?: () => void;
}

const PlatReportModal = ({ isOpen, onClose, onViewReport }: PlatReportModalProps) => {
  const handleViewReport = () => {
    onClose(); // Close this modal first
    if (onViewReport) {
      onViewReport(); // Open the report modal
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            PLAT Career Readiness Report
          </DialogTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="bg-white rounded-lg border">
            <img 
              src="/lovable-uploads/e266738e-a1af-4058-8336-8fc95144ec1a.png" 
              alt="PLAT Career Readiness Report - Priya Sharma"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="flex justify-center pt-4 border-t">
          <Button 
            onClick={handleViewReport}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
          >
            <Download className="w-4 h-4 mr-2" />
            View Report
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatReportModal;
