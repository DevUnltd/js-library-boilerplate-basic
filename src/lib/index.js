import "./index.css";

class MyLibrary {
  constructor() {
    console.log("Library constructor loaded");
  }

  myMethod = () => {
    console.log("Library method fired");
  };
}

export default MyLibrary;
