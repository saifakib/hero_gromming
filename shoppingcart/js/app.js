// Variables
const shoppingCartContent = document.querySelector('#shopping-cart tbody'),
      courses = document.querySelector('#courses-list'),
      clearCartBtn = document.querySelector('#clear-cart');

// Listeners
loadEventListeners();

// Add event Listeners into a function
function loadEventListeners() {
    // When a new course is added
    courses.addEventListener('click', buyCourse);

    // When the remove button is clicked
    shoppingCartContent.addEventListener('click', removeCourse);

    // Clear Cart Btn
    clearCartBtn.addEventListener('click', clearCart);

    // On Document Ready
    document.addEventListener('DOMContentLoaded', getFromsessionStorage);
}

// Functions

function clearCart(e) {
    e.preventDefault();

    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }

    clearStorage();
}

function buyCourse(e) {
    e.preventDefault();

    // Use delegation to find the course that was added
    if(e.target.classList.contains('add-to-cart') ){
       // Read the actual course
       const course = e.target.parentElement.parentElement;

       // Read the values
       getCourseInfo(course);
    }
}

// Reads the HTML of the selected course
function getCourseInfo(course) {
    // Create an Object with Course Data
    const courseInfo = {
        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    // Insert into the Shopping cart
    addIntoCart(courseInfo);
    console.log(courseInfo);
}

function addIntoCart(course) {
    // Create a TR
    const row = document.createElement('tr');

    // Build the Template String
    row.innerHTML = `
        <tr>
            <td>
                <img src='${course.image}' width=100>
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td><a href="#" class="remove" data-id="${course.id}"> X</a></td>
        </tr>
    `;

    // add into the shopping cart
    shoppingCartContent.appendChild(row);

    // add into the storage
    saveIntoStorage(course);
}

// Remove Course from DOM
function removeCourse(e) {

    let course, courseId;

    //  remove element from the DOM
    if(e.target.classList.contains('remove')) {
         e.target.parentElement.parentElement.remove();
         course = e.target.parentElement.parentElement;
         courseId = course.querySelector('a').getAttribute('data-id') ;
    }
    // Remove from storage when removed from DOM
    removeCoursesessionStorage(courseId);
}


// Add the courses into Local Storage
function saveIntoStorage(course) {
    let courses;
    // If something exists on storage then we get value, otherwise, create empty array
    if(sessionStorage.getItem('courses') === null) {
        courses = [];
    } else {
        courses = JSON.parse(sessionStorage.getItem('courses'));
    }

    // Add the new course
    courses.push(course);

    // Since Storage only saves strings, we need to convert array into JSON
    sessionStorage.setItem('courses', JSON.stringify(courses) );
}
// Remove from storage
function removeCoursesessionStorage(courseId) {

    let coursesLS;

    // Check if there's something on storage
    if(sessionStorage.getItem('courses') === null) {
        coursesLS = [];
    } else {
        coursesLS = JSON.parse(sessionStorage.getItem('courses'));
    }

    // Loop throught array and find the course
    coursesLS.forEach(function( courseLS, index) {
        if(courseId == courseLS.id) {
            coursesLS.splice(index, 1);
        }
    });
    // Add the rest of the array
    sessionStorage.setItem('courses', JSON.stringify(coursesLS));
}

// Get courses from storage
function getFromsessionStorage() {
    let coursesLS;

    // If something on storage, then get the value
    if(sessionStorage.getItem('courses') === null) {
        coursesLS = [];
    } else {
        coursesLS = JSON.parse(sessionStorage.getItem('courses'));
    }

    // Loop  throught the courses and print the values
    coursesLS.forEach(function(course) {
            // Creates a TR
            const row = document.createElement('tr');
            row.innerHTML = `
                <tr>
                    <td>
                        <img src='${course.image}' width=100>
                    </td>
                    <td>${course.title}</td>
                    <td>${course.price}</td>
                    <td><a href="#" class="remove" data-id="${course.id}"> X</a></td>
                </tr>
            `;
            shoppingCartContent.appendChild(row);
        });
}

function clearCart(e) {
    e.preventDefault();

    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }

    clearStorage();
}

function clearStorage() {
    sessionStorage.clear();
}
