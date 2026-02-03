window.addEventListener('DOMContentLoaded', () => {
    const styleSelect = document.getElementById('styleSelect');
    const pagestyle = document.getElementById('pagestyle');

    styleSelect.addEventListener('change', function() {
        pagestyle.href = this.value;
    });
});
