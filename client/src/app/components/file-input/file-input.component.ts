import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent {

  constructor() { }

  @Output() selectFile = new EventEmitter<string | null | ArrayBuffer>();

  public selectedFile: string | null | ArrayBuffer = '';

  public async changeFiles(e: any) {
    this.selectedFile = await this.convertToBase64(e.target.files[0]);
    this.selectFile.emit(this.selectedFile);
  }

  private async convertToBase64 (file: File): Promise<string | null | ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      }
      reader.readAsDataURL(file);
    })
  }
}
