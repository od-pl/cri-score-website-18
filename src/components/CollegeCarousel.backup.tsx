import { motion } from "framer-motion";

const CollegeCarousel = () => {
  const colleges = [
    { name: "SNDT University", logo: "/lovable-uploads/9cf00424-f8f4-4667-a9c7-d497002247b7.png" },
    { name: "Somaiya VidyaVihar University", logo: "/lovable-uploads/c160f5af-e32f-4e0f-ba4e-60d243038ddb.png" },
    { name: "HSNC", logo: "/lovable-uploads/2d1d7361-b7f9-4197-a6b1-1eab125e093b.png" },
    { name: "JBIMS", logo: "/lovable-uploads/8b4f03fb-6be1-4f08-be07-463b3e918634.png" },
    { name: "St. Xavier's", logo: "/lovable-uploads/654a569e-f847-4312-9c16-a4c9ee9ae604.png" },
    { name: "Bhavans", logo: "/lovable-uploads/bbf7ce0d-ae36-4cd0-8e93-c86ef72f367a.png" },
    { name: "KJ Somaiya Science and Commerce", logo: "/lovable-uploads/c160f5af-e32f-4e0f-ba4e-60d243038ddb.png" },
    { name: "SIES", logo: "/lovable-uploads/130e619f-7a64-4f1d-8a21-8a2b557c05a3.png" },
    { name: "Ruia", logo: "/lovable-uploads/42b1b0fa-e77f-4826-a701-5cce9896cef6.png" },
    { name: "R A Podar", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center" }
  ];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-8"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate the array for seamless loop */}
        {[...colleges, ...colleges].map((college, index) => (
          <div key={index} className="flex-shrink-0 w-48">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/90 transition-colors">
              <img 
                src={college.logo} 
                alt={college.name}
                className="w-16 h-16 mx-auto mb-4 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center";
                }}
              />
              <div className="font-semibold text-sm text-gray-800">{college.name}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CollegeCarousel; 