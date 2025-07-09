import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Calendar, X } from "lucide-react";
import ReportViewModal from "@/components/ReportViewModal";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);

  // if (!isVisible) return null;

  // return (
  //   <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2">
  //     <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm">
  //       <div className="flex justify-between items-start mb-3">
  //         <h3 className="font-semibold text-gray-800">Ready to boost placements?</h3>
  //         <Button
  //           variant="ghost"
  //           size="sm"
  //           onClick={() => setIsVisible(false)}
  //           className="h-6 w-6 p-0"
  //         >
  //           <X className="w-4 h-4" />
  //         </Button>
  //       </div>
  //       <p className="text-sm text-gray-600 mb-4">
  //         See how PLAT can increase your placement rates by 18%
  //       </p>
  //       <div className="flex space-x-2">
  //         <Button 
  //           size="sm" 
  //           className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
  //           onClick={() => window.location.href = '/contact#send-message'}
  //         >
  //           <Calendar className="w-4 h-4 mr-1" />
  //           Book Demo
  //         </Button>
  //         <Button 
  //           variant="outline" 
  //           size="sm"
  //           onClick={() => setShowReportModal(true)}
  //         >
  //           <Download className="w-4 h-4 mr-1" />
  //           Report
  //         </Button>
  //       </div>
  //     </div>
  //     
  //     <ReportViewModal
  //       isOpen={showReportModal}
  //       onClose={() => setShowReportModal(false)}
  //     />
  //   </div>
  // );
  return null;
};

export default FloatingCTA;
