import Card from "../cards/card";

function Social() {
  return (
    <>
      <h2 className="text-center py-5">Social</h2>
      <div id="social">
        <Card
          link="https://github.com/charan1973"
          name="Github"
          className="fa-github fa-9x"
        />
        <Card
          link="https://www.linkedin.com/in/charan-vasu-4524aa164/"
          name="Linkedin"
          className="fa-linkedin fa-9x"
        />
      </div>
    </>
  );
}

export default Social;
