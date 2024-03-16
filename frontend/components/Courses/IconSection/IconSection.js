import { useState } from 'react';
const IconSection = ({ title, text, text1, icon, courseConClass, iconBodyClass, iconsClass, titleClass, textClass }) => {

  const [showText, setShowText] = useState(false);

  return ( 
    <div className={`courseCon ${courseConClass}`}>
      <div className={`iconBody ${iconBodyClass} flex justify-center`}>
        <article className="flex justify-center items-center flex-col ">
          <div className={`icons ${iconsClass}`}>{icon}</div> 
          <span className={`block ${titleClass}`}>{title}</span>
          <h5 className={`text-sm ${textClass}`}>{text}</h5>
          <h5 className={`text-sm ${textClass}`}>{text1}</h5>
        </article>
      </div>
    </div>
   );
}
 
export default IconSection;


