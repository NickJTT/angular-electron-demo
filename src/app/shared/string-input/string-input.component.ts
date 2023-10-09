import { Component, NgZone } from '@angular/core';
import { ElectronService } from '../../core/services';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.scss'],
})
export class StringInputComponent {
  inputText = '';
  savedString = '';

  constructor(private electronService: ElectronService, private ngZone: NgZone) {
    this.electronService.ipcRenderer.on('string-from-file', (event, data) => {
      this.ngZone.run(() => {
        this.savedString = data;
      });
    });
  }

  saveString() {
    if (this.electronService.isElectron) {
      this.electronService.ipcRenderer.send('save-string', this.inputText);
      this.savedString = this.inputText;
    }
  }
}
