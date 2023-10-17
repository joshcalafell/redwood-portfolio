import type { Equipment } from '@prisma/client'

import {
  devices,
  equipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} from './devices'
import type { StandardScenario } from './devices.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('devices', () => {
  scenario('returns all devices', async (scenario: StandardScenario) => {
    const result = await devices()

    expect(result.length).toEqual(Object.keys(scenario.equipment).length)
  })

  scenario('returns a single equipment', async (scenario: StandardScenario) => {
    const result = await equipment({ id: scenario.equipment.one.id })

    expect(result).toEqual(scenario.equipment.one)
  })

  scenario('creates a equipment', async () => {
    const result = await createEquipment({
      input: { title: 'String', body: 'String', img: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.img).toEqual('String')
  })

  scenario('updates a equipment', async (scenario: StandardScenario) => {
    const original = (await equipment({
      id: scenario.equipment.one.id,
    })) as Equipment
    const result = await updateEquipment({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a equipment', async (scenario: StandardScenario) => {
    const original = (await deleteEquipment({
      id: scenario.equipment.one.id,
    })) as Equipment
    const result = await equipment({ id: original.id })

    expect(result).toEqual(null)
  })
})
