import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

  private heros: any[] = [
      {
        'id': '1011334',
        'name': '3-D Man',
        'description': '',
        'modified': '2014-04-29T14:18:17-0400',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          'extension': 'jpg'
        }
      },
      {
        'id': '1016823',
        'name': 'Abomination (Ultimate)',
        'description': '',
        'modified': '2012-07-10T19:11:52-0400',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          'extension': 'jpg'
        }
      },
      {
        'id': '1010699',
        'name': 'Aaron Stack',
        'description': '',
        'modified': '1969-12-31T19:00:00-0500',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          'extension': 'jpg'
        }
      },
      {
        'id': '1009144',
        'name': 'A.I.M.',
        'description': 'AIM is a terrorist organization bent on destroying the world.',
        'modified': '2013-10-17T14:41:30-0400',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
          'extension': 'jpg'
        }
      },
      {
        'id': '1017100',
        'name': 'A-Bomb (HAS)',
        'description': 'Rick Jones has been Hulk\'s best bud since day one, but now he\'s more than a friend...he\'s a teammate! Transformed by a Gamma energy explosion, A-Bomb\'s thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ',
        'modified': '2013-09-18T15:54:04-0400',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
          'extension': 'jpg'
        }
      },
      {
        'id': '1009146',
        'name': 'Abomination (Emil Blonsky)',
        'description': 'Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.',
        'modified': '2012-03-20T12:32:12-0400',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04',
          'extension': 'jpg'
        }
      },
      {
        'id': '1010903',
        'name': 'Abyss (Age of Apocalypse)',
        'description': '',
        'modified': '1969-12-31T19:00:00-0500',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548',
          'extension': 'jpg'
        }
      },
      {
        'id': '1011266',
        'name': 'Adam Destine',
        'description': '',
        'modified': '1969-12-31T19:00:00-0500',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          'extension': 'jpg'
        }
      },
      {
        'id': '1009148',
        'name': 'Absorbing Man',
        'description': '',
        'modified': '2013-10-24T14:32:08-0400',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7',
          'extension': 'jpg'
        }
      },
      {
        'id': '1009149',
        'name': 'Abyss',
        'description': '',
        'modified': '2014-04-29T14:10:43-0400',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64',
          'extension': 'jpg'
        }
      },
      {
        'id': '1011031',
        'name': 'Agent X (Nijo)',
        'description': 'Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan\'s plan to exact revenge for Deadpool falsely taking credit for the Swan\'s assassination of the Four Winds crime family, which included Nijo\'s brother.',
        'modified': '1969-12-31T19:00:00-0500',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          'extension': 'jpg'
        }
      },
      {
        'id': '1011176',
        'name': 'Ajak',
        'description': '',
        'modified': '1969-12-31T19:00:00-0500',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215',
          'extension': 'jpg'
        }
      },
      {
        'id': '1011120',
        'name': 'Albion',
        'description': '',
        'modified': '1969-12-31T19:00:00-0500',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          'extension': 'jpg'
        }
      },
      {
        'id': '1014990',
        'name': 'Alice',
        'description': '',
        'modified': '2010-11-18T16:01:44-0500',
        'thumbnail': {
          'path': 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/4cd061e6d6573',
          'extension': 'jpg'
        }
      }
  ];

  constructor() { }

  getHeros() {
    return this.heros;
  }

}
