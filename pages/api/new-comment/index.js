import { mongoConnect } from "../../../utils/mongo-connect";
import Events from "../../../models/event";



export default async function getEvents(req, res) {
    if (req.method === 'POST') {
        const data = req.body;


        await mongoConnect();

        const { eventId, name, comment } = data;

        console.log(data)
        const event = await Events.findById(eventId);

        event.data.comments.push({ name, comment });
        const updatedEvent = await event.save();
        return res.json(updatedEvent.data.comments)
    }
}