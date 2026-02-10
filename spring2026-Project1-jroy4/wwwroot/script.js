document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Theme';
    toggleButton.className = 'theme-toggle';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            console.log('Switched to light mode');
        } else {
            console.log('Switched to dark mode');
        }
    });

    const actorsList = document.getElementById('Actors');
    const actors = actorsList.getElementsByTagName('li');
    
    for (let i = 0; i < actors.length; i++) {
        actors[i].addEventListener('mouseenter', function() {
            this.style.color = '#f5c518';
            this.style.fontWeight = 'bold';
        });
        
        actors[i].addEventListener('mouseleave', function() {
            this.style.color = '';
            this.style.fontWeight = '';
        });
    }

    console.log('The Dark Knight page loaded successfully!');
    console.log('Number of actors listed: ' + actors.length);
});