import '../css/index.css';
import Subs from "./Subcription";
import UI from "./UI.js";
import Listen from "./Listeners"
const ui = new UI()
const lis = new Listen()

const sub1 = new Subs('199.99', 'annualy', 1)
const sub2 = new Subs('199.99', 'annualy', 2)
const sub3 = new Subs('399.99', 'monthly', 3)
const sub4 = new Subs('199.99', 'annualy', 4)
const sub5 = new Subs('39.99', 'monthly', 5)

lis.checkedEvent(ui.subCheck)
lis.checkedEvent(ui.allCheck)

export const subArr = [sub1, sub2, sub3, sub4, sub5]

ui.renderSubList(subArr)
