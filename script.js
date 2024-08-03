document.addEventListener('DOMContentLoaded', () => {
    // Mock data for medal rankings
    const medals = [
        { country: 'United States', gold: 10, silver: 5, bronze: 3 },
        { country: 'China', gold: 8, silver: 7, bronze: 2 },
        { country: 'France', gold: 7, silver: 6, bronze: 5 },
        { country: 'United Kingdom', gold: 5, silver: 8, bronze: 6 },
        { country: 'Australia', gold: 4, silver: 5, bronze: 8 },
        { country: 'Japan', gold: 3, silver: 4, bronze: 6 },
        { country: 'Italy', gold: 2, silver: 6, bronze: 5 },
        { country: 'Canada', gold: 1, silver: 3, bronze: 4 },
        { country: 'Germany', gold: 1, silver: 1, bronze: 3 },
        { country: 'Netherlands', gold: 0, silver: 2, bronze: 1 }
    ];

    const schedules = {
        soccer: 'Soccer Schedule: Match 1 - 10:00 AM, Match 2 - 1:00 PM, Match 3 - 4:00 PM',
        basketball: 'Basketball Schedule: Game 1 - 11:00 AM, Game 2 - 2:00 PM, Game 3 - 5:00 PM',
        swimming: 'Swimming Schedule: Event 1 - 9:00 AM, Event 2 - 12:00 PM, Event 3 - 3:00 PM',
        athletics: 'Athletics Schedule: Race 1 - 8:00 AM, Race 2 - 11:00 AM, Race 3 - 2:00 PM',
        gymnastics: 'Gymnastics Schedule: Routine 1 - 9:30 AM, Routine 2 - 12:30 PM, Routine 3 - 3:30 PM'
    };


    // Mock data for news updates
    const news = [
        { headline: 'The United States Wins Gold in Basketball' },
        { headline: 'Record-breaking Performance in Singles Gymnastics by Simone Biles' },
        { headline: 'LeBron James Absolutely Dominates and Kills Victor Wembanyama' }
    ];

    // Function to populate medal rankings
    const medalList = document.getElementById('medal-list');
    medals.forEach(medal => {
        const li = document.createElement('li');
        li.textContent = `${medal.country}: Gold - ${medal.gold}, Silver - ${medal.silver}, Bronze - ${medal.bronze}`;
        medalList.appendChild(li);
    });

    // Function to populate news updates
    const newsList = document.getElementById('news-list');
    news.forEach(update => {
        const li = document.createElement('li');
        li.textContent = update.headline;
        newsList.appendChild(li);
    });

    // Function to show schedule for a sport
    window.showSchedule = (sport) => {
        const scheduleDiv = document.getElementById('schedule');
        scheduleDiv.textContent = schedules[sport];
        scheduleDiv.style.display = 'block';
    };
});
