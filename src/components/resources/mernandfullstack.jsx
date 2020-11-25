import RectangleCard from "../cards/reactangleCard";

function FullStack() {
  return (
    <>
      <>
        <h2 className="text-center py-5 font-weight-bold">Full Stack MERN</h2>
        <div className="grid-2">
          <RectangleCard
            leftLink="https://courses.learncodeonline.in/learn/Full-Stack-MERN-Bootcamp"
            name="Full Stack MERN Bootcamp"
          />
        </div>
      </>
      <>
        <h2 className="text-center py-5 font-weight-bold">Full Guide</h2>
        <div className="grid-2">
          <RectangleCard
            leftLink="https://andreasbm.github.io/web-skills/"
            name="Web skills by andreasbm(github)"
          />
        </div>
      </>
    </>
  );
}

export default FullStack;
