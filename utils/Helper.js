import { mongoConnect } from "./mongo-connect";
import Events from '../models/event'
export const getEventsData = async () => {

    await mongoConnect();

    const events = await Events.find();

    return events;
};

export const getEventById = async (id) => {

    await mongoConnect();


    const event = await Events.findById(id);

    console.log('helper', event)
    return event;
}