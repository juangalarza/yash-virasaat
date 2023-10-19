import React , {useState , useEffect} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



const AboutUs = () => {
  const slides = [
    {
      url:'https://www.analyticsinsight.net/wp-content/uploads/2022/01/10-Ways-Computer-Vision-is-Used-in-Smart-Cities-in-2022.jpg',
    },
    {
      url:'https://s3.amazonaws.com/mobileappdaily/mad/uploads/mad_blog_5c838540d91f01552123200.png',
    },
    {
      url:'https://media.licdn.com/dms/image/C4E12AQG368-nqwZyFg/article-cover_image-shrink_720_1280/0/1645929172038?e=2147483647&v=beta&t=F7ufMKqzCXTILOvbz_QIbWJ-Tf0rtfb--_hOfA8Q0mU ',
    }
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Automatically move to the next slide
      nextSlide();
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [currentIndex]);


  return (
    <div className="relative xsm:top-[4rem] " id="about">

      <h1 className="absolute lg:top-[1em] font-bold text-[40px] lg:left-[50%] transform -translate-x-1/2 xsm:left-[50%] md:top-10 ">
        About US
      </h1>


      <div className=" w-[10rem] min-h-screen flex relative opacity-60 lg:top-[-17.5rem] lg:left-[45%] xsm:top-[-19em] xsm:left-[30%] xl:top-[-17em] md:top-[-17em] md:left-[40%]">
      <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="b"><stop offset="0%" stopColor="#ff7c00"/><stop offset="50%" stopColor="#e18fff"/><stop offset="100%" stopColor="#ff8fca"/></linearGradient><clipPath id="a"><path fill="currentColor" d="M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z"/></clipPath></defs><g clipPath="url(#a)">
        <path fill="url(#b)">
        <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="
        M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z;
        M785.5 625Q644 750 484.5 776t-213-125q-53.5-151-32-358t216-130q194.5 77 333 207t-3 255Z;
        M720 661q-34 161-195.5 119T218 619Q73 500 177 310t299.5-149.5Q672 201 713 350.5t7 310.5Z;
        M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z"></animate>


        </path>
        
        </g></svg>
      </div>



      <h2   className="absolute top-[8em] xl:left-[50%] lg:left-[25em] transform -translate-x-1/2 font-medium text-center text-gray-400 text-lg  w-1/3 xsm:w-2/3 md:left-[25rem] xsm:left-[10em] sm:left-[50%] ">
        Viraasat Technologies cutting edge solution provides client
        access to wide range from Computer Vision to Natural language
        processing.
      </h2>

      {/* Left Box */}
      <div className="absolute lg:left-[4em] lg:top-[15em] lg:w-[32em] lg:h-[26em] lg:text-lg bg-gray-100 text-black p-6 rounded-xl shadow-xl xsm:w-[22em] xsm:left-[2em] xsm:text-sm xsm:top-[23em] xl:left-20 md:w-5/6  md:left-[6em] sm:w-5/6 "> 
        <p className="tracking-wider"> 
          <span className="inline-block bg-white text-red-500 px-2 py-1 rounded-md">
            <span className="font-semibold italic text-[20px] text-gray-800 tracking-wider">
              &ldquo;Viraasat Technologies&rdquo;
            </span>
          </span>{" "}
          is a pioneering Research and Development company specializing in
          cutting-edge Artificial Intelligence and Deep Learning solutions. From
          Computer Vision to Natural Language Processing, we craft industry-leading
          products grounded in advanced research and concepts. Our offerings empower
          heavy-duty industries and organizations with seamless AI utilization.
          Additionally, we provide top-tier Web Development services, blending AI
          expertise to deliver comprehensive solutions that drive businesses to new
          heights. With a passion for innovation and unwavering dedication, we offer
          world-class solutions for a transformative future of technology. Partner
          with us to experience the power of intelligent innovation.
        </p>
      </div>
      {/* Right Box */}
      <div className="max-w-full lg:w-[400px]  lg:h-[400px] xl:w-[500px] xl:h-[500px] xsm:w-[300px] xsm:h-[300px] sm:w-[400px] sm:h-[400px] md:w-[400px] md:h-[400px] w-full m-auto py-16 px-4 relative lg:left-[30%] lg:top-[-28em] xsm:top-[8em] xl:top-[-30rem] md:left-[-1em] md:top-[-4em] sm:top-[-8rem]">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {/* Left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${
                slideIndex === currentIndex ? "text-blue-500" : "text-gray-400"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AboutUs;


