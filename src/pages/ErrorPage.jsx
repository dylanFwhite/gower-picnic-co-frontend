// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function ErrorPage() {
  // const history = useHistory();

  const handleGoHome = () => {
    // history.push("/");
  };

  return (
    <div className="flex flex-col items-center w-full justify-center min-h-screen bg-gray-100 text-center">
      <h1
        className="text-9xl font-semibold  mb-2 tracking-wider uppercase"
        style={{
          fontFamily: "Roboto",
          color: "#686262",
        }}
      >
        404
      </h1>
      <p
        className="mt-4 text-lg text-gray-600 mb-8"
        style={{
          fontFamily: "Roboto",
          color: "#686262",
        }}
      >
        This is not the page you&apos;re looking for
      </p>
      <Link to="/">
        <button
          onClick={handleGoHome}
          className="rounded h-8 w-48 bg-sandal-yellow hover:bg-amber-200"
        >
          <span
            style={{ fontFamily: "Roboto" }}
            className="text-white font-light text-md"
          >
            Take me home
          </span>
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
