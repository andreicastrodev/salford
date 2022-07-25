import mongoose from "mongoose";


export const mongoConnect = async () => mongoose.connect("mongodb+srv://andydev:123123dd@cluster0.jphuk.mongodb.net/events?retryWrites=true&w=majority")