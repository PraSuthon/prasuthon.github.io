function toggleDetail(e){
    const target = $(e.target);

    if($(target).hasClass("active")) {
        $(target).html("More info").removeClass("active");
    } else {
        $(target).html("Close").addClass("active");
    }

    const item = $(target).parents(".about-exp-items");
    const detail = $(item).children(".about-exp-items-detail");
    $(detail).slideToggle();
} 

function onFormSubmit(e){
    e.preventDefault();
    const subject = $("#InputSubject");
    const massage = $("#InputMassage");

    if(!$(subject).val()) {
        alert("Subject is require");
    } else if(!$(massage).val()) {
        alert("Please enter your massage");
    } else {
        alert("form is submited!");
        $(subject).val("");
        $(massage).val("");
    }
}