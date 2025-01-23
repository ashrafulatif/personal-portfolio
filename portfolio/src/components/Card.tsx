import { FaFolder, FaGithub } from "react-icons/fa";

interface CardProps {
  title: string;
  img: string;
  link: string;
  description: string;
  skills: string[];
}

const Card = ({ title, link, description, skills }: CardProps) => {
  return (
    <div
      className="card bg-cardColor sm:w-96 hover:scale-[1.02] transition-transform duration-500 p-5 relative"
      data-aos="fade-up" data-aos-duration="800"
    >
      {/* Card Header with Icons */}
      <div className="flex justify-between items-center">
        <FaFolder className="text-primaryColor text-2xl" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primaryColor text-2xl"
        >
          <FaGithub />
        </a>
      </div>

      {/* Card Content */}
      <div className="card-body">
        <h2 className="card-title text-textSecondary text-lg font-bold mb-2">
          {title}
        </h2>
        <p className="text-textPrimary text-xs text-justify mb-4">
          {description}
        </p>
        <div className="card-actions flex flex-wrap ">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="badge badge-outline text-primaryColor text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
