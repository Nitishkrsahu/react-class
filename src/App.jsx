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
import Fetch from "./component/object-Ajax/fetch"
import AxiosFetch from "./component/object-Ajax/axios"
import DateTime from "./component/date-time/Date"
import Moment from "./component/date-time/Moment"
function App(){
  return(
    <div>
      <Moment></Moment>
    </div>
  )
}
export default App