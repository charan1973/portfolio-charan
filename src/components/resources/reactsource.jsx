const { default: RectangleCard } = require("../cards/reactangleCard");

function ReactSource() {
  return (
    <>
      <h2 className="text-center py-5 font-weight-bold">React</h2>
      <div className="grid-2">
        <div>
          <h3 className="text-center">Docs</h3>
          <RectangleCard
            leftLink="https://reactjs.org/docs/getting-started.html"
            name="React Docs"
          />
        </div>
        <div>
          <h3 className="text-center">Paid Book</h3>
          <RectangleCard
            leftLink="https://daveceddia.com/pure-react/"
            name="Pure React by Dave Ceddia"
          />
        </div>
        <div>
          <h3 className="text-center">Paid course</h3>
          <RectangleCard
            leftLink="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"
            name="Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)"
          />
        </div>
      </div>
    </>
  );
}

export default ReactSource;