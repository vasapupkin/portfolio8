import { FaLocationArrow } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

interface ProjectModalProps {
  project: {
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
    stack: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#13162D] rounded-3xl p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
          <img src="/bg.png" alt="bgimg" className="absolute inset-0 w-full h-full object-cover" />
          <img src={project.img} alt="cover" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        </div>
        <p className="text-[#BEC1DD] mb-1 ">Projektbeschreibung:</p>
        <p className="text-[#BEC1DD] mb-4">{project.des}</p>
        <p className="text-[#BEC1DD] mb-1 ">Stack:</p>
        <div className="flex items-center justify-between">
        
        <p className="text-[#BEC1DD] mb-4 text-sm">{project.stack}</p>
          {/* <div className="flex items-center">
            {project.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt={`icon${index + 1}`} className="p-2" />
              </div>
            ))}
          </div> */}

        </div>
        {project.link !== '' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple hover:underline">
              Check Live Site
              <FaLocationArrow className="ml-2" />
            </a>
          )}
      </div>
    </div>
  );
};

export default ProjectModal;
