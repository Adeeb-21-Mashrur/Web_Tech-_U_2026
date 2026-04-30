function loadStudents() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "data.php", true);

    xhr.onload = function () {
        if (this.status === 200) {
            let students = JSON.parse(this.responseText);

            let output = "<h3>Student List:</h3>";

            students.forEach(function(student) {
                output += `
                    <div style="border:1px solid #000; padding:10px; margin:10px 0;">
                        <p><strong>Name:</strong> ${student.name}</p>
                        <p><strong>ID:</strong> ${student.id}</p>
                        <p><strong>Department:</strong> ${student.department}</p>
                        <p><strong>CGPA:</strong> ${student.cgpa}</p>
                    </div>
                `;
            });

            document.getElementById("output").innerHTML = output;
        }
    };

    xhr.send();
}