
const events = [];

class EventController {
  /**
   * CRUD
   * - Crete
   * - Read 
   * - Show
   * - Update 
   * - Delete
   */

   async create(request, response ) {

     events.push(request.body);

     return response.json({event: request.body});
   }

   async list(request, response ) {

     return response.json({ events });
   }
}

module.exports = EventController;