import { mongoConnect } from "../../../utils/mongo-connect";
import Events from "../../../models/event";
import { getEventById } from "../../../utils/Helper";



export default async function getEvents(req, res) {
    if (req.method === 'GET') {

        const id = req.query.id;
        const data = await getEventById(id);
        console.log(data);
        return res.json(data)
    }
}