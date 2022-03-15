function saveMessage() {
    console.log("form is submitting")
    let name = $("input#name").val()
    let email = $("input#email").val()
    // let message = $("textarea#message").val()
    let message = $("textarea.message").val()

    // const data = { name:name, email:email, message:"any value"}
    // if key name is the same as the name storing the value
    const data = { name:name , email:email , message:message }

    // Reset form after sending the message
    $("form#message-form")[0].reset()

    console.log(data)

    $("div#response-message").show()
}
function showElementOnHover(elementId){
    $(elementId).fadeIn('slow')
}

function hideElementOnHover(elementId){
    $(elementId).fadeOut('slow')
}


// initialize jquery
$(document).ready(function () {
    

})