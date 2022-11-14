import TopBar from "../Components/TopBar";

import "../Styling/TopBar.css";
function ErrorPage() {
  return (
    <div>
      <TopBar />
      <p>
        Sorry but that page does not apear to exist (yet). Make sure to check if
        you spelled everything correctly
      </p>
    </div>
  );
}

export default ErrorPage;
