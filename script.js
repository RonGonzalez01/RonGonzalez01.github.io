document.addEventListener('DOMContentLoaded', function() {
    const tabla = document.querySelector('.tabla');

    tabla.addEventListener('keydown', function(e) {
        const key = e.key;

        if (key === 'ArrowUp' || key === 'ArrowDown') {
            const rows = Array.from(tabla.querySelectorAll('tbody tr'));
            const currentRowIndex = rows.indexOf(document.activeElement.closest('tr'));
            let targetIndex;

            if (key === 'ArrowUp' && currentRowIndex > 0) {
                targetIndex = currentRowIndex - 1;
            } else if (key === 'ArrowDown' && currentRowIndex < rows.length - 1) {
                targetIndex = currentRowIndex + 1;
            }

            if (targetIndex !== undefined) {
                rows[targetIndex].querySelector('td').focus();
            }
        } else if (key === 'ArrowLeft' || key === 'ArrowRight') {
            const cell = document.activeElement;
            const currentIndex = Array.from(cell.parentNode.children).indexOf(cell);
            let targetIndex;

            if (key === 'ArrowLeft' && currentIndex > 0) {
                targetIndex = currentIndex - 1;
            } else if (key === 'ArrowRight' && currentIndex < cell.parentNode.children.length - 1) {
                targetIndex = currentIndex + 1;
            }

            if (targetIndex !== undefined) {
                cell.parentNode.children[targetIndex].focus();
            }
        }
    });
});