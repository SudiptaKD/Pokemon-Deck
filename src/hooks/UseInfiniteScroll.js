import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll)
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchEnd);
    return () =>{ window.removeEventListener('scroll', handleScroll);
                  window.removeEventListener('resize', handleScroll)
                  window.removeEventListener('touchend', handleTouchEnd)
                  window.removeEventListener('touchmove', handleTouchEnd)
            }
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  const handleTouchEnd = (e) => {
        e.preventDefault(); 
        handleScroll();
      
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;