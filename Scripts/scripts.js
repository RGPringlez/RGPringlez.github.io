const tutorList = document.querySelector("li.tutor_list");

function TutorClick() {

    const UserName = prompt("Enter UserName");

    if (UserName != '') {

        alert("hello" + UserName);
        window.open("Pages/tutoring.html", "_blank");
    
    } else {

        TutorClick();

    }

};

    tutorList.addEventListener("click", function() {

        TutorClick()

    });
   

