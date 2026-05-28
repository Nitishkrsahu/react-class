import Header from "./component/header"
import { Footer } from "./component/footer"
import { Home } from "./component/home"
import { OneWay } from "./component/binding/one-way"
import Number from "./component/binding/number"
import CssBinding from "./component/binding/CssBinding"
import Boolean from "./component/binding/boolean"
import Nulltype from "./component/binding/Nulltype"
import Undefined from "./component/binding/Undefined"
import Object from "./component/object-Ajax/object"
import Ajax from "./component/object-Ajax/ajax"

function App(){
  return(
    <div>
      <Ajax></Ajax>
    </div>
  )
}
export default App