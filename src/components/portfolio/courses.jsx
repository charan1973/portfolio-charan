const { default: RectangleCard } = require("../cards/reactangleCard");

function Courses() {
  return (
    <>
      <h2 className="text-center py-5">Courses</h2>
      <div id="courses">
      <RectangleCard
        leftLink="https://www.udemy.com/course/the-complete-web-development-bootcamp"
        name="The Complete 2020 Web Development Bootcamp"
        rightLink="https://udemy-certificate.s3.amazonaws.com/image/UC-efc7f8af-0a84-491c-930f-402b16cbba22.jpg"
      />
       <RectangleCard
        leftLink="https://courses.learncodeonline.in/learn/Full-Stack-MERN-Bootcamp"
        name="Full Stack MERN Bootcamp"
        rightLink="https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/50332/2336950_50332.pdf?1593966369"
      />
       <RectangleCard
        leftLink="https://learnenglish.britishcouncil.org/skills/speaking/upper-intermediate-b2"
        name="Upper Intermediate English British Council"
        rightLink="https://drive.google.com/file/d/15_A-b1wo239XPZeni1Fsg4W3pkw8w7Xp/view"
      />
       <RectangleCard
        leftLink="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
        name="Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)"
      />
      </div>
    </>
  );
}

export default Courses;