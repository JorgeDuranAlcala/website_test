import UI from "./UI.js";
import { subArr } from "./index.js";
const ui = new UI()

class Listener {
    constructor() {
        
    }
    checkedEvent(inputCheck) {
        inputCheck.addEventListener('change', e => {
            let target = e.target
            if(target.id == "all" && target.checked) {
                ui.renderSubList(subArr)
            }
            else if(target.id == "subscribed" && target.checked) {
                ui.renderSubSuscribed(subArr)
            } 
        })
    }

    
}

export default Listener