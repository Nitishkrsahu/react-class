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
import ButtonEvent from "./component/button-event/button-1"
import ElementState from "./component/element-State/ElementState"
import UseRef from "./component/timerEvent/Useref"
import TimerEvent from "./component/timerEvent/timer-1"
import StopWatch from "./component/timerEvent/StopWatch"
import Form from "./component/form/Form"
import FormikForm from "./component/form/formik"
import FormikValidate from "./component/form/FormikValidate"
import Yup from "./component/form/Yup"
import Navbar from "./component/controlled/Navbar"

function App(){
  return(
    <div>
      <Navbar signin={true} theme="bg-dark text-white" brandName="Fllipkart" menuItems={['Home', 'Shop', 'About', 'Contact']} color='btn btn-warning'></Navbar>
      <Navbar signin={false} theme="bg-warning text-dark" brandName="Amazon" menuItems={['Home', 'Pages', 'Privacy', 'Service']} color='btn btn-danger'></Navbar>
    </div>
  )
}
export default App