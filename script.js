async function submitForm(event) {
    event.preventDefault();

    // Retrieve input values
    const studentId = document.getElementById('studentId').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const placeOfBirth = document.getElementById('PlaceofBirth').value;
    const stageID = document.getElementById('StageID').value;
    const gradeID = document.getElementById('GradeID').value;
    const sectionID = document.getElementById('SectionID').value;
    const topic = document.getElementById('Topic').value;
    const semester = document.getElementById('Semester').value;
    const relation = document.getElementById('Relation').value;
    const raisedhands = document.getElementById('raisedhands').value;
    const visITedResources = document.getElementById('VisITedResources').value;
    const announcementsView = document.getElementById('AnnouncementsView').value;
    const discussion = document.getElementById('Discussion').value;
    const parentAnsweringSurvey = document.getElementById('ParentAnsweringSurvey').value;
    const parentschoolSatisfaction = document.getElementById('ParentschoolSatisfaction').value;
    const studentAbsenceDays = document.getElementById('StudentAbsenceDays').value;
    const studentMarks = document.getElementById('Student Marks').value;
    const classID = document.getElementById('Class').value;


    // ... Retrieve other attribute values ...

    // Create a data object with the form data
    const formData = {
        studentId: studentId,
        gender: gender,
        nationality: nationality,
        placeOfBirth: placeOfBirth,
        stageID: stageID,
        gradeID: gradeID,
        sectionID: sectionID,
        topic: topic,
        semester: semester,
        relation: relation,
        raisedhands: raisedhands,
        visITedResources: visITedResources,
        announcementsView: announcementsView,
        discussion: discussion,
        parentAnsweringSurvey: parentAnsweringSurvey,
        parentschoolSatisfaction: parentschoolSatisfaction,
        studentAbsenceDays: studentAbsenceDays,
        studentMarks: studentMarks,
        classID: classID

        // Add other form data properties
    };

    // Make an HTTP POST request to your API endpoint
    try {
        const response = await fetch('http://localhost:5041/api/Student/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Form submitted successfully:', response.json());
            // Add logic to handle successful submission
        } else {
            console.error('Error submitting form:', response.statusText);
            // Add logic to handle errors
        }
    } catch (error) {
        console.error('Error:', error);
        // Add logic to handle errors
    }

   








    // Log the retrieved data (you can process this data as needed)
    console.log('Student ID:', studentId);
    console.log('Gender:', gender);
    console.log('Nationality:', nationality);
    console.log('placeOfBirth:', placeOfBirth);
    console.log('stageID:', stageID);
    console.log('gradeID:', gradeID);
    console.log('sectionID:', sectionID);
    console.log('topic:', topic);
    console.log('semester:', semester);
    console.log('relation:', relation);
    console.log('raisedhands:', raisedhands);
    console.log('visITedResources:', visITedResources);
    console.log('announcementsView:', announcementsView);
    console.log('discussion:', discussion);
    console.log('parentAnsweringSurvey:', parentAnsweringSurvey);
    console.log('parentschoolSatisfaction:', parentschoolSatisfaction);
    console.log('studentAbsenceDays:', studentAbsenceDays);
    
    console.log('studentMarks:', studentMarks);
    console.log('classID:', classID);


    // ... Log other attribute values ...

    // Reset the form
    document.getElementById('studentForm').reset();
}
