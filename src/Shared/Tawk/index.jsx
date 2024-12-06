import React, { useEffect } from 'react';
import './Tawk.css'; // Assuming you have your custom CSS file
import { WhatsAppOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const TawkTo = () => {
  useEffect(() => {
    // Dynamically insert Tawk.to script when component mounts
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    
    script.src ='https://embed.tawk.to/66e704c2ea492f34bc1418f6/1i7r6l6me';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    const scriptElement = document.getElementsByTagName('script')[0];
    scriptElement.parentNode.insertBefore(script, scriptElement);

    return () => {
      // Clean up the script when the component unmounts
      if (scriptElement) {
        scriptElement.parentNode.removeChild(script);
      }
    };
  }, []);
  
  return <div></div>;
  // const display=(
  //   <>
  //     <Link to="https://wa.link/bvb99t" target='_blank'><WhatsAppOutlined className='iconWhatsapp'/></Link>
  //   </>
  // )
  // return display;

};

export default TawkTo;
