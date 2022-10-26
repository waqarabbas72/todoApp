let input = document.getElementById("myInput")
let todoList = document.getElementById("myList")
const list = []

const todoApp = {   
    addFun(){
        if(input.value){
            list.push(input.value)
            input.value = ""
        }else{
            alert('please enter a valid task')
        }
        this.myFun()
    },
    myFun(){
        todoList.innerHTML = ""
        list.forEach((value , index) => {
            todoList.innerHTML += `<li>${value} <button onclick = "todoApp.delete(${index})" class = "del-btn">X</button></li>`
    
        })

    },
    clear(){
        list.splice(0, list.length)
        this.myFun()
    },
    delete(index){
        list.splice(index ,1)
        this.myFun()
    }
}
