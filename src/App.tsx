import { Root } from "./modules/router/components/Root";
import { Link } from "./modules/router/components/Link";
import { CustomNotFound } from "./pages/CustomNotFound";

function App() {
  return (
    <>
      <div
        style={{
          padding: 10,
          borderBottom: "1px solid #eee",
          display: "flex",
          gap: 10,
        }}
      >
        <Link name='home'>Go to Main</Link>
        <Link name='posts'>Go to Posts</Link>
      </div>
      <div style={{ padding: 10 }}>
        <Root notFound={<CustomNotFound />} />
      </div>
    </>
  );
}

export default App;
