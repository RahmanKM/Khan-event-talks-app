document.addEventListener('DOMContentLoaded', () => {
    const scheduleElement = document.getElementById('schedule');
    const searchInput = document.getElementById('searchInput');
    let talksData = [];

    fetch('/api/talks')
        .then(response => response.json())
        .then(data => {
            talksData = data;
            renderSchedule(talksData);
        });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredTalks = talksData.filter(talk => 
            talk.category.some(cat => cat.toLowerCase().includes(searchTerm))
        );
        renderSchedule(filteredTalks);
    });

    function renderSchedule(talks) {
        scheduleElement.innerHTML = '';
        let currentTime = new Date();
        currentTime.setHours(10, 0, 0, 0);

        talks.forEach((talk, index) => {
            if (index === 3) {
                const breakElement = createBreakElement(currentTime);
                scheduleElement.appendChild(breakElement);
                currentTime.setHours(currentTime.getHours() + 1);
            }

            const talkElement = createTalkElement(talk, currentTime);
            scheduleElement.appendChild(talkElement);

            currentTime.setHours(currentTime.getHours() + 1);
            currentTime.setMinutes(currentTime.getMinutes() + 10);
        });
    }

    function createTalkElement(talk, time) {
        const div = document.createElement('div');
        div.classList.add('talk');
        
        const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        div.innerHTML = `
            <h3>${timeString}</h3>
            <h2>${talk.title}</h2>
            <p class="speakers">By: ${talk.speakers.join(', ')}</p>
            <p>${talk.description}</p>
            <div class="category">
                ${talk.category.map(cat => `<span>${cat}</span>`).join('')}
            </div>
        `;
        return div;
    }

    function createBreakElement(time) {
        const div = document.createElement('div');
        div.classList.add('break');
        const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        div.innerHTML = `<h3>${timeString}</h3><h2>Lunch Break</h2>`;
        return div;
    }
});
