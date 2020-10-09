const { connection } = require('mongoose');
const Event = require('../models/Event');
const createConnection = require('../service/mongo');


class EventController {
  /**
   * CRUD
   * - Crete
   * - Read / Show
   * - Update 
   * - Delete
   */ // NUNCA DEVE TER MAIS DO QUE ESSES 5 MÉTODOS NO CONTROLLER !!

  async create(request, response ) {
    const {
      organizador_id,
      nome,
      data,
      local,
    } = request.body;

    const existsEvents = await Event.findOne({organizador: organizador});  

    if(existsEvents) {
      return response.status(401).json({error: 'não foi possivel cadastrar'});
    }

    const connection = await createConnection();
    
    await connection.db('trainee-drive').collection('events').insertOne({...request.body, createdAt: new Date()});

    // const events = await connection.db('api').collection('Events').find();
    
    
    // console.log(await events.toArray()); 
    
    await connection.close();

    const event = await Event.create(request.body);

    return response.json(event);
  }

  async list(request, response ) {

    const connection = await createConnection();

    const eventsDrive = await connection.db('trainee-drive').collection('events').findOne({nome: 'event test'});

    const eventsMongoose = await Event.findOne({nome: 'event test'});

    await connection.close();

    return response.json(eventsMongoose);
  }
}

module.exports = EventController;
