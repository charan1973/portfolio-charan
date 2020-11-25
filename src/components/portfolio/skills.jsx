const { default: Card } = require("../cards/card");


function Skills() {
  return (
    <>
      <h2 className="text-center py-5">Skills</h2>
      <div id="skills">
        <Card
          link="https://reactjs.org/"
          name="React"
          className="fa-react fa-7x"
        />
        <Card
          link="https://developer.mozilla.org/en-US/docs/Web/HTML"
          name="HTML"
          className="fa-html5 fa-7x"
        />
        <Card
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          name="Javascript"
          className="fa-js-square fa-7x"
        />
        <Card
          link="https://nodejs.org/en/"
          name="Node"
          className="fa-node fa-7x"
        />
        <Card
          link="https://getbootstrap.com/"
          name="Bootstrap"
          className="fa-bootstrap fa-7x"
        />
        <Card
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
          name="CSS"
          className="fa-css3-alt fa-7x"
        />
      </div>
    </>
  );
}

export default Skills;