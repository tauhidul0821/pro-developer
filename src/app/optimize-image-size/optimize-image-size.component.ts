import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optimize-image-size',
  templateUrl: './optimize-image-size.component.html',
  styleUrls: ['./optimize-image-size.component.scss'],
})
export class OptimizeImageSizeComponent implements OnInit {
  public errorMessage: string;
  public images = [];
  private imageFiles = [];
  constructor() {}

  ngOnInit(): void {}

  onSelectFile(event: any) {
    if (event.target.files && event.target.files.length !== 0) {
      if (event.target.files.length > 4 || this.imageFiles.length > 2) {
        this.errorMessage = 'IMAGE_VALIDATE_ERROR.YOU_CAN_UPLOAD_3_PICTURES';
        return;
      }
      for (const file of event.target.files) {
        const mimeType = file.type;
        const imageName = file.name;
        const imageSize = (file.size / 1024).toFixed(2);
        if (mimeType.match(/image\/*/) == null) {
          this.errorMessage = 'IMAGE_VALIDATE_ERROR.UPLOAD_ONLY_IMAGES';
          return;
        }
        // else if (Number(imageSize) > 300) {
        //   this.errorMessage = 'IMAGE_VALIDATE_ERROR.LESS_THAN_300_KB';
        //   return;
        // }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          const imageUrl = reader.result;

          this.compressImage(reader.result, 200, 200).then((compressed) => {
            console.log('compressed data :- ', compressed);
            const imageBlob = this.dataURItoBlob(compressed);
            const newImageFile = new File([imageBlob], imageName, {
              type: 'image/png',
            });

            this.errorMessage = '';
            this.images.unshift({ imageUrl, imageName, imageSize });
            this.imageFiles.unshift(newImageFile);
          });
        };
      }
    }
  }

  compressImage(src: any, newX: any, newY: any) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, newX, newY);
        const data = ctx.canvas.toDataURL();
        res(data);
      };
      img.onerror = (error) => rej(error);
    });
  }

  dataURItoBlob(dataURI: any) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }
}
