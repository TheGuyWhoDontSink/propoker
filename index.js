const button = document.getElementById('toggleButton');
    const content = document.getElementById('content');

    button.addEventListener('click', () => {
      if (content.style.display === 'none') {
        content.style.display = 'block';
        button.textContent = ' hide';
      } else {
        content.style.display = 'none';
        button.textContent = 'show ';
      }
    });
     const form = document.getElementById('commentForm');
    const commentsDisplay = document.getElementById('commentsDisplay');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const comment = document.getElementById('comment').value;
      const userApproval = document.getElementById('userApproval').checked;
      const ownerApproval = document.getElementById('ownerApproval').checked;

      if (userApproval && ownerApproval) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;
        commentsDisplay.appendChild(commentElement);

        form.reset();
        alert('Your comment has been submitted for approval!');
      } else {
        alert('Please approve both conditions to submit your comment.');
      }
    });
 