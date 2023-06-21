import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  @Input() footerText: string = ''; // Parent component'ten gelen veriyi almak için @Input() decorator'ını kullanıyoruz.
  @Output() onFooterTextChange = new EventEmitter<string>(); // Parent component'e veri göndermek için @Output() decorator'ını kullanıyoruz.

  ngOnInit(): void // Component ilk kez ekrana render edildiğinde çalışan fonksiyondur.
  {
      console.log('Footer component ngOnInit function works');
  }

  ngOnDestroy(): void // Component ekrandan kaldırıldığında çalışan fonksiyondur.
  {
      console.log('Footer component is being destroyed');
  }

  handleFooterTextChange(value: string) {
    this.onFooterTextChange.emit(value);
  }
}
