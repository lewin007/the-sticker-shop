document.addEventListener("DOMContentLoaded", function() {
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const selectionForm = document.getElementById('selectionForm');

    const totalImages = 257; // Change this to match the total number of images

    // Generate thumbnails with checkboxes
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `images/stiker (${i}).JPG`;
        img.alt = `Sticker ${i}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = `Sticker ${i}`;
        checkbox.name = `sticker${i}`;

        const label = document.createElement('label');
        label.textContent = `Sticker ${i}`;

        const stickerDiv = document.createElement('div');
        stickerDiv.appendChild(img);
        stickerDiv.appendChild(checkbox);
        stickerDiv.appendChild(label);

        thumbnailsContainer.appendChild(stickerDiv);
    }

    // Gather selected stickers on form submission
    selectionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const selectedStickers = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            selectedStickers.push(checkbox.value);
        });

        if (selectedStickers.length > 0) {
            // Send the selected stickers list to you
            const selectedStickersString = selectedStickers.join(', ');
            alert(`Selected stickers: ${selectedStickersString}`);
        } else {
            alert('Please select at least one sticker.');
        }
    });
});
