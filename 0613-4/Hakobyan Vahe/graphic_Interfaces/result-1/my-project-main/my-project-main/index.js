  function showMessage() {
            let colors = document.getElementsByName("color");
            let message = document.getElementById("message");

            if (message) {
                message
            }

            if (colors[0].checked) {
                message.innerHTML = "Դուք ընտրել եք կարմիր գույնը։";
            } else if (colors[1].checked) {
                message.innerHTML = "Դուք ընտրել եք կապույտ գույնը։";
            } else {
                message.innerHTML = "Խնդրում ենք ընտրել գույնը։";
            }
        }