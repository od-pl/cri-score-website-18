
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Download, X, Loader2 } from "lucide-react";

interface PlatReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlatReportModal = ({ isOpen, onClose }: PlatReportModalProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate PDF generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create download link for the sample report
    const link = document.createElement('a');
    link.href = '/lovable-uploads/e266738e-a1af-4058-8336-8fc95144ec1a.png';
    link.download = 'Priya-Sharma-CRI-Report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsDownloading(false);
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
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Download PDF Report
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatReportModal;
