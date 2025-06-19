import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ReportViewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportViewModal = ({ isOpen, onClose }: ReportViewModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            PLAT Career Readiness Report
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-y-auto">
          <div className="bg-white rounded-lg border">
            <img 
              src="/lovable-uploads/43a1e86e-242e-4145-b2a0-5200d685ffa4.png" 
              alt="PLAT Career Readiness Report"
              className="w-full h-auto"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportViewModal; 