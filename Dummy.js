export const DUMMY_EVENTS = [{
    id: '1',
    title: 'Microsoft Community',
    address: ' 9031 New Ave. Fontana, CA 92335',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    numberOfPeople: 50,
    date: 'July 6 2022',
    imageUrl: "/images/events-1.jpg"
},
{
    id: '2',
    title: 'Microsoft Community',
    address: ' 9031 New Ave. Fontana, CA 92335',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    numberOfPeople: 50,
    date: 'July 6 2022',
    imageUrl: "/images/events-1.jpg"
},
{
    id: '3',
    title: 'Microsoft Community',
    address: ' 9031 New Ave. Fontana, CA 92335',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    numberOfPeople: 50,
    date: 'July 6 2022',
    imageUrl: "/images/events-1.jpg"
},
]

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}
