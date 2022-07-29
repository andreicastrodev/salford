import { mongoConnect } from "../../../utils/mongo-connect";
import Events from "../../../models/event";



export default async function newEvents(req, res) {
    if (req.method === 'POST') {
        const data = req.body;


        await mongoConnect();

        const { title, address, description, date, numOfPeople, imageUrl } = data;

        const newEvent = await Events.create({
            title,
            address,
            description,
            date,
            imageUrl,
            numOfPeople
        })

        const event = await newEvent.save();
        return res.json(event)
    }
}