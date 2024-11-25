// Select necessary elements
const BUTTON = document.getElementById('input_btn');
const LIST = document.getElementById('listPart');
const INPUT_BOX = document.getElementById('inputBox');

// Default image paths for task states
const CHECKED_IMAGE = 'images_checked_-removebg-preview.png';
const UNCHECKED_IMAGE = '60248-200.png';

// Add event listener for the "Add" button
BUTTON.addEventListener('click', () => {
  const taskText = INPUT_BOX.value.trim(); // Get user input and trim whitespace

  if (taskText === '') {
    alert("Please enter a task before adding.");
  } else {
    // Create the list item for the task
    const li = document.createElement('li');
    li.classList.add('flex', 'items-center', 'mb-2'); // Tailwind classes for styling

    // Create the task image (unchecked by default)
    const img = document.createElement('img');
    img.src = `./images/${UNCHECKED_IMAGE}`; // Set the initial state to unchecked
    img.alt = 'Unchecked icon';
    img.classList.add('h-6', 'w-6', 'mr-2', 'cursor-pointer'); // Style the image

    // Create the task text element
    const taskTextElement = document.createElement('div');
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add('text-black', 'flex-grow'); // Style the text

    // Toggle the task completion state on image click
    img.addEventListener('click', () => {
      if (img.src.endsWith(UNCHECKED_IMAGE)) {
        img.src = `./images/${CHECKED_IMAGE}`; // Change to checked image
        taskTextElement.classList.add('line-through', 'decoration-gray-500', 'decoration-2');
      } else {
        img.src = `./images/${UNCHECKED_IMAGE}`; // Revert to unchecked image
        taskTextElement.classList.remove('line-through', 'decoration-gray-500', 'decoration-2');
      }
    });

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt text-red-500 relative inline-block "></i>'; // FontAwesome trash icon
    deleteButton.classList.add('ml-4', 'cursor-pointer');
    deleteButton.addEventListener('click', () => {
      li.remove(); // Remove the task on delete button click
    });

    // Append the image, text, and delete button to the list item
    li.appendChild(img);
    li.appendChild(taskTextElement);
    li.appendChild(deleteButton);

    // Append the list item to the list
    LIST.appendChild(li);

    // Clear the input field
    INPUT_BOX.value = '';
  }
});
