const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { userid } = req.headers;
        const { spotid } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: userid,
            spot: spotid,
            date,
        });
        //Serve para trazer as informações do User e Spot dentro do json, e não só o ID
        await booking.populate('spot').populate('user').execPopulate();


        return res.json(booking);
    }
}