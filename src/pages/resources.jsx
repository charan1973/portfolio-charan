import FullStack from "../components/resources/mernandfullstack";
import ReactSource from "../components/resources/reactsource";
import WebDevelopment from "../components/resources/webdevelopment";

function Resources() {
  document.title = "Resources";
  return (
    <div className="container">
      <main>
        <WebDevelopment />
        <ReactSource />
        <FullStack />
        <p className="text-muted text-center">These are the resource I used and found best to learn from.</p>
      </main>
    </div>
  );
}

export default Resources;
