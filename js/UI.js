import { subArr } from ".";

class UI {
  constructor() {
    this.grid = document.querySelector(".grid-list");
    this.subCheck = document.querySelector("#subscribed");
    this.allCheck = document.querySelector("#all");
    this.buttons = null
}

    renderSubList(subs) {
        this.grid.innerHTML = ''
        subs.map( (sub, i) => {
            this.grid.innerHTML += `
            <div class="card text-center">
                <div class="card-header">
                    <h4>Package #${i}</h4>
                </div>
                <div class="card-body">
                    <h3>$${sub.price}</h3>
                    <p>/YEAR PER DEVICE BILLED ${sub.billed}</p>
                    <div class="control">
                        <button class="button btn-md btn-primary btn-block ${(sub.subscribed) ? 'subscribed' : 'normal'}" id=${sub.id}>
                            ${(sub.subscribed) ? 'Subscribed' : 'Select'}
                        </button>
                    </div>
                </div>
                <div class="card-footer ">
                    <span><i class="fas fa-check"></i>Feature 01 goes here</span>
                    <span><i class="fas fa-check"></i>Feature 02 goes here</span>
                    <span><i class="fas fa-check"></i>Feature 03 goes here</span>
                    <span class="opacity"><i class="fas fa-check"></i>Feature 04 goes here</span>
                    <a href="#" class="text-primary">show more</a>
                    </div>
                    </div>
                    `
                    const btns =  document.querySelectorAll('button')
        
                })
                const btns =  document.querySelectorAll('button')
                btns.forEach(btn => {
                    btn.addEventListener('click', e => {
                        const target = e.target
                        const subs =  subArr.find(sub => sub.id == target.id)
                        if(target.textContent == "Select") {
                            target.textContent = "Subscribed"
                            const cntl = document.querySelector('.control')
                            e.target.parentElement.classList.add('button_group')
                            target.classList.toggle('subscribed')
                            subs.subscribed = true
                        } else {
                            target.textContent = "Select"
                            target.classList.remove('subscribed')
                            target.classList.add('normal')
                            subs.subscribed = false
                        }
                    })
                })

        }
            

  renderSubSuscribed(subs) {
        const filtered = subs.filter(sub => sub.subscribed)
        this.grid.innerHTML = ''
        filtered.map( (sub, i) => {
            this.grid.innerHTML += `
            <div class="card text-center">
                <div class="card-header">
                    <h4>Package #${i}</h4>
                </div>
                <div class="card-body">
                    <h3>$${sub.price}</h3>
                    <p>/YEAR PER DEVICE BILLED ${sub.billed}</p>
                    <div class="button_group">
                        <button class="button btn-md btn-primary btn-block ${(sub.subscribed) ? 'subscribed' : 'normal'}" id=${sub.id}>
                            ${(sub.subscribed) ? 'Subscribed' : 'Select'}
                        </button>
                        <div class="cancel_button">
                            cancel Subscribe
                        </div>
                    </div>
                </div>
                <div class="card-footer ">
                    <span>Feature 01 goes here</span>
                    <span>Feature 02 goes here</span>
                    <span>Feature 03 goes here</span>
                    <span>Feature 04 goes here</span>
                    <a href="#" class="text-primary">show more</a>
                    </div>
                    </div>
                    `
                    const btns =  document.querySelectorAll('button')
                })
                
                const btns =  document.querySelectorAll('button')
                btns.forEach(btn => {
                    btn.addEventListener('click', e => {
                        const target = e.target
                        const subs =  subArr.find(sub => sub.id == target.id)
                        if(target.textContent == "Select") {
                            target.textContent = "Subscribed"
                            target.classList.toggle('subscribed')
                            subs.subscribed = true
                        } 
                    })
                })
  }

}

export default UI;
