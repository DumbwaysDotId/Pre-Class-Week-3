function requestAjax(callback){
    // Init XML Http Request
    const xhr = new XMLHttpRequest();

    //set Target request fetch API
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/2")

    //implement rest API
    xhr.onload = function(){
        if(xhr.status === 200){
            callback(xhr.responseText)
        }else{
            callback("Failed")
        }
    }
    xhr.send()
}

// data = requestAjax(showResult())

function showResult(data) {
    if(data != 'Failed'){
        //result Data
        data = JSON.parse(data)
        console.log(data)
    }
}

requestAjax(showResult)