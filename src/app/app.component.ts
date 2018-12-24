import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  PostList = [
    new Post("First post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lacus lorem, eget tristique urna vehicula sit amet. Integer vestibulum finibus scelerisque. Aenean cursus rutrum velit, nec fermentum metus malesuada euismod. Aliquam consequat risus vitae risus interdum, non sodales ante gravida. In vulputate, mauris a maximus varius, lorem turpis elementum augue, et viverra purus ante id lacus. Donec suscipit condimentum nibh eget pulvinar. Praesent ultricies diam eget nibh pellentesque vulputate. Pellentesque at nisi semper nisi pharetra ornare."),
    new Post("2nd post", "Vestibulum risus est, suscipit sit amet urna tempus, ultrices rutrum lectus. Proin bibendum lorem justo, id mattis dui vestibulum non. Nulla tincidunt magna non dolor interdum bibendum. Nullam id pellentesque libero, vel suscipit orci. Donec quis libero sollicitudin, tristique diam sed, rutrum arcu. Sed interdum eget nunc ut interdum. Nulla facilisi. Nullam eu enim odio. Donec auctor tortor ut odio fringilla aliquet. Phasellus sed viverra justo. Maecenas in maximus nulla, nec pharetra tortor."),
    new Post("3rd post", "Mauris nec mi sollicitudin, blandit elit sit amet, aliquet mauris. Quisque tristique blandit ipsum, ut efficitur dolor placerat eget. Duis a erat erat. Morbi efficitur consectetur mauris imperdiet malesuada. Proin a tincidunt neque. Nulla porttitor vestibulum eros, in hendrerit massa viverra eget. Nulla non scelerisque odio. In ullamcorper imperdiet congue. Suspendisse venenatis dictum urna, eget auctor ante efficitur venenatis. Morbi sed ligula at risus vulputate pharetra. Nam vehicula vehicula accumsan. Mauris malesuada, purus et lacinia elementum, felis elit hendrerit mi, ac pharetra neque dui in augue. Curabitur ultrices libero lectus, in ornare ipsum ornare id. Donec sagittis ante id mollis cursus. Sed fermentum suscipit nisl, eleifend egestas leo interdum non. Nunc dapibus ex et dolor viverra tincidunt."),
    new Post("4th post", "Pellentesque vel auctor odio. Maecenas vulputate fringilla quam sed tristique. Donec facilisis condimentum nunc at mattis. Vestibulum venenatis ac leo a vulputate. In posuere fermentum justo sed porta. Morbi sit amet nulla libero. Nulla molestie semper ante, vitae dictum sem sodales eu. Morbi mauris lacus, finibus quis finibus quis, feugiat a dolor. Morbi tincidunt cursus facilisis. Suspendisse condimentum sagittis odio vel cursus. Quisque ac fringilla risus, vel convallis ipsum."),
    new Post("First post", "Fusce nulla elit, sodales a lobortis quis, tincidunt sit amet purus. Aliquam a nulla eu urna faucibus vehicula in a nulla. Nullam ut quam vitae elit aliquet iaculis. Nam ornare lacus non tellus sollicitudin rhoncus. Cras fermentum tincidunt leo eget tristique. Curabitur augue orci, rutrum sit amet augue pulvinar, commodo auctor quam. Morbi sodales, tellus sollicitudin pulvinar egestas, leo leo commodo libero, gravida laoreet velit eros quis velit.")
  ];

}
