window.addEventListener('DOMContentLoaded', (event) => {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const resetBtn = document.getElementById('resetBtn');
  
    let draggedItem = null;
  
    // Add event listeners for drag and drop events
    container1.addEventListener('dragstart', dragStart);
    container2.addEventListener('dragover', dragOver);
    container2.addEventListener('drop', drop);
    resetBtn.addEventListener('click', resetContainers);
  
    // Function to handle dragstart event
    function dragStart(event) {
      draggedItem = this;
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    // Function to handle dragover event
    function dragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      return false;
    }
  
    // Function to handle drop event
    function drop(event) {
      event.preventDefault();
      draggedItem.parentNode.removeChild(draggedItem);
      container2.appendChild(draggedItem);
  
      // Add a success message
      const successMessage = document.createElement('p');
      successMessage.classList.add('success-message');
      successMessage.textContent = 'Item dropped successfully!';
      container2.appendChild(successMessage);
    }
  
    // Function to reset the containers
    function resetContainers() {
      container2.innerHTML = '<div class="dropzone">Drop items here</div>';
      container1.innerHTML =
        '<div class="item" draggable="true">Item 1</div>' +
        '<div class="item" draggable="true">Item 2</div>' +
        '<div class="item" draggable="true">Item 3</div>';
    }
  });
  