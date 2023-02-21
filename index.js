
const inputEl = document.getElementById("input-el")
const btnClicked = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const saveTab = document.getElementById("savetab-btn")
const deleteSpectab = document.getElementById("delSpec-btn")
let myLeads =[]



btnClicked.addEventListener("click", ()=> {
myLeads.push(inputEl.value)
renderleads()
inputEl.value = null
localStorage.setItem("myLeads", JSON.stringify(myLeads))
})

deletebtn.addEventListener("click", ()=> {
    myLeads = []
    localStorage.clear()
    renderleads()
})

saveTab.addEventListener("click", ()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderleads()
   
     })
  
})



let leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocal){
    myLeads = leadsFromLocal
    renderleads()
}

function renderleads(){
let listItems= ""
for(i=0; i<myLeads.length; i++){
    listItems +=  `<li>
                 <a href="${myLeads[i]}">  ${myLeads[i]}</a>
                 </li>`
}
ulEl.innerHTML = listItems

}