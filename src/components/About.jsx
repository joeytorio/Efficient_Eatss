import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Work = () => {
  const work = [
    {
      projectName: "Table Manners",
      description:
        "Table manners centuries to make the practice of eating. Table manners have evolved over centuries to make the practice of eating with others pleasant and sociable. With so many table manners to keep track, keep these basic, but oh-so-important, table manners in mind as you eat:",
      sourceCode: "https://github.com/",
      gifSrc: "https://i.pinimg.com/originals/0f/19/a7/0f19a75bfd0c32792705e09d6064eddf.gif",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/i/flow/login",
      githubColor: "#24292e",
      instagramColor: "#E1306C",
      facebookColor: "#1877F2",
      twitterColor: "#1DA1F2",
      readMoreLink: "https://emilypost.com/advice/top-10-must-know-table-manners",
    },
    {
      projectName: "Table Setting",
      description:
        "Appropriate Table Setting shows formality and cleanliness. Setting a table properly has always been important. It shows guests that they are welcome, and it also sets the tone, of formality while eating, which ensures that people get along, dine in comfort, and enjoy a convivial experience.",
      sourceCode: "https://github.com/",
      gifSrc: "https://i.pinimg.com/originals/3a/7b/f8/3a7bf8167ed634c105e2f15591c11e26.gif",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/i/flow/login",
      githubColor: "#24292e",
      instagramColor: "#E1306C",
      facebookColor: "#1877F2",
      twitterColor: "#1DA1F2",
      readMoreLink: "https://www.finedininglovers.com/article/table-settings-rules-guide",
    },
    {
      projectName: "Proper Dining Etiquette",
      description:
        "Proper etiquette is essential for making a favorable impression at both lunch/dinner interviews as well as in social business situations. Although common sense is often your best guide, the following suggestions will help you stand out as a polished professional.",
      sourceCode: "https://github.com/",
      gifSrc: "https://i.pinimg.com/originals/1d/20/30/1d2030c58285f117355d7c627f6514da.gif",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/i/flow/login",
      githubColor: "#24292e",
      instagramColor: "#E1306C",
      facebookColor: "#1877F2",
      twitterColor: "#1DA1F2",
      readMoreLink: "https://www.kent.edu/career/dining-etiquette",
    },
    {
      projectName: "Do's and Don'ts of Dining",
      description:
        "Every diner needs to know the do's and don'ts of restaurant dining. I think the experience of eating out should be good not just for the patrons, but also for the waitstaff.",
      sourceCode: "https://github.com/",
      gifSrc: "https://i.pinimg.com/originals/4c/74/07/4c74071b569f20bbc8828536d495c5f1.gif",
      instagram: "https://www.instagram.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/i/flow/login",
      githubColor: "#24292e",
      instagramColor: "#E1306C",
      facebookColor: "#1877F2",
      twitterColor: "#1DA1F2",
      readMoreLink: "https://lifestyle.allwomenstalk.com/dos-and-donts-of-restaurant-dining/",
    },
  ];

  const fadeInOutVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      id="work"
      className="overflow-hidden transition ease-in-out w-full max-h-fit flex justify-center bg-white dark:bg-[#242424] dark:text-white"
      initial="hidden"
      animate="visible"
      variants={fadeInOutVariants}
    >
      <div className="flex flex-col p-6 gap-6 justify-center items-center text-center">
        <div className="text-center text-white-600 darkshadow:text-white-300 mx-auto mt-10 mb-16">
          <h1 className="text-4xl font-semibold mb-4">Tables Etiquette and Guides</h1>
          <p>Table etiquette and guidelines are important because they promote respect, professionalism, hygiene,</p>
          <p>and effective communication while enhancing personal growth and social interactions.</p>
          <p>They are essential for navigating various social and professional settings with poise and confidence.</p>
        </div>
        <div className="flex flex-col items-center gap-10">
          {work.map(
            (
              {
                projectName,
                description,
                sourceCode,
                gifSrc,
                instagram,
                facebook,
                twitter,
                githubColor,
                instagramColor,
                facebookColor,
                twitterColor,
                readMoreLink,
              },
              index
            ) => {
              return (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-md flex flex-col lg:flex-row text-center lg:text-start items-center gap-3 shadow-md hover:shadow-lg transition ease-in-out duration-300 shadow-gray-300 dark:shadow-blue-500"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInOutVariants}
                >
                  <div className="w-full md:max-w-2xl">
                    <a href={readMoreLink} target="_blank">
                      <motion.img
                        src={gifSrc}
                        alt="/"
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                      />
                    </a>
                  </div>
                  <div className="flex flex-col w-full md:max-w-md gap-6 overflow-hidden p-2">
                    <h6 className="text-blue-500 font-semibold text-2xl">
                      {projectName}
                    </h6>
                    <p className="text-gray-600 text-lg dark:text-gray-300">
                      {description}
                    </p>
                    <div className="box mt-4">
                      <a
                        href={readMoreLink}
                        target="_blank"
                        className="read-more-link bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition ease-in-out duration-300"
                      >
                        Read More!
                      </a>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center lg:justify-start mt-4">
                      <a href={sourceCode} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="github-icon"
                          style={{ color: githubColor }}
                        >
                          <BiLogoGithub size={30} />
                        </motion.div>
                      </a>
                      <a href={instagram} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="instagram-icon"
                          style={{ color: instagramColor }}
                        >
                          <FaInstagram size={30} />
                        </motion.div>
                      </a>
                      <a href={facebook} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="facebook-icon"
                          style={{ color: facebookColor }}
                        >
                          <FaFacebook size={30} />
                        </motion.div>
                      </a>
                      <a href={twitter} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="twitter-icon"
                          style={{ color: twitterColor }}
                        >
                          <FaTwitter size={30} />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
 