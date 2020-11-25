const { default: RectangleCard } = require("../cards/reactangleCard")

function WebDevelopment(){
    return(
        <>
        <h2 className="text-center py-5 font-weight-bold">Web Development</h2>
        <h3>Free</h3>
        <div className="grid-2">
          <RectangleCard
            leftLink="https://www.theodinproject.com/"
            name="The Odin Project"
          />
          <RectangleCard
            leftLink="https://developer.mozilla.org/en-US/docs/Learn"
            name="Learn Web Development by MDN"
          />
          <RectangleCard
            leftLink="https://www.w3schools.com/"
            name="W3 Schools"
          />
        </div>
        <h3>Paid</h3>
        <div className="grid-2">
          <RectangleCard
            leftLink="https://www.udemy.com/course/the-complete-web-development-bootcamp"
            name="The Complete 2020 Web Development Bootcamp by Angela Yu"
          />
          <RectangleCard
            leftLink="https://www.udemy.com/course/the-web-developer-bootcamp/"
            name="The Web Developer Bootcamp 2020 by Colt Steele"
          />
        </div>
        </>
    )
}

export default WebDevelopment;