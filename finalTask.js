$(document).ready(function () {
    $('#userInfoForm').submit(function (event) {
        event.preventDefault();
        let formData = $(this).serializeArray();
        let userData = {};
        $(formData).each(function (index, obj) {
            userData[obj.name] = obj.value;
        });
        displayUserData(userData);
        this.reset();
    });

    $('#clearForm').click(function () {
        $('#userInfoForm')[0].reset();
        $('#displayData').empty();
    });

    function displayUserData(data) {
        let cardHtml = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${data.firstName} ${data.lastName}</h5>
            <p class="card-text">Email: ${data.email}</p>
            <p class="card-text">Phone: ${data.phoneNumber}</p>
            <p class="card-text">Date of Birth: ${data.dob}</p>
            <p class="card-text">Gender: ${data.gender}</p>
            <p class="card-text">Address: ${data.address}</p>
          </div>
        </div>
      `;
        $('#displayData').append(cardHtml);
    }
});
