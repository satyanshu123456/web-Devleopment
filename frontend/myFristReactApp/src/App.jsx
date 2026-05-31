import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="abcd">My first react app</div>
      <p className="bg-success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime natus,
        necessitatibus harum sequi velit id recusandae dolore quos iusto
        consequuntur.
      </p>

      <button>Submit</button>

      <Footer/>
    </>
  );
}

export default App;
