# Art gallery website (expected this project to be easy, but oops 😅):
###  What I've learned:
1. grid-template-area
2. <a href="https://youtu.be/ls_Eue1xUtY?si=bo_qaZAS1vILt8YI">Leaflet</a> (👈click):
    - <a href="https://leafletjs.com/examples/quick-start/">Basic setup / installation</a> (👈click)
    - <a href="https://leaflet-extras.github.io/leaflet-providers/preview/">Tilelayer<a> (👈click)
3. mix-blend-mode
4. inset
5. isolation
6. margin-block / padding-block 
7. Questions that should be answered
#### 1 grid-template-area
 - <a href="https://www.youtube.com/watch?v=tPosqmwIx0w">Grid Areas by THE Net Ninja</a> - An amazing tutorial to learn how to work and build grid structures with grid template areas.
#### 2. <a href="https://youtu.be/ls_Eue1xUtY?si=bo_qaZAS1vILt8YI">Leaflet</a>
Step by step guide:
  1. Add CDN (css and js Leaflet) links to html
  ~~~
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  ....
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  ~~~
  2. Initialize map adding based on id selector and layer:
  ~~~
  var map = L.map("map").setView([38.56290048688619, 68.74812838794165], 18)
  var layer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)
  var layerContainer = layer.getContainer();
  ~~~
  3. Using ``getContainer()`` method we can add class to layer for custom styling:
  ~~~
  var layerContainer = layer.getContainer();
  layerContainer.classList.add('layerContainer')
  ~~~
  4. Add your custom-icon for marker:
  ~~~
  var greenIcon = L.icon({
    iconUrl: "assets/icons/icon-location.svg",
    iconSize: [56, 78]
  })
  ~~~
  5. Identify marker's location and add your custom-icon to it:
  ~~~
  let marker = L.marker([38.56290048688619, 68.74812838794165], {
    icon: greenIcon,
  }).addTo(map)
  ~~~
#### 3. <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode'>mix-blend-mode:</a> (👈click)
CSS property sets how an element's content should blend with the content of the element's parent and the element's background. (i.e. sets element contents' color relative to its or parents background)<br>
- ``mix-blend-mode:`` - The final color is the top color, regardless of what the bottom color is.
- ``mix-blend-mode: multiply;`` - keeps alive darker colors
- ``mix-blend-mode: screen;`` - keeps alive lighter colors
- ``mix-blend-mode: hard-light;`` - keeps alive lighter colors, without causing extra light color (as I see🙄) 
- ``mix-blend-mode: difference;`` - The final color is the result of subtracting the darker of the two colors from the lighter one. A black layer has no effect, while a white layer inverts the other layer's color (meaning if both background and foreground are set to black it won't work, but if both are set to white or have diiferent colors it will work):
~~~
.container {
  background-color: black;
}

.text {
  color: black;
  mix-blend-mode: difference; // it will not be working
}
~~~


#### 4. inset: _ ;
is a shrothand of ``top: _ ; right:_ ; bottom:_ ; left: _ ;`` altogether.

#### 5. <a href="https://youtu.be/TAA89nkEuhw?si=mQVQUPJLnUiRxxA1">isolation</a>: (👈click)
``isolation: isolate;`` - CSS property determines whether an element must create a new stacking context.
#### 6. margin-block / padding-block:
if padding-inline is for horizontal padding, padding-block is for vertical padding.
#### 7. Questions that should be answered:
  1. What is the difference between ``justify-content`` and ``align-content`` in CSS and what is meant by main and cross axis?
  2. How to use grid-template-areas?