import { Component } from "@angular/core";
import { Logger } from "./logger.service";

@Component({
    selector: 'hello-world',
    templateUrl: './hello-world.component.html',
    styles: [`h2, p {font-family: sans-serif;}`]
})

export class HelloWorldComponent {
    judul = "Hello Angular."
    nama_gambar = "assets/angular.png"
    active = false
    count = 0
    
    hello(name: any) {
        alert(`Halo ${name.toUpperCase()}`)
    }
    
    constructor(private logger: Logger) {

    }

    onEditClick() {
        this.active = !this.active
    }
    
    increment() {
        this.logger.writeCount(this.count)
        this.count++
    }
}