import { mongoConnect } from "../../../utils/mongo-connect";
import Events from "../../../models/event";



export default async function newEvents(req, res) {
    if (req.method === 'POST') {
        const data = req.body;


        await mongoConnect();

        const { title, address, description, date, numOfPeople, comments } = data;

        const newEvent = await Events.create({
            title,
            address,
            description,
            date,
            numOfPeople
        })

        const event = await newEvent.save();
        return res.json(event)
    }
}