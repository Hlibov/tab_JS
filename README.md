# tab_JS
***simple tabs on pure JS***

### such variables are needed here:
```js
let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');
```

### to define DOM elements, put your classes according to such markup as:

```html
    <div class="info" >
      <div class="info-header">
        <div class="info-header-tab">Treatment</div>
        <div class="info-header-tab">Relaxation</div>
        <div class="info-header-tab">Nature</div>
        <div class="info-header-tab">Yoga</div>
      </div>
      <div class="info-tabcontent">
        //content
      </div>
      <div class="info-tabcontent">
        //content
      </div>
      <div class="info-tabcontent">
        //content
      </div>
      <div class="info-tabcontent">
        //content
      </div>
    </div>
```
## very important! 
***on class ".hide" give property   <i>display: none;</i>***  <br>
***on class ".show" give property   <i>display: block;</i>***
