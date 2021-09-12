import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    //Scroll event didnt work in touch screen for inner height element. so tried touch event. this didn't work
    // window.addEventListener('touchstart', handleTouchEnd);
    // window.addEventListener('touchmove', handleTouchEnd);
    // window.addEventListener('touchend', handleTouchEnd);
    // window.addEventListener('mousemove', handleTouchEnd);
    // window.addEventListener('mousedown', handleTouchEnd);
    // window.addEventListener('mouseup', handleTouchEnd);
    // window.addEventListener('click', handleTouchEnd);
   
    return () =>{ window.removeEventListener('scroll', handleScroll);
                   window.removeEventListener('resize', handleScroll);

            //       window.removeEventListener('touchstart', handleTouchEnd);
            //       window.removeEventListener('touchmove', handleTouchEnd);
            //       window.removeEventListener('touchend', handleTouchEnd);
            //       window.removeEventListener('mousemove', handleTouchEnd);  
            //       window.removeEventListener('mousedown', handleTouchEnd);  
            //       window.removeEventListener('mouseup', handleTouchEnd);  
            //       window.removeEventListener('click', handleTouchEnd);       
            }
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  function handleScroll() {
    if (document.documentElement.scrollHeight - Math.abs(document.documentElement.scrollTop) <  //Finally worked on all screen
        document.documentElement.clientHeight + 100) { 
          setIsFetching(true); 
    }
  //  else if (window.innerHeight + document.documentElement.scrollTop !==  //worked on desktop not on touch screen
  //    document.documentElement.offsetHeight || isFetching) return;
    //setIsFetching(true);
  }

  //For touch event, didnt work
  // const handleTouchEnd = () => {
  //   if (e.target.tagName !== "a") {
  //       e.preventDefault(); 
  //       handleScroll();
  //     }
  //      else {
  //        console.log("this makes me a click event, most likely")
  //      }
  // }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;