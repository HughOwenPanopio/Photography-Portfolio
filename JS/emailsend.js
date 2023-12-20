function emailSend() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "panopiohughowen@gmail.com",
        Password : "F599ECDFB94F12C81F8266C69AC5409B59E8",
        To : 'hughcraftedimage@gmail.com',
        From : "panopiohughowen@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}