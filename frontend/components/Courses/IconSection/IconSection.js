
import { useState } from 'react';

const IconSection = ({ title, text, text1, icon, courseConClass, iconBodyClass, iconsClass, titleClass, textClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`courseCon ${courseConClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`iconBody ${iconBodyClass} flex justify-center`}>
        <article className="flex justify-center items-center flex-col ">
          <div className={`icons ${iconsClass}`}>{icon}</div>
          <span className={`block ${titleClass}`}>{title}</span>
          <h5 className={`text-sm ${textClass} ${isHovered ? 'block' : 'hidden'} `}>{text}</h5>
          <h5 className={`text-sm ${textClass} ${isHovered ? 'hidden' : 'block'}`}>{text1}</h5>
        </article>
      </div>
    </div>
  );
};

export default IconSection;



