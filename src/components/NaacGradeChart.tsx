
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const NaacGradeChart = () => {
  const beforeGrade = 2.8;
  const afterGrade = 4.1;
  const maxGrade = 5.0;

  // Calculate percentages for progress bars
  const beforePercentage = (beforeGrade / maxGrade) * 100;
  const afterPercentage = (afterGrade / maxGrade) * 100;

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-none shadow-lg">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            NAAC Grade Improvement
          </h3>
          <p className="text-gray-600">
            Real impact on institutional accreditation scores
          </p>
        </div>

        <div className="space-y-8">
          {/* Before PLAT */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">
                Before PLAT
              </span>
              <span className="text-2xl font-bold text-red-600">
                {beforeGrade}
              </span>
            </div>
            <div className="relative">
              <Progress 
                value={beforePercentage} 
                className="h-4 bg-gray-200"
              />
              <style jsx>{`
                .bg-primary { background-color: #ef4444 !important; }
              `}</style>
            </div>
          </div>

          {/* After PLAT */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">
                After PLAT
              </span>
              <span className="text-2xl font-bold text-green-600">
                {afterGrade}
              </span>
            </div>
            <div className="relative">
              <Progress 
                value={afterPercentage} 
                className="h-4 bg-gray-200"
              />
            </div>
          </div>

          {/* Improvement indicator */}
          <div className="text-center pt-4 border-t border-gray-200">
            <div className="inline-flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-lg font-semibold text-green-600">
                +{(afterGrade - beforeGrade).toFixed(1)} Grade Improvement
              </span>
            </div>
          </div>
        </div>

        {/* Grade scale reference */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Poor (0.0)</span>
            <span>Average (2.5)</span>
            <span>Good (3.5)</span>
            <span>Excellent (5.0)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NaacGradeChart;
