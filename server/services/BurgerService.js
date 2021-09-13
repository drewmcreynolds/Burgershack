import { fakeDb } from '../db/fakeDb.js'
import { NotFound, BadRequest } from '../utils/Errors.js'

class BurgersService {
  getById(id) {
    const found = fakeDb.burgers.find(b => b.id.toString() === id)
    if (!found) {
      throw new NotFound('No burger by that id' + id)
    }
    return found
  }

  createBurger(bData) {
    const found = fakeDb.burgers.find(b => b.name === bData.name)
    if (found) {
      throw new BadRequest('Burger already exists')
    }
    bData.id = Math.floor(Math.random() * 101).toString()

    fakeDb.burgers.push(bData)
    return bData
  }

  deleteBurger(bData) {
    const foundBurger = fakeDb.burgers.find(b => b.id === bData.id)
    if (!foundBurger) {
      throw new BadRequest('Burge not deleted')
    }
    fakeDb.burgers.filter(b => b.id === bData)
    return 'deleted'
  }
}

export const burgersService = new BurgersService()
