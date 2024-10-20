import { SocialIcon } from "react-social-icons/component";
import my_img1 from "../../../public/img/caglarcakmak.jpeg";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/whatsapp";
import "react-social-icons/mailto";
import "react-social-icons/instagram";

function About() {
  return (
    <div className=" text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-16 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              content="Learn more about Caglar CAKMAK, an AI developer graduated from EGE UNIVERSITY passionate for software development, machine learning, and computer vision ."

              style={{
                backgroundImage: `url(${my_img1})`,
              }}
            ></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Çağlar ÇAKMAK</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>{" "}
              AI Developer
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-green-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>{" "}
              Izmir, Turkey
            </p>
            <p className="pt-8 text-sm">
              Successfully graduated from the Computer Programming Department at
              Ege University. I am a passionate and innovative Software
              Developer with a strong background in developing and deploying
              desktop applications and AI models for real-world applications. My
              expertise spans machine learning, deep learning, and computer
              vision. I am proficient in Python, C#, and SQL, with experience in
              integrating AI models into web and mobile applications. I excel at
              transforming raw data into actionable insights and am motivated to
              leverage my technical skills and AI knowledge to create advanced
              AI-driven solutions for complex business challenges.
            </p>

            <div className="justify-evenly mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap ">
              <SocialIcon
                bgColor="#232121"
                href="https://github.com/Caglarcakmak0"
                url="www.github.com"
              />
              <SocialIcon
                bgColor="#232121"
                href="mailto:caglarcakmak0@icloud.com"
                url="www.mailto.com"
              />
              <SocialIcon
                bgColor="#232121"
                href="https://wa.me/5436771863"
                url="www.whatsapp.com"
              />
              <SocialIcon
                bgColor="#232121"
                href="https://www.instagram.com/caglarcakmak0/"
                url="www.instagram.com"
              />
              <SocialIcon
                bgColor="#232121"
                href="https://www.linkedin.com/in/caglarcakmak0/"
                url="www.linkedin.com"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src={my_img1}
            className="rounded-none lg:rounded-e-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
