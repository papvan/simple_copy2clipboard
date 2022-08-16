# Simple Copy2Clipboard

Simple copy to clipboard package

### Installing

To install the package use command:

```
npm i papvan/simple_copy2clipboard
```

### Usage
Add styles and scripts to your HTML pages
```html
<link rel="stylesheet" type="text/css" href="node_modules/simple_copy2clipboard/styles.css">
<script src="node_modules/simple_copy2clipboard/copy2clipboard.js"></script>
```

Then add class `copy2clipboard` to elements where you need to show a tooltip.

### Example

```html
<div>
    <p class="copy2clipboard">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
      alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
      hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
      chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over
      200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
      reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
      non-characteristic words etc.
    </p>
  </div>
```