const {isValidObjectId} = require("mongoose")
const Event = require("../models/Event")
const createConection = require("../service/mongo")


class EventController{

    async list (request, response){
        const connection = await createConection();
        const eventMongoose = await Event.findOne({nome: 'event test'});
        await connection.close();
        return response.json(eventMongoose);
    }
    async show(request,response){
    const { id } = request.params;

    if(!isValidObjectId(id)) {
      return response.status(401).json({error: 'não foi possível localizar evento!'});
    }

        const existEvent = Event.findById(id);
        if(!existsEvent) {
            return response.status(401).json({error: 'não foi possível localizar evento!'});
        }
      
        return response.json(existsEvent);
        }
    
    async create(request,response){
        const{
            organizador_id,
            nome,
            data,
            local,
        } = request.body

        const existsEvents = await Event.findOne({_id: '5f81c2c150a4375807deb262'});  
        if (existsEvent){
            return response.status(401).json({error: 'não foi possivel cadastrar'});
        }
        const connection = await createConection();

    await connection.db('trainee-drive').collection('events').insertOne({...request.body, createdAt: new Date()});
    // const events = await connection.db('api').collection('Events').find();
    
    
    // console.log(await events.toArray()); 
    
    await connection.close();

    const event = await Event.create(request.body);

    return response.json(event);
  }

  async update(request, response ) {
    const { id } = request.params;

    if(!isValidObjectId(id)) {
      return response.status(401).json({error: 'não foi possível localizar evento!'});
    }

    const eventUpdated = await Event.findByIdAndUpdate(id, request.body, {
      new: true // Para retornar o evento atualizado
    });

    if(!eventUpdated) {
      return response.status(401).json({error: 'não foi possível localizar evento!'});
    }

    return response.json(eventUpdated);
  }

  async delete(request, response ) {
    const { id } = request.params;

    if(!isValidObjectId(id)) {
      return response.status(401).json({error: 'não foi possível localizar evento!'});
    }

    // retorna o evento que foi apagado
    const eventUpdated = await Event.findByIdAndDelete(id);

    // caso não ExtensionScriptApis, quer dizer que não achou na busca
    if(!eventUpdated) {
      return response.status(401).json({error: 'não foi possível localizar evento!'});
    }

    return response.json({success: 'Evento apagado com sucesso'});
  }

}

module.exports = EventController;
