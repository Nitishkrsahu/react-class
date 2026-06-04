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
import Event from "./component/react-event/event"
import EventArgs from "./component/react-event/Event-args"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import EventPro from "./component/react-event/EventPro"
import DynamicCss from "./component/react-event/dynamic"
import MouseEvent from "./component/mouse-event/MouseEvent"
import MouseEventNew from "./component/mouse-event/mouseEvent-1"
import KeyboardEvent from "./component/keyboardEvent/keyboard-1"

function App(){
  return(
    <div>
      <KeyboardEvent></KeyboardEvent>
    </div>
  )
}
export default App