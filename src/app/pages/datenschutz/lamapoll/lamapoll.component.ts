import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Document, ExternalHyperlink, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-lamapoll',
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './lamapoll.component.html',
  styleUrl: './lamapoll.component.scss',
})
export class LamapollComponent {
  usesPersonalDate = false;
  reason = '';
  target = '';

  generateDoc() {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun(this.reason),
                new TextRun({
                  text: this.target,
                  bold: true,
                  break: 1,
                }),
                new TextRun({
                  text: 'Hallo Welt',
                  bold: true,
                }),
                new ExternalHyperlink({
                  children: [
                    new TextRun({
                      text: 'This is an external link!',
                      style: 'Hyperlink',
                    }),
                  ],
                  link: 'https://docx.js.org',
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, 'Datenschutzerklärung.docx');
    });
  }
}
