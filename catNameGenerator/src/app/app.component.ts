import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catNameGenerator';
  names = [
    {
      "characterId": 1,
      "gender": "male",
      "physique": "crazy",
      "personality": "slinky",
      "vocal": "announce"
  },
  {
      "characterId": 2,
      "gender": "male",
      "physique": "chill",
      "personality": "chonk",
      "vocal": "whisper"
  },
  {
      "characterId": 3,
      "gender": "female",
      "physique": "aloof",
      "personality": "super_chonk",
      "vocal": "whisper"
  },
  {
      "characterId": 4,
      "gender": "male",
      "physique": "chill",
      "personality": "average",
      "vocal": "talk"
  },
  {
      "characterId": 5,
      "gender": "female",
      "physique": "crazy",
      "personality": "bony",
      "vocal": "scream"
  },
  {
      "characterId": 6,
      "gender": "female",
      "physique": "demonic",
      "personality": "average",
      "vocal": "hiss"
  },
  {
      "characterId": 7,
      "gender": "female",
      "physique": "playful",
      "personality": "chonk",
      "vocal": "cheers"
  }
]
  
}

