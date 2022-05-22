function GetAllAnimalName(){
    return $.getJSON({
        url: "http://127.0.0.1:5000/answers",
        contentType: "application/json",
        dataType: 'json',
    })
}