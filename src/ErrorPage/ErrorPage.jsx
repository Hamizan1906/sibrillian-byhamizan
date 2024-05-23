import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="ErrorPage">
      <h1>Waduh!</h1>
      <p>Kayaknya ada yang salah nih..</p>
      <Link to="/">Balik aja yuk</Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
