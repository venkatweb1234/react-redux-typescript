
import "./App.scss";
import Header from "./components/Fixed-Header";
import { RoutingPaths } from "./components/Routing";
import { Title } from "./components/Title";
import {IMG} from './_Style/allStylescomp';


function App() {
  return (
    <div className="App" data-testid='CounterTypescript'>
     <Header />
     <Title />
      <RoutingPaths />
      <br />
      <IMG color='$width' src='https://image.exacttarget.com/lib/fe9412727565007a72/m/29/SpecialOffer_FOF_Desktop.jpg'></IMG>
    </div>
  );
}

export default App;
