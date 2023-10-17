import type { Prisma, Equipment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EquipmentCreateArgs>({
  equipment: {
    one: { data: { title: 'String', body: 'String', img: 'String' } },
    two: { data: { title: 'String', body: 'String', img: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Equipment, 'equipment'>
