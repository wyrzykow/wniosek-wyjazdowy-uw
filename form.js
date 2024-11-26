function generateWniosek() {
    const name = document.getElementById('name').value;
    const workPhone = document.getElementById('work_phone').value;
    const email = document.getElementById('email').value;
    const fundingSource = document.getElementById('funding_source').value;
    const accountNumber = document.getElementById('account_number').value;
    const imageFile = document.getElementById('image').files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgData = event.target.result;
            createWniosekFile(name, workPhone, email, fundingSource, accountNumber, imgData);
        };
        reader.readAsDataURL(imageFile);
    } else {
        createWniosekFile(name, workPhone, email, fundingSource, accountNumber, '');
    }
}

function createWniosekFile(name, workPhone, email, fundingSource, accountNumber, imgData) {
    const wniosekContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wniosek</title>
</head>
<body>
    <h1>Wniosek Details</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Work Phone:</strong> ${workPhone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Funding Source:</strong> ${fundingSource}</p>
    <p><strong>Account Number:</strong> ${accountNumber}</p>
    ${imgData ? `<img src="${imgData}" alt="Uploaded Image" style="max-width: 100%; height: auto;">` : ''}
</body>
</html>
`;

    downloadFile('wniosek.html', wniosekContent);
}

function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
