import { mongoConnect } from "../../../utils/mongo-connect";
import Events from "../../../models/event";
import { getEventsData } from "../../../utils/Helper";



export default async function getEvents(req, res) {
    if (req.method === 'GET') {

        const data = await getEventsData();
        
        return res.json(data)
    }
}