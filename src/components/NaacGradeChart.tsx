
import { Card, CardContent } from "@/components/ui/card";

const NaacGradeChart = () => {
  const beforeGrade = "B+";
  const afterGrade = "A+";

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-lg">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            NAAC Grade Improvement
          </h3>
          <p className="text-gray-600">
            Real impact on institution's accreditation score
          </p>
        </div>

        <div className="flex justify-center items-end space-x-12 mb-6">
          {/* Before Bar */}
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col justify-end items-center">
              <div className="w-20 h-32 bg-gray-300 rounded-t-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">{beforeGrade}</span>
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-700 mt-2">Before</span>
          </div>

          {/* After Bar */}
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col justify-end items-center">
              <div className="w-20 h-48 bg-green-600 rounded-t-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">{afterGrade}</span>
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-700 mt-2">After</span>
          </div>
        </div>

        {/* Improvement indicator */}
        <div className="text-center pt-4 border-t border-gray-200">
          <div className="inline-flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-lg font-semibold text-green-600">
              Significant Grade Improvement
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NaacGradeChart;
