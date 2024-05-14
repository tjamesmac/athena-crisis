import CharacterMessage from '@deities/apollo/CharacterMessage.tsx';
import { MapMetadata } from '@deities/apollo/MapMetadata.tsx';
import withModifiers from '@deities/athena/lib/withModifiers.tsx';
import MapData from '@deities/athena/MapData.tsx';

export const metadata: MapMetadata = {
  effects: new Map([
    [
      'GameEnd',
      new Set([
        {
          actions: [
            CharacterMessage(1, 'Phew, that was a close call.', 'self', 2),
            CharacterMessage(
              5,
              "All troops retreat. We'll be back soon enough!",
              'opponent',
              2,
            ),
            CharacterMessage(15, 'Athena Crisis is fun! FIRE!', 'self', 2),
            CharacterMessage(
              3,
              'If you enjoyed this, there is a lot more where this came from!',
              'self',
              2,
            ),
          ],
          conditions: [{ type: 'GameEnd', value: 'win' }],
        },
        {
          actions: [
            CharacterMessage(
              5,
              'We crushed you and we will crush you again.',
              'opponent',
              2,
            ),
            CharacterMessage(1, 'How is this possible?', 'self', 1),
            CharacterMessage(
              3,
              "It's ok, you can try as many times as you like.",
              'self',
              2,
            ),
          ],
          conditions: [{ type: 'GameEnd', value: 'lose' }],
        },
      ]),
    ],
  ]),
  name: 'Demo 1',
  tags: ['demo'],
  teamPlay: false,
};

export default withModifiers(
  MapData.createMap({
    buildings: [
      [
        11,
        8,
        {
          h: 100,
          i: 1,
          p: 1,
        },
      ],
      [
        8,
        3,
        {
          h: 100,
          i: 3,
          p: 2,
        },
      ],
      [
        10,
        5,
        {
          h: 100,
          i: 3,
          p: 1,
        },
      ],
      [
        11,
        1,
        {
          h: 100,
          i: 1,
          p: 2,
        },
      ],
      [
        2,
        4,
        {
          h: 100,
          i: 2,
          p: 1,
        },
      ],
      [
        7,
        2,
        {
          h: 100,
          i: 2,
          p: 2,
        },
      ],
    ],
    config: {
      biome: 0,
      blocklistedBuildings: [4, 9, 10, 11, 13, 15, 17],
      blocklistedSkills: [],
      blocklistedUnits: [4, 11, 12, 14, 16, 26, 37],
      fog: false,
      multiplier: 1,
      seedCapital: 1000,
      winConditions: [[0, 0, null]],
    },
    decorators: [
      [18, 15, 61],
      [50, 15, 98],
      [20, 16, 52],
      [47, 16, 70],
      [4, 25, 8],
      [6, 27, 92],
      [59, 27, 19],
      [6, 28, 90],
      [5, 39, 21],
      [8, 39, 22],
      [34, 40, 12],
    ],
    map: [
      6,
      6,
      [6, 14],
      2,
      3,
      5,
      3,
      3,
      1,
      3,
      1,
      1,
      3,
      1,
      2,
      6,
      6,
      6,
      6,
      2,
      5,
      8,
      1,
      3,
      3,
      3,
      1,
      2,
      1,
      2,
      6,
      6,
      6,
      6,
      2,
      5,
      2,
      8,
      2,
      3,
      3,
      2,
      3,
      2,
      1,
      3,
      8,
      3,
      1,
      2,
      5,
      2,
      1,
      4,
      4,
      4,
      2,
      1,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      [5, 16],
      4,
      4,
      4,
      8,
      4,
      4,
      4,
      4,
      4,
      12,
      12,
      12,
      2,
      1,
      5,
      1,
      2,
      3,
      4,
      4,
      3,
      1,
      2,
      1,
      1,
      1,
      12,
      1,
      3,
      5,
      5,
      3,
      1,
      4,
      1,
      6,
      6,
      6,
      6,
      10,
      12,
      12,
      3,
      2,
      1,
      5,
      5,
      1,
      4,
      1,
      6,
      10,
      10,
      6,
      6,
      10,
      10,
      3,
      3,
      3,
      2,
      5,
      1,
      4,
      2,
      1,
      1,
      3,
      6,
      6,
      6,
      6,
      6,
      2,
      3,
      2,
      5,
      1,
      4,
      10,
      10,
      10,
      10,
      6,
    ],
    size: {
      height: 10,
      width: 15,
    },
    teams: [
      {
        id: 1,
        name: '',
        players: [
          {
            funds: 0,
            id: 1,
            skills: [],
          },
        ],
      },
      {
        id: 2,
        name: '',
        players: [
          {
            funds: 0,
            id: 2,
            skills: [],
          },
        ],
      },
    ],
    units: [
      [
        4,
        1,
        {
          g: 40,
          h: 100,
          i: 1,
          p: 1,
        },
      ],
      [
        8,
        5,
        {
          a: [[1, 7]],
          g: 30,
          h: 100,
          i: 5,
          p: 1,
        },
      ],
      [
        1,
        7,
        {
          a: [[1, 5]],
          g: 20,
          h: 100,
          i: 47,
          p: 1,
        },
      ],
      [
        11,
        7,
        {
          g: 50,
          h: 100,
          i: 2,
          p: 2,
        },
      ],
      [
        11,
        8,
        {
          g: 50,
          h: 100,
          i: 2,
          p: 1,
        },
      ],
      [
        6,
        9,
        {
          a: [[1, 6]],
          g: 50,
          h: 100,
          i: 44,
          p: 1,
        },
      ],
      [
        7,
        4,
        {
          a: [[1, 7]],
          g: 40,
          h: 100,
          i: 7,
          p: 2,
        },
      ],
      [
        7,
        5,
        {
          a: [[1, 6]],
          g: 40,
          h: 100,
          i: 4,
          p: 2,
        },
      ],
      [
        7,
        6,
        {
          a: [[1, 7]],
          g: 30,
          h: 100,
          i: 5,
          p: 2,
        },
      ],
      [
        5,
        5,
        {
          a: [[1, 7]],
          g: 30,
          h: 100,
          i: 5,
          p: 2,
        },
      ],
      [
        9,
        5,
        {
          a: [[1, 4]],
          g: 40,
          h: 100,
          i: 3,
          p: 2,
        },
      ],
      [
        13,
        2,
        {
          a: [[1, 7]],
          g: 30,
          h: 100,
          i: 5,
          p: 1,
        },
      ],
      [
        4,
        6,
        {
          a: [[1, 7]],
          g: 40,
          h: 100,
          i: 7,
          p: 1,
          u: 1,
        },
      ],
      [
        9,
        7,
        {
          a: [[1, 7]],
          g: 40,
          h: 100,
          i: 7,
          p: 2,
        },
      ],
      [
        5,
        6,
        {
          a: [[1, 4]],
          g: 30,
          h: 100,
          i: 15,
          p: 1,
        },
      ],
      [
        14,
        7,
        {
          a: [[1, 10]],
          g: 25,
          h: 100,
          i: 27,
          p: 2,
        },
      ],
      [
        13,
        9,
        {
          g: 60,
          h: 100,
          i: 6,
          p: 1,
        },
      ],
      [
        3,
        4,
        {
          a: [[1, 4]],
          g: 40,
          h: 100,
          i: 3,
          p: 1,
        },
      ],
      [
        8,
        3,
        {
          g: 50,
          h: 100,
          i: 2,
          p: 2,
        },
      ],
    ],
  }),
);